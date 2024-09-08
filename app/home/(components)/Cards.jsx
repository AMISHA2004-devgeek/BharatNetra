// src/Cards.jsx
import React from 'react';

const Card = ({ title, content, emoji }) => {
  return (
    <div className="p-7 border-emerald-800 border-2  rounded-lg shadow-lg h-[355px]">
      <div className="flex flex-col items-center p-4">
        <div className="text-3xl mb-2">{emoji}</div> {/* Emoji */}
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="mb-4">{content}</p>
        <a href="#" className="text-blue-500 hover:underline">Read More</a> {/* Read More Button */}
      </div>
    </div>
  );
};

export default Card;
