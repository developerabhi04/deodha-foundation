import { X, Globe, Heart, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../lib/LanguageContext';

export default function MobileMenu({ isOpen, onClose, navLinks }) {
    const router = useRouter();
    const { language, switchLanguage, t } = useLanguage();

    const handleLanguageSwitch = (lang) => {
        switchLanguage(lang);
        // Optional: Close menu after language switch
        // onClose();
    };

    const isActive = (path) => router.pathname === path;

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
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                    />

                    {/* Menu Panel */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-white shadow-2xl z-[70] overflow-y-auto"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 sticky top-0 z-10">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-black text-white">
                                    {language === 'hi' ? 'मेन्यू' : 'Menu'}
                                </h2>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                                    aria-label="Close menu"
                                >
                                    <X size={24} className="text-white" />
                                </button>
                            </div>

                            {/* Language Switcher in Mobile Menu */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                                <div className="flex items-center gap-2 mb-2">
                                    <Globe size={16} className="text-white" />
                                    <span className="text-xs font-bold text-white uppercase">
                                        {language === 'hi' ? 'भाषा चुनें' : 'Select Language'}
                                    </span>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    <button
                                        onClick={() => handleLanguageSwitch('en')}
                                        className={`flex items-center justify-center gap-2 px-3 py-2 rounded-lg font-semibold text-sm transition-all ${language === 'en'
                                            ? 'bg-white text-green-600 shadow-lg'
                                            : 'bg-white/20 text-white hover:bg-white/30'
                                            }`}
                                    >
                                        🇬🇧 English
                                    </button>
                                    <button
                                        onClick={() => handleLanguageSwitch('hi')}
                                        className={`flex items-center justify-center gap-2 px-3 py-2 rounded-lg font-semibold text-sm transition-all ${language === 'hi'
                                            ? 'bg-white text-green-600 shadow-lg'
                                            : 'bg-white/20 text-white hover:bg-white/30'
                                            }`}
                                    >
                                        🇮🇳 हिन्दी
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <nav className="p-6">
                            <div className="space-y-2">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={onClose}
                                            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm uppercase tracking-wide transition-all ${isActive(link.href)
                                                ? 'bg-green-50 text-green-600 shadow-md'
                                                : 'text-gray-700 hover:bg-gray-50'
                                                }`}
                                        >
                                            <span className={`w-1.5 h-1.5 rounded-full ${isActive(link.href) ? 'bg-green-600' : 'bg-gray-300'
                                                }`}></span>
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </nav>

                        {/* Footer Actions */}
                        <div className="p-6 border-t border-gray-100 space-y-3">
                            {/* Join Button */}
                            <Link
                                href="/contact"
                                onClick={onClose}
                                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-black text-sm uppercase shadow-lg hover:shadow-xl transition-all"
                            >
                                <Heart size={18} fill="white" />
                                {language === 'hi' ? 'अभी जुड़ें' : 'Join Us Now'}
                            </Link>

                            {/* Contact Info */}
                            <div className="bg-gray-50 rounded-xl p-4 space-y-2">
                                <a
                                    href="tel:+919525383048"
                                    className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors"
                                >
                                    <Phone size={16} />
                                    <span className="text-sm font-semibold">+91 123456789</span>
                                </a>
                                <a
                                    href="mailto:dhewadhavikas@gmail.com"
                                    className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors"
                                >
                                    <Mail size={16} />
                                    <span className="text-sm font-semibold">dhewadhavikas@gmail.com</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
