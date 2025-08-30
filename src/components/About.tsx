import React, { useState, useEffect } from 'react';
import { Users, Award, Factory, TrendingUp, Shield, Globe, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const About: React.FC = () => {
  // Factory Slider State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const factoryImages = [
    {
      src: "/factory/SDS_7865.JPG",
      alt: "Shree Karni Chemicals Manufacturing facility",
      title: "Manufacturing Excellence",
      description: "State-of-the-art production facilities with modern equipment"
    },
    {
      src: "/factory/DJI_0014 (2).jpg",
      alt: "Aerial view of Shree Karni Chemicals facility",
      title: "Aerial View",
      description: "Comprehensive view of our manufacturing complex"
    },
    {
      src: "/factory/image from sky-1.jpg",
      alt: "Sky view of factory complex",
      title: "Factory Complex",
      description: "Complete overview of our industrial infrastructure"
    },
    {
      src: "/factory/SDS_7839.JPG",
      alt: "Factory production area",
      title: "Production Area",
      description: "Advanced production lines for quality PCC manufacturing"
    },
    {
      src: "/factory/DJI_0006.JPG",
      alt: "Factory infrastructure",
      title: "Infrastructure",
      description: "Modern infrastructure supporting efficient operations"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % factoryImages.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, factoryImages.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 3000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % factoryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + factoryImages.length) % factoryImages.length);
  };

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
      title: '19+ Years',
      subtitle: 'Industry Excellence',
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

        {/* Enhanced Content Layout */}
        <div className="space-y-24">
          {/* Commitment to Excellence Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-4">
                <Award className="w-4 h-4 mr-2" />
                Excellence
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Commitment to <span className="text-red-600">Excellence</span>
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-green-600 rounded-full"></div>
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
            
            {/* Factory Image Slider */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                {/* Main Slider Image */}
                <div className="relative h-[400px] lg:h-[500px]">
                  <img 
                    src={factoryImages[currentSlide].src}
                    alt={factoryImages[currentSlide].alt}
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  
                  {/* Image Info Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-xl p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="font-bold text-gray-900 text-lg mb-1">
                      {factoryImages[currentSlide].title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {factoryImages[currentSlide].description}
                    </p>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Play/Pause Button */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {factoryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-white scale-125' 
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl z-10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">19+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Journey Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2 space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                <TrendingUp className="w-4 h-4 mr-2" />
                Our Story
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Our <span className="text-green-600">Journey</span>
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-green-600 to-red-600 rounded-full"></div>
              
              {/* Timeline Style Content */}
              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-green-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-green-600 rounded-full"></div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Foundation & Legacy</h4>
                    <p className="text-gray-700">
                      Shree Karni Chemicals started small with Padam Jain carrying forward the vision and dreams of his father Jaichandlal Jain. The company now stands as the oldest manufacturer of precipitated calcium carbonate in Rajasthan.
                    </p>
                  </div>
                </div>
                
                <div className="relative pl-8 border-l-2 border-red-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-red-600 rounded-full"></div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Growth & Recognition</h4>
                    <p className="text-gray-700">
                      Since inception, we have steered many challenges and flagged innumerable milestones. We have become the #1 choice of top brands for chemical carbonate in India with global footprints.
                    </p>
                  </div>
                </div>
                
                <div className="relative pl-8 border-l-2 border-green-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-green-600 rounded-full"></div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Experience & Innovation</h4>
                    <p className="text-gray-700">
                      Founded in 2005 with Padam Jain's industry experience since 1997 and Jaichandlal Jain's 50+ years of expertise. Small steps with bigger dreams achieved higher scalability and new quality standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Journey Highlights */}
            <div className="lg:order-1">
              <div className="bg-gradient-to-br from-green-50 to-red-50 rounded-2xl p-8 lg:p-12 shadow-xl border">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center px-4 py-2 bg-white rounded-full text-sm font-medium mb-4 shadow-md">
                    <Factory className="w-4 h-4 mr-2 text-green-600" />
                    Our Legacy
                  </div>
                  <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    Journey of <span className="text-green-600">Excellence</span>
                  </h4>
                </div>

                {/* Key Milestones */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md">
                    <div className="bg-red-100 p-3 rounded-lg flex-shrink-0">
                      <div className="text-red-600 font-bold text-lg">1997</div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">Industry Entry</h5>
                      <p className="text-gray-600 text-sm">Padam Jain began his journey in the PCC industry</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md">
                    <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                      <div className="text-green-600 font-bold text-lg">2005</div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">Company Founded</h5>
                      <p className="text-gray-600 text-sm">Shree Karni Chemicals was officially established</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md">
                    <div className="bg-red-100 p-3 rounded-lg flex-shrink-0">
                      <div className="text-red-600 font-bold text-lg">2025</div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">Market Leader</h5>
                      <p className="text-gray-600 text-sm">#1 PCC manufacturer in Rajasthan with global reach</p>
                    </div>
                  </div>
                </div>

                {/* Achievement Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">50+</div>
                    <div className="text-xs text-gray-600">Years Combined Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">500+</div>
                    <div className="text-xs text-gray-600">Global Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">#1</div>
                    <div className="text-xs text-gray-600">in Rajasthan</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Features Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-100 to-green-100 text-gray-800 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Our Strengths
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-red-600">Shree Karni</span> <span className="text-green-600">Chemicals</span>
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-green-600 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${
                  index % 2 === 0 ? 'bg-red-100' : 'bg-green-100'
                } rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 ${
                    index % 2 === 0 ? 'text-red-600' : 'text-green-600'
                  }`} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Achievements Grid */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-red-100 text-gray-800 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              Our Achievements
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Numbers That <span className="text-green-600">Speak</span> <span className="text-red-600">Volumes</span>
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-red-600 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${achievement.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-3xl font-bold text-gray-900 mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 font-medium">
                    {achievement.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Mission Statement */}
        <div className="mt-24">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-50 via-white to-green-50 p-12 lg:p-16">
            {/* Dynamic Background Factory Image */}
            <div className="absolute inset-0 opacity-10">
              <img 
                src={factoryImages[currentSlide].src}
                alt="Factory background"
                className="w-full h-full object-cover transition-all duration-1000"
              />
            </div>
            
            {/* Background Pattern Overlay */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>
            
            <div className="relative text-center">
              <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-md text-gray-800 rounded-full text-sm font-medium mb-8 shadow-lg">
                <Globe className="w-5 h-5 mr-3" />
                Our Mission & Vision
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Our <span className="text-red-600">Mission</span>
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-green-600 rounded-full mx-auto mb-8"></div>
              <blockquote className="text-xl lg:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed italic font-medium">
                "To be the global leader in PCC manufacturing by delivering innovative, 
                high-quality products that exceed customer expectations while maintaining 
                sustainable and environmentally responsible practices."
              </blockquote>
              
              {/* Mission Points */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-white/60 backdrop-blur-md rounded-xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-red-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Quality Excellence</h4>
                  <p className="text-gray-700 text-sm">Delivering products that exceed industry standards</p>
                </div>
                
                <div className="bg-white/60 backdrop-blur-md rounded-xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Global Reach</h4>
                  <p className="text-gray-700 text-sm">Serving customers worldwide with reliability</p>
                </div>
                
                <div className="bg-white/60 backdrop-blur-md rounded-xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-red-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Sustainability</h4>
                  <p className="text-gray-700 text-sm">Environmentally responsible manufacturing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;