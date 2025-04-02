import Facebook from '@/components/icon/Facebook';
import Instagram from '@/components/icon/Instagram';
import LinkeIn from '@/components/icon/LinkeIn';
import Oficina from '@/components/icon/Oficina';
import Telefono from '@/components/icon/Telefono';
import Maps from '@/components/Maps';
import ThanksForContacting from '@/components/ThanksForContacting';
import CardInfo from '@/components/ui/CardInfo';
import Link from 'next/link';

const Agradecimientos = () => {
  return (
    <div>
      <ThanksForContacting />

      <div className="align-center flex flex-col justify-center gap-[24px] py-[80px] text-center">
        <h2 className="text-text-green sm:text-[28px] text-[20px] font-bold ">
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

      <div className="gap-[24px]  flex flex-wrap sm:flex-row flex-col justify-center  sm:pb-[80px] pb-[24px] items-center sm:items-stretch">
        <div className="w-[356px]  flex justify-center">
          <CardInfo
            title="Nuestra oficina"
            description="Calle 48, Num 877."
            icon={<Oficina className="text-primary-dark" />}
          />
        </div>
        <div className="w-[356px] flex justify-center">
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

export default Agradecimientos;
