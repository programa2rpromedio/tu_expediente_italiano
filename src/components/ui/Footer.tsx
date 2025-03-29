'use client';

import ArrowUp from '../icon/ArrowUp';
import Facebook from '../icon/Facebook';
import Instagram from '../icon/Instagram';
import LinkeIn from '../icon/LinkeIn';
export default function Footer() {
  return (
    <footer className='bg-neutral-dark text-white text-xl px-[20px] py-[24px] lg:py-[48px] lg:px-[80px]'>
      <section className='flex flex-col lg:flex-row justify-between lg:pb-[49px] mb-[32px] lg:mb-0 px-[18px] lg:px-0'>
        <div className='mb-[32px] lg:mb-0'>
          <h2 className='text-[20px] lg:text-[28px] font-amaranth font-semibold '>
            La llave de tu ciudadanía. <br />
            Si querés, podemos y lo hacemos
          </h2>
        </div>
        <div className='text-[16px] lg:text-[20px] flex flex-col gap-[16px] lg:gap-[36px]'>
          <p>info@tuexpedienteitaliano.com</p>
          <p>tuexpedienteitaliano@gmail.com</p>
          <p>+54 9 1124084508</p>
          <p>+Calle 48, N°877, La Plata, Buenos Aires 1900 Argentina</p>
        </div>
      </section>
      <hr />
      <section className='flex justify-between items-center mt-[32px] lg:mt-0 px-[18px] lg:px-0'>
        <div className='bg-transparent flex gap-4 lg:mt-[49px]'>
          <Facebook className='w-[40px] h-[40px] lg:w-[62px] lg:h-[62px]' />
          <Instagram className='w-[40px] h-[40px] lg:w-[62px] lg:h-[62px]' />
          <LinkeIn className='w-[40px] h-[40px] lg:w-[62px] lg:h-[62px]' />
        </div>
        <div className='flex justify-end lg:mt-[49px]'>
          <ArrowUp
            className='cursor-pointer w-[40px] h-[40px] lg:w-[62px] lg:h-[62px]'
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </div>
      </section>
    </footer>
  );
}
