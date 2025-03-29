'use client';

import TestimonialsSection from '@/components/TestimonialsSection';
import OurServicesCTA from '@/components/ui/OurServicesCTA';
import { useEffect, useState } from 'react';

const images = [
  { src: '/about-us/about1.jpeg', alt: 'about1' },
  { src: '/about-us/about2.png', alt: 'about2' },
  { src: '/about-us/about3.jpeg', alt: 'about3' },
];

const cards = [
  {
    title: 'Misión',
    content:
      'Asistir a nuestros clientes, en todo lo relacionado a trámites Italo-Argentinos. Facilitarles todo el proceso y acompañarlos al logro de su reconocimiento como ciudadanos italianos. Optimizando el trámite y reduciendo los plazos de gestión.',
  },
  {
    title: 'Visión',
    content:
      'Posicionar a Tu Expediente Italiano, como una empresa referencial en trámites Italo-Argentinos. Para ello contamos con un equipo profesional, interdisciplinario y altamente eficaz, enfocado en la calidad del servicio.',
  },
];

const About = () => {
  const [clientSide, setClientSide] = useState(false);

  useEffect(() => {
    setClientSide(true);
  }, []);

  if (!clientSide) return null;

  return (
    <div className="flex min-h-[100vh] flex-col items-center">
      {/* Sección Nosotros */}
      <div className="bg-neutral-extra-light flex h-[150px] w-full items-center justify-center sm:h-[350px] sm:items-start sm:justify-center sm:pt-[62px]">
        <h2 className="text-text-green text-center text-[28px] font-bold sm:mt-[20px] sm:text-left">
          Nosotros
        </h2>
      </div>

      {/* Contenedor de imágenes y texto */}
      <div className="relative top-[50px] z-10 flex flex-col items-center sm:-top-[150px]">
        {/* Imágenes */}
        <div className="flex flex-wrap justify-center gap-[7px] sm:gap-[20px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`h-[92px] w-[105px] overflow-hidden rounded-[10px] bg-white sm:h-[290px] sm:w-[305px] ${
                index === Math.floor(images.length / 2) ? '-translate-y-8 sm:translate-y-0' : ''
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`h-full w-full object-cover ${
                  index === Math.floor(images.length / 2) ? 'object-[59%_50%]' : 'object-center'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
      <p className="mt-[-65px] w-[282px] pt-[150px] pb-[28px] text-center text-[16px] sm:w-[1002px] sm:pt-0 sm:text-[24px]">
        Somos un equipo de profesionales (ingenieros, abogados, traductores y gestores)
        especializados en la transmisión de la ciudadanía italiana. Hacemos posible oportunidades y
        experiencias a nuestros clientes. Nos proponemos seguir creciendo continuamente, para
        cumplir el objetivo planteado desde un principio:
      </p>
      {/* Texto principal */}

      {/* Frase destacada */}
      <h2 className="text-text-green flex w-[282px] items-center justify-center pb-[40px] text-center text-[16px] font-bold sm:w-[1002px] sm:pb-[62px] sm:text-[28px] sm:text-black">
        Generar puentes entre Italia y Argentina.
      </h2>

      {/* Sección de tarjetas */}
      <div className="flex flex-wrap justify-center gap-[28px]">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex h-[256px] w-[314px] flex-col items-center rounded-[10px] bg-[#DCF7D3] pt-[25px] text-center sm:h-[344px] sm:w-[466px]"
          >
            <h3 className="text-text-green pb-[20px] text-[20px] font-semibold sm:text-[32px]">
              {card.title}
            </h3>
            <p
              className="w-[266px] text-[16px] sm:w-[418px] sm:text-[24px]"
              style={{ lineHeight: ' 130%' }}
            >
              {card.content}
            </p>
          </div>
        ))}
      </div>

      {/* Nuestra Historia */}
      <h2 className="text-text-green pt-[62px] pb-[32px] text-[20px] font-semibold sm:text-[28px]">
        Nuestra Historia
      </h2>

      <div className="mx-auto flex w-[283px] flex-col gap-[30px] pb-[40px] text-center text-[16px] sm:w-[848px] sm:pb-[62px] sm:text-[24px]">
        <p>
          Después de 4 años trabajando en el Reconocimiento de la ciudadanía italiana, así como en
          brindar apoyo a los Ciudadanos Italianos, unido a un largo camino de estudio e
          investigación, decidimos dar inicio a Tu Expediente Italiano (T.E.I.).
        </p>
        <p>
          Este proyecto surge en el 2019, pero es el año 2021 que nace de la fusión de dos personas
          con gran experiencia en el área: Yusselys, Ing. de Profesión con Diplomatura en Gerencia y
          Joaquina, Licenciada en Comunicación Social en la UNLP, con nacionalidad Italo-argentina,
          bilingüe en italiano.
        </p>
        <p>
          T.E.I. es producto de dos visiones, dos grandes necesidades de dar respuesta, guía y
          acompañamiento. Buscamos generar oportunidades a otras personas para que puedan solicitar
          el reconocimiento de su ciudadanía italiana.
        </p>
      </div>

      {/* Imagen grande */}
      <div className="flex h-[199px] w-[278px] justify-center overflow-hidden rounded-[10px] sm:h-[660px] sm:w-[942px]">
        <img
          src="/about-us/about4.png"
          className="h-full w-full rounded-[10px] object-cover object-[50%_60%]"
        />
      </div>

      {/* Testimonios */}
      <h2 className="text-text-green pt-[40px] text-[18px] font-bold sm:pt-[62px] sm:text-[28px]">
        Testimonios de nuestros clientes
      </h2>
      <TestimonialsSection />
      <OurServicesCTA />
    </div>
  );
};

export default About;
