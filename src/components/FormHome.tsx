import Image from 'next/image';
import Oficina from './icon/Oficina';
import Telefono from './icon/Telefono';
import CardInfo from './ui/CardInfo';
import Form from './ui/Form';
export default function FormHome() {
  return (
    <>
      <section className='relative w-full lg:h-[783px] bg-[url("/bg_form_mobile.webp")]  lg:bg-[url("/bg_form.webp")] bg-cover bg-center flex justify-center items-center pb-[40px] lg:pb-0'>
        <div className='absolute top-0 left-0 bg-neutral-extra-light lg:w-[622px] lg:h-[107px]  gap-4 rounded-br-[100px] px-[96px] hidden lg:flex'>
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
        <div className='absolute top-0 w-full lg:hidden bg-neutral-extra-light h-[92px] rounded-b-[100px]'>
          <div className='text-center my-[20px] text-primary-regular'>
            <h2 className='font-amaranth text-[20px]'>
              Pongámonos en contacto
            </h2>
            <p className='font-dm-sans text-[18px]'>Asesorate con nosotros</p>
          </div>
        </div>
        <div className='w-[234px] md:w-[600px]  lg:w-[1035px] lg:h-[537px] flex items-center gap-50 2xl:gap-[195px] mt-[134px] lg:mt-0'>
          <Form />
          <div className='hidden lg:flex flex-col gap-[24px] h-[386px]'>
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
      <div className='lg:hidden  py-[40px]  px-[20px]'>
        <div className='flex flex-col gap-[24px] max-[320px]:w-[280px] max-w-[320px] mx-auto'>
          <CardInfo
            title='Nuestra oficina'
            description='Calle 48, Num 877. La Plata. 
Buenos Aires, Argentina'
            icon={<Oficina className='text-primary-dark' />}
          />
          <CardInfo
            title='Contacto'
            description={`Teléfono: +54 9 1124084508 \n Mail: tuexpedienteitaliano@gmail.com`}
            icon={<Telefono className='text-primary-dark' />}
          />
        </div>
      </div>
    </>
  );
}
