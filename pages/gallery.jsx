// pages/Gallery.jsx - Complete with Full Hindi/English Translation
import { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import Lightbox from '../components/Lightbox';
import { gallery } from '../lib/data';
import { useLanguage } from '../lib/LanguageContext';



export default function GalleryPage() {
    const { language } = useLanguage();
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
    };

    return (
        <>
            <SEO
                title={language === 'hi' ? 'गैलरी' : 'Gallery'}
                description={language === 'hi'
                    ? 'हमारे कार्यक्रमों के प्रभाव और समुदाय की झलक दिखाती गैलरी'
                    : 'Explore our gallery showcasing the impact of our programs and the communities we serve.'
                }
                image="https://res.cloudinary.com/dusalynec/image/upload/v1762001895/IMG_2626_jrqyt0.jpg"
                backgroundImage="https://res.cloudinary.com/dusalynec/image/upload/v1762001895/IMG_2626_jrqyt0.jpg"
            />

            <Hero
                title={language === 'hi' ? 'हमारी गैलरी' : 'Our Gallery'}
                subtitle={language === 'hi'
                    ? 'परिवर्तन, आशा और सामुदायिक सशक्तिकरण के क्षण - तस्वीरों में कैद'
                    : 'Moments of transformation, hope, and community empowerment captured through images.'
                }
                backgroundImage="https://res.cloudinary.com/dusalynec/image/upload/v1762001895/IMG_2626_jrqyt0.jpg"
            />

            <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4">
                    {/* Introduction */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12 max-w-3xl mx-auto"
                    >
                        <h2 className="text-4xl font-black text-gray-900 mb-4">
                            {language === 'hi' ? 'हमारी यात्रा की झलकियां' : 'Glimpses of Our Journey'}
                        </h2>
                        <p className="text-lg text-gray-600">
                            {language === 'hi'
                                ? 'धेवधा विकास समिति के कार्यों, परियोजनाओं और सामुदायिक गतिविधियों की तस्वीरें'
                                : 'Photos of Dheodha Vikas Samiti\'s work, projects, and community activities'
                            }
                        </p>
                    </motion.div>

                    {/* Gallery Component */}
                    <Gallery images={gallery} onImageClick={openLightbox} />

                    {/* Additional Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mt-16 text-center"
                    >
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 max-w-2xl mx-auto border border-green-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                {language === 'hi' ? '📸 अपनी तस्वीरें साझा करें' : '📸 Share Your Photos'}
                            </h3>
                            <p className="text-gray-700 mb-6">
                                {language === 'hi'
                                    ? 'क्या आपके पास धेवधा विकास समिति के कार्यक्रमों या गतिविधियों की तस्वीरें हैं? हमें भेजें और हमारी गैलरी का हिस्सा बनें!'
                                    : 'Do you have photos from Dheodha Vikas Samiti programs or activities? Send them to us and be part of our gallery!'
                                }
                            </p>
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-colors"
                            >
                                {language === 'hi' ? 'संपर्क करें' : 'Contact Us'}
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Lightbox
                isOpen={lightboxOpen}
                currentIndex={currentImageIndex}
                images={gallery}
                onClose={closeLightbox}
                onNext={nextImage}
                onPrev={prevImage}
            />
        </>
    );
}
