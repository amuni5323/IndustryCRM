'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function FlipCard({ service }) {
  const [flipped, setFlipped] = useState(false);
  const router = useRouter();

  return (
    <div
      className="w-full md:w-1/3 h-64 [perspective:1000px] cursor-pointer"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden rounded-lg shadow-lg overflow-hidden">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Back */}
        <div className="absolute w-full h-full rotate-y-180 backface-hidden bg-white rounded-lg shadow-lg flex flex-col items-center justify-center p-4">
          <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
          <p className="text-sm mb-4 text-center text-gray-700">{service.description}</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              router.push(service.path);
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
