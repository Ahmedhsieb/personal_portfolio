import React, { useEffect } from 'react';
import { X } from 'lucide-react';
interface CyberpunkModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}
export function CyberpunkModal({
  isOpen,
  onClose,
  title,
  children
}: CyberpunkModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title">

      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fadeIn"
        aria-hidden="true" />


      {/* Modal */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-dark-secondary border-2 border-neon-cyan overflow-hidden animate-modalSlideIn"
        style={{
          boxShadow:
          '0 0 30px rgba(0, 240, 255, 0.5), inset 0 0 20px rgba(0, 240, 255, 0.1)'
        }}
        onClick={(e) => e.stopPropagation()}>

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neon-cyan/30 bg-dark-primary/50">
          <h2
            id="modal-title"
            className="text-2xl font-bold text-neon-cyan font-mono glitch-text"
            data-text={title}>

            <span className="text-neon-green mr-2">$</span>
            {title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-neon-cyan hover:text-neon-magenta hover:bg-dark-secondary transition-all border border-neon-cyan/30 hover:border-neon-magenta"
            aria-label="Close modal">

            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)] custom-scrollbar">
          {children}
        </div>
      </div>
    </div>);

}