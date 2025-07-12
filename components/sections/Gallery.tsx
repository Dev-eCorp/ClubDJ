import { GalleryImage } from "@/lib/types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, FC, useCallback } from "react";

interface GalleryProps {
  galleryImages: GalleryImage[];
}

const Gallery: FC<GalleryProps> = ({ galleryImages }) => {
  if (!galleryImages.length) return null;
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentGalleryImage((prev) => (prev + 1) % galleryImages.length);
  }, [galleryImages.length]);

  const prevImage = useCallback(() => {
    setCurrentGalleryImage(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  }, [galleryImages.length]);

  return (
    <section className="py-12 md:py-18 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-8 leading-tight break-words">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              NUESTRA GALERÍA
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300">
            Vive la <span className="text-pink-400">experiencia</span> de
            nuestros estudios y eventos
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentGalleryImage * 100}%)`,
              }}
            >
              {galleryImages.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0 relative">
                  <Image
                    loading="lazy"
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={1200}
                    height={600}
                    className="w-full h-96 md:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white text-lg font-semibold">
                      {image.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            aria-label="Imagen anterior"
            onClick={prevImage}
            className="cursor-pointer absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            aria-label="Imagen siguiente"
            onClick={nextImage}
            className="cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center mt-8 space-x-3">
            {galleryImages.map((_, index) => (
              <button
                aria-label={`Seleccionar imagen ${index + 1}`}
                key={index}
                className={`w-4 h-4 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentGalleryImage
                    ? "bg-pink-400 scale-125"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                onClick={() => setCurrentGalleryImage(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
