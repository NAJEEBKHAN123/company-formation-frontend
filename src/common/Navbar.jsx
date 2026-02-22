import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ isTransparent = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // Desktop dropdown

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const servicesDropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  // Scroll effect
  useEffect(() => {
    if (isHomePage) {
      const handleScroll = () => setScrolled(window.scrollY > 100);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isHomePage]);

  // Outside click handling
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target)
      ) {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setIsServicesOpen(false), 220);
      }

      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
        setIsMobileServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Close on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  // Desktop hover
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsServicesOpen(false), 280);
  };

  const toggleServicesDesktop = (e) => {
    e.stopPropagation();
    setIsServicesOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleMobileServices = () => setIsMobileServicesOpen((prev) => !prev);

  // Style helpers
  const getNavbarStyle = () => {
    if (!isHomePage) return "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100";
    return scrolled
      ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100"
      : "bg-transparent";
  };

  const getLinkStyle = (isActive = false) => {
    const base = !isHomePage || scrolled
      ? "text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300"
      : "text-white/90 hover:text-white font-medium transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-white after:transition-all after:duration-300";
    return `${base} ${isActive ? "text-blue-600 after:w-full" : ""}`;
  };

  const getServicesLinkStyle = () =>
    !isHomePage || scrolled
      ? "text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 flex items-center gap-1.5"
      : "text-white/90 hover:text-white font-medium transition-all duration-200 flex items-center gap-1.5";

  const getMobileLinkStyle = () =>
    "text-gray-800 hover:text-blue-600 font-medium text-lg py-3 px-4 rounded-lg hover:bg-gray-50 transition-all duration-200";

  const getButtonStyle = () =>
    !isHomePage || scrolled
      ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
      : "bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 hover:border-white/50 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5";

  const getMobileButtonStyle = () =>
    "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white w-full py-3.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300";

  const getLogoStyle = () =>
    !isHomePage || scrolled
      ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800"
      : "text-white";

  const getSubtitleStyle = () =>
    !isHomePage || scrolled ? "text-gray-500" : "text-white/70";

  return (
    <>
      <nav className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${getNavbarStyle()}`}>
        <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16 py-4">
          <Link to="/" className="flex items-center gap-3 group z-50">
            <div className="flex flex-col">
              <span className={`font-bold text-2xl tracking-tight transition-all duration-300 ${getLogoStyle()}`}>
                OSCHK
                <span className={`text-xs font-light px-2 tracking-widest transition-all duration-300 ${getSubtitleStyle()}`}>
                  HONG KONG
                </span>
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link to="/" className={getLinkStyle(location.pathname === "/")}>Home</Link>

            <div
              ref={servicesDropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 ${getServicesLinkStyle()}`}
                onClick={toggleServicesDesktop}
                aria-expanded={isServicesOpen}
              >
                Services
                <svg className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-3 w-72 sm:w-80 bg-white rounded-xl shadow-[0_20px_70px_-12px_rgba(0,0,0,0.25)] border border-gray-100/70 overflow-hidden"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="py-1.5">
                    <Link to="/services" className="group flex flex-col px-5 py-3.5 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-colors" onClick={() => setIsServicesOpen(false)}>
                      <span className="font-semibold text-gray-900 group-hover:text-blue-700">All Services Overview</span>
                      <span className="text-sm text-gray-500 mt-0.5 group-hover:text-gray-600">Complete service catalog</span>
                    </Link>

                    {[
                      { to: "/services/government-fees", label: "Government Fees", desc: "Mandatory registration fees" },
                      { to: "/services/packages", label: "Incorporation Packages", desc: "Basic, Standard, Premium" },
                      { to: "/services/annual-services", label: "Annual Services", desc: "Yearly compliance" },
                      { to: "/services/one-off-services", label: "One-off Services", desc: "Additional services as needed" },
                    ].map((item) => (
                      <Link key={item.to} to={item.to} className="group flex items-center justify-between px-5 py-3.5 hover:bg-gray-50/80 transition-colors" onClick={() => setIsServicesOpen(false)}>
                        <div className="flex items-center gap-3">
                          <div>
                            <div className="font-medium text-gray-900 group-hover:text-blue-700">{item.label}</div>
                            <div className="text-xs text-gray-500 mt-0.5 group-hover:text-gray-600">{item.desc}</div>
                          </div>
                        </div>
                        <svg className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/industries" className={getLinkStyle(location.pathname === "/industries")}>Industries</Link>
            <Link to="/who-we-are" className={getLinkStyle(location.pathname === "/who-we-are")}>Who We Are</Link>
            <Link to="/contact" className={getLinkStyle(location.pathname === "/contact")}>Contact Us</Link>

            <button className={`px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 ${getButtonStyle()}`}>
              Book a Call
            </button>

            <div className={`flex items-center gap-2 text-sm font-medium ${!isHomePage || scrolled ? "text-gray-600 hover:text-blue-600" : "text-white/80 hover:text-white"}`}>
              <button className="hover:scale-110 transition-transform duration-200">ENG</button>
              <span className="opacity-50">|</span>
              <button className="hover:scale-110 transition-transform duration-200 opacity-70 hover:opacity-100">中文</button>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            ref={hamburgerRef}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 z-[60] relative"
            onClick={toggleMobileMenu}
          >
            <span className={`block w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""} ${!isHomePage || scrolled ? "bg-gray-700" : "bg-white"}`}></span>
            <span className={`block w-6 h-0.5 my-1.5 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""} ${!isHomePage || scrolled ? "bg-gray-700" : "bg-white"}`}></span>
            <span className={`block w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""} ${!isHomePage || scrolled ? "bg-gray-700" : "bg-white"}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden fixed inset-0 top-0 left-0 w-full h-screen transition-all duration-300 ease-in-out z-[55] ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-white/95 backdrop-blur-md shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-6 flex-shrink-0">
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5" style={{ maxHeight: "calc(100vh - 180px)" }}>
            <div className="mb-8 px-3">
              <span className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 tracking-tight">
                OSCHK<span className="text-sm font-light px-2 tracking-widest text-gray-500">HONG KONG</span>
              </span>
            </div>

            <div className="flex flex-col space-y-1 mb-10">
              <Link to="/" className={getMobileLinkStyle()} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>

              <button
                type="button"
                className={`${getMobileLinkStyle()} flex items-center justify-between w-full text-left`}
                onClick={toggleMobileServices}
              >
                <span>Services</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isMobileServicesOpen && (
                <div className="pl-6 pr-2 pb-4 space-y-2">
                  <Link
                    to="/services"
                    className="block py-3 px-4 text-blue-700 font-semibold hover:bg-blue-50 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    All Services Overview
                  </Link>

                  <Link
                    to="/services/government-fees"
                    className="block py-3 px-4 hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Government Fees
                  </Link>

                  <Link
                    to="/services/packages"
                    className="block py-3 px-4 hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Incorporation Packages
                  </Link>

                  <Link
                    to="/services/annual-services"
                    className="block py-3 px-4 hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Annual Services
                  </Link>

                  <Link
                    to="/services/one-off-services"
                    className="block py-3 px-4 hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    One-off Services
                  </Link>
                </div>
              )}

              <Link to="/industries" className={getMobileLinkStyle()} onClick={() => setIsMobileMenuOpen(false)}>Industries</Link>
              <Link to="/who-we-are" className={getMobileLinkStyle()} onClick={() => setIsMobileMenuOpen(false)}>Who We Are</Link>
              <Link to="/contact" className={getMobileLinkStyle()} onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
            </div>

            <div className="px-3 mb-8">
              <button className={getMobileButtonStyle()}>Book a Call</button>
            </div>
          </div>

          <div className="flex-shrink-0 border-t border-gray-200 bg-white px-6 py-6">
            <div className="flex items-center justify-center gap-4 text-base font-medium text-gray-700 mb-4">
              <button className="px-4 py-2 rounded-lg hover:bg-gray-100 transition-all duration-200">ENG</button>
              <span className="opacity-30">|</span>
              <button className="px-4 py-2 rounded-lg hover:bg-gray-100 transition-all duration-200">中文</button>
            </div>
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