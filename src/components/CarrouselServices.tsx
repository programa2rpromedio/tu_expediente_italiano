// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper and modules styles
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../styles/carrousel.css';

// import required modules
import { serviciosCategorias } from '../data/servicios';
import ArrowLeft from './icon/ArrowLeft';
import ArrowRight from './icon/ArrowRight';
import CardCarrouselService from './ui/CardCarrouselService';

export default function CarrouselServices() {
  return (
    <section className='max-w-[1440px] mx-auto relative'>
      <div className='w-[1071px] mx-auto overflow-visible'>
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{
            clickable: true,
            el: '.swiper-pagination-services',
          }}
          className='swiper-services'
          navigation={{
            prevEl: '.swiper-button-prev-services',
            nextEl: '.swiper-button-next-services',
          }}
          slidesPerView={3}
          spaceBetween={50} // Aumenta el espacio entre slides
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
          {serviciosCategorias.map((servicio) => (
            <SwiperSlide key={servicio.id}>
              <CardCarrouselService
                alt={servicio.nombre}
                imgSrc={servicio.imagen}
                title={servicio.nombre}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='swiper-button-prev-services absolute! top-1/2 -translate-y-1/2 left-0! rounded-full bg-primary-extra-light text-primary-regular! w-[64px]! h-[64px]! after:hidden flex justify-center items-center'>
        <ArrowLeft className='w-[40px] h-[40px] cursor-pointer' />
      </div>
      <div className='swiper-button-next-services absolute! top-1/2 -translate-y-1/2 right-0! rounded-full bg-primary-extra-light text-primary-regular! w-[64px]! h-[64px]! after:hidden flex justify-center items-center'>
        <ArrowRight className='w-[40px] h-[40px] cursor-pointer' />
      </div>
      <div className='swiper-pagination-services color-primary-regular! absolute   bottom-[-32]! flex justify-center'></div>
    </section>
  );
}
