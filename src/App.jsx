import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import IndustriesPage from './pages/IndustriesPage';
import PremiumFooter from './common/Footer';
import WhoWeArePage from './pages/WhoWeArePage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Layout>
            <HomePage />
          </Layout>
        } />
        <Route path="/services" element={
          <Layout>
            <ServicesPage />
          </Layout>
        } />
        <Route path="/industries" element={
          <Layout>
            <IndustriesPage />
          </Layout>
        } />
         <Route path="/who-we-are" element={
          <Layout>
            <WhoWeArePage />
          </Layout>
        } />
        <Route path="/contact" element={
          <Layout>
            <ContactPage />
          </Layout>
        } />
      </Routes>
      <PremiumFooter />
    </Router>
  );
}

export default App;