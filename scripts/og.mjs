// Génère l'image de partage (Open Graph) public/og.jpg à partir de la DA : node scripts/og.mjs
import sharp from 'sharp';

const beige = { r: 221, g: 212, b: 195 };
const card = await sharp('scripts/da-source.png')
  .extract({ left: 4, top: 4, width: 938, height: 618 }) // retire la bordure grise
  .resize({ height: 630 })
  .toBuffer();
const { width } = await sharp(card).metadata();
const pad = Math.max(0, Math.round((1200 - width) / 2));

await sharp(card)
  .extend({ left: pad, right: 1200 - width - pad, background: beige })
  .flatten({ background: beige })
  .jpeg({ quality: 88 })
  .toFile('public/og.jpg');
console.log('public/og.jpg généré');
