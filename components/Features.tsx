
import React from 'react';

const features = [
  {
    icon: "🏮",
    title: "فانوس رمضان",
    desc: "أجواء إسلامية دافئة وتصاميم تحاكي روحانية الشهر الكريم."
  },
  {
    icon: "📖",
    title: "دعاء اليوم",
    desc: "شارك مع أحبائك أدعية مختارة يومياً من منصة محمد."
  },
  {
    icon: "✨",
    title: "تهاني ذكية",
    desc: "استخدم الذكاء الاصطناعي لصياغة أروع التهاني الشخصية."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="p-8 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-amber-500/30 transition-all hover:bg-slate-900/60 group">
            <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform inline-block">
              {f.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-100 mb-3">{f.title}</h3>
            <p className="text-slate-400 leading-relaxed font-light">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
