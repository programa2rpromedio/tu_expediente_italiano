import Image from 'next/image';
import Button from './Button';

export default function AdviseCTA() {
  return (
    <section className="relative w-full py-[60px] ">
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto mb-[27px] flex max-w-[554px] flex-col gap-4 px-[40px] text-center lg:px-0 ">
          <h2 className="text-h2 text-neutral-dark">¡Asesorate con nosotros!</h2>
          <p>
            Nos capacitamos constantemente en todos las actualizaciones de la ciudadanía italiana.
            Contamos con amplia experiencia en el campo y con Estudio en Italia, si tu caso o
            requerimiento es vía judicial.
          </p>
        </div>
        <Button
          style="primary"
          className="mx-auto w-max! text-nowrap cursor-pointer"
          onClick={() => window.open('https://wa.me/5491124084508')}
        >
          Quiero una asesoría
        </Button>
      </div>
      <div className="absolute bottom-[70px] left-0 hidden lg:block">
        <Image
          src={'/franjas.svg'}
          alt="franjas con los colores de la bandera de Italia."
          width={350}
          height={24}
          className="h-[12px] w-[92px] lg:h-[24px] lg:w-[350px]"
        />
      </div>
      <div className="absolute top-[29px] right-0 hidden lg:block">
        <Image
          src={'/franjas.svg'}
          alt="franjas con los colores de la bandera de Italia."
          className="h-[12px] w-[92px] scale-x-[-1] scale-y-[-1] lg:h-[24px] lg:w-[350px]"
          width={350}
          height={24}
        />
      </div>
    </section>
  );
}
