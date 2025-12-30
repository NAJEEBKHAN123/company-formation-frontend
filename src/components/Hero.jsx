import React from "react";
import Navbar from "../common/Navbar"; // Import the navbar

export default function OSCHKHero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 30, 75, 0.75), rgba(30, 20, 50, 0.7)), url('https://images.unsplash.com/photo-1536599018102-9f803c140fc1?q=80&w=2000')`,
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 h-full">
        {/* Navbar */}
        <Navbar />

        {/* Hero Content - Adjusted to account for navbar */}
        <div className="pt-32 px-12 lg:px-16 max-w-7xl leading-relaxed">
          <h1 className="text-white mb-8 leading-relaxed">
            <div className="text-5xl lg:text-5xl font-bold mb-2">
              Set up, operate and scale your business
            </div>
            <div className="text-5xl lg:text-5xl font-bold mb-4">
              <span>in Hong Kong & Asia </span>
              <span className="font-light lg:text-4xl">
                — without costly mistakes.
              </span>
            </div>
          </h1>

          <p className="text-white text-xl lg:text-2xl font-light leading-relaxed mb-8">
            We help international founders and companies structure, manage,
            <br />
            and expand their operations in Asia with confidence.
          </p>

          {/* CTA Button */}
          <button className="px-10 py-3 rounded-md font-bold text-[#0D1B4D] text-lg
              bg-gradient-to-b from-[#F9D891] via-[#EFBF57] to-[#D39F16]
              border-t border-[#FFEBBF] border-b-[3px] border-[#8C6B10]
              shadow-[0_4px_10px_rgba(0,0,0,0.15)] 
              active:translate-y-[1px] active:shadow-inner transition-all">
            Book a strategy call
          </button>
        </div>

        {/* Bottom Stats Bar - Fixed positioning */}
        <div className="absolute left-0 mt-9 right-0 bg-opacity-50 backdrop-blur-sm">
          <div className="px-12 lg:px-20 py-6 flex flex-wrap items-center justify-center lg:justify-center gap-4 lg:gap-8 text-white text-base lg:text-lg">
            <div className="flex items-center gap-2">
              <span>Trusted by</span>
              <span className="text-3xl lg:text-4xl font-bold">400+</span>
              <span>international companies</span>
            </div>
            <span className="text-2xl text-gray-400 hidden lg:inline">•</span>
            <div className="flex items-center gap-2">
              <span className="text-3xl lg:text-4xl font-bold">14+</span>
              <span>years in Hong Kong</span>
            </div>
            <span className="text-2xl text-gray-400 hidden lg:inline">•</span>
            <div>Not for side projects</div>
          </div>
        </div>
      </div>
    </div>
  );
}