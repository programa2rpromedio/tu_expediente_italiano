import { IconProps } from '@/lib/types';

export default function ArrowRight({ className, onClick }: IconProps) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M18.0185 31.1783L15.6669 28.8217L24.4819 20L15.6669 11.1783L18.0252 8.82166L26.8335 17.6433C27.4584 18.2684 27.8095 19.1161 27.8095 20C27.8095 20.8839 27.4584 21.7316 26.8335 22.3567L18.0185 31.1783Z"
        fill="currentColor"
      />
    </svg>
  );
}
