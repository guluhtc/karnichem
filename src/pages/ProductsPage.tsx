import React from 'react';
import { Link } from 'react-router-dom';
import { Beaker, Paintbrush, FileText, Pill, Factory, Wrench } from 'lucide-react';

const ProductsPage: React.FC = () => {
  // Enhanced product data with comprehensive image collections
  const products = [
    {
      id: 'dentifrice-pcc',
      icon: Beaker,
      title: 'Dentifrice PCC',
      category: 'Oral Care',
      description: 'Premium oral care grade with controlled particle size and exceptional purity for toothpaste and dental care products.',
      images: [
        '/products/tooth paste precipilate calcium carbonate powder.jpg',
        '/products/pcc sk-1.jpg',
        '/products/pcc sk-11.jpg'
      ],
      features: ['Ultra-fine particles (1-3 μm)', 'High purity (≥99.5%)', 'Controlled abrasiveness', 'FDA approved'],
      purity: '≥ 99.5%',
      particleSize: '1-3 μm',
      applications: ['Toothpaste Manufacturing', 'Dental Care Products', 'Oral Hygiene Formulations']
    },
    {
      id: 'detergent-pcc',
      icon: Factory,
      title: 'Detergent Grade PCC',
      category: 'Cleaning Industry',
      description: 'Superior whiteness grade for cleaning applications with excellent dispersibility and cleaning performance.',
      images: [
        '/products/detergent pcc powder.jpg',
        '/products/pcc sk-22.jpg',
        '/products/pcc sk-33.jpg'
      ],
      features: ['Superior whiteness (≥95%)', 'Excellent dispersibility', 'Chemical stability', 'Cost-effective'],
      purity: '≥ 98.5%',
      particleSize: '2-5 μm',
      applications: ['Detergent Manufacturing', 'Soap Production', 'Cleaning Products']
    },
    {
      id: 'food-pharma-pcc',
      icon: Pill,
      title: 'Food & Pharmaceutical Grade',
      category: 'Food & Pharmaceutical',
      description: 'USP/EP grade for food and pharmaceutical applications with highest purity standards and safety compliance.',
      images: [
        '/products/food precipitate calcium carbonate powder.jpg',
        '/products/pharma precipilate calcium carbonate powder.jpg',
        '/products/pcc s-11.jpg'
      ],
      features: ['USP/EP compliance', 'Heavy metals < 10 ppm', 'GMP certified', 'Microbiologically tested'],
      purity: '≥ 99.8%',
      particleSize: '0.5-2 μm',
      applications: ['Food Additives', 'Pharmaceutical Tablets', 'Nutritional Supplements']
    },
    {
      id: 'paper-coating-pcc',
      icon: FileText,
      title: 'Paper & Coating Grade',
      category: 'Paper & Coatings',
      description: 'Enhanced brightness for paper and coating applications with excellent printability and opacity.',
      images: [
        '/products/paper.jpg',
        '/products/ink pcc powder.jpg',
        '/products/prcipitated calcium carbonate s-3.jpg'
      ],
      features: ['High brightness (≥94%)', 'Excellent printability', 'Superior opacity', 'Improved surface quality'],
      purity: '≥ 98.0%',
      particleSize: '1-4 μm',
      applications: ['Paper Manufacturing', 'Coating Applications', 'Printing Industry']
    },
    {
      id: 'paint-grade-pcc',
      icon: Paintbrush,
      title: 'Paint Grade PCC',
      category: 'Paint Industry',
      description: 'Optimal particle distribution for paint applications with excellent hiding power and weather resistance.',
      images: [
        '/products/paint.jpg',
        '/products/pcc sk-4.jpg',
        '/products/precipitated calcium carbonate sk-2.jpg'
      ],
      features: ['Excellent opacity', 'Weather resistance', 'Cost-effective', 'Color stability'],
      purity: '≥ 98.5%',
      particleSize: '2-6 μm',
      applications: ['Paint Manufacturing', 'Coating Systems', 'Pigment Applications']
    },
    {
      id: 'rubber-grade-pcc',
      icon: Wrench,
      title: 'Rubber Grade PCC',
      category: 'Rubber & Plastics',
      description: 'High reinforcement grade for rubber applications with improved mechanical properties and processing.',
      images: [
        '/products/rubber.jpg',
        '/products/pvc pipe.jpg',
        '/products/pcc sk-11 (2).jpg'
      ],
      features: ['High reinforcement', 'Improved tensile strength', 'Better processing', 'Reduced compound cost'],
      purity: '≥ 98.0%',
      particleSize: '3-8 μm',
      applications: ['Rubber Products', 'Plastic Manufacturing', 'Automotive Parts', 'Industrial Components']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Product Range</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of precipitated calcium carbonate products, 
            each engineered for specific industrial applications with uncompromising quality standards.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer active:scale-95 focus:outline-none focus:ring-4 focus:ring-red-500/20 focus:shadow-2xl"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  style={{ objectPosition: 'center center' }}
                  loading="lazy"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Click Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                    <p className="text-gray-900 font-medium text-sm">View Product Details</p>
                  </div>
                </div>
                
                {/* Floating Icon */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
                  <product.icon className={`w-6 h-6 ${index % 2 === 0 ? 'text-red-600' : 'text-green-600'}`} />
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-900">
                  {product.category}
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full ${index % 2 === 0 ? 'bg-red-600' : 'bg-green-600'}`}></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Button */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <span className={`text-sm font-medium ${index % 2 === 0 ? 'text-red-600' : 'text-green-600'} group-hover:underline`}>
                    Learn More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Need Custom Specifications?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Our technical team can develop customized PCC grades to meet your specific application requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Contact Technical Team
            </Link>
            <Link
              to="/product-gallery"
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              View Product Gallery
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;