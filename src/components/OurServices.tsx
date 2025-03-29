'use client';
import CarrouselServices from './CarrouselServices';

export default function OurServices() {
  return (
    <div className='flex flex-col items-center justify-center py-[40px] lg:py-[80px]'>
      <div className='mb-[24px] lg:mb-[41px]'>
        <h2 className='text-primary-regular text-h2'>Nuestros servicios</h2>
      </div>
      <div className='w-full'>
        <CarrouselServices />
      </div>
    </div>
  );
}
