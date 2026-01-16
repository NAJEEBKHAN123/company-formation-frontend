import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ isTransparent = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const menuContentRef = useRef(null);

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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (hamburgerRef.current && hamburgerRef.current.contains(event.target)) {
        return;
      }
      
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Determine navbar style
  const getNavbarStyle = () => {
    if (!isHomePage) {
      return "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100";
    }
    
    if (scrolled) {
      return "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100";
    }
    
    return "bg-transparent";
  };

  const getLinkStyle = (isActive = false) => {
    if (!isHomePage || scrolled) {
      return `text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300 ${
        isActive ? "text-blue-600 after:w-full" : ""
      }`;
    }
    return "text-white/90 hover:text-white font-medium transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-white after:transition-all after:duration-300";
  };

  const getMobileLinkStyle = () => {
    return "text-gray-800 hover:text-blue-600 font-medium text-lg py-3 px-4 rounded-lg hover:bg-gray-50 transition-all duration-200";
  };

  const getButtonStyle = () => {
    if (!isHomePage || scrolled) {
      return "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5";
    }
    
    return "bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 hover:border-white/50 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5";
  };

  const getMobileButtonStyle = () => {
    return "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white w-full py-3.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300";
  };

  const getLogoStyle = () => {
    if (!isHomePage || scrolled) {
      return "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800";
    }
    return "text-white";
  };

  const getSubtitleStyle = () => {
    if (!isHomePage || scrolled) {
      return "text-gray-500";
    }
    return "text-white/70";
  };

  const getLangStyle = () => {
    if (!isHomePage || scrolled) {
      return "text-gray-600 hover:text-blue-600";
    }
    return "text-white/80 hover:text-white";
  };

  const getMobileLangStyle = () => {
    return "text-gray-700 font-medium";
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Main Navbar - ALWAYS on top */}
      <nav className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${getNavbarStyle()}`}>
        <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group z-50">
            <div className="flex flex-col">
              <span className={`font-bold text-2xl tracking-tight transition-all duration-300 ${getLogoStyle()}`}>
                OSCHK<span className={`text-xs font-light px-2 tracking-widest transition-all duration-300 ${getSubtitleStyle()}`}>
                HONG KONG
              </span>
              </span>
            </div>
          </Link>

          {/* Desktop Menu Items */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link 
              to="/" 
              className={getLinkStyle(location.pathname === "/")}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={getLinkStyle(location.pathname === "/services")}
            >
              Services
            </Link>
            <Link 
              to="/industries" 
              className={getLinkStyle(location.pathname === "/industries")}
            >
              Industries
            </Link>
            <Link 
              to="/who-we-are" 
              className={getLinkStyle(location.pathname === "/who-we-are")}
            >
              Who We Are
            </Link>
            <Link 
              to="/contact" 
              className={getLinkStyle(location.pathname === "/contact")}
            >
              Contact Us
            </Link>
            
            <button className={`px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 ${getButtonStyle()}`}>
              Book a Call
            </button>

            <div className={`flex items-center gap-2 text-sm font-medium transition-all duration-300 ${getLangStyle()}`}>
              <button className="hover:scale-110 transition-transform duration-200">ENG</button>
              <span className="opacity-50">|</span>
              <button className="hover:scale-110 transition-transform duration-200 opacity-70 hover:opacity-100">中文</button>
            </div>
          </div>

          {/* Mobile Menu Button - SEPARATED from mobile menu */}
          <button 
            ref={hamburgerRef}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 z-[60] relative"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <span 
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isMobileMenuOpen 
                  ? "rotate-45 translate-y-2" 
                  : ""
              } ${!isHomePage || scrolled ? "bg-gray-700" : "bg-white"}`}
            ></span>
            <span 
              className={`block w-6 h-0.5 my-1.5 transition-all duration-300 ${
                isMobileMenuOpen 
                  ? "opacity-0" 
                  : ""
              } ${!isHomePage || scrolled ? "bg-gray-700" : "bg-white"}`}
            ></span>
            <span 
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isMobileMenuOpen 
                  ? "-rotate-45 -translate-y-2" 
                  : ""
              } ${!isHomePage || scrolled ? "bg-gray-700" : "bg-white"}`}
            ></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - SEPARATE from navbar */}
      <div 
        ref={mobileMenuRef}
        className={`md:hidden fixed inset-0 top-0 left-0 w-full h-screen transition-all duration-300 ease-in-out z-[55] ${
          isMobileMenuOpen 
            ? "opacity-100 visible" 
            : "opacity-0 invisible"
        }`}
      >
        {/* Background Overlay */}
        <div 
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Content - NO SCROLL NEEDED */}
        <div 
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-white/95 backdrop-blur-md shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button at top */}
          <div className="flex justify-end p-6 flex-shrink-0">
            <button 
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Scrollable Content Area - ONLY for navigation links */}
          <div 
            ref={menuContentRef}
            className="flex-1 overflow-y-auto px-6"
            style={{ maxHeight: "calc(100vh - 220px)" }} // Reserve space for bottom section
          >
            {/* Mobile Logo */}
            <div className="mb-8 px-4">
              <div className="flex flex-col">
                <span className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 tracking-tight">
                  OSCHK<span className="text-sm font-light px-2 tracking-widest text-gray-500">
                  HONG KONG
                </span>
                </span>
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-2 mb-8">
              <Link 
                to="/" 
                className={getMobileLinkStyle()}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className={getMobileLinkStyle()}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/industries" 
                className={getMobileLinkStyle()}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Industries
              </Link>
              <Link 
                to="/who-we-are" 
                className={getMobileLinkStyle()}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Who We Are
              </Link>
              <Link 
                to="/contact" 
                className={getMobileLinkStyle()}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile CTA Button - INSIDE scrollable area */}
            <div className="mb-12 px-4">
              <button 
                className={getMobileButtonStyle()}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  // Add your booking logic here
                }}
              >
                Book a Call
              </button>
            </div>
          </div>

          {/* FIXED BOTTOM SECTION - Always visible without scrolling */}
          <div className="flex-shrink-0 border-t border-gray-200 bg-white px-6 py-6">
            {/* Mobile Language Switcher - ALWAYS VISIBLE */}
            <div className={`flex items-center justify-center gap-4 text-base font-medium ${getMobileLangStyle()} mb-4`}>
              <button 
                className="px-4 py-2 rounded-lg hover:bg-gray-100 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ENG
              </button>
              <span className="opacity-30">|</span>
              <button 
                className="px-4 py-2 rounded-lg hover:bg-gray-100 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                中文
              </button>
            </div>
            
            {/* Contact Info - ALWAYS VISIBLE */}
            <div className="text-center text-gray-600 text-sm">
              <p>contact@oschk.com</p>
              <p className="mt-1">+852 1234 5678</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}