// src/CardGrid.jsx
import React from 'react';
import { Beaker, BeakerIcon, EarthIcon, HandshakeIcon, HeartPulseIcon, LeafIcon, NotebookIcon } from 'lucide-react';
import Card from './Cards';

const CardGrid = () => {
  const cards = [
    { title: 'Health', content: 'Ministry of Ayush provides healthcare facility across the country by using six conventional treatment procedures.', emoji: <HeartPulseIcon/> },
    { title: 'Education', content: 'The Ministry of Ayush regulates the educational standards of the Indian Systems of Medicine and Homoeopathy colleges in the country.', emoji: <NotebookIcon/> },
    { title: 'Research & Development', content: 'The Ministry of Ayush has established Research Councils to promote research activities in Ayush System.', emoji: <Beaker/>  },
    { title: 'Medicinal Plants', content: 'The Ministry of Ayush has established "National Medicinal Plants Board(NMPB)" an apex national body which coordinates all matters relating to medicinal plants in the country.', emoji:<LeafIcon/>},
    { title: 'Quality & Standard', content: 'The Ministry of Ayush draws policies and regulations to evolve Pharmacopoeial standards of Indian Systems of Medicine and Homoeopathy drugs.', emoji: <EarthIcon/> },
    { title: 'Partnership & Collaboration', content: 'Ministry of Ayush has collaborated with different institutions for the growth of traditional medicines.', emoji: <HandshakeIcon/>},
  ];

  return (
    <div className="container mx-auto px-4 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} emoji={card.emoji} />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
