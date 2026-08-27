import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useConfig } from '../context/ConfigContext';
import { slugify } from '../data/areas';
import { ShieldCheck, MapPin, Phone, Clock } from 'lucide-react';

export const Area = () => {
  const { areaSlug } = useParams<{ areaSlug: string }>();
  const { config } = useConfig();
  
  const areaName = (config.areas || []).find(a => slugify(a) === areaSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [areaSlug]);

  if (!areaName) {
    return <Navigate to="/areas" />;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "PlumbingService",
    "name": `${config.companyName} ${areaName}`,
    "areaServed": areaName,
    "telephone": config.phone,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": areaName,
      "addressRegion": "Greater London",
      "addressCountry": "UK"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Emergency Plumber in {areaName} | {config.companyName}</title>
        <meta name="description" content={`Looking for a reliable plumber or gas engineer in ${areaName}? Fast response, competitive rates, and 24/7 emergency call-outs. Call now.`} />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      {/* Hero for Local Area */}
      <div className="bg-[#0B2545] text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/3 -translate-y-1/4">
          <MapPin size={400} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center bg-red-600/20 border border-red-500/30 text-white rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse mr-2"></span>
            <span className="text-sm font-semibold tracking-wide uppercase">Local Engineer Available Now</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Emergency Plumber in <span className="text-blue-300">{areaName}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-8">
            Fast, 45-minute response times for plumbing, heating, and gas emergencies in {areaName} and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href={`tel:${config.emergencyPhone}`} className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-center flex justify-center items-center transition-all shadow-lg shadow-red-600/30">
              <Phone size={20} className="mr-2" />
              Call: {config.emergencyPhone}
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3 prose prose-lg text-gray-700">
            <h2 className="text-3xl font-bold text-[#0B2545] mb-6">Your Local Plumbing Experts in {areaName}</h2>
            <p className="mb-6">
              When you face a plumbing disaster or a heating breakdown, you need a local engineer who can get to you quickly. 
              <strong> {config.companyName}</strong> has dedicated engineers stationed in and around {areaName}, ensuring we can reach you 
              typically within 45 to 60 minutes for emergencies.
            </p>
            <p className="mb-6">
              From leaky taps in residential homes to complex commercial boiler installations, our Gas Safe registered engineers 
              bring years of experience to every job in {areaName}.
            </p>

            <h3 className="text-2xl font-bold text-[#0B2545] mt-8 mb-4">Services we provide in {areaName}:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none pl-0">
              <li className="flex items-center"><ShieldCheck className="text-green-500 mr-2" size={20}/> Boiler Repairs & Installs</li>
              <li className="flex items-center"><ShieldCheck className="text-green-500 mr-2" size={20}/> Blocked Drains & Sinks</li>
              <li className="flex items-center"><ShieldCheck className="text-green-500 mr-2" size={20}/> Gas Leak Tracing</li>
              <li className="flex items-center"><ShieldCheck className="text-green-500 mr-2" size={20}/> CP12 Landlord Certificates</li>
              <li className="flex items-center"><ShieldCheck className="text-green-500 mr-2" size={20}/> Hot Water Cylinder Fixes</li>
              <li className="flex items-center"><ShieldCheck className="text-green-500 mr-2" size={20}/> General Plumbing</li>
            </ul>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 mb-8 sticky top-28">
              <h3 className="text-xl font-bold text-[#0B2545] mb-4">Why call us?</h3>
              <ul className="space-y-4 mb-6 text-gray-700 font-medium">
                <li className="flex items-start">
                  <Clock className="text-red-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  Available 24/7 in {areaName}
                </li>
                <li className="flex items-start">
                  <ShieldCheck className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  Gas Safe Registered Engineers
                </li>
                <li className="flex items-start">
                  <span className="text-[#134074] mr-3 mt-1 flex-shrink-0 font-bold font-serif text-lg leading-none">£</span>
                  Transparent Pricing from {config.emergencyRate}
                </li>
              </ul>
              <a href={`tel:${config.phone}`} className="block w-full bg-[#134074] hover:bg-[#0B2545] text-white text-center font-bold py-3 rounded-lg transition-colors">
                Book an Engineer
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
