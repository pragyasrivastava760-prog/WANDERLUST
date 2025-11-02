import React, { useState } from 'react';
import { generateJournalPrompt } from '../services/geminiService';
import { SparklesIcon } from './icons/SparklesIcon';

const StayJournal: React.FC = () => {
  const [userInput, setUserInput] = useState('');
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGeneratePrompt = async () => {
    if (!userInput.trim()) {
      setError('Please describe your stay or feeling.');
      return;
    }
    setIsLoading(true);
    setError('');
    setPrompt('');
    try {
      const generatedPrompt = await generateJournalPrompt(userInput);
      setPrompt(generatedPrompt);
    } catch (err) {
      setError('Sorry, we couldn\'t generate a prompt right now. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="journal" className="py-20 bg-white">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#4B5548]">Stay Journals</h2>
          <p className="text-lg text-gray-600 mt-4 mb-8">
            Capture your memories with personalized trip diaries. Describe your stay or a feeling, and let our AI craft a unique journaling prompt for you.
          </p>
          <div className="space-y-4">
            <textarea
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="e.g., 'a rainy afternoon in a cozy mountain cabin'"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B5548] focus:outline-none transition-shadow"
              rows={3}
            />
            <button
              onClick={handleGeneratePrompt}
              disabled={isLoading}
              className="w-full flex items-center justify-center bg-[#4B5548] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 disabled:bg-gray-400"
            >
              {isLoading ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <SparklesIcon className="h-5 w-5 mr-2" />
              )}
              {isLoading ? 'Generating...' : 'Get Journaling Prompt'}
            </button>
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>
        </div>
        <div className="lg:w-1/2 w-full min-h-[200px] bg-[#F8F5F2] rounded-lg p-8 flex items-center justify-center">
          {prompt ? (
            <p className="font-serif text-2xl text-center text-gray-700 italic">"{prompt}"</p>
          ) : (
            <p className="text-gray-500 text-center">Your personal journaling prompt will appear here...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default StayJournal;
