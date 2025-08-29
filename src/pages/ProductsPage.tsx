import React from 'react';
import { Link } from 'react-router-dom';
import { Beaker, Paintbrush, FileText, Pill, Factory, Wrench } from 'lucide-react';

const ProductsPage: React.FC = () => {
  const products = [
    {
      id: 'dentifrice-pcc',
      icon: Beaker,
      title: 'Dentifrice PCC',
      category: 'Oral Care',
      description: 'Oral care grade with controlled particle size and high purity for toothpaste and dental care products.',
      image: '/products/a38ada14-55a1-45df-a81c-a404b6d01e14.jpg',
      features: ['Ultra-fine particles', 'High purity', 'Controlled abrasiveness']
    },
    {
      id: 'detergent-pcc',
      icon: Factory,
      title: 'Detergent Grade PCC',
      category: 'Cleaning',
      description: 'Superior whiteness grade for cleaning applications with excellent dispersibility.',
      image: '/products/64a87ebc-509e-4acd-9f42-6a63a4f728b4.jpg',
      features: ['Superior whiteness', 'Excellent dispersibility', 'Chemical stability']
    },
    {
      id: 'food-pharma-pcc',
      icon: Pill,
      title: 'Food & Pharmaceutical Grade',
      category: 'Food & Pharma',
      description: 'USP grade for food and pharmaceutical applications with highest purity standards.',
      image: '/products/e754a9eb-44ce-4b9e-989d-a0eb9148f714.jpg',
      features: ['USP/EP compliance', 'Heavy metals < 10 ppm', 'GMP certified']
    },
    {
      id: 'paper-coating-pcc',
      icon: FileText,
      title: 'Paper & Coating Grade',
      category: 'Paper & Coatings',
      description: 'Enhanced brightness for paper and coating applications with excellent printability.',
      image: '/products/b268b458-75e3-42d0-a4e2-df83232d8c59.jpg',
      features: ['High brightness', 'Excellent printability', 'Superior opacity']
    },
    {
      id: 'paint-grade-pcc',
      icon: Paintbrush,
      title: 'Paint Grade PCC',
      category: 'Paints',
      description: 'Optimal particle distribution for paint applications with excellent hiding power.',
      image: '/products/489e1a1a-aa7f-46c4-a73d-2dadd7741b52.jpg',
      features: ['Excellent opacity', 'Weather resistance', 'Cost-effective']
    },
    {
      id: 'rubber-grade-pcc',
      icon: Wrench,
      title: 'Rubber Grade PCC',
      category: 'Rubber Industry',
      description: 'High reinforcement grade for rubber applications with improved mechanical properties.',
      image: '/products/142f0a7b-7168-4190-93ea-3fda8acf0ab5.jpg',
      features: ['High reinforcement', 'Improved tensile strength', 'Better processing']
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
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
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