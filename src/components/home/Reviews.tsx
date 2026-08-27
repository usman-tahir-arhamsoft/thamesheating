import React from 'react';

const reviews = [
  {
    name: "Sarah Jenkins",
    location: "Ealing",
    date: "2 weeks ago",
    text: "Absolutely lifesavers. Had a burst pipe at 2 AM and they were here within 45 minutes. Fixed it quickly and the price was exactly as quoted on the phone. Highly recommend!",
    rating: 5
  },
  {
    name: "Mark Thompson",
    location: "Uxbridge",
    date: "1 month ago",
    text: "Got my new boiler installed by Thames Heating. The engineers were polite, tidy, and very knowledgeable. Great service from start to finish.",
    rating: 5
  },
  {
    name: "David L.",
    location: "Richmond",
    date: "3 months ago",
    text: "Needed a Landlord Gas Safety check urgently. They squeezed me in the same day. Very professional and sent the digital certificate immediately. Will use again.",
    rating: 5
  }
];

export const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-[#EEF4F8] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="text-xs font-bold text-[#E63946] uppercase tracking-widest mb-3">Client Feedback</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B2545] mb-4 tracking-tight">What Our Customers Say</h2>
          <div className="flex justify-center items-center space-x-2 text-xl">
            <span className="font-bold text-[#0B2545]">Excellent</span>
            <div className="flex text-yellow-400">
              ★★★★★
            </div>
            <span className="text-gray-500 text-sm font-medium">Based on 150+ reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl relative">
              {/* Google G logo simulation */}
              <div className="absolute top-8 right-8 w-8 h-8 bg-[#EEF4F8] rounded-full flex items-center justify-center text-blue-600 font-bold font-serif text-sm">
                G
              </div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#0B2545] text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-[#0B2545]">{review.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">{review.location} • {review.date}</p>
                </div>
              </div>
              <div className="flex text-yellow-400 text-sm mb-4">
                {"★".repeat(review.rating)}
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
