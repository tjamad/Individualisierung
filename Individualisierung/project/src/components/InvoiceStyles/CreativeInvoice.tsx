import React from 'react';
import { Calendar } from 'lucide-react';

interface InvoiceProps {
  brandColor: string;
  logo?: string | null;
}

const CreativeInvoice: React.FC<InvoiceProps> = ({ brandColor, logo }) => {
  const bgColor = `${brandColor}10`;
  const accentColor = `${brandColor}80`;
  
  return (
    <div className="flex flex-col h-[420px]">
      <div className="rounded-lg p-3 h-full bg-white">
        <div className="pb-4 mb-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            {logo && <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />}
            <div><div className="text-lg font-bold" style={{ color: brandColor }}>Müller Gartenbau</div></div>
          </div>
        </div>
        <div className="mb-6 relative">
          <div className="inline-block px-4 py-1 rounded-full text-white text-lg font-bold" style={{ backgroundColor: brandColor }}>RECHNUNG</div>
          <div className="mt-2 flex items-center gap-1" style={{ color: accentColor }}><Calendar size={14} /><span className="text-sm">15. März 2024</span></div>
        </div>
        <div className="space-y-3 mb-6">
          <div className="p-3 rounded-xl relative overflow-hidden" style={{ backgroundColor: bgColor }}>
            <div className="absolute top-0 right-0 w-16 h-16 opacity-10" style={{ backgroundColor: brandColor, transform: 'rotate(45deg) translate(20px, -20px)' }}></div>
            <div className="flex justify-between items-center">
              <div><span style={{ color: brandColor }}>Gartengestaltung</span><div className="text-xs mt-1" style={{ color: accentColor }}>8 Stunden à € 50,00</div></div>
              <span className="font-medium" style={{ color: brandColor }}>€ 400,00</span>
            </div>
          </div>
          <div className="p-3 rounded-xl relative overflow-hidden" style={{ backgroundColor: bgColor }}>
            <div className="absolute top-0 right-0 w-16 h-16 opacity-10" style={{ backgroundColor: brandColor, transform: 'rotate(45deg) translate(20px, -20px)' }}></div>
            <div className="flex justify-between items-center">
              <div><span style={{ color: brandColor }}>Pflanzarbeiten</span><div className="text-xs mt-1" style={{ color: accentColor }}>16 Stunden à € 50,00</div></div>
              <span className="font-medium" style={{ color: brandColor }}>€ 800,00</span>
            </div>
          </div>
          <div className="p-3 rounded-xl relative overflow-hidden" style={{ backgroundColor: brandColor }}>
            <div className="absolute top-0 right-0 w-16 h-16 opacity-10 bg-white" style={{ transform: 'rotate(45deg) translate(20px, -20px)' }}></div>
            <div className="flex justify-between items-center">
              <div><span className="text-white font-bold">Gesamt</span><div className="text-xs mt-1 text-white opacity-80">Inkl. MwSt.</div></div>
              <span className="text-white font-bold">€ 1.200,00</span>
            </div>
          </div>
        </div>
        <div className="text-center mt-auto pt-3 relative"></div>
      </div>
    </div>
  );
};

export default CreativeInvoice;