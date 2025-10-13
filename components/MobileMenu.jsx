// Mobile menu overlay component
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { X, Heart } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

export default function MobileMenu({ isOpen, onClose, navLinks }) {
    const router = useRouter();
    const { language } = useLanguage();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                    />

                    {/* Menu Panel */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed top-0 right-0 bottom-0 w-80 bg-gradient-to-b from-white to-gray-50 shadow-2xl z-50 overflow-y-auto"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-brand-green to-brand-green-dark p-6 text-white">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h2 className="text-2xl font-black">
                                        {language === 'hi' ? 'मेनू' : 'Menu'}
                                    </h2>
                                    <p className="text-sm text-green-100">
                                        {language === 'hi' ? 'ध्यवाधा फाउंडेशन' : 'Dhewadha Foundation'}
                                    </p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                                    aria-label="Close menu"
                                >
                                    <X size={24} />
                                </button>
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <nav className="p-6">
                            <ul className="space-y-2">
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            onClick={onClose}
                                            className={`block px-4 py-3 rounded-lg font-semibold transition-all ${router.pathname === link.href
                                                    ? 'bg-brand-green text-white'
                                                    : 'text-gray-700 hover:bg-green-50 hover:text-brand-green'
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            {/* Donate Button in Menu */}
                            <Link
                                href="/donate"
                                onClick={onClose}
                                className="mt-6 w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black px-6 py-4 rounded-full font-black text-center hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                            >
                                <Heart size={20} fill="black" />
                                {language === 'hi' ? '' : 'Join Us'}
                            </Link>
                        </nav>

                        {/* Footer Info */}
                        <div className="p-6 border-t border-gray-200 mt-auto">
                            <p className="text-sm text-gray-600 text-center">
                                {language === 'hi'
                                    ? '2016 से समुदायों को सशक्त बनाना'
                                    : 'Empowering communities since 2016'}
                            </p>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
