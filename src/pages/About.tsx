import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useConfig } from '../context/ConfigContext';
import { ShieldCheck, Clock, Users, Wrench } from 'lucide-react';

export const About = () => {
  const { config } = useConfig();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>About Us | {config.companyName}</title>
        <meta name="description" content={`Learn more about ${config.companyName}. We are trusted 24/7 plumbing and gas engineers based in London.`} />
      </Helmet>

      {/* Hero */}
      <div className="bg-[#0B2545] text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">About Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your trusted local experts for plumbing, heating, and gas engineering across London.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-[#0B2545] mb-6">Dedicated to Excellence</h2>
            <div className="prose prose-lg text-gray-700">
              <p className="mb-4">
                At <strong>{config.companyName}</strong>, we pride ourselves on delivering top-tier plumbing and heating services with unparalleled reliability. Whether it's a minor leak, a complete boiler installation, or a late-night plumbing emergency, our team is equipped to handle it all.
              </p>
              <p className="mb-4">
                We know that plumbing issues can be stressful and disruptive. That's why we operate around the clock, providing rapid 45-60 minute response times to get your home or business back to normal as quickly as possible.
              </p>
              <p>
                All our engineers are fully vetted, highly trained, and Gas Safe registered. We believe in absolute transparency—which is why we offer clear, upfront pricing with zero hidden fees. 
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
              <div className="flex justify-center mb-4"><ShieldCheck size={40} className="text-[#E63946]" /></div>
              <h3 className="text-lg font-bold text-[#0B2545] mb-2">Gas Safe Registered</h3>
              <p className="text-sm text-gray-600">Fully certified engineers for your peace of mind and safety.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
              <div className="flex justify-center mb-4"><Clock size={40} className="text-[#E63946]" /></div>
              <h3 className="text-lg font-bold text-[#0B2545] mb-2">24/7 Availability</h3>
              <p className="text-sm text-gray-600">Round-the-clock emergency call-outs for any urgent issue.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
              <div className="flex justify-center mb-4"><Users size={40} className="text-[#E63946]" /></div>
              <h3 className="text-lg font-bold text-[#0B2545] mb-2">Local Experts</h3>
              <p className="text-sm text-gray-600">Stationed across London to ensure rapid response times.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
              <div className="flex justify-center mb-4"><Wrench size={40} className="text-[#E63946]" /></div>
              <h3 className="text-lg font-bold text-[#0B2545] mb-2">Transparent Pricing</h3>
              <p className="text-sm text-gray-600">No hidden costs or call-out fees. You approve the quote first.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
