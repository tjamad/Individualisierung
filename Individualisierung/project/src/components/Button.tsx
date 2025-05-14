import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  disabled = false,
  icon,
  className = '',
}) => {
  const baseStyles = "px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center";
  
  const variantStyles = {
    primary: "bg-navy-700 text-white hover:bg-navy-800 focus:ring-4 focus:ring-navy-300",
    secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-4 focus:ring-gray-300",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;