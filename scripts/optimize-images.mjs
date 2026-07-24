import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");

/** @type {Record<string, number>} max width in pixels */
const MAX_WIDTH = {
  hero: 1400,
  large: 1200,
  medium: 900,
  small: 600,
};

const IMAGES = {
  hero: [
    "public/hero.jpg",
    "Kidswowpics1/STEMpage/hero1.jpg",
  ],
  large: [
    "Kidswowpics1/KidsWow Home/homecta1.jpg",
    "Kidswowpics1/happytogether3.jpg",
    "Kidswowpics1/KidswowMethod/airhockeykids.jpg",
  ],
  medium: [
    "Kidswowpics1/STEMpage/dadteaching4.png",
    "Kidswowpics1/STEMpage/dadteaching6.png",
    "Kidswowpics1/STEMpage/kidswithrobots.png",
    "Kidswowpics1/STEMpage/kidswowstory3.jpg",
    "Kidswowpics1/KidsWow Home/boredgirl1.png",
    "Kidswowpics1/KidsWow Home/kidsfreerunning.png",
    "Kidswowpics1/KidswowMethod/dadmagnets2.png",
    "Kidswowpics1/KidswowMethod/happymiddleschoolers.png",
    "Kidswowpics1/KidsWow Home/highschoolstem.png",
    "Kidswowpics1/KidsWow Home/kidsfriends.png",
    "Kidswowpics1/KidsWow Home/kidsplaying1.jpg",
    "Kidswowpics1/KidsWow Home/kidswowinspiration1.png",
    "Kidswowpics1/KidsWow Home/kidswowinspiration2.png",
    "Kidswowpics1/KidsWow Home/kidswowinspiration3.png",
    "Kidswowpics1/KidsWow Story/kidsfromjapan.jpg",
    "Kidswowpics1/KidsWow Story/kidswowstorycoding.jpg",
    "Kidswowpics1/KidsWow Story/WarrenJapan.jpg",
    "Kidswowpics1/cutekid.png",
    "Kidswowpics1/KidswowMethod/girlwithmagnet.png",
    "public/about.jpg",
    "public/story/founder.jpg",
    "public/programs/finance.png",
    "public/programs/physics-creation.png",
    "public/programs/stem.png",
  ],
  small: ["public/color-lightbulb.png", "public/story/warren-profile1.png"],
};

async function fileSize(filePath) {
  const stat = await fs.stat(filePath);
  return stat.size;
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

async function hasTransparency(filePath) {
  const meta = await sharp(filePath).metadata();
  if (!meta.hasAlpha) return false;

  const { data, info } = await sharp(filePath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const channels = info.channels;
  const step = Math.max(4, Math.floor(data.length / (channels * 5000)));

  for (let i = channels - 1; i < data.length; i += channels * step) {
    if (data[i] < 250) return true;
  }

  return false;
}

async function writeOptimized(filePath, buffer) {
  const tempPath = `${filePath}.tmp`;
  await fs.writeFile(tempPath, buffer);
  await fs.rename(tempPath, filePath);
}

async function optimizeJpeg(filePath, maxWidth) {
  const before = await fileSize(filePath);
  const pipeline = sharp(filePath).rotate();
  const meta = await pipeline.metadata();
  const resize =
    meta.width && meta.width > maxWidth
      ? { width: maxWidth, withoutEnlargement: true }
      : null;

  let image = resize ? pipeline.resize(resize) : pipeline;
  const buffer = await image
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();

  await writeOptimized(filePath, buffer);
  const after = buffer.length;
  return { before, after, converted: false };
}

async function optimizePng(filePath, maxWidth) {
  const before = await fileSize(filePath);
  const transparent = await hasTransparency(filePath);

  if (!transparent && before > 400_000) {
    const jpgPath = filePath.replace(/\.png$/i, ".jpg");
    const pipeline = sharp(filePath).rotate();
    const meta = await pipeline.metadata();
    const resize =
      meta.width && meta.width > maxWidth
        ? { width: maxWidth, withoutEnlargement: true }
        : null;

    let image = resize ? pipeline.resize(resize) : pipeline;
    const buffer = await image.jpeg({ quality: 82, mozjpeg: true }).toBuffer();
    await writeOptimized(jpgPath, buffer);
    await fs.unlink(filePath);
    return {
      before,
      after: buffer.length,
      converted: true,
      from: filePath,
      to: jpgPath,
    };
  }

  const pipeline = sharp(filePath).rotate();
  const meta = await pipeline.metadata();
  const resize =
    meta.width && meta.width > maxWidth
      ? { width: maxWidth, withoutEnlargement: true }
      : null;

  let image = resize ? pipeline.resize(resize) : pipeline;
  const buffer = await image
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toBuffer();

  await writeOptimized(filePath, buffer);
  return { before, after: buffer.length, converted: false };
}

async function optimizeImage(relativePath, tier) {
  const filePath = path.join(ROOT, relativePath);

  try {
    await fs.access(filePath);
  } catch {
    console.log(`SKIP (missing): ${relativePath}`);
    return null;
  }

  const maxWidth = MAX_WIDTH[tier];
  const ext = path.extname(filePath).toLowerCase();
  const result =
    ext === ".png"
      ? await optimizePng(filePath, maxWidth)
      : await optimizeJpeg(filePath, maxWidth);

  const label = result.converted
    ? `${relativePath} -> ${path.relative(ROOT, path.join(ROOT, result.to))}`
    : relativePath;

  console.log(
    `OK  ${label}: ${formatBytes(result.before)} -> ${formatBytes(result.after)}`,
  );

  return result;
}

const conversions = [];

for (const [tier, files] of Object.entries(IMAGES)) {
  for (const file of files) {
    const result = await optimizeImage(file, tier);
    if (result?.converted) conversions.push(result);
  }
}

if (conversions.length > 0) {
  console.log("\nPNG -> JPG conversions (update imports if needed):");
  for (const { from, to } of conversions) {
    console.log(`  ${from} -> ${to}`);
  }
}
