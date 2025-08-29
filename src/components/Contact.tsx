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
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-100 to-green-100 text-gray-800 rounded-full text-sm font-medium mb-8 shadow-lg">
            <Mail className="w-5 h-5 mr-2 text-red-600" />
            Get In Touch With Experts
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-green-600">Our Team</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Ready to discuss your PCC requirements? Our technical experts are here to provide 
            <span className="font-semibold text-gray-800"> customized solutions</span> and 
            <span className="font-semibold text-gray-800"> professional guidance</span>.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>24-Hour Response Time</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span>Technical Expert Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Custom Solutions Available</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Enhanced Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Let's Start a <span className="text-red-600">Conversation</span>
              </h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our team of experts is ready to help you find the perfect PCC solution for your specific needs. 
                We provide <span className="font-semibold text-green-600">technical support</span>, 
                <span className="font-semibold text-red-600"> custom formulations</span>, and 
                <span className="font-semibold text-green-600"> reliable supply chain management</span>.
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-800">Expert Technical Guidance</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-800">Custom Grade Development</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-800">Quality Assurance Support</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-800">Reliable Supply Chain</span>
                </div>
              </div>
            </div>

            {/* Enhanced Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="group bg-white p-6 rounded-2xl shadow-lg border hover:shadow-xl hover:border-red-200 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <div className={`${info.color} p-4 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-gray-900 text-lg group-hover:text-red-600 transition-colors">
                      {info.title}
                    </h4>
                  </div>
                  <div className="space-y-2">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-700 leading-relaxed font-medium">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Google Maps */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border">
              <div className="bg-gradient-to-r from-red-50 to-green-50 p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center mb-2">
                      <MapPin className="w-6 h-6 text-red-600 mr-3" />
                      <h4 className="font-bold text-gray-900 text-xl">Visit Our Facility</h4>
                    </div>
                    <p className="text-gray-700 font-medium">Shree Karni Chemicals Manufacturing Plant</p>
                  </div>
                  <div className="hidden sm:block">
                    <div className="bg-white p-3 rounded-lg shadow-md">
                      <div className="text-xs text-gray-600 mb-1">Established</div>
                      <div className="font-bold text-red-600">2005</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3528.808225458427!2d73.30646277405782!3d27.81567332070799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393ffac507e8adab%3A0x550c186a859b7790!2sSHREE%20KARNI%20CHEMICALS!5e0!3m2!1sen!2sin!4v1756490640106!5m2!1sen!2sin" 
                  width="100%" 
                  height="350" 
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shree Karni Chemicals Location"
                  className="w-full"
                />
                
                {/* Enhanced Map Overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl border">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h5 className="font-bold text-gray-900 text-base mb-2">Shree Karni Chemicals</h5>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        25 KM Milestone, Jodhpur Road N.H.-89<br />
                        Post Deshnoke, Bikaner, Rajasthan - 334801
                      </p>
                    </div>
                    <div className="ml-4 text-right">
                      <div className="text-xs text-gray-500 mb-1">Distance from Bikaner</div>
                      <div className="font-bold text-red-600">25 KM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="bg-gradient-to-br from-white to-gray-50 p-8 lg:p-12 rounded-2xl shadow-xl border">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="bg-gradient-to-br from-green-100 to-green-200 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Message Sent Successfully!
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed max-w-md mx-auto mb-6">
                  Thank you for contacting us. Our technical team will get back to you within 
                  <span className="font-semibold text-green-600"> 24 hours</span> with detailed information.
                </p>
                <div className="bg-green-50 p-4 rounded-lg max-w-sm mx-auto">
                  <p className="text-sm text-green-700 font-medium">
                    📧 Confirmation email sent to your inbox
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    Send us a <span className="text-green-600">Message</span>
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Fill out the form below and our technical experts will respond promptly
                  </p>
                </div>
                
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
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 disabled:from-red-400 disabled:to-red-500 text-white px-6 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center justify-center text-lg group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="mr-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </button>

                  {/* Form Footer */}
                  <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-red-50 rounded-lg border">
                    <p className="text-sm text-gray-700 text-center">
                      🔒 Your information is secure and will only be used to respond to your inquiry
                    </p>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-red-600 via-red-700 to-green-600 rounded-2xl p-8 lg:p-12 text-white shadow-2xl">
          <div className="text-center">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Partner with Industry Leaders?
            </h3>
            <p className="text-xl lg:text-2xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of satisfied customers who trust Shree Karni Chemicals for their PCC requirements
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-2">19+</div>
                <div className="text-sm lg:text-base opacity-80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-2">500+</div>
                <div className="text-sm lg:text-base opacity-80">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-2">6</div>
                <div className="text-sm lg:text-base opacity-80">Product Grades</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-2">24h</div>
                <div className="text-sm lg:text-base opacity-80">Response Time</div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919414095827"
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-3" />
                Call Now: +91 9414095827
              </a>
              <a
                href="mailto:karnichem@gmail.com"
                className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-3" />
                Email: karnichem@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;