import Image from 'next/image';

export default function ItalianCitizenship() {
  return (
    <section className="bg-neutral-extra-light flex flex-col justify-center px-[24px] py-[32px] lg:flex-row lg:gap-[150px] lg:p-[80]">
      <div className="flex max-w-[631px] flex-col gap-4 text-base lg:text-2xl">
        <p>
          Desde T.E.I. nos encargamos de gestionar tu trámite en una comuna italiana, de ciudadanía
          ius sanguinis vía administrativa o de ciudadanía ius sanguinis vía judicial.
        </p>
        <p>
          Seleccionamos la comuna y fijamos residencia, para que puedas tramitar el reconocimiento
          de tu ciudadanía italiana. 
        </p>
        <p>Aseveramos las actas directamente en Italia.</p>
        <p>
          Tenemos un estudio en Italia, que se encarga de llevar adelante el juicio por vía materna.
          Nos encargamos del expediente y del acompañamiento durante el  juicio. No es necesario
          viajar a Italia para iniciar el juicio.
        </p>
      </div>
      <div className="mt-[20px] flex justify-center lg:mt-0">
        <Image
          src="/images/ciudadanía_en_Italia_service.webp"
          alt="Ciudadanía en Italia"
          width={382}
          height={465}
          className="h-[250px] w-[312px] rounded-[20px] object-cover lg:h-[465px] lg:w-[382px]"
        />
      </div>
    </section>
  );
}
