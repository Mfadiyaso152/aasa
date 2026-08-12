import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import PrayerTimes from './components/PrayerTimes.tsx';
import QuranViewer from './components/QuranViewer.tsx';
import HadithSection from './components/HadithSection.tsx';
import Supplications from './components/Supplications.tsx';
import Footer from './components/Footer.tsx';
import Starfield from './components/Starfield.tsx';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            <Hero setActiveTab={setActiveTab} />
            <PrayerTimes />
          </>
        );
      case 'quran':
        return <QuranViewer />;
      case 'hadith':
        return <HadithSection />;
      case 'supplications':
        return <Supplications />;
      default:
        return <Hero setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className={`min-h-screen relative transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Starfield />
      <div className="absolute inset-0 islamic-pattern pointer-events-none"></div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-grow pt-20 pb-12">
          {renderContent()}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
