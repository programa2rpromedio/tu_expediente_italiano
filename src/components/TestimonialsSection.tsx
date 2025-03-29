import { testimonials } from '@/data/opiniones';
import Image from 'next/image';

export default function TestimonialsSection({ className }: { className?: string }) {
  return (
    <div className={`flex flex-wrap justify-center gap-[20px] py-[40px] sm:py-[62px] ${className}`}>
      {testimonials.map((testimonial, index) => {
        const isVideo =
          testimonial.src.endsWith('.mp4') ||
          testimonial.src.endsWith('.mov') ||
          testimonial.src.endsWith('.webm');
        return (
          <div
            key={`testimonial-${index}`}
            className="flex h-[250px] w-[110px] items-center justify-center bg-white sm:h-[531px] sm:w-[305px]"
          >
            {isVideo ? (
              <video
                src={testimonial.src}
                className="h-full w-full cursor-pointer object-cover"
                muted
                loop
                playsInline
                onMouseEnter={(e) =>
                  (e.target as HTMLVideoElement).play().then(() => {
                    (e.target as HTMLVideoElement).muted = false;
                  })
                }
                onMouseLeave={(e) => {
                  (e.target as HTMLVideoElement).muted = true;
                  (e.target as HTMLVideoElement).pause();
                }}
              />
            ) : (
              <Image
                src={testimonial.src}
                alt={testimonial.alt}
                width={305}
                height={531}
                className="h-full w-full object-cover"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
