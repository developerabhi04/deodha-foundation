// Accessible lightbox with keyboard navigation and focus trap (UI-only)
import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ isOpen, currentIndex, images, onClose, onNext, onPrev }) {
    const closeButtonRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            closeButtonRef.current?.focus();
            document.body.style.overflow = 'hidden';

            const handleKeyDown = (e) => {
                if (e.key === 'Escape') onClose();
                if (e.key === 'ArrowRight') onNext();
                if (e.key === 'ArrowLeft') onPrev();
            };

            document.addEventListener('keydown', handleKeyDown);
            return () => {
                document.removeEventListener('keydown', handleKeyDown);
                document.body.style.overflow = '';
            };
        }
    }, [isOpen, onClose, onNext, onPrev]);

    if (!isOpen || !images[currentIndex]) return null;

    const currentImage = images[currentIndex];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4"
                    onClick={onClose}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Image lightbox"
                >
                    {/* Close Button */}
                    <button
                        ref={closeButtonRef}
                        onClick={onClose}
                        className="absolute top-4 right-4 text-white hover:text-gray-300 focus-ring rounded p-2"
                        aria-label="Close lightbox"
                    >
                        <X size={32} />
                    </button>

                    {/* Previous Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onPrev();
                        }}
                        className="absolute left-4 text-white hover:text-gray-300 focus-ring rounded p-2"
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={48} />
                    </button>

                    {/* Image */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="max-w-5xl max-h-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={currentImage.url}
                            alt={currentImage.alt}
                            className="max-w-full max-h-[80vh] object-contain rounded-lg"
                        />
                        <p className="text-white text-center mt-4 text-lg">{currentImage.caption}</p>
                        <p className="text-gray-400 text-center text-sm mt-2">
                            {currentIndex + 1} / {images.length}
                        </p>
                    </motion.div>

                    {/* Next Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onNext();
                        }}
                        className="absolute right-4 text-white hover:text-gray-300 focus-ring rounded p-2"
                        aria-label="Next image"
                    >
                        <ChevronRight size={48} />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
