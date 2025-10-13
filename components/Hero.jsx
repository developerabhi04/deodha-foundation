// Reusable hero component with asymmetric layout (UI-only)
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero({ title, subtitle, backgroundImage, ctaText, ctaLink, secondaryCtaText, secondaryCtaLink }) {
    return (
        <section className="relative h-[600px] flex items-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    src={backgroundImage}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-2xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                    >
                        {title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-200 mb-8"
                    >
                        {subtitle}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-wrap gap-4"
                    >
                        {ctaText && ctaLink && (
                            <Link
                                href={ctaLink}
                                className="bg-brand-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-green-dark transition-all transform hover:scale-105 focus-ring"
                            >
                                {ctaText}
                            </Link>
                        )}
                        {secondaryCtaText && secondaryCtaLink && (
                            <Link
                                href={secondaryCtaLink}
                                className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 focus-ring"
                            >
                                {secondaryCtaText}
                            </Link>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
