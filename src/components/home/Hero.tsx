import React from 'react';
import { useConfig } from '../../context/ConfigContext';
import { ShieldCheck, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  const { config } = useConfig();

  return (
    <div className="relative bg-[#EEF4F8] text-[#0B2545] overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 pb-24 lg:flex lg:items-center lg:justify-between">
        
        {/* Text Content */}
        <div className="lg:w-7/12 mb-12 lg:mb-0 space-y-6">
          <div className="space-y-3">
            <span className="text-[#E63946] font-bold tracking-widest text-xs uppercase">Gas Safe Registered Engineers</span>
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold leading-tight tracking-tight text-[#0B2545] whitespace-pre-line">
              {config.heroTitle}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-xl leading-relaxed whitespace-pre-line">
              {config.heroDescription}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex-1">
              <div className="text-2xl">⭐⭐⭐⭐⭐</div>
              <div className="text-xs font-semibold text-[#0B2545] tracking-wider">5.0 RATING ON GOOGLE</div>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex-1">
              <div className="bg-gray-100 p-2 rounded-full"><ShieldCheck className="text-[#0B2545]" size={20} /></div>
              <div className="text-xs font-semibold text-[#0B2545] uppercase tracking-tighter">FULLY INSURED <br/> & ACCREDITED</div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex items-center gap-3 text-sm font-medium text-[#0B2545]">
              <span className="bg-green-100 text-green-700 p-1 rounded-full"><CheckCircle size={14} /></span> No Call Out Fees
            </div>
            <div className="flex items-center gap-3 text-sm font-medium text-[#0B2545]">
              <span className="bg-green-100 text-green-700 p-1 rounded-full"><CheckCircle size={14} /></span> Upfront Fixed Pricing
            </div>
            <div className="flex items-center gap-3 text-sm font-medium text-[#0B2545]">
              <span className="bg-green-100 text-green-700 p-1 rounded-full"><CheckCircle size={14} /></span> Gas Safe Registered
            </div>
            <div className="flex items-center gap-3 text-sm font-medium text-[#0B2545]">
              <span className="bg-green-100 text-green-700 p-1 rounded-full"><CheckCircle size={14} /></span> Gas Safe Accredited
            </div>
          </div>
        </div>

        {/* Lead Form Widget */}
        <div className="lg:w-5/12 pl-0 lg:pl-12">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100" id="quote">
            <h3 className="text-xl font-bold mb-4 text-[#0B2545]">Request an Instant Quote</h3>
            
            <form className="space-y-4" onSubmit={(e) => { 
              e.preventDefault(); 
              const formData = new FormData(e.currentTarget);
              const name = formData.get('name');
              const phone = formData.get('phone');
              const postcode = formData.get('postcode');
              const service = formData.get('service');
              
              const message = `Hi, I would like to request an instant quote.\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Postcode:* ${postcode}\n*Service Required:* ${service}`;
              const whatsappUrl = `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            }}>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1" htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="e.g. John Smith" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-[#134074]" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1" htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="07000 000 000" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-[#134074]" required />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1" htmlFor="postcode">Postcode</label>
                  <input type="text" id="postcode" name="postcode" placeholder="W1A 1AA" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-[#134074]" required />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1" htmlFor="service">Service Required</label>
                <select id="service" name="service" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-[#134074]" required defaultValue="">
                  <option value="" disabled>Select Service</option>
                  <option value="emergency">Emergency Repair</option>
                  <option value="boiler">Boiler Installation</option>
                  <option value="gas">Gas Safety Certificate</option>
                  <option value="plumbing">Plumbing Maintenance</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-[#E63946] text-white py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-[#c32f3b] uppercase tracking-wide transition-colors mt-2">
                Get My Quote Now
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};
