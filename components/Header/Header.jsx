import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, Globe, Heart, Phone, Mail, ChevronDown } from 'lucide-react';
import MobileMenu from '../MobileMenu';
import { useLanguage } from '../../lib/LanguageContext';
import Image from 'next/image';
import logo from '../../public/logo.png';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();
    const { language, switchLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 450);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: t.nav.home },
        { href: '/about', label: t.nav.about },
        { href: '/project', label: t.nav.project },
        { href: '/programs', label: t.nav.programs },
        { href: '/gallery', label: t.nav.Gallery },
        { href: '/news', label: t.nav.News },
        { href: '/contact', label: t.nav.contact },
    ];

    const isActive = (path) => router.pathname === path;

    return (
        <>
            {/* Main Header - Transparent */}
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-[rgb(255,255,255)] bg-opacity-85 shadow-xl py-2 md:py-3'
                    : 'bg-transparent py-3 md:py-4 lg:py-5'
            }`}>
                <div className="container mx-auto px-4 md:px-6 xl:px-8">
                    <div className="flex items-center justify-between gap-4">
                        {/* Logo with Image */}
                        <Link href="/" className="flex items-center gap-2 md:gap-3 group relative z-10 flex-shrink-0">
                            {/* Logo Image Container */}
                            <div className={`relative w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg flex items-center justify-center shadow-lg transition-all overflow-hidden ${
                                scrolled ? 'bg-transparent' : 'bg-transparent'
                            }`}>
                                <Image
                                    src={logo}
                                    alt="Dhewadha Foundation Logo"
                                    width={60}
                                    height={60}
                                    className="object-contain p-1"
                                    priority
                                />
                            </div>

                            {/* Foundation Name */}
                            <div className="hidden sm:block">
                                <div className={`text-base md:text-lg lg:text-xl font-black leading-tight transition-colors ${
                                    scrolled ? 'text-gray-900' : 'text-white'
                                }`}>
                                    {language === 'hi' ? 'ध्यवाधा' : 'DHEWADHA'}
                                </div>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden xl:flex items-center gap-1 2xl:gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`px-3 2xl:px-4 py-2 text-xs 2xl:text-sm font-bold uppercase tracking-wide transition-all relative group ${
                                        isActive(link.href)
                                            ? scrolled
                                                ? 'text-brand-green'
                                                : 'text-green-500'
                                            : scrolled
                                            ? 'text-gray-700 hover:text-brand-green'
                                            : 'text-white hover:text-green-700'
                                    }`}
                                >
                                    {link.label}
                                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all group-hover:w-full ${
                                        scrolled ? 'bg-brand-green' : 'bg-green-700'
                                    }`}></span>
                                </Link>
                            ))}
                        </nav>

                        {/* Right Actions */}
                        <div className="flex items-center gap-2 md:gap-3">
                            {/* Language Switcher - Desktop */}
                            <div className="hidden lg:block relative group">
                                <button className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg font-bold text-xs md:text-sm transition-all ${
                                    scrolled
                                        ? 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                                        : 'text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm'
                                }`}>
                                    <Globe size={16} />
                                    <span className="uppercase">{language === 'en' ? 'EN' : 'हिं'}</span>
                                    <ChevronDown size={14} />
                                </button>
                                <div className="absolute right-0 top-full mt-2 w-36 bg-white rounded-lg shadow-2xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                                    <button
                                        onClick={() => switchLanguage('en')}
                                        className={`w-full text-left px-4 py-2 text-sm font-semibold hover:bg-green-50 transition-colors ${
                                            language === 'en' ? 'text-brand-green bg-green-50' : 'text-gray-700'
                                        }`}
                                    >
                                        🇬🇧 English
                                    </button>
                                    <button
                                        onClick={() => switchLanguage('hi')}
                                        className={`w-full text-left px-4 py-2 text-sm font-semibold hover:bg-green-50 transition-colors ${
                                            language === 'hi' ? 'text-brand-green bg-green-50' : 'text-gray-700'
                                        }`}
                                    >
                                        🇮🇳 हिन्दी
                                    </button>
                                </div>
                            </div>

                            {/* Language Switcher - Mobile (Tablet & Below) */}
                            <button
                                onClick={() => switchLanguage(language === 'en' ? 'hi' : 'en')}
                                className={`lg:hidden flex items-center gap-1 px-2 md:px-3 py-2 rounded-lg font-bold text-xs transition-all ${
                                    scrolled
                                        ? 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                                        : 'text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm'
                                }`}
                            >
                                <Globe size={14} />
                                <span className="uppercase">{language === 'en' ? 'EN' : 'हिं'}</span>
                            </button>

                            {/* Join Now Button - Desktop */}
                            <Link
                                href="/contact"
                                className="hidden md:flex items-center gap-2 bg-gradient-to-r from-green-500 via-green-500 to-green-600 text-white px-4 md:px-6 lg:px-8 py-2 md:py-2 rounded-full font-black text-xs md:text-sm uppercase shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                            >
                                <Heart size={16} className="md:w-5 md:h-5" fill="white" />
                                <span className="hidden lg:inline text-xs">{language === 'hi' ? 'अभी जुड़ें' : 'JOIN Us'}</span>
                                <span className="lg:hidden">{language === 'hi' ? 'जुड़ें' : 'JOIN'}</span>
                            </Link>

                            {/* Mobile Join Button */}
                            <Link
                                href="/contact"
                                className="md:hidden flex items-center gap-1 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-2 rounded-full font-bold text-xs shadow-lg"
                            >
                                <Heart size={14} fill="white" />
                                <span>{language === 'hi' ? 'जुड़ें' : 'JOIN'}</span>
                            </Link>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setMobileMenuOpen(true)}
                                className={`xl:hidden p-2 rounded-lg transition-all ${
                                    scrolled
                                        ? 'text-gray-900 hover:bg-gray-100'
                                        : 'text-white hover:bg-white/10 backdrop-blur-sm'
                                }`}
                                aria-label="Open menu"
                            >
                                <Menu size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <MobileMenu
                isOpen={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                navLinks={navLinks}
            />
        </>
    );
}
