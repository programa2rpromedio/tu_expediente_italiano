import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className='lg:py-[62px] flex flex-col justify-center bg-neutral-extra-light lg:flex-row'>
      <div className='lg:max-w-[744px] flex flex-col gap-[22px] lg:pr-[96px]'>
        <h2 className='text-h2'>¿Quiénes somos?</h2>
        <p className='font-dm-sans text-[20px]'>
          Somos un equipo de profesionales (ingenieros, licenciados, abogados,
          traductores y gestores) especializados en la transmisión de la
          ciudadanía italiana. Hacemos posible oportunidades y experiencias a
          nuestros clientes. Nos proponemos seguir creciendo continuamente para
          cumplir el objetivo planteado desde un principio:
        </p>
        <h3 className='font-dm-sans text-2xl text-primary-regular'>
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
    </section>
  );
}
