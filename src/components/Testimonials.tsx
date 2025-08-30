import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Singh',
      position: 'Paper Mill Manager',
      company: 'Premium Papers Ltd',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg',
      rating: 5,
      text: "KarniChem's PCC has significantly improved our paper quality. The consistency and purity of their products are exceptional. We've been working with them for over 5 years and they never disappoint.",
      industry: 'Paper Manufacturing'
    },
    {
      id: 2,
      name: 'Anita Mehta',
      position: 'Paint Industry Executive',
      company: 'ColorTech Paints',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg',
      rating: 5,
      text: "Reliable supply and excellent technical support. KarniChem understands our specific requirements perfectly and delivers exactly what we need for our premium paint formulations.",
      industry: 'Paint & Coatings'
    },
    {
      id: 3,
      name: 'Vikram Kumar',
      position: 'Pharma Quality Head',
      company: 'HealthCare Pharma',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg',
      rating: 5,
      text: "Outstanding quality standards and compliance. Their pharma-grade PCC meets all our stringent requirements and regulatory standards. The documentation and quality certificates are impeccable.",
      industry: 'Pharmaceutical'
    },
    {
      id: 4,
      name: 'Priya Sharma',
      position: 'Production Manager',
      company: 'FlexiPlast Industries',
      image: 'https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg',
      rating: 5,
      text: "The rubber grade PCC from KarniChem has enhanced our product performance significantly. Their technical team provides excellent support and custom solutions for our specific applications.",
      industry: 'Rubber & Plastics'
    },
    {
      id: 5,
      name: 'Suresh Patel',
      position: 'R&D Director',
      company: 'Innovation Chemicals',
      image: 'https://images.pexels.com/photos/3785081/pexels-photo-3785081.jpeg',
      rating: 5,
      text: "KarniChem is our go-to supplier for high-quality PCC. Their product consistency, competitive pricing, and on-time delivery make them an ideal business partner for our growing company.",
      industry: 'Chemical Processing'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Client Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-red-600">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover why industry leaders trust KarniChem for their PCC requirements
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-12 mb-16 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
            <Quote className="w-full h-full" />
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Client Photo */}
            <div className="text-center lg:text-left">
              <div className="relative inline-block">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-32 h-32 rounded-full object-cover shadow-xl mx-auto lg:mx-0"
                />
                <div className="absolute -bottom-2 -right-2 bg-green-500 p-2 rounded-full">
                  <Star className="w-4 h-4 text-white fill-current" />
                </div>
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-center lg:justify-start space-x-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-2xl font-medium text-gray-900 leading-relaxed italic">
                "{current.text}"
              </blockquote>

              <div className="text-center lg:text-left">
                <div className="font-semibold text-xl text-gray-900">{current.name}</div>
                <div className="text-red-600 font-medium">{current.position}</div>
                <div className="text-gray-600">{current.company}</div>
                <div className="inline-flex px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mt-2">
                  {current.industry}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="bg-white hover:bg-gray-50 text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-red-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="bg-white hover:bg-gray-50 text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Other Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.filter((_, index) => index !== currentTestimonial).slice(0, 3).map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-xl border-2 border-gray-100 hover:border-red-200 transition-all duration-300 hover:shadow-lg group">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 italic leading-relaxed">
                "{testimonial.text.substring(0, 120)}..."
              </p>
              
              <div className="mt-4">
                <span className="inline-flex px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                  {testimonial.industry}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-red-600 to-green-600 rounded-2xl p-12 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-red-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-red-100">Client Retention</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-red-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-red-100">Product Purity</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;