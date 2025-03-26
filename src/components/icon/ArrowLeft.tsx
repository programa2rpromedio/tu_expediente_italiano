import { IconProps } from '@/lib/types';

export default function ArrowLeft({ className, onClick }: IconProps) {
  return (
    <svg
      width='40'
      height='40'
      viewBox='0 0 40 40'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      onClick={onClick}
    >
      <path
        d='M22.9584 31.1783L14.1368 22.3567C13.5119 21.7316 13.1608 20.8839 13.1608 20C13.1608 19.1161 13.5119 18.2684 14.1368 17.6433L22.9584 8.82166L25.3151 11.1783L16.5001 20L25.3218 28.8217L22.9584 31.1783Z'
        fill='currentColor'
      />
    </svg>
  );
}
