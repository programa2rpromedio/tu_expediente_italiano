import { testimonials } from '@/data/opiniones';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import ArrowRight from './icon/ArrowRight';
import ArrowLeft from './icon/ArrowLeft';

export default function TestimonialsSection({ className }: { className?: string }) {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(testimonials.length); // Comenzamos en el índice del primer "real"
  const [isTransitioning, setIsTransitioning] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Crear un array extendido para el efecto infinito
  const extendedTestimonials = [
    ...testimonials.slice(-3), // Copia los últimos 3 testimonios al inicio
    ...testimonials,
    ...testimonials.slice(0, 3), // Copia los primeros 3 testimonios al final
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile && itemRefs.current[currentIndex]) {
      itemRefs.current[currentIndex]?.scrollIntoView({
        behavior: isTransitioning ? "smooth" : "instant",
        block: "nearest",
        inline: "center",
      });
    }
  }, [currentIndex, isMobile, isTransitioning]);

  // Efecto de reset cuando llega al final o principio
  useEffect(() => {
    if (!isMobile) return;

    if (currentIndex === extendedTestimonials.length - 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(testimonials.length);
        requestAnimationFrame(() => setIsTransitioning(true));
      }, 300);
    }

    if (currentIndex === 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(testimonials.length);
        requestAnimationFrame(() => setIsTransitioning(true));
      }, 300);
    }
  }, [currentIndex, isMobile, extendedTestimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };


  return (
    <div className={`py-[40px] sm:py-[62px] relative ${className}`}>
      {isMobile ? (
        <div className={`relative flex flex-col items-center gap-[20px] w-full max-w-full overflow-hidden`}>
          {/* Carrusel */}
          <div 
            ref={carouselRef} 
            className="flex overflow-x-auto gap-[16px] scrollbar-hide w-full max-w-[100vw] scroll-snap-type-x-mandatory"
          >
            {extendedTestimonials.map((testimonial, index) => {
              const isVideo = /\.(mp4|mov|webm)$/.test(testimonial.src);
              return (
                <div
                  key={index}
                  ref={(el:any) => (itemRefs.current[index] = el)}
                  className="flex-shrink-0 h-[494px] w-[85vw] max-w-[281px] bg-white transition-transform duration-300 snap-center"
                >
                  {isVideo ? (
                 <video
                 src={testimonial.src}
                 className="h-full w-full object-cover"
                 muted
                 loop
                 playsInline
                 onMouseEnter={(e) => { e.currentTarget.muted = false; e.currentTarget.play(); }}
                 onMouseLeave={(e) => { e.currentTarget.muted = true; e.currentTarget.pause(); }}
               />
             ) : (
               <Image
                 src={testimonial.src}
                 alt={testimonial.alt}
                 width={250}
                 height={250}
                 className="h-full w-full object-cover"
               />
                  )}
                </div>
              );
            })}
          </div>

          {/* Botones de navegación */}
          <div className="flex gap-[20px]">
            <button className="p-3 bg-[#DCF7D3] rounded-full" onClick={handlePrev}>
              <ArrowLeft className="w-6 h-6" color="#00AD3C" />
            </button>
            <button className="p-3 bg-[#DCF7D3] rounded-full" onClick={handleNext}>
              <ArrowRight className="w-6 h-6" color="#00AD3C" />
            </button>
          </div>
        </div>
      ) : (
        // Diseño normal en desktop
        <div className="flex flex-wrap justify-center gap-[20px]">
          {testimonials.slice(0,3).map((testimonial, index) => {
            const isVideo = /\.(mp4|mov|webm)$/.test(testimonial.src);
            return (
              <div key={index} className="flex h-[531px] w-[305px] items-center justify-center bg-white">
              {isVideo ? (
  <video
    src={testimonial.src}
    className="h-full w-full object-cover cursor-pointer"
    muted
    loop
    playsInline
    onMouseEnter={(e) => { e.currentTarget.muted = false; e.currentTarget.play(); }}
    onMouseLeave={(e) => { e.currentTarget.muted = true; e.currentTarget.pause(); }}
  />
) : (
  <Image
    src={testimonial.src}
    alt={testimonial.alt}
    width={250}
    height={250}
    className="h-full w-full object-cover"
  />
)}

              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
