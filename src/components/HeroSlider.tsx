import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Award } from 'lucide-react';

interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
  gradientFrom: string;
  gradientTo: string;
}

// KK Folder Images - Choose one of the options below:

// Updated images with homeslider image replacing the first one
const kkImages = [
  "/homeslider/download (1).jpeg",
  "/kk/22.jpg", 
  "/kk/33.jpg",
  "/kk/ssss.png"
];

// Option 2: GitHub raw URLs (uncomment and update with your GitHub info)
// const kkImages = [
//   "https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/kk/image1.jpg",
//   "https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/kk/image2.jpg",
//   "https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/kk/image3.jpg",
//   "https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/kk/image4.jpg",
//   "https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/kk/image5.jpg",
//   "https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/kk/image6.jpg"
//   // Add more GitHub image URLs as needed
// ];

const slideContent = [
  {
    title: "Shree Karni Chemicals",
    subtitle: "Premium Quality PCC Manufacturer",
    description: "Leading manufacturer of high-purity Precipitated Calcium Carbonate in Rajasthan, serving industries worldwide with excellence.",
    buttonText: "Get a Quote",
    buttonLink: "#contact",
    gradientFrom: "from-red-50",
    gradientTo: "to-green-100"
  },
  {
    title: "ISO 9001:2015 Certified",
    subtitle: "Quality Assurance Excellence", 
    description: "Our state-of-the-art manufacturing facility ensures consistent quality and purity in every batch of PCC we produce.",
    buttonText: "Learn More",
    buttonLink: "#about",
    gradientFrom: "from-green-50",
    gradientTo: "to-red-100"
  },
  {
    title: "Industry Leader",
    subtitle: "Trusted by 500+ Clients Globally",
    description: "With decades of experience, we are among the oldest and largest PCC manufacturers in Rajasthan, serving industries worldwide.",
    buttonText: "View Products",
    buttonLink: "#products",
    gradientFrom: "from-red-50",
    gradientTo: "to-green-100"
  },
  {
    title: "Advanced Manufacturing",
    subtitle: "State-of-the-Art Technology",
    description: "Cutting-edge production facilities ensuring consistent quality and meeting international standards for all PCC grades.",
    buttonText: "Our Facility",
    buttonLink: "#about",
    gradientFrom: "from-green-50",
    gradientTo: "to-red-100"
  }
];

// Create slides by combining images with content
const slides: SlideData[] = kkImages.map((image, index) => ({
  id: index + 1,
  image: image,
  ...slideContent[index % slideContent.length], // Cycle through content if more images than content
}));

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section id="home" className={`relative pt-12 sm:pt-14 md:pt-16 lg:pt-18 xl:pt-20 bg-gradient-to-br ${currentSlideData.gradientFrom} ${currentSlideData.gradientTo} min-h-screen overflow-hidden`}>
      {/* Enhanced Background Pattern for Desktop */}
      <div className="absolute inset-0 opacity-5 lg:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Compact Desktop Floating Elements */}
      <div className="hidden lg:block absolute top-12 right-8 xl:right-12 2xl:right-16 w-20 h-20 xl:w-24 xl:h-24 bg-red-100 rounded-full opacity-15 animate-float"></div>
      <div className="hidden lg:block absolute bottom-16 left-8 xl:left-12 2xl:left-16 w-16 h-16 xl:w-20 xl:h-20 bg-green-100 rounded-full opacity-15 animate-float-delayed"></div>

      <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-2 sm:py-4 lg:py-6 xl:py-8 2xl:py-10">
        <div className="max-w-7xl mx-auto">
          {/* Clean Auto Slider Section - Optimized Position */}
          <div className="relative w-full mb-6 sm:mb-8 lg:mb-10">
            <div className="relative rounded-lg lg:rounded-xl xl:rounded-2xl overflow-hidden shadow-md lg:shadow-xl xl:shadow-2xl w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto bg-gray-50 lg:bg-white border lg:border-gray-200 group cursor-pointer"
                 onClick={() => navigate('/product-gallery')}>
              {/* Simple Image Container */}
              <div className="relative w-full h-[180px] sm:h-[200px] md:h-[220px] lg:h-[400px] xl:h-[480px] 2xl:h-[560px]">
                <img 
                  src={currentSlideData.image}
                  alt={currentSlideData.title}
                  className="w-full h-full object-contain lg:object-cover xl:object-contain transition-all duration-500 group-hover:scale-105"
                  style={{
                    objectPosition: 'center center',
                    imageRendering: 'high-quality',
                  }}
                  loading="eager"
                  decoding="async"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                    <p className="text-gray-900 font-medium text-sm lg:text-base">View Product Gallery</p>
                  </div>
                </div>
              </div>
              
              {/* Simple Progress Indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-300">
                <div 
                  className="h-full bg-red-600 transition-all duration-500 ease-out"
                  style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Content Section Below Slider - Certified Excellence */}
          <div className="text-center space-y-4 lg:space-y-5 xl:space-y-6 mt-8 sm:mt-10 lg:mt-12 xl:mt-16">
            {/* Certified Excellence Badge */}
            <div className="flex justify-center mb-4 lg:mb-6">
              <div className="inline-flex items-center px-4 py-2 lg:px-5 lg:py-2.5 xl:px-6 xl:py-3 bg-red-100 text-red-800 rounded-full text-sm sm:text-base lg:text-base xl:text-lg font-medium shadow-md lg:shadow-lg hover:shadow-xl transition-all duration-300">
                <Award className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 mr-2 lg:mr-3" />
                Certified Excellence
              </div>
            </div>
            
            <div className="space-y-3 sm:space-y-4 lg:space-y-4 xl:space-y-5">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 leading-tight">
                {currentSlideData.title.split(' ').slice(0, 2).join(' ')}
                <span className="block text-green-600 mt-1 lg:mt-2">
                  {currentSlideData.title.split(' ').slice(2).join(' ')}
                </span>
              </h1>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold text-gray-700 leading-snug">
                {currentSlideData.subtitle}
              </h2>
            </div>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl text-gray-700 leading-relaxed max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto">
              {currentSlideData.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-5 xl:gap-6 2xl:gap-8 w-full max-w-lg mx-auto mt-6 lg:mt-8">
              {currentSlideData.buttonText === "Get a Quote" ? (
                <a
                  href="https://wa.me/919414095827?text=Hello! I would like to get a quote for PCC products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-2.5 sm:py-3 lg:py-3.5 xl:py-4 2xl:py-5 rounded-lg lg:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center group text-sm sm:text-base lg:text-base xl:text-lg min-w-[160px] sm:min-w-[180px] lg:min-w-[200px]"
                >
                  {currentSlideData.buttonText}
                  <ChevronRight className="ml-2 lg:ml-3 w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 group-hover:translate-x-1 transition-transform" />
                </a>
              ) : (
                <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-2.5 sm:py-3 lg:py-3.5 xl:py-4 2xl:py-5 rounded-lg lg:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center group text-sm sm:text-base lg:text-base xl:text-lg min-w-[160px] sm:min-w-[180px] lg:min-w-[200px]">
                  {currentSlideData.buttonText}
                  <ChevronRight className="ml-2 lg:ml-3 w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              )}
              <button className="w-full sm:w-auto border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-2.5 sm:py-3 lg:py-3.5 xl:py-4 2xl:py-5 rounded-lg lg:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base lg:text-base xl:text-lg min-w-[160px] sm:min-w-[180px] lg:min-w-[200px]">
                View Brochure
              </button>
            </div>

            {/* Slide Indicators Below Content */}
            <div className="flex justify-center space-x-3 lg:space-x-4 xl:space-x-5 mt-6 lg:mt-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 lg:w-3 lg:h-3 xl:w-4 xl:h-4 rounded-full transition-all duration-300 hover:scale-110 ${
                    index === currentSlide
                      ? 'bg-red-600 w-6 sm:w-8 lg:w-10 xl:w-12 shadow-lg'
                      : 'bg-gray-300 hover:bg-gray-400 hover:shadow-md'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Desktop Slide Counter */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 xl:bottom-10 xl:right-10 2xl:bottom-12 2xl:right-12 bg-white/95 backdrop-blur-md px-3 py-1 sm:px-4 sm:py-2 lg:px-4 lg:py-2 xl:px-5 xl:py-2.5 2xl:px-6 2xl:py-3 rounded-full shadow-lg hover:shadow-xl border border-gray-200 transition-all duration-300">
        <span className="text-xs sm:text-sm lg:text-sm xl:text-base 2xl:text-lg font-semibold text-gray-700">
          {currentSlide + 1} / {slides.length}
        </span>
      </div>
    </section>
  );
};

export default HeroSlider;