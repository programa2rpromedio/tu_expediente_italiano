import { CardOpinionProps } from '@/lib/types';
import Star from '../icon/Star';

interface Props extends CardOpinionProps {
  className?: string;
}

export default function CardOpinion({ name, opinion, stars, className }: Props) {
  return (
    <div
      className={`bg-neutral-extra-light flex h-full flex-col gap-6 rounded-[10px] px-[15px] py-[20px] ${className}`}
    >
      <div className="flex flex-col gap-4">
        <h3 className="font-dm-sans text-xl font-semibold">{name}</h3>
        <div className="flex justify-center gap-2">
          {Array.from({ length: stars }).map((_, index) => (
            <Star key={index} />
          ))}
        </div>
      </div>
      <div className="flex-1">
        <p className="font-dm-sans text-xl font-normal">{opinion}</p>
      </div>
    </div>
  );
}
