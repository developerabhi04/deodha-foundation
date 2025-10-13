// Responsive gallery grid with filtering (UI-only)
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Gallery({ images, onImageClick }) {
    const [filter, setFilter] = useState('all');

    const filters = ['all', 'education', 'healthcare', 'livelihood'];

    const filteredImages = filter === 'all'
        ? images
        : images.filter((img) => img.program === filter);

    return (
        <div>
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
                {filters.map((f) => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`px-6 py-2 rounded-lg font-semibold capitalize transition-all focus-ring ${filter === f
                                ? 'bg-brand-green text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                    >
                        {f}
                    </button>
                ))}
            </div>

            {/* Gallery Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
                <AnimatePresence>
                    {filteredImages.map((image) => (
                        <motion.div
                            key={image.id}
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            whileHover={{ y: -4 }}
                            className="relative group cursor-pointer rounded-lg overflow-hidden shadow-md aspect-square"
                            onClick={() => onImageClick(image.id - 1)}
                        >
                            <img
                                src={image.url}
                                alt={image.alt}
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
