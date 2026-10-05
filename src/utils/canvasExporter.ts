import { AdCreativeData, AdFormat } from '../types/ad';
import { FORMAT_SPECS } from '../data/adPresets';

export async function renderAdToCanvas(
  canvas: HTMLCanvasElement,
  data: AdCreativeData,
  format: AdFormat,
  showSafeZones = false,
  showGrid = false
): Promise<void> {
  const spec = FORMAT_SPECS.find(s => s.format === format) || FORMAT_SPECS[0];
  const width = spec.pixelWidth;
  const height = spec.pixelHeight;

  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Background base
  ctx.fillStyle = '#0F120E';
  ctx.fillRect(0, 0, width, height);

  // Load and draw image
  const img = new Image();
  img.crossOrigin = 'anonymous';

  await new Promise<void>((resolve) => {
    img.onload = () => {
      // Draw image with cover mode
      const imgRatio = img.width / img.height;
      const targetRatio = width / height;
      let drawW: number;
      let drawH: number;
      let offsetX = 0;
      let offsetY = 0;

      if (imgRatio > targetRatio) {
        drawH = height;
        drawW = height * imgRatio;
        offsetX = (width - drawW) / 2;
      } else {
        drawW = width;
        drawH = width / imgRatio;
        offsetY = (height - drawH) / 2;
      }

      ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
      resolve();
    };
    img.onerror = () => {
      // Fallback nice styled canvas background if image fails to load
      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      bgGrad.addColorStop(0, '#263422');
      bgGrad.addColorStop(1, '#111A0F');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);
      resolve();
    };
    img.src = data.imageUrl;
  });

  // Render Overlays according to format & style
  const isStory = format === '9:16';
  const isPortrait = format === '4:5';

  // 1. Cinematic Gradient Shadows (Ensures text readability without muddying the model's face)
  // Top Vignette for Logo & Tagline
  const topGrad = ctx.createLinearGradient(0, 0, 0, isStory ? 380 : 260);
  topGrad.addColorStop(0, 'rgba(12, 17, 10, 0.88)');
  topGrad.addColorStop(0.6, 'rgba(12, 17, 10, 0.45)');
  topGrad.addColorStop(1, 'rgba(12, 17, 10, 0)');
  ctx.fillStyle = topGrad;
  ctx.fillRect(0, 0, width, isStory ? 380 : 260);

  // Bottom Gradient for Headline, Pricing, and CTA
  const bottomHeight = isStory ? 750 : (isPortrait ? 600 : 520);
  const bottomGrad = ctx.createLinearGradient(0, height - bottomHeight, 0, height);
  bottomGrad.addColorStop(0, 'rgba(15, 20, 14, 0)');
  bottomGrad.addColorStop(0.35, 'rgba(15, 20, 14, 0.75)');
  bottomGrad.addColorStop(0.7, 'rgba(15, 20, 14, 0.94)');
  bottomGrad.addColorStop(1, 'rgba(12, 16, 11, 0.98)');
  ctx.fillStyle = bottomGrad;
  ctx.fillRect(0, height - bottomHeight, width, bottomHeight);

  // 2. Editorial Top Header: Brand Name + Red Accent Dot + City Tag
  const topPadY = isStory ? 280 : 70; // Safe zone awareness for Stories/Reels
  const padX = 70;

  // Small brand sub-label
  ctx.fillStyle = '#CBD5C0';
  ctx.font = '600 24px "Plus Jakarta Sans", sans-serif';
  ctx.letterSpacing = '5px';
  ctx.fillText(data.tagline.toUpperCase(), padX, topPadY);

  // Brand Name with signature red accent dot
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '900 52px "Plus Jakarta Sans", "Cabinet Grotesk", sans-serif';
  ctx.letterSpacing = '2px';
  ctx.fillText(data.brandName.toUpperCase(), padX, topPadY + 55);

  // Draw brand accent dot (Crimson Red)
  const brandWidth = ctx.measureText(data.brandName.toUpperCase()).width;
  ctx.fillStyle = data.accentColor || '#D32F2F';
  ctx.beginPath();
  ctx.arc(padX + brandWidth + 16, topPadY + 40, 7, 0, Math.PI * 2);
  ctx.fill();

  // Highlight Launch Badge (Top Right)
  if (data.highlightBadge) {
    const badgeText = data.highlightBadge.toUpperCase();
    ctx.font = '700 22px "Plus Jakarta Sans", sans-serif';
    ctx.letterSpacing = '1px';
    const badgeWidth = ctx.measureText(badgeText).width + 36;
    const badgeHeight = 42;
    const badgeX = width - padX - badgeWidth;
    const badgeY = topPadY + 12;

    // Badge background (Olive with Red edge)
    ctx.fillStyle = 'rgba(75, 94, 56, 0.95)';
    ctx.fillRect(badgeX, badgeY, badgeWidth, badgeHeight);

    // Left red accent stripe on badge
    ctx.fillStyle = data.accentColor || '#D32F2F';
    ctx.fillRect(badgeX, badgeY, 6, badgeHeight);

    // Badge text
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText(badgeText, badgeX + 22, badgeY + 28);
  }

  // 3. Bottom Content Block: Headline, Subheadline, Pricing, Guarantee & CTA
  const bottomContentY = height - (isStory ? 480 : 380);

  // Target Cities Kicker
  ctx.fillStyle = '#D32F2F';
  ctx.font = '800 24px "Plus Jakarta Sans", sans-serif';
  ctx.letterSpacing = '3px';
  ctx.fillText(`📍 ${data.cityTarget.toUpperCase()}`, padX, bottomContentY - 70);

  // Main Headline
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '900 68px "Plus Jakarta Sans", "Cabinet Grotesk", sans-serif';
  ctx.letterSpacing = '-0.5px';
  
  // Wrap or scale headline if too long
  const words = data.headline.split(' ');
  let line1 = '';
  let line2 = '';
  if (words.length > 3 && ctx.measureText(data.headline).width > width - (padX * 2)) {
    const mid = Math.ceil(words.length / 2);
    line1 = words.slice(0, mid).join(' ');
    line2 = words.slice(mid).join(' ');
    ctx.fillText(line1.toUpperCase(), padX, bottomContentY);
    ctx.fillText(line2.toUpperCase(), padX, bottomContentY + 70);
  } else {
    ctx.fillText(data.headline.toUpperCase(), padX, bottomContentY);
  }

  // Subheadline
  const subY = (line2 ? bottomContentY + 125 : bottomContentY + 58);
  ctx.fillStyle = '#E2E8F0';
  ctx.font = '500 28px "Plus Jakarta Sans", sans-serif';
  ctx.letterSpacing = '0.5px';
  ctx.fillText(data.subheadline, padX, subY);

  // 4. Price & Discount Bar
  const priceY = subY + 70;

  // Price box
  ctx.fillStyle = 'rgba(20, 46, 31, 0.95)'; // Deep Forest Green
  const priceBoxW = 420;
  const priceBoxH = 68;
  ctx.fillRect(padX, priceY - 48, priceBoxW, priceBoxH);

  // Border highlight
  ctx.strokeStyle = '#4B5E38';
  ctx.lineWidth = 2;
  ctx.strokeRect(padX, priceY - 48, priceBoxW, priceBoxH);

  // Current Price
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '800 36px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(data.pricePKR, padX + 20, priceY - 2);

  // Strikethrough Original Price
  ctx.fillStyle = '#94A3B8';
  ctx.font = '500 24px "Plus Jakarta Sans", sans-serif';
  const strikeText = data.originalPricePKR;
  const strikeX = padX + ctx.measureText(data.pricePKR).width + 45;
  ctx.fillText(strikeText, strikeX, priceY - 5);
  const strikeW = ctx.measureText(strikeText).width;
  ctx.strokeStyle = '#EF4444';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(strikeX - 2, priceY - 13);
  ctx.lineTo(strikeX + strikeW + 2, priceY - 13);
  ctx.stroke();

  // Discount Pill (Bright Red)
  if (data.discountText) {
    const discX = strikeX + strikeW + 25;
    ctx.fillStyle = '#D32F2F';
    ctx.fillRect(discX, priceY - 42, 120, 40);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '800 18px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(data.discountText, discX + 10, priceY - 16);
  }

  // 5. COD Trust Badge & Call to Action
  const footerY = priceY + 75;

  // COD & Delivery Guarantee
  ctx.fillStyle = '#A3E635'; // Lime / Fresh Green
  ctx.font = '700 24px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(`✓ ${data.codGuarantee}`, padX, footerY);

  // Bottom CTA Bar (Only if not a pure Story where swipe up is used, or in story safe zone)
  const ctaBtnY = height - (isStory ? 200 : 100);
  const btnWidth = width - (padX * 2);
  const btnHeight = 64;

  // CTA Button Gradient (Olive to Forest Green with Red Border)
  const btnGrad = ctx.createLinearGradient(padX, ctaBtnY, padX + btnWidth, ctaBtnY);
  btnGrad.addColorStop(0, '#D32F2F');
  btnGrad.addColorStop(1, '#991B1B');
  ctx.fillStyle = btnGrad;
  ctx.fillRect(padX, ctaBtnY, btnWidth, btnHeight);

  // Button text
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '800 26px "Plus Jakarta Sans", sans-serif';
  ctx.letterSpacing = '2px';
  const ctaWidth = ctx.measureText(data.callToAction.toUpperCase()).width;
  ctx.fillText(data.callToAction.toUpperCase(), padX + (btnWidth - ctaWidth) / 2, ctaBtnY + 41);

  // Optional: Safe Zone Overlays (Useful for preview testing)
  if (showSafeZones && isStory) {
    // Top 250px Meta Reels safe zone
    ctx.fillStyle = 'rgba(239, 68, 68, 0.22)';
    ctx.fillRect(0, 0, width, 250);
    ctx.fillStyle = '#EF4444';
    ctx.font = '700 22px sans-serif';
    ctx.fillText('⚠️ TOP SAFE ZONE (Keep free of text - covered by Instagram UI/Username)', 40, 140);

    // Bottom 250px Meta Reels safe zone
    ctx.fillStyle = 'rgba(239, 68, 68, 0.22)';
    ctx.fillRect(0, height - 250, width, 250);
    ctx.fillStyle = '#EF4444';
    ctx.font = '700 22px sans-serif';
    ctx.fillText('⚠️ BOTTOM SAFE ZONE (Keep free of critical text - covered by CTA/Audio)', 40, height - 120);
  }

  // Optional Rule of 20% Text Grid Guide
  if (showGrid) {
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 1;
    for (let c = 1; c < 5; c++) {
      ctx.beginPath();
      ctx.moveTo((width / 5) * c, 0);
      ctx.lineTo((width / 5) * c, height);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, (height / 5) * c);
      ctx.lineTo(width, (height / 5) * c);
      ctx.stroke();
    }
  }
}

export function downloadCanvasImage(canvas: HTMLCanvasElement, filename: string): void {
  const link = document.createElement('a');
  link.download = filename;
  link.href = canvas.toDataURL('image/jpeg', 0.95);
  link.click();
}
