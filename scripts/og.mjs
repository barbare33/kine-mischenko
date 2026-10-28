// Génère l'image de partage (Open Graph) public/og.jpg : node scripts/og.mjs
import sharp from 'sharp';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#faf7f2"/>
  <rect x="0" y="0" width="16" height="630" fill="#2e4a45"/>
  <text x="96" y="200" font-family="Georgia, serif" font-size="26" letter-spacing="6" fill="#a8875a">MASSEUR-KINÉSITHÉRAPEUTE D.E. · PARIS 16</text>
  <text x="96" y="320" font-family="Georgia, serif" font-size="92" fill="#1d2626">Anastasia Mischenko</text>
  <rect x="96" y="362" width="64" height="2" fill="#a8875a"/>
  <text x="96" y="440" font-family="Georgia, serif" font-style="italic" font-size="40" fill="#2e4a45">Kiné du sport · Rééducation post-opératoire · Dos</text>
  <text x="96" y="540" font-family="Arial, sans-serif" font-size="28" fill="#4a5555">51 bd de Beauséjour, 75016 Paris · Métro Ranelagh</text>
</svg>`;

await sharp(Buffer.from(svg)).jpeg({ quality: 88 }).toFile('public/og.jpg');
console.log('public/og.jpg généré');
