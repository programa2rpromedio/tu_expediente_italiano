import { IconProps } from '@/lib/types';

export default function Facebook({ className, onClick, color = '#F9F9F9' }: IconProps) {
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
      <circle cx="31.5" cy="31.5001" r="30.5" stroke={color} strokeWidth="2" />
      <path
        d="M27.1382 22.4413V26.4989H24.1644V31.4601H27.1382V46.2051H33.2423V31.4616H37.3398C37.3398 31.4616 37.7237 29.0829 37.9097 26.4812H33.2674V23.088C33.2674 22.5816 33.9319 21.8994 34.5904 21.8994H37.9186V16.7344H33.3944C26.9861 16.7344 27.1382 21.7001 27.1382 22.4413Z"
        fill={color}
      />
    </svg>
  );
}
