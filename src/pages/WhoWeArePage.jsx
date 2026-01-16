import React, { useEffect } from "react";
import Navbar from "../common/Navbar";

const bgImageHero = "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80";
const bgImage1 = "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80";
const bgImage2 = "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1920&q=80";
const bgImage3 = "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1920&q=80";

const stats = [
  { value: "19", label: "YEARS OF EXPERIENCE" },
  { value: "863", label: "COMPLETED PROJECTS" },
  { value: "67", label: "EXPERTS AT YOUR SERVICE" },
  { value: "3450", label: "MEXPRESSO CUPGIALES" },
];

 

const services = [
  {
    title: "Establishment of subsidiaries in Europe and abroad",
    desc: "We are committed to our 43 countries in Europe, Asia and America, linking services include banking and legal support.",
    countries: ["Europe", "Asia", "America"]
  },
  {
    title: "Sale of existing companies in all countries",
    desc: "Looking to acquire a company with a strong history? We facilitate acquisitions of established businesses with proven track records.",
  },
  {
    title: "Business Development",
    desc: "Looking to secure investment? Connecting accounts or suppliers for growth? We guide you through expansion and revenue growth.",
  },
  {
    title: "Assistance in preparing funding applications",
    desc: "Seeking investors or financing? Our experts prepare compelling applications and connect you with funding sources.",
  },
];

export default function WhoWeAre() {
  
   useEffect(() =>{
     window.scrollTo({
      top: 0,
      behavior: "smooth"
     })
  })

  return (
    <section className="w-full bg-white ">
      <Navbar isTransparent={false} />

      {/* ===== SECTION 0: HERO WITH "WHO WE ARE" TITLE ===== */}
      <div
        className="relative bg-cover bg-center" 
        style={{ backgroundImage: `url(${bgImageHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-gray-900/70" />
        <div className="relative  min-h-[60vh] flex items-center justify-center">
          <div className="max-w-7xl mx-auto  px-6 py-32 md:py-44 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              WHO <span className="text-blue-400">WE ARE</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Pioneers in international business consulting since 2001
            </p>
          </div>
        </div>
      </div>

      {/* ===== SECTION 1: MAIN CONTENT WITH DIAGONAL CUT ===== */}
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage1})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Diagonal white overlay */}
        <div className="relative bg-white clip-diagonal-top pt-20 pb-48 -mt-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-32">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 ">
              Founded in 2001, we are a consulting firm specializing in the creation of international companies.
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="space-y-4">
                <h3 className="text-blue-700 font-bold text-xl">
                  A team of experts at your service
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The quality of our team of consultants and administrators is our number one asset. Our team members have the technical and professional skills necessary to meet your specific needs.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-blue-700 font-bold text-xl">
                  Quality and Performance
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Each member is responsible for the quality of their work. We continuously improve to offer performance and service that exceeds your expectations.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-blue-700 font-bold text-xl">
                  Privacy and Security
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Your data remains strictly confidential. For security, our application process is handled with multiple encryption layers and no sensitive data is stored unnecessarily.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== SECTION 2: STATS WITH BACKGROUND ===== */}
      <div
        className="relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${bgImage2})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-gray-900/80" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-16  py-32 text-white">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-blue-300 mb-6">
              YOUR QUALITY PARTNER
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We set up companies in most offshore locations, and also in Europe, Asia, 
              the Middle East, the USA and Canada. Founded by two partners, we offer 
              comprehensive advisory services beyond simple company creation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((item, i) => (
              <div key={i} className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="text-5xl font-bold text-white mb-3">{item.value}</div>
                <div className="text-sm tracking-wider text-gray-300">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== SECTION 3: SERVICES ===== */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-24">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Beyond offshore companies, we support clients on various projects
        </h2>
        <p className="text-gray-600 text-center mb-16 max-w-4xl mx-auto">
          Our comprehensive services extend far beyond company formation to provide 
          end-to-end international business solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              {/* Icon placeholder */}
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-white font-bold">{i + 1}</span>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-700 mb-4">
                {item.desc}
              </p>
              
              {item.countries && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.countries.map((country, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      {country}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ===== SECTION 4: CTA WITH BACKGROUND ===== */}
      <div
        className="relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${bgImage3})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-gray-900/90" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-32 text-center text-white">
          <p className="tracking-[0.5em] text-sm text-blue-300 mb-4">ARE YOU READY?</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Don't wait any longer, contact us today!
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Let us help you establish your international presence with our expert guidance.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 transition-all px-10 py-4 text-lg font-bold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 duration-300">
              SET UP COMPANY IN HONG KONG
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/20 transition px-10 py-4 text-lg font-bold rounded-lg hover:scale-105 duration-300">
              BOOK CONSULTATION
            </button>
          </div>
          
          <p className="mt-12 text-gray-400 text-sm">
            RETURN COMPANY IN MORE CORE
          </p>
        </div>
      </div>
      
      {/* Add this to your global CSS for diagonal cut */}
      <style jsx>{`
        .clip-diagonal-top {
          clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 85%);
        }
        @media (max-width: 768px) {
          .clip-diagonal-top {
            clip-path: polygon(0 5%, 100% 0, 100% 100%, 0 95%);
          }
        }
      `}</style>
    </section>
  );
}