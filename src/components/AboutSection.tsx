import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className='relative p-[40px] lg:p-0 lg:py-[62px] flex flex-col justify-center bg-neutral-extra-light lg:flex-row text-center'>
      <div className='lg:max-w-[744px] flex flex-col gap-[22px] lg:pr-[96px]'>
        <h2 className='text-xl lg:text-h2 font-bold'>¿Quiénes somos?</h2>
        <p className='font-dm-sans text-[18px] lg:text-[20px]'>
          Somos un equipo de profesionales (ingenieros, licenciados, abogados,
          traductores y gestores) especializados en la transmisión de la
          ciudadanía italiana. Hacemos posible oportunidades y experiencias a
          nuestros clientes. Nos proponemos seguir creciendo continuamente para
          cumplir el objetivo planteado desde un principio:
        </p>
        <h3 className='font-dm-sans text-xl lg:text-2xl  text-primary-regular'>
          Generar puentes entre Italia y Argentina
        </h3>
      </div>
      <div>
        <Image
          src={'/images/nosotros_seccion.webp'}
          alt='Equipo Tu Expediente Italiano'
          width={477}
          height={287}
          className='hidden lg:block rounded-[20px] w-[477px] h-[287px] object-cover object-center'
        />
      </div>

      <div className='absolute top-0 right-[55px]'>
        <Image
          src={'/franjas_vertical.svg'}
          alt='franjas de Italia'
          width={24}
          height={127}
          className='w-[12px] h-[77px] lg:w-[24px] lg:h-[127px]'
        />
      </div>
    </section>
  );
}
