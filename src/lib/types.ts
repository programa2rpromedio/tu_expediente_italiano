export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  style?: 'primary' | 'outline' | undefined;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface IconProps {
  className?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement> | undefined;
}

export interface CardCarrouselProps {
  imgSrc: string;
  alt: string;
  title: string;
}
export interface CardInfoProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}
