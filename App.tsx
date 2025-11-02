import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CuratedStays from './components/CuratedStays';
import LocalExperiences from './components/LocalExperiences';
import StayJournal from './components/StayJournal';
import CommunityCircles from './components/CommunityCircles';
import WorkMode from './components/WorkMode';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#F8F5F2] text-gray-800 font-sans">
      <Header />
      <main>
        <Hero />
        <CuratedStays />
        <LocalExperiences />
        <StayJournal />
        <CommunityCircles />
        <WorkMode />
      </main>
      <Footer />
    </div>
  );
};

export default App;
