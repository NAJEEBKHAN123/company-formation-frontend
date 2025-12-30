import React from 'react';
import { Plane, Building, Users } from 'lucide-react';

export default function OSCHKLanding() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Section - 50% with light background showing subtle image */}
      <div className="h-1/2 relative">
        {/* Subtle background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=1920&q=80')`
          }}
        />
        
        {/* White overlay */}
        <div className="absolute inset-0 bg-white/75" />
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-8 py-8">
          <h2 className="text-gray-700 text-center text-xl md:text-2xl lg:text-2xl font-bold mb-8">
            Everything you need — handled by one trusted partner
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl w-full">
            {/* Card 1 - Plane image */}
            <div className="relative">
              <div className="bg-white p-5 pb-8 shadow-lg">
                <div className="flex justify-center mb-3">
                  <img 
                    src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=200&h=200&fit=crop" 
                    alt="airplane" 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <h3 className="text-center text-gray-800 font-semibold mb-3 text-sm leading-tight">
                  <span className='font-semibold text-xl'>International founders</span><br />expanding to Asia
                </h3>
              </div>
              <button className="absolute -bottom-3 left-12 right-12 bg-yellow-400 hover:bg-yellow-500 text-gray-800 py-2 px-4 rounded text-xs font-medium transition-colors shadow-md">
               Discuss your situation
              </button>
            </div>

            {/* Card 2 - Building image */}
            <div className="relative">
              <div className="bg-white  p-5 pb-8 shadow-lg">
                <div className="flex justify-center mb-3">
                  <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=200&fit=crop" 
                    alt="building" 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <h3 className="text-center text-gray-800 font-semibold mb-3 text-sm leading-tight">
                  <span className='font-semibold text-xl'>Established companies</span><br />entering Hong Kong
                </h3>
              </div>
              <button className="absolute -bottom-3 left-12 right-12 bg-yellow-400 hover:bg-yellow-500 text-gray-800 py-2 px-4 rounded text-xs font-medium transition-colors shadow-md">
                Discuss your situation
              </button>
            </div>

            {/* Card 3 - People/Meeting image */}
            <div className="relative">
              <div className="bg-white p-5 pb-8 shadow-lg">
                <div className="flex justify-center mb-3">
                  <img 
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=200&h=200&fit=crop" 
                    alt="business meeting" 
                    className="w-16 h-16  object-cover"
                  />
                </div>
                <h3 className="text-center text-gray-800 font-semibold mb-3 text-sm leading-tight">
                   <span className='font-semibold text-xl'>Groups needing</span><br />accounting, tax & compliance
                </h3>
              </div>
              <button className="absolute -bottom-3 left-12 right-12 bg-yellow-400 hover:bg-yellow-500 text-gray-800 py-2 px-4 rounded text-xs font-medium transition-colors shadow-md">
                Discuss your situation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - 50% with clear background and features */}
      <div className="h-1/2 relative bg-blue-900">
        {/* Clear bright background image covering full 50% */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=1920&q=80')`
          }}
        />
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/70 to-transparent" />
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-center px-8 md:py-10 md:px-16">
          <div className="max-w-xl">
            <h2 className="text-white text-2xl md:text-3xl font-semibold mb-6">
              Why serious businesses choose OSCHK
            </h2>
            <ul className="space-y-3">
              <li className="text-white text-sm md:text-base flex items-start">
                <span className="mr-3 text-lg">✓</span>
                <span>14+ years operating in Hong Kong</span>
              </li>
              <li className="text-white text-sm md:text-base flex items-start">
                <span className="mr-3 text-lg">✓</span>
                <span>400+ international clients across Asia</span>
              </li>
              <li className="text-white text-sm md:text-base flex items-start">
                <span className="mr-3 text-lg">✓</span>
                <span>15+ jurisdictions covered</span>
              </li>
              <li className="text-white text-sm md:text-base flex items-start">
                <span className="mr-3 text-lg">✓</span>
                <span>Direct access to local experts (not a platform)</span>
              </li>
              <li className="text-white text-sm md:text-base flex items-start">
                <span className="mr-3 text-lg">✓</span>
                <span>One-partner from setup to execution</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}