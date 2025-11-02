import React from 'react';
import MoodSearch from './MoodSearch';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
      <img
        src="https://picsum.photos/1600/1200?image=1060"
        alt="A serene landscape"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20 flex flex-col items-center px-4">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
          Find Your Stay,
        </h1>
        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight">
          Find Your Story.
        </h2>
        <p className="max-w-2xl text-lg md:text-xl mb-12 font-light">
          Discover boutique homes and curated stays, verified for design, comfort, and story.
        </p>
        <MoodSearch />
      </div>
    </section>
  );
};

export default Hero;
