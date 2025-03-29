import { CardCarrouselProps } from '@/lib/types';
import Image from 'next/image';

export default function CardService({
  imgSrc,
  alt,
  title,
}: CardCarrouselProps) {
  return (
    <div className='lg:w-[412px] w-[320px] lg:h-[317px] h-[307px] rounded-[20px] px-[10px] py-4 lg:p-4 overflow-hidden bg-neutral-extra-light hover:bg-primary-extra-light transition-all duration-300 cursor-pointer'>
      <div className='lg:pb-6 min-[330px]:pb-4 overflow-hidden'>
        <Image
          src={imgSrc}
          alt={alt}
          width={412}
          height={317}
          className='lg:block hidden  w-[380px] h-[240px] object-cover rounded-[10px]'
        />
        <Image
          src={imgSrc}
          alt={alt}
          width={320}
          height={256}
          className='lg:hidden w-[320px] h-[240px] object-cover rounded-[10px]'
        />
      </div>
      <div className='lg:px-6 lg:pb-6 md:pb-4  px-4 text-center'>
        <h3 className='font-amaranth lg:text-xl text-[18px] '>{title}</h3>
      </div>
    </div>
  );
}
