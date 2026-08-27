import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { slugify } from '../../data/areas';
import { useConfig } from '../../context/ConfigContext';

export const AreaHub = () => {
  const { config } = useConfig();
  const areas = config.areas || [];

  return (
    <section className="py-20 bg-[#EEF4F8] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="lg:w-1/3">
            <div className="text-xs font-bold text-[#E63946] uppercase tracking-widest mb-3 flex items-center">
              <MapPin className="mr-2" size={16} /> Locations
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B2545] mb-4 tracking-tight">Areas We Cover</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Based in London, we provide rapid emergency response and scheduled services across Greater London and West London. 
              Find your local area to see our dedicated services.
            </p>
            <Link to="/areas" className="inline-block bg-[#134074] hover:bg-[#0B2545] text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors uppercase tracking-wider text-sm">
              View All Areas
            </Link>
          </div>

          <div className="lg:w-2/3 w-full">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100">
              <h3 className="text-xl font-bold text-[#0B2545] mb-6 border-b border-gray-100 pb-4 tracking-tight">Popular Locations</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {areas.map((area) => (
                  <Link 
                    key={area}
                    to={`/area/${slugify(area)}`}
                    className="flex items-center p-2 rounded-lg hover:bg-[#EEF4F8] transition-colors text-[#0B2545] hover:text-[#E63946] font-medium text-sm group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E63946] mr-2 opacity-50 group-hover:opacity-100 transition-opacity"></span>
                    {area}
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
