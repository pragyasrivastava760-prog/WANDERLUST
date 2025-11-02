import React from 'react';
import { CommunityMember } from '../types';

const members: CommunityMember[] = [
  { id: 1, name: 'Elena', role: 'Host & Ceramicist', imageUrl: 'https://picsum.photos/200/200?image=1027' },
  { id: 2, name: 'Marcus', role: 'Traveler & Photographer', imageUrl: 'https://picsum.photos/200/200?image=1005' },
  { id: 3, name: 'Anya', role: 'Local Chef', imageUrl: 'https://picsum.photos/200/200?image=1011' },
  { id: 4, name: 'Leo', role: 'Digital Nomad', imageUrl: 'https://picsum.photos/200/200?image=836' },
];

const CommunityMemberCard: React.FC<{ member: CommunityMember, index: number }> = ({ member, index }) => (
    <div className="flex flex-col items-center text-center" style={{ animationDelay: `${index * 100}ms`}}>
        <img src={member.imageUrl} alt={member.name} className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-white" />
        <h3 className="font-bold text-xl mt-4 text-gray-800">{member.name}</h3>
        <p className="text-gray-500">{member.role}</p>
    </div>
);


const CommunityCircles: React.FC = () => {
  return (
    <section id="community" className="py-20 bg-[#F8F5F2]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#4B5548]">Community Circles</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Connect with hosts, fellow travelers, and local creators who make each stay unforgettable.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {members.map((member, index) => (
                <CommunityMemberCard key={member.id} member={member} index={index} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityCircles;
