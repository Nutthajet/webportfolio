import React from 'react';
import { X, Download, FileText } from 'lucide-react';
import { RESUME_URL } from '../constants';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity no-print" 
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative flex h-[90vh] w-full max-w-4xl flex-col overflow-hidden border border-stone-700 bg-[#111111] shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Toolbar */}
        <div className="flex items-center justify-between border-b border-stone-800 bg-stone-950 p-4 no-print">
          <h2 className="text-white font-semibold flex items-center gap-2">
            <FileText size={18} className="text-amber-200" />
            Resume Preview
          </h2>
          <div className="flex items-center gap-3">
            {/* Download PDF Button */}
            {/* Note: User must place 'resume.pdf' in the public/root folder for this to work */}
            <a 
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              download="Nutthajet_Foythong_Resume.pdf"
              className="flex items-center gap-2 bg-amber-200 px-4 py-2 text-sm font-medium text-stone-950 transition-colors hover:bg-amber-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200"
            >
              <Download size={16} />
              <span className="hidden sm:inline">Download PDF</span>
            </a>
            
            <div className="mx-1 h-6 w-px bg-stone-700"></div>

            <button 
              onClick={onClose}
              aria-label="Close resume preview"
              className="p-2 text-stone-400 transition-colors hover:bg-stone-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Resume View - PDF Display */}
        <div className="flex-1 overflow-hidden bg-stone-950/50">
          <iframe
            src={RESUME_URL}
            className="w-full h-full border-0"
            title="Resume PDF"
            style={{ minHeight: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
