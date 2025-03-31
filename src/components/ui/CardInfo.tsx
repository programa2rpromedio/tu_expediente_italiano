import { CardInfoProps } from '@/lib/types';

export default function CardInfo({ title, description, icon }: CardInfoProps) {
  return (
    <div className="bg-primary-extra-light flex flex-col items-center gap-[10px] rounded-[10px] px-[54px] py-[26px] w-full   max-[320px]:px-[20px] lg:px-[16px] lg:py-[24px]">
      {icon}
      <h3 className="font-amaranth text-xl">{title}</h3>
      <p className="text-neutral-dark font-dm-sans text-center text-[18px]">{description}</p>
    </div>
  );
}
