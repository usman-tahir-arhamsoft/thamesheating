import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/home/Hero';
import { ServicesGrid } from '../components/home/ServicesGrid';
import { AreaHub } from '../components/home/AreaHub';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { Reviews } from '../components/home/Reviews';
import { WorkGallery } from '../components/home/WorkGallery';
import { useConfig } from '../context/ConfigContext';

export const Home = () => {
  const { config } = useConfig();

  const schema = {
    "@context": "https://schema.org",
    "@type": "PlumbingService",
    "name": config.companyName,
    "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000",
    "url": window.location.origin,
    "telephone": config.phone,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "London",
      "addressRegion": "Greater London",
      "addressCountry": "UK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.5074,
      "longitude": -0.1278
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  return (
    <>
      <Helmet>
        <title>{config.companyName} | 24/7 Plumber & Gas Engineer London</title>
        <meta name="description" content="London's trusted 24/7 emergency plumbers and gas safe engineers. Fast response, transparent pricing. Boiler installs, leak repairs, and more." />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <AreaHub />
      <WorkGallery />
      <Reviews />
    </>
  );
};
