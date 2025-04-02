'use client';
// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper and modules styles
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/carrousel.css';

import { opiniones } from '@/data/opiniones';
import ArrowLeft from './icon/ArrowLeft';
import ArrowRight from './icon/ArrowRight';
import CardOpinion from './ui/CardOpinion';

export default function CarrouselOpinions() {
  return (
    <section className="relative mx-auto max-w-[1440px]">
      <div className="mx-auto max-w-[1071px] overflow-visible">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={3}
          className="swiper-opinions"
          navigation={{
            prevEl: '.swiper-button-prev-opinions',
            nextEl: '.swiper-button-next-opinions',
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination-opinions',
          }}
          centeredSlides={true} // Asegura que el slide activo esté centrado
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1.5,
              spaceBetween: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {opiniones.map((opinion) => (
            <SwiperSlide key={opinion.id}>
              <CardOpinion {...opinion} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="swiper-button-prev-opinions bg-primary-extra-light text-primary-regular! absolute! top-1/2 left-0! hidden h-[64px]! w-[64px]! -translate-y-1/2 items-center justify-center rounded-full after:hidden lg:flex">
        <ArrowLeft className="h-[40px] w-[40px] cursor-pointer" color="#00AD3C" />
      </div>
      <div className="swiper-button-next-opinions bg-primary-extra-light text-primary-regular! absolute! top-1/2 right-0! hidden h-[64px]! w-[64px]! -translate-y-1/2 items-center justify-center rounded-full after:hidden lg:flex">
        <ArrowRight className="h-[40px] w-[40px] cursor-pointer" color="#00AD3C" />
      </div>
      <div className="swiper-pagination-opinions color-primary-regular! absolute bottom-[-32]! hidden justify-center lg:flex"></div>

      <div className="mt-[24px] mb-[40px] flex items-center justify-center gap-[20px] lg:hidden">
        <div className="swiper-button-prev-opinions bg-primary-extra-light text-primary-regular! rounded-full">
          <ArrowLeft className="h-[40px] w-[40px] cursor-pointer" color="#00AD3C" />
        </div>
        <div className="swiper-button-next-opinions bg-primary-extra-light text-primary-regular! rounded-full">
          <ArrowRight className="h-[40px] w-[40px] cursor-pointer" color="#00AD3C" />
        </div>
      </div>
    </section>
  );
}
