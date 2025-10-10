'use client';
import "./BasicButton.scss";

type ButtonType = 'button' | 'submit' | 'reset' | undefined;
type ButtonVariant = 'line' | 'fill';

interface BasicButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: ButtonType;
  variant?: ButtonVariant;
  className?: string;
}

// 조금 더 쉽게 할 수 있을 것 같다. if문 말고 다른 것은 없을까 
export default function BasicButton({ children, onClick, type='button', variant='fill', className }: BasicButtonProps) {
  
   const variantClass = `basic__button--${variant}`;
   const mergedClassName = `basic__button ${variantClass} ${className}`.trim();
  
    return (
    <button className={mergedClassName} onClick={onClick} type={type}  >
      {children}
    </button>
  );
}