import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../common/Navbar";

const Industries = () => {
  // Industries data for Hong Kong market - professional focus
  const industries = [
    {
      id: 1,
      title: "FinTech & Banking",
      description: "Establish financial operations in Hong Kong with our specialized banking and compliance solutions.",
      services: ["Bank Account Opening", "Payment License", "Regulatory Compliance", "FinTech Setup"],
      icon: "🏦",
      color: "blue",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Corporate Services",
      description: "Complete company formation and administration services for businesses in Hong Kong.",
      services: ["Company Incorporation", "Business Registration", "Company Secretary", "Annual Compliance"],
      icon: "🏢",
      color: "emerald",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Virtual Offices",
      description: "Premium business addresses and virtual office solutions in prime Hong Kong locations.",
      services: ["Virtual Office", "Business Address", "Mail Handling", "Meeting Rooms"],
      icon: "💼",
      color: "indigo",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Trading & Import/Export",
      description: "Specialized services for trading companies and logistics operators in Hong Kong.",
      services: ["Trade Licensing", "Customs Registration", "Shipping Support", "Import/Export Setup"],
      icon: "🚢",
      color: "amber",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Technology Startups",
      description: "Tailored solutions for tech companies establishing operations in Hong Kong.",
      services: ["Startup Visa Support", "IP Registration", "Tech Licensing", "Funding Advisory"],
      icon: "🚀",
      color: "purple",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Professional Services",
      description: "Support for consultants and professionals setting up practice in Hong Kong.",
      services: ["Professional Licensing", "Practice Setup", "Client Management", "Compliance"],
      icon: "⚖️",
      color: "slate",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Statistics data
  const stats = [
    { label: "Companies Formed", value: "2,500+", icon: "🏢" },
    { label: "Bank Accounts Opened", value: "1,800+", icon: "🏦" },
    { label: "Virtual Offices", value: "950+", icon: "💼" },
    { label: "Client Satisfaction", value: "98%", icon: "⭐" }
  ];

  // Color classes mapping
  const colorClasses = {
    blue: { bg: "bg-blue-50", border: "border-blue-100", text: "text-blue-700" },
    emerald: { bg: "bg-emerald-50", border: "border-emerald-100", text: "text-emerald-700" },
    indigo: { bg: "bg-indigo-50", border: "border-indigo-100", text: "text-indigo-700" },
    amber: { bg: "bg-amber-50", border: "border-amber-100", text: "text-amber-700" },
    purple: { bg: "bg-purple-50", border: "border-purple-100", text: "text-purple-700" },
    slate: { bg: "bg-slate-50", border: "border-slate-100", text: "text-slate-700" }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      <Navbar isTransparent={false} />
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100 mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
              </svg>
              Industry Specialization
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industries We Serve in 
              <span className="block text-blue-600">Hong Kong</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Specialized business solutions tailored for diverse industries establishing and growing their presence in Asia's premier financial hub.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Get Industry Consultation
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <button className="inline-flex items-center justify-center px-8 py-3 bg-white text-gray-700 font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-all duration-300">
                View All Services
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:border-blue-200 hover:shadow-sm transition-all duration-300"
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Industries Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Industry Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our team provides specialized knowledge and solutions for businesses across key sectors in Hong Kong
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => {
            const colors = colorClasses[industry.color];
            
            return (
              <div
                key={industry.id}
                className={`bg-white rounded-xl border ${colors.border} overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Industry Header */}
                <div className={`p-6 border-b ${colors.border} ${colors.bg}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg ${colors.bg} border ${colors.border} flex items-center justify-center text-2xl`}>
                        {industry.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{industry.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Industry Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{industry.description}</p>
                  
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-gray-700 mb-3">Key Services:</div>
                    <div className="flex flex-wrap gap-2">
                      {industry.services.map((service, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1.5 bg-gray-50 text-gray-700 text-sm font-medium rounded-md border border-gray-200"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <Link
                      to="/contact"
                      className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${colors.bg} ${colors.text} hover:opacity-90`}
                    >
                      Learn More
                    </Link>
                    <span className="text-sm text-gray-500">
                      Industry specialists available
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-blue-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need Industry-Specific Guidance?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our Hong Kong business experts provide tailored advice for your specific industry requirements and regulatory compliance needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Schedule a Consultation
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </Link>
              <div className="text-center">
                <div className="text-sm text-gray-500 mb-1">Speak with our team</div>
                <div className="text-lg font-semibold text-gray-900">+852 1234 5678</div>
              </div>
            </div>
            
            <p className="text-gray-500 mt-8 text-sm">
              Office hours: Mon-Fri 9:00-18:00 HKT
            </p>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why Hong Kong for Your Business?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Low Tax Regime</h4>
              <p className="text-gray-600 text-sm">Maximum 16.5% corporate tax, no VAT or GST</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Strategic Location</h4>
              <p className="text-gray-600 text-sm">Gateway to Mainland China and Asia-Pacific markets</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Common Law System</h4>
              <p className="text-gray-600 text-sm">Familiar legal framework for international businesses</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;