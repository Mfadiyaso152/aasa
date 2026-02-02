
import React, { useState, useEffect } from 'react';

interface Surah {
  number: number;
  name: string;
  englishName: string;
  numberOfAyahs: number;
  revelationType: string;
}

interface Ayah {
  numberInSurah: number;
  text: string;
}

const QuranViewer: React.FC = () => {
  const [surahs, setSurahs] = useState<Surah[]>([]);
  const [selectedSurah, setSelectedSurah] = useState<number | null>(null);
  const [ayahs, setAyahs] = useState<Ayah[]>([]);
  const [loading, setLoading] = useState(true);
  const [readingLoading, setReadingLoading] = useState(false);

  useEffect(() => {
    fetch('https://api.alquran.cloud/v1/surah')
      .then(res => res.json())
      .then(data => {
        setSurahs(data.data);
        setLoading(false);
      });
  }, []);

  const loadSurah = async (num: number) => {
    setReadingLoading(true);
    setSelectedSurah(num);
    try {
      const res = await fetch(`https://api.alquran.cloud/v1/surah/${num}`);
      const data = await res.json();
      setAyahs(data.data.ayahs);
    } catch (err) {
      console.error(err);
    } finally {
      setReadingLoading(false);
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center text-amber-500">جاري تحميل المصحف الشريف...</div>;

  return (
    <div id="quran-view" className="max-w-7xl mx-auto px-6 py-12">
      {!selectedSurah ? (
        <div className="space-y-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold font-reem gold-gradient mb-4">المصحف الشريف</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">تصفح وقرأ سور القرآن الكريم كاملة بتصميم مريح للعين</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {surahs.map(surah => (
              <div 
                key={surah.number}
                onClick={() => loadSurah(surah.number)}
                className="group p-6 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-amber-500/50 cursor-pointer transition-all hover:bg-slate-900/80 relative overflow-hidden"
              >
                <div className="absolute -left-2 -bottom-2 text-6xl opacity-5 group-hover:opacity-10 transition-opacity font-bold">
                  {surah.number}
                </div>
                <div className="flex justify-between items-center relative z-10">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 font-bold border border-amber-500/20">
                    {surah.number}
                  </div>
                  <h3 className="text-xl font-bold font-amiri text-slate-100">{surah.name}</h3>
                </div>
                <div className="mt-4 flex justify-between text-[10px] text-slate-500 font-medium">
                  <span>{surah.revelationType === 'Meccan' ? 'مكية' : 'مدنية'}</span>
                  <span>{surah.numberOfAyahs} آية</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-8 animate-in fade-in duration-500">
          <button 
            onClick={() => setSelectedSurah(null)}
            className="flex items-center gap-2 text-amber-500 hover:text-amber-400 font-bold"
          >
            <span>→</span> العودة لفهرس السور
          </button>
          
          <div className="bg-slate-900/60 rounded-[3rem] p-8 md:p-16 border border-white/10 shadow-2xl relative">
             {readingLoading ? (
               <div className="flex items-center justify-center py-20 text-amber-500">جاري التحميل...</div>
             ) : (
               <>
                 <div className="text-center mb-12">
                   <h2 className="text-5xl font-bold font-amiri gold-gradient mb-4">
                    {surahs.find(s => s.number === selectedSurah)?.name}
                   </h2>
                   {selectedSurah !== 9 && (
                     <p className="text-3xl font-amiri text-amber-500/80 mt-10">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>
                   )}
                 </div>
                 <div className="text-right space-y-4 leading-[2.5] md:leading-[3]">
                   {ayahs.map(ayah => (
                     <span key={ayah.numberInSurah} className="text-2xl md:text-3xl font-amiri text-slate-100">
                       {ayah.text} 
                       <span className="inline-flex w-10 h-10 items-center justify-center rounded-full border border-amber-500/30 text-xs text-amber-500 mx-2 font-bold translate-y-1">
                        {ayah.numberInSurah}
                       </span>
                     </span>
                   ))}
                 </div>
               </>
             )}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuranViewer;
