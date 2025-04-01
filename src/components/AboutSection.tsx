'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById('about-section');
    if (element) {
      const top = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      setIsVisible(top < windowHeight * 0.8);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Verificar estado inicial
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="about-section"
      className="bg-neutral-extra-light relative flex flex-col justify-center p-[40px] text-center lg:flex-row lg:p-0 lg:py-[62px] overflow-hidden"
    >
      {/* Contenido de texto con desplazamiento */}
      <div className={`flex flex-col gap-[22px] lg:max-w-[744px] lg:pr-[96px] transition-all duration-800 ease-out ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}>
        <h2 className="lg:text-h2 text-xl font-bold">¿Quiénes somos?</h2>
        <p className="font-dm-sans text-[18px] lg:text-[20px]">
          Somos un equipo de profesionales (ingenieros, licenciados, abogados, traductores y
          gestores) especializados en la transmisión de la ciudadanía italiana. Hacemos posible
          oportunidades y experiencias a nuestros clientes. Nos proponemos seguir creciendo
          continuamente para cumplir el objetivo planteado desde un principio:
        </p>
        <h3 className="font-dm-sans text-primary-regular text-xl lg:text-2xl">
          Generar puentes entre Italia y Argentina
        </h3>
      </div>

      {/* Imagen con desplazamiento desde derecha */}
      <div className={`transition-all duration-800 ease-out delay-50 ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}>
        <Image
          src={'/images/nosotros_seccion.webp'}
          alt="Equipo Tu Expediente Italiano"
          width={477}
          height={287}
          className="hidden h-[287px] w-[477px] rounded-[20px] object-cover object-center lg:block"
          style={{ objectPosition: '50% 36%' }}
        />
      </div>

      {/* Franjas verticales */}
      <div className="absolute top-0 right-[55px]">
        <Image
          src={'/franjas_vertical.svg'}
          alt="franjas de Italia"
          width={24}
          height={127}
          className="h-[77px] w-[12px] lg:h-[127px] lg:w-[24px]"
        />
      </div>
    </section>
  );
}