"use client";

import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const images = [
  { src: "/about-us/about1.jpeg", alt: "about1" },
  { src: "/about-us/about2.png", alt: "about2" },
  { src: "/about-us/about3.jpeg", alt: "about3" },
];

const testimonials = [
  { src: "/testimonials/mario.mp4", alt: "mario" },
  { src: "/testimonials/facundo.mov", alt: "facundo" },
  { src: "/testimonials/testimonial3.png", alt: "testimonial3" },
];

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
      <div className="bg-neutral-extra-light sm:h-[350px] h-[150px] flex justify-center sm:justify-center items-center sm:items-start w-full sm:pt-[62px]">
  <h2 className="text-[28px] text-text-green font-bold text-center sm:text-left sm:mt-[20px]">
    Nosotros
  </h2>
</div>


      {/* Contenedor de imágenes y texto */}
      <div className="relative sm:-top-[150px] z-10 flex flex-col items-center top-[50px] ">
        {/* Imágenes */}
        <div className="flex flex-wrap justify-center sm:gap-[20px] gap-[7px] ">
          {images.map((image, index) => (
            <div
              key={index}
              className={`sm:w-[305px] sm:h-[290px] w-[105px] h-[92px] bg-white rounded-[10px] overflow-hidden ${
                index === Math.floor(images.length / 2) ? "sm:translate-y-0 -translate-y-8" : ""
              }`}   >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full h-full object-cover ${
                  index === Math.floor(images.length / 2)
                    ? "object-[59%_50%]"
                    : "object-center"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
      <p className=" sm:w-[1002px] w-[282px] text-center sm:text-[24px] text-[16px] mt-[-65px] pb-[28px] pt-[150px] sm:pt-0">
        Somos un equipo de profesionales (ingenieros, abogados, traductores y
        gestores) especializados en la transmisión de la ciudadanía italiana.
        Hacemos posible oportunidades y experiencias a nuestros clientes. Nos
        proponemos seguir creciendo continuamente, para cumplir el objetivo
        planteado desde un principio:
      </p>
      {/* Texto principal */}

      {/* Frase destacada */}
      <h2 className="sm:text-[28px] pb-[20px] font-bold sm:text-black  text-text-green text-center  sm:w-[1002px] w-[282px] flex items-center justify-center sm:pb-[62px] pb-[40px] text-[16px]">
        Generar puentes entre Italia y Argentina.
      </h2>

      {/* Sección de tarjetas */}
      <div className="flex flex-wrap justify-center gap-[28px]">
        {cards.map((card, index) => (
          <div
            key={index}
            className="sm:w-[466px] sm:h-[344px] w-[314px] h-[256px] bg-[#DCF7D3] rounded-[10px] flex flex-col items-center text-center pt-[25px]"
          >
            <h3 className="text-text-green font-semibold sm:text-[32px] text-[20px] pb-[20px]">
              {card.title}
            </h3>
            <p
              className="sm:text-[24px] sm:w-[418px] text-[16px] w-[266px]"
              style={{ lineHeight: " 130%" }}
            >
              {card.content}
            </p>
          </div>
        ))}
      </div>

      {/* Nuestra Historia */}
      <h2 className="text-text-green font-semibold sm:text-[28px] text-[20px] pb-[32px] pt-[62px]">
        Nuestra Historia
      </h2>

      <div className="sm:w-[848px] w-[283px] mx-auto text-center sm:text-[24px] text-[16px] flex flex-col gap-[30px] sm:pb-[62px] pb-[40px]">
        <p>
          Después de 4 años trabajando en el Reconocimiento de la ciudadanía
          italiana, así como en brindar apoyo a los Ciudadanos Italianos, unido
          a un largo camino de estudio e investigación, decidimos dar inicio a
          Tu Expediente Italiano (T.E.I.).
        </p>
        <p>
          Este proyecto surge en el 2019, pero es el año 2021 que nace de la
          fusión de dos personas con gran experiencia en el área: Yusselys, Ing.
          de Profesión con Diplomatura en Gerencia y Joaquina, Licenciada en
          Comunicación Social en la UNLP, con nacionalidad Italo-argentina,
          bilingüe en italiano.
        </p>
        <p>
          T.E.I. es producto de dos visiones, dos grandes necesidades de dar
          respuesta, guía y acompañamiento. Buscamos generar oportunidades a
          otras personas para que puedan solicitar el reconocimiento de su
          ciudadanía italiana.
        </p>
      </div>

      {/* Imagen grande */}
      <div className="sm:w-[942px] sm:h-[660px]  w-[278px] h-[199px] flex justify-center rounded-[10px]  overflow-hidden ">
        <img
          src="/about-us/about4.png"
          className="w-full h-full rounded-[10px] object-cover object-[50%_60%]"
        />
      </div>

      {/* Testimonios */}
      <h2 className="text-text-green font-bold sm:text-[28px]  text-[18px] sm:pt-[62px] pt-[40px]">
        Testimonios de nuestros clientes
      </h2>
      <div className="flex flex-wrap justify-center gap-[20px] sm:py-[62px] py-[40px]">
        {testimonials.map((testimonial, index) => {
          const isVideo =
            testimonial.src.endsWith(".mp4") ||
            testimonial.src.endsWith(".mov");
          return (
            <div
              key={`testimonial-${index}`}
              className="sm:w-[305px] sm:h-[531px] w-[110px] h-[250px]  bg-white   flex justify-center items-center"
            >
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
                <img
                  src={testimonial.src}
                  alt={testimonial.alt}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="text-center  pb-[62px]">
        <h2 className="text-text-green sm:text-[40px] text-[24px] font-bold pb-[24px] sm:w-[390px] w-[250px] mx-auto">
          Nuestros servicios, garantizados.
        </h2>
        <p className="text-[#191919] sm:text-[28px] text-[18px] font-bold text-center sm:w-[390px] w-[250px] mx-auto">
          La llave de tu ciudadanía
        </p>
        <p className="text-[#191919] sm:text-[28px] text-[18px] font-bold pb-[24px] text-center w-auto">
          Si querés, podemos y lo hacemos
        </p>

        <button className="bg-text-green text-white sm:w-[390px] w-[174px] sm:py-[16px] py-[8px] rounded-[10px] sm:text-[20px] text-[16px] mx-auto">
          Contactanos ahora
        </button>
      </div>
    </div>
  );
};

export default About;
