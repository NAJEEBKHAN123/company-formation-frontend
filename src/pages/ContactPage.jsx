import React, { useEffect, useState } from "react";
import { MapPin, Mail, Clock } from "lucide-react";
import Navbar from "../common/Navbar";

const bgImageHero =
  "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";
const bgImageBottom =
  "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";

export default function HongKongLanding() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    location: "",
    objective: "",
    challenge: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(
      "Thank you! Your consultation request has been received. We'll get back to you within 24 hours."
    );
    setFormData({
      name: "",
      email: "",
      company: "",
      location: "",
      objective: "",
      challenge: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() =>{
     window.scrollTo({
      top: 0,
      behavior: "smooth"
     })
  })

  return (
    <div className="w-full bg-white overflow-hidden">
      <Navbar isTransparent={false} />

      {/* ===== HERO SECTION WITH DIAGONAL CUT ===== */}
      <div className="relative">
        <div
          className="relative bg-cover bg-center bg-fixed clip-hero-bottom"
          style={{ backgroundImage: `url(${bgImageHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-gray-900/70" />
          <div className="relative min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh] flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28 md:py-32 lg:mt-12 text-center animate-fade-in">
              <p className="text-xs sm:text-sm md:text-base uppercase tracking-wider sm:tracking-widest mb-3 sm:mb-4 text-blue-300">
                CONTACT US
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl  font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight">
                Launch, Manage & Grow Your Business
                <br />
                <span className="text-blue-400">Across Hong Kong & Asia</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto px-4">
                We help international founders and companies structure, manage,
                and expand their operations in Asia with confidence
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== INFO CARDS SECTION ===== */}
      <div className="relative">
        <div className="relative bg-white pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-20 md:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 pt-8 sm:pt-16 md:pt-24 lg:pt-32">
            {/* Three Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
              {/* Our Address */}
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300 px-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-purple-200 transition-colors">
                  <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-purple-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800">
                  Our Address
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Marble Arch, London, UK
                  <br />
                  <span className="text-xs text-gray-500">
                    Partner Network: Hong Kong • Singapore • Shanghai
                  </span>
                </p>
              </div>

              {/* How to Contact Us */}
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300 px-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-red-200 transition-colors">
                  <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800">
                  How to Contact Us
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  info@yourdomain.com
                  <br />
                  +44 (0) 207 123 1237
                  <br />
                  <span className="text-xs text-gray-500">
                    For urgent operational matters in Asia, please call.
                  </span>
                </p>
              </div>

              {/* Our Office Hours */}
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300 px-4 sm:col-span-2 lg:col-span-1">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-orange-200 transition-colors">
                  <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800">
                  Our Office Hours
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  MO - SAT: 9am - 6pm
                  <br />
                  SU: Closed
                </p>
              </div>
            </div>

            {/* Appointment Form */}
            <div className="max-w-3xl mx-auto mt-8 sm:mt-12 md:mt-16 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 text-gray-900">
                Start Your Asia Expansion Confidently
              </h2>
              <p className="text-center text-sm sm:text-base text-gray-600 mb-8 sm:mb-10 md:mb-12">
                Book a free consultation with our Asia market advisors. Get
                clear, actionable steps to structure and scale your business.
              </p>

              <div className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name *"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email *"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name *"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Current Headquarters Location *"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <select
                  name="objective"
                  value={formData.objective}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select your primary objective *</option>
                  <option value="setup">
                    Setting up a new entity in Hong Kong / Asia
                  </option>
                  <option value="structure">
                    Structuring my existing Asia operations
                  </option>
                  <option value="hr">
                    Hiring & HR / Payroll management in Asia
                  </option>
                  <option value="compliance">
                    Accounting & Compliance in Asia
                  </option>
                  <option value="expansion">
                    Market entry strategy & scaling
                  </option>
                  <option value="other">
                    Other (please specify in message)
                  </option>
                </select>

                <textarea
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleChange}
                  placeholder="What is the biggest hurdle you're facing with your Asia expansion? *"
                  rows="4"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                />

                <div className="flex justify-center sm:justify-end">
                  <button
                    onClick={handleSubmit}
                    className="w-full sm:w-auto cursor-pointer px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== BOTTOM CTA SECTION WITH DIAGONAL CUT ===== */}
      <div className="relative">
        <div
          className="relative bg-cover bg-center bg-fixed clip-bottom-top"
          style={{ backgroundImage: `url(${bgImageBottom})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-gray-900/90" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-24 md:py-32 text-center text-white">
            <p className="tracking-[0.3em] sm:tracking-[0.5em] text-xs sm:text-sm text-blue-300 mb-3 sm:mb-4">
              ARE YOU READY?
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 px-4">
              Avoid costly mistakes in your Asia expansion
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto px-4">
              Join thousands of successful international businesses that trust
              us with structuring, managing, and expanding their operations in
              Asia
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 max-w-2xl mx-auto">
              <button className="w-full sm:w-auto cursor-pointer bg-blue-600 hover:bg-blue-700 transition-all px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-bold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 duration-300">
                GET STARTED NOW
              </button>
              <button className="w-full sm:w-auto cursor-pointer bg-transparent border-2 border-white hover:bg-white/20 transition px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-bold rounded-lg hover:scale-105 duration-300">
                VIEW OUR SERVICES
              </button>
            </div>

            <p className="mt-8 sm:mt-10 md:mt-12 text-gray-400 text-xs sm:text-sm px-4">
              Trusted by 3,450+ international businesses worldwide
            </p>
          </div>
        </div>
      </div>

      {/* Diagonal cut styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        /* Hero section diagonal cut at bottom */
        .clip-hero-bottom {
          clip-path: polygon(0 0, 100% 0, 100% calc(100% - 50px), 0 100%);
        }

        /* Bottom section diagonal cut at top */
        .clip-bottom-top {
          clip-path: polygon(0 50px, 100% 0, 100% 100%, 0 100%);
        }

        /* Tablet adjustments */
        @media (max-width: 1024px) {
          .clip-hero-bottom {
            clip-path: polygon(0 0, 100% 0, 100% calc(100% - 40px), 0 100%);
          }

          .clip-bottom-top {
            clip-path: polygon(0 40px, 100% 0, 100% 100%, 0 100%);
          }
        }

        /* Mobile landscape and small tablets */
        @media (max-width: 768px) {
          .clip-hero-bottom {
            clip-path: polygon(0 0, 100% 0, 100% calc(100% - 30px), 0 100%);
          }

          .clip-bottom-top {
            clip-path: polygon(0 30px, 100% 0, 100% 100%, 0 100%);
          }
        }

        /* Mobile portrait */
        @media (max-width: 640px) {
          .clip-hero-bottom {
            clip-path: polygon(0 0, 100% 0, 100% calc(100% - 20px), 0 100%);
          }

          .clip-bottom-top {
            clip-path: polygon(0 20px, 100% 0, 100% 100%, 0 100%);
          }
        }

        /* Very small mobile devices */
        @media (max-width: 375px) {
          .clip-hero-bottom {
            clip-path: polygon(0 0, 100% 0, 100% calc(100% - 15px), 0 100%);
          }

          .clip-bottom-top {
            clip-path: polygon(0 15px, 100% 0, 100% 100%, 0 100%);
          }
        }
      `}</style>
    </div>
  );
}
