import React from 'react';
import { Edit3 } from 'lucide-react';

interface HTMLFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const HTMLField: React.FC<HTMLFieldProps> = ({ label, value, onChange, placeholder }) => {
  return (
    <div className="mb-8">
      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
        {label}
        <span className="float-right text-neutral-600">HTML FIELD</span>
      </label>
      <div className="relative">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={6}
          className="w-full px-6 py-4 bg-neutral-900 border border-neutral-800 rounded-xl text-white font-medium text-base leading-relaxed focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all hover:bg-neutral-850 resize-none"
        />
        <Edit3 className="absolute bottom-4 right-4 w-5 h-5 text-neutral-600 pointer-events-none" />
      </div>
    </div>
  );
};
