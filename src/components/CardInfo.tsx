import { CardInfoProps } from '@/lib/types';

export default function CardInfo({ title, description, icon }: CardInfoProps) {
  return (
    <div className=' sm:w-[356px] w-[319px] h-[181px] flex flex-col justify-center items-center gap-[10px] rounded-[10px] lg:py-[24px] lg:px-[16px] bg-primary-extra-light'>
  {icon}
  <h3 className='font-amaranth text-xl text-center'>{title}</h3>
  <p className='text-neutral-dark font-dm-sans text-[18px] text-center'>
    {description}
  </p>
</div>

  );
}
