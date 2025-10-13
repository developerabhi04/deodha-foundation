// Accessible FAQ accordion component (UI-only)
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Accordion({ items }) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-4">
            {items.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                        onClick={() => toggleItem(index)}
                        className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors focus-ring"
                        aria-expanded={openIndex === index}
                        aria-controls={`accordion-content-${index}`}
                    >
                        <span className="font-semibold text-gray-900">{item.question}</span>
                        <motion.div
                            animate={{ rotate: openIndex === index ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ChevronDown size={20} className="text-gray-600" />
                        </motion.div>
                    </button>
                    <AnimatePresence>
                        {openIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                id={`accordion-content-${index}`}
                                className="overflow-hidden"
                            >
                                <div className="p-4 bg-gray-50 text-gray-700">
                                    {item.answer}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}
