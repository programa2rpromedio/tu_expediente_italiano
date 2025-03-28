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
import CardOpinion from './CardOpinion';
import ArrowLeft from './icon/ArrowLeft';
import ArrowRight from './icon/ArrowRight';

export default function CarrouselOpinions() {
  return (
    <section className='max-w-[1440px] mx-auto relative '>
      <div className='w-[1071px]  mx-auto overflow-visible'>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={3}
          className='swiper-opinions'
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
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
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
      <div className='swiper-button-prev-opinions absolute! top-1/2 -translate-y-1/2 left-0! rounded-full bg-primary-extra-light text-primary-regular! w-[64px]! h-[64px]! after:hidden flex justify-center items-center'>
        <ArrowLeft className='w-[40px] h-[40px] cursor-pointer' />
      </div>
      <div className='swiper-button-next-opinions absolute! top-1/2 -translate-y-1/2 right-0! rounded-full bg-primary-extra-light text-primary-regular! w-[64px]! h-[64px]! after:hidden flex justify-center items-center'>
        <ArrowRight className='w-[40px] h-[40px] cursor-pointer' />
      </div>
      <div className='swiper-pagination-opinions color-primary-regular! absolute bottom-[-32]! flex justify-center'></div>
    </section>
  );
}
