import React from 'react'
import Navbar from '../common/Navbar'

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar isTransparent={false} />
      <div className="pt-24 px-12 lg:px-16 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Industries We Serve</h1>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Technology & Startups</h3>
            <p className="text-gray-600">Helping tech companies establish and scale in Asia's innovation hubs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Finance & Fintech</h3>
            <p className="text-gray-600">Navigating Hong Kong's financial regulations and licensing.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Manufacturing & Trade</h3>
            <p className="text-gray-600">Supply chain setup and cross-border trade facilitation.</p>
          </div>
        </div>
      </div>
    </div>
  );
}