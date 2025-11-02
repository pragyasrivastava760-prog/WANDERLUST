import React from 'react';
import { Experience } from '../types';

const experiences: Experience[] = [
  { id: 1, title: 'Artisanal Pottery Workshop', category: 'Creative', imageUrl: 'https://picsum.photos/600/800?image=225' },
  { id: 2, title: 'Farm-to-Table Slow Dining', category: 'Food & Drink', imageUrl: 'https://picsum.photos/600/800?image=431' },
  { id: 3, title: 'Guided Forest Bathing', category: 'Wellness', imageUrl: 'https://picsum.photos/600/800?image=155' },
  { id: 4, title: 'Local Vineyard Tour', category: 'Tasting', imageUrl: 'https://picsum.photos/600/800?image=1050' },
];

const ExperienceCard: React.FC<{ experience: Experience }> = ({ experience }) => (
    <div className="relative group overflow-hidden rounded-lg">
        <img src={experience.imageUrl} alt={experience.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white">
            <span className="text-sm uppercase tracking-wider">{experience.category}</span>
            <h3 className="font-serif text-2xl font-bold mt-1">{experience.title}</h3>
        </div>
    </div>
);


const LocalExperiences: React.FC = () => {
  return (
    <section id="experiences" className="py-20 bg-[#F8F5F2]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#4B5548]">Local Experiences</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Discover community-led workshops, slow dining, and hidden gems.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 h-[500px]">
            {experiences.map(exp => (
                <ExperienceCard key={exp.id} experience={exp} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default LocalExperiences;
