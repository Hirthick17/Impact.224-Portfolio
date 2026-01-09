import React, { useRef } from 'react';
import { Upload } from 'lucide-react';

interface ImageUploadFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  specs?: string;
}

export const ImageUploadField: React.FC<ImageUploadFieldProps> = ({ label, value, onChange, specs }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    const validTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      alert('Please upload a PNG, JPG, or WEBP image');
      return;
    }

    // Validate file size (2MB max)
    if (file.size > 2 * 1024 * 1024) {
      alert('File size must be less than 2MB');
      return;
    }

    // Convert to base64 or use URL.createObjectURL
    const reader = new FileReader();
    reader.onloadend = () => {
      onChange(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="mb-8">
      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
        {label}
        <span className="float-right text-neutral-600">IMAGE FILE</span>
      </label>
      
      <div 
        onClick={() => fileInputRef.current?.click()}
        className="relative w-full aspect-video bg-neutral-900 border-2 border-dashed border-neutral-800 rounded-xl overflow-hidden cursor-pointer hover:border-yellow-400 transition-all group"
      >
        {value ? (
          <img src={value} alt="Preview" className="w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-neutral-600 group-hover:text-yellow-400 transition-colors">
            <Upload className="w-12 h-12 mb-2" />
            <p className="text-sm font-bold">Click to upload</p>
          </div>
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/png,image/jpeg,image/jpg,image/webp"
        onChange={handleFileChange}
        className="hidden"
      />

      {specs && (
        <p className="text-xs text-neutral-600 text-center mt-3 font-medium tracking-wider">
          {specs}
        </p>
      )}
    </div>
  );
};
