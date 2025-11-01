import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Heart, Users } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';




export default function HeroSlider() {
    const { language } = useLanguage();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    const slides = [
        {
            id: 1,
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761913596/DP_2015_3_v1njsg.jpg',
            overlayColor: 'from-green-300/70 to-emerald-200/30',
            title: {
                en: ['Transforming Lives', 'in Rural Bihar'],
                hi: ['ग्रामीण बिहार में', 'जीवन बदल रहे हैं']
            },
            subtitle: {
                en: 'Empowering 500+ children, 200+ women across 15+ villages through education, healthcare, and livelihood programs',
                hi: 'शिक्षा, स्वास्थ्य सेवा और आजीविका कार्यक्रमों के माध्यम से 15+ गांवों में 500+ बच्चों, 200+ महिलाओं को सशक्त बना रहे हैं'
            },
        },
        {
            id: 2,
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1762001896/571371887_1228595669303899_1530027951067959863_n_qewddt.jpg',
            overlayColor: 'from-blue-300/70 to-cyan-300/30',
            title: {
                en: ['Women Empowerment', 'Skill Development'],
                hi: ['महिला सशक्तिकरण', 'कौशल विकास']
            },
            subtitle: {
                en: 'Training 200+ rural women in tailoring, handicrafts, and entrepreneurship for financial independence',
                hi: 'वित्तीय स्वतंत्रता के लिए 200+ ग्रामीण महिलाओं को सिलाई, हस्तशिल्प और उद्यमिता में प्रशिक्षण'
            },

        },
        {
            id: 3,
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1762001896/107812243_3790381330978971_788955600235734830_n_mv5wkw.jpg',
            overlayColor: 'from-orange-300/70 to-red-300/30',
            title: {
                en: ['Quality Education', 'For Every Child'],
                hi: ['गुणवत्तापूर्ण शिक्षा', 'हर बच्चे के लिए']
            },
            subtitle: {
                en: 'Free books, scholarships, and after-school programs ensuring no child is left behind in Nawada District',
                hi: 'मुफ्त किताबें, छात्रवृत्ति और स्कूल के बाद के कार्यक्रम यह सुनिश्चित करते हैं कि नवादा जिले में कोई भी बच्चा पीछे न रहे'
            },
        }
    ];

    useEffect(() => {
        const imagePromises = slides.map((slide) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = slide.image;
                img.onload = resolve;
                img.onerror = reject;
            });
        });

        Promise.all(imagePromises)
            .then(() => setImagesLoaded(true))
            .catch(() => setImagesLoaded(true));
    }, []);

    useEffect(() => {
        if (imagesLoaded) {
            const timer = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % slides.length);
            }, 6000);
            return () => clearInterval(timer);
        }
    }, [imagesLoaded, slides.length]);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <div className="relative h-screen min-h-[600px] overflow-hidden">
            {/* Base Background Image */}
            <div className="absolute inset-0">
                <img
                    src={slides[0].image}
                    alt="Background"
                    className="w-full h-full object-cover"
                    loading="eager"
                />
            </div>

            {/* Loading State */}
            {!imagesLoaded && (
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-black/95 to-gray-900/95 flex items-center justify-center z-50">
                    <div className="text-center">
                        <div className="w-16 h-16 border-4 border-brand-green border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-white text-lg font-semibold">
                            {language === 'hi' ? 'लोड हो रहा है...' : 'Loading...'}
                        </p>
                    </div>
                </div>
            )}

            {/* Main Slider - Centered Content */}
            <AnimatePresence initial={false}>
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <img
                            src={slides[currentSlide].image}
                            alt="Hero"
                            className="w-full h-full object-cover"
                            loading="eager"
                        />
                        {/* DYNAMIC Color Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].overlayColor}`}></div>
                        {/* Dark Gradient for Text Contrast */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
                    </div>

                    {/* Content - CENTERED */}
                    <div className="relative h-full flex items-center justify-center pt-20 lg:pt-0">
                        <div className="container mx-auto px-4">
                            <div className="max-w-3xl mx-auto text-center">
                                {/* Badge */}
                                <motion.div
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 0.6 }}
                                    className="mb-4"
                                >
                                </motion.div>

                                {/* Title - Smaller & Centered */}
                                <div className="mb-4">
                                    {slides[currentSlide].title[language].map((line, index) => (
                                        <motion.h1
                                            key={index}
                                            initial={{ y: 30, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.3 + (index * 0.15), duration: 0.6 }}
                                            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight ${index === 0 ? 'text-white mb-1' : 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500'
                                                }`}
                                        >
                                            {line}
                                        </motion.h1>
                                    ))}
                                </div>

                                {/* Subtitle - Smaller & Centered */}
                                <motion.p
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.6, duration: 0.6 }}
                                    className="text-xs sm:text-sm md:text-base text-gray-200 mb-6 max-w-2xl mx-auto leading-relaxed"
                                >
                                    {slides[currentSlide].subtitle[language]}
                                </motion.p>


                                {/* CTA Buttons - Centered & Smaller */}
                                <motion.div
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 1, duration: 0.5 }}
                                    className="flex flex-col sm:flex-row gap-3 justify-center"
                                >
                                    <Link
                                        href="/about"
                                        className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 text-white px-6 py-3 rounded-full font-black text-sm uppercase shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300"
                                    >
                                        <Heart size={18} fill="white" />
                                        {language === 'hi' ? 'अभी दान करें' : 'Know More'}
                                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                                    </Link>
                                    <Link
                                        href="/volunteer"
                                        className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold text-sm uppercase hover:bg-yellow-400 transition-all duration-300"
                                    >
                                        <Users size={18} />
                                        {language === 'hi' ? 'स्वयंसेवक बनें' : 'Join Us'}
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>


            {/* Slide Indicators - Bottom Center */}
            {imagesLoaded && (
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className="group"
                            aria-label={`Slide ${index + 1}`}
                        >
                            <div className={`transition-all duration-300 rounded-full ${index === currentSlide
                                ? 'w-8 h-2 bg-gradient-to-r from-yellow-400 to-green-500'
                                : 'w-2 h-2 bg-white/40 group-hover:bg-white/60'
                                }`}></div>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}