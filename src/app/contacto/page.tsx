import Facebook from '@/components/icon/Facebook';
import Instagram from '@/components/icon/Instagram';
import LinkeIn from '@/components/icon/LinkeIn';
import Oficina from '@/components/icon/Oficina';
import Telefono from '@/components/icon/Telefono';
import Maps from '@/components/Maps';
import CardInfo from '@/components/ui/CardInfo';
import Form from '@/components/ui/Form';
import Link from 'next/link';

const Contacto = () => {
  return (
    <div>
      {/* Contenedor de contacto  */}
      <div>
        <div className="bg-[#F6F6F6] h-auto">
          <h2 className="text-text-green sm:text-[28px] text-[20px] w-[284px] sm:w-[100%] m-auto font-semibold text-center pt-[62px] pb-[16px]">
            ¡Estás a un paso de tu Ciudadanía Italiana!
          </h2>
          <p className="sm:text-[24px] text-[16px] text-text-green text-center m-auto w-[350px] pb-[62px]">
            Agendá una asesoría con nosotros y evaluamos tu caso
          </p>
        </div>

        <section className='relative -full lg:h-[648px] sm:bg-[url("/bg_form.webp")] bg-[url("/bg_form_mobile.webp")]  bg-cover bg-center flex justify-center items-center'>
          <div className="bg-[url('/ruta-de-la-imagen.jpg')] bg-cover   sm:bg-center ">
            <Form />
          </div>
        </section>
      </div>

      <div className="align-center flex flex-col justify-center gap-[24px] py-[80px] text-center">
        <h2 className="text-text-green text-[28px] font-bold">
          Seguinos en nuestras Redes Sociales
        </h2>

        <div className="flex justify-center gap-4">
          <Link href="https://www.facebook.com/tuexpedienteitaliano/?ti=as" target="_blank">
            <Facebook color="#006C26" className="cursor-pointer" />
          </Link>
          <Link href="https://www.instagram.com/tuexpediente.italiano/" target="_blank">
            <Instagram color="#006C26" className="cursor-pointer" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/tu-expediente-italiano-5ba0b723a/"
            target="_blank"
          >
            <LinkeIn color="#006C26" className="cursor-pointer" />
          </Link>
        </div>
      </div>

      <div className="gap-[24px]  flex flex-wrap sm:flex-row flex-col justify-center  sm:pb-[80px] pb-[24px] m-auto ">
        <div className="w-[356px]  flex justify-center  m-auto">
          <CardInfo
            title="Nuestra oficina"
            description="Calle 48, Num 877, 3er piso, oficina 309. La Plata. 
Buenos Aires, Argentina"
            icon={<Oficina className="text-primary-dark" />}
          />
        </div>
        <div className="w-[356px] flex justify-center m-auto">
          <CardInfo
            title="Contacto"
            description={`Teléfono: +54 9 1124084508 Mail: tuexpedienteitaliano@gmail.com`}
            icon={<Telefono className="text-primary-dark" />}
          />
        </div>
      </div>

      <div className="px-[20px] pb-[40px]">
        <Maps />
      </div>
    </div>
  );
};
export default Contacto;
