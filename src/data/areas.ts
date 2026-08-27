export const londonAreas = [
  "Uxbridge", "Southall", "Greenford", "Ealing", "Hounslow", 
  "Hayes", "Harrow", "Wembley", "Ruislip", "Northolt", 
  "Brentford", "Chiswick", "Acton", "Twickenham", "Richmond", 
  "Fulham", "Hammersmith"
];

export const slugify = (text: string) => {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           
    .replace(/[^\w\-]+/g, '')       
    .replace(/\-\-+/g, '-')         
    .replace(/^-+/, '')             
    .replace(/-+$/, '');            
};
