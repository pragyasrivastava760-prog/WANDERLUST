import React from 'react';
import { Stay, Mood } from '../types';
import { LocationIcon } from './icons/LocationIcon';

const stays: Stay[] = [
  {
    id: 1,
    name: 'The Glass Cabin',
    location: 'Forest Retreat, WA',
    description: 'A minimalist cabin surrounded by nature, perfect for reflection.',
    imageUrl: 'https://picsum.photos/800/600?image=29',
    moods: [Mood.Calm, Mood.Secluded, Mood.Creative],
  },
  {
    id: 2,
    name: 'Urban Artist Loft',
    location: 'Downtown Arts District, NY',
    description: 'A vibrant, light-filled space designed to inspire your next creation.',
    imageUrl: 'https://picsum.photos/800/600?image=163',
    moods: [Mood.Creative, Mood.Social],
  },
  {
    id: 3,
    name: 'Coastal Farmhouse',
    location: 'Seaside Village, ME',
    description: 'Gather with friends in this charming home with ocean views.',
    imageUrl: 'https://picsum.photos/800/600?image=835',
    moods: [Mood.Social, Mood.Calm],
  },
];

const StayCard: React.FC<{ stay: Stay }> = ({ stay }) => (
  <div className="group overflow-hidden rounded-lg shadow-lg bg-white">
    <div className="overflow-hidden">
      <img src={stay.imageUrl} alt={stay.name} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
    </div>
    <div className="p-6">
      <h3 className="font-serif text-2xl font-bold text-gray-800 mb-2">{stay.name}</h3>
      <div className="flex items-center text-gray-500 mb-3">
        <LocationIcon className="h-4 w-4 mr-2" />
        <span>{stay.location}</span>
      </div>
      <p className="text-gray-600 mb-4">{stay.description}</p>
      <div className="flex flex-wrap gap-2">
        {stay.moods.map(mood => (
          <span key={mood} className="text-xs font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full">{mood}</span>
        ))}
      </div>
    </div>
  </div>
);

const CuratedStays: React.FC = () => {
  return (
    <section id="stays" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#4B5548]">Curated Stays</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Boutique homes and unique stays, verified for design, comfort, and story.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stays.map(stay => (
            <StayCard key={stay.id} stay={stay} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuratedStays;
