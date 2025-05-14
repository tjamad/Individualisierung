import React from 'react';
import * as Popover from '@radix-ui/react-popover';
import { HexColorPicker } from 'react-colorful';
import { Palette, RotateCcw } from 'lucide-react';

interface ColorPickerProps {
  color: string | null;
  onChange: (color: string | null) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ color, onChange }) => {
  if (color) {
    return (
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <Popover.Root>
            <Popover.Trigger asChild>
              <button
                className="w-10 h-10 rounded-lg shadow-sm border border-gray-200 flex items-center justify-center hover:shadow-md transition-shadow"
                style={{ backgroundColor: color }}
                aria-label="Pick color"
              >
                <Palette className="text-white" size={20} />
              </button>
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content className="bg-white p-3 rounded-lg shadow-xl" sideOffset={5}>
                <HexColorPicker color={color} onChange={(newColor) => onChange(newColor)} />
                <Popover.Arrow className="fill-white" />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
          <button
            onClick={() => onChange(null)}
            className="w-8 h-8 bg-white rounded-full border border-gray-200 flex items-center justify-center active:bg-gray-100"
            title="Farbe zurücksetzen"
          >
            <RotateCcw size={14} className="text-gray-700" />
          </button>
        </div>
        <span className="text-sm font-medium text-gray-500 uppercase">{color}</span>
      </div>
    );
  }

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          className="px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm active:bg-gray-50 flex items-center gap-2"
        >
          <Palette size={18} className="text-gray-600" />
          <span className="text-sm text-gray-600">Farbe wählen</span>
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="bg-white p-3 rounded-lg shadow-xl" sideOffset={5}>
          <HexColorPicker color="#132C63" onChange={(newColor) => onChange(newColor)} />
          <Popover.Arrow className="fill-white" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default ColorPicker;