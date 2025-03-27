'use client' 

import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const images = [
  { src: "/about-us/about1.jpeg", alt: "about1" },
  { src: "/about-us/about2.png", alt: "about2" },
  { src: "/about-us/about3.jpeg", alt: "about3" },
];

const testimonials = [
    {src: '/testimonials/mario.mp4', alt: 'mario'},
    {src: '/testimonials/facundo.mov', alt: 'facundo'},
    {src: '/testimonials/testimonial3.png', alt: 'testimonial3'},
]

const cards = [
  {
    title: "Misión",
    content:
      "Asistir a nuestros clientes, en todo lo relacionado a trámites Italo-Argentinos. Facilitarles todo el proceso y acompañarlos al logro de su reconocimiento como ciudadanos italianos. Optimizando el trámite y reduciendo los plazos de gestión.",
  },
  {
    title: "Visión",
    content:
      "Posicionar a Tu Expediente Italiano, como una empresa referencial en trámites Italo-Argentinos. Para ello contamos con un equipo profesional, interdisciplinario y altamente eficaz, enfocado en la calidad del servicio.",
  },
];

const About = () => {
    const [clientSide, setClientSide] = useState(false);

  useEffect(() => {
    setClientSide(true);
  }, []);

  if (!clientSide) return null; 

  return (
<div className="min-h-[100vh] flex flex-col items-center">
  {/* Sección Nosotros */}
  <div className="bg-neutral-extra-light h-[300px] flex justify-center w-full pt-[62px]">
    <h2 className="text-[28px] text-text-green font-bold">Nosotros</h2>
  </div>

  {/* Contenedor de imágenes y texto */}
  <div className="relative -top-[150px] z-10 flex flex-col items-center gap-[20px]">
    {/* Imágenes */}
    <div className="flex flex-wrap justify-center gap-[20px]">
      {images.map((image, index) => (
        <div key={index} className="w-[305px] h-[290px] bg-white rounded-[10px] overflow-hidden">
          <img src={image.src} alt={image.alt} className="w-full h-full object-cover object-center" />
        </div>
      ))}
    </div>

    {/* Texto principal */}
    <p className="pt-[62px] w-[1002px] text-center text-[24px]">
      Somos un equipo de profesionales (ingenieros, abogados, traductores y gestores) especializados en la transmisión de la ciudadanía italiana. 
      Hacemos posible oportunidades y experiencias a nuestros clientes. Nos proponemos seguir creciendo continuamente, para cumplir el objetivo planteado desde un principio:
    </p>

    {/* Frase destacada */}
    <span className="text-[28px] font-bold pb-[62px] text-center">
      Generar puentes entre Italia y Argentina.
    </span>

    {/* Sección de tarjetas */}
    <div className="flex flex-wrap justify-center gap-[28px]">
      {cards.map((card, index) => (
        <div key={index} className="w-[466px] h-[344px] bg-[#DCF7D3] rounded-[10px] flex flex-col items-center text-center pt-[25px]">
          <h3 className="text-text-green font-semibold text-[32px]">{card.title}</h3>
          <p className="text-[24px] w-[418px]">{card.content}</p>
        </div>
      ))}
    </div>

    {/* Nuestra Historia */}
    <h2 className="text-text-green font-semibold text-[28px] pb-[32px] pt-[62px]">Nuestra Historia</h2>
    
    <div className="w-[848px] mx-auto text-center text-[24px] flex flex-col gap-[30px]">
      <p>
        Después de 4 años trabajando en el Reconocimiento de la ciudadanía italiana, así como en brindar apoyo a los Ciudadanos Italianos, unido a un largo camino de estudio e investigación, decidimos dar inicio a Tu Expediente Italiano (T.E.I.).
      </p>
      <p>
        Este proyecto surge en el 2019, pero es el año 2021 que nace de la fusión de dos personas con gran experiencia en el área: Yusselys, Ing. de Profesión con Diplomatura en Gerencia y Joaquina, Licenciada en Comunicación Social en la UNLP, con nacionalidad Italo-argentina, bilingüe en italiano.
      </p>
      <p>
        T.E.I. es producto de dos visiones, dos grandes necesidades de dar respuesta, guía y acompañamiento. Buscamos generar oportunidades a otras personas para que puedan solicitar el reconocimiento de su ciudadanía italiana.
      </p>
    </div>

    {/* Imagen grande */}
    <div className="w-[942px] h-[660px] flex justify-center rounded-[10px] pt-[62px] overflow-hidden ">
      <img src="/about-us/about4.png" className="w-full h-full rounded-[10px] object-cover object-[50%_60%]" />
    </div>
  </div>

  {/* Testimonios */}
  <h2 className="text-text-green font-bold text-[28px]">Testimonios de nuestros clientes</h2>
  <div className="flex flex-wrap justify-center gap-[20px] py-[62px]">
    {testimonials.map((testimonial, index) => {
      const isVideo = testimonial.src.endsWith(".mp4") || testimonial.src.endsWith(".mov");

      return (
        <div key={`testimonial-${index}`} className="w-[305px] h-[531px] bg-white   flex justify-center items-center">
          {isVideo ? (
            <video
              src={testimonial.src}
              className="w-full h-full object-cover"
              muted
              loop
              playsInline
              onMouseEnter={(e) => e.target.play()}
              onMouseLeave={(e) => e.target.pause()}
            />
          ) : (
            <img src={testimonial.src} alt={testimonial.alt} className="w-full h-full object-cover" />
          )}
        </div>
      );
    })}
  </div>
  
</div>

  );
};

export default About;
