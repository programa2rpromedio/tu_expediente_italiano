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
    <section className="relative mx-auto max-w-[1440px]">
      <div className="mx-auto max-w-[1071px] overflow-visible">
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{
            clickable: true,
            el: '.swiper-pagination-services',
          }}
          className="swiper-services"
          navigation={{
            prevEl: '.swiper-button-prev-services',
            nextEl: '.swiper-button-next-services',
          }}
          slidesPerView={3}
          spaceBetween={50} // Aumenta el espacio entre slides
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
          {serviciosCategorias.map((servicio) => (
            <SwiperSlide key={servicio.id}>
              <CardCarrouselService
                alt={servicio.nombre}
                imgSrc={servicio.imagen}
                title={servicio.nombre}
                slug={servicio.slug}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="swiper-button-prev-services bg-primary-extra-light text-primary-regular! absolute! top-1/2 left-0! hidden h-[64px]! w-[64px]! -translate-y-1/2 items-center justify-center rounded-full after:hidden lg:flex">
        <ArrowLeft className="h-[40px] w-[40px] cursor-pointer" />
      </div>
      <div className="swiper-button-next-services bg-primary-extra-light text-primary-regular! absolute! top-1/2 right-0! hidden h-[64px]! w-[64px]! -translate-y-1/2 items-center justify-center rounded-full after:hidden lg:flex">
        <ArrowRight className="h-[40px] w-[40px] cursor-pointer" />
      </div>
      <div className="swiper-pagination-services color-primary-regular! absolute bottom-[-32]! hidden justify-center lg:flex"></div>
      <div className="mt-[24px] mb-[40px] flex items-center justify-center gap-[20px] lg:hidden">
        <div className="swiper-button-prev-services bg-primary-extra-light text-primary-regular! rounded-full">
          <ArrowLeft className="h-[40px] w-[40px] cursor-pointer" />
        </div>
        <div className="swiper-button-next-services bg-primary-extra-light text-primary-regular! rounded-full">
          <ArrowRight className="h-[40px] w-[40px] cursor-pointer" />
        </div>
      </div>
    </section>
  );
}
