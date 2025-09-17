import { useState } from "react";
import { ChevronLeft, ChevronRight, Heart, Camera } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "/foto 1.jpg",
    alt: "Romantic couple photo 1",
    caption: "Momen romantis"
  },
  {
    id: 2,
    src: "/foto 2.jpg",
    alt: "Romantic couple photo 2", 
    caption: "Momen romantis"
  },
  {
    id: 3,
    src: "/foto 3.jpg",
    alt: "Romantic couple photo 3",
    caption: "Momen romantis"
  },
  {
    id: 4,
    src: "/foto 4.jpg",
    alt: "Romantic couple photo 4",
    caption: "Momen romantis"
  },
  {
    id: 5,
    src: "/foto 5.jpg",
    alt: "Romantic couple photo 5",
    caption: "Momen romantis"
  },
  {
    id: 6,
    src: "/foto 6.jpg",
    alt: "Romantic couple photo 6",
    caption: "Momen romantis"
  }
];

export const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1;
    } else {
      newIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(galleryImages[newIndex].id);
  };

  const selectedImageData = selectedImage ? galleryImages.find(img => img.id === selectedImage) : null;

  return (
    <section className="wedding-section bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title slide-up">
          Galeri Foto
        </h2>
        <p className="section-subtitle slide-up">
          Koleksi momen indah perjalanan cinta kami
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id}
              className="wedding-card cursor-pointer group slide-up overflow-hidden p-0"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(image.id)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 fill-white" />
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground text-center">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && selectedImageData && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <img 
                src={selectedImageData.src}
                alt={selectedImageData.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Navigation buttons */}
              <button 
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              
              <button 
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
              
              {/* Close button */}
              <button 
                onClick={closeLightbox}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
              >
                <span className="text-white text-lg font-bold">×</span>
              </button>
              
              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-white text-lg font-medium">{selectedImageData.caption}</p>
              </div>
            </div>
          </div>
        )}

        {/* Call to action */}
        <div className="wedding-card slide-up text-center mt-12">
          <Camera className="w-16 h-16 mx-auto text-primary mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Bagikan Momen Anda
          </h3>
          <p className="text-muted-foreground mb-6">
            Jangan lupa untuk mengambil foto dan bagikan dengan hashtag
          </p>
          <div className="inline-block bg-muted px-6 py-3 rounded-full">
            <span className="text-primary font-bold text-lg">#ocarulWedding</span>
          </div>
        </div>
      </div>
    </section>
  );
};