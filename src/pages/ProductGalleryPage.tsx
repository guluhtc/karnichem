import React, { useState } from 'react';
import { X, Download, ZoomIn, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductGalleryPage: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Comprehensive product images from the public/products folder organized by category
  const productImages = [
    // Dentifrice PCC Category
    { 
      src: '/products/tooth paste precipilate calcium carbonate powder.jpg', 
      title: 'Dentifrice PCC - Premium Grade',
      description: 'Ultra-fine particles for premium oral care applications',
      category: 'Oral Care',
      purity: '≥ 99.5%'
    },
    { 
      src: '/products/pcc sk-1.jpg', 
      title: 'Dentifrice PCC - Standard Grade',
      description: 'High-quality grade for standard toothpaste formulations',
      category: 'Oral Care',
      purity: '≥ 99.2%'
    },
    { 
      src: '/products/pcc sk-11.jpg', 
      title: 'Dentifrice PCC - Economy Grade',
      description: 'Cost-effective solution for mass market products',
      category: 'Oral Care',
      purity: '≥ 98.8%'
    },
    // Detergent PCC Category
    { 
      src: '/products/detergent pcc powder.jpg', 
      title: 'Detergent PCC - High Whiteness',
      description: 'Superior whiteness grade for premium cleaning products',
      category: 'Cleaning Industry',
      purity: '≥ 98.5%'
    },
    { 
      src: '/products/pcc sk-22.jpg', 
      title: 'Detergent PCC - Liquid Grade',
      description: 'Excellent dispersibility for liquid detergent formulations',
      category: 'Cleaning Industry',
      purity: '≥ 98.0%'
    },
    { 
      src: '/products/pcc sk-33.jpg', 
      title: 'Detergent PCC - Powder Grade',
      description: 'Optimized for powder detergent applications',
      category: 'Cleaning Industry',
      purity: '≥ 98.2%'
    },
    // Food & Pharmaceutical Category
    { 
      src: '/products/food precipitate calcium carbonate powder.jpg', 
      title: 'Food Grade PCC - USP Standard',
      description: 'USP/EP compliant grade for food applications',
      category: 'Food & Pharmaceutical',
      purity: '≥ 99.8%'
    },
    { 
      src: '/products/pharma precipilate calcium carbonate powder.jpg', 
      title: 'Pharmaceutical PCC - Excipient Grade',
      description: 'High-purity excipient for pharmaceutical tablets',
      category: 'Food & Pharmaceutical',
      purity: '≥ 99.9%'
    },
    { 
      src: '/products/pcc s-11.jpg', 
      title: 'Nutraceutical PCC Grade',
      description: 'Specialized grade for nutritional supplements',
      category: 'Food & Pharmaceutical',
      purity: '≥ 99.7%'
    },
    // Paper & Coating Category  
    { 
      src: '/products/paper.jpg', 
      title: 'Paper Grade PCC - High Brightness',
      description: 'Enhanced brightness for premium paper applications',
      category: 'Paper & Coatings',
      purity: '≥ 98.0%'
    },
    { 
      src: '/products/ink pcc powder.jpg', 
      title: 'Coating Grade PCC',
      description: 'Optimized for coating and printing applications',
      category: 'Paper & Coatings',
      purity: '≥ 98.2%'
    },
    { 
      src: '/products/prcipitated calcium carbonate s-3.jpg', 
      title: 'Printing Grade PCC',
      description: 'Superior printability and surface quality',
      category: 'Paper & Coatings',
      purity: '≥ 98.1%'
    },
    // Paint Industry Category
    { 
      src: '/products/paint.jpg', 
      title: 'Paint Grade PCC - Exterior',
      description: 'Weather-resistant grade for exterior paint applications',
      category: 'Paint Industry',
      purity: '≥ 98.5%'
    },
    { 
      src: '/products/pcc sk-4.jpg', 
      title: 'Paint Grade PCC - Interior',
      description: 'High opacity grade for interior paint formulations',
      category: 'Paint Industry',
      purity: '≥ 98.3%'
    },
    { 
      src: '/products/precipitated calcium carbonate sk-2.jpg', 
      title: 'Decorative Paint Grade',
      description: 'Premium grade for decorative and artistic paints',
      category: 'Paint Industry',
      purity: '≥ 98.4%'
    },
    // Rubber & Plastics Category
    { 
      src: '/products/rubber.jpg', 
      title: 'Rubber Grade PCC - High Reinforcement',
      description: 'Maximum reinforcement for premium rubber products',
      category: 'Rubber & Plastics',
      purity: '≥ 98.0%'
    },
    { 
      src: '/products/pvc pipe.jpg', 
      title: 'Plastic Grade PCC',
      description: 'Enhanced properties for plastic manufacturing',
      category: 'Rubber & Plastics',
      purity: '≥ 97.8%'
    },
    { 
      src: '/products/pcc sk-11 (2).jpg', 
      title: 'Automotive Grade PCC',
      description: 'Specialized grade for automotive components',
      category: 'Rubber & Plastics',
      purity: '≥ 98.1%'
    },
    { 
      src: '/products/pcc sk-11.jpg', 
      title: 'Industrial Rubber Grade',
      description: 'Heavy-duty grade for industrial rubber applications',
      category: 'Rubber & Plastics',
      purity: '≥ 97.9%'
    },
    { 
      src: '/products/pcc s-11.jpg', 
      title: 'Composite Grade PCC',
      description: 'Advanced grade for composite material applications',
      category: 'Rubber & Plastics',
      purity: '≥ 98.0%'
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % productImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + productImages.length) % productImages.length);
    }
  };

  const downloadCatalog = () => {
    // Create a temporary link to download a sample catalog
    const link = document.createElement('a');
    link.href = '/products/tooth paste precipilate calcium carbonate powder.jpg'; // Sample file
    link.download = 'Shree-Karni-Chemicals-Product-Catalog.pdf';
    link.click();
  };

  return (
    <>
      {/* Main Gallery Page */}
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <Link 
                to="/" 
                className="inline-flex items-center text-gray-600 hover:text-red-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">Product Catalog</h1>
                <p className="text-gray-600 mt-1">Shree Karni Chemicals - Premium PCC Products</p>
              </div>
            </div>
            <button
              onClick={downloadCatalog}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Catalog
            </button>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productImages.map((image, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-square bg-gray-100">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    style={{ objectPosition: 'center center' }}
                    loading="lazy"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Title Card */}
                <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
                  <h3 className="font-semibold text-gray-900 text-sm mb-1 truncate">{image.title}</h3>
                  <p className="text-xs text-gray-600 line-clamp-2">{image.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Need More Information?</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our technical team is ready to help you select the right PCC grade for your specific application. 
                Contact us for detailed specifications, samples, and custom formulations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
                >
                  Contact Our Team
                </Link>
                <Link
                  to="/products"
                  className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
                >
                  View Product Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 p-2 z-10"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 p-2 z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 p-2 z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image */}
            <div className="text-center">
              <img
                src={productImages[selectedImageIndex].src}
                alt={productImages[selectedImageIndex].title}
                className="max-w-full max-h-[80vh] object-contain mx-auto rounded-lg"
                style={{ objectPosition: 'center center' }}
              />
              
              {/* Image Info */}
              <div className="mt-6 text-white text-center">
                <h3 className="text-2xl font-semibold">{productImages[selectedImageIndex].title}</h3>
                <p className="text-gray-300 mt-2 text-lg">{productImages[selectedImageIndex].description}</p>
                <p className="text-gray-400 mt-2">
                  {selectedImageIndex + 1} of {productImages.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductGalleryPage;