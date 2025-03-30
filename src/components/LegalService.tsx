import Image from 'next/image';
export default function LegalService() {
  return (
    <section className="bg-neutral-extra-light flex flex-col justify-center px-[24px] py-[32px] lg:flex-row lg:gap-[150px] lg:p-[80]">
      <div className="flex max-w-[631px] flex-col gap-4 text-base lg:text-2xl">
        <p> En T.E.I contamos con nuestro equipo de legales, para asistirte en:</p>
        <ul className="list-disc">
          <li>
            Asesoramiento y gestión en la validación internacional de la sentencia de divorcio.
          </li>
          <li>
            Asesoramiento y gestión en la validación internacional de la sentencia de adopción. 
          </li>
          <li>Readquisición de la ciudadanía italiana. </li>
          <li>Rectificaciones Administrativas y Judiciales.</li>
        </ul>
      </div>
      <div className="mt-[20px] flex justify-center lg:mt-0">
        <Image
          src="/images/legales.webp"
          alt="Ciudadanía en Italia"
          width={382}
          height={465}
          className="h-[250px] w-[312px] rounded-[20px] object-cover lg:h-[465px] lg:w-[382px]"
        />
      </div>
    </section>
  );
}
