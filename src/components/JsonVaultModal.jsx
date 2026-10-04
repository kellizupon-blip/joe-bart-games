import React, { useState } from 'react';
import { X, Copy, Check, Download, Plus, RotateCcw, Code2 } from 'lucide-react';

export const JsonVaultModal = ({
  games,
  onAddGame,
  onResetDefaults,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState('view');
  const [copied, setCopied] = useState(false);

  // Form states for adding custom game
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Arcade');
  const [description, setDescription] = useState('');
  const [controls, setControls] = useState('');
  const [iframeInput, setIframeInput] = useState('');
  const [tagsInput, setTagsInput] = useState('');

  const jsonString = JSON.stringify(games, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'games.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleAddGameSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !iframeInput.trim()) return;

    let finalIframe = iframeInput.trim();
    let finalSrc = iframeInput.trim();

    // If user provided just a URL, wrap it into an iframe string
    if (!finalIframe.startsWith('<iframe')) {
      finalSrc = finalIframe;
      finalIframe = `<iframe src="${finalIframe}" title="${title.trim()}" allow="fullscreen" sandbox="allow-scripts allow-same-origin" class="w-full h-full border-0"></iframe>`;
    } else {
      const match = finalIframe.match(/src=["']([^"']+)["']/);
      if (match) finalSrc = match[1];
    }

    const tags = tagsInput
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const newGame = {
      id: `custom-${Date.now()}`,
      title: title.trim(),
      category,
      rating: 5.0,
      plays: 1,
      description: description.trim() || 'Custom user embedded game.',
      controls: controls.trim() || 'Standard mouse & keyboard controls.',
      tags: tags.length > 0 ? tags : ['Custom', category],
      thumbnail: '',
      iframeSrc: finalSrc,
      iframe: finalIframe,
      isCustom: true,
    };

    onAddGame(newGame);
    setActiveTab('view');
    // Clear form
    setTitle('');
    setDescription('');
    setControls('');
    setIframeInput('');
    setTagsInput('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-xl w-full max-w-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white">
            <Code2 className="w-5 h-5 text-cyan-400" />
            <h2 className="text-base font-bold">games.json Database Manager</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="px-6 py-2 bg-slate-950/50 border-b border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('view')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeTab === 'view'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              View JSON Schema ({games.length} Games)
            </button>
            <button
              onClick={() => setActiveTab('add')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeTab === 'add'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              + Add Custom Iframe Game
            </button>
          </div>

          {activeTab === 'view' && (
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 px-2.5 py-1 text-xs font-mono text-slate-300 bg-slate-800 hover:bg-slate-700 rounded transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center gap-1 px-2.5 py-1 text-xs font-mono text-slate-300 bg-slate-800 hover:bg-slate-700 rounded transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export</span>
              </button>
              <button
                onClick={onResetDefaults}
                title="Reset to default games"
                className="flex items-center gap-1 px-2.5 py-1 text-xs font-mono text-slate-400 hover:text-rose-400 bg-slate-800 hover:bg-slate-700 rounded transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 font-mono text-xs">
          {activeTab === 'view' ? (
            <div className="space-y-3">
              <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-lg text-slate-400 font-sans text-xs">
                ℹ️ All game titles are stored with their respective <code className="text-cyan-300">&lt;iframe&gt;</code> embed strings inside <code className="text-cyan-300">/public/games.json</code>. You can copy or download this file anytime.
              </div>
              <pre className="p-4 bg-slate-950 border border-slate-800/80 rounded-lg text-slate-300 overflow-x-auto select-all leading-relaxed max-h-[50vh]">
                {jsonString}
              </pre>
            </div>
          ) : (
            <form onSubmit={handleAddGameSubmit} className="space-y-4 font-sans text-sm">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Game Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Pixel Drift Racing"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-xs"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:border-cyan-500 text-xs"
                  >
                    <option value="Arcade">Arcade</option>
                    <option value="Action">Action</option>
                    <option value="Puzzle">Puzzle</option>
                    <option value="Retro">Retro</option>
                    <option value="Casual">Casual</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Tags (comma separated)</label>
                  <input
                    type="text"
                    placeholder="Speed, 2D, Racing"
                    value={tagsInput}
                    onChange={(e) => setTagsInput(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Iframe Embed Code or URL *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder='<iframe src="https://..." allow="fullscreen"></iframe> or direct URL'
                  value={iframeInput}
                  onChange={(e) => setIframeInput(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-mono text-xs"
                />
                <p className="text-[11px] text-slate-500 mt-1">
                  Stored as an iframe in the game catalog.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Controls Description</label>
                  <input
                    type="text"
                    placeholder="e.g. Arrow keys to steer, Space to brake"
                    value={controls}
                    onChange={(e) => setControls(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Brief Description</label>
                  <input
                    type="text"
                    placeholder="e.g. High speed drift racing on retro neon tracks."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-xs"
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setActiveTab('view')}
                  className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Save Game to JSON</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
