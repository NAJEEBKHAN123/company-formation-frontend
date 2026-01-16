import React from "react";
import Navbar from "../common/Navbar";

export default function OSCHKHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden text-white">
      
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(15,30,75,.75), rgba(30,20,50,.7)), url('https://images.unsplash.com/photo-1536599018102-9f803c140fc1?q=80&w=2000')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        {/* Hero Content */}
        <div className="flex-1 flex items-center">
          <div className="w-full max-w-7xl px-5 sm:px-8 md:px-12 lg:px-16 pt-24 sm:pt-28">
            
            <h1 className="font-bold leading-tight mb-12">
              <span className="block text-3xl sm:text-3xl md:text-4xl lg:text-5xl">
                Set up, operate and scale your business
              </span>

              <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                in Hong Kong & Asia{" "}
                <span className="block sm:inline font-light text-lg sm:text-2xl md:text-3xl lg:text-4xl mt-4 sm:mt-0">
                  without costly mistakes.
                </span>
              </span>
            </h1>

            <p className="max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl font-light mb-12">
              We help international founders and companies structure, manage,
              and expand their operations in Asia with confidence.
            </p>

            {/* CTA */}
            <div className="flex justify-center sm:justify-start">
              <button
                className="w-full sm:w-auto px-8 md:px-10 py-3 font-bold text-[#0D1B4D]
                bg-gradient-to-b from-[#F9D891] via-[#EFBF57] to-[#D39F16]
                border-t border-[#FFEBBF] border-b-[3px] border-[#8C6B10]
                rounded-md shadow-md transition-all hover:scale-105"
              >
                Book a strategy call
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="bg-black/30 backdrop-blur-sm">
          <div className="px-4 sm:px-6 md:px-12 lg:px-20 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center text-sm sm:text-base">

              <div className="flex items-center gap-2">
                <span>Trusted by</span>
                <span className="text-2xl sm:text-3xl font-bold">400+</span>
                <span>international companies</span>
              </div>

              <span className="hidden sm:inline text-gray-400">•</span>

              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-bold">14+</span>
                <span>years in Hong Kong</span>
              </div>

              <span className="hidden sm:inline text-gray-400">•</span>

              <div>Not for side projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
