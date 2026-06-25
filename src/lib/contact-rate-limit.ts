import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const inMemoryStore = new Map<string, { count: number; resetAt: number }>();

const IN_MEMORY_WINDOW_MS = 60_000;
const IN_MEMORY_MAX = 5;

function inMemoryRateLimit(key: string, max: number) {
  const now = Date.now();
  const entry = inMemoryStore.get(key);

  if (!entry || now > entry.resetAt) {
    inMemoryStore.set(key, { count: 1, resetAt: now + IN_MEMORY_WINDOW_MS });
    return { success: true, remaining: max - 1 };
  }

  entry.count += 1;
  return {
    success: entry.count <= max,
    remaining: Math.max(0, max - entry.count),
  };
}

function getUpstashLimiter(requests: number, window: `${number} ${"s" | "m" | "h" | "d"}`) {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    return null;
  }

  const redis = new Redis({ url, token });
  return new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(requests, window),
    prefix: "kidswow-contact",
  });
}

let ipLimiter: Ratelimit | null | undefined;
let emailLimiter: Ratelimit | null | undefined;

function getIpLimiter() {
  if (ipLimiter === undefined) {
    ipLimiter = getUpstashLimiter(5, "1 m");
  }
  return ipLimiter;
}

function getEmailLimiter() {
  if (emailLimiter === undefined) {
    emailLimiter = getUpstashLimiter(3, "1 h");
  }
  return emailLimiter;
}

export async function checkContactRateLimits(ip: string, email: string) {
  const normalizedEmail = email.trim().toLowerCase();
  const ipUpstash = getIpLimiter();
  const emailUpstash = getEmailLimiter();

  if (ipUpstash && emailUpstash) {
    const [ipResult, emailResult] = await Promise.all([
      ipUpstash.limit(`ip:${ip}`),
      emailUpstash.limit(`email:${normalizedEmail}`),
    ]);

    if (!ipResult.success) {
      return {
        allowed: false as const,
        message: "Too many submissions. Please try again in a minute.",
      };
    }

    if (!emailResult.success) {
      return {
        allowed: false as const,
        message:
          "Too many submissions from this email address. Please try again later.",
      };
    }

    return { allowed: true as const };
  }

  const ipResult = inMemoryRateLimit(`ip:${ip}`, IN_MEMORY_MAX);
  if (!ipResult.success) {
    return {
      allowed: false as const,
      message: "Too many submissions. Please try again in a minute.",
    };
  }

  const emailResult = inMemoryRateLimit(`email:${normalizedEmail}`, 3);
  if (!emailResult.success) {
    return {
      allowed: false as const,
      message:
        "Too many submissions from this email address. Please try again later.",
    };
  }

  return { allowed: true as const };
}

export function isUpstashConfigured() {
  return Boolean(
    process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN,
  );
}
