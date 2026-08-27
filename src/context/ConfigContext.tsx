import React, { createContext, useContext, useState, useEffect } from 'react';
import { createClient } from 'contentful';
import { AppConfig, defaultConfig } from '../config/defaultConfig';

interface ConfigContextType {
  config: AppConfig;
  updateConfig: (newConfig: AppConfig) => void;
  resetConfig: () => void;
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export const ConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<AppConfig>(defaultConfig);

  useEffect(() => {
    const space = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
    const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

    if (space && accessToken) {
      const client = createClient({
        space,
        accessToken,
      });

      // Assuming we have a content model with ID 'siteConfig'
      client.getEntries({ content_type: 'siteConfig', limit: 1 })
        .then((response) => {
          if (response.items.length > 0) {
            const entry = response.items[0].fields as any;
            setConfig({
              ...defaultConfig,
              companyName: entry.companyName || defaultConfig.companyName,
              phone: entry.phone || defaultConfig.phone,
              emergencyPhone: entry.emergencyPhone || defaultConfig.emergencyPhone,
              whatsapp: entry.whatsapp || defaultConfig.whatsapp,
              email: entry.email || defaultConfig.email,
              address: entry.address || defaultConfig.address,
              emergencyRate: entry.emergencyRate || defaultConfig.emergencyRate,
              bannerText: entry.bannerText || defaultConfig.bannerText,
              logoUrl: entry.logoUrl?.fields?.file?.url || defaultConfig.logoUrl,
              areas: entry.areas || defaultConfig.areas,
              heroTitle: entry.heroTitle || defaultConfig.heroTitle,
              heroDescription: entry.heroDescription || defaultConfig.heroDescription,
              footerText: entry.footerText || defaultConfig.footerText,
              workGallery: entry.workGallery 
                ? entry.workGallery.map((asset: any) => asset.fields?.file?.url).filter(Boolean)
                : defaultConfig.workGallery,
            });
          }
        })
        .catch(console.error);
    }
  }, []);

  const updateConfig = (newConfig: AppConfig) => {
    setConfig(newConfig);
  };

  const resetConfig = () => {
    setConfig(defaultConfig);
  };

  return (
    <ConfigContext.Provider value={{ config, updateConfig, resetConfig }}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (context === undefined) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
};
