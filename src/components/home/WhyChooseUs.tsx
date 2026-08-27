import React from 'react';
import { Clock, PoundSterling, ShieldCheck, ThumbsUp } from 'lucide-react';

export const WhyChooseUs = () => {
  const features = [
    {
      icon: Clock,
      title: "Fast Response",
      description: "Under 60-minute response time for all plumbing and gas emergencies across London."
    },
    {
      icon: PoundSterling,
      title: "Upfront Pricing",
      description: "No hidden fees. We provide clear, transparent quotes before any work begins."
    },
    {
      icon: ShieldCheck,
      title: "Certified Engineers",
      description: "All our engineers are Gas Safe Registered and fully insured for your peace of mind."
    },
    {
      icon: ThumbsUp,
      title: "Quality Workmanship",
      description: "We stand by our quality. All our engineers are highly trained professionals."
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="text-xs font-bold text-[#134074] uppercase tracking-widest mb-3">Our Guarantee</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B2545] mb-4 tracking-tight">Why Choose Thames Heating & Plumbing?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've built our reputation on trust, reliability, and exceptional craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#134074] transition-all duration-300 text-center flex flex-col items-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#EEF4F8] text-[#0B2545] mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={28} />
                </div>
                <h3 className="text-lg font-bold mb-3 text-[#0B2545]">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
