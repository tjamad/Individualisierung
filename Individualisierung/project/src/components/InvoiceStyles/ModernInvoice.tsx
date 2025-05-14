import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';

interface InvoiceProps {
  brandColor: string;
  logo?: string | null;
}

const ModernInvoice: React.FC<InvoiceProps> = ({ brandColor, logo }) => {
  const bgColor = `${brandColor}10`;
  const accentColor = `${brandColor}70`;
  
  return (
    <div className="flex flex-col h-[420px]">
      <div className="rounded-lg p-3 bg-white h-full">
        <div className="pb-4 mb-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            {logo && <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />}
            <div><div className="text-lg font-bold tracking-tight" style={{ color: brandColor }}>Müller Gartenbau</div></div>
          </div>
        </div>
        <div className="flex justify-between items-end mb-6">
          <div><div className="text-2xl font-bold tracking-tight" style={{ color: brandColor }}>RECHNUNG</div><div className="text-sm" style={{ color: accentColor }}>#2024-001</div></div>
          <div className="text-right"><div className="text-sm font-medium" style={{ color: brandColor }}>15. März 2024</div><div className="text-xs" style={{ color: accentColor }}>Fällig: 29. März 2024</div></div>
        </div>
        <div className="space-y-1 mb-6">
          <div className="flex justify-between items-center py-3" style={{ borderBottom: `1px solid ${bgColor}` }}>
            <div className="flex items-center gap-2"><ArrowRight size={16} style={{ color: brandColor }} /><div><div className="font-medium" style={{ color: brandColor }}>Gartengestaltung</div><div className="text-xs mt-1" style={{ color: accentColor }}>8 Stunden à € 50,00</div></div></div>
            <span className="font-medium" style={{ color: brandColor }}>€ 400,00</span>
          </div>
          <div className="flex justify-between items-center py-3" style={{ borderBottom: `1px solid ${bgColor}` }}>
            <div className="flex items-center gap-2"><ArrowRight size={16} style={{ color: brandColor }} /><div><div className="font-medium" style={{ color: brandColor }}>Pflanzarbeiten</div><div className="text-xs mt-1" style={{ color: accentColor }}>16 Stunden à € 50,00</div></div></div>
            <span className="font-medium" style={{ color: brandColor }}>€ 800,00</span>
          </div>
          <div className="flex justify-between items-center p-3 mt-2 rounded-lg" style={{ backgroundColor: bgColor }}>
            <div><div className="font-bold" style={{ color: brandColor }}>Gesamt</div><div className="text-xs mt-1" style={{ color: accentColor }}>Inkl. MwSt.</div></div>
            <span className="font-bold text-lg" style={{ color: brandColor }}>€ 1.200,00</span>
          </div>
        </div>
        <div className="text-center mt-auto pt-3"><div className="inline-flex items-center gap-2"><Clock size={14} style={{ color: accentColor }} /><Clock size={14} style={{ color: accentColor }} /></div></div>
      </div>
    </div>
  );
};

export default ModernInvoice;