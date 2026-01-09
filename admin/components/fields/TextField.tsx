import React from 'react';

interface TextFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const TextField: React.FC<TextFieldProps> = ({ label, value, onChange, placeholder }) => {
  return (
    <div className="mb-8">
      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
        {label}
        <span className="float-right text-neutral-600">TEXT FIELD</span>
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-6 py-4 bg-neutral-900 border border-neutral-800 rounded-xl text-white font-bold text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all hover:bg-neutral-850"
      />
    </div>
  );
};
