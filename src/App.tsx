import React, { useState, lazy, Suspense } from 'react';
import ProgressIndicator from './components/ProgressIndicator.tsx';
import CloseButton from './components/CloseButton';
import Button from './components/Button';
import { ChevronRight } from 'lucide-react';

const DesignStyleCarousel = lazy(() => import('./components/Carousel/DesignStyleCarousel'));
const ColorPicker = lazy(() => import('./components/ColorPicker'));
const LogoUpload = lazy(() => import('./components/LogoUpload'));

function App() {
  const [selectedStyle, setSelectedStyle] = useState('classic');
  const [brandColor, setBrandColor] = useState<string | null>(null);
  const [logo, setLogo] = useState<string | null>(null);

  const handleStyleSelect = (style: string) => {
    setSelectedStyle(style);
  };

  const handleColorChange = (color: string | null) => {
    setBrandColor(color);
  };

  const handleLogoChange = (logoUrl: string | null) => {
    setLogo(logoUrl);
  };

  const handleColorExtracted = (color: string) => {
    setBrandColor(color);
  };

  const handleClose = () => {
    console.log('Close button clicked');
  };

  const handleBack = () => {
    console.log('Back button clicked');
  };

  const handleContinue = () => {
    console.log('Continue with style:', selectedStyle);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-800 to-purple-900 flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="p-6 flex justify-between items-center">
          <ProgressIndicator current={2} total={3} />
          
          <div className="ml-4 flex-grow">
            <h1 className="text-2xl font-bold text-navy-800">
              Wähle deinen Stil
            </h1>
          </div>
          
          <CloseButton onClick={handleClose} />
        </div>
        
        {/* Content */}
        <div className="px-6 py-4">
          <Suspense fallback={<div className="animate-pulse bg-gray-200 h-10 rounded-lg w-32"></div>}>
            <div className="flex flex-wrap items-center gap-6 mb-6">
              <LogoUpload 
                onLogoChange={handleLogoChange}
                onColorExtracted={handleColorExtracted}
                logo={logo}
              />
              <ColorPicker color={brandColor} onChange={handleColorChange} />
            </div>
          </Suspense>
          
          <Suspense fallback={<div className="animate-pulse bg-gray-200 h-[420px] rounded-lg w-full"></div>}>
            <div className="animate-fadeIn">
              <DesignStyleCarousel 
                onStyleSelect={handleStyleSelect} 
                brandColor={brandColor}
                logo={logo}
              />
            </div>
          </Suspense>
        </div>
        
        {/* Footer */}
        <div className="p-6 flex justify-between items-center border-t border-gray-200">
          <Button variant="secondary" onClick={handleBack}>
            Zurück
          </Button>
          
          <Button 
            variant="primary" 
            onClick={handleContinue}
            icon={<ChevronRight size={20} />}
            className="min-w-32"
          >
            Weiter
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;