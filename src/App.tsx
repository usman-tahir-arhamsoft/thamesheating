/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ConfigProvider } from './context/ConfigContext';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Area } from './pages/Area';
import { Areas } from './pages/Areas';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <HelmetProvider>
      <ConfigProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="services" element={<Services />} />
              <Route path="areas" element={<Areas />} />
              <Route path="area/:areaSlug" element={<Area />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Route>
          </Routes>
        </Router>
      </ConfigProvider>
    </HelmetProvider>
  );
}
