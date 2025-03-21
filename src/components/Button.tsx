import { ButtonProps } from '@/lib/types';

const stylesBase =
  'w-[107px] h-[37px] px-[12px] py-[8px] md:w-[161px] md:h-[63px] md:px-[24px] md:py-[16px] text-btn flex justify-center items-center md:gap-2.5 rounded-[10px] focus:outline-none focus:ring-0 transition duration-300';

const styles = {
  primary:
    'bg-primary-regular text-white hover:bg-primary-dark disabled:bg-[#B2B2B2]',
  outline:
    'bg-transparent text-primary-regular border border-primary-regular hover:border-2 active:bg-primary-extra-light disabled:border-[#B2B2B2] disabled:border-[#B2B2B2] disabled:text-[#B2B2B2]',
};

export default function Button({
  className,
  children,
  disabled,
  style,
  type,
  onClick,
}: ButtonProps) {
  const btnStyle = style ? styles[style] : '';

  return (
    <button
      className={`${stylesBase} ${btnStyle}  ${className} `}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
