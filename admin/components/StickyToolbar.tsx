import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, Lightbulb } from 'lucide-react';

interface StickyToolbarProps {
  pageId: string;
  pageName: string;
  onSave: () => void;
}

export const StickyToolbar: React.FC<StickyToolbarProps> = ({ pageId, pageName, onSave }) => {
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 z-50 bg-black border-b border-neutral-800 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          {/* Clickable Logo */}
          <button
            onClick={() => navigate('/admin/dashboard')}
            className="relative flex items-center cursor-pointer hover:opacity-80 transition-opacity"
            aria-label="Go to Admin Dashboard"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-yellow-400">
              <Lightbulb size={20} strokeWidth={2.5} className="fill-current" />
            </div>
            <div className="flex items-start pt-2">
              <span className="font-script text-3xl text-white leading-none">Impact</span>
              <span className="font-sans text-sm font-bold text-neutral-400 -mt-1 ml-1">224</span>
            </div>
          </button>

          {/* Page Name */}
          <div className="text-neutral-500 text-sm font-medium border-l border-neutral-800 pl-6">
            Editing: <span className="text-white font-bold">{pageName}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/admin/dashboard')}
            className="flex items-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Console
          </button>
          
          <button
            onClick={onSave}
            className="flex items-center gap-2 px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-black rounded-lg transition-colors font-bold"
          >
            <Save className="w-4 h-4" />
            Publish Draft
          </button>
        </div>
      </div>
    </div>
  );
};
