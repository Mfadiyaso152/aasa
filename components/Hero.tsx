import React from 'react';

interface HeroProps {
  setActiveTab?: (tab: string) => void;
}

const Hero: React.FC<HeroProps> = () => {
  return (
    <section id="hero" className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      <div className="max-w-5xl space-y-8 relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold font-amiri leading-relaxed text-slate-100 space-y-3">
          <div className="block">"يَا أَيَّتُهَا النَّفْسُ الْمُطْمَئِنَّةُ <span className="text-white font-normal">۞</span></div>
          <div className="block text-white">ارْجِعِي إِلَى رَبِّكِ رَاضِيَةً مَرْضِيَّةً"</div>
        </h1>

        <div className="py-4 space-y-4">
          <p className="text-2xl md:text-4xl font-amiri text-white font-bold">
            الموقع صدقه عن عبدالله زكريا - رحمه الله
          </p>
          <div className="h-px w-24 bg-white/20 mx-auto"></div>
        </div>
        
        <p className="text-lg md:text-2xl text-slate-200 font-amiri leading-relaxed max-w-3xl mx-auto">
          اللهم اغفر له وارحمه، وعافه واعفُ عنه، وأكرم نزله، ووسع مدخله، واغسله بالماء والثلج والبرد، ونقه من الخطايا كما ينقى الثوب الأبيض من الدنس. عن كل المسلمين
        </p>
      </div>
    </section>
  );
};

export default Hero;
