import React from 'react';

export default function PartnerServicePage() {
  return (
    <div className="w-full">
      {/* Top Section with Background Image */}
      <div className="relative bg-gray-100 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=1920&q=80')",
          }}
        ></div>
        
        {/* Content Container */}
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
            
            {/* Left Side - Partner Image */}
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=350&fit=crop" 
                  alt="Terri Pagge and colleague" 
                  className="w-full h-auto object-cover"
                />
                {/* Name Tag */}
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-xl font-bold drop-shadow-lg">Terri Pagge</div>
                  <div className="text-sm drop-shadow-lg">Commerical Director</div>
                  <div className="text-sm drop-shadow-lg">Client Strategy Lead</div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6">
              {/* Main Heading */}
              <h1 className="text-3xl md:text-4xl lg:text-3xl font-bold text-gray-900 leading-tight">
                A partner, not just a service provider
              </h1>
              
              {/* Description */}
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Teril oversees client relationships and ensures every structure is aligned with the client's business objectives, risk profile and long term plans in <span className="text-blue-600 underline">asia</span>.
              </p>

              {/* Quote Box */}
              <div className="bg-purple-100 bg-opacity-80 p-3 rounded">
                <p className="text-lg md:text-xl text-gray-800">
                  <span className="text-2xl font-serif">"</span> Our role is not just to set things up, but to stay accountable long after.
                </p>
              </div>

              {/* CTA Button */}
              <div>
                <button className="px-10 py-3 rounded-md font-bold text-[#0D1B4D] text-lg
              bg-gradient-to-b from-[#F9D891] via-[#EFBF57] to-[#D39F16]
              border-t border-[#FFEBBF] border-b-[3px] border-[#8C6B10]
              shadow-[0_4px_10px_rgba(0,0,0,0.15)] 
              active:translate-y-[1px] active:shadow-inner transition-all">
                  Book a confidential strategy call
                </button>
              </div>

              {/* Bottom Features */}
              <div className="flex flex-wrap gap-3 md:gap-4 text-sm md:text-base text-gray-700">
                <span>No obligation</span>
                <span>•</span>
                <span>No sales pitch</span>
                <span>•</span>
                <span>Clear answers</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats Section */}
      <div 
        className="relative bg-gradient-to-r from-purple-700 via-purple-500 to-orange-400 text-white overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=300&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-purple-500 to-orange-400 opacity-85"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-8">
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            
            {/* Stat 1 */}
            <div className="text-center">
              <div className="text-3xl md:text-5xl lg:text-6xl font-bold mb-1 md:mb-2">
                <span className="text-yellow-300">14+</span>
              </div>
              <div className="text-sm md:text-lg lg:text-xl font-light">
                Years in Hong Kong
              </div>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <div className="text-3xl md:text-5xl lg:text-6xl font-bold mb-1 md:mb-2">
                <span className="text-yellow-300">400+</span>
              </div>
              <div className="text-sm md:text-lg lg:text-xl font-light">
                International Clients
              </div>
            </div>

            {/* Stat 3 */}
            <div className="text-center">
              <div className="text-3xl md:text-5xl lg:text-6xl font-bold mb-1 md:mb-2">
                <span className="text-yellow-300">15+</span>
              </div>
              <div className="text-sm md:text-lg lg:text-xl font-light">
                Jurisdictions
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}