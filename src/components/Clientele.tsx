import React from 'react';
import { Building2, Users, Award, TrendingUp } from 'lucide-react';

interface Client {
  name: string;
  logo: string;
  alt: string;
}

const clients: Client[] = [
  {
    name: "Hindustan Unilever",
    logo: "/clints/hindustan unilever.png",
    alt: "Hindustan Unilever Limited"
  },
  {
    name: "Jyothy Laboratories", 
    logo: "/clints/jyoti labs.png",
    alt: "Jyothy Laboratories Limited"
  },
  {
    name: "Jai Vardhman Khaniz Pvt. Ltd",
    logo: "/clints/JVK.png", 
    alt: "Jai Vardhman Khaniz Private Limited"
  },
  {
    name: "Shantinath Detergents Pvt. Ltd (SDPL)",
    logo: "/clints/shantinath.png",
    alt: "Shantinath Detergents Private Limited"
  },
  {
    name: "Orient Paper & Industries Limited (OPIL)",
    logo: "/clints/orient.jpg",
    alt: "Orient Paper and Industries Limited"
  }
];

const Clientele: React.FC = () => {
  return (
    <section id="clientele" className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex justify-center mb-4 lg:mb-6">
            <div className="inline-flex items-center px-4 py-2 lg:px-6 lg:py-3 bg-red-100 text-red-800 rounded-full text-sm lg:text-base font-medium shadow-md">
              <Building2 className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
              Our Valued Clients
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 lg:mb-6">
            Trusted <span className="text-red-600">Clientele</span>
          </h2>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Serving industry leaders with premium quality Precipitated Calcium Carbonate solutions
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-red-100 rounded-full mb-3 lg:mb-4">
              <Users className="w-6 h-6 lg:w-8 lg:h-8 text-red-600" />
            </div>
            <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">500+</div>
            <div className="text-sm lg:text-base text-gray-600">Global Clients</div>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-green-100 rounded-full mb-3 lg:mb-4">
              <Award className="w-6 h-6 lg:w-8 lg:h-8 text-green-600" />
            </div>
            <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">ISO</div>
            <div className="text-sm lg:text-base text-gray-600">Certified Quality</div>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-blue-100 rounded-full mb-3 lg:mb-4">
              <TrendingUp className="w-6 h-6 lg:w-8 lg:h-8 text-blue-600" />
            </div>
            <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">25+</div>
            <div className="text-sm lg:text-base text-gray-600">Years Experience</div>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-purple-100 rounded-full mb-3 lg:mb-4">
              <Building2 className="w-6 h-6 lg:w-8 lg:h-8 text-purple-600" />
            </div>
            <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">15+</div>
            <div className="text-sm lg:text-base text-gray-600">Industries Served</div>
          </div>
        </div>

        {/* Client Logos Grid */}
        <div className="bg-white rounded-2xl lg:rounded-3xl shadow-lg lg:shadow-xl p-8 lg:p-12">
          <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 text-center mb-8 lg:mb-12">
            Trusted by Industry Leaders
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 lg:gap-12">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group flex flex-col items-center justify-center p-6 lg:p-8 bg-gray-50 rounded-xl lg:rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-24 h-24 lg:w-32 lg:h-32 xl:w-36 xl:h-36 mb-4 lg:mb-6 flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={client.alt}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-sm lg:text-base font-medium text-gray-700 text-center leading-tight">
                  {client.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 lg:mt-16">
          <div className="bg-gradient-to-r from-red-600 to-green-600 rounded-2xl lg:rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 lg:mb-6">
              Join Our Prestigious Client Network
            </h3>
            <p className="text-lg lg:text-xl opacity-90 mb-6 lg:mb-8 max-w-2xl mx-auto">
              Experience the quality and reliability that industry leaders trust. Get in touch to discuss your PCC requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919414095827?text=Hello! I'm interested in your Precipitated Calcium Carbonate (PCC) products. Could you please provide me with a detailed quote including pricing, specifications, and minimum order quantities? Thank you!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 lg:px-10 py-3 lg:py-4 bg-white text-red-600 font-semibold rounded-xl lg:rounded-2xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Quote on WhatsApp
              </a>
              <button
                onClick={() => window.location.href = '#contact'}
                className="inline-flex items-center justify-center px-8 lg:px-10 py-3 lg:py-4 border-2 border-white text-white font-semibold rounded-xl lg:rounded-2xl hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clientele;
