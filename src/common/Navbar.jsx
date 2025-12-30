import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ isTransparent = false }) {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Handle scroll effect only on home page
  useEffect(() => {
    if (isHomePage) {
      const handleScroll = () => {
        setScrolled(window.scrollY > 100);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isHomePage]);

  // Determine navbar style
  const getNavbarStyle = () => {
    // On other pages (Services, Industries) - always solid
    if (!isHomePage) {
      return "bg-white shadow-lg text-gray-900";
    }
    
    // On home page - transparent when at top, solid when scrolled
    if (scrolled) {
      return "bg-white shadow-lg text-gray-900";
    }
    
    // Default: transparent on hero
    return "bg-transparent text-white";
  };

  const getButtonStyle = () => {
    if (!isHomePage) {
      return "bg-blue-600 hover:bg-blue-700 text-white";
    }
    
    if (scrolled) {
      return "bg-blue-600 hover:bg-blue-700 text-white";
    }
    
    return "bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 text-white";
  };

  return (
    <nav className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getNavbarStyle()}`}>
      <div className="flex items-center justify-between px-12 lg:px-16 py-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link to="/" className={`font-bold text-2xl tracking-tight ${!isHomePage || scrolled ? "text-gray-900" : "text-white"}`}>
            OSCHK
          </Link>
          <div className={`text-sm font-light tracking-widest ${!isHomePage || scrolled ? "text-gray-600" : "text-white/80"}`}>
            HONG KONG
          </div>
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex items-center gap-10 lg:gap-10 text-base">
          <Link 
            to="/" 
            className={`hover:text-blue-600 transition ${!isHomePage || scrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-white/80"}`}
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className={`hover:text-blue-600 transition ${!isHomePage || scrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-white/80"}`}
          >
            Services
          </Link>
          <Link 
            to="/industries" 
            className={`hover:text-blue-600 transition ${!isHomePage || scrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-white/80"}`}
          >
            Industries
          </Link>
          <Link 
            to="/who-we-are" 
            className={`hover:text-blue-600 transition ${!isHomePage || scrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-white/80"}`}
          >
            Who We Are
          </Link>
          
          <button className={`px-5 py-2 text-sm font-medium rounded-md transition-all duration-200 ${getButtonStyle()}`}>
            Book a Call
          </button>

          <div className={`flex items-center gap-2 ${!isHomePage || scrolled ? "text-gray-600" : "text-white"}`}>
            <span className="font-medium">ENG</span>
            <span>|</span>
            <span>中文</span>
          </div>
        </div>
      </div>
    </nav>
  );
}