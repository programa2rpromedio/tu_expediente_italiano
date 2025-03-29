import { CardInfoProps } from '@/lib/types';

export default function CardInfo({ title, description, icon }: CardInfoProps) {
  return (
    <div className='  flex flex-col items-center gap-[10px] rounded-[10px] max-[320px]:px-[20px] py-[26px] px-[54px] lg:py-[24px] lg:px-[16px] bg-primary-extra-light'>
      {icon}
      <h3 className='font-amaranth text-xl'>{title}</h3>
      <p className='text-neutral-dark font-dm-sans text-[18px] text-center'>
        {description}
      </p>
    </div>
  );
}
