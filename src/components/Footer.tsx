import React, { useState } from 'react';
import { Phone, Mail, MapPin, Factory, ChevronUp, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';
import ProductGallery from './ProductGallery';

const Footer: React.FC = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  const products = [
    'Dentifrice PCC',
    'Detergent PCC',
    'Food/Pharma PCC',
    'Paper/Coating PCC',
    'Paint Grade PCC',
    'Rubber Grade PCC'
  ];

  const resources = [
    'Product Catalog',
    'Technical Data Sheets',
    'Quality Certificates',
    'Safety Data Sheets',
    'Industry Applications',
    'FAQ'
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <ChevronUp className="w-6 h-6" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4 sm:mb-6">
              <Factory className="h-6 w-6 sm:h-8 sm:w-8 text-red-400" />
              <span className="ml-2 text-xl sm:text-2xl font-bold">KarniChem</span>
            </div>
            <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Leading manufacturer of high-quality Precipitated Calcium Carbonate in Rajasthan, India. 
              Committed to excellence and innovation in PCC production.
            </p>
            
            {/* Certifications */}
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span className="text-gray-300">ISO 9001:2015 Certified</span>
              </div>
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span className="text-gray-300">FDA Approved Facilities</span>
              </div>
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span className="text-gray-300">GMP Compliant</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-3 sm:space-x-4 mt-4 sm:mt-6">
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-400 hover:text-red-400 transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>

            <h4 className="font-semibold text-lg mb-6 mt-8 text-white">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Investor Relations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">News & Press</a></li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Our Products</h4>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product}>
                  <a href="#products" className="text-gray-400 hover:text-green-400 transition-colors">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources & Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource}>
                  {resource === 'Product Catalog' ? (
                    <button
                      onClick={() => setIsGalleryOpen(true)}
                      className="text-gray-400 hover:text-red-400 transition-colors text-left"
                    >
                      {resource}
                    </button>
                  ) : (
                    <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                      {resource}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            <h4 className="font-semibold text-lg mb-6 mt-8 text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-3 text-red-400" />
                <div>
                  <div>+91 9414095827</div>
                  <div className="text-sm">+91 9461370000</div>
                </div>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-3 text-green-400" />
                <span>karnichem@gmail.com</span>
              </div>
              <div className="flex items-start text-gray-400">
                <MapPin className="w-4 h-4 mr-3 mt-1 text-red-400" />
                <span className="text-sm leading-relaxed">
                  25 KM Milestone, Jodhpur Road<br />
                  Bikaner, Rajasthan - 334801
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 mb-6 sm:mb-8">
          <div className="bg-gradient-to-r from-red-600 to-green-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Stay Updated</h3>
            <p className="text-red-100 mb-4 sm:mb-6 text-sm sm:text-base">
              Subscribe to our newsletter for the latest updates on products, industry insights, and company news.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-3 sm:px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white text-sm sm:text-base"
                />
                <button className="bg-white text-red-600 hover:bg-gray-100 px-4 sm:px-6 py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base">
                  Subscribe
                </button>
              </div>
              <p className="text-red-100 text-xs sm:text-sm mt-2 sm:mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Shree Karni Chemicals. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
          
          <div className="mt-6 text-gray-500 text-sm">
            <p>Designed & Developed with ❤️ for Excellence in PCC Manufacturing</p>
          </div>
        </div>
      </div>

      {/* Product Gallery Modal */}
      <ProductGallery 
        isOpen={isGalleryOpen} 
        onClose={() => setIsGalleryOpen(false)} 
      />
    </footer>
  );
};

export default Footer;