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
        '/products/a38ada14-55a1-45df-a81c-a404b6d01e14.jpg',
        '/products/aa7d386e-1f59-4abb-bd0b-9d0f0746068f.jpg',
        '/products/115f3623-a37d-4938-bdb6-53b3d6b26f78.jpg'
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
        '/products/64a87ebc-509e-4acd-9f42-6a63a4f728b4.jpg',
        '/products/618634fe-1faa-4081-9fd3-05228cc9adb2.jpg',
        '/products/5eb0b691-75db-444a-8974-034acdff4799.jpg'
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
        '/products/e754a9eb-44ce-4b9e-989d-a0eb9148f714.jpg',
        '/products/e46650cf-e24d-4836-8ef4-dcbc3a57047f.jpg',
        '/products/159b9fe6-50a7-4392-a8e6-e50635426a0f.jpg'
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
        '/products/b268b458-75e3-42d0-a4e2-df83232d8c59.jpg',
        '/products/dafa86c1-1629-4b87-9e40-d87b186da61a.jpg',
        '/products/54459f10-b8d2-4b5a-b5cb-67675cd6cbee.jpg'
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
        '/products/489e1a1a-aa7f-46c4-a73d-2dadd7741b52.jpg',
        '/products/3cb1ac27-c51b-4ade-ac17-ea6cad20fc73.jpg',
        '/products/085bd13e-4d1a-4c0e-aa2d-dc370dae073e.jpg'
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
        '/products/142f0a7b-7168-4190-93ea-3fda8acf0ab5.jpg',
        '/products/0e7f7e2d-2b8d-4203-9846-5200582764e7.jpg',
        '/products/088d24b0-bf5f-4e06-bd5d-17a497100fef.jpg',
        '/products/909457bd-e035-49ce-9531-89a9211c53c3.jpg',
        '/products/89b75b34-4da4-4611-807b-5a4136a89c0d.jpg'
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
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.images[0]}
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