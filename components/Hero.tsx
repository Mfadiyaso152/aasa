
import React from 'react';

interface HeroProps {
  setActiveTab?: (tab: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setActiveTab }) => {
  return (
    <section id="hero" className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 -right-20 opacity-10 pointer-events-none animate-float">
        <img src="https://cdn-icons-png.flaticon.com/512/1041/1041551.png" className="w-64 invert" alt="" />
      </div>

      <div className="max-w-5xl space-y-8 relative z-10">
        <div className="inline-block px-6 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 text-xs md:text-sm font-bold mb-4 backdrop-blur-md">
          ✨ صَدَقَةٌ جَارِيَةٌ نَسْأَلُكُمُ الدُّعَاء
        </div>
        
        <h1 className="text-4xl md:text-7xl font-bold font-amiri leading-tight text-slate-100">
          "يَا أَيَّتُهَا النَّفْسُ الْمُطْمَئِنَّةُ <span className="text-amber-500">۞</span> ارْجِعِي إِلَى رَبِّكِ رَاضِيَةً مَرْضِيَّةً"
        </h1>

        <div className="py-4">
          <p className="text-2xl md:text-4xl font-amiri text-amber-500 gold-gradient">
            صدقة جارية عن أرواح المسلمين والمسلمات
          </p>
          <div className="h-px w-24 bg-amber-500/30 mx-auto mt-4"></div>
        </div>
        
        <p className="text-lg md:text-2xl text-slate-400 font-light max-w-3xl mx-auto leading-relaxed font-amiri">
          اللهم اغفر لهم وارحمهم، وعافهم واعفُ عنهم، وأكرم نزلهم، ووسع مدخلهم، واغسلهم بالماء والثلج والبرد، ونقهم من الخطايا كما ينقى الثوب الأبيض من الدنس.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <button 
            onClick={() => setActiveTab?.('quran')} 
            className="w-full sm:w-auto px-10 py-5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black rounded-3xl shadow-2xl shadow-amber-500/30 transition-all transform hover:scale-105"
          >
            تصفح المصحف الشريف
          </button>
          <button 
            onClick={() => window.scrollTo({top: document.getElementById('prayer-times')?.offsetTop, behavior: 'smooth'})} 
            className="w-full sm:w-auto px-10 py-5 bg-slate-800/40 hover:bg-slate-800 border border-white/10 text-white font-bold rounded-3xl transition-all"
          >
            مواقيت الصلاة
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 animate-bounce opacity-30 hidden md:block">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
