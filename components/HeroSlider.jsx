import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Users } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

export default function HeroSlider() {
    const { language } = useLanguage();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile/desktop
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768); // md breakpoint
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const slides = [
        {
            id: 1,
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761913596/DP_2015_3_v1njsg.jpg',
            overlayColor: 'from-green 100/70 to-emerald-300/30',
            // DESKTOP CONTENT
            desktop: {
                title: {
                    en: ['Dheodha Development Committee', 'A New Path of Change'],
                    hi: ['धेवधा विकास समिति', 'बदलाव की नई राह']
                },
                subtitle: {
                    en: `The Dheodha Development Committee aims to connect every citizen to the mainstream of development by walking on a new path of change.`,
                    hi: `धेवधा विकास समिति का उद्देश्य है बदलाव की नई राह पर चलते हुए हर नागरिक को विकास की मुख्यधारा से जोड़ना।`
                }
            },
            // MOBILE CONTENT
            mobile: {
                title: {
                    en: ['Dheodha Development Committee', 'A New Path of Change'],
                    hi: ['धेवधा विकास समिति', 'बदलाव की नई राह']
                },
                subtitle: {
                    en: `Connecting every citizen to the path of progress through unity, education, and development.`,
                    hi: `हर नागरिक को शिक्षा, एकजुटता और विकास की मुख्यधारा से जोड़ना।`
                }
            }
        },
        {
            id: 2,
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1762001896/571371887_1228595669303899_1530027951067959863_n_qewddt.jpg',
            overlayColor: 'from-blue 100/70 to-cyan-300/30',
            desktop: {
                title: {
                    en: ['Dheodha’s Pride,', 'Our Responsibility'],
                    hi: ['धेवधा का गौरव,', 'हमारी जिम्मेदारी']
                },
                subtitle: {
                    en: 'Let’s move forward together on this new path of transformation where every dream comes true and Dheodha becomes a model of development.',
                    hi: 'साथ मिलकर बदलाव की नई राह पर कदम बढ़ाएँ, जहाँ हर सपना साकार हो और धेवधा बने विकास का आदर्श उदाहरण।'
                }
            },
            mobile: {
                title: {
                    en: ['Dheodha’s Pride,', 'Our Responsibility'],
                    hi: ['धेवधा का', 'गौरव']
                },
                subtitle: {
                    en: 'Together towards a brighter, stronger Dheodha.',
                    hi: 'साथ मिलकर एक सशक्त धेवधा की ओर।'
                }
            }
        },
        {
            id: 3,
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761913596/DhajaAngnaMemory1_j99e2b.jpg',
            overlayColor: 'from-orange 100/70 to-red-300/30',
            desktop: {
                title: {
                    en: ['Village Development,', 'Everyone’s Effort'],
                    hi: ['गाँव का विकास,', 'सबका प्रयास']
                },
                subtitle: {
                    en: 'Our identity lies in unity and progress — uplifting the village through education, culture, and social development.',
                    hi: 'हमारी पहचान है एकजुटता और प्रगति – शिक्षा, संस्कृति और सामाजिक विकास के माध्यम से गाँव को नई ऊँचाइयों तक पहुँचाना।'
                }
            },
            mobile: {
                title: {
                    en: ['Village Development,', 'Everyone’s Effort'],
                    hi: ['गाँव का', 'विकास']
                },
                subtitle: {
                    en: 'Unity and progress through education and culture.',
                    hi: 'शिक्षा और संस्कृति के माध्यम से एकजुटता और प्रगति।'
                }
            }
        },
        {
            id: 3,
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761913596/DhajaAngnaMemory1_j99e2b.jpg',
            overlayColor: 'from-orange 100/70 to-red-300/30',
            desktop: {
                title: {
                    en: ['Cultural Heritage,', 'Village Pride'],
                    hi: ['संस्कृति की धरोहर,', 'गाँव का गौरव']
                },
                subtitle: {
                    en: 'Preserving traditions and memories that unite the community — celebrating togetherness and identity.',
                    hi: 'परंपराओं और यादों को संजोए रखना जो समाज को जोड़ती हैं – एकजुटता और अपनी पहचान का उत्सव।'
                }
            },
            mobile: {
                title: {
                    en: ['Cultural', 'Heritage'],
                    hi: ['संस्कृति की', 'धरोहर']
                },
                subtitle: {
                    en: 'Celebrating unity and tradition.',
                    hi: 'एकता और परंपरा का उत्सव।'
                }
            }
        },
        {
            id: 4,
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1762976460/Gram_Nigrani_Samiti_Baithak_gulzmv.jpg',
            overlayColor: 'from-orange 100/70 to-red-300/30',
            desktop: {
                title: {
                    en: ['Village Monitoring', 'Committee Meeting'],
                    hi: ['ग्राम निगरानी', 'समिति बैठक']
                },
                subtitle: {
                    en: 'Strengthening transparency and participation — ensuring accountability in every village development activity.',
                    hi: 'पारदर्शिता और भागीदारी को सशक्त बनाते हुए – प्रत्येक विकास कार्य में जवाबदेही सुनिश्चित करना।'
                }
            },
            mobile: {
                title: {
                    en: ['Village Monitoring', 'Committee'],
                    hi: ['ग्राम निगरानी', 'समिति']
                },
                subtitle: {
                    en: 'Promoting transparency and public participation.',
                    hi: 'पारदर्शिता और जनभागीदारी को बढ़ावा देना।'
                }
            }
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

    // Get current content based on device
    const currentContent = isMobile
        ? slides[currentSlide].mobile
        : slides[currentSlide].desktop;

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
                        <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-white text-lg font-semibold">
                            {language === 'hi' ? 'लोड हो रहा है...' : 'Loading...'}
                        </p>
                    </div>
                </div>
            )}

            {/* Main Slider */}
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
                        {/* Dynamic Color Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].overlayColor}`}></div>
                        {/* Dark Gradient for Text Contrast */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
                    </div>

                    {/* Content - Responsive Layout */}
                    <div className={`relative h-full flex items-center ${isMobile ? 'justify-start' : 'justify-center'} pt-20 lg:pt-0`}>
                        <div className="container mx-auto px-4">
                            <div className={`${isMobile ? 'max-w-sm' : 'max-w-3xl mx-auto'} ${isMobile ? 'text-left' : 'text-center'}`}>
                                {/* Title */}
                                <div className="mb-4">
                                    {currentContent.title[language].map((line, index) => (
                                        <motion.h1
                                            key={index}
                                            initial={{ y: 30, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.3 + (index * 0.15), duration: 0.6 }}
                                            className={`
                                                ${isMobile
                                                    ? 'text-3xl sm:text-4xl'
                                                    : 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl'
                                                } 
                                                font-black leading-tight 
                                                ${index === 0
                                                    ? 'text-white mb-2'
                                                    : 'text-transparent p-2 text-[100px] bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500'
                                                }
                                            `}
                                        >
                                            {line}
                                        </motion.h1>
                                    ))}
                                </div>

                                {/* Subtitle */}
                                <motion.p
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.6, duration: 0.6 }}
                                    className={`
                                        ${isMobile
                                            ? 'text-sm'
                                            : 'text-xs sm:text-sm md:text-base'
                                        } 
                                        text-gray-200 mb-6 
                                        ${isMobile ? 'max-w-xs' : 'max-w-2xl mx-auto'} 
                                        leading-relaxed
                                    `}
                                >
                                    {currentContent.subtitle[language]}
                                </motion.p>

                                {/* CTA Button - SINGLE BUTTON ONLY */}
                                <motion.div
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 1, duration: 0.5 }}
                                    className={`flex ${isMobile ? 'justify-start' : 'justify-center'}`}
                                >
                                    <Link
                                        href="/about"
                                        className={`
                                            group inline-flex items-center justify-center gap-2 
                                            bg-gradient-to-r from-green-500 via-emerald-600 to-teal-600
                                            text-white 
                                            ${isMobile ? 'px-10 py-4' : 'px-8 py-4'} 
                                            rounded-full font-black 
                                            ${isMobile ? 'text-base' : 'text-sm md:text-base'} 
                                            uppercase shadow-2xl 
                                            hover:shadow-green-500/50 hover:scale-105 
                                            transition-all duration-300
                                            relative overflow-hidden
                                        `}
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            <Users size={isMobile ? 22 : 20} />
                                            {language === 'hi' ? 'हमसे जुड़ें' : 'Join Us'}
                                        </span>
                                        <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                        <span className="w-2 h-2 rounded-full bg-white animate-pulse ml-1"></span>
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Slide Indicators */}
            {imagesLoaded && (
                <div className={`absolute ${isMobile ? 'bottom-24 left-4' : 'bottom-8 left-1/2 -translate-x-1/2'} z-10 flex gap-2`}>
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
