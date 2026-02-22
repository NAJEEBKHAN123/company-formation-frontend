// src/components/Layout.jsx
import React from 'react';
import Navbar from '../common/Navbar'; // Add Navbar import
import PremiumFooter from '../common/Footer'; // Or move Footer here


export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar /> {/* Navbar goes HERE */}
      <main className="flex-grow">
        {children}
      </main>
      <PremiumFooter /> {/* Footer goes HERE */}
    </div>
  );
}