import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useConfig } from '../context/ConfigContext';
import { ThermometerSun, Droplet, Flame, Wrench, Home as HomeIcon } from 'lucide-react';

export const Services = () => {
  const { config } = useConfig();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const serviceSections = [
    {
      id: 'heating',
      title: 'Heating Services',
      icon: ThermometerSun,
      color: 'text-orange-500',
      bg: 'bg-orange-50',
      items: [
        'Boiler installation & replacement',
        'Annual boiler servicing',
        'Fault finding & diagnostics',
        'Central heating installations',
        'Radiator bleeding & balancing',
        'Smart thermostat setup (Nest, Hive)',
        'Power flushing for system efficiency'
      ]
    },
    {
      id: 'plumbing',
      title: 'Plumbing Services',
      icon: Droplet,
      color: 'text-blue-500',
      bg: 'bg-blue-50',
      items: [
        'Leak detection & burst pipe repair',
        'Tap replacement & washer repairs',
        'Toilet & shower repairs',
        'Blocked sinks & drains',
        'Water pressure diagnostics',
        'Washing machine & dishwasher connections',
        '24/7 Emergency plumbing response'
      ]
    },
    {
      id: 'gas',
      title: 'Gas Services',
      icon: Flame,
      color: 'text-red-500',
      bg: 'bg-red-50',
      items: [
        'Gas cooker & hob installation',
        'Gas fire installation & servicing',
        'Gas safety inspections',
        'Landlord Gas Safety Certificates (CP12)',
        'Gas leak tracing & repair',
        'Gas pipework rerouting'
      ]
    },
    {
      id: 'hot-water',
      title: 'Hot Water & Cylinders',
      icon: Wrench,
      color: 'text-teal-500',
      bg: 'bg-teal-50',
      items: [
        'Unvented cylinder installation (Megaflo)',
        'Cylinder servicing & maintenance',
        'Immersion heater replacement',
        'Expansion vessel checks & replacement',
        'Hot water thermostat replacements',
        'Vented cylinder upgrades'
      ]
    },
    {
      id: 'installation',
      title: 'Installation & Renovation',
      icon: HomeIcon,
      color: 'text-indigo-500',
      bg: 'bg-indigo-50',
      items: [
        'Full bathroom plumbing installations',
        'Kitchen sink & appliance plumbing',
        'New-build property plumbing',
        'Pipework retrofitting for renovations',
        'En-suite additions',
        'Wet room plumbing'
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <Helmet>
        <title>Our Services | {config.companyName}</title>
        <meta name="description" content="Comprehensive plumbing, heating, and gas services in London. Boiler installs, leak detection, CP12s, and bathroom renovations." />
      </Helmet>

      {/* Header */}
      <div className="bg-[#0B2545] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From emergency repairs to full heating system installations, our certified engineers have you covered.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-1 gap-12">
          {serviceSections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <div 
                key={section.id} 
                id={section.id} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col md:flex-row scroll-mt-24"
              >
                <div className={`md:w-1/3 ${section.bg} p-12 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-gray-100`}>
                  <div className={`p-4 bg-white rounded-full shadow-sm mb-6`}>
                    <Icon className={section.color} size={48} />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0B2545]">{section.title}</h2>
                </div>
                <div className="md:w-2/3 p-8 md:p-12">
                  <h3 className="text-lg font-bold text-gray-800 mb-6 border-b border-gray-100 pb-4">What's Included:</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1 font-bold">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-8 border-t border-gray-100 flex items-center justify-between">
                    <p className="text-sm text-gray-500 font-medium">Need this service immediately?</p>
                    <a href={`tel:${config.phone}`} className="bg-[#134074] hover:bg-[#0B2545] text-white font-bold py-2 px-6 rounded-lg transition-colors">
                      Call {config.phone}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
