// Extrait les dessins au trait de la DA (scripts/da-source.png) en PNG transparents : node scripts/lineart.mjs
import sharp from 'sharp';

const BG = 0.299 * 221 + 0.587 * 212 + 0.114 * 195; // luminance du fond beige
const crops = {
  'line-left': { left: 14, top: 243, width: 138, height: 368 },
  'line-right': { left: 671, top: 314, width: 266, height: 298 },
};

for (const [name, box] of Object.entries(crops)) {
  const { data, info } = await sharp('scripts/da-source.png')
    .extract(box)
    .resize({ width: box.width * 3, kernel: 'lanczos3' })
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const out = Buffer.alloc(info.width * info.height * 4);
  for (let i = 0, j = 0; i < data.length; i += 3, j += 4) {
    const px = j / 4;
    // Masque les restes du texte « D'ÉTAT » qui débordent dans le cadrage de droite.
    if (name === 'line-right' && px % info.width < 260 && px / info.width < 210) continue;
    const lum = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
    const a = Math.max(0, Math.min(1, ((BG - 12 - lum) / BG) * 1.7));
    out[j] = out[j + 1] = out[j + 2] = 26; // trait presque noir
    out[j + 3] = Math.round(a * 255);
  }
  await sharp(out, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(`public/img/${name}.png`);
  console.log(`public/img/${name}.png`, info.width, 'x', info.height);
}
