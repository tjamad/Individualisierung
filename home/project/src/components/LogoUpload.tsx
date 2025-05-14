import React, { useRef } from 'react';
import { Upload, X, Pencil } from 'lucide-react';
import ColorThief from 'colorthief';

interface LogoUploadProps {
  onLogoChange: (logo: string | null) => void;
  onColorExtracted: (color: string | null) => void;
  logo?: string | null;
}

const LogoUpload: React.FC<LogoUploadProps> = ({ onLogoChange, onColorExtracted, logo }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const logoUrl = URL.createObjectURL(file);
    onLogoChange(logoUrl);

    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = async () => {
      const colorThief = new ColorThief();
      const [r, g, b] = colorThief.getColor(img);
      const hexColor = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
      onColorExtracted(hexColor);
    };
    img.src = logoUrl;
  };

  const handleRemoveLogo = () => {
    onLogoChange(null);
    onColorExtracted(null);
  };

  if (logo) {
    return (
      <div className="flex items-center gap-2">
        <img 
          src={logo} 
          alt="Company Logo" 
          className="w-10 h-10 object-contain border border-gray-200 rounded-lg bg-white"
        />
        <div className="flex gap-2">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="w-8 h-8 bg-white rounded-full border border-gray-200 flex items-center justify-center active:bg-gray-100"
            title="Logo ändern"
          >
            <Pencil size={14} className="text-gray-700" />
          </button>
          <button
            onClick={handleRemoveLogo}
            className="w-8 h-8 bg-white rounded-full border border-gray-200 flex items-center justify-center active:bg-gray-100"
            title="Logo entfernen"
          >
            <X size={14} className="text-red-600" />
          </button>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={() => fileInputRef.current?.click()}
        className="px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm active:bg-gray-50 flex items-center gap-2"
      >
        <Upload size={18} className="text-gray-600" />
        <span className="text-sm text-gray-600">Logo hochladen</span>
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
};

export default LogoUpload;