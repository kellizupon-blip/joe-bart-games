import React from 'react';
import { Play, Sparkles } from 'lucide-react';

export const HeroSection = ({ featuredGame, onPlayGame }) => {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 mb-10">
      {/* Background Graphic with Scrim */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/src/assets/images/arcade_neon_hub_1791145249273.jpg"
          alt="Arcade lounge ambient"
          className="w-full h-full object-cover object-center opacity-25 filter blur-[1px]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40" />
      </div>

      <div className="relative z-10 p-6 sm:p-10 lg:p-12 max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-3 tracking-wide">
          <Sparkles className="w-4 h-4" />
          <span>PORTABLE UNBLOCKED WEB HUB</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 [text-wrap:balance]">
          Lightning-fast unblocked games. Zero bloat, pure play.
        </h1>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-2xl">
          Every game is rendered directly via standalone HTML5 and CSS canvas engines stored inside <code className="text-cyan-300 font-mono text-xs bg-slate-800/80 px-1.5 py-0.5 rounded">games.json</code> as an iframe. Runs offline, loads in milliseconds, and never gets blocked.
        </p>

        {/* Quiet, unboxed metadata statistics */}
        <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-400 mb-8 font-mono">
          <span>9 Self-Contained Titles</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>100% Client-Side JSON</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Stealth Cloak Ready</span>
        </div>

        {featuredGame && (
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onPlayGame(featuredGame)}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Play Featured: {featuredGame.title}</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
