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
      <div className="relative bg-slate-900 w-full max-w-4xl h-[90vh] rounded-2xl flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Toolbar */}
        <div className="flex items-center justify-between p-4 border-b border-slate-700 bg-slate-800 no-print">
          <h2 className="text-white font-semibold flex items-center gap-2">
            <FileText size={18} className="text-primary-500" />
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
              className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white rounded-lg text-sm font-medium transition-colors shadow-lg shadow-primary-900/20"
            >
              <Download size={16} />
              <span className="hidden sm:inline">Download PDF</span>
            </a>
            
            <div className="w-px h-6 bg-slate-600 mx-1"></div>

            <button 
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Resume View - PDF Display */}
        <div className="flex-1 overflow-hidden bg-slate-900/50">
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