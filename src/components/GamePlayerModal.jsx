import React, { useRef, useState } from 'react';
import {
  X,
  Maximize2,
  RotateCcw,
  ExternalLink,
  Star,
  Info,
  Sliders,
  Sparkles,
} from 'lucide-react';

export const GamePlayerModal = ({
  game,
  allGames,
  isFavorite,
  onToggleFavorite,
  onClose,
  onSelectGame,
}) => {
  const containerRef = useRef(null);
  const iframeRef = useRef(null);
  const [, setIsFullscreen] = useState(false);

  // Extract source from either iframeSrc or parsing iframe HTML string
  const getIframeSrc = () => {
    if (game.iframeSrc) return game.iframeSrc;
    const match = game.iframe.match(/src=["']([^"']+)["']/);
    return match ? match[1] : '';
  };

  const iframeSrc = getIframeSrc();

  const handleRestart = () => {
    if (iframeRef.current) {
      iframeRef.current.src = iframeSrc;
    }
  };

  const handleFullscreenToggle = () => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch((err) => {
        console.warn('Fullscreen error:', err);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      });
    }
  };

  // Stealth about:blank cloaking window
  const handleOpenAboutBlank = () => {
    const win = window.open('about:blank', '_blank');
    if (!win) {
      alert('Popups may be blocked. Please allow popups for about:blank cloaking.');
      return;
    }
    const fullUrl = window.location.origin + iframeSrc;
    win.document.title = 'Google Drive';
    const link = win.document.createElement('link');
    link.rel = 'icon';
    link.href = 'https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png';
    win.document.head.appendChild(link);

    const frame = win.document.createElement('iframe');
    frame.src = fullUrl;
    frame.style.width = '100vw';
    frame.style.height = '100vh';
    frame.style.border = 'none';
    frame.style.margin = '0';
    frame.style.padding = '0';
    win.document.body.style.margin = '0';
    win.document.body.style.overflow = 'hidden';
    win.document.body.appendChild(frame);
  };

  // Other recommendations
  const otherGames = allGames.filter((g) => g.id !== game.id).slice(0, 4);

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex flex-col p-2 sm:p-4 md:p-6 overflow-y-auto">
      {/* Player Frame Container */}
      <div
        ref={containerRef}
        className="max-w-5xl w-full mx-auto bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl flex flex-col my-auto"
      >
        {/* Player Header Bar */}
        <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={onClose}
              title="Return to library"
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="truncate">
              <h2 className="text-sm sm:text-base font-bold text-white truncate flex items-center gap-2">
                <span>{game.title}</span>
                <span className="text-xs font-mono text-cyan-400 font-normal">
                  ({game.category})
                </span>
              </h2>
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              onClick={handleRestart}
              title="Restart / Reload game"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={handleFullscreenToggle}
              title="Toggle Fullscreen"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <Maximize2 className="w-4 h-4" />
            </button>

            <button
              onClick={handleOpenAboutBlank}
              title="Open in cloaked about:blank tab (stealth mode)"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs text-slate-300 hover:text-emerald-400 transition-colors font-mono"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Cloaked Tab</span>
            </button>

            <button
              onClick={(e) => onToggleFavorite(game.id, e)}
              title={isFavorite ? 'Favorited' : 'Add to favorites'}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-amber-400 transition-colors"
            >
              <Star className={`w-4 h-4 ${isFavorite ? 'fill-amber-400 text-amber-400' : ''}`} />
            </button>
          </div>
        </div>

        {/* The Game Iframe Viewport */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[72vh] bg-slate-950 flex items-center justify-center">
          <iframe
            ref={iframeRef}
            src={iframeSrc}
            title={game.title}
            allow="fullscreen; autoplay"
            sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock"
            className="w-full h-full border-0"
          />
        </div>

        {/* Player Bottom Details & Guidance */}
        <div className="p-4 sm:p-6 bg-slate-900 border-t border-slate-800 flex flex-col md:flex-row gap-6 justify-between">
          <div className="flex-1 space-y-3">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 mb-1">
                <Sliders className="w-3.5 h-3.5" />
                <span>HOW TO PLAY & CONTROLS</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 font-mono bg-slate-950/80 p-2.5 rounded-lg border border-slate-800/80">
                {game.controls}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 mb-1">
                <Info className="w-3.5 h-3.5" />
                <span>ABOUT THIS TITLE</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {game.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-500 font-mono">
              <span className="text-slate-400">JSON Embed:</span>
              <code className="text-cyan-400 truncate max-w-sm sm:max-w-md bg-slate-950 px-1 py-0.5 rounded">
                {game.iframe}
              </code>
            </div>
          </div>

          {/* Quick Recommendations */}
          <div className="w-full md:w-64 shrink-0 border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6">
            <div className="flex items-center gap-1 text-xs font-semibold text-slate-400 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>MORE TITLES</span>
            </div>
            <div className="space-y-2">
              {otherGames.map((og) => (
                <button
                  key={og.id}
                  onClick={() => onSelectGame(og)}
                  className="w-full text-left p-2 rounded-lg bg-slate-950/60 hover:bg-slate-800/80 border border-slate-800/60 transition-colors flex items-center justify-between"
                >
                  <span className="text-xs font-medium text-slate-200 truncate">{og.title}</span>
                  <span className="text-[10px] text-cyan-400 font-mono shrink-0 ml-2">{og.category}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
