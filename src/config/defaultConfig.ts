export const defaultConfig = {
  companyName: "Thames heating and plumbing Ltd",
  phone: "07403872097",
  emergencyPhone: "07403872097",
  whatsapp: "447403872097",
  email: "Thamesheatingandplumbing@gmail.com",
  address: "23 Cumbrian way / UB8 1XD",
  emergencyRate: "£89",
  bannerText: "24/7 Emergency Call Out - Response within 60 mins!",
  logoUrl: "",
  areas: [
    "Uxbridge", "Southall", "Greenford", "Ealing", "Hounslow", 
    "Hayes", "Harrow", "Wembley", "Ruislip", "Northolt", 
    "Brentford", "Acton", "Twickenham", "Richmond", 
    "Slough", "Windsor", "Langley", "Iver", "Burnham"
  ],
  heroTitle: "London’s Trusted \n24/7 Plumbing & Gas \nEngineers.",
  heroDescription: "Fast, reliable, and transparent. We arrive within 60 minutes for emergencies with no hidden fees. Fully insured and certified.",
  footerText: "Trusted 24/7 Plumbing & Gas Engineers. Fast response, transparent pricing, and guaranteed satisfaction.",
  workGallery: [
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505798577917-a65157d3320a?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1607400201889-565314e0046b?q=80&w=800&auto=format&fit=crop"
  ] as string[],
};

export type AppConfig = typeof defaultConfig;
