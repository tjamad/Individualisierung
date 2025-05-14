import React from 'react';
import { X } from 'lucide-react';

interface CloseButtonProps {
  onClick: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="w-12 h-12 rounded-full bg-navy-800 text-white flex items-center justify-center transition-all hover:bg-navy-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-500"
      aria-label="Close"
    >
      <X size={24} />
    </button>
  );
};

export default CloseButton;