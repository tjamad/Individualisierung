import React from 'react';

interface InvoiceProps {
  brandColor: string;
  logo?: string | null;
}

const CraftsmanInvoice: React.FC<InvoiceProps> = ({ brandColor, logo }) => {
  const bgColor = `${brandColor}10`;
  const accentColor = `${brandColor}90`;
  
  return (
    <div className="flex flex-col h-[420px]">
      <div className="rounded-lg p-3 h-full relative" style={{ backgroundColor: bgColor, border: `3px solid ${brandColor}` }}>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-3 left-3 w-3 h-3 rounded-full" style={{ backgroundColor: brandColor }}></div>
          <div className="absolute top-3 right-3 w-3 h-3 rounded-full" style={{ backgroundColor: brandColor }}></div>
          <div className="absolute bottom-3 left-3 w-3 h-3 rounded-full" style={{ backgroundColor: brandColor }}></div>
          <div className="absolute bottom-3 right-3 w-3 h-3 rounded-full" style={{ backgroundColor: brandColor }}></div>
        </div>
        <div className="pb-4 mb-4 flex justify-between items-center" style={{ borderBottom: `3px solid ${brandColor}` }}>
          <div className="flex items-center gap-3">
            {logo && <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />}
            <div><div className="text-lg font-bold uppercase tracking-wider" style={{ color: brandColor }}>Müller Gartenbau</div></div>
          </div>
        </div>
        <div className="mb-6 p-3 rounded relative" style={{ backgroundColor: `${brandColor}20`, border: `2px solid ${brandColor}` }}>
          <div className="text-lg font-bold uppercase tracking-wider" style={{ color: brandColor }}>Rechnung</div>
          <div className="text-sm uppercase tracking-widest" style={{ color: accentColor }}>#2024-001</div>
        </div>
        <div className="space-y-3 mb-6">
          <div className="flex justify-between items-center p-3 uppercase relative" style={{ borderBottom: `2px solid ${brandColor}20` }}>
            <div><span style={{ color: brandColor }}>Gartengestaltung</span><div className="text-xs normal-case mt-1" style={{ color: accentColor }}>8 Stunden à € 50,00</div></div>
            <span className="font-bold" style={{ color: brandColor }}>€ 400,00</span>
          </div>
          <div className="flex justify-between items-center p-3 uppercase relative" style={{ borderBottom: `2px solid ${brandColor}20` }}>
            <div><span style={{ color: brandColor }}>Pflanzarbeiten</span><div className="text-xs normal-case mt-1" style={{ color: accentColor }}>16 Stunden à € 50,00</div></div>
            <span className="font-bold" style={{ color: brandColor }}>€ 800,00</span>
          </div>
          <div className="flex justify-between items-center p-3 uppercase font-bold rounded relative overflow-hidden" style={{ backgroundColor: brandColor }}>
            <div className="absolute top-0 right-0 w-20 h-20 opacity-10 bg-white" style={{ transform: 'rotate(45deg) translate(30px, -30px)' }}></div>
            <div><span className="text-white">Gesamt</span><div className="text-xs normal-case mt-1 text-white opacity-80">Inkl. MwSt.</div></div>
            <span className="text-white">€ 1.200,00</span>
          </div>
        </div>
        <div className="text-center mt-auto pt-3 relative" style={{ borderTop: `3px solid ${brandColor}` }}></div>
      </div>
    </div>
  );
};

export default CraftsmanInvoice;