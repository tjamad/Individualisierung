import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  children: React.ReactNode[];
  activeIndex: number;
  onChange: (index: number) => void;
}

const Carousel: React.FC<CarouselProps> = ({ children, activeIndex, onChange }) => {
  const [translateX, setTranslateX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    if (carouselRef.current && itemsRef.current[activeIndex]) {
      const containerWidth = carouselRef.current.offsetWidth;
      const itemEl = itemsRef.current[activeIndex];
      if (itemEl) {
        const itemWidth = itemEl.offsetWidth;
        const itemOffsetLeft = itemEl.offsetLeft;
        
        const itemCenter = itemOffsetLeft + itemWidth / 2;
        const containerCenter = containerWidth / 2;
        let newTranslateX = containerCenter - itemCenter;
        
        // Prevent over-scrolling
        const maxTranslate = 0;
        const minTranslate = containerWidth - (itemsRef.current.reduce((total, item) => {
          return total + (item?.offsetWidth || 0);
        }, 0) + (children.length - 1) * 16); // 16px is gap between items
        
        newTranslateX = Math.min(maxTranslate, Math.max(newTranslateX, minTranslate));
        setTranslateX(newTranslateX);
      }
    }
  }, [activeIndex, children.length]);

  const goToPrev = () => {
    if (activeIndex > 0) {
      onChange(activeIndex - 1);
    }
  };

  const goToNext = () => {
    if (activeIndex < children.length - 1) {
      onChange(activeIndex + 1);
    }
  };

  return (
    <div className="relative w-full my-6">
      <div className="overflow-hidden" ref={carouselRef}>
        <div 
          className="flex gap-4 transition-transform duration-500 ease-out"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {React.Children.map(children, (child, index) => (
            <div 
              ref={(el) => itemsRef.current[index] = el} 
              className="flex-shrink-0" 
              style={{ width: '250px', maxWidth: '80vw' }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
      
      <button 
        onClick={goToPrev}
        disabled={activeIndex === 0}
        className={`absolute left-0 top-1/2 -translate-y-1/2 -ml-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-navy-700 z-10 transition-opacity ${
          activeIndex === 0 ? 'opacity-40 cursor-not-allowed' : 'opacity-100 hover:bg-gray-50'
        }`}
        aria-label="Previous"
      >
        <ChevronLeft size={20} />
      </button>
      
      <button 
        onClick={goToNext}
        disabled={activeIndex === children.length - 1}
        className={`absolute right-0 top-1/2 -translate-y-1/2 -mr-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-navy-700 z-10 transition-opacity ${
          activeIndex === children.length - 1 ? 'opacity-40 cursor-not-allowed' : 'opacity-100 hover:bg-gray-50'
        }`}
        aria-label="Next"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default Carousel;