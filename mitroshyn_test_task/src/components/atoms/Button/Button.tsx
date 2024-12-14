import React from 'react';
import clsx from 'clsx';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary';
  size?: 'small' | 'medium' | 'large';
  isDisabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  variant = 'primary',
  size = 'medium',
  isDisabled = false,
  onClick,
  children,
  className,
}) => {
  const baseClasses = 'rounded-lg font-semibold focus:outline-none transition ease-in-out duration-300';
  const variantClasses = {
    primary: 'bg-green text-white hover:bg-darkGreen disabled:bg-darkGreen',
  };
  const sizeClasses = {
    small: 'px-2 h-[40px] body-lg',
    medium: 'px-4 h-[64px] body-lg-bold',
    large: 'px-6 h-[70px] body-lg',
  };

  const buttonClasses = clsx(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    isDisabled && 'cursor-not-allowed',
    className
  );

  return (
    <button type={type} className={buttonClasses} onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  );
};

export default Button;