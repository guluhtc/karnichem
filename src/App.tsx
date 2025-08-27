import React, { useState } from 'react';
import { Phone, Mail, MapPin, ChevronRight, Award, Users, Factory, CheckCircle, Calendar, ArrowRight } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({ name: '', email: '', company: '', phone: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Shree Karni Chemicals Logo" 
                className="h-10 w-auto"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">About Us</a>
                <a href="#products" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Products</a>
                <a href="#blog" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Blog</a>
                <a href="#testimonials" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Testimonials</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-gray-900">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4 mr-2" />
                Certified Company
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Precipitated Calcium Carbonate
                <span className="text-blue-600"> Manufacturer</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Supplying high-purity PCC grades for Paper, Paints, Rubber, Plastics, Pharma, Food and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                  Get a Quote
                  <ChevronRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg" 
                alt="Industrial manufacturing facility" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">ISO Certified</p>
                    <p className="text-sm text-gray-600">Quality Assured</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-quality Precipitated Calcium Carbonate solutions tailored for diverse industrial applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Factory className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Dentifrice PCC</h3>
              <p className="text-gray-600 mb-4">Oral care grade with controlled particle size.</p>
              <button className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                Learn More
                <ChevronRight className="ml-1 w-4 h-4" />
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Factory className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Detergent PCC</h3>
              <p className="text-gray-600 mb-4">High whiteness, improves cleaning performance.</p>
              <button className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                Learn More
                <ChevronRight className="ml-1 w-4 h-4" />
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Factory className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Food/Pharma PCC</h3>
              <p className="text-gray-600 mb-4">Food additive & excipient grade.</p>
              <button className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                Learn More
                <ChevronRight className="ml-1 w-4 h-4" />
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Factory className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Paper/Coating PCC</h3>
              <p className="text-gray-600 mb-4">Brightness and opacity for paper & paints.</p>
              <button className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                Learn More
                <ChevronRight className="ml-1 w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center">
              View All Products
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Shree Karni Chemicals
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Shree Karni Chemicals is among the oldest and largest manufacturers of Precipitated Calcium Carbonate (PCC) in Rajasthan. This static package is a faithful, lightweight rebuild intended to act as a fully client-hosted, mobile‑friendly site without external dependencies.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">500+ Clients</p>
                    <p className="text-sm text-gray-600">Served Globally</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">ISO 9001:2015</p>
                    <p className="text-sm text-gray-600">Certified Quality</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg" 
                alt="Manufacturing facility" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
            <p className="text-xl text-gray-600">Stay updated with industry knowledge and PCC applications</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-white rounded-xl shadow-lg border overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg" 
                alt="PCC manufacturing process" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>January 15, 2025</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What is PCC?</h3>
                <p className="text-gray-600 mb-4">
                  Precipitated Calcium Carbonate (PCC) is synthetically produced for controlled purity and particle properties.
                </p>
                <button className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                  Read More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </article>

            <article className="bg-white rounded-xl shadow-lg border overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.pexels.com/photos/159751/book-address-book-learning-learn-159751.jpeg" 
                alt="Paper manufacturing with PCC" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>January 10, 2025</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">PCC for Paper</h3>
                <p className="text-gray-600 mb-4">
                  Enhances brightness, opacity and printability while reducing costs.
                </p>
                <button className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                  Read More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </article>

            <article className="bg-white rounded-xl shadow-lg border overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg" 
                alt="Paint and coatings application" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>January 5, 2025</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">PCC in Paints & Coatings</h3>
                <p className="text-gray-600 mb-4">
                  Improves sheen control, durability and optical performance.
                </p>
                <button className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                  Read More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </article>
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center">
              View All Articles
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600">What our customers say about our products and services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-lg">RS</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Rajesh Singh</h4>
                  <p className="text-gray-600 text-sm">Paper Mill Manager</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "KarniChem's PCC has significantly improved our paper quality. The consistency and purity of their products are exceptional."
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-lg">AM</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Anita Mehta</h4>
                  <p className="text-gray-600 text-sm">Paint Industry Executive</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Reliable supply and excellent technical support. KarniChem understands our specific requirements perfectly."
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-semibold text-lg">VK</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Vikram Kumar</h4>
                  <p className="text-gray-600 text-sm">Pharma Quality Head</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Outstanding quality standards and compliance. Their pharma-grade PCC meets all our stringent requirements."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Reach Us</h2>
              <p className="text-lg text-gray-700 mb-8">
                Ready to discuss your PCC requirements? Contact us today for customized solutions.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-700">+91 9414095827</p>
                    <p className="text-gray-700">+91 9461370000</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-700">karnichem@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4 mt-1">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-700">
                      25 KM Milestone to Jodhpur Road N.H.-89,<br />
                      Post Deshnoke, Bikaner,<br />
                      Rajasthan - 334801, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Factory className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">KarniChem</span>
              </div>
              <p className="text-gray-400 mb-4">
                Leading manufacturer of high-quality Precipitated Calcium Carbonate in Rajasthan, India.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm">in</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm">@</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
                <li><a href="#blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
              <div className="space-y-3">
                <p className="text-gray-400 flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +91 9414095827
                </p>
                <p className="text-gray-400 flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  karnichem@gmail.com
                </p>
                <p className="text-gray-400 flex items-start">
                  <MapPin className="w-4 h-4 mr-2 mt-1" />
                  Bikaner, Rajasthan, India
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Shree Karni Chemicals. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;