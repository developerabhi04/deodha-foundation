// pages/places/[placeId].jsx - FULLY CORRECTED WITH BILINGUAL SUPPORT
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import {
    ArrowLeft, MapPin, Calendar, Clock, Star, Heart,
    Share2, Camera, Users, Sparkles, Info,
    Navigation, Phone, Mail, Globe, ChevronRight,
    ArrowRight, Droplet, Leaf, BookOpen
} from 'lucide-react';
import Hero from '@/components/Hero';
import { placesData } from '@/lib/placeData';
import { useLanguage } from '../../lib/LanguageContext';

const PlaceDetailPage = () => {
    const router = useRouter();
    const { placeId } = router.query;
    const { language } = useLanguage();
    const [activeTab, setActiveTab] = useState('about');

    // Translations object
    const t = {
        loading: language === 'hi' ? 'लोड हो रहा है...' : 'Loading...',
        notFound: language === 'hi' ? 'स्थान नहीं मिला' : 'Place Not Found',
        notFoundDesc: language === 'hi' ? 'क्षमा करें, यह स्थान उपलब्ध नहीं है।' : 'Sorry, this place is not available.',
        goBack: language === 'hi' ? 'वापस जाएं' : 'Go Back',
        like: language === 'hi' ? 'पसंद करें' : 'Like',
        share: language === 'hi' ? 'शेयर करें' : 'Share',
        details: language === 'hi' ? 'विवरण' : 'Details',
        gallery: language === 'hi' ? 'गैलरी' : 'Gallery',
        programs: language === 'hi' ? 'कार्यक्रम' : 'Programs',
        festivals: language === 'hi' ? 'त्योहार' : 'Festivals',
        about: language === 'hi' ? 'के बारे में' : 'About',
        historicalSignificance: language === 'hi' ? 'ऐतिहासिक महत्व' : 'Historical Significance',
        religiousSignificance: language === 'hi' ? 'धार्मिक महत्व' : 'Religious Significance',
        significance: language === 'hi' ? 'महत्व' : 'Significance',
        specialInfo: language === 'hi' ? 'विशेष सूचना' : 'Special Information',
        specialInfoDesc: language === 'hi' ? 'अधिक जानकारी के लिए कृपया समिति से संपर्क करें।' : 'For more information, please contact the committee.',
        facilities: language === 'hi' ? 'सुविधाएं' : 'Facilities',
        photoGallery: language === 'hi' ? 'फोटो गैलरी' : 'Photo Gallery',
        programsAndCourses: language === 'hi' ? 'कार्यक्रम और पाठ्यक्रम' : 'Programs and Courses',
        festivalsCelebrations: language === 'hi' ? 'प्रमुख त्योहार और उत्सव' : 'Major Festivals and Celebrations',
        quickInfo: language === 'hi' ? 'त्वरित जानकारी' : 'Quick Information',
        locationDirection: language === 'hi' ? 'स्थान और दिशा' : 'Location & Direction',
        showRoute: language === 'hi' ? 'मार्ग दिखाएं' : 'Show Route',
        contactUs: language === 'hi' ? 'संपर्क करें' : 'Contact Us',
        viewOtherPlaces: language === 'hi' ? 'अन्य स्थान देखें' : 'View Other Places',
        guidelines: language === 'hi' ? 'दर्शनार्थियों के लिए दिशा-निर्देश' : 'Guidelines for Visitors',
        admissionGuidelines: language === 'hi' ? 'प्रवेश दिशा-निर्देश' : 'Admission Guidelines',
        maintainCleanliness: language === 'hi' ? 'कृपया स्वच्छता बनाए रखें' : 'Please maintain cleanliness',
        photographyAllowed: language === 'hi' ? 'फोटोग्राफी की अनुमति है' : 'Photography allowed',
        maintainSilence: language === 'hi' ? 'शांति बनाए रखें' : 'Maintain silence',
        followRules: language === 'hi' ? 'सभी नियमों का पालन करें' : 'Follow all rules',
        otherPlaces: language === 'hi' ? 'अन्य प्रमुख स्थान' : 'Other Important Places',
        viewDetails: language === 'hi' ? 'विवरण देखें' : 'View Details',
        prominentPlace: language === 'hi' ? 'धेवधा गांव का प्रमुख स्थान' : 'A prominent place in Dheodha Village'
    };

    // Icon mapping - FIXED to include all icons
    const iconComponents = {
        Clock,
        Calendar,
        Users,
        Star,
        BookOpen,
        Droplet,
        Sprout: Leaf,  // Map Sprout to Leaf
        Leaf,
        Phone,
        Mail,
        Globe,
        Navigation
    };

    // Show loading while router is loading
    if (!router.isReady) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-4 border-green-600 mb-4"></div>
                    <p className="text-gray-600">{t.loading}</p>
                </div>
            </div>
        );
    }

    // Get place data or show not found
    const place = placeId ? placesData[placeId] : null;

    if (!place) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.notFound}</h2>
                    <p className="text-gray-600 mb-6">{t.notFoundDesc}</p>
                    <a
                        href="/about"
                        className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span>{t.goBack}</span>
                    </a>
                </div>
            </div>
        );
    }

    // Helper function to get language-specific value
    const getLangValue = (obj) => {
        if (typeof obj === 'object' && obj !== null && 'hi' in obj && 'en' in obj) {
            return language === 'hi' ? obj.hi : obj.en;
        }
        return obj;
    };

    // Helper function to check if place is educational
    const isEducational = placeId && (placeId.includes('school') || placeId.includes('college'));

    // Helper function to check if place is religious
    const isReligious = placeId && (
        placeId.includes('temple') || 
        placeId.includes('sthan') || 
        placeId.includes('mandir') || 
        placeId.includes('thakurwadi') || 
        placeId.includes('durga') ||
        placeId.includes('dargah') ||
        placeId.includes('imamgadha') ||
        placeId.includes('shivalaya') ||
        placeId.includes('devsthan') ||
        placeId.includes('maharani')
    );

    return (
        <>
            <Hero
                title={getLangValue(place.name)}
                subtitle={`${place.englishName} - ${t.prominentPlace}`}
                backgroundImage={place.heroImage}
            />

            <div className="bg-gradient-to-b from-gray-50 to-white">
                {/* Quick Info Bar */}
                <div className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <a
                                href="/about"
                                className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 font-semibold transition-colors"
                            >
                                <ArrowLeft className="w-5 h-5" />
                                <span>{t.goBack}</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Left Column - Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Location Badge */}
                            <div className="inline-flex items-center space-x-2 bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-full">
                                <MapPin className="w-4 h-4" />
                                <span className="text-sm font-semibold">{getLangValue(place.location)}</span>
                            </div>

                            {/* Tabs */}
                            <div className="border-b border-gray-200">
                                <div className="flex space-x-8">
                                    {[
                                        { id: 'about', label: t.details, icon: Info },
                                        { id: 'gallery', label: t.gallery, icon: Camera },
                                        { id: 'programs', label: place.programs && place.programs.length > 0 ? (isEducational ? t.programs : t.festivals) : t.festivals, icon: Sparkles }
                                    ].map((tab) => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`flex items-center space-x-2 pb-4 px-2 font-semibold transition-colors relative ${activeTab === tab.id
                                                ? 'text-green-600'
                                                : 'text-gray-600 hover:text-gray-900'
                                                }`}
                                        >
                                            <tab.icon className="w-5 h-5" />
                                            <span>{tab.label}</span>
                                            {activeTab === tab.id && (
                                                <motion.div
                                                    layoutId="activeTab"
                                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600"
                                                />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Tab Content */}
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {activeTab === 'about' && (
                                    <div className="space-y-6">
                                        <div className="prose prose-lg max-w-none">
                                            <h2 className="text-3xl font-black text-gray-900 mb-4">
                                                {getLangValue(place.name)} {t.about}
                                            </h2>
                                            <p className="text-gray-700 leading-relaxed text-lg">
                                                {getLangValue(place.description.main)}
                                            </p>

                                            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                                                {t.historicalSignificance}
                                            </h3>
                                            <p className="text-gray-700 leading-relaxed">
                                                {getLangValue(place.description.history)}
                                            </p>

                                            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                                                {isReligious ? t.religiousSignificance : t.significance}
                                            </h3>
                                            <p className="text-gray-700 leading-relaxed">
                                                {getLangValue(place.description.importance)}
                                            </p>

                                            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg my-8">
                                                <div className="flex items-start space-x-3">
                                                    <Sparkles className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                                                    <div>
                                                        <h4 className="font-bold text-yellow-900 mb-2">{t.specialInfo}</h4>
                                                        <p className="text-yellow-800">{t.specialInfoDesc}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t.facilities}</h3>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                {place.facilities && place.facilities.length > 0 ? (
                                                    place.facilities.map((facility, idx) => (
                                                        <div key={idx} className="flex items-center space-x-3 bg-green-50 rounded-lg p-4">
                                                            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                                            <span className="text-gray-700 font-medium">{getLangValue(facility)}</span>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <p className="text-gray-600 col-span-2">No facilities listed</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'gallery' && (
                                    <div className="space-y-6">
                                        <h2 className="text-3xl font-black text-gray-900 mb-6">{t.photoGallery}</h2>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            {place.galleryImages && place.galleryImages.length > 0 ? (
                                                place.galleryImages.map((image, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, scale: 0.9 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                                                        className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                                                    >
                                                        <img
                                                            src={image.url}
                                                            alt={getLangValue(image.caption)}
                                                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                                                <p className="text-white font-semibold text-lg">{getLangValue(image.caption)}</p>
                                                            </div>
                                                        </div>
                                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                            <Camera className="w-5 h-5 text-green-600" />
                                                        </div>
                                                    </motion.div>
                                                ))
                                            ) : (
                                                <p className="text-gray-600 col-span-2">No gallery images available</p>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'programs' && (
                                    <div className="space-y-6">
                                        <h2 className="text-3xl font-black text-gray-900 mb-6">
                                            {isEducational ? t.programsAndCourses : t.festivalsCelebrations}
                                        </h2>
                                        {place.programs && place.programs.length > 0 ? (
                                            <div className="space-y-4">
                                                {place.programs.map((program, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                                                        className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100"
                                                    >
                                                        <div className="flex items-start justify-between">
                                                            <div className="flex-1">
                                                                <h3 className="text-xl font-bold text-gray-900 mb-2">{getLangValue(program.name)}</h3>
                                                                <p className="text-gray-600 mb-3">{getLangValue(program.desc)}</p>
                                                                <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                                                                    <Calendar className="w-4 h-4" />
                                                                    <span>{getLangValue(program.duration)}</span>
                                                                </div>
                                                            </div>
                                                            <div className="ml-4">
                                                                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                                                                    {isEducational ? '📚' : '🎉'}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        ) : (
                                            <p className="text-gray-600">No programs or festivals listed</p>
                                        )}
                                    </div>
                                )}
                            </motion.div>
                        </div>

                        {/* Right Column - Sidebar */}
                        <div className="space-y-6">
                            {/* Quick Features */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">{t.quickInfo}</h3>
                                <div className="space-y-4">
                                    {place.features && place.features.length > 0 ? (
                                        place.features.map((feature, idx) => {
                                            const IconComponent = iconComponents[feature.icon] || Star;
                                            return (
                                                <div key={idx} className="flex items-start space-x-4">
                                                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                                                        <IconComponent className="w-6 h-6 text-white" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-gray-900">{getLangValue(feature.title)}</h4>
                                                        <p className="text-sm text-gray-600">{getLangValue(feature.desc)}</p>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    ) : (
                                        <p className="text-gray-600">No features available</p>
                                    )}
                                </div>
                            </div>

                            {/* Guidelines */}
                            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                                <h3 className="text-lg font-bold text-blue-900 mb-4">
                                    {isEducational ? t.admissionGuidelines : t.guidelines}
                                </h3>
                                <ul className="space-y-2 text-sm text-blue-800">
                                    <li className="flex items-start space-x-2">
                                        <ChevronRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                        <span>{t.maintainCleanliness}</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <ChevronRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                        <span>{t.photographyAllowed}</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <ChevronRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                        <span>{t.maintainSilence}</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <ChevronRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                        <span>{t.followRules}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Places */}
                <div className="bg-gray-50 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-black text-gray-900 mb-8">{t.otherPlaces}</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {Object.entries(placesData)
                                .filter(([id]) => id !== placeId)
                                .slice(0, 3)
                                .map(([id, relatedPlace], idx) => (
                                    <motion.a
                                        key={idx}
                                        href={`/places/${id}`}
                                        whileHover={{ y: -5 }}
                                        className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                                    >
                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src={relatedPlace.heroImage}
                                                alt={getLangValue(relatedPlace.name)}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                            <h3 className="absolute bottom-4 left-4 right-4 text-white font-bold text-lg">{getLangValue(relatedPlace.name)}</h3>
                                        </div>
                                        <div className="p-4 flex items-center justify-between">
                                            <span className="text-green-600 font-semibold text-sm">{t.viewDetails}</span>
                                            <ArrowRight className="w-5 h-5 text-green-600 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </motion.a>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PlaceDetailPage;
