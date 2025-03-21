export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  style?: 'primary' | 'outline' | undefined;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
