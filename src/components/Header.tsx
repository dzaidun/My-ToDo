import type { Language } from '../utils/translations';

interface HeaderProps {
  labels: any;
  lang: Language;
  setLang: (l: Language) => void;
}

export default function Header({ labels, lang, setLang }: HeaderProps) {
  return (
    <>
      {/* Language switcher (UA / EN) — toggles `lang` in the hook */}
      <div className="absolute top-6 right-6 flex gap-1 bg-slate-100 p-1 rounded-lg">
        <button
          onClick={() => setLang('ua')}
          className={`px-2 py-1 text-[10px] font-bold rounded-md transition-all ${
            lang === 'ua' ? 'bg-white text-slate-800' : 'text-slate-400 hover:text-slate-600'
          }`}
        >
          UA
        </button>
        <button
          onClick={() => setLang('en')}
          className={`px-2 py-1 text-[10px] font-bold rounded-md transition-all ${
            lang === 'en' ? 'bg-white text-slate-800' : 'text-slate-400 hover:text-slate-600'
          }`}
        >
          EN
        </button>
      </div>

      {/* Header: app icon + localized title */}
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-[#f26440] p-2 rounded-lg text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        </div>
        <h1 className="text-xl font-bold text-slate-800">{labels.title}</h1>
      </div>
    </>
  );
}
