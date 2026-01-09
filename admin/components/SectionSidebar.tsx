import React from 'react';
import { FileText, BarChart3, Target, MessageSquareQuote, Users, DollarSign } from 'lucide-react';
import { CMSSection } from '../types';

interface SectionSidebarProps {
  sections: CMSSection[];
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  document: <FileText className="w-5 h-5" />,
  chart: <BarChart3 className="w-5 h-5" />,
  target: <Target className="w-5 h-5" />,
  trophy: <BarChart3 className="w-5 h-5" />,
  quote: <MessageSquareQuote className="w-5 h-5" />,
  users: <Users className="w-5 h-5" />,
  user: <Users className="w-5 h-5" />,
  scissors: <FileText className="w-5 h-5" />,
  dollar: <DollarSign className="w-5 h-5" />,
  tag: <FileText className="w-5 h-5" />,
};

export const SectionSidebar: React.FC<SectionSidebarProps> = ({ sections, activeSection, onSectionChange }) => {
  return (
    <div className="w-80 bg-black border-r border-neutral-800 p-6 sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto">
      <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-6">
        Page Sections
      </h3>
      
      <div className="space-y-2">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${
              activeSection === section.id
                ? 'bg-yellow-400 text-black'
                : 'bg-neutral-900 text-white hover:bg-neutral-800'
            }`}
          >
            {iconMap[section.icon] || <FileText className="w-5 h-5" />}
            <span className="uppercase tracking-wide">{section.title}</span>
          </button>
        ))}
      </div>

      <div className="mt-8 p-4 bg-yellow-400/10 border border-yellow-400/30 rounded-xl">
        <div className="flex items-start gap-2 mb-2">
          <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-black text-xs font-bold">!</span>
          </div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-yellow-400">
            Editor Tip
          </h4>
        </div>
        <p className="text-xs text-neutral-400 leading-relaxed">
          Changes are synced in real-time to open website tabs for instant visual feedback.
        </p>
      </div>
    </div>
  );
};
