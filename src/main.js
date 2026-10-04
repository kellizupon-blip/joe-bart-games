/**
 * THE GUMBALL PROXY
 * Elmore's Unblocked Web Gateway & Iframe Hub
 * Inspired by The Amazing World of Gumball
 * Pure HTML5 / JavaScript / CSS Engine
 */

const DEFAULT_PROXIES = [
  {
    id: "drivemad",
    title: "Drive Mad: Elmore Edition",
    category: "Games",
    character: "Richard",
    accent: "#f97316",
    featured: true,
    description: "Richard's favorite 4x4 physics truck balancing challenge. Accelerate, brake, tilt in midair, and conquer tricky obstacles without flipping over.",
    url: "https://a.luminsdk.com/g/1791148304-s8-HyuYTCsFGsqB9NayM__pB29e8v3MlVjxrAcsV61M/selenite/drivemad/",
    iframe: '<iframe src="https://a.luminsdk.com/g/1791148304-s8-HyuYTCsFGsqB9NayM__pB29e8v3MlVjxrAcsV61M/selenite/drivemad/" title="Drive Mad: Elmore Edition" allow="fullscreen" sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock" class="w-full h-full border-0"></iframe>',
    tags: ["Drive Mad", "Games", "Physics", "Truck", "Racing", "Popular"]
  },
  {
    id: "duckduckgo",
    title: "DuckDuckGo Privacy Search",
    category: "Search",
    character: "Anais",
    accent: "#00b4d8",
    description: "Anais's recommended untracked search engine. Query the web without Miss Simian snooping on your browsing history.",
    url: "https://html.duckduckgo.com/html/",
    iframe: '<iframe src="https://html.duckduckgo.com/html/" title="DuckDuckGo Clean Search" allow="fullscreen" sandbox="allow-scripts allow-same-origin allow-forms" class="w-full h-full border-0"></iframe>',
    tags: ["Search", "Privacy", "Web", "Untracked"]
  },
  {
    id: "wikipedia",
    title: "Wikipedia Knowledge Base",
    category: "Reference",
    character: "Bobert",
    accent: "#38bdf8",
    description: "Bobert's complete data repository. Millions of free encyclopedia articles on history, technology, and why Elmore defies physics.",
    url: "https://en.m.wikipedia.org",
    iframe: '<iframe src="https://en.m.wikipedia.org" title="Wikipedia Knowledge Base" allow="fullscreen" sandbox="allow-scripts allow-same-origin allow-forms" class="w-full h-full border-0"></iframe>',
    tags: ["Encyclopedia", "Research", "Education", "Wiki"]
  },
  {
    id: "desmos",
    title: "Desmos Scientific Suite",
    category: "Math & Tools",
    character: "Gumball",
    accent: "#f97316",
    description: "Super advanced graphing calculator that Gumball swears looks enough like homework to fool any teacher at Elmore Junior High.",
    url: "https://www.desmos.com/calculator",
    iframe: '<iframe src="https://www.desmos.com/calculator" title="Desmos Scientific Suite" allow="fullscreen" sandbox="allow-scripts allow-same-origin allow-forms" class="w-full h-full border-0"></iframe>',
    tags: ["Math", "Graphing", "Calculator", "Stealth"]
  },
  {
    id: "scratch",
    title: "Scratch Creative Engine",
    category: "Creative",
    character: "Darwin",
    accent: "#ff7a00",
    description: "Darwin's favorite place to build colorful block-based animations, music loops, and interactive stories.",
    url: "https://scratch.mit.edu/explore/projects/all",
    iframe: '<iframe src="https://scratch.mit.edu/explore/projects/all" title="Scratch Creative Engine" allow="fullscreen" sandbox="allow-scripts allow-same-origin allow-forms" class="w-full h-full border-0"></iframe>',
    tags: ["Creative", "Coding", "Animation", "Sandbox"]
  },
  {
    id: "wayback",
    title: "Wayback Machine Time Travel",
    category: "Archive",
    character: "Richard",
    accent: "#ec4899",
    description: "Surf ancient web pages like Richard reminiscing about the early internet. Unblock archived mirrors of lost web portals.",
    url: "https://archive.org/web/",
    iframe: '<iframe src="https://archive.org/web/" title="Wayback Machine Archive" allow="fullscreen" sandbox="allow-scripts allow-same-origin" class="w-full h-full border-0"></iframe>',
    tags: ["Archive", "History", "Wayback", "Mirror"]
  },
  {
    id: "geogebra",
    title: "GeoGebra Geometry Lab",
    category: "Math & Tools",
    character: "Nicole",
    accent: "#10b981",
    description: "Construct 3D shapes, geometric fractals, and trigonometry vectors. Nicole approved for strict educational camouflage.",
    url: "https://www.geogebra.org/calculator",
    iframe: '<iframe src="https://www.geogebra.org/calculator" title="GeoGebra Geometry Lab" allow="fullscreen" sandbox="allow-scripts allow-same-origin allow-forms" class="w-full h-full border-0"></iframe>',
    tags: ["Geometry", "Science", "Education", "Camouflage"]
  }
];

// App State
let state = {
  proxies: DEFAULT_PROXIES,
  favorites: JSON.parse(localStorage.getItem('gumball_proxy_favs') || '["drivemad", "duckduckgo"]'),
  activeCategory: 'all',
  searchQuery: '',
  favoritesOnly: false,
  activeProxy: null,
  isPanicActive: false,
  isVaultOpen: false,
  isCloakModalOpen: false,
  currentCloak: localStorage.getItem('gumball_tab_cloak') || 'default',
  customUrlInput: ''
};

// Character Badges
const CHARACTERS = {
  Gumball: { name: 'Gumball', color: 'text-cyan-400', bg: 'bg-cyan-950/60 border-cyan-500/40', avatar: '🐱' },
  Darwin: { name: 'Darwin', color: 'text-orange-400', bg: 'bg-orange-950/60 border-orange-500/40', avatar: '🐟' },
  Anais: { name: 'Anais', color: 'text-pink-400', bg: 'bg-pink-950/60 border-pink-500/40', avatar: '🐰' },
  Nicole: { name: 'Nicole', color: 'text-emerald-400', bg: 'bg-emerald-950/60 border-emerald-500/40', avatar: '⚡' },
  Richard: { name: 'Richard', color: 'text-orange-400', bg: 'bg-orange-950/60 border-orange-500/40', avatar: '🛋️' },
  Bobert: { name: 'Bobert', color: 'text-sky-300', bg: 'bg-sky-950/60 border-sky-500/40', avatar: '🤖' }
};

// Cloak Presets
const CLOAK_PRESETS = {
  default: { title: 'The Gumball Proxy - Elmore Web Portal', icon: './favicon.svg' },
  classroom: { title: 'Classes - Google Classroom', icon: 'https://ssl.gstatic.com/classroom/favicon.png' },
  docs: { title: 'AP World History: Unit 5 Analysis - Google Docs', icon: 'https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico' },
  drive: { title: 'Google Drive - My Drive', icon: 'https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png' },
  canvas: { title: 'Dashboard - Canvas LMS', icon: 'https://du11hjcvx0uqb.cloudfront.net/dist/images/favicon-e10d657a73.ico' }
};

function applyTabCloak(cloakKey) {
  state.currentCloak = cloakKey;
  localStorage.setItem('gumball_tab_cloak', cloakKey);
  const preset = CLOAK_PRESETS[cloakKey] || CLOAK_PRESETS.default;
  document.title = preset.title;

  let link = document.querySelector("link[rel*='icon']");
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
  }
  link.href = preset.icon;
}

function loadProxyData() {
  fetch('./proxy_sites.json')
    .then(res => res.json())
    .then(data => {
      if (Array.isArray(data) && data.length > 0) {
        state.proxies = data;
        render();
      }
    })
    .catch(() => {
      render();
    });
}

function toggleFavorite(id) {
  if (state.favorites.includes(id)) {
    state.favorites = state.favorites.filter(fav => fav !== id);
  } else {
    state.favorites.push(id);
  }
  localStorage.setItem('gumball_proxy_favs', JSON.stringify(state.favorites));
  render();
}

function launchProxy(proxy) {
  state.activeProxy = proxy;
  render();
}

function launchCustomUrl(rawUrl, inCloakedTab = false) {
  let url = rawUrl.trim();
  if (!url) return;

  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    if (url.includes('.') && !url.includes(' ')) {
      url = 'https://' + url;
    } else {
      url = 'https://html.duckduckgo.com/html/?q=' + encodeURIComponent(url);
    }
  }

  const customProxy = {
    id: `surf-${Date.now()}`,
    title: url.replace(/^https?:\/\//, '').split('/')[0] || 'Web Viewer',
    category: 'Search',
    character: 'Gumball',
    accent: '#00b4d8',
    description: `Browsing ${url} via sandboxed Elmore proxy frame.`,
    url: url,
    iframe: `<iframe src="${url}" title="Elmore Web Viewer" allow="fullscreen" sandbox="allow-scripts allow-same-origin allow-forms" class="w-full h-full border-0"></iframe>`,
    tags: ['Custom', 'Surf']
  };

  if (inCloakedTab) {
    openAboutBlank(customProxy);
  } else {
    launchProxy(customProxy);
  }
}

function openAboutBlank(proxy) {
  const win = window.open('about:blank', '_blank');
  if (!win) {
    alert('Popups may be blocked. Please enable popups for stealth about:blank window.');
    return;
  }
  win.document.title = 'Google Drive - My Drive';
  const link = win.document.createElement('link');
  link.rel = 'icon';
  link.href = 'https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png';
  win.document.head.appendChild(link);

  const frame = win.document.createElement('iframe');
  frame.src = proxy.url;
  frame.style.width = '100vw';
  frame.style.height = '100vh';
  frame.style.border = 'none';
  frame.style.margin = '0';
  frame.style.padding = '0';
  win.document.body.style.margin = '0';
  win.document.body.style.overflow = 'hidden';
  win.document.body.appendChild(frame);
}

function togglePanic() {
  state.isPanicActive = !state.isPanicActive;
  render();
}

function getFilteredProxies() {
  return state.proxies.filter(p => {
    if (state.activeCategory !== 'all' && p.category !== state.activeCategory) {
      return false;
    }
    if (state.favoritesOnly && !state.favorites.includes(p.id)) {
      return false;
    }
    if (state.searchQuery.trim()) {
      const q = state.searchQuery.toLowerCase();
      const matchTitle = p.title.toLowerCase().includes(q);
      const matchDesc = p.description.toLowerCase().includes(q);
      const matchCat = p.category.toLowerCase().includes(q);
      const matchChar = p.character.toLowerCase().includes(q);
      const matchTags = p.tags && p.tags.some(t => t.toLowerCase().includes(q));
      if (!matchTitle && !matchDesc && !matchCat && !matchChar && !matchTags) {
        return false;
      }
    }
    return true;
  });
}

// Render Master Interface
function render() {
  const root = document.getElementById('root');
  if (!root) return;

  // Miss Simian Pop Quiz Panic Mode
  if (state.isPanicActive) {
    applyTabCloak('classroom');
    root.innerHTML = renderPanicScreenHtml();
    attachPanicEvents();
    return;
  } else {
    applyTabCloak(state.currentCloak);
  }

  const filtered = getFilteredProxies();
  const categories = ['all', 'Games', 'Search', 'Reference', 'Math & Tools', 'Creative', 'Archive'];
  const featured = state.proxies.find(p => p.featured) || state.proxies[0];

  root.innerHTML = `
    <div class="min-h-screen bg-[#050814] text-slate-100 flex flex-col font-sans">
      <!-- Top Navigation Bar -->
      <header class="sticky top-0 z-40 bg-[#050814]/90 backdrop-blur-md border-b border-cyan-900/40">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <a href="#" id="brand-home-link" class="flex items-center gap-2.5 text-lg font-extrabold tracking-tight text-white hover:text-cyan-400 transition-colors whitespace-nowrap">
              <span class="text-xl">🐱</span>
              <span class="bg-gradient-to-r from-cyan-400 via-sky-300 to-orange-400 bg-clip-text text-transparent">THE GUMBALL PROXY</span>
            </a>
          </div>

          <nav class="hidden md:flex items-center gap-5 text-sm font-medium text-slate-400">
            ${categories.map(cat => `
              <button data-cat="${cat}" class="nav-cat-btn transition-colors whitespace-nowrap ${state.activeCategory === cat ? 'text-cyan-400 font-bold underline underline-offset-8 decoration-2' : 'hover:text-slate-200'}">
                ${cat === 'all' ? 'All Portals' : cat}
              </button>
            `).join('')}
          </nav>

          <div class="flex items-center gap-2 sm:gap-3 shrink-0">
            <button id="btn-tab-cloak" title="Disguise tab as Google Docs / Classroom" class="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-cyan-300 bg-cyan-950/50 border border-cyan-800/80 rounded-lg hover:bg-cyan-900/50 transition-colors whitespace-nowrap">
              <span>🎭 Tab Cloak</span>
            </button>

            <button id="btn-vault" title="Inspect proxy_sites.json database & iframes" class="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-amber-300 bg-amber-950/40 border border-amber-800/70 rounded-lg hover:bg-amber-900/50 transition-colors whitespace-nowrap">
              <span>📜 JSON Hub</span>
            </button>

            <button id="btn-panic" title="Panic: Miss Simian Pop Quiz (Hotkey: Esc)" class="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-rose-300 bg-rose-950/60 border border-rose-800/80 rounded-lg hover:bg-rose-900/70 transition-colors whitespace-nowrap">
              <span>🚨 Panic [Esc]</span>
            </button>
          </div>
        </div>
      </header>

      <main class="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <!-- Elmore Banner & Omnibar Hero Section -->
        <section class="relative overflow-hidden rounded-2xl border border-cyan-500/30 bg-slate-900/80 mb-10 shadow-2xl">
          <div class="absolute inset-0 pointer-events-none">
            <img src="./assets/images/gumball_elmore_hero_1791147259529.jpg" alt="Elmore suburban horizon" class="w-full h-full object-cover object-center opacity-30 filter blur-[1px]" />
            <div class="absolute inset-0 bg-gradient-to-r from-[#050814] via-[#050814]/85 to-[#050814]/50"></div>
          </div>

          <div class="relative z-10 p-6 sm:p-10 lg:p-12 max-w-3xl">
            <div class="flex items-center gap-2 text-xs font-bold text-cyan-400 mb-3 tracking-widest uppercase">
              <span>ELMORE VOID ROUTER · 100% UNBLOCKED</span>
            </div>

            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4 [text-wrap:balance]">
              Surf the unblocked web without Miss Simian noticing.
            </h1>

            <p class="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-2xl">
              "Principal Brown said we couldn't surf outside the school filter. He forgot to check the Elmore Void proxy network." — Gumball Watterson
            </p>

            <!-- Omnibar Surf Form -->
            <form id="omnibar-form" class="flex flex-col sm:flex-row gap-3 mb-6">
              <div class="relative flex-1">
                <input
                  type="text"
                  id="omnibar-input"
                  placeholder="Enter any URL (e.g. wikipedia.org) or search query..."
                  value="${state.customUrlInput}"
                  class="w-full bg-[#090d1a] border-2 border-cyan-500/50 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 shadow-inner"
                />
              </div>

              <div class="flex gap-2">
                <button
                  type="submit"
                  class="px-5 py-3.5 bg-gradient-to-r from-cyan-500 to-sky-400 hover:from-cyan-400 hover:to-sky-300 text-slate-950 font-bold text-sm rounded-xl shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
                >
                  🚀 Surf Iframe
                </button>
                <button
                  type="button"
                  id="btn-omnibar-cloak"
                  title="Open in stealth about:blank tab"
                  class="px-4 py-3.5 bg-slate-900 border border-slate-700 hover:border-emerald-500 text-emerald-400 font-semibold text-xs rounded-xl transition-colors whitespace-nowrap"
                >
                  🎭 Cloaked
                </button>
              </div>
            </form>

            <div class="flex flex-wrap items-center gap-3">
              ${featured ? `
                <button id="hero-play-featured" class="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-orange-400 to-amber-300 hover:from-orange-300 hover:to-amber-200 rounded-lg shadow-md transition-all hover:scale-[1.02]">
                  <span>🚚 Play Featured: ${featured.title}</span>
                </button>
              ` : ''}
              <div class="flex items-center gap-2 text-xs text-slate-400 font-mono">
                <span class="text-cyan-400">⚡ Client-Side Proxy</span>
                <span aria-hidden="true" class="text-slate-600">·</span>
                <span class="text-orange-400">🛡️ Zero Tracking</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Search & Filter Controls -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800/80">
          <div class="relative flex-1 max-w-md">
            <input
              type="text"
              id="filter-search-input"
              placeholder="Search unblocked portals or games..."
              value="${state.searchQuery}"
              class="w-full pl-4 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>

          <div class="flex flex-wrap items-center gap-3">
            <button id="btn-favs-filter" class="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border transition-colors ${state.favoritesOnly ? 'bg-amber-400/20 text-amber-300 border-amber-400/50' : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'}">
              <span>★ Bookmarks (${state.favorites.length})</span>
            </button>
          </div>
        </div>

        <!-- Portals Grid Title -->
        <div class="flex items-center justify-between mb-6">
          <div class="flex items-center gap-2 text-sm text-slate-400 font-mono">
            <span class="text-white font-extrabold text-base font-sans">
              ${state.favoritesOnly ? 'Bookmarked Portals' : state.activeCategory === 'all' ? 'Featured Elmore Portals' : `${state.activeCategory} Portals`}
            </span>
            <span aria-hidden="true" class="text-slate-600">·</span>
            <span>${filtered.length} available</span>
          </div>
          ${state.searchQuery ? `
            <button id="btn-clear-search" class="text-xs text-cyan-400 hover:underline">Clear search</button>
          ` : ''}
        </div>

        <!-- Curated Proxy Cards Grid -->
        ${filtered.length > 0 ? `
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            ${filtered.map(proxy => {
              const char = CHARACTERS[proxy.character] || CHARACTERS.Gumball;
              const isFav = state.favorites.includes(proxy.id);
              return `
                <div data-proxy-id="${proxy.id}" class="proxy-card group relative flex flex-col bg-slate-900/80 border border-slate-800 hover:border-cyan-500/60 rounded-xl p-5 cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/40">
                  <div class="flex items-start justify-between gap-3 mb-3">
                    <div class="flex items-center gap-2">
                      <span class="text-2xl">${char.avatar}</span>
                      <div>
                        <div class="text-[11px] font-mono font-bold ${char.color}">
                          ${char.name} Approved
                        </div>
                        <h3 class="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                          ${proxy.title}
                        </h3>
                      </div>
                    </div>

                    <button data-fav-id="${proxy.id}" class="card-fav-btn p-1.5 rounded-lg text-slate-400 hover:text-amber-400 transition-colors" title="${isFav ? 'Remove bookmark' : 'Bookmark portal'}">
                      <span class="${isFav ? 'text-amber-400' : 'text-slate-600'}">★</span>
                    </button>
                  </div>

                  <p class="text-xs text-slate-300 leading-relaxed mb-4 flex-1">
                    ${proxy.description}
                  </p>

                  <div class="flex items-center justify-between pt-3 border-t border-slate-800 text-xs font-mono">
                    <span class="text-slate-400">${proxy.category}</span>
                    <button class="px-3 py-1 bg-cyan-950/60 border border-cyan-800/80 text-cyan-300 group-hover:bg-cyan-500 group-hover:text-slate-950 font-bold rounded-md transition-colors">
                      Launch Iframe →
                    </button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        ` : `
          <div class="py-16 text-center bg-slate-900/30 border border-slate-800/80 rounded-2xl p-6">
            <span class="text-4xl mb-3 block">🐱</span>
            <h3 class="text-lg font-bold text-slate-200 mb-1">No Elmore portals found</h3>
            <p class="text-xs text-slate-400 max-w-sm mx-auto mb-4">Try clearing your filters or enter a custom web address in the Omnibar above!</p>
            <button id="btn-reset-filters" class="px-4 py-2 text-xs font-bold text-cyan-400 bg-cyan-950/40 border border-cyan-800/60 rounded-lg">Reset Filters</button>
          </div>
        `}
      </main>

      <footer class="mt-16 border-t border-slate-800/80 bg-[#050814] py-8 text-xs text-slate-500">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-2">
            <span class="font-extrabold text-cyan-400">THE GUMBALL PROXY</span>
            <span aria-hidden="true">·</span>
            <span>Elmore Junior High Underground Gateway</span>
          </div>

          <div class="flex items-center gap-4 font-mono text-[11px]">
            <span>Press <kbd class="px-1.5 py-0.5 bg-slate-800 rounded text-slate-300">Esc</kbd> for Miss Simian Panic</span>
            <span aria-hidden="true" class="text-slate-700">·</span>
            <button id="footer-json-btn" class="hover:text-cyan-400 transition-colors">
              proxy_sites.json
            </button>
          </div>
        </div>
      </footer>

      <!-- Modals -->
      ${state.activeProxy ? renderProxyModalHtml(state.activeProxy) : ''}
      ${state.isVaultOpen ? renderJsonVaultHtml() : ''}
      ${state.isCloakModalOpen ? renderCloakModalHtml() : ''}
    </div>
  `;

  attachMainEvents();
}

// Render Iframe Proxy Player Viewport
function renderProxyModalHtml(proxy) {
  return `
    <div id="proxy-modal-overlay" class="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex flex-col p-2 sm:p-4 overflow-y-auto">
      <div id="proxy-box" class="max-w-6xl w-full mx-auto bg-slate-900 border border-cyan-500/40 rounded-xl overflow-hidden shadow-2xl flex flex-col my-auto">
        <!-- Control Bar -->
        <div class="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between gap-4">
          <div class="flex items-center gap-3 min-w-0">
            <button id="btn-close-proxy" title="Back to Elmore Portals" class="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors">
              ✕
            </button>
            <div class="truncate">
              <h2 class="text-sm sm:text-base font-bold text-white truncate flex items-center gap-2">
                <span>${proxy.title}</span>
                <span class="text-xs font-mono text-cyan-400 font-normal">(${proxy.category})</span>
              </h2>
            </div>
          </div>

          <div class="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button id="btn-reload-proxy" title="Reload iframe" class="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-colors">
              ⟳
            </button>
            <button id="btn-fs-proxy" title="Fullscreen" class="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-colors">
              ⛶
            </button>
            <button id="btn-cloak-current" title="Open in cloaked about:blank tab" class="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs text-slate-300 hover:text-emerald-400 transition-colors font-mono">
              <span>🎭 Cloaked Tab</span>
            </button>
            <button id="btn-fav-current" class="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 transition-colors">
              ★
            </button>
          </div>
        </div>

        <!-- Sandboxed Iframe Viewport -->
        <div class="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[75vh] bg-slate-950">
          <iframe
            id="active-proxy-frame"
            src="${proxy.url}"
            title="${proxy.title}"
            allow="fullscreen; clipboard-read; clipboard-write"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            class="w-full h-full border-0"
          ></iframe>
        </div>

        <div class="p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
          <div class="truncate max-w-xl">
            <span class="text-cyan-400">Target URL:</span> ${proxy.url}
          </div>
          <div>Elmore Void Proxy Engine Active</div>
        </div>
      </div>
    </div>
  `;
}

// Render Miss Simian's Pop Quiz Panic Screen
function renderPanicScreenHtml() {
  return `
    <div class="fixed inset-0 z-[100] bg-[#fdfbf7] text-slate-900 flex flex-col font-sans select-text overflow-y-auto">
      <header class="bg-amber-100 border-b border-amber-300 px-6 py-3 flex items-center justify-between">
        <div>
          <h1 class="text-base font-bold text-amber-950">ELMORE JUNIOR HIGH SCHOOL · OFFICIAL POP QUIZ</h1>
          <p class="text-xs text-amber-800">Teacher: Miss Simian · Period 3: Advanced Social Studies</p>
        </div>
        <button id="btn-exit-panic" class="px-4 py-2 rounded-lg bg-amber-800 hover:bg-amber-900 text-amber-50 font-bold text-xs shadow transition-colors">
          ← Sneak Back to Gumball Proxy [Esc]
        </button>
      </header>

      <main class="flex-1 max-w-3xl mx-auto w-full p-6 sm:p-10 space-y-6">
        <div class="p-4 bg-white border border-amber-200 rounded-lg shadow-sm">
          <div class="flex justify-between text-xs font-mono text-slate-500 mb-2">
            <span>Student Name: Gumball Tristopher Watterson</span>
            <span>Grade: D- (Provisional)</span>
          </div>
          <h2 class="text-lg font-bold text-slate-800 mb-4">Instructions: Any looking around or suspicious tab-switching will result in immediate detention with Principal Brown!</h2>

          <div class="space-y-4 text-sm leading-relaxed text-slate-700">
            <div>
              <p class="font-bold mb-1">1. If Tina Rex accelerates towards you at 15 km/h, what is the optimal evasive maneuver?</p>
              <ul class="list-disc pl-5 space-y-1 text-slate-600">
                <li>A) Run behind Darwin and hope for the best.</li>
                <li>B) Offer her an oversized Joyful Burger combo meal.</li>
                <li>C) Distract her by asking about dinosaur history.</li>
              </ul>
            </div>

            <div>
              <p class="font-bold mb-1">2. Identify the fundamental cause of the Elmore Rainbow Factory malfunction:</p>
              <ul class="list-disc pl-5 space-y-1 text-slate-600">
                <li>A) Richard pressed the big red button marked "DO NOT TOUCH".</li>
                <li>B) Nicole was forced to work overtime on a Saturday.</li>
                <li>C) Quantum instability in the Joyful Burger fryer.</li>
              </ul>
            </div>

            <div>
              <p class="font-bold mb-1">3. Essay Question: Explain why homework should be substituted with video games.</p>
              <div contenteditable="true" class="w-full h-24 p-3 bg-amber-50/50 border border-amber-300 rounded font-mono text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-amber-500">
                Type notes here to make it look like you are diligently taking Miss Simian's pop quiz...
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  `;
}

// Render Tab Cloaking Selector Modal
function renderCloakModalHtml() {
  return `
    <div id="cloak-modal-overlay" class="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div class="bg-slate-900 border border-cyan-500/40 rounded-xl w-full max-w-md overflow-hidden shadow-2xl p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-base font-bold text-white flex items-center gap-2">
            <span>🎭</span>
            <span>Tab Cloaking Disguise</span>
          </h3>
          <button id="btn-close-cloak" class="text-slate-400 hover:text-white">✕</button>
        </div>

        <p class="text-xs text-slate-300 mb-4 leading-relaxed">
          Disguise the browser tab title and favicon to look like ordinary school or work assignments.
        </p>

        <div class="space-y-2">
          ${Object.entries(CLOAK_PRESETS).map(([key, val]) => `
            <button data-cloak-key="${key}" class="cloak-select-btn w-full text-left p-3 rounded-lg border transition-all flex items-center justify-between ${state.currentCloak === key ? 'bg-cyan-950/60 border-cyan-500 text-cyan-300' : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'}">
              <span class="text-xs font-semibold truncate mr-2">${val.title}</span>
              ${state.currentCloak === key ? '<span class="text-xs text-cyan-400 font-bold">Active</span>' : ''}
            </button>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// Render JSON Hub Modal
function renderJsonVaultHtml() {
  const jsonStr = JSON.stringify(state.proxies, null, 2);

  return `
    <div id="vault-modal-overlay" class="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div class="bg-slate-900 border border-cyan-500/40 rounded-xl w-full max-w-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        <div class="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div class="flex items-center gap-2 text-white">
            <span class="text-amber-400 font-mono text-base">&lt;/&gt;</span>
            <h2 class="text-base font-bold">proxy_sites.json Database Vault</h2>
          </div>
          <button id="btn-close-vault" class="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors">
            ✕
          </button>
        </div>

        <div class="px-6 py-2 bg-slate-950/50 border-b border-slate-800 flex items-center justify-between gap-4">
          <div class="flex items-center gap-2">
            <button id="tab-view-json" class="px-3 py-1.5 text-xs font-semibold rounded-md transition-colors bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
              View JSON Schema (${state.proxies.length} Portals)
            </button>
          </div>
          <div class="flex items-center gap-2">
            <button id="btn-copy-vault" class="px-2.5 py-1 text-xs font-mono text-slate-300 bg-slate-800 hover:bg-slate-700 rounded transition-colors">
              Copy JSON
            </button>
            <button id="btn-download-vault" class="px-2.5 py-1 text-xs font-mono text-slate-300 bg-slate-800 hover:bg-slate-700 rounded transition-colors">
              Download
            </button>
            <button id="btn-reset-vault" class="px-2.5 py-1 text-xs font-mono text-slate-400 hover:text-rose-400 bg-slate-800 hover:bg-slate-700 rounded transition-colors">
              Reset
            </button>
          </div>
        </div>

        <div class="p-6 overflow-y-auto flex-1 font-mono text-xs">
          <div class="space-y-3">
            <div class="p-3 bg-slate-950/80 border border-slate-800 rounded-lg text-slate-400 font-sans text-xs">
              ℹ️ Each unblocked proxy destination is stored as an <code class="text-cyan-300">&lt;iframe&gt;</code> string inside <code class="text-cyan-300">/proxy_sites.json</code>.
            </div>
            <pre class="p-4 bg-slate-950 border border-slate-800/80 rounded-lg text-slate-300 overflow-x-auto select-all leading-relaxed max-h-[50vh]">${escapeHtml(jsonStr)}</pre>
          </div>
        </div>
      </div>
    </div>
  `;
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// Bind Events
function attachMainEvents() {
  document.getElementById('brand-home-link')?.addEventListener('click', (e) => {
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

  document.getElementById('hero-play-featured')?.addEventListener('click', () => {
    const featured = state.proxies.find(p => p.featured) || state.proxies[0];
    if (featured) launchProxy(featured);
  });

  // Omnibar Form Submit
  document.getElementById('omnibar-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = document.getElementById('omnibar-input').value;
    launchCustomUrl(val, false);
  });

  document.getElementById('btn-omnibar-cloak')?.addEventListener('click', () => {
    const val = document.getElementById('omnibar-input').value;
    launchCustomUrl(val || 'https://html.duckduckgo.com', true);
  });

  document.getElementById('btn-tab-cloak')?.addEventListener('click', () => {
    state.isCloakModalOpen = true;
    render();
  });

  document.getElementById('btn-vault')?.addEventListener('click', () => {
    state.isVaultOpen = true;
    render();
  });

  document.getElementById('footer-json-btn')?.addEventListener('click', () => {
    state.isVaultOpen = true;
    render();
  });

  document.getElementById('btn-panic')?.addEventListener('click', togglePanic);

  // Search Filter
  const filterInput = document.getElementById('filter-search-input');
  if (filterInput) {
    filterInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      render();
      const ref = document.getElementById('filter-search-input');
      if (ref) {
        ref.focus();
        ref.setSelectionRange(ref.value.length, ref.value.length);
      }
    });
  }

  document.getElementById('btn-clear-search')?.addEventListener('click', () => {
    state.searchQuery = '';
    render();
  });

  document.getElementById('btn-favs-filter')?.addEventListener('click', () => {
    state.favoritesOnly = !state.favoritesOnly;
    render();
  });

  document.getElementById('btn-reset-filters')?.addEventListener('click', () => {
    state.searchQuery = '';
    state.activeCategory = 'all';
    state.favoritesOnly = false;
    render();
  });

  // Proxy Card Click
  document.querySelectorAll('.proxy-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.card-fav-btn')) return;
      const id = card.dataset.proxyId;
      const proxy = state.proxies.find(p => p.id === id);
      if (proxy) launchProxy(proxy);
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

  // Proxy Modal Controls
  if (state.activeProxy) {
    document.getElementById('btn-close-proxy')?.addEventListener('click', () => {
      state.activeProxy = null;
      render();
    });
    document.getElementById('btn-reload-proxy')?.addEventListener('click', () => {
      const frame = document.getElementById('active-proxy-frame');
      if (frame) frame.src = state.activeProxy.url;
    });
    document.getElementById('btn-fs-proxy')?.addEventListener('click', () => {
      const box = document.getElementById('proxy-box');
      if (box) {
        if (!document.fullscreenElement) box.requestFullscreen();
        else document.exitFullscreen();
      }
    });
    document.getElementById('btn-cloak-current')?.addEventListener('click', () => {
      openAboutBlank(state.activeProxy);
    });
    document.getElementById('btn-fav-current')?.addEventListener('click', () => {
      toggleFavorite(state.activeProxy.id);
    });
  }

  // Cloak Modal Events
  if (state.isCloakModalOpen) {
    document.getElementById('btn-close-cloak')?.addEventListener('click', () => {
      state.isCloakModalOpen = false;
      render();
    });
    document.querySelectorAll('.cloak-select-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        applyTabCloak(btn.dataset.cloakKey);
        state.isCloakModalOpen = false;
        render();
      });
    });
  }

  // JSON Vault Events
  if (state.isVaultOpen) {
    document.getElementById('btn-close-vault')?.addEventListener('click', () => {
      state.isVaultOpen = false;
      render();
    });
    document.getElementById('btn-copy-vault')?.addEventListener('click', () => {
      navigator.clipboard.writeText(JSON.stringify(state.proxies, null, 2));
      const btn = document.getElementById('btn-copy-vault');
      if (btn) {
        btn.innerText = 'Copied!';
        setTimeout(() => { if (btn) btn.innerText = 'Copy JSON'; }, 2000);
      }
    });
    document.getElementById('btn-download-vault')?.addEventListener('click', () => {
      const blob = new Blob([JSON.stringify(state.proxies, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'proxy_sites.json';
      a.click();
      URL.revokeObjectURL(url);
    });
    document.getElementById('btn-reset-vault')?.addEventListener('click', () => {
      if (confirm('Reset proxy catalog to original Elmore defaults?')) {
        state.proxies = DEFAULT_PROXIES;
        render();
      }
    });
  }
}

function attachPanicEvents() {
  document.getElementById('btn-exit-panic')?.addEventListener('click', togglePanic);
}

// Global Hotkeys (Escape or ']' for Miss Simian Panic)
window.addEventListener('keydown', (e) => {
  if (e.key === ']' || (e.key === 'Escape' && !state.activeProxy && !state.isVaultOpen && !state.isCloakModalOpen)) {
    togglePanic();
  }
});

loadProxyData();
