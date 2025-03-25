import Image from 'next/image';
import CardInfo from './CardInfo';
import Form from './Form';
import Oficina from './icon/Oficina';
import Telefono from './icon/Telefono';
export default function FormHome() {
  return (
    <section className='relative -full lg:h-[783px] bg-[url("/bg_form.webp")] bg-cover bg-center flex justify-center items-center'>
      <div className='absolute top-0 left-0 bg-neutral-extra-light lg:w-[622px] lg:h-[107px] flex gap-4 rounded-br-[100px] px-[96px]'>
        <Image
          src={'/franjas_vertical.svg'}
          alt='franjas de Italia'
          width={24}
          height={60}
        />
        <div className='text-h2 text-primary-regular text-2xl'>
          <h2>Pongámonos en contacto</h2>
          <p>Asesorate con nosotros</p>
        </div>
      </div>
      <div className='lg:w-[1035px] lg:h-[537px] flex items-center gap-[195px]'>
        <Form />
        <div className='flex flex-col gap-[24px] h-[386px]'>
          <CardInfo
            title='Nuestra oficina'
            description='Calle 48, Num 877. La Plata. 
Buenos Aires, Argentina'
            icon={<Oficina className='text-primary-dark' />}
          />
          <CardInfo
            title='Contacto'
            description={`Teléfono: +54 9 1124084508 Mail: tuexpedienteitaliano@gmail.com`}
            icon={<Telefono className='text-primary-dark' />}
          />
        </div>
      </div>
    </section>
  );
}
