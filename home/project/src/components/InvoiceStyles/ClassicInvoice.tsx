import React from 'react';
import { Calendar, CreditCard } from 'lucide-react';

interface InvoiceProps {
  brandColor: string;
  logo?: string | null;
}

const ClassicInvoice: React.FC<InvoiceProps> = ({ brandColor, logo }) => {
  const complementaryColor = '#718096';
  
  return (
    <div className="flex flex-col h-[420px]">
      <div className="border border-gray-200 rounded-lg p-3 bg-white h-full">
        <div className="pb-4 mb-4 flex justify-between items-center" style={{ borderBottom: `2px solid ${brandColor}` }}>
          <div className="flex items-center gap-3">
            {logo && <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />}
            <div><div className="text-lg font-serif font-bold" style={{ color: brandColor }}>Müller Gartenbau</div></div>
          </div>
        </div>
        <div className="mb-4 flex justify-between items-start">
          <div><div className="font-serif text-xl font-bold" style={{ color: brandColor }}>RECHNUNG</div><div className="text-sm" style={{ color: complementaryColor }}>#2024-001</div></div>
          <div className="text-right"><div className="flex items-center gap-1 text-sm mb-1" style={{ color: complementaryColor }}><Calendar size={14} /><span>15. März 2024</span></div><div className="flex items-center gap-1 text-sm" style={{ color: complementaryColor }}><CreditCard size={14} /><span>Fällig: 29. März 2024</span></div></div>
        </div>
        <table className="w-full mb-4">
          <thead><tr><th className="py-2 text-left text-sm font-medium" style={{ color: complementaryColor }}>Beschreibung</th><th className="py-2 text-right text-sm font-medium" style={{ color: complementaryColor }}>Betrag</th></tr></thead>
          <tbody>
            <tr className="border-b border-gray-100"><td className="py-3"><div className="font-medium" style={{ color: brandColor }}>Gartengestaltung</div><div className="text-sm" style={{ color: complementaryColor }}>8 Stunden à € 50,00</div></td><td className="py-3 text-right" style={{ color: brandColor }}>€ 400,00</td></tr>
            <tr className="border-b border-gray-100"><td className="py-3"><div className="font-medium" style={{ color: brandColor }}>Pflanzarbeiten</div><div className="text-sm" style={{ color: complementaryColor }}>16 Stunden à € 50,00</div></td><td className="py-3 text-right" style={{ color: brandColor }}>€ 800,00</td></tr>
            <tr><td className="py-3 font-serif font-bold text-lg" style={{ color: brandColor }}>Gesamt</td><td className="py-3 text-right font-serif font-bold text-lg" style={{ color: brandColor }}>€ 1.200,00</td></tr>
          </tbody>
        </table>
        <div className="text-center mt-auto pt-3" style={{ borderTop: `1px solid ${brandColor}` }}></div>
      </div>
    </div>
  );
};

export default ClassicInvoice;