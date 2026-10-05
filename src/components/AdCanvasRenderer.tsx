import React, { useEffect, useRef, useState } from 'react';
import { AdCreativeData, AdFormat } from '../types/ad';
import { renderAdToCanvas, downloadCanvasImage } from '../utils/canvasExporter';
import { FORMAT_SPECS } from '../data/adPresets';
import { Eye, Download, ShieldCheck, Grid, RefreshCw, ZoomIn, CheckCircle2 } from 'lucide-react';

interface AdCanvasRendererProps {
  creative: AdCreativeData;
  format: AdFormat;
  onFormatChange: (format: AdFormat) => void;
  onExportDone?: () => void;
}

export const AdCanvasRenderer: React.FC<AdCanvasRendererProps> = ({
  creative,
  format,
  onFormatChange,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [showSafeZones, setShowSafeZones] = useState<boolean>(false);
  const [showGrid, setShowGrid] = useState<boolean>(false);
  const [isRendering, setIsRendering] = useState<boolean>(false);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  const activeSpec = FORMAT_SPECS.find(s => s.format === format) || FORMAT_SPECS[0];

  useEffect(() => {
    if (!canvasRef.current) return;
    setIsRendering(true);
    renderAdToCanvas(canvasRef.current, creative, format, showSafeZones, showGrid)
      .then(() => setIsRendering(false))
      .catch((err) => {
        console.error('Canvas render error:', err);
        setIsRendering(false);
      });
  }, [creative, format, showSafeZones, showGrid]);

  const handleDownload = () => {
    if (!canvasRef.current) return;
    const cleanBrand = creative.brandName.toLowerCase().replace(/\s+/g, '_');
    const filename = `${cleanBrand}_meta_ad_${format.replace(':', 'x')}_${Date.now()}.jpg`;
    downloadCanvasImage(canvasRef.current, filename);
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="flex flex-col h-full bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl">
      {/* Format & Tools Bar */}
      <div className="p-4 border-b border-neutral-800 bg-neutral-950/60 flex flex-wrap items-center justify-between gap-3">
        {/* Format Selector */}
        <div className="flex items-center gap-1.5 bg-neutral-900 p-1 rounded-xl border border-neutral-800">
          {FORMAT_SPECS.map(spec => (
            <button
              key={spec.format}
              onClick={() => onFormatChange(spec.format)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                format === spec.format
                  ? 'bg-[#4B5E38] text-white shadow-sm ring-1 ring-[#657E4C]'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
              }`}
            >
              <span>{spec.format}</span>
              <span className="hidden sm:inline text-[11px] opacity-70">
                ({spec.pixelWidth}×{spec.pixelHeight})
              </span>
            </button>
          ))}
        </div>

        {/* View Toggles */}
        <div className="flex items-center gap-2">
          {format === '9:16' && (
            <button
              onClick={() => setShowSafeZones(!showSafeZones)}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-medium border flex items-center gap-1.5 transition-all ${
                showSafeZones
                  ? 'bg-red-950/60 border-red-700 text-red-300'
                  : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
              }`}
              title="Show Meta Stories & Reels Safe Margins"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-red-400" />
              <span>Safe Zones</span>
            </button>
          )}

          <button
            onClick={() => setShowGrid(!showGrid)}
            className={`px-2.5 py-1.5 rounded-lg text-xs font-medium border flex items-center gap-1.5 transition-all ${
              showGrid
                ? 'bg-[#4B5E38]/40 border-[#657E4C] text-emerald-300'
                : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
            }`}
            title="Toggle Meta 20% Text Density Grid"
          >
            <Grid className="w-3.5 h-3.5" />
            <span>20% Grid</span>
          </button>

          <button
            onClick={handleDownload}
            className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#D32F2F] hover:bg-[#B71C1C] text-white flex items-center gap-1.5 shadow-sm active:scale-95 transition-all"
          >
            {downloadSuccess ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                <span>Downloaded!</span>
              </>
            ) : (
              <>
                <Download className="w-3.5 h-3.5" />
                <span>Export ({activeSpec.pixelWidth}×{activeSpec.pixelHeight})</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Preview Stage */}
      <div className="flex-1 min-h-[460px] p-6 flex flex-col items-center justify-center bg-[radial-gradient(#1e271b_1px,transparent_1px)] [background-size:16px_16px] relative overflow-hidden">
        {isRendering && (
          <div className="absolute inset-0 bg-neutral-950/60 backdrop-blur-xs flex items-center justify-center z-20">
            <div className="flex items-center gap-2 text-sm text-neutral-300">
              <RefreshCw className="w-4 h-4 animate-spin text-[#4B5E38]" />
              <span>Rendering Meta Artwork...</span>
            </div>
          </div>
        )}

        <div
          className="relative max-h-[580px] max-w-full flex items-center justify-center shadow-2xl rounded-lg overflow-hidden border border-neutral-700/80 bg-black group"
          style={{ aspectRatio: activeSpec.aspectRatio }}
        >
          <canvas
            ref={canvasRef}
            className="max-h-[580px] w-auto object-contain block transition-transform duration-300"
          />

          {/* Quick Watermark Spec Indicator */}
          <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono text-neutral-400 border border-neutral-800 pointer-events-none">
            {activeSpec.pixelWidth} × {activeSpec.pixelHeight} px ({activeSpec.format})
          </div>
        </div>
      </div>

      {/* Meta Specs & Recommendations Footer */}
      <div className="p-3.5 border-t border-neutral-800 bg-neutral-950 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="text-white font-medium">{activeSpec.label}:</span>
          <span>{activeSpec.bestFor}</span>
        </div>
        <div className="flex items-center gap-2 text-neutral-500 text-[11px]">
          <span>Verified Meta 2026 Aspect Ratio Spec</span>
          <span aria-hidden="true">·</span>
          <span className="text-emerald-400">Ready for Ads Manager</span>
        </div>
      </div>
    </div>
  );
};
