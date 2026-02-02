
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PrayerTimes from './components/PrayerTimes';
import QuranViewer from './components/QuranViewer';
import HadithSection from './components/HadithSection';
import Supplications from './components/Supplications';
import Footer from './components/Footer';
import Starfield from './components/Starfield';

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
        <main className="flex-grow pt-20 pb-20 lg:pb-0">
          {renderContent()}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
