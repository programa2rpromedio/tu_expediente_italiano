import { IconProps } from '@/lib/types';

export default function ArrowUp({ className, onClick }: IconProps) {
  return (
    <svg
      width="63"
      height="63"
      viewBox="0 0 63 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <rect y="0.00012207" width="63" height="63" rx="31.5" fill="#05AB3F" />
      <path
        d="M42.9144 27.2581L34.3284 18.6721C33.5783 17.9222 32.5611 17.501 31.5004 17.501C30.4398 17.501 29.4225 17.9222 28.6724 18.6721L20.0864 27.2581L22.9144 30.0861L29.5004 23.5001V45.5001H33.5004V23.5001L40.0864 30.0861L42.9144 27.2581Z"
        fill="#323437"
      />
    </svg>
  );
}
