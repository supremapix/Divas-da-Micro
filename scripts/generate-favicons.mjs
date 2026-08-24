import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 1. Vector SVG favicon (Divas Butterfly Brand Emblem)
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#FFF0F5"/>
    </linearGradient>
    <linearGradient id="pinkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E86E93"/>
      <stop offset="100%" stop-color="#C23B64"/>
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#DFBD74"/>
      <stop offset="100%" stop-color="#B88A30"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#D4567D" flood-opacity="0.25"/>
    </filter>
  </defs>

  <!-- Background Rounded Shield / Tile -->
  <rect width="512" height="512" rx="128" fill="url(#bgGrad)"/>
  <rect width="504" height="504" x="4" y="4" rx="124" fill="none" stroke="url(#pinkGrad)" stroke-width="8" opacity="0.4"/>

  <!-- Main Butterfly Brand Mark -->
  <g filter="url(#glow)">
    <!-- Antennae -->
    <path d="M246 175 C205 100 180 120 175 130" stroke="#1F2937" stroke-width="9" stroke-linecap="round" fill="none"/>
    <path d="M266 175 C307 100 332 120 337 130" stroke="#1F2937" stroke-width="9" stroke-linecap="round" fill="none"/>
    <circle cx="173" cy="132" r="7" fill="url(#goldGrad)"/>
    <circle cx="339" cy="132" r="7" fill="url(#goldGrad)"/>

    <!-- Body -->
    <ellipse cx="256" cy="275" rx="16" ry="98" fill="#1F2937"/>
    <circle cx="256" cy="190" r="14" fill="#1F2937"/>

    <!-- Left Wing Upper & Lower -->
    <path d="M246 250 C105 75 30 200 80 325 C130 450 246 350 246 250 Z" fill="url(#pinkGrad)"/>
    <!-- Right Wing Upper & Lower -->
    <path d="M266 250 C407 75 482 200 432 325 C382 450 266 350 266 250 Z" fill="url(#pinkGrad)"/>

    <!-- Gold Accent Details on Wings -->
    <circle cx="155" cy="225" r="12" fill="url(#goldGrad)" opacity="0.9"/>
    <circle cx="357" cy="225" r="12" fill="url(#goldGrad)" opacity="0.9"/>
    <circle cx="130" cy="285" r="8" fill="#FFFFFF" opacity="0.6"/>
    <circle cx="382" cy="285" r="8" fill="#FFFFFF" opacity="0.6"/>
    <circle cx="190" cy="330" r="7" fill="url(#goldGrad)" opacity="0.9"/>
    <circle cx="322" cy="330" r="7" fill="url(#goldGrad)" opacity="0.9"/>
  </g>
</svg>`;

// 2. Monochrome Safari Pinned Tab SVG
const safariSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <path d="M246 175 C205 100 180 120 175 130" stroke="#000" stroke-width="12" stroke-linecap="round" fill="none"/>
  <path d="M266 175 C307 100 332 120 337 130" stroke="#000" stroke-width="12" stroke-linecap="round" fill="none"/>
  <ellipse cx="256" cy="275" rx="18" ry="105" fill="#000"/>
  <path d="M246 250 C105 75 30 200 80 325 C130 450 246 350 246 250 Z" fill="#000"/>
  <path d="M266 250 C407 75 482 200 432 325 C382 450 266 350 266 250 Z" fill="#000"/>
</svg>`;

fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgContent, 'utf-8');
fs.writeFileSync(path.join(publicDir, 'safari-pinned-tab.svg'), safariSvg, 'utf-8');

// 3. Manifest & Browserconfig
const manifest = {
  name: "Divas da Micro - Correção de Micropigmentação 60+",
  short_name: "Divas da Micro",
  description: "Especialista em correção e neutralização de micropigmentação de sobrancelhas, olhos e lábios para mulheres 60+ em Curitiba.",
  icons: [
    {
      src: "/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png",
      purpose: "any maskable"
    },
    {
      src: "/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "any maskable"
    }
  ],
  theme_color: "#D4567D",
  background_color: "#FFFFFF",
  display: "standalone",
  start_url: "/",
  orientation: "portrait"
};

fs.writeFileSync(path.join(publicDir, 'site.webmanifest'), JSON.stringify(manifest, null, 2), 'utf-8');
fs.writeFileSync(path.join(publicDir, 'manifest.json'), JSON.stringify(manifest, null, 2), 'utf-8');

const browserConfig = `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
    <msapplication>
        <tile>
            <square150x150logo src="/mstile-150x150.png"/>
            <TileColor>#D4567D</TileColor>
        </tile>
    </msapplication>
</browserconfig>`;

fs.writeFileSync(path.join(publicDir, 'browserconfig.xml'), browserConfig, 'utf-8');

// Render PNGs
async function generatePngs() {
  const svgBuffer = Buffer.from(svgContent);

  // 16x16
  await sharp(svgBuffer).resize(16, 16).png().toFile(path.join(publicDir, 'favicon-16x16.png'));
  // 32x32
  await sharp(svgBuffer).resize(32, 32).png().toFile(path.join(publicDir, 'favicon-32x32.png'));
  // 48x48
  await sharp(svgBuffer).resize(48, 48).png().toFile(path.join(publicDir, 'favicon-48x48.png'));
  // apple touch icons
  await sharp(svgBuffer).resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon.png'));
  await sharp(svgBuffer).resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon-180x180.png'));
  await sharp(svgBuffer).resize(152, 152).png().toFile(path.join(publicDir, 'apple-touch-icon-152x152.png'));
  // android chrome
  await sharp(svgBuffer).resize(192, 192).png().toFile(path.join(publicDir, 'android-chrome-192x192.png'));
  await sharp(svgBuffer).resize(512, 512).png().toFile(path.join(publicDir, 'android-chrome-512x512.png'));
  // mstile
  await sharp(svgBuffer).resize(150, 150).png().toFile(path.join(publicDir, 'mstile-150x150.png'));
  // standard root icon.png
  await sharp(svgBuffer).resize(512, 512).png().toFile(path.join(publicDir, 'icon.png'));

  // Create favicon.ico (multi-layer ICO with 16, 32, 48px)
  // Sharp can output 32x32 png saved as favicon.ico or raw png
  const icoBuffer = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);

  console.log('All RealFaviconGenerator assets created in /public successfully!');
}

generatePngs().catch(console.error);
