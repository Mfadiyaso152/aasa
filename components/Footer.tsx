
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-slate-950/50 backdrop-blur-md relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center border border-amber-500/30">
            <span className="text-amber-500 text-sm">🌙</span>
          </div>
          <span className="text-xl font-bold gold-gradient font-reem">صدقة جارية</span>
        </div>
        
        <p className="text-slate-500 text-xs md:text-sm font-light text-center max-w-md leading-relaxed">
          تم إنشاء هذا الموقع كصدقة جارية. نسأل الله أن يتقبل منا ومنكم صالح الأعمال، وأن يغفر لموتانا وموتى المسلمين أجمعين.
        </p>

        <div className="flex items-center gap-4 text-slate-600">
           <div className="w-1 h-1 rounded-full bg-amber-500/40"></div>
           <p className="text-[10px] uppercase tracking-[0.2em]">1447 Hijri Edition</p>
           <div className="w-1 h-1 rounded-full bg-amber-500/40"></div>
        </div>
        
        <p className="text-[10px] text-slate-700">
          © {new Date().getFullYear()} جميع الحقوق محفوظة
        </p>
      </div>
    </footer>
  );
};

export default Footer;
