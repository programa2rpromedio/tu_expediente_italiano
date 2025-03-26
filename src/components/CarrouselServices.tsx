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
import CardCarrousel from './CardCarrousel';
import ArrowLeft from './icon/ArrowLeft';
import ArrowRight from './icon/ArrowRight';

export default function CarrouselServices() {
  return (
    <section className='max-w-[1440px] mx-auto relative '>
      <div className='w-[1071px]  mx-auto overflow-visible'>
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
          }}
          className='swiper'
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
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
              <CardCarrousel
                alt={servicio.nombre}
                imgSrc={servicio.imagen}
                title={servicio.nombre}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='swiper-button-prev absolute! top-1/2 -translate-y-1/2 left-0! rounded-full bg-primary-extra-light text-primary-regular! w-max! after:hidden'>
        <ArrowLeft className='w-[12px] h-[22px]' />
      </div>
      <div className='swiper-button-next absolute! top-1/2 -translate-y-1/2 right-0! rounded-full bg-primary-extra-light text-primary-regular! w-max! after:hidden'>
        <ArrowRight className='w-[12px] h-[22px]' />
      </div>
      <div className='swiper-pagination color-primary-regular! bottom-[-32]!'></div>
    </section>
  );
}
