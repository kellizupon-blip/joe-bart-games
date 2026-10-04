import React, { useState } from 'react';
import { Play, Star, Gamepad2 } from 'lucide-react';

export const GameCard = ({
  game,
  isFavorite,
  onToggleFavorite,
  onPlay,
}) => {
  const [imgError, setImgError] = useState(false);

  const formattedPlays = game.plays >= 1000 ? `${(game.plays / 1000).toFixed(1)}k` : game.plays;

  return (
    <div
      onClick={() => onPlay(game)}
      className="group relative flex flex-col bg-slate-900/70 border border-slate-800 hover:border-cyan-500/60 rounded-xl overflow-hidden cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/30"
    >
      {/* Thumbnail Aspect Ratio 4:3 */}
      <div className="relative aspect-[4/3] w-full bg-slate-950 overflow-hidden">
        {!imgError && game.thumbnail ? (
          <img
            src={game.thumbnail}
            alt={game.title}
            onError={() => setImgError(true)}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-slate-500">
            <Gamepad2 className="w-10 h-10 mb-2 text-slate-600 group-hover:text-cyan-400 transition-colors" />
            <span className="text-xs font-mono">{game.title}</span>
          </div>
        )}

        {/* Hover play overlay */}
        <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
          <div className="w-12 h-12 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
            <Play className="w-5 h-5 fill-current ml-0.5" />
          </div>
        </div>

        {/* Favorite Bookmark Button */}
        <button
          onClick={(e) => onToggleFavorite(game.id, e)}
          title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          className="absolute top-2.5 right-2.5 p-2 rounded-lg bg-slate-950/70 hover:bg-slate-900 backdrop-blur-sm text-slate-300 hover:text-amber-400 transition-colors z-10"
        >
          <Star className={`w-4 h-4 ${isFavorite ? 'fill-amber-400 text-amber-400' : ''}`} />
        </button>
      </div>

      {/* Card Body */}
      <div className="p-4 flex flex-col flex-1 justify-between gap-3">
        <div>
          {/* Strict Zero-Pill Unboxed Metadata with · separator */}
          <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1.5 font-mono">
            <span className="text-cyan-400 font-medium">{game.category}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-amber-300">★ {game.rating.toFixed(1)}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="tabular-nums">{formattedPlays} plays</span>
          </div>

          <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
            {game.title}
          </h3>

          <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
            {game.description}
          </p>
        </div>

        {/* Controls peek */}
        <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-500 font-mono truncate">
          <span className="text-slate-400">Controls:</span> {game.controls}
        </div>
      </div>
    </div>
  );
};
