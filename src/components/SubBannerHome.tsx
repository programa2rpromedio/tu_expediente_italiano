import Image from 'next/image';
import Button from './ui/Button';

export default function SubBannerHome() {
  return (
    <section className='relative h-[199px] flex  justify-center bg-neutral-extra-light py-[37px] shadow-[61px_4px_39.4px_0px_#60606040]'>
      <div className='flex flex-col items-center gap-[25px]'>
        <h2 className='text-h2'>¡Si querés, podemos y lo hacemos!</h2>
        <Button
          style='primary'
          className='w-[257px]! text-nowrap cursor-pointer'
        >
          Consultanos ahora
        </Button>
      </div>
      <div className='absolute bottom-[37px] left-0'>
        <Image
          src={'/franjas.svg'}
          alt='franjas con los colores de la bandera de Italia.'
          width={350}
          height={24}
        />
      </div>
      <div className='absolute top-[20.5px] right-0'>
        <Image
          src={'/franjas.svg'}
          alt='franjas con los colores de la bandera de Italia.'
          className='scale-x-[-1] scale-y-[-1]'
          width={350}
          height={24}
        />
      </div>
    </section>
  );
}
