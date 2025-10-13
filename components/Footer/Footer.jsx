// Footer with links and social icons (UI-only)
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../../lib/LanguageContext';


export default function Footer() {
    const { t, language } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white font-bold">
                                DF
                            </div>
                            <span className="text-xl font-bold text-white">
                                {language === 'hi' ? 'ध्यवाधा फाउंडेशन' : 'Dhewadha Foundation'}
                            </span>
                        </div>
                        <p className="text-sm mb-4">
                            {t.footer.tagline}
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-brand-green transition-colors focus-ring rounded" aria-label="Facebook">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="hover:text-brand-green transition-colors focus-ring rounded" aria-label="Twitter">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="hover:text-brand-green transition-colors focus-ring rounded" aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="hover:text-brand-green transition-colors focus-ring rounded" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">{t.footer.quickLinks}</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/abouts" className="hover:text-brand-green transition-colors focus-ring rounded">{t.footer.aboutUs}</Link></li>
                            <li><Link href="/programss" className="hover:text-brand-green transition-colors focus-ring rounded">{t.footer.ourPrograms}</Link></li>
                            <li><Link href="/eventss" className="hover:text-brand-green transition-colors focus-ring rounded">{t.footer.events}</Link></li>
                            <li><Link href="/blogs" className="hover:text-brand-green transition-colors focus-ring rounded">{t.footer.blog}</Link></li>
                            <li><Link href="/partnerss" className="hover:text-brand-green transition-colors focus-ring rounded">{t.footer.partners}</Link></li>
                            <li><Link href="/presss" className="hover:text-brand-green transition-colors focus-ring rounded">{t.footer.pressKit}</Link></li>
                        </ul>
                    </div>

                    {/* Get Involved */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">{t.footer.getInvolved}</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/donates" className="hover:text-brand-green transition-colors focus-ring rounded">{t.footer.joinUs}</Link></li>
                            <li><Link href="/volunteers" className="hover:text-brand-green transition-colors focus-ring rounded">{t.footer.volunteer}</Link></li>
                            <li><Link href="/resourcess" className="hover:text-brand-green transition-colors focus-ring rounded">{t.footer.resources}</Link></li>
                            <li><Link href="/contacts" className="hover:text-brand-green transition-colors focus-ring rounded">{t.footer.contactUs}</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">{t.footer.contact}</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start space-x-2">
                                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                                <span>
                                    {language === 'hi' ? 'ध्यवाधा फाउंडेशन' : 'Dhewadha Foundation'}<br />
                                    {language === 'hi' ? 'गांव: ध्यवाधा' : 'Village: Dhewadha'}<br />
                                    {language === 'hi' ? 'ब्लॉक: पकड़ी बारावां' : 'Block: Pakri Barawan'}<br />
                                    {language === 'hi' ? 'डाकघर: पकड़ीबारवां' : 'Post: Pakaribarwan'}<br />
                                    {language === 'hi' ? 'जिला: नवादा, बिहार - 805124' : 'District: Nawada, Bihar - 805124'}
                                </span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Phone size={18} className="flex-shrink-0" />
                                <span>+91 1234567890</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Mail size={18} className="flex-shrink-0" />
                                <span>info@dhewadha foundation.org</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
                    <p>
                        &copy; {currentYear} {language === 'hi' ? 'ध्यवाधा फाउंडेशन' : 'Dhewadha Foundation'}. {t.footer.copyright} |
                        <Link href="#" className="hover:text-brand-green transition-colors mx-1">
                            {t.footer.privacyPolicy}
                        </Link>
                        |
                        <Link href="#" className="hover:text-brand-green transition-colors mx-1">
                            {t.footer.termsOfService}
                        </Link>
                        <br />
                        {t.footer.developedBy}{" "}
                        <Link
                            href="https://araniinfotech.com"
                            target="_blank"
                            className="font-medium hover:text-brand-green transition-colors"
                        >
                            Arani Infotech Pvt. Ltd.
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}
