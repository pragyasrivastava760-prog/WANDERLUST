import React from 'react';
import { WifiIcon } from './icons/WifiIcon';
import { DeskIcon } from './icons/DeskIcon';
import { CoffeeIcon } from './icons/CoffeeIcon';

const features = [
  {
    icon: WifiIcon,
    title: 'High-Speed Wi-Fi',
    description: 'Stay connected with reliable, fast internet for seamless work and streaming.'
  },
  {
    icon: DeskIcon,
    title: 'Dedicated Workspaces',
    description: 'Find comfort and focus with ergonomic chairs and proper desk setups.'
  },
  {
    icon: CoffeeIcon,
    title: 'Premium Amenities',
    description: 'Enjoy quality coffee machines, quiet surroundings, and inspiring views.'
  }
];

const WorkMode: React.FC = () => {
  return (
    <section id="work-mode" className="py-20 bg-white">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row-reverse items-center gap-12">
        <div className="lg:w-1/2">
          <img src="https://picsum.photos/1000/800?image=17" alt="A beautiful remote work setup" className="rounded-lg shadow-xl" />
        </div>
        <div className="lg:w-1/2">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#4B5548]">Flexible Work Mode</h2>
          <p className="text-lg text-gray-600 mt-4 mb-8">
            Blend productivity and wellness with curated stays optimized for the modern remote professional.
          </p>
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-[#EAE6E1] flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-[#4B5548]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 mt-1">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkMode;
