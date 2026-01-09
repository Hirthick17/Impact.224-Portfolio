import React from 'react';
import { CMSField } from '../types';
import { TextField } from './fields/TextField';
import { HTMLField } from './fields/HTMLField';
import { ImageUploadField } from './fields/ImageUploadField';

interface FieldRendererProps {
  field: CMSField;
  value: any;
  onChange: (value: any) => void;
  sectionId: string;
}

export const FieldRenderer: React.FC<FieldRendererProps> = ({ field, value, onChange, sectionId }) => {
  switch (field.type) {
    case 'text':
      return (
        <TextField
          label={field.label}
          value={value || ''}
          onChange={onChange}
          placeholder={field.placeholder}
        />
      );
    
    case 'html':
      return (
        <HTMLField
          label={field.label}
          value={value || ''}
          onChange={onChange}
          placeholder={field.placeholder}
        />
      );
    
    case 'image':
      return (
        <ImageUploadField
          label={field.label}
          value={value || ''}
          onChange={onChange}
          specs={field.specs}
        />
      );
    
    default:
      return null;
  }
};
