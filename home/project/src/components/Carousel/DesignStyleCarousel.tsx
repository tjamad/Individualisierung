import React, { useState } from 'react';
import Carousel from './Carousel';
import CarouselItem from './CarouselItem';
import { SmartInvoice, ClassicInvoice, CreativeInvoice, CraftsmanInvoice, ModernInvoice } from '../InvoiceStyles';
import { TreePine, FileText, Palette, Hammer, Zap } from 'lucide-react';

interface DesignStyleCarouselProps {
  onStyleSelect: (style: string) => void;
  brandColor: string | null;
  logo: string | null;
}

const designStyles = [
  {
    id: 'smart',
    name: 'Garten & Natur',
    component: SmartInvoice,
    defaultColor: '#16A34A',
    icon: TreePine
  },
  {
    id: 'classic',
    name: 'Klassisch & Klar',
    component: ClassicInvoice,
    defaultColor: '#132C63',
    icon: FileText
  },
  {
    id: 'creative',
    name: 'Kreativ & Freundlich',
    component: CreativeInvoice,
    defaultColor: '#6D28D9',
    icon: Palette
  },
  {
    id: 'craftsman',
    name: 'Handwerklich & Robust',
    component: CraftsmanInvoice,
    defaultColor: '#92400E',
    icon: Hammer
  },
  {
    id: 'modern',
    name: 'Modern & Direkt',
    component: ModernInvoice,
    defaultColor: '#1D4ED8',
    icon: Zap
  },
];

const DesignStyleCarousel: React.FC<DesignStyleCarouselProps> = ({ onStyleSelect, brandColor, logo }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handleStyleChange = (index: number) => {
    setActiveIndex(index);
    onStyleSelect(designStyles[index].id);
  };
  
  return (
    <div className="w-full">
      <Carousel activeIndex={activeIndex} onChange={handleStyleChange}>
        {designStyles.map((style, index) => {
          const StyleComponent = style.component;
          const Icon = style.icon;
          return (
            <CarouselItem 
              key={style.id}
              isActive={index === activeIndex}
              onClick={() => handleStyleChange(index)}
              title={style.name}
              icon={<Icon size={18} style={{ color: brandColor || style.defaultColor }} />}
            >
              <div className="h-full overflow-hidden">
                <StyleComponent 
                  brandColor={brandColor || style.defaultColor} 
                  logo={logo}
                />
              </div>
            </CarouselItem>
          );
        })}
      </Carousel>
      
      <div className="flex justify-center mt-4">
        {designStyles.map((style, index) => (
          <button
            key={style.id}
            className={`w-2 h-2 rounded-full mx-1 transition-all ${
              index === activeIndex ? 'bg-navy-700 w-6' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            onClick={() => handleStyleChange(index)}
            aria-label={`Select ${style.name}`}
          />
        ))}
      </div>
    </div>
  );
};

export default DesignStyleCarousel;