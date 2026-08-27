import React from 'react';
import { Droplet, Flame, Wrench, ThermometerSun, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'heating',
    title: 'Heating Services',
    description: 'Boiler installation, servicing, fault finding, central heating installs, and smart thermostats.',
    icon: ThermometerSun,
    color: 'text-orange-500',
    bg: 'bg-orange-50'
  },
  {
    id: 'plumbing',
    title: 'Plumbing Services',
    description: 'Leak detection, tap replacement, toilet repairs, blocked drains, and emergency plumbing.',
    icon: Droplet,
    color: 'text-blue-500',
    bg: 'bg-blue-50'
  },
  {
    id: 'gas',
    title: 'Gas Services',
    description: 'Gas appliance installation, safety inspections, CP12 Landlord Certificates, and leak tracing.',
    icon: Flame,
    color: 'text-red-500',
    bg: 'bg-red-50'
  },
  {
    id: 'hot-water',
    title: 'Hot Water & Cylinders',
    description: 'Unvented cylinder installation, servicing, immersion heaters, and expansion vessels.',
    icon: Wrench,
    color: 'text-teal-500',
    bg: 'bg-teal-50'
  },
  {
    id: 'installation',
    title: 'Installation & Renovation',
    description: 'Full bathroom & kitchen plumbing, new-build plumbing, and pipework retrofitting.',
    icon: Home,
    color: 'text-indigo-500',
    bg: 'bg-indigo-50'
  }
];

export const ServicesGrid = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="text-xs font-bold text-[#134074] uppercase tracking-widest mb-3">Our Core Services</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B2545] mb-4 tracking-tight">Comprehensive Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive plumbing, heating, and gas solutions tailored to your needs. 
            Delivered by certified professionals across London.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            // Make the 5th item centered in the last row for lg screens
            const isLastOdd = index === services.length - 1 && services.length % 2 !== 0;
            const lgColSpan = isLastOdd ? 'lg:col-start-2' : '';

            return (
              <Link 
                key={service.id} 
                to={`/services#${service.id}`}
                className={`group flex flex-col items-start gap-4 p-8 rounded-xl border border-gray-100 bg-[#EEF4F8]/30 hover:border-[#134074] hover:bg-white hover:shadow-xl transition-all duration-300 ${lgColSpan}`}
              >
                <div className={`flex-shrink-0 p-4 rounded-lg border border-gray-100 bg-white shadow-sm group-hover:scale-110 transition-transform`}>
                  <Icon className="text-[#0B2545]" size={32} />
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-[#0B2545] mb-3">{service.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  <div className="mt-auto text-xs font-bold text-[#E63946] uppercase tracking-widest flex items-center">
                    Learn more <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
