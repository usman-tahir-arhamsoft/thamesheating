import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { slugify } from '../data/areas';
import { MapPin } from 'lucide-react';
import { useConfig } from '../context/ConfigContext';

export const Areas = () => {
  const { config } = useConfig();
  const areas = config.areas || [];

  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <Helmet>
        <title>Areas We Cover | {config.companyName}</title>
        <meta name="description" content="View all the areas we cover in London for plumbing, heating, and gas services." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-red-100 rounded-full mb-6">
            <MapPin className="text-red-600" size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B2545] mb-6">Areas We Cover</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide fast, reliable plumbing and heating services across West and North-West London. 
            Find your area below.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {areas.map((area) => (
              <Link 
                key={area}
                to={`/area/${slugify(area)}`}
                className="group flex items-center p-4 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all text-gray-800 font-medium"
              >
                <span className="w-2 h-2 rounded-full bg-red-500 mr-3 opacity-50 group-hover:opacity-100 group-hover:scale-125 transition-all"></span>
                {area}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
