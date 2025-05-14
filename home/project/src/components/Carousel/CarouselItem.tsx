import React from 'react';

interface CarouselItemProps {
  isActive: boolean;
  onClick: () => void;
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ 
  isActive, 
  onClick, 
  title,
  icon,
  children 
}) => {
  return (
    <div 
      className={`carousel-item transition-all duration-300 ${
        isActive 
          ? 'scale-100 opacity-100 cursor-default' 
          : 'scale-95 opacity-70 cursor-pointer hover:opacity-90 hover:scale-97'
      }`}
      onClick={!isActive ? onClick : undefined}
    >
      <div className="bg-white rounded-xl overflow-hidden shadow-md h-full flex flex-col">
        <div className="bg-gray-50 px-4 py-2 border-b border-gray-100">
          <div className="flex items-center gap-2">
            {icon}
            <h3 className="text-navy-800 font-medium truncate">{title}</h3>
          </div>
        </div>
        <div className="p-3 flex-grow overflow-hidden">
          {children}
        </div>
        {isActive && (
          <div className="bg-navy-50 border-t border-navy-100 p-2 text-center">
            <p className="text-navy-600 text-sm font-medium">Ausgewählt</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarouselItem;