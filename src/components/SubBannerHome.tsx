import Image from 'next/image';
import Button from './ui/Button';

export default function SubBannerHome() {
  return (
    <section className="bg-neutral-extra-light relative flex h-[199px] justify-center py-[37px] shadow-[61px_4px_39.4px_0px_#60606040]">
      <div className="flex flex-col items-center gap-[25px]">
        <h2 className="lg:text-h2 text-2xl max-[400px]:text-[18px]">
          ¡Si querés, podemos y lo hacemos!
        </h2>
        <Button
          style="primary"
          className="lg:text-btn w-[171px] cursor-pointer text-[16px]! text-nowrap lg:w-[257px]!"
        >
          Consultanos ahora
        </Button>
      </div>
      <div className="absolute bottom-[37px] left-0">
        <Image
          src={'/franjas.svg'}
          alt="franjas con los colores de la bandera de Italia."
          width={350}
          height={24}
          className="h-[12px] w-[92px] lg:h-[24px] lg:w-[350px]"
        />
      </div>
      <div className="absolute top-[20.5px] right-0">
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
