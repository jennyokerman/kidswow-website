/**
 * Generate lightweight WebP thumbnails from ESL worksheet PDFs (first page).
 * Usage: node scripts/generate-worksheet-thumbnails.mjs
 */
import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { createCanvas } from "@napi-rs/canvas";
import sharp from "sharp";
const ROOT = path.resolve(import.meta.dirname, "..");
const BOOKS = ["book-1", "book-2"];
const THUMB_WIDTH = 480;
const WEBP_QUALITY = 72;

const pdfjsPath = path.join(
  ROOT,
  "node_modules",
  "pdfjs-dist",
  "legacy",
  "build",
  "pdf.mjs",
);
const workerPath = path.join(
  ROOT,
  "node_modules",
  "pdfjs-dist",
  "legacy",
  "build",
  "pdf.worker.mjs",
);

const pdfjs = await import(pathToFileURL(pdfjsPath).href);
pdfjs.GlobalWorkerOptions.workerSrc = pathToFileURL(workerPath).href;

class NodeCanvasFactory {
  create(width, height) {
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");
    return { canvas, context };
  }

  reset(canvasAndContext, width, height) {
    canvasAndContext.canvas.width = width;
    canvasAndContext.canvas.height = height;
  }

  destroy(canvasAndContext) {
    canvasAndContext.canvas.width = 0;
    canvasAndContext.canvas.height = 0;
  }
}

async function renderPdfThumbnail(pdfPath, outPath) {
  const data = new Uint8Array(await fs.readFile(pdfPath));
  const canvasFactory = new NodeCanvasFactory();

  const pdf = await pdfjs.getDocument({
    data,
    canvasFactory,
    disableFontFace: true,
    useSystemFonts: true,
  }).promise;

  const page = await pdf.getPage(1);
  const unscaled = page.getViewport({ scale: 1 });
  const scale = THUMB_WIDTH / unscaled.width;
  const viewport = page.getViewport({ scale });

  const canvasAndContext = canvasFactory.create(
    Math.ceil(viewport.width),
    Math.ceil(viewport.height),
  );

  await page.render({
    canvasContext: canvasAndContext.context,
    viewport,
    canvas: canvasAndContext.canvas,
  }).promise;

  const pngBuffer = canvasAndContext.canvas.toBuffer("image/png");
  await sharp(pngBuffer)
    .webp({ quality: WEBP_QUALITY })
    .toFile(outPath);

  canvasFactory.destroy(canvasAndContext);
  if (typeof pdf.destroy === "function") {
    await pdf.destroy();
  } else if (typeof pdf.cleanup === "function") {
    await pdf.cleanup();
  }

  const stat = await fs.stat(outPath);
  return stat.size;
}

async function main() {
  let count = 0;

  for (const book of BOOKS) {
    const dir = path.join(ROOT, "public", "resources", "english", book);
    const thumbsDir = path.join(dir, "thumbs");
    await fs.mkdir(thumbsDir, { recursive: true });

    const files = (await fs.readdir(dir)).filter((f) => f.endsWith(".pdf"));

    for (const file of files) {
      const pdfPath = path.join(dir, file);
      const thumbName = file.replace(/\.pdf$/i, ".webp");
      const outPath = path.join(thumbsDir, thumbName);

      process.stdout.write(`Rendering ${book}/${file}... `);
      try {
        const bytes = await renderPdfThumbnail(pdfPath, outPath);
        console.log(`ok (${Math.round(bytes / 1024)} KB)`);
        count += 1;
      } catch (err) {
        console.log("FAILED");
        console.error(err);
      }
    }
  }

  console.log(`\nDone. Generated ${count} thumbnails.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
