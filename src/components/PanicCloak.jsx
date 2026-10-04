import React, { useEffect } from 'react';
import { FileText, ArrowLeft, Printer, Undo, Redo, Bold, Italic, Underline, AlignLeft, MessageSquareShare } from 'lucide-react';

export const PanicCloak = ({ onDismiss }) => {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'AP World History: Unit 5 Analysis - Google Docs';

    // Set favicon to Google Docs icon
    let link = document.querySelector("link[rel*='icon']");
    let originalFavicon = '';
    if (link) {
      originalFavicon = link.href;
      link.href = 'https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === '`') {
        onDismiss();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.title = originalTitle;
      if (link && originalFavicon) {
        link.href = originalFavicon;
      }
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onDismiss]);

  return (
    <div className="fixed inset-0 z-[100] bg-[#f9fbfd] text-slate-800 flex flex-col font-sans select-text overflow-y-auto">
      {/* Google Docs Top Navigation */}
      <header className="bg-white border-b border-slate-200 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-1 rounded bg-blue-500 text-white">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-slate-800">AP World History: Unit 5 Analysis - Industrialization</span>
              <span className="text-xs text-slate-400">Saved to Drive</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-600 mt-0.5">
              <span className="hover:underline cursor-pointer">File</span>
              <span className="hover:underline cursor-pointer">Edit</span>
              <span className="hover:underline cursor-pointer">View</span>
              <span className="hover:underline cursor-pointer">Insert</span>
              <span className="hover:underline cursor-pointer">Format</span>
              <span className="hover:underline cursor-pointer">Tools</span>
              <span className="hover:underline cursor-pointer">Extensions</span>
              <span className="hover:underline cursor-pointer">Help</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onDismiss}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors"
            title="Exit stealth disguise (Hotkey: Esc)"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Arcade [Esc]</span>
          </button>
          <div className="flex items-center gap-1 text-slate-600 bg-blue-50 px-3 py-1.5 rounded-full text-xs font-semibold text-blue-700">
            <MessageSquareShare className="w-3.5 h-3.5" />
            <span>Share</span>
          </div>
        </div>
      </header>

      {/* Docs Action Ribbon */}
      <div className="bg-[#edf2fa] px-4 py-1.5 border-b border-slate-300 flex items-center gap-3 text-slate-700 text-xs overflow-x-auto">
        <Undo className="w-3.5 h-3.5 cursor-pointer" />
        <Redo className="w-3.5 h-3.5 cursor-pointer" />
        <Printer className="w-3.5 h-3.5 cursor-pointer" />
        <div className="h-4 w-px bg-slate-300" />
        <span className="bg-white px-2 py-0.5 rounded border border-slate-300 text-xs">100%</span>
        <div className="h-4 w-px bg-slate-300" />
        <span className="bg-white px-2 py-0.5 rounded border border-slate-300 text-xs">Normal text</span>
        <span className="bg-white px-2 py-0.5 rounded border border-slate-300 text-xs">Arial</span>
        <span className="bg-white px-2 py-0.5 rounded border border-slate-300 text-xs">11</span>
        <div className="h-4 w-px bg-slate-300" />
        <Bold className="w-3.5 h-3.5 cursor-pointer" />
        <Italic className="w-3.5 h-3.5 cursor-pointer" />
        <Underline className="w-3.5 h-3.5 cursor-pointer" />
        <div className="h-4 w-px bg-slate-300" />
        <AlignLeft className="w-3.5 h-3.5 cursor-pointer" />
      </div>

      {/* Realistic Document Paper */}
      <main className="flex-1 bg-[#f0f4f9] p-4 sm:p-8 flex justify-center">
        <div
          contentEditable
          suppressContentEditableWarning
          className="w-full max-w-[816px] min-h-[1056px] bg-white shadow-md border border-slate-200 p-12 sm:p-16 text-slate-800 font-serif leading-relaxed focus:outline-none"
        >
          <h1 className="text-2xl font-bold font-sans mb-4 text-slate-900">
            Socio-Economic Shifts in the First and Second Industrial Revolutions
          </h1>
          <p className="text-sm text-slate-500 mb-6 font-sans">
            Student: Zachary Collins · AP World History · Mr. Henderson · Period 4
          </p>

          <h2 className="text-lg font-bold font-sans mt-6 mb-2 text-slate-800">
            1. The Transition from Agrarian to Mechanized Production
          </h2>
          <p className="mb-4 text-justify">
            The inception of the Industrial Revolution in late eighteenth-century Britain marked an unprecedented departure from agrarian self-sufficiency. Innovations such as James Watt's refined steam engine, James Hargreaves' spinning jenny, and Richard Arkwright’s water frame initiated a structural reorganization of labor from decentralized domestic cottages into centralized urban factories.
          </p>

          <h2 className="text-lg font-bold font-sans mt-6 mb-2 text-slate-800">
            2. Demographic Realignment and Urbanization
          </h2>
          <p className="mb-4 text-justify">
            Enclosure Acts in Great Britain systematically consolidated customary peasant holdings, forcing smallholders into burgeoning urban manufacturing centers such as Manchester, Birmingham, and Leeds. The rapid influx of labor precipitated acute social strains, including tenement overcrowding, deficient sanitary infrastructure, and the expansion of wage labor regimes.
          </p>

          <h2 className="text-lg font-bold font-sans mt-6 mb-2 text-slate-800">
            3. The Second Industrial Revolution & Technological Systems
          </h2>
          <p className="mb-4 text-justify">
            By the latter half of the nineteenth century, the locus of industrial expansion expanded beyond textiles and pig iron toward synthetic chemicals, electrical grid distribution, and the Bessemer steel process. National railway networks unified continental domestic markets and accelerated maritime steam commerce, fundamentally transforming global commodity chains.
          </p>
        </div>
      </main>
    </div>
  );
};
