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
  color?: string;
  width?: string
height?: string
}

export interface CardCarrouselProps {
  imgSrc: string;
  alt: string;
  title: string;
  slug: string;
}
export interface CardInfoProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}
export interface CardOpinionProps {
  name: string;
  opinion: string;
  stars: number;
}

export interface DropdownServiceProps {
  titulo: string;
  children: React.ReactNode;
  open?: boolean;
}
