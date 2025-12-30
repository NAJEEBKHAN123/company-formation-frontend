import React from 'react'
import Navbar from '../common/Navbar'

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navbar isTransparent={false} />
      <div className="pt-24 px-12 lg:px-16 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Business Setup</h3>
            <p className="text-gray-600">Complete company registration and legal setup in Hong Kong.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Compliance & Legal</h3>
            <p className="text-gray-600">Ongoing compliance, tax filing, and legal advisory services.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Expansion Support</h3>
            <p className="text-gray-600">Scale your operations across Asia with our expertise.</p>
          </div>
        </div>
      </div>
    </div>
  );
}