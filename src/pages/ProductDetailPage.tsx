import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, Download, Phone, Mail, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductDetail {
  id: string;
  title: string;
  category: string;
  description: string;
  images: string[];
  features: string[];
  applications: string[];
  specifications: {
    purity: string;
    particleSize: string;
    whiteness: string;
    pH: string;
    moisture: string;
  };
  technicalData: {
    chemicalFormula: string;
    molecularWeight: string;
    density: string;
    solubility: string;
  };
}

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const products: Record<string, ProductDetail> = {
    'dentifrice-pcc': {
      id: 'dentifrice-pcc',
      title: 'Dentifrice PCC Grade',
      category: 'Oral Care',
      description: 'Premium quality precipitated calcium carbonate specifically designed for oral care applications. Our dentifrice grade PCC offers controlled particle size distribution and exceptional purity, making it ideal for toothpaste and dental care product formulations.',
      images: [
        '/products/a38ada14-55a1-45df-a81c-a404b6d01e14.jpg',
        '/products/aa7d386e-1f59-4abb-bd0b-9d0f0746068f.jpg',
        '/products/115f3623-a37d-4938-bdb6-53b3d6b26f78.jpg'
      ],
      features: [
        'Ultra-fine particle size for smooth texture',
        'High purity (99%+) for safety standards',
        'Controlled abrasiveness for enamel protection',
        'Excellent whitening properties',
        'FDA approved for oral care applications',
        'Consistent quality and performance'
      ],
      applications: [
        'Toothpaste manufacturing',
        'Dental care products',
        'Oral hygiene formulations',
        'Whitening products',
        'Sensitive teeth formulations'
      ],
      specifications: {
        purity: '≥99.0%',
        particleSize: '0.5-2.0 μm',
        whiteness: '≥96%',
        pH: '9.0-10.5',
        moisture: '≤0.5%'
      },
      technicalData: {
        chemicalFormula: 'CaCO₃',
        molecularWeight: '100.09 g/mol',
        density: '2.7 g/cm³',
        solubility: 'Insoluble in water'
      }
    },
    'detergent-pcc': {
      id: 'detergent-pcc',
      title: 'Detergent Grade PCC',
      category: 'Cleaning Products',
      description: 'High-performance precipitated calcium carbonate engineered for detergent and cleaning product applications. Our detergent grade PCC provides excellent whiteness and cleaning efficiency while maintaining product stability.',
      images: [
        '/products/64a87ebc-509e-4acd-9f42-6a63a4f728b4.jpg',
        '/products/618634fe-1faa-4081-9fd3-05228cc9adb2.jpg',
        '/products/5eb0b691-75db-444a-8974-034acdff4799.jpg'
      ],
      features: [
        'Superior whiteness for bright formulations',
        'Excellent dispersibility in liquid detergents',
        'Enhanced cleaning performance',
        'Chemical stability in alkaline conditions',
        'Cost-effective filler and extender',
        'Improved product texture and feel'
      ],
      applications: [
        'Liquid detergents',
        'Powder detergents',
        'Fabric softeners',
        'Household cleaners',
        'Industrial cleaning products'
      ],
      specifications: {
        purity: '≥98.5%',
        particleSize: '1.0-3.0 μm',
        whiteness: '≥95%',
        pH: '9.5-10.5',
        moisture: '≤0.8%'
      },
      technicalData: {
        chemicalFormula: 'CaCO₃',
        molecularWeight: '100.09 g/mol',
        density: '2.7 g/cm³',
        solubility: 'Insoluble in water'
      }
    },
    'food-pharma-pcc': {
      id: 'food-pharma-pcc',
      title: 'Food & Pharmaceutical Grade PCC',
      category: 'Food & Pharma',
      description: 'USP/EP grade precipitated calcium carbonate meeting the highest purity standards for food and pharmaceutical applications. Manufactured under strict GMP conditions with complete traceability.',
      images: [
        '/products/e754a9eb-44ce-4b9e-989d-a0eb9148f714.jpg',
        '/products/e46650cf-e24d-4836-8ef4-dcbc3a57047f.jpg',
        '/products/159b9fe6-50a7-4392-a8e6-e50635426a0f.jpg'
      ],
      features: [
        'USP/EP/JP pharmacopoeia compliance',
        'Heavy metals < 10 ppm',
        'Arsenic < 3 ppm',
        'Lead < 2 ppm',
        'GMP certified manufacturing',
        'Complete batch documentation'
      ],
      applications: [
        'Pharmaceutical tablets',
        'Food supplements',
        'Antacid formulations',
        'Calcium supplements',
        'Food additive (E170)'
      ],
      specifications: {
        purity: '≥99.5%',
        particleSize: '0.8-2.5 μm',
        whiteness: '≥97%',
        pH: '9.0-10.0',
        moisture: '≤0.3%'
      },
      technicalData: {
        chemicalFormula: 'CaCO₃',
        molecularWeight: '100.09 g/mol',
        density: '2.7 g/cm³',
        solubility: 'Insoluble in water'
      }
    },
    'paper-coating-pcc': {
      id: 'paper-coating-pcc',
      title: 'Paper & Coating Grade PCC',
      category: 'Paper & Coatings',
      description: 'Specially engineered precipitated calcium carbonate for paper and coating applications. Provides excellent opacity, brightness, and printability while reducing production costs.',
      images: [
        '/products/b268b458-75e3-42d0-a4e2-df83232d8c59.jpg',
        '/products/dafa86c1-1629-4b87-9e40-d87b186da61a.jpg',
        '/products/54459f10-b8d2-4b5a-b5cb-67675cd6cbee.jpg'
      ],
      features: [
        'High brightness and opacity',
        'Excellent printability',
        'Superior ink absorption',
        'Controlled particle size distribution',
        'Enhanced paper smoothness',
        'Cost-effective filler'
      ],
      applications: [
        'Coated paper manufacturing',
        'Uncoated paper production',
        'Paint and coating formulations',
        'Printing paper',
        'Specialty papers'
      ],
      specifications: {
        purity: '≥98.0%',
        particleSize: '0.7-2.8 μm',
        whiteness: '≥94%',
        pH: '8.5-9.5',
        moisture: '≤1.0%'
      },
      technicalData: {
        chemicalFormula: 'CaCO₃',
        molecularWeight: '100.09 g/mol',
        density: '2.7 g/cm³',
        solubility: 'Insoluble in water'
      }
    },
    'paint-grade-pcc': {
      id: 'paint-grade-pcc',
      title: 'Paint Grade PCC',
      category: 'Paints & Coatings',
      description: 'Premium precipitated calcium carbonate for paint and coating applications. Offers excellent opacity, durability, and weather resistance while maintaining cost efficiency.',
      images: [
        '/products/489e1a1a-aa7f-46c4-a73d-2dadd7741b52.jpg',
        '/products/3cb1ac27-c51b-4ade-ac17-ea6cad20fc73.jpg',
        '/products/085bd13e-4d1a-4c0e-aa2d-dc370dae073e.jpg'
      ],
      features: [
        'Excellent opacity and hiding power',
        'Superior weather resistance',
        'Enhanced durability',
        'Improved paint flow properties',
        'Reduced TiO₂ requirements',
        'Cost-effective extender pigment'
      ],
      applications: [
        'Architectural paints',
        'Industrial coatings',
        'Automotive paints',
        'Marine coatings',
        'Decorative paints'
      ],
      specifications: {
        purity: '≥97.5%',
        particleSize: '1.0-4.0 μm',
        whiteness: '≥93%',
        pH: '8.0-9.5',
        moisture: '≤1.2%'
      },
      technicalData: {
        chemicalFormula: 'CaCO₃',
        molecularWeight: '100.09 g/mol',
        density: '2.7 g/cm³',
        solubility: 'Insoluble in water'
      }
    },
    'rubber-grade-pcc': {
      id: 'rubber-grade-pcc',
      title: 'Rubber Grade PCC',
      category: 'Rubber Industry',
      description: 'High-performance precipitated calcium carbonate for rubber applications. Provides excellent reinforcement properties and improves mechanical strength of rubber products.',
      images: [
        '/products/142f0a7b-7168-4190-93ea-3fda8acf0ab5.jpg',
        '/products/0e7f7e2d-2b8d-4203-9846-5200582764e7.jpg',
        '/products/088d24b0-bf5f-4e06-bd5d-17a497100fef.jpg',
        '/products/909457bd-e035-49ce-9531-89a9211c53c3.jpg',
        '/products/89b75b34-4da4-4611-807b-5a4136a89c0d.jpg'
      ],
      features: [
        'High reinforcement properties',
        'Improved tensile strength',
        'Enhanced tear resistance',
        'Better processing characteristics',
        'Reduced compound cost',
        'Consistent quality'
      ],
      applications: [
        'Tire manufacturing',
        'Rubber compounds',
        'Industrial rubber products',
        'Automotive rubber parts',
        'Consumer rubber goods'
      ],
      specifications: {
        purity: '≥97.0%',
        particleSize: '0.8-3.5 μm',
        whiteness: '≥92%',
        pH: '8.5-9.8',
        moisture: '≤1.5%'
      },
      technicalData: {
        chemicalFormula: 'CaCO₃',
        molecularWeight: '100.09 g/mol',
        density: '2.7 g/cm³',
        solubility: 'Insoluble in water'
      }
    }
  };

  const product = productId ? products[productId] : null;

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <Link to="/products" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            View All Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-red-600 transition-colors">Products</Link>
          <span>/</span>
          <span className="text-gray-900">{product.title}</span>
        </div>

        {/* Product Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Enhanced Product Image Gallery */}
          <div className="space-y-4">
            {/* Main Product Image */}
            <div className="relative group">
              <img
                src={product.images[currentImageIndex]}
                alt={`${product.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-xl transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4 bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                {product.category}
              </div>

              {/* Image Counter */}
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                {currentImageIndex + 1} / {product.images.length}
              </div>

              {/* Navigation Arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={() => setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setCurrentImageIndex((prev) => (prev + 1) % product.images.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Image Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex space-x-3 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'border-red-500 shadow-lg scale-105' 
                        : 'border-gray-200 hover:border-red-300 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.title} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{product.title}</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">{product.description}</p>
            
            {/* Key Features */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/919414095827?text=Hello! I would like to get a quote for this PCC product."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Request Quote
              </a>
              <button className="border-2 border-gray-300 hover:border-red-600 text-gray-700 hover:text-red-600 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                Download Datasheet
              </button>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Complete Features */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">All Features</h3>
            <div className="space-y-4">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Applications */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Applications</h3>
            <div className="space-y-4">
              {product.applications.map((application, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{application}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Contact */}
          <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Need Assistance?</h3>
            <p className="mb-6 opacity-90">Our technical team is ready to help you with product selection and specifications.</p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <span>+91 9414095827</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <span>karnichem@gmail.com</span>
              </div>
            </div>
            <Link
              to="/contact"
              className="block w-full bg-white text-red-600 hover:bg-gray-100 py-3 rounded-lg font-semibold transition-colors text-center mt-6"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Specifications */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Specifications</h3>
            <div className="space-y-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                  <span className="text-gray-900 font-semibold">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Data */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Data</h3>
            <div className="space-y-4">
              {Object.entries(product.technicalData).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                  <span className="text-gray-900 font-semibold">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Related Products</h3>
            <Link to="/products" className="text-red-600 hover:text-red-700 font-medium">
              View All Products →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(products)
              .filter(p => p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/products/${relatedProduct.id}`}
                  className="group block"
                >
                  <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-4">
                      <div className="text-xs text-red-600 font-medium mb-1">{relatedProduct.category}</div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                        {relatedProduct.title}
                      </h4>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;