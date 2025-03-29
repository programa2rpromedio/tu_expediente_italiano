import { CardOpinionProps } from '@/lib/types';
import Star from '../icon/Star';

interface Props extends CardOpinionProps {
  className?: string;
}

export default function CardOpinion({
  name,
  opinion,
  stars,
  className,
}: Props) {
  return (
    <div
      className={`bg-neutral-extra-light rounded-[10px] py-[20px] px-[15px] flex flex-col gap-6 h-full ${className}`}
    >
      <div className='flex flex-col gap-4 '>
        <h3 className='font-dm-sans font-semibold text-xl'>{name}</h3>
        <div className='flex gap-2 justify-center'>
          {Array.from({ length: stars }).map((_, index) => (
            <Star key={index} />
          ))}
        </div>
      </div>
      <div className='flex-1'>
        <p className='font-dm-sans font-normal text-xl'>{opinion}</p>
      </div>
    </div>
  );
}
