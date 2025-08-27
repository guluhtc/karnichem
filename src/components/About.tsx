import React from 'react';
import { Users, Award, Factory, TrendingUp, Shield, Globe } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    {
      icon: Users,
      title: '500+ Clients',
      subtitle: 'Served Globally',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Award,
      title: 'ISO 9001:2015',
      subtitle: 'Certified Quality',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Factory,
      title: '25+ Years',
      subtitle: 'Industry Experience',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: TrendingUp,
      title: '99.9%',
      subtitle: 'Purity Standards',
      color: 'bg-green-100 text-green-600'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes ensure every batch meets international standards.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving customers across multiple continents with reliable supply chain management.'
    },
    {
      icon: Factory,
      title: 'Modern Facilities',
      description: 'State-of-the-art manufacturing infrastructure with latest technology and automation.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            Industry Leader
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-green-600">Shree Karni Chemicals</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pioneering excellence in Precipitated Calcium Carbonate manufacturing since decades, 
            we are among the most trusted PCC manufacturers in Rajasthan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Commitment to Excellence
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Shree Karni Chemicals stands as a beacon of quality and innovation in the PCC manufacturing 
                industry. Our journey began with a simple mission: to provide the highest quality 
                Precipitated Calcium Carbonate to industries worldwide.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With our state-of-the-art manufacturing facility and unwavering commitment to quality, 
                we have established ourselves as a reliable partner for businesses across various sectors 
                including paper, paints, rubber, plastics, pharmaceuticals, and food industries.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <feature.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg" 
                alt="Manufacturing facility" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">25+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center group">
              <div className={`inline-flex items-center justify-center w-16 h-16 ${achievement.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <achievement.icon className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">
                {achievement.title}
              </h4>
              <p className="text-gray-600 font-medium">
                {achievement.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-red-50 to-green-50 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              "To be the global leader in PCC manufacturing by delivering innovative, 
              high-quality products that exceed customer expectations while maintaining 
              sustainable and environmentally responsible practices."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;