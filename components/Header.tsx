
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', calendar: 'islamic-uma', numberingSystem: 'arab' };
    const formatter = new Intl.DateTimeFormat('ar-SA', options);
    setCurrentDate(formatter.format(new Date()));
  }, []);

  const navItems = [
    { id: 'home', label: 'الرئيسية', icon: '🏠' },
    { id: 'quran', label: 'المصحف', icon: '📖' },
    { id: 'hadith', label: 'الأحاديث', icon: '✨' },
    { id: 'supplications', label: 'الأدعية', icon: '🤲' },
  ];

  return (
    <>
      {/* Top Header */}
      <header className="px-4 md:px-6 py-4 flex justify-between items-center bg-slate-950/80 backdrop-blur-md fixed top-0 w-full z-50 border-b border-white/5">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
          <div className="w-9 h-9 md:w-10 md:h-10 bg-amber-500/20 rounded-xl flex items-center justify-center border border-amber-500/30 shadow-inner">
            <span className="text-lg md:text-xl">🕌</span>
          </div>
          <div>
            <h1 className="text-lg md:text-xl font-bold gold-gradient font-reem leading-none">صدقة</h1>
            <p className="text-[9px] md:text-[10px] text-amber-400/70 tracking-widest mt-1">{currentDate}</p>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-1 bg-slate-900/50 p-1 rounded-full border border-white/5">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === item.id 
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="text-left hidden md:block border-l border-white/10 pl-4">
             <p className="text-[10px] text-slate-500 uppercase tracking-tighter">صدقة جارية عن أرواح المسلمين</p>
          </div>
          <button 
            onClick={() => setActiveTab('quran')}
            className="bg-amber-600/10 hover:bg-amber-600/20 text-amber-500 border border-amber-500/30 px-4 py-2 md:px-5 md:py-2 rounded-xl md:rounded-2xl transition-all text-xs md:text-sm font-bold"
          >
            المصحف
          </button>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 w-full bg-slate-950/90 backdrop-blur-xl border-t border-white/10 z-50 px-2 pb-safe">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="flex flex-col items-center justify-center flex-1 gap-1 group relative"
            >
              {activeTab === item.id && (
                <span className="absolute -top-1 w-8 h-1 bg-amber-500 rounded-full blur-sm animate-pulse"></span>
              )}
              <span className={`text-xl transition-transform ${activeTab === item.id ? 'scale-110 -translate-y-1' : 'opacity-60 grayscale'}`}>
                {item.icon}
              </span>
              <span className={`text-[10px] font-bold transition-colors ${activeTab === item.id ? 'text-amber-500' : 'text-slate-500'}`}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Header;
