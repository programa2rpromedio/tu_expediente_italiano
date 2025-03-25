'use client';

import ArrowUp from './icon/ArrowUp';
import Facebook from './icon/Facebook';
import Instagram from './icon/Instagram';
import LinkeIn from './icon/LinkeIn';
export default function Footer() {
  return (
    <footer className='bg-neutral-dark text-white text-xl lg:py-[48px] lg:px-[80px]'>
      <section className='flex justify-between lg:pb-[49px]'>
        <div>
          <h2 className='text-[28px] font-amaranth font-semibold '>
            La llave de tu ciudadanía. <br />
            Si querés, podemos y lo hacemos
          </h2>
        </div>
        <div className='flex flex-col lg:gap-[36px]'>
          <p>info@tuexpedienteitaliano.com</p>
          <p>tuexpedienteitaliano@gmail.com</p>
          <p>+54 9 1124084508</p>
          <p>+Calle 48, N°877, La Plata, Buenos Aires 1900 Argentina</p>
        </div>
      </section>
      <hr />
      <section className='flex justify-between items-center'>
        <div className='bg-transparent flex gap-4 lg:mt-[49px]'>
          <Facebook />
          <Instagram />
          <LinkeIn />
        </div>
        <div className='flex justify-end lg:mt-[49px]'>
          <ArrowUp
            className='cursor-pointer'
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </div>
      </section>
    </footer>
  );
}
