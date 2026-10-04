import React, { useState, useEffect, useMemo } from 'react';
import { Search, Star, ArrowUpDown, Flame } from 'lucide-react';
import { INITIAL_GAMES } from './data/games.js';
import { TopBar } from './components/TopBar.jsx';
import { HeroSection } from './components/HeroSection.jsx';
import { GameCard } from './components/GameCard.jsx';
import { GamePlayerModal } from './components/GamePlayerModal.jsx';
import { PanicCloak } from './components/PanicCloak.jsx';
import { JsonVaultModal } from './components/JsonVaultModal.jsx';

export default function App() {
  const [games, setGames] = useState(() => {
    const saved = localStorage.getItem('aether_arcade_games');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved games:', e);
      }
    }
    return INITIAL_GAMES;
  });

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('aether_arcade_favs');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse favorites:', e);
      }
    }
    return ['snake', 'tetris'];
  });

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [sortBy, setSortBy] = useState('popular');

  const [selectedGame, setSelectedGame] = useState(null);
  const [isPanicActive, setIsPanicActive] = useState(false);
  const [isJsonVaultOpen, setIsJsonVaultOpen] = useState(false);

  // Sync with games.json on mount if available
  useEffect(() => {
    fetch('/games.json')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          // If user hasn't saved custom additions, load fresh games.json
          const hasCustom = localStorage.getItem('aether_arcade_games');
          if (!hasCustom) {
            setGames(data);
          }
        }
      })
      .catch((err) => {
        console.log('Using bundled games data:', err);
      });
  }, []);

  // Save games to localStorage whenever updated
  const handleAddGame = (newGame) => {
    const updated = [newGame, ...games];
    setGames(updated);
    localStorage.setItem('aether_arcade_games', JSON.stringify(updated));
  };

  const handleResetDefaults = () => {
    setGames(INITIAL_GAMES);
    localStorage.removeItem('aether_arcade_games');
  };

  const handleToggleFavorite = (id, e) => {
    e.stopPropagation();
    setFavorites((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      localStorage.setItem('aether_arcade_favs', JSON.stringify(next));
      return next;
    });
  };

  // Launch Random Game
  const handleRandomGame = () => {
    const pool = filteredGames.length > 0 ? filteredGames : games;
    const randomIndex = Math.floor(Math.random() * pool.length);
    setSelectedGame(pool[randomIndex]);
  };

  // Panic Cloak keyboard listener (Escape key when player is not open, or ']')
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === ']' || (e.key === 'Escape' && !selectedGame && !isJsonVaultOpen)) {
        setIsPanicActive((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedGame, isJsonVaultOpen]);

  // Increment play count on play
  const handlePlayGame = (game) => {
    setSelectedGame(game);
    setGames((prev) =>
      prev.map((g) => (g.id === game.id ? { ...g, plays: g.plays + 1 } : g))
    );
  };

  // Filtered & Sorted games
  const filteredGames = useMemo(() => {
    return games
      .filter((game) => {
        if (activeCategory !== 'all' && game.category !== activeCategory) {
          return false;
        }
        if (favoritesOnly && !favorites.includes(game.id)) {
          return false;
        }
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchTitle = game.title.toLowerCase().includes(q);
          const matchDesc = game.description.toLowerCase().includes(q);
          const matchCat = game.category.toLowerCase().includes(q);
          const matchTags = game.tags.some((t) => t.toLowerCase().includes(q));
          if (!matchTitle && !matchDesc && !matchCat && !matchTags) {
            return false;
          }
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'popular') return b.plays - a.plays;
        if (sortBy === 'rating') return b.rating - a.rating;
        return a.title.localeCompare(b.title);
      });
  }, [games, activeCategory, favoritesOnly, searchQuery, favorites, sortBy]);

  const featuredGame = games.find((g) => g.featured) || games[0];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Bar Contract: Zone 1 Wordmark, Zone 2 Nav Links, Zone 3 Actions */}
      <TopBar
        activeCategory={activeCategory}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          setFavoritesOnly(false);
        }}
        onRandomGame={handleRandomGame}
        onTriggerPanic={() => setIsPanicActive(true)}
        onOpenJsonVault={() => setIsJsonVaultOpen(true)}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Hero Section (Only show on default discovery view) */}
        {activeCategory === 'all' && !searchQuery.trim() && !favoritesOnly && (
          <HeroSection
            featuredGame={featuredGame}
            onPlayGame={handlePlayGame}
          />
        )}

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800/80">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search by title, genre, or controls..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Favorites Toggle */}
            <button
              onClick={() => setFavoritesOnly((prev) => !prev)}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border transition-colors ${
                favoritesOnly
                  ? 'bg-amber-400/10 text-amber-300 border-amber-400/40'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              <Star className={`w-3.5 h-3.5 ${favoritesOnly ? 'fill-amber-400 text-amber-400' : ''}`} />
              <span>Favorites ({favorites.length})</span>
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-400">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                aria-label="Sort games"
                className="bg-transparent text-slate-200 focus:outline-none cursor-pointer"
              >
                <option value="popular" className="bg-slate-900 text-slate-200">Most Played</option>
                <option value="rating" className="bg-slate-900 text-slate-200">Highest Rated</option>
                <option value="title" className="bg-slate-900 text-slate-200">Alphabetical</option>
              </select>
            </div>
          </div>
        </div>

        {/* Section Header with Clean Metadata */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-sm text-slate-400 font-mono">
            <span className="text-white font-bold text-base font-sans">
              {favoritesOnly ? 'Your Favorite Games' : activeCategory === 'all' ? 'All Titles' : `${activeCategory} Games`}
            </span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>{filteredGames.length} available</span>
          </div>

          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs text-cyan-400 hover:underline"
            >
              Clear search
            </button>
          )}
        </div>

        {/* Game Cards Grid */}
        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGames.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                isFavorite={favorites.includes(game.id)}
                onToggleFavorite={handleToggleFavorite}
                onPlay={handlePlayGame}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center flex flex-col items-center justify-center bg-slate-900/30 border border-slate-800/80 rounded-2xl">
            <Flame className="w-12 h-12 text-slate-600 mb-3" />
            <h3 className="text-lg font-semibold text-slate-200 mb-1">No games match your criteria</h3>
            <p className="text-xs text-slate-500 max-w-sm mb-4">
              Try adjusting your search query, selecting another category, or clearing your favorites filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
                setFavoritesOnly(false);
              }}
              className="px-4 py-2 text-xs font-semibold text-cyan-400 bg-cyan-950/40 border border-cyan-800/60 rounded-lg hover:bg-cyan-900/40 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      {/* Clean Anti-Slop Footer */}
      <footer className="mt-16 border-t border-slate-800 bg-slate-950 py-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-300">AETHER ARCADE</span>
            <span aria-hidden="true">·</span>
            <span>Self-contained unblocked iframe game catalog</span>
          </div>

          <div className="flex items-center gap-4 font-mono text-[11px]">
            <span>Press <kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-300">Esc</kbd> for Stealth Panic</span>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <button
              onClick={() => setIsJsonVaultOpen(true)}
              className="hover:text-cyan-400 transition-colors"
            >
              Inspect games.json
            </button>
          </div>
        </div>
      </footer>

      {/* Game Player View Modal */}
      {selectedGame && (
        <GamePlayerModal
          game={selectedGame}
          allGames={games}
          isFavorite={favorites.includes(selectedGame.id)}
          onToggleFavorite={handleToggleFavorite}
          onClose={() => setSelectedGame(null)}
          onSelectGame={(g) => handlePlayGame(g)}
        />
      )}

      {/* Panic Cloak Disguise View */}
      {isPanicActive && (
        <PanicCloak onDismiss={() => setIsPanicActive(false)} />
      )}

      {/* JSON Vault & Custom Game Modal */}
      {isJsonVaultOpen && (
        <JsonVaultModal
          games={games}
          onAddGame={handleAddGame}
          onResetDefaults={handleResetDefaults}
          onClose={() => setIsJsonVaultOpen(false)}
        />
      )}
    </div>
  );
}
