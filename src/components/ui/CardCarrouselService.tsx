import { CardCarrouselProps } from '@/lib/types';
import Image from 'next/image';

export default function CardCarrousel({ imgSrc, alt, title }: CardCarrouselProps) {
  return (
    <div className="bg-neutral-extra-light h-[310px] w-[322px] overflow-hidden rounded-[20px] lg:h-[396px] lg:w-[413px]">
      <div className="overflow-hidden min-[330px]:pb-4 lg:pb-6">
        <Image
          src={imgSrc}
          alt={alt}
          width={413}
          height={324}
          className="hidden h-[324px] w-[413px] rounded-[20px] object-cover lg:block"
        />
        <Image
          src={imgSrc}
          alt={alt}
          width={322}
          height={256}
          className="h-[256px] w-[322px] rounded-[20px] object-cover lg:hidden"
        />
      </div>
      <div className="px-4 text-center md:pb-4 lg:px-6 lg:pb-6">
        <h3 className="font-amaranth text-[18px] lg:text-xl">{title}</h3>
      </div>
    </div>
  );
}
