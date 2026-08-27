import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useConfig } from '../context/ConfigContext';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';

export const Contact = () => {
  const { config } = useConfig();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Contact Us | {config.companyName}</title>
        <meta name="description" content={`Contact ${config.companyName} for any plumbing or heating enquiries. We are available 24/7.`} />
      </Helmet>

      {/* Hero */}
      <div className="bg-[#0B2545] text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch with our team today. We're ready to help with emergencies, quotes, and advice.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <a href={`tel:${config.emergencyPhone}`} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
              <Phone size={32} />
            </div>
            <h3 className="text-lg font-bold text-[#0B2545] mb-2">Emergency Calls</h3>
            <p className="text-gray-600 font-medium">{config.emergencyPhone}</p>
            <span className="text-xs text-gray-500 mt-2 uppercase tracking-wide">Available 24/7</span>
          </a>
          
          <a href={`tel:${config.phone}`} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-blue-100 text-[#134074] rounded-full flex items-center justify-center mb-4">
              <Phone size={32} />
            </div>
            <h3 className="text-lg font-bold text-[#0B2545] mb-2">General Enquiries</h3>
            <p className="text-gray-600 font-medium">{config.phone}</p>
            <span className="text-xs text-gray-500 mt-2 uppercase tracking-wide">Mon - Fri, 8am - 6pm</span>
          </a>

          <a href={`mailto:${config.email}`} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
              <Mail size={32} />
            </div>
            <h3 className="text-lg font-bold text-[#0B2545] mb-2">Email Us</h3>
            <p className="text-gray-600 font-medium break-all">{config.email}</p>
            <span className="text-xs text-gray-500 mt-2 uppercase tracking-wide">We reply within 24h</span>
          </a>

          <a href={`https://wa.me/${config.whatsapp}`} target="_blank" rel="noreferrer" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
              <MessageCircle size={32} />
            </div>
            <h3 className="text-lg font-bold text-[#0B2545] mb-2">WhatsApp</h3>
            <p className="text-gray-600 font-medium">Send a Message</p>
            <span className="text-xs text-gray-500 mt-2 uppercase tracking-wide">Fastest response</span>
          </a>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 sm:p-12">
              <h2 className="text-3xl font-bold text-[#0B2545] mb-6">Send us a message</h2>
              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name');
                const phone = formData.get('phone');
                const message = formData.get('message');
                const whatsappMsg = `Hi, I have an enquiry.\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Message:* ${message}`;
                window.open(`https://wa.me/${config.whatsapp}?text=${encodeURIComponent(whatsappMsg)}`, '_blank');
              }}>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
                  <input type="text" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#134074]" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" name="phone" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#134074]" placeholder="07000 000 000" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Message</label>
                  <textarea name="message" required rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#134074]" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full bg-[#134074] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#0B2545] transition-colors">
                  Send Message
                </button>
              </form>
            </div>
            <div className="bg-gray-100 flex items-center justify-center p-8 sm:p-12 relative min-h-[300px]">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                 <div className="text-center p-6 bg-white/90 rounded-2xl shadow-lg backdrop-blur-sm max-w-sm">
                   <MapPin className="text-[#E63946] mx-auto mb-4" size={48} />
                   <h3 className="text-xl font-bold text-[#0B2545] mb-2">Our Office</h3>
                   <p className="text-gray-600 mb-2">{config.address || 'London Based'}</p>
                   <p className="text-gray-600 text-sm">We cover Greater London and West London areas, with engineers stationed locally for rapid response.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
