// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; // Import Layout

// All your pages (they should NOT have Navbar inside)
import HomePage from './pages/HomePage';
import ServicesOverview from './pages/services';
import GovernmentFeesPage from './pages/services/government-fees';
import PackagesPage from './pages/services/packages';
import AnnualServicesPage from './pages/services/annual-services';
import OneOffServicesPage from './pages/services/one-off-services';
import IndustriesPage from './pages/IndustriesPage';
import WhoWeArePage from './pages/WhoWeArePage';
import ContactPage from './pages/ContactPage';
import IndustryDetailPage from './pages/IndustryDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* EVERY page gets Layout automatically */}
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/services" element={<Layout><ServicesOverview /></Layout>} />
        <Route path="/services/government-fees" element={<Layout><GovernmentFeesPage /></Layout>} />
        <Route path="/services/packages" element={<Layout><PackagesPage /></Layout>} />
        <Route path="/services/annual-services" element={<Layout><AnnualServicesPage /></Layout>} />
        <Route path="/services/one-off-services" element={<Layout><OneOffServicesPage /></Layout>} />
        <Route path="/industries" element={<Layout><IndustriesPage /></Layout>} />
        <Route path="/who-we-are" element={<Layout><WhoWeArePage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
        {/* <Route path="/industries" element={<IndustriesPage />} /> */}
        <Route path="/industries/:id" element={<Layout><IndustryDetailPage /></Layout> } />
      </Routes>
    </Router>
  );
}

export default App;