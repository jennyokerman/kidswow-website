export const SITE = {
  name: "KidsWow",
  url: "https://kidswow.com",
  mission:
    "Inspiring kids to love learning and develop competence in marketable skills.",
  founder: "Warren Okerman",
} as const;

export const NAV_LINKS = {
  programs: [
    { label: "KidsWow STEM", href: "/programs/stem" },
    { label: "Physics & Creation", href: "/programs/physics-creation" },
    { label: "Finance Foundations", href: "/programs/finance" },
  ],
  about: [
    { label: "KidsWow Method", href: "/about/method" },
    { label: "The KidsWow Story", href: "/about/story" },
  ],
  resources: [{ label: "KidsWow English", href: "/resources/english" }],
} as const;
