import React from 'react';
import { Gamepad2, ShieldAlert, Code2, Dices } from 'lucide-react';

export const TopBar = ({
  activeCategory,
  onSelectCategory,
  onRandomGame,
  onTriggerPanic,
  onOpenJsonVault,
}) => {
  const categories = [
    { id: 'all', label: 'All Games' },
    { id: 'Arcade', label: 'Arcade' },
    { id: 'Action', label: 'Action' },
    { id: 'Puzzle', label: 'Puzzle' },
    { id: 'Retro', label: 'Retro' },
    { id: 'Casual', label: 'Casual' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark */}
        <div className="flex items-center gap-3">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onSelectCategory('all');
            }}
            className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white hover:text-cyan-400 transition-colors whitespace-nowrap"
          >
            <Gamepad2 className="w-6 h-6 text-cyan-400 shrink-0" />
            <span>AETHER ARCADE</span>
          </a>
        </div>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`transition-colors whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'text-cyan-400 font-semibold underline underline-offset-8 decoration-2'
                  : 'hover:text-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onRandomGame}
            title="Launch random game"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-700/80 rounded-lg hover:bg-slate-800 hover:text-white transition-colors whitespace-nowrap"
          >
            <Dices className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Random</span>
          </button>

          <button
            onClick={onOpenJsonVault}
            title="Inspect games.json database & iframes"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-700/80 rounded-lg hover:bg-slate-800 hover:text-white transition-colors whitespace-nowrap"
          >
            <Code2 className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">JSON Data</span>
          </button>

          <button
            onClick={onTriggerPanic}
            title="Panic Button: Instantly disguises tab as Google Docs (Hotkey: Esc)"
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-rose-300 bg-rose-950/60 border border-rose-800/80 rounded-lg hover:bg-rose-900/60 transition-colors whitespace-nowrap"
          >
            <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
            <span>Panic [Esc]</span>
          </button>
        </div>
      </div>
    </header>
  );
};
