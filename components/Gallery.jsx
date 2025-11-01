// components/Gallery.jsx - Responsive gallery grid with random image display
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Gallery({ images, onImageClick }) {
    const [shuffledImages, setShuffledImages] = useState([]);

    // Shuffle array function
    const shuffleArray = (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    // Shuffle images on component mount
    useEffect(() => {
        setShuffledImages(shuffleArray(images));
    }, [images]);

    return (
        <div>
            {/* Gallery Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
                <AnimatePresence>
                    {shuffledImages.map((image, index) => (
                        <motion.div
                            key={image.id || index}
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            whileHover={{ y: -4 }}
                            className="relative group cursor-pointer rounded-lg overflow-hidden shadow-md aspect-square"
                            onClick={() => onImageClick(images.findIndex(img => img.id === image.id))}
                        >
                            <img
                                src={image.url}
                                alt={image.alt || image.caption}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end">
                                <p className="text-white text-sm p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    {image.caption}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
