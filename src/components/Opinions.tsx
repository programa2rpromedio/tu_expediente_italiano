'use client';
import CarrouselOpinions from './CarrouselOpinions';

export default function Opinions() {
  return (
    <section className='py-[40px] lg:py-[80px]'>
      <div>
        <div className='mb-[24px] lg:mb-[41px]'>
          <h2 className='text-h2 text-center text-primary-regular'>
            Opiniones
          </h2>
        </div>
        <div>
          <CarrouselOpinions />
        </div>
      </div>
    </section>
  );
}
