/**
 * Aether Arcade - Unblocked Games Portal
 * Pure HTML5 / JavaScript / CSS Engine
 * Fully compatible with GitHub Pages & Vite
 */

// Initial default games catalog
const DEFAULT_GAMES = [
  {
    id: "snake",
    title: "Neon Snake Classic",
    category: "Arcade",
    rating: 4.9,
    plays: 28450,
    featured: true,
    description: "Guide the glowing neon serpent, devour energy pulses, grow in length, and avoid colliding with walls or your own tail.",
    controls: "Arrow keys or WASD to navigate. Space to pause.",
    tags: ["Arcade", "Retro", "Classic", "High Score"],
    thumbnail: "./assets/images/retro_arcade_thumbnail_1791145260327.jpg",
    iframeSrc: "./games/snake/index.html",
    iframe: '<iframe src="./games/snake/index.html" title="Neon Snake Classic" allow="fullscreen" sandbox="allow-scripts allow-same-origin" class="w-full h-full border-0"></iframe>'
  },
  {
    id: "space-invaders",
    title: "Galaxy Defender",
    category: "Action",
    rating: 4.8,
    plays: 19200,
    featured: true,
    description: "Command your starship against waves of advancing alien fleets, dodge incoming plasma blasts, and eliminate boss vessels.",
    controls: "Arrow keys or A/D to steer ship. Space to fire cannons.",
    tags: ["Action", "Space", "Shooter", "Retro"],
    thumbnail: "./assets/images/pixel_space_thumbnail_1791145269976.jpg",
    iframeSrc: "./games/space-invaders/index.html",
    iframe: '<iframe src="./games/space-invaders/index.html" title="Galaxy Defender" allow="fullscreen" sandbox="allow-scripts allow-same-origin" class="w-full h-full border-0"></iframe>'
  },
  {
    id: "tetris",
    title: "Block Fall Classic",
    category: "Puzzle",
    rating: 4.9,
    plays: 31400,
    featured: true,
    description: "Stack falling tetromino shapes, rotate strategically, execute tetrises, clear multiple lines, and climb higher levels.",
    controls: "Left/Right arrows to move. Up arrow to rotate. Space for Hard Drop. C to hold piece.",
    tags: ["Puzzle", "Block", "Tetris", "Logic"],
    thumbnail: "./assets/images/cyber_puzzle_thumbnail_1791145282145.jpg",
    iframeSrc: "./games/tetris/index.html",
    iframe: '<iframe src="./games/tetris/index.html" title="Block Fall Classic" allow="fullscreen" sandbox="allow-scripts allow-same-origin" class="w-full h-full border-0"></iframe>'
  },
  {
    id: "flappy",
    title: "Flappy Pixel",
    category: "Casual",
    rating: 4.7,
    plays: 22100,
    featured: false,
    description: "Tap your wings to navigate between green pipe obstacles with tight gaps. How high can you score before clipping a pipe?",
    controls: "Spacebar, mouse click, or tap to flap wings.",
    tags: ["Casual", "One-Button", "Skill", "Addictive"],
    thumbnail: "./assets/images/arcade_neon_hub_1791145249273.jpg",
    iframeSrc: "./games/flappy/index.html",
    iframe: '<iframe src="./games/flappy/index.html" title="Flappy Pixel" allow="fullscreen" sandbox="allow-scripts allow-same-origin" class="w-full h-full border-0"></iframe>'
  },
  {
    id: "breakout",
    title: "Neon Breakout",
    category: "Arcade",
    rating: 4.8,
    plays: 16800,
    featured: false,
    description: "Slide your neon paddle to bounce the supersonic ball, shatter multicolored brick layers, and clear the entire matrix.",
    controls: "Mouse, touch, or Left/Right arrows to slide paddle.",
    tags: ["Arcade", "Breakout", "Paddle", "Reflex"],
    thumbnail: "./assets/images/retro_arcade_thumbnail_1791145260327.jpg",
    iframeSrc: "./games/breakout/index.html",
    iframe: '<iframe src="./games/breakout/index.html" title="Neon Breakout" allow="fullscreen" sandbox="allow-scripts allow-same-origin" class="w-full h-full border-0"></iframe>'
  },
  {
    id: "2048",
    title: "2048 Classic",
    category: "Puzzle",
    rating: 4.9,
    plays: 24500,
    featured: false,
    description: "Slide identical number tiles into each other to sum them up. Formulate thoughtful strategies to synthesize the elusive 2048 tile.",
    controls: "Arrow keys, WASD, or finger swipe in 4 directions.",
    tags: ["Puzzle", "Math", "Strategy", "Brain"],
    thumbnail: "./assets/images/cyber_puzzle_thumbnail_1791145282145.jpg",
    iframeSrc: "./games/2048/index.html",
    iframe: '<iframe src="./games/2048/index.html" title="2048 Classic" allow="fullscreen" sandbox="allow-scripts allow-same-origin" class="w-full h-full border-0"></iframe>'
  },
  {
    id: "pong",
    title: "Cyber Pong",
    category: "Retro",
    rating: 4.6,
    plays: 13900,
    featured: false,
    description: "The grandfather of video games modernized with neon spin angles. Challenge our responsive AI bot or play 2-player local battle.",
    controls: "P1: W/S or Mouse. P2: Up/Down arrow keys.",
    tags: ["Retro", "2 Player", "Sports", "Table Tennis"],
    thumbnail: "./assets/images/retro_arcade_thumbnail_1791145260327.jpg",
    iframeSrc: "./games/pong/index.html",
    iframe: '<iframe src="./games/pong/index.html" title="Cyber Pong" allow="fullscreen" sandbox="allow-scripts allow-same-origin" class="w-full h-full border-0"></iframe>'
  },
  {
    id: "dino-run",
    title: "Pixel Dino Run",
    category: "Casual",
    rating: 4.7,
    plays: 27300,
    featured: false,
    description: "Dash across the desert wilderness, hop over sharp cacti, duck under soaring pterodactyls, and survive day into night.",
    controls: "Space / Up / Click to Jump. Down arrow to Duck.",
    tags: ["Casual", "Runner", "Endless", "Pixel"],
    thumbnail: "./assets/images/arcade_neon_hub_1791145249273.jpg",
    iframeSrc: "./games/dino-run/index.html",
    iframe: '<iframe src="./games/dino-run/index.html" title="Pixel Dino Run" allow="fullscreen" sandbox="allow-scripts allow-same-origin" class="w-full h-full border-0"></iframe>'
  },
  {
    id: "minesweeper",
    title: "Minesweeper Retro",
    category: "Puzzle",
    rating: 4.8,
    plays: 18100,
    featured: false,
    description: "Analyze number clues on revealed tiles to deduce hidden explosive mines. Flag danger zones and clear the safe grid.",
    controls: "Left-click to reveal tile. Right-click or Flag Mode to plant flags.",
    tags: ["Puzzle", "Logic", "Retro", "Minesweeper"],
    thumbnail: "./assets/images/cyber_puzzle_thumbnail_1791145282145.jpg",
    iframeSrc: "./games/minesweeper/index.html",
    iframe: '<iframe src="./games/minesweeper/index.html" title="Minesweeper Retro" allow="fullscreen" sandbox="allow-scripts allow-same-origin" class="w-full h-full border-0"></iframe>'
  }
];

// App State
let state = {
  games: DEFAULT_GAMES,
  favorites: JSON.parse(localStorage.getItem('aether_arcade_favs') || '["snake", "tetris"]'),
  activeCategory: 'all',
  searchQuery: '',
  favoritesOnly: false,
  sortBy: 'popular',
  selectedGame: null,
  isPanicActive: false,
  isJsonVaultOpen: false,
  jsonActiveTab: 'view'
};

// Load saved custom games or fetch games.json
function loadGames() {
  const saved = localStorage.getItem('aether_arcade_games');
  if (saved) {
    try {
      state.games = JSON.parse(saved);
      render();
      return;
    } catch (e) {
      console.warn('Error reading saved games:', e);
    }
  }

  // Try relative games.json fetch
  fetch('./games.json')
    .then(res => res.json())
    .then(data => {
      if (Array.isArray(data) && data.length > 0) {
        state.games = data;
        render();
      }
    })
    .catch(() => {
      // Fallback already in place
      render();
    });
}

function saveFavorites() {
  localStorage.setItem('aether_arcade_favs', JSON.stringify(state.favorites));
}

function toggleFavorite(id) {
  if (state.favorites.includes(id)) {
    state.favorites = state.favorites.filter(favId => favId !== id);
  } else {
    state.favorites.push(id);
  }
  saveFavorites();
  render();
}

function selectGame(game) {
  state.selectedGame = game;
  // Increment plays
  state.games = state.games.map(g => g.id === game.id ? { ...g, plays: g.plays + 1 } : g);
  localStorage.setItem('aether_arcade_games', JSON.stringify(state.games));
  render();
}

function closeGame() {
  state.selectedGame = null;
  render();
}

function launchRandomGame() {
  const filtered = getFilteredGames();
  const pool = filtered.length > 0 ? filtered : state.games;
  const rand = pool[Math.floor(Math.random() * pool.length)];
  selectGame(rand);
}

function togglePanic() {
  state.isPanicActive = !state.isPanicActive;
  render();
}

function openJsonVault() {
  state.isJsonVaultOpen = true;
  state.jsonActiveTab = 'view';
  render();
}

function closeJsonVault() {
  state.isJsonVaultOpen = false;
  render();
}

function resetDefaultGames() {
  state.games = DEFAULT_GAMES;
  localStorage.removeItem('aether_arcade_games');
  render();
}

function addCustomGame(newGame) {
  state.games.unshift(newGame);
  localStorage.setItem('aether_arcade_games', JSON.stringify(state.games));
  state.jsonActiveTab = 'view';
  render();
}

function getFilteredGames() {
  return state.games.filter(g => {
    if (state.activeCategory !== 'all' && g.category !== state.activeCategory) {
      return false;
    }
    if (state.favoritesOnly && !state.favorites.includes(g.id)) {
      return false;
    }
    if (state.searchQuery.trim()) {
      const q = state.searchQuery.toLowerCase();
      const matchTitle = g.title.toLowerCase().includes(q);
      const matchDesc = g.description.toLowerCase().includes(q);
      const matchCat = g.category.toLowerCase().includes(q);
      const matchTags = g.tags && g.tags.some(t => t.toLowerCase().includes(q));
      if (!matchTitle && !matchDesc && !matchCat && !matchTags) {
        return false;
      }
    }
    return true;
  }).sort((a, b) => {
    if (state.sortBy === 'popular') return b.plays - a.plays;
    if (state.sortBy === 'rating') return b.rating - a.rating;
    return a.title.localeCompare(b.title);
  });
}

// Cloaked about:blank tab launcher
function openAboutBlank(game) {
  const win = window.open('about:blank', '_blank');
  if (!win) {
    alert('Popups may be blocked. Please enable popups for stealth about:blank window.');
    return;
  }
  const fullUrl = new URL(game.iframeSrc, window.location.href).href;
  win.document.title = 'Google Drive - My Drive';
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
}

// SVG Icons Helpers
const ICONS = {
  gamepad: `<svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><line x1="15" y1="13" x2="15.01" y2="13"/><line x1="18" y1="11" x2="18.01" y2="11"/><rect x="2" y="6" width="20" height="12" rx="2"/></svg>`,
  dice: `<svg class="w-3.5 h-3.5 text-amber-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M12 12h.01M16 16h.01M8 8h.01M8 16h.01M16 8h.01"/></svg>`,
  code: `<svg class="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  shield: `<svg class="w-3.5 h-3.5 text-rose-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.8 17 5 19 5a1 1 0 0 1 1 1z"/></svg>`,
  search: `<svg class="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  star: (filled) => `<svg class="w-3.5 h-3.5 ${filled ? 'fill-amber-400 text-amber-400' : 'text-slate-400 hover:text-amber-400'}" fill="${filled ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  play: `<svg class="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
  close: `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  refresh: `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 21h5v-5"/></svg>`,
  fullscreen: `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>`,
  external: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
  flame: `<svg class="w-12 h-12 text-slate-600 mb-3" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`
};

// Render Main Application
function render() {
  const root = document.getElementById('root');
  if (!root) return;

  // Handle Panic Cloak Disguise View
  if (state.isPanicActive) {
    document.title = 'AP World History: Unit 5 Analysis - Google Docs';
    root.innerHTML = renderPanicCloakHtml();
    attachPanicEvents();
    return;
  } else {
    document.title = 'Aether Arcade - Unblocked Games';
  }

  const filteredGames = getFilteredGames();
  const featured = state.games.find(g => g.featured) || state.games[0];
  const categories = ['all', 'Arcade', 'Action', 'Puzzle', 'Retro', 'Casual'];

  root.innerHTML = `
    <div class="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <!-- Top Navigation -->
      <header class="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <a href="#" id="brand-link" class="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white hover:text-cyan-400 transition-colors whitespace-nowrap">
              ${ICONS.gamepad}
              <span>AETHER ARCADE</span>
            </a>
          </div>

          <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
            ${categories.map(cat => `
              <button data-cat="${cat}" class="nav-cat-btn transition-colors whitespace-nowrap ${state.activeCategory === cat ? 'text-cyan-400 font-semibold underline underline-offset-8 decoration-2' : 'hover:text-slate-200'}">
                ${cat === 'all' ? 'All Games' : cat}
              </button>
            `).join('')}
          </nav>

          <div class="flex items-center gap-2 sm:gap-3 shrink-0">
            <button id="btn-random" title="Launch random game" class="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-700/80 rounded-lg hover:bg-slate-800 hover:text-white transition-colors whitespace-nowrap">
              ${ICONS.dice}
              <span class="hidden sm:inline">Random</span>
            </button>

            <button id="btn-vault" title="Inspect games.json database & iframes" class="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-700/80 rounded-lg hover:bg-slate-800 hover:text-white transition-colors whitespace-nowrap">
              ${ICONS.code}
              <span class="hidden sm:inline">JSON Data</span>
            </button>

            <button id="btn-panic" title="Stealth Panic: Disguises page as Google Docs (Hotkey: Esc)" class="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-rose-300 bg-rose-950/60 border border-rose-800/80 rounded-lg hover:bg-rose-900/60 transition-colors whitespace-nowrap">
              ${ICONS.shield}
              <span>Panic [Esc]</span>
            </button>
          </div>
        </div>
      </header>

      <main class="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <!-- Hero Section -->
        ${state.activeCategory === 'all' && !state.searchQuery.trim() && !state.favoritesOnly ? `
          <section class="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 mb-10">
            <div class="absolute inset-0 pointer-events-none">
              <img src="./assets/images/arcade_neon_hub_1791145249273.jpg" alt="Arcade lounge ambient" class="w-full h-full object-cover object-center opacity-25 filter blur-[1px]" />
              <div class="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40"></div>
            </div>

            <div class="relative z-10 p-6 sm:p-10 lg:p-12 max-w-3xl">
              <div class="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-3 tracking-wide">
                <span>PORTABLE UNBLOCKED WEB HUB</span>
              </div>
              <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Lightning-fast unblocked games. Zero bloat, pure play.
              </h1>
              <p class="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-2xl">
                Every title is rendered directly via standalone HTML5 and CSS canvas engines stored inside <code class="text-cyan-300 font-mono text-xs bg-slate-800/80 px-1.5 py-0.5 rounded">games.json</code> as an iframe. Runs offline, loads in milliseconds, and never gets blocked.
              </p>
              <div class="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-400 mb-8 font-mono">
                <span>${state.games.length} Self-Contained Titles</span>
                <span aria-hidden="true" class="text-slate-600">·</span>
                <span>100% Client-Side JSON</span>
                <span aria-hidden="true" class="text-slate-600">·</span>
                <span>Stealth Cloak Ready</span>
              </div>
              ${featured ? `
                <button id="hero-play-featured" class="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
                  ${ICONS.play}
                  <span>Play Featured: ${featured.title}</span>
                </button>
              ` : ''}
            </div>
          </section>
        ` : ''}

        <!-- Filter & Search Bar -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800/80">
          <div class="relative flex-1 max-w-md">
            <span class="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none">${ICONS.search}</span>
            <input type="text" id="search-input" placeholder="Search by title, genre, or controls..." value="${state.searchQuery}" class="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors" />
          </div>

          <div class="flex flex-wrap items-center gap-3">
            <button id="btn-fav-toggle" class="flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border transition-colors ${state.favoritesOnly ? 'bg-amber-400/10 text-amber-300 border-amber-400/40' : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'}">
              ${ICONS.star(state.favoritesOnly)}
              <span>Favorites (${state.favorites.length})</span>
            </button>

            <div class="flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-400">
              <span>Sort:</span>
              <select id="sort-select" class="bg-transparent text-slate-200 focus:outline-none cursor-pointer">
                <option value="popular" ${state.sortBy === 'popular' ? 'selected' : ''} class="bg-slate-900 text-slate-200">Most Played</option>
                <option value="rating" ${state.sortBy === 'rating' ? 'selected' : ''} class="bg-slate-900 text-slate-200">Highest Rated</option>
                <option value="title" ${state.sortBy === 'title' ? 'selected' : ''} class="bg-slate-900 text-slate-200">Alphabetical</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Section Title -->
        <div class="flex items-center justify-between mb-6">
          <div class="flex items-center gap-2 text-sm text-slate-400 font-mono">
            <span class="text-white font-bold text-base font-sans">
              ${state.favoritesOnly ? 'Your Favorite Games' : state.activeCategory === 'all' ? 'All Titles' : `${state.activeCategory} Games`}
            </span>
            <span aria-hidden="true" class="text-slate-600">·</span>
            <span>${filteredGames.length} available</span>
          </div>
          ${state.searchQuery ? `
            <button id="clear-search" class="text-xs text-cyan-400 hover:underline">Clear search</button>
          ` : ''}
        </div>

        <!-- Games Grid -->
        ${filteredGames.length > 0 ? `
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            ${filteredGames.map(game => {
              const isFav = state.favorites.includes(game.id);
              const playsFormatted = game.plays >= 1000 ? `${(game.plays / 1000).toFixed(1)}k` : game.plays;
              return `
                <div data-game-id="${game.id}" class="game-card group relative flex flex-col bg-slate-900/70 border border-slate-800 hover:border-cyan-500/60 rounded-xl overflow-hidden cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/30">
                  <div class="relative aspect-[4/3] w-full bg-slate-950 overflow-hidden">
                    <img src="${game.thumbnail}" alt="${game.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
                    <div style="display:none;" class="w-full h-full items-center justify-center bg-slate-900 text-slate-500 text-xs font-mono p-4 text-center">
                      ${game.title}
                    </div>

                    <div class="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                      <div class="w-12 h-12 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                        ${ICONS.play}
                      </div>
                    </div>

                    <button data-fav-id="${game.id}" class="card-fav-btn absolute top-2.5 right-2.5 p-2 rounded-lg bg-slate-950/70 hover:bg-slate-900 backdrop-blur-sm transition-colors z-10" title="${isFav ? 'Remove from favorites' : 'Add to favorites'}">
                      ${ICONS.star(isFav)}
                    </button>
                  </div>

                  <div class="p-4 flex flex-col flex-1 justify-between gap-3">
                    <div>
                      <div class="flex items-center gap-1.5 text-xs text-slate-400 mb-1.5 font-mono">
                        <span class="text-cyan-400 font-medium">${game.category}</span>
                        <span aria-hidden="true" class="text-slate-600">·</span>
                        <span class="text-amber-300">★ ${game.rating.toFixed(1)}</span>
                        <span aria-hidden="true" class="text-slate-600">·</span>
                        <span class="tabular-nums">${playsFormatted} plays</span>
                      </div>
                      <h3 class="text-base font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                        ${game.title}
                      </h3>
                      <p class="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                        ${game.description}
                      </p>
                    </div>

                    <div class="pt-2 border-t border-slate-800/80 text-[11px] text-slate-500 font-mono truncate">
                      <span class="text-slate-400">Controls:</span> ${game.controls}
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        ` : `
          <div class="py-20 text-center flex flex-col items-center justify-center bg-slate-900/30 border border-slate-800/80 rounded-2xl">
            ${ICONS.flame}
            <h3 class="text-lg font-semibold text-slate-200 mb-1">No games match your criteria</h3>
            <p class="text-xs text-slate-500 max-w-sm mb-4">
              Try adjusting your search query, selecting another category, or clearing your favorites filter.
            </p>
            <button id="btn-reset-filters" class="px-4 py-2 text-xs font-semibold text-cyan-400 bg-cyan-950/40 border border-cyan-800/60 rounded-lg hover:bg-cyan-900/40 transition-colors">
              Reset Filters
            </button>
          </div>
        `}
      </main>

      <footer class="mt-16 border-t border-slate-800 bg-slate-950 py-8 text-xs text-slate-500">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-2">
            <span class="font-semibold text-slate-300">AETHER ARCADE</span>
            <span aria-hidden="true">·</span>
            <span>Self-contained unblocked iframe game catalog</span>
          </div>
          <div class="flex items-center gap-4 font-mono text-[11px]">
            <span>Press <kbd class="px-1.5 py-0.5 bg-slate-800 rounded text-slate-300">Esc</kbd> for Stealth Panic</span>
            <span aria-hidden="true" class="text-slate-700">·</span>
            <button id="footer-vault-btn" class="hover:text-cyan-400 transition-colors">
              Inspect games.json
            </button>
          </div>
        </div>
      </footer>

      <!-- Modals -->
      ${state.selectedGame ? renderPlayerModalHtml(state.selectedGame) : ''}
      ${state.isJsonVaultOpen ? renderJsonVaultHtml() : ''}
    </div>
  `;

  attachMainEvents();
}

// Render Game Player Console Modal
function renderPlayerModalHtml(game) {
  const isFav = state.favorites.includes(game.id);
  const others = state.games.filter(g => g.id !== game.id).slice(0, 4);

  return `
    <div id="player-modal-overlay" class="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex flex-col p-2 sm:p-4 md:p-6 overflow-y-auto">
      <div id="player-box" class="max-w-5xl w-full mx-auto bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl flex flex-col my-auto">
        <div class="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between gap-4">
          <div class="flex items-center gap-3 min-w-0">
            <button id="btn-close-player" title="Return to catalog" class="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors">
              ${ICONS.close}
            </button>
            <div class="truncate">
              <h2 class="text-sm sm:text-base font-bold text-white truncate flex items-center gap-2">
                <span>${game.title}</span>
                <span class="text-xs font-mono text-cyan-400 font-normal">(${game.category})</span>
              </h2>
            </div>
          </div>

          <div class="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button id="btn-restart-game" title="Restart / Reload game" class="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-colors">
              ${ICONS.refresh}
            </button>
            <button id="btn-fullscreen-game" title="Toggle Fullscreen" class="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-colors">
              ${ICONS.fullscreen}
            </button>
            <button id="btn-cloak-tab" title="Open in cloaked about:blank tab (stealth mode)" class="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs text-slate-300 hover:text-emerald-400 transition-colors font-mono">
              ${ICONS.external}
              <span class="hidden sm:inline">Cloaked Tab</span>
            </button>
            <button id="btn-fav-player" title="${isFav ? 'Favorited' : 'Add to favorites'}" class="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 transition-colors">
              ${ICONS.star(isFav)}
            </button>
          </div>
        </div>

        <div class="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[72vh] bg-slate-950 flex items-center justify-center">
          <iframe id="active-game-frame" src="${game.iframeSrc}" title="${game.title}" allow="fullscreen; autoplay" sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock" class="w-full h-full border-0"></iframe>
        </div>

        <div class="p-4 sm:p-6 bg-slate-900 border-t border-slate-800 flex flex-col md:flex-row gap-6 justify-between">
          <div class="flex-1 space-y-3">
            <div>
              <div class="text-xs font-semibold text-cyan-400 mb-1">HOW TO PLAY & CONTROLS</div>
              <p class="text-xs sm:text-sm text-slate-200 font-mono bg-slate-950/80 p-2.5 rounded-lg border border-slate-800/80">${game.controls}</p>
            </div>
            <div>
              <div class="text-xs font-semibold text-slate-400 mb-1">ABOUT THIS TITLE</div>
              <p class="text-xs text-slate-300 leading-relaxed">${game.description}</p>
            </div>
            <div class="text-[11px] text-slate-500 font-mono flex items-center gap-2">
              <span class="text-slate-400">JSON Embed:</span>
              <code class="text-cyan-400 truncate max-w-sm sm:max-w-md bg-slate-950 px-1 py-0.5 rounded">${escapeHtml(game.iframe)}</code>
            </div>
          </div>

          <div class="w-full md:w-64 shrink-0 border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6">
            <div class="text-xs font-semibold text-slate-400 mb-3">MORE TITLES</div>
            <div class="space-y-2">
              ${others.map(og => `
                <button data-switch-id="${og.id}" class="switch-game-btn w-full text-left p-2 rounded-lg bg-slate-950/60 hover:bg-slate-800/80 border border-slate-800/60 transition-colors flex items-center justify-between">
                  <span class="text-xs font-medium text-slate-200 truncate">${og.title}</span>
                  <span class="text-[10px] text-cyan-400 font-mono shrink-0 ml-2">${og.category}</span>
                </button>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Render Panic Cloak (Google Docs Stealth Disguise)
function renderPanicCloakHtml() {
  return `
    <div class="fixed inset-0 z-[100] bg-[#f9fbfd] text-slate-800 flex flex-col font-sans select-text overflow-y-auto">
      <header class="bg-white border-b border-slate-200 px-4 py-2 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="p-1.5 rounded bg-blue-500 text-white font-bold text-xs">DOC</div>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-sm font-medium text-slate-800">AP World History: Unit 5 Analysis - Industrialization</span>
              <span class="text-xs text-slate-400">Saved to Drive</span>
            </div>
            <div class="flex items-center gap-3 text-xs text-slate-600 mt-0.5">
              <span>File</span> <span>Edit</span> <span>View</span> <span>Insert</span> <span>Format</span> <span>Tools</span> <span>Help</span>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <button id="btn-exit-panic" class="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors">
            ← Return to Arcade [Esc]
          </button>
        </div>
      </header>

      <main class="flex-1 bg-[#f0f4f9] p-4 sm:p-8 flex justify-center">
        <div contenteditable="true" class="w-full max-w-[816px] min-h-[1056px] bg-white shadow-md border border-slate-200 p-12 sm:p-16 text-slate-800 font-serif leading-relaxed focus:outline-none">
          <h1 class="text-2xl font-bold font-sans mb-4 text-slate-900">
            Socio-Economic Shifts in the First and Second Industrial Revolutions
          </h1>
          <p class="text-sm text-slate-500 mb-6 font-sans">
            Student: Zachary Collins · AP World History · Mr. Henderson · Period 4
          </p>
          <h2 class="text-lg font-bold font-sans mt-6 mb-2 text-slate-800">
            1. The Transition from Agrarian to Mechanized Production
          </h2>
          <p class="mb-4 text-justify">
            The inception of the Industrial Revolution in late eighteenth-century Britain marked an unprecedented departure from agrarian self-sufficiency. Innovations such as James Watt's refined steam engine, James Hargreaves' spinning jenny, and Richard Arkwright’s water frame initiated a structural reorganization of labor from decentralized domestic cottages into centralized urban factories.
          </p>
          <h2 class="text-lg font-bold font-sans mt-6 mb-2 text-slate-800">
            2. Demographic Realignment and Urbanization
          </h2>
          <p class="mb-4 text-justify">
            Enclosure Acts in Great Britain systematically consolidated customary peasant holdings, forcing smallholders into burgeoning urban manufacturing centers such as Manchester, Birmingham, and Leeds. The rapid influx of labor precipitated acute social strains, including tenement overcrowding, deficient sanitary infrastructure, and the expansion of wage labor regimes.
          </p>
        </div>
      </main>
    </div>
  `;
}

// Render JSON Database Vault Modal
function renderJsonVaultHtml() {
  const jsonStr = JSON.stringify(state.games, null, 2);

  return `
    <div id="vault-modal-overlay" class="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div class="bg-slate-900 border border-slate-800 rounded-xl w-full max-w-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        <div class="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div class="flex items-center gap-2 text-white">
            ${ICONS.code}
            <h2 class="text-base font-bold">games.json Database Manager</h2>
          </div>
          <button id="btn-close-vault" class="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors">
            ${ICONS.close}
          </button>
        </div>

        <div class="px-6 py-2 bg-slate-950/50 border-b border-slate-800 flex items-center justify-between gap-4">
          <div class="flex items-center gap-2">
            <button id="tab-view-json" class="px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${state.jsonActiveTab === 'view' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-slate-200'}">
              View JSON Schema (${state.games.length} Games)
            </button>
            <button id="tab-add-game" class="px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${state.jsonActiveTab === 'add' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-slate-200'}">
              + Add Custom Iframe Game
            </button>
          </div>

          ${state.jsonActiveTab === 'view' ? `
            <div class="flex items-center gap-2">
              <button id="btn-copy-json" class="px-2.5 py-1 text-xs font-mono text-slate-300 bg-slate-800 hover:bg-slate-700 rounded transition-colors">
                Copy JSON
              </button>
              <button id="btn-download-json" class="px-2.5 py-1 text-xs font-mono text-slate-300 bg-slate-800 hover:bg-slate-700 rounded transition-colors">
                Download
              </button>
              <button id="btn-reset-vault" class="px-2.5 py-1 text-xs font-mono text-slate-400 hover:text-rose-400 bg-slate-800 hover:bg-slate-700 rounded transition-colors">
                Reset
              </button>
            </div>
          ` : ''}
        </div>

        <div class="p-6 overflow-y-auto flex-1 font-mono text-xs">
          ${state.jsonActiveTab === 'view' ? `
            <div class="space-y-3">
              <div class="p-3 bg-slate-950/80 border border-slate-800 rounded-lg text-slate-400 font-sans text-xs">
                ℹ️ All game titles are stored with their respective <code class="text-cyan-300">&lt;iframe&gt;</code> embed strings inside <code class="text-cyan-300">/games.json</code>. You can copy or download this file anytime.
              </div>
              <pre class="p-4 bg-slate-950 border border-slate-800/80 rounded-lg text-slate-300 overflow-x-auto select-all leading-relaxed max-h-[50vh]">${escapeHtml(jsonStr)}</pre>
            </div>
          ` : `
            <form id="add-game-form" class="space-y-4 font-sans text-sm">
              <div>
                <label class="block text-xs font-medium text-slate-300 mb-1">Game Title *</label>
                <input type="text" id="form-title" required placeholder="e.g. Pixel Drift Racing" class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-xs" />
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-medium text-slate-300 mb-1">Category</label>
                  <select id="form-category" class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:border-cyan-500 text-xs">
                    <option value="Arcade">Arcade</option>
                    <option value="Action">Action</option>
                    <option value="Puzzle">Puzzle</option>
                    <option value="Retro">Retro</option>
                    <option value="Casual">Casual</option>
                  </select>
                </div>
                <div>
                  <label class="block text-xs font-medium text-slate-300 mb-1">Tags (comma separated)</label>
                  <input type="text" id="form-tags" placeholder="Speed, 2D, Racing" class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-xs" />
                </div>
              </div>
              <div>
                <label class="block text-xs font-medium text-slate-300 mb-1">Iframe Embed Code or URL *</label>
                <textarea id="form-iframe" required rows="3" placeholder='<iframe src="https://..." allow="fullscreen"></iframe> or direct URL' class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-mono text-xs"></textarea>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-medium text-slate-300 mb-1">Controls Description</label>
                  <input type="text" id="form-controls" placeholder="e.g. Arrow keys to steer, Space to brake" class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-xs" />
                </div>
                <div>
                  <label class="block text-xs font-medium text-slate-300 mb-1">Brief Description</label>
                  <input type="text" id="form-description" placeholder="e.g. High speed drift racing on retro neon tracks." class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-xs" />
                </div>
              </div>
              <div class="pt-2 flex justify-end gap-3">
                <button type="button" id="btn-cancel-add" class="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white">Cancel</button>
                <button type="submit" class="px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors">+ Save Game to JSON</button>
              </div>
            </form>
          `}
        </div>
      </div>
    </div>
  `;
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// Event Listeners Binding
function attachMainEvents() {
  document.getElementById('brand-link')?.addEventListener('click', (e) => {
    e.preventDefault();
    state.activeCategory = 'all';
    state.searchQuery = '';
    state.favoritesOnly = false;
    render();
  });

  document.querySelectorAll('.nav-cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.activeCategory = btn.dataset.cat;
      state.favoritesOnly = false;
      render();
    });
  });

  document.getElementById('btn-random')?.addEventListener('click', launchRandomGame);
  document.getElementById('btn-vault')?.addEventListener('click', openJsonVault);
  document.getElementById('footer-vault-btn')?.addEventListener('click', openJsonVault);
  document.getElementById('btn-panic')?.addEventListener('click', togglePanic);

  document.getElementById('hero-play-featured')?.addEventListener('click', () => {
    const featured = state.games.find(g => g.featured) || state.games[0];
    if (featured) selectGame(featured);
  });

  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      render();
      const updatedInput = document.getElementById('search-input');
      if (updatedInput) {
        updatedInput.focus();
        updatedInput.setSelectionRange(updatedInput.value.length, updatedInput.value.length);
      }
    });
  }

  document.getElementById('clear-search')?.addEventListener('click', () => {
    state.searchQuery = '';
    render();
  });

  document.getElementById('btn-fav-toggle')?.addEventListener('click', () => {
    state.favoritesOnly = !state.favoritesOnly;
    render();
  });

  document.getElementById('sort-select')?.addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    render();
  });

  document.getElementById('btn-reset-filters')?.addEventListener('click', () => {
    state.searchQuery = '';
    state.activeCategory = 'all';
    state.favoritesOnly = false;
    render();
  });

  // Game Cards Click
  document.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.card-fav-btn')) return;
      const id = card.dataset.gameId;
      const game = state.games.find(g => g.id === id);
      if (game) selectGame(game);
    });
  });

  // Card Favorites Click
  document.querySelectorAll('.card-fav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.favId;
      toggleFavorite(id);
    });
  });

  // Player Events
  if (state.selectedGame) {
    document.getElementById('btn-close-player')?.addEventListener('click', closeGame);
    document.getElementById('btn-restart-game')?.addEventListener('click', () => {
      const frame = document.getElementById('active-game-frame');
      if (frame) frame.src = state.selectedGame.iframeSrc;
    });
    document.getElementById('btn-fullscreen-game')?.addEventListener('click', () => {
      const box = document.getElementById('player-box');
      if (box) {
        if (!document.fullscreenElement) box.requestFullscreen();
        else document.exitFullscreen();
      }
    });
    document.getElementById('btn-cloak-tab')?.addEventListener('click', () => {
      openAboutBlank(state.selectedGame);
    });
    document.getElementById('btn-fav-player')?.addEventListener('click', () => {
      toggleFavorite(state.selectedGame.id);
    });

    document.querySelectorAll('.switch-game-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.switchId;
        const game = state.games.find(g => g.id === id);
        if (game) selectGame(game);
      });
    });
  }

  // JSON Vault Events
  if (state.isJsonVaultOpen) {
    document.getElementById('btn-close-vault')?.addEventListener('click', closeJsonVault);
    document.getElementById('tab-view-json')?.addEventListener('click', () => {
      state.jsonActiveTab = 'view';
      render();
    });
    document.getElementById('tab-add-game')?.addEventListener('click', () => {
      state.jsonActiveTab = 'add';
      render();
    });
    document.getElementById('btn-cancel-add')?.addEventListener('click', () => {
      state.jsonActiveTab = 'view';
      render();
    });

    document.getElementById('btn-copy-json')?.addEventListener('click', () => {
      navigator.clipboard.writeText(JSON.stringify(state.games, null, 2));
      const btn = document.getElementById('btn-copy-json');
      if (btn) {
        btn.innerText = 'Copied!';
        setTimeout(() => { if (btn) btn.innerText = 'Copy JSON'; }, 2000);
      }
    });

    document.getElementById('btn-download-json')?.addEventListener('click', () => {
      const blob = new Blob([JSON.stringify(state.games, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'games.json';
      a.click();
      URL.revokeObjectURL(url);
    });

    document.getElementById('btn-reset-vault')?.addEventListener('click', () => {
      if (confirm('Reset games database to original defaults?')) {
        resetDefaultGames();
      }
    });

    document.getElementById('add-game-form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('form-title').value.trim();
      const category = document.getElementById('form-category').value;
      const rawIframe = document.getElementById('form-iframe').value.trim();
      const controls = document.getElementById('form-controls').value.trim();
      const description = document.getElementById('form-description').value.trim();
      const tags = document.getElementById('form-tags').value.split(',').map(t => t.trim()).filter(Boolean);

      let finalIframe = rawIframe;
      let finalSrc = rawIframe;

      if (!finalIframe.startsWith('<iframe')) {
        finalSrc = finalIframe;
        finalIframe = `<iframe src="${finalIframe}" title="${title}" allow="fullscreen" sandbox="allow-scripts allow-same-origin" class="w-full h-full border-0"></iframe>`;
      } else {
        const match = finalIframe.match(/src=["']([^"']+)["']/);
        if (match) finalSrc = match[1];
      }

      const newGame = {
        id: `custom-${Date.now()}`,
        title,
        category,
        rating: 5.0,
        plays: 1,
        description: description || 'Custom user embedded game.',
        controls: controls || 'Standard mouse & keyboard controls.',
        tags: tags.length > 0 ? tags : ['Custom', category],
        thumbnail: './assets/images/arcade_neon_hub_1791145249273.jpg',
        iframeSrc: finalSrc,
        iframe: finalIframe
      };

      addCustomGame(newGame);
    });
  }
}

function attachPanicEvents() {
  document.getElementById('btn-exit-panic')?.addEventListener('click', togglePanic);
}

// Global hotkeys (Esc or ']' for panic toggle)
window.addEventListener('keydown', (e) => {
  if (e.key === ']' || (e.key === 'Escape' && !state.selectedGame && !state.isJsonVaultOpen)) {
    togglePanic();
  }
});

// Initialize on page load
loadGames();
