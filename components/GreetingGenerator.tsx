
import React, { useState } from 'react';
import { generateRamadanGreeting } from '../services/geminiService';

const GreetingGenerator: React.FC = () => {
  const [name, setName] = useState('');
  const [tone, setTone] = useState('warm');
  const [greeting, setGreeting] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!name.trim()) return;
    setLoading(true);
    const result = await generateRamadanGreeting(name, tone);
    setGreeting(result);
    setLoading(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(greeting);
    alert('تم نسخ التهنئة!');
  };

  return (
    <section id="generator" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-[2.5rem] p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="relative z-10 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 font-amiri">مولّد تهاني رمضان من محمد</h2>
            <p className="text-slate-400">ادخل اسمك ودع ذكاء محمد الاصطناعي يصيغ لك تهنئة فريدة</p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-slate-400 mr-2">اسمك الكريم</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="مثال: أحمد"
                  className="w-full bg-slate-800/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-amber-500/50 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-slate-400 mr-2">أسلوب التهنئة</label>
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className="w-full bg-slate-800/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-amber-500/50 transition-all appearance-none cursor-pointer"
                >
                  <option value="warm">ودي ودافئ</option>
                  <option value="formal">رسمي وفصيح</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={loading || !name}
              className={`w-full py-4 rounded-2xl font-bold text-lg transition-all transform active:scale-95 flex items-center justify-center gap-3 ${
                loading ? 'bg-slate-700 cursor-not-allowed' : 'bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-lg shadow-amber-500/20'
              }`}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-slate-900/30 border-t-slate-900 animate-spin rounded-full"></div>
                  جاري الصياغة...
                </>
              ) : (
                'اصنع سحر رمضان ✨'
              )}
            </button>
          </div>

          {greeting && (
            <div className="mt-12 p-8 rounded-3xl bg-amber-500/5 border border-amber-500/20 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="relative">
                <p className="text-xl md:text-2xl text-amber-100 font-amiri leading-relaxed text-center italic">
                  "{greeting}"
                </p>
                <div className="mt-8 flex justify-center gap-4">
                  <button
                    onClick={copyToClipboard}
                    className="px-6 py-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 rounded-full text-sm font-medium border border-amber-500/30 transition-all"
                  >
                    نسخ النص
                  </button>
                  <button
                    onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(greeting)}`)}
                    className="px-6 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium border border-emerald-500/30 transition-all"
                  >
                    واتساب
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GreetingGenerator;
