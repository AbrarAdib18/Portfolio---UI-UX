import { mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const rootDir = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(rootDir, "src", "assets", "optimized");

const jobs = [
  { src: "My Image/b5f5b172-5a14-4c54-99ce-877aa41800b8.png", out: "profile.webp", width: 900, quality: 82 },
  { src: "Project/Aurion.jpg", out: "project-aurion.webp", width: 1400, quality: 78 },
  { src: "Project/featherflow.jpg", out: "project-featherflow.webp", width: 1400, quality: 78 },
  { src: "Project/Taxease.png", out: "project-taxease.webp", width: 1400, quality: 78 },
  { src: "Project/Daak.jpg", out: "project-daak.webp", width: 1400, quality: 78 },
  { src: "Project/Shishu care.png", out: "project-shishucare.webp", width: 1400, quality: 78 },
  { src: "Logo/UIU.webp", out: "logo-uiu.webp", width: 400, quality: 88 },
  { src: "Logo/umrt.png", out: "logo-umrt.webp", width: 400, quality: 88 },
  { src: "Logo/aries.png", out: "logo-aries.webp", width: 400, quality: 88 },
  // CAIR's artwork is white line-art on a transparent background, so it
  // disappears on the white circular badges used in the Organizations
  // section. Invert RGB only (keep alpha) to get dark line-art on white.
  { src: "Logo/cair.png", out: "logo-cair.webp", width: 400, quality: 88, invert: true },
  { src: "Logo/cdip.png", out: "logo-cdip.webp", width: 400, quality: 88 },
  { src: "Logo/drs.png", out: "logo-dsr.webp", width: 400, quality: 88 },
  { src: "Logo/fiverr-logo-png_seeklogo-491260.png", out: "logo-fiverr.webp", width: 400, quality: 88 },
  { src: "Logo/youtube.png", out: "logo-youtube.webp", width: 400, quality: 88 },
  { src: "Logo/rnar.png", out: "logo-rnar.webp", width: 400, quality: 88 },
];

async function run() {
  await mkdir(outDir, { recursive: true });

  for (const job of jobs) {
    const srcPath = join(rootDir, job.src);
    const outPath = join(outDir, job.out);
    let pipeline = sharp(srcPath).resize({ width: job.width, withoutEnlargement: true });
    if (job.invert) {
      pipeline = pipeline.negate({ alpha: false });
    }
    await pipeline.webp({ quality: job.quality }).toFile(outPath);
    console.log(`optimized: ${job.src} -> src/assets/optimized/${job.out}`);
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
