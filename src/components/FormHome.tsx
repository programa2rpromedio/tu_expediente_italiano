import Image from 'next/image';
import Oficina from './icon/Oficina';
import Telefono from './icon/Telefono';
import CardInfo from './ui/CardInfo';
import Form from './ui/Form';
export default function FormHome() {
  return (
    <>
      <section className='relative flex w-full items-center justify-center bg-[url("/bg_form_mobile.webp")] bg-cover bg-center pb-[40px] lg:h-[783px] lg:bg-[url("/bg_form.webp")] lg:pb-0'>
        <div className="bg-neutral-extra-light absolute top-0 left-0 hidden gap-4 rounded-br-[100px] px-[96px] lg:flex lg:h-[107px] lg:w-[622px]">
          <Image src={'/franjas_vertical.svg'} alt="franjas de Italia" width={24} height={60} />
          <div className="text-h2 text-primary-regular text-2xl">
            <h2>Pongámonos en contacto</h2>
            <p>Asesorate con nosotros</p>
          </div>
        </div>
        <div className="bg-neutral-extra-light absolute top-0 h-[92px] w-full rounded-b-[100px] lg:hidden">
          <div className="text-primary-regular my-[20px] text-center">
            <h2 className="font-amaranth text-[20px]">Pongámonos en contacto</h2>
            <p className="font-dm-sans text-[18px]">Asesorate con nosotros</p>
          </div>
        </div>
        <div className="mt-[134px] flex w-[234px] items-center gap-50 md:w-[600px] lg:mt-0 lg:h-[537px] lg:w-[1035px] 2xl:gap-[195px]">
          <Form />
          <div className="hidden h-[386px] flex-col gap-[24px] lg:flex">
            <CardInfo
              title="Nuestra oficina"
              description="Calle 48, Num 877. La Plata. 
Buenos Aires, Argentina"
              icon={<Oficina className="text-primary-dark" />}
            />
            <CardInfo
              title="Contacto"
              description={`Teléfono: +54 9 1124084508 Mail: tuexpedienteitaliano@gmail.com`}
              icon={<Telefono className="text-primary-dark" />}
            />
          </div>
        </div>
      </section>
      <div className="px-[20px] py-[40px] lg:hidden">
        <div className="mx-auto flex max-w-[320px] flex-col gap-[24px] max-[320px]:w-[280px]">
          <CardInfo
            title="Nuestra oficina"
            description="Calle 48, Num 877. La Plata. 
Buenos Aires, Argentina"
            icon={<Oficina className="text-primary-dark" />}
          />
          <CardInfo
            title="Contacto"
            description={`Teléfono: +54 9 1124084508 \n Mail: tuexpedienteitaliano@gmail.com`}
            icon={<Telefono className="text-primary-dark" />}
          />
        </div>
      </div>
    </>
  );
}
