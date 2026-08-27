import React, { useState, useEffect } from 'react';
import { useConfig } from '../../context/ConfigContext';
import { Camera, ChevronLeft, ChevronRight } from 'lucide-react';

export const WorkGallery = () => {
  const { config } = useConfig();
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = config.workGallery && config.workGallery.length > 0 
    ? config.workGallery 
    : [];

  if (images.length === 0) return null;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="bg-white py-24 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-full mb-4 text-[#134074]">
            <Camera size={28} />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B2545] mb-4">
            Our Day-to-Day Work
          </h2>
          <p className="text-lg text-gray-600">
            A glimpse into the quality plumbing and heating solutions we deliver across our coverage areas every day.
          </p>
        </div>

        <div className="relative group max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-gray-100 aspect-video">
          
          <div 
            className="flex transition-transform duration-700 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((img, idx) => (
              <div key={idx} className="w-full flex-shrink-0 h-full relative">
                <img 
                  src={img} 
                  alt={`Work showcase ${idx + 1}`} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            ))}
          </div>

          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
          >
            <ChevronRight size={24} />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentIndex === idx ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
