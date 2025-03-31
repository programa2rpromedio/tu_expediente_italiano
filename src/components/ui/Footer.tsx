'use client';

import Link from 'next/link';
import ArrowUp from '../icon/ArrowUp';
import Facebook from '../icon/Facebook';
import Instagram from '../icon/Instagram';
import LinkeIn from '../icon/LinkeIn';
export default function Footer() {
  return (
    <footer className="bg-neutral-dark px-[20px] py-[24px] text-xl text-white lg:px-[80px] lg:py-[48px]">
      <section className="mb-[32px] flex flex-col justify-between px-[18px] lg:mb-0 lg:flex-row lg:px-0 lg:pb-[49px]">
        <div className="mb-[32px] lg:mb-0">
          <h2 className="font-amaranth text-[20px] font-semibold lg:text-[28px]">
            La llave de tu ciudadanía. <br />
            Si querés, podemos y lo hacemos
          </h2>
        </div>
        <div className="flex flex-col gap-[16px] text-[16px] lg:gap-[36px] lg:text-[20px]">
          <p>info@tuexpedienteitaliano.com</p>
          <p>tuexpedienteitaliano@gmail.com</p>
          <p>+54 9 1124084508</p>
          <p>+Calle 48, N°877, La Plata, Buenos Aires 1900 Argentina</p>
        </div>
      </section>
      <hr />
      <section className="mt-[32px] flex items-center justify-between px-[18px] lg:mt-0 lg:px-0">
        <div className="flex gap-4 bg-transparent lg:mt-[49px]">
          <Link href="https://www.facebook.com/tuexpedienteitaliano/?ti=as" target="_blank">
            <Facebook className="h-[40px] w-[40px] lg:h-[62px] lg:w-[62px]" />
          </Link>
          <Link href="https://www.instagram.com/tuexpediente.italiano/" target="_blank">
            <Instagram className="h-[40px] w-[40px] lg:h-[62px] lg:w-[62px]" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/tu-expediente-italiano-5ba0b723a/"
            target="_blank"
          >
            <LinkeIn className="h-[40px] w-[40px] lg:h-[62px] lg:w-[62px]" />
          </Link>
        </div>
        <div className="flex justify-end lg:mt-[49px]">
          <ArrowUp
            className="h-[40px] w-[40px] cursor-pointer lg:h-[62px] lg:w-[62px]"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </div>
      </section>
    </footer>
  );
}
