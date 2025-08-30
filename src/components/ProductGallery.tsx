import React, { useState } from 'react';
import { X, Download, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductGalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ isOpen, onClose }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // All product images from the public/products folder
  const productImages = [
    { 
      src: '/products/tooth paste precipilate calcium carbonate powder.jpg', 
      title: 'Dentifrice PCC Grade',
      description: 'High purity calcium carbonate for oral care applications'
    },
    { 
      src: '/products/detergent pcc powder.jpg', 
      title: 'Detergent Grade PCC',
      description: 'Superior whiteness grade for cleaning applications'
    },
    { 
      src: '/products/food precipitate calcium carbonate powder.jpg', 
      title: 'Food & Pharmaceutical Grade',
      description: 'USP grade for food and pharmaceutical applications'
    },
    { 
      src: '/products/paper.jpg', 
      title: 'Paper & Coating Grade',
      description: 'Enhanced brightness for paper and coating applications'
    },
    { 
      src: '/products/paint.jpg', 
      title: 'Paint Grade PCC',
      description: 'Optimal particle distribution for paint applications'
    },
    { 
      src: '/products/rubber.jpg', 
      title: 'Rubber Grade PCC',
      description: 'High reinforcement grade for rubber applications'
    },
    { 
      src: '/products/pharma precipilate calcium carbonate powder.jpg', 
      title: 'Pharmaceutical Grade PCC',
      description: 'USP/EP compliant grade for pharmaceutical applications'
    },
    { 
      src: '/products/ink pcc powder.jpg', 
      title: 'Ink Grade PCC',
      description: 'Specialized grade for ink and printing applications'
    },
    { 
      src: '/products/pvc pipe.jpg', 
      title: 'PVC Grade PCC',
      description: 'High performance grade for PVC applications'
    },
    { 
      src: '/products/pcc sk-1.jpg', 
      title: 'Coated Grade PCC',
      description: 'Surface treated for enhanced performance'
    },
    { 
      src: '/products/pcc sk-11.jpg', 
      title: 'PCC SK-11 Grade',
      description: 'High performance coated grade'
    },
    { 
      src: '/products/pcc sk-22.jpg', 
      title: 'PCC SK-22 Grade',
      description: 'Advanced surface modified grade'
    },
    { 
      src: '/products/pcc sk-33.jpg', 
      title: 'PCC SK-33 Grade',
      description: 'Premium coated calcium carbonate'
    },
    { 
      src: '/products/pcc sk-4.jpg', 
      title: 'PCC SK-4 Grade',
      description: 'Specialized grade for paint applications'
    },
    { 
      src: '/products/pcc s-11.jpg', 
      title: 'PCC S-11 Grade',
      description: 'High purity standard grade'
    },
    { 
      src: '/products/precipitated calcium carbonate sk-2.jpg', 
      title: 'PCC SK-2 Grade',
      description: 'Fine particle precipitated grade'
    },
    { 
      src: '/products/prcipitated calcium carbonate s-3.jpg', 
      title: 'PCC S-3 Grade',
      description: 'Standard precipitated calcium carbonate'
    },
    { 
      src: '/products/pcc sk-11 (2).jpg', 
      title: 'PCC SK-11 Premium',
      description: 'Enhanced version of SK-11 grade'
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

  if (!isOpen) return null;

  return (
    <>
      {/* Main Gallery Modal */}
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Product Catalog</h2>
              <p className="text-gray-600 mt-1">Shree Karni Chemicals - Premium PCC Products</p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={downloadCatalog}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors inline-flex items-center"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Catalog
              </button>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 p-2"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {productImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
                  onClick={() => openLightbox(index)}
                >
                  <div className="aspect-square bg-gray-100">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      style={{ objectPosition: 'center center' }}
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <h3 className="text-white text-sm font-medium truncate">{image.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-60 p-4">
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
              <div className="mt-4 text-white text-center">
                <h3 className="text-xl font-semibold">{productImages[selectedImageIndex].title}</h3>
                <p className="text-gray-300 mt-2">{productImages[selectedImageIndex].description}</p>
                <p className="text-gray-400 mt-1 text-sm">
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

export default ProductGallery;