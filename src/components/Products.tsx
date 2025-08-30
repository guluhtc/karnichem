import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Factory, ChevronRight, Beaker, Paintbrush, FileText, Pill } from 'lucide-react';

const Products: React.FC = () => {
  const navigate = useNavigate();
  
  // Enhanced product data with all available images
  const products = [
    {
      icon: Beaker,
      title: 'Dentifrice PCC',
      description: 'Oral care grade with controlled particle size and high purity for toothpaste and dental care products.',
      features: ['Controlled Particle Size', 'High Purity', 'FDA Approved', 'Excellent Abrasion'],
      color: 'bg-red-100 text-red-600',
      borderColor: 'border-red-200 hover:border-red-300',
      images: [
        '/products/tooth paste precipilate calcium carbonate powder.jpg',
        '/products/pcc sk-1.jpg',
        '/products/pcc sk-11.jpg'
      ],
      category: 'Oral Care',
      purity: '≥ 99.5%',
      applications: ['Toothpaste', 'Dental Care', 'Oral Hygiene']
    },
    {
      icon: Factory,
      title: 'Detergent PCC',
      description: 'High whiteness grade that improves cleaning performance and acts as an excellent filler.',
      features: ['High Whiteness', 'Superior Cleaning', 'Cost Effective', 'Eco-Friendly'],
      color: 'bg-green-100 text-green-600',
      borderColor: 'border-green-200 hover:border-green-300',
      images: [
        '/products/detergent pcc powder.jpg',
        '/products/pcc sk-22.jpg',
        '/products/pcc sk-33.jpg'
      ],
      category: 'Cleaning Industry',
      purity: '≥ 98.5%',
      applications: ['Detergents', 'Soaps', 'Cleaning Products']
    },
    {
      icon: Pill,
      title: 'Food/Pharma PCC',
      description: 'Food additive and pharmaceutical excipient grade with strict quality controls.',
      features: ['USP Grade', 'Food Safe', 'GMP Certified', 'Heavy Metal Free'],
      color: 'bg-red-100 text-red-600',
      borderColor: 'border-red-200 hover:border-red-300',
      images: [
        '/products/food precipitate calcium carbonate powder.jpg',
        '/products/pharma precipilate calcium carbonate powder.jpg',
        '/products/pcc s-11.jpg'
      ],
      category: 'Food & Pharmaceutical',
      purity: '≥ 99.8%',
      applications: ['Food Additives', 'Pharmaceuticals', 'Supplements']
    },
    {
      icon: FileText,
      title: 'Paper/Coating PCC',
      description: 'Enhances brightness and opacity for paper manufacturing and paint coating applications.',
      features: ['High Brightness', 'Excellent Opacity', 'Improved Printability', 'Cost Reduction'],
      color: 'bg-green-100 text-green-600',
      borderColor: 'border-green-200 hover:border-green-300',
      images: [
        '/products/paper.jpg',
        '/products/ink pcc powder.jpg',
        '/products/prcipitated calcium carbonate s-3.jpg'
      ],
      category: 'Paper & Coatings',
      purity: '≥ 98.0%',
      applications: ['Paper Manufacturing', 'Coatings', 'Printing']
    },
    {
      icon: Paintbrush,
      title: 'Paint Grade PCC',
      description: 'Specially designed for paint and coating applications with optimal particle distribution.',
      features: ['Uniform Particles', 'Weather Resistant', 'Enhanced Durability', 'Color Stability'],
      color: 'bg-red-100 text-red-600',
      borderColor: 'border-red-200 hover:border-red-300',
      images: [
        '/products/paint.jpg',
        '/products/pcc sk-4.jpg',
        '/products/precipitated calcium carbonate sk-2.jpg'
      ],
      category: 'Paint Industry',
      purity: '≥ 98.5%',
      applications: ['Paints', 'Coatings', 'Pigments']
    },
    {
      icon: Factory,
      title: 'Rubber Grade PCC',
      description: 'High-performance grade for rubber and plastic applications with excellent reinforcement.',
      features: ['High Reinforcement', 'Improved Tensile', 'Weather Stability', 'Processing Aid'],
      color: 'bg-green-100 text-green-600',
      borderColor: 'border-green-200 hover:border-green-300',
      images: [
        '/products/rubber.jpg',
        '/products/pvc pipe.jpg',
        '/products/pcc sk-11 (2).jpg'
      ],
      category: 'Rubber & Plastics',
      purity: '≥ 98.0%',
      applications: ['Rubber Products', 'Plastics', 'Automotive Parts']
    }
  ];

  const specifications = [
    { property: 'Purity (CaCO₃)', value: '≥ 98.5%' },
    { property: 'Moisture Content', value: '≤ 0.5%' },
    { property: 'Heavy Metals', value: '≤ 20 ppm' },
    { property: 'Iron (Fe)', value: '≤ 150 ppm' },
    { property: 'Manganese (Mn)', value: '≤ 50 ppm' },
    { property: 'pH (10% slurry)', value: '8.5 - 10.5' }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
            <Factory className="w-4 h-4 mr-2" />
            Premium Quality Products
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-red-600">Product Range</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            High-quality Precipitated Calcium Carbonate solutions tailored for diverse industrial applications
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {products.map((product, index) => (
            <div key={index} className={`bg-white rounded-xl sm:rounded-2xl border-2 ${product.borderColor} transition-all duration-300 hover:shadow-xl hover:scale-105 group overflow-hidden`}>
              {/* Product Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-100">
                <img 
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: 'center center' }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                
                {/* Floating Icon */}
                <div className={`absolute top-4 right-4 ${product.color} w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <product.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                
                {/* Product Category Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    {product.category}
                  </span>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  {product.title}
                </h3>
                
                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {product.description}
                </p>
                
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-xs sm:text-sm">
                      <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mr-2 sm:mr-3 flex-shrink-0 ${
                        index % 2 === 0 ? 'bg-red-500' : 'bg-green-500'
                      }`}></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center text-sm sm:text-base ${
                  index % 2 === 0 
                    ? 'bg-red-50 hover:bg-red-100 text-red-700 group-hover:bg-red-600 group-hover:text-white' 
                    : 'bg-green-50 hover:bg-green-100 text-green-700 group-hover:bg-green-600 group-hover:text-white'
                }`}>
                  Learn More
                  <ChevronRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Specifications */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Technical Specifications
              </h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our PCC products meet stringent international quality standards with 
                consistent specifications maintained across all grades.
              </p>
              
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                    <span className="text-gray-700 font-medium">{spec.property}</span>
                    <span className="text-gray-900 font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/products/pcc sk-11 (2).jpg"
                alt="Quality testing laboratory"
                className="rounded-xl shadow-lg w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900">Quality Testing</h4>
                <p className="text-sm text-gray-600">Advanced laboratory facilities</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button 
            onClick={() => navigate('/product-gallery')}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
          >
            View Product Catalog
            <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;