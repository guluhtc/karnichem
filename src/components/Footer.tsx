import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin, Factory, ChevronUp, Facebook, Linkedin, Twitter, Instagram, Award, Shield, Clock, Users } from 'lucide-react';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Gallery', href: '/product-gallery' },
    { name: 'Blog', href: '#blog' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];



  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Enhanced Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
      >
        <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8">
        {/* Enhanced Main Footer Content */}
        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            {/* Enhanced Company Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-red-500 to-red-600 p-3 rounded-xl mr-4 shadow-lg">
                  <Factory className="h-8 w-8 text-white" />
                </div>
                <div>
                  <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    KarniChem
                  </span>
                  <div className="text-sm text-green-400 font-medium">Est. 2005</div>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed text-base">
                Leading manufacturer of high-quality <span className="text-white font-semibold">Precipitated Calcium Carbonate</span> in Rajasthan, India. 
                Committed to excellence and innovation in PCC production with <span className="text-green-400 font-semibold">19+ years</span> of expertise.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700">
                  <div className="flex items-center mb-2">
                    <Users className="w-5 h-5 text-green-400 mr-2" />
                    <span className="text-2xl font-bold text-white">500+</span>
                  </div>
                  <div className="text-sm text-gray-400">Happy Clients</div>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700">
                  <div className="flex items-center mb-2">
                    <Award className="w-5 h-5 text-red-400 mr-2" />
                    <span className="text-2xl font-bold text-white">19+</span>
                  </div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
              </div>
              
              {/* Enhanced Certifications */}
              <div className="space-y-3">
                <h5 className="font-semibold text-white mb-4 flex items-center">
                  <Shield className="w-5 h-5 text-green-400 mr-2" />
                  Certifications & Standards
                </h5>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center text-sm bg-gray-800/30 p-3 rounded-lg border border-gray-700">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-200 font-medium">ISO 9001:2015 Certified</span>
                  </div>
                  <div className="flex items-center text-sm bg-gray-800/30 p-3 rounded-lg border border-gray-700">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-200 font-medium">FDA Approved Facilities</span>
                  </div>
                  <div className="flex items-center text-sm bg-gray-800/30 p-3 rounded-lg border border-gray-700">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-200 font-medium">GMP Compliant</span>
                  </div>
                </div>
              </div>

              {/* Enhanced Social Media */}
              <div>
                <h5 className="font-semibold text-white mb-4">Connect With Us</h5>
                <div className="flex space-x-4">
                  <a href="#" className="group relative w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-110 shadow-lg">
                    <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </a>
                  <a href="#" className="group relative w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-110 shadow-lg">
                    <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </a>
                  <a href="#" className="group relative w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-110 shadow-lg">
                    <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </a>
                  <a href="#" className="group relative w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-110 shadow-lg">
                    <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Enhanced Quick Links */}
            <div className="lg:col-span-3">
              <h4 className="font-bold text-xl mb-6 text-white flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-red-500 to-green-500 rounded-full mr-3"></div>
                Quick Navigation
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {quickLinks.map((link) => (
                  <div key={link.name} className="group">
                    {link.name === 'Gallery' ? (
                      <button
                        onClick={() => navigate('/product-gallery')}
                        className="w-full text-left flex items-center p-3 rounded-lg bg-gray-800/30 border border-gray-700 hover:border-red-500 hover:bg-gradient-to-r hover:from-red-600/20 hover:to-green-600/20 transition-all duration-300 group"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-green-400 rounded-full mr-4 group-hover:scale-150 transition-transform"></div>
                        <span className="text-gray-300 group-hover:text-white font-medium">{link.name}</span>
                        <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                          <ChevronUp className="w-4 h-4 rotate-90 text-red-400" />
                        </div>
                      </button>
                    ) : (
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className="w-full text-left flex items-center p-3 rounded-lg bg-gray-800/30 border border-gray-700 hover:border-red-500 hover:bg-gradient-to-r hover:from-red-600/20 hover:to-green-600/20 transition-all duration-300 group"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-green-400 rounded-full mr-4 group-hover:scale-150 transition-transform"></div>
                        <span className="text-gray-300 group-hover:text-white font-medium">{link.name}</span>
                        <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                          <ChevronUp className="w-4 h-4 rotate-90 text-red-400" />
                        </div>
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Enhanced Contact Info */}
            <div className="lg:col-span-4">
              <h4 className="font-bold text-xl mb-6 text-white flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-green-500 to-red-500 rounded-full mr-3"></div>
                Get In Touch
              </h4>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700 hover:border-red-500 transition-colors group">
                  <div className="flex items-center mb-2">
                    <div className="bg-gradient-to-br from-red-500 to-red-600 p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white font-semibold">Call Us</span>
                  </div>
                  <div className="ml-11 space-y-1">
                    <a href="tel:+919414095827" className="block text-gray-300 hover:text-white transition-colors font-medium">
                      +91 9414095827
                    </a>
                    <a href="tel:+919461370000" className="block text-gray-400 hover:text-gray-300 transition-colors text-sm">
                      +91 9461370000
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700 hover:border-green-500 transition-colors group">
                  <div className="flex items-center mb-2">
                    <div className="bg-gradient-to-br from-green-500 to-green-600 p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white font-semibold">Email Us</span>
                  </div>
                  <div className="ml-11">
                    <a href="mailto:karnichem@gmail.com" className="text-gray-300 hover:text-white transition-colors font-medium">
                      karnichem@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700 hover:border-red-500 transition-colors group">
                  <div className="flex items-center mb-2">
                    <div className="bg-gradient-to-br from-red-500 to-red-600 p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white font-semibold">Visit Us</span>
                  </div>
                  <div className="ml-11">
                    <address className="text-gray-300 text-sm leading-relaxed not-italic">
                      25 KM Milestone, Jodhpur Road N.H.-89<br />
                      Post Deshnoke, Bikaner<br />
                      Rajasthan - 334801, India
                    </address>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700 hover:border-green-500 transition-colors group">
                  <div className="flex items-center mb-2">
                    <div className="bg-gradient-to-br from-green-500 to-green-600 p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform">
                      <Clock className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white font-semibold">Business Hours</span>
                  </div>
                  <div className="ml-11 space-y-1">
                    <div className="text-gray-300 text-sm">Monday - Saturday: 9:00 AM - 6:00 PM</div>
                    <div className="text-gray-400 text-sm">Sunday: Closed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-transparent to-green-600/20 rounded-lg blur-xl"></div>
          <div className="relative border-t border-gray-700 pt-8 mt-8">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
              {/* Copyright */}
              <div className="text-center lg:text-left">
                <p className="text-gray-300 font-medium">
                  © 2025 <span className="text-white font-bold">Shree Karni Chemicals</span>. All rights reserved.
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  Proudly manufacturing quality PCC since 2005
                </p>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-green-400">
                  <Shield className="w-4 h-4" />
                  <span className="text-sm font-medium">Secure</span>
                </div>
                <div className="flex items-center space-x-2 text-red-400">
                  <Award className="w-4 h-4" />
                  <span className="text-sm font-medium">Certified</span>
                </div>
                <div className="flex items-center space-x-2 text-green-400">
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-medium">Trusted</span>
                </div>
              </div>

              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
              >
                <span className="text-sm font-medium">Back to Top</span>
                <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>

            {/* Additional Footer Info */}
            <div className="mt-6 pt-6 border-t border-gray-800 text-center">
              <div className="flex flex-wrap justify-center items-center space-x-6 text-sm text-gray-500">
                <span>Made in India 🇮🇳</span>
                <span>•</span>
                <span>Quality Assured</span>
                <span>•</span>
                <span>Global Reach</span>
                <span>•</span>
                <span>19+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;