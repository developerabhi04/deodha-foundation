// Program card component with hover effects (UI-only)
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ProgramCard({ program }) {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col"
        >
            <div className="relative h-48 overflow-hidden">
                <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                />
                <div className="absolute top-4 left-4 text-4xl">{program.icon}</div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{program.shortDescription}</p>
                <div className="flex items-center justify-between">
                    <span className="text-sm text-brand-green font-semibold">
                        {program.beneficiaries} Beneficiaries
                    </span>
                    <Link
                        href={`/programs/${program.slug}`}
                        className="flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors focus-ring rounded"
                    >
                        Learn More <ArrowRight size={18} className="ml-1" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
