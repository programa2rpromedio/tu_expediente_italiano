import { CardCarrouselProps } from '@/lib/types';
import Image from 'next/image';

export default function CardCarrousel({
  imgSrc,
  alt,
  title,
}: CardCarrouselProps) {
  return (
    <div className='lg:w-[413px] w-[322px] lg:h-[396px] h-[310px] rounded-[20px] overflow-hidden bg-neutral-extra-light'>
      <div className='lg:pb-6 min-[330px]:pb-4 overflow-hidden'>
        <Image
          src={imgSrc}
          alt={alt}
          width={413}
          height={324}
          className='lg:block hidden  w-[413px] h-[324px] object-cover rounded-[20px]'
        />
        <Image
          src={imgSrc}
          alt={alt}
          width={322}
          height={256}
          className='lg:hidden w-[322px] h-[256px] object-cover rounded-[20px]'
        />
      </div>
      <div className='lg:px-6 lg:pb-6 md:pb-4  px-4 text-center'>
        <h3 className='font-amaranth lg:text-xl text-[18px] '>{title}</h3>
      </div>
    </div>
  );
}
