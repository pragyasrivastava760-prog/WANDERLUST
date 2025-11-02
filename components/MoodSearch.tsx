import React, { useState } from 'react';
import { Mood } from '../types';

const MoodSearch: React.FC = () => {
  const moods: Mood[] = [Mood.Calm, Mood.Creative, Mood.Social, Mood.Secluded];
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);

  return (
    <div className="bg-white/20 backdrop-blur-md p-4 rounded-full">
      <div className="flex items-center space-x-2 md:space-x-4">
        {moods.map((mood) => (
          <button
            key={mood}
            onClick={() => setSelectedMood(mood)}
            className={`px-4 py-2 md:px-6 md:py-3 text-sm md:text-base rounded-full transition-all duration-300 ${
              selectedMood === mood
                ? 'bg-white text-gray-800 shadow-lg'
                : 'text-white hover:bg-white/20'
            }`}
          >
            {mood}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoodSearch;
