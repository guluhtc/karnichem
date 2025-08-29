import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    productInterest: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
        productInterest: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+91 9414095827', '+91 9461370000'],
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['karnichem@gmail.com', 'info@karnichem.com'],
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: MapPin,
      title: 'Our Location',
      details: ['25 KM Milestone to Jodhpur Road N.H.-89', 'Post Deshnoke, Bikaner, Rajasthan - 334801'],
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Saturday: 9:00 AM - 6:00 PM', 'Sunday: Closed'],
      color: 'bg-green-100 text-green-600'
    }
  ];

  const productOptions = [
    'Dentifrice PCC',
    'Detergent PCC',
    'Food/Pharma PCC',
    'Paper/Coating PCC',
    'Paint Grade PCC',
    'Rubber Grade PCC',
    'Custom Requirements'
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-6">
            <Mail className="w-4 h-4 mr-2" />
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact <span className="text-green-600">Our Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your PCC requirements? Contact us today for customized solutions and expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-6 lg:space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 lg:mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-base sm:text-lg text-gray-700 mb-6 lg:mb-8 leading-relaxed">
                Our team of experts is ready to help you find the perfect PCC solution for your specific needs. 
                We provide technical support, custom formulations, and reliable supply chain management.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4 lg:space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start p-4 sm:p-6 bg-white rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
                  <div className={`${info.color} p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0`}>
                    <info.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-gray-900 text-base sm:text-lg mb-1 sm:mb-2">
                      {info.title}
                    </h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-700 leading-relaxed text-sm sm:text-base break-words">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-red-600 mr-2" />
                  <h4 className="font-semibold text-gray-900">Find Us Here</h4>
                </div>
                <p className="text-sm text-gray-600 mt-1">Shree Karni Chemicals Factory Location</p>
              </div>
              <div className="relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3528.808225458427!2d73.30646277405782!3d27.81567332070799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393ffac507e8adab%3A0x550c186a859b7790!2sSHREE%20KARNI%20CHEMICALS!5e0!3m2!1sen!2sin!4v1756490640106!5m2!1sen!2sin" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shree Karni Chemicals Location"
                  className="w-full"
                />
                
                {/* Map Overlay with Company Info */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-xs">
                  <h5 className="font-semibold text-gray-900 text-sm">Shree Karni Chemicals</h5>
                  <p className="text-xs text-gray-600 mt-1">25 KM Milestone, Jodhpur Road</p>
                  <p className="text-xs text-gray-600">Bikaner, Rajasthan - 334801</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 sm:p-8 lg:p-12 rounded-2xl shadow-xl">
            {isSubmitted ? (
              <div className="text-center py-8 sm:py-12">
                <div className="bg-green-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Thank you for contacting us. Our team will get back to you within 24 hours 
                  with detailed information about your inquiry.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6 sm:mb-8">Send us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors text-sm sm:text-base"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors text-sm sm:text-base"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Product Interest
                      </label>
                      <select
                        name="productInterest"
                        value={formData.productInterest}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Select a product</option>
                        {productOptions.map((product) => (
                          <option key={product} value={product}>
                            {product}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Please describe your requirements, quantities, and any specific questions..."
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white px-6 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2"></div>
                        <span className="hidden sm:inline">Sending Message...</span>
                        <span className="sm:hidden">Sending...</span>
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;