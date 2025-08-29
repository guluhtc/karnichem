import React, { useState } from 'react';
import { X, Download, ZoomIn, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductGalleryPage: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // All product images from the public/products folder
  const productImages = [
    { 
      src: '/products/a38ada14-55a1-45df-a81c-a404b6d01e14.jpg', 
      title: 'Dentifrice PCC Grade',
      description: 'High purity calcium carbonate for oral care applications'
    },
    { 
      src: '/products/64a87ebc-509e-4acd-9f42-6a63a4f728b4.jpg', 
      title: 'Detergent Grade PCC',
      description: 'Superior whiteness grade for cleaning applications'
    },
    { 
      src: '/products/e754a9eb-44ce-4b9e-989d-a0eb9148f714.jpg', 
      title: 'Food & Pharmaceutical Grade',
      description: 'USP grade for food and pharmaceutical applications'
    },
    { 
      src: '/products/b268b458-75e3-42d0-a4e2-df83232d8c59.jpg', 
      title: 'Paper & Coating Grade',
      description: 'Enhanced brightness for paper and coating applications'
    },
    { 
      src: '/products/489e1a1a-aa7f-46c4-a73d-2dadd7741b52.jpg', 
      title: 'Paint Grade PCC',
      description: 'Optimal particle distribution for paint applications'
    },
    { 
      src: '/products/142f0a7b-7168-4190-93ea-3fda8acf0ab5.jpg', 
      title: 'Rubber Grade PCC',
      description: 'High reinforcement grade for rubber applications'
    },
    { 
      src: '/products/aa7d386e-1f59-4abb-bd0b-9d0f0746068f.jpg', 
      title: 'Industrial Grade PCC',
      description: 'General purpose industrial applications'
    },
    { 
      src: '/products/088d24b0-bf5f-4e06-bd5d-17a497100fef.jpg', 
      title: 'Specialty Grade PCC',
      description: 'Custom formulations for specific applications'
    },
    { 
      src: '/products/0e7f7e2d-2b8d-4203-9846-5200582764e7.jpg', 
      title: 'High Purity Grade',
      description: 'Ultra-pure grade for sensitive applications'
    },
    { 
      src: '/products/115f3623-a37d-4938-bdb6-53b3d6b26f78.jpg', 
      title: 'Coated Grade PCC',
      description: 'Surface treated for enhanced performance'
    },
    { 
      src: '/products/159b9fe6-50a7-4392-a8e6-e50635426a0f.jpg', 
      title: 'Nano Grade PCC',
      description: 'Ultra-fine particles for advanced applications'
    },
    { 
      src: '/products/3cb1ac27-c51b-4ade-ac17-ea6cad20fc73.jpg', 
      title: 'Precipitated Calcium Carbonate',
      description: 'Standard grade for multiple industrial uses'
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
    link.href = '/products/a38ada14-55a1-45df-a81c-a404b6d01e14.jpg'; // Sample file
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
                <div className="aspect-square">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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