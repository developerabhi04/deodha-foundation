// pages/FAQ.jsx - Complete FAQ Page with Separate Data Import
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronDown, Search, HelpCircle, Phone, Mail,
    CheckCircle, Globe, TrendingUp, Sparkles
} from 'lucide-react';
import Hero from '@/components/Hero';
import { useLanguage } from '../lib/LanguageContext';
import { faqData, faqCategories } from '../lib/faqData';

const FAQ = () => {
    const { language } = useLanguage();
    const [activeIndex, setActiveIndex] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    // Filter FAQs based on search and category
    const filteredFAQs = faqData.filter(faq => {
        const matchesSearch = searchQuery === '' ||
            faq.question[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer[language].toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const toggleAccordion = (id) => {
        setActiveIndex(activeIndex === id ? null : id);
    };

    // Stats data
    const stats = [
        {
            icon: HelpCircle,
            label: { hi: 'प्रश्न उत्तर', en: 'Q&A' },
            value: '27',
            color: 'from-blue-600 to-indigo-600'
        },
        {
            icon: Globe,
            label: { hi: 'विभाग', en: 'Categories' },
            value: '7',
            color: 'from-green-600 to-emerald-600'
        },
        {
            icon: TrendingUp,
            label: { hi: 'सहायता उपलब्ध', en: 'Support Available' },
            value: '24/7',
            color: 'from-purple-600 to-violet-600'
        },
        {
            icon: Sparkles,
            label: { hi: 'पारदर्शिता', en: 'Transparency' },
            value: '100%',
            color: 'from-pink-600 to-rose-600'
        }
    ];

    return (
        <>
            <Hero
                title={language === 'hi' ? 'अक्सर पूछे जाने वाले प्रश्न' : 'Frequently Asked Questions'}
                subtitle={language === 'hi'
                    ? 'धेवधा विकास समिति के बारे में सभी जानकारी यहां प्राप्त करें'
                    : 'Get all information about Dheodha Vikas Samiti here'
                }
                backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80"
            />

            <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50 py-16">
                {/* Header Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm border border-green-200 text-green-700 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg mb-6">
                            <HelpCircle className="w-5 h-5" />
                            <span>{language === 'hi' ? 'FAQ सेक्शन' : 'FAQ Section'}</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
                            {language === 'hi' ? 'अक्सर पूछे जाने वाले' : 'Frequently Asked'}
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 mt-2">
                                {language === 'hi' ? 'प्रश्न और उत्तर' : 'Questions'}
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            {language === 'hi'
                                ? 'धेवधा विकास समिति के बारे में विस्तृत जानकारी और आपके सभी सवालों के जवाब'
                                : 'Detailed information about Dheodha Vikas Samiti and answers to all your questions'
                            }
                        </p>
                    </motion.div>

                    {/* Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-2xl mx-auto mb-12"
                    >
                        <div className="relative">
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
                            <input
                                type="text"
                                placeholder={language === 'hi' ? 'अपने प्रश्न खोजें...' : 'Search your question...'}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-16 pr-6 py-5 rounded-2xl border-2 border-gray-200 focus:border-green-600 focus:outline-none text-gray-900 font-medium text-lg shadow-lg transition-all"
                            />
                        </div>
                        {searchQuery && (
                            <p className="mt-4 text-center text-gray-600">
                                {language === 'hi'
                                    ? `${filteredFAQs.length} परिणाम मिले "${searchQuery}" के लिए`
                                    : `Found ${filteredFAQs.length} results for "${searchQuery}"`
                                }
                            </p>
                        )}
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 text-center group cursor-pointer"
                            >
                                <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg`}>
                                    <stat.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                                </div>
                                <div className="text-3xl md:text-4xl font-black text-gray-900 mb-2">{stat.value}</div>
                                <div className="text-xs md:text-sm text-gray-600 font-semibold">{stat.label[language]}</div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Category Filter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mb-12"
                    >
                        <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                            {language === 'hi' ? 'विभाग चुनें' : 'Select Category'}
                        </h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            <button
                                onClick={() => setSelectedCategory('all')}
                                className={`px-6 py-3 rounded-xl font-semibold transition-all ${selectedCategory === 'all'
                                    ? 'bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-lg scale-105'
                                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md border-2 border-gray-200'
                                    }`}
                            >
                                {language === 'hi' ? 'सभी' : 'All'}
                            </button>
                            {faqCategories.map((category) => {
                                const Icon = require('lucide-react')[category.icon];
                                return (
                                    <button
                                        key={category.id}
                                        onClick={() => setSelectedCategory(category.id)}
                                        className={`group px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${selectedCategory === category.id
                                            ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                                            : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md border-2 border-gray-200'
                                            }`}
                                    >
                                        <Icon className={`w-5 h-5 ${selectedCategory === category.id ? 'text-white' : 'text-gray-500'
                                            }`} />
                                        <span>{category.label[language]}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>

                {/* FAQ Container */}
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-4">
                        {filteredFAQs.map((faq, index) => {
                            const Icon = faq.icon;
                            const isActive = activeIndex === faq.id;

                            return (
                                <motion.div
                                    key={faq.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all"
                                >
                                    {/* Question */}
                                    <button
                                        onClick={() => toggleAccordion(faq.id)}
                                        className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                                    >
                                        <div className="flex items-start space-x-4 flex-1">
                                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${faq.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                                                <Icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-1">
                                                    {faq.categoryLabel[language]}
                                                </div>
                                                <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                                                    {faq.question[language]}
                                                </h4>
                                                <span className="text-sm text-gray-500 font-medium">
                                                    {isActive
                                                        ? (language === 'hi' ? 'बंद करने के लिए क्लिक करें' : 'Click to close')
                                                        : (language === 'hi' ? 'विस्तार के लिए क्लिक करें' : 'Click to expand')
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                        <div className={`ml-4 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}>
                                            <ChevronDown className="w-6 h-6 text-gray-400" />
                                        </div>
                                    </button>

                                    {/* Answer */}
                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 md:px-8 pb-6 pt-2 ml-0 md:ml-16">
                                                    <div className="border-l-4 pl-6 border-green-500">
                                                        <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
                                                            {faq.answer[language]}
                                                        </p>
                                                        {faq.list && (
                                                            <ul className="space-y-3 mb-4">
                                                                {faq.list[language].map((item, idx) => (
                                                                    <li key={idx} className="flex items-start space-x-3">
                                                                        <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                                                        <span className="text-gray-700">{item}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                        {faq.highlight && (
                                                            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                                                                <p className="text-green-900 font-semibold">
                                                                    💡 {faq.highlight[language]}
                                                                </p>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* No Results */}
                    {filteredFAQs.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20 bg-white rounded-2xl shadow-lg"
                        >
                            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Search className="w-12 h-12 text-gray-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                {language === 'hi' ? 'कोई परिणाम नहीं मिला' : 'No Results Found'}
                            </h3>
                            <p className="text-gray-600 mb-6">
                                {language === 'hi'
                                    ? 'कृपया अपनी खोज को समायोजित करें या किसी अन्य प्रश्न को खोजें।'
                                    : 'Please adjust your search or try a different question.'
                                }
                            </p>
                            <button
                                onClick={() => {
                                    setSearchQuery('');
                                    setSelectedCategory('all');
                                }}
                                className="px-6 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-colors"
                            >
                                {language === 'hi' ? 'सभी प्रश्न देखें' : 'View All Questions'}
                            </button>
                        </motion.div>
                    )}
                </div>

                {/* Contact CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16"
                >
                    <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32"></div>

                        <div className="relative z-10">
                            <Sparkles className="w-16 h-16 text-white mx-auto mb-6" />
                            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                                {language === 'hi' ? 'अभी भी कोई सवाल है?' : 'Still Have Questions?'}
                            </h2>
                            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                                {language === 'hi'
                                    ? 'हमारी टीम आपकी सहायता के लिए तैयार है। हमसे संपर्क करें और अपने सवालों के जवाब पाएं।'
                                    : 'Our team is ready to assist you. Contact us and get answers to your questions.'
                                }
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="mailto:dheodhavikassamiti@gmail.com"
                                    className="inline-flex items-center justify-center space-x-2 bg-white text-green-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all shadow-lg hover:scale-105"
                                >
                                    <Mail className="w-5 h-5" />
                                    <span>{language === 'hi' ? 'ईमेल करें' : 'Email Us'}</span>
                                </a>
                                <a
                                    href="tel:+917678666621"
                                    className="inline-flex items-center justify-center space-x-2 bg-green-800 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-900 transition-all shadow-lg hover:scale-105"
                                >
                                    <Phone className="w-5 h-5" />
                                    <span>{language === 'hi' ? 'कॉल करें' : 'Call Now'}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default FAQ;
