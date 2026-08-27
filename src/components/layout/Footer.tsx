import React from 'react';
import { Link } from 'react-router-dom';
import { useConfig } from '../../context/ConfigContext';
import { Droplet, Flame, Phone, PhoneCall, Mail, MapPin, ShieldCheck, Settings } from 'lucide-react';

export const Footer = () => {
  const { config } = useConfig();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B2545] text-white pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              {config.logoUrl ? (
                <img src={config.logoUrl} alt="Logo" className="h-8 w-auto object-contain bg-white p-1 rounded" />
              ) : (
                <div className="bg-white p-1.5 rounded text-[#0B2545]">
                  <Droplet size={24} className="inline-block" />
                </div>
              )}
              <span className="font-bold text-xl block leading-none tracking-tight">
                THAMES<br/>
                <span className="text-[10px] font-semibold text-gray-300 uppercase tracking-widest">Heating & Plumbing</span>
              </span>
            </div>
            <p className="text-gray-300 text-xs tracking-wide leading-relaxed mb-6 whitespace-pre-line">
              {config.footerText}
            </p>
            <div className="flex items-center space-x-2 text-gray-300 mb-2">
              <ShieldCheck size={16} className="text-[#E63946]" />
              <span className="text-xs font-semibold uppercase tracking-wider">Gas Safe Registered</span>
            </div>
             <div className="flex items-center space-x-2 text-gray-300 mb-2">
              <ShieldCheck size={16} className="text-[#E63946]" />
              <span className="text-xs font-semibold uppercase tracking-wider">City & Guilds Qualified</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold mb-6 border-b border-gray-700 pb-2 uppercase tracking-widest text-gray-300">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors text-xs font-medium uppercase tracking-wider">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors text-xs font-medium uppercase tracking-wider">All Services</Link></li>
              <li><Link to="/areas" className="text-gray-300 hover:text-white transition-colors text-xs font-medium uppercase tracking-wider">Areas Covered</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors text-xs font-medium uppercase tracking-wider">About Us</Link></li>
              <li><Link to="/#reviews" className="text-gray-300 hover:text-white transition-colors text-xs font-medium uppercase tracking-wider">Customer Reviews</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-xs font-bold mb-6 border-b border-gray-700 pb-2 uppercase tracking-widest text-gray-300">Our Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services#heating" className="text-gray-300 hover:text-white transition-colors text-xs font-medium uppercase tracking-wider">Heating Services</Link></li>
              <li><Link to="/services#plumbing" className="text-gray-300 hover:text-white transition-colors text-xs font-medium uppercase tracking-wider">Plumbing Services</Link></li>
              <li><Link to="/services#gas" className="text-gray-300 hover:text-white transition-colors text-xs font-medium uppercase tracking-wider">Gas Services</Link></li>
              <li><Link to="/services#hot-water" className="text-gray-300 hover:text-white transition-colors text-xs font-medium uppercase tracking-wider">Hot Water & Cylinders</Link></li>
              <li><Link to="/services#installation" className="text-gray-300 hover:text-white transition-colors text-xs font-medium uppercase tracking-wider">Installation & Renovation</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-bold mb-6 border-b border-gray-700 pb-2 uppercase tracking-widest text-gray-300">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={16} className="mr-3 text-[#E63946] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-xs tracking-wider uppercase">{config.address || 'Serving Greater London & West London.'}</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-3 text-[#E63946] flex-shrink-0" />
                <a href={`tel:${config.phone}`} className="text-gray-300 hover:text-white text-xs font-semibold tracking-wider">{config.phone}</a>
              </li>
              <li className="flex items-center">
                <PhoneCall size={16} className="mr-3 text-[#E63946] flex-shrink-0" />
                <a href={`tel:${config.emergencyPhone}`} className="text-gray-300 hover:text-white text-xs font-bold tracking-wider">EMERGENCY: {config.emergencyPhone}</a>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-3 text-[#E63946] flex-shrink-0" />
                <a href={`mailto:${config.email}`} className="text-gray-300 hover:text-white text-xs tracking-wider">{config.email}</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-gray-400 opacity-80">
          <p>&copy; {currentYear} {config.companyName}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 items-center">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
