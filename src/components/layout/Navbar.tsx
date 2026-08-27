import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useConfig } from '../../context/ConfigContext';
import { Phone, PhoneCall, Menu, X, Droplet, Wrench, Flame, Settings } from 'lucide-react';
import { slugify } from '../../data/areas';

export const Navbar = () => {
  const { config } = useConfig();
  const areas = config.areas || [];
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 w-full font-sans">
      {/* Top Banner */}
      <div className="bg-[#0B2545] text-white py-2 px-6 flex justify-between items-center text-sm font-medium hidden sm:flex">
        <div className="flex gap-4 items-center">
          <span>📍 Servicing All Greater London</span>
          <span className="text-[#E63946]">● 24/7 Emergency Call Out Active</span>
        </div>
        <div className="flex gap-6 items-center">
          <a href={`https://wa.me/${config.whatsapp}`} target="_blank" rel="noreferrer" className="hover:underline">
            WhatsApp Us
          </a>
          <a href={`tel:${config.emergencyPhone}`} className="bg-[#E63946] px-3 py-1 rounded text-xs uppercase tracking-wider hover:bg-[#c32f3b] transition-colors">
            Emergency: {config.emergencyPhone}
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white border-b border-gray-200 px-4 sm:px-8 py-4 shadow-sm">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            {config.logoUrl ? (
              <img src={config.logoUrl} alt="Logo" className="h-10 w-auto object-contain" />
            ) : (
              <div className="bg-[#0B2545] p-2 rounded">
                <Droplet size={24} className="text-white" />
              </div>
            )}
            <div className="block">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-[#0B2545]">THAMES <span className="text-[#134074]">HEATING & PLUMBING</span></span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-8 text-sm font-semibold text-[#134074]">
            <Link to="/" className="text-[#E63946] hover:text-[#0B2545] transition-colors">Home</Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="hover:text-[#0B2545] transition-colors flex items-center"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                Services
              </button>
              <div 
                className={`absolute top-full left-0 w-64 bg-white shadow-xl rounded-md py-2 transition-all duration-200 ${servicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link to="/services#heating" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#E63946]">Heating Services</Link>
                <Link to="/services#plumbing" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#E63946]">Plumbing Services</Link>
                <Link to="/services#gas" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#E63946]">Gas Services</Link>
                <Link to="/services#hot-water" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#E63946]">Hot Water & Cylinders</Link>
                <Link to="/services#installation" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#E63946]">Installation & Renovation</Link>
              </div>
            </div>

            {/* Areas Covered Dropdown */}
            <div className="relative group">
              <button 
                className="hover:text-[#0B2545] transition-colors flex items-center"
                onMouseEnter={() => setAreasOpen(true)}
                onMouseLeave={() => setAreasOpen(false)}
              >
                Areas Covered
              </button>
              <div 
                className={`absolute top-full left-0 w-64 bg-white shadow-xl rounded-md py-2 transition-all duration-200 ${areasOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} grid grid-cols-2 p-2 gap-1`}
                onMouseEnter={() => setAreasOpen(true)}
                onMouseLeave={() => setAreasOpen(false)}
              >
                {areas.slice(0, 10).map(area => (
                   <Link key={area} to={`/area/${slugify(area)}`} className="block px-2 py-1 text-sm hover:bg-gray-50 hover:text-[#E63946] rounded">
                     {area}
                   </Link>
                ))}
                <Link to="/areas" className="col-span-2 text-center text-sm font-bold text-[#E63946] hover:underline mt-2">View All Areas</Link>
              </div>
            </div>

            <Link to="/#reviews" className="hover:text-[#0B2545] transition-colors">Reviews</Link>
            <Link to="/about" className="hover:text-[#0B2545] transition-colors">About Us</Link>
            <Link to="/contact" className="hover:text-[#0B2545] transition-colors">Contact</Link>
          </nav>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <a href="/#quote" className="bg-[#134074] text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-md hover:bg-[#0B2545] hidden sm:block transition-colors">
              BOOK A SURVEY
            </a>
            <button className="lg:hidden text-[#0B2545]" onClick={toggleMenu}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 shadow-xl absolute w-full">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-[#134074] font-semibold text-lg" onClick={toggleMenu}>Home</Link>
            <Link to="/services" className="text-[#134074] font-semibold text-lg" onClick={toggleMenu}>Services</Link>
            <Link to="/areas" className="text-[#134074] font-semibold text-lg" onClick={toggleMenu}>Areas Covered</Link>
            <Link to="/about" className="text-[#134074] font-semibold text-lg" onClick={toggleMenu}>About Us</Link>
            <Link to="/contact" className="text-[#134074] font-semibold text-lg" onClick={toggleMenu}>Contact</Link>
            
            <div className="pt-4 border-t border-gray-100 flex flex-col space-y-3">
              <a href={`tel:${config.emergencyPhone}`} className="bg-red-600 text-white text-center py-3 rounded-md font-bold flex items-center justify-center shadow-md">
                <PhoneCall size={20} className="mr-2" />
                Call 24/7 Emergency Plumber
              </a>
              <a href="/#quote" className="bg-[#0B2545] text-white text-center py-3 rounded-md font-bold shadow-md" onClick={toggleMenu}>
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
