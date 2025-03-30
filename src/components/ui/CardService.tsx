'use client';
import { CardCarrouselProps } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

export default function CardService({ imgSrc, alt, title, slug }: CardCarrouselProps) {
  return (
    <Link href={`/servicios/servicio/${slug}`}>
      <div className="bg-neutral-extra-light hover:bg-primary-extra-light h-[307px] w-[320px] cursor-pointer overflow-hidden rounded-[20px] px-[10px] py-4 transition-all duration-300 lg:h-[317px] lg:w-[412px] lg:p-4">
        <div className="overflow-hidden min-[330px]:pb-4 lg:pb-6">
          <Image
            src={imgSrc}
            alt={alt}
            width={412}
            height={317}
            className="hidden h-[240px] w-[380px] rounded-[10px] object-cover lg:block"
          />
          <Image
            src={imgSrc}
            alt={alt}
            width={320}
            height={256}
            className="h-[240px] w-[320px] rounded-[10px] object-cover lg:hidden"
          />
        </div>
        <div className="px-4 text-center md:pb-4 lg:px-6 lg:pb-6">
          <h3 className="font-amaranth text-[18px] lg:text-xl">{title}</h3>
        </div>
      </div>
    </Link>
  );
}
