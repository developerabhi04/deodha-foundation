// pages/places/[placeId].jsx
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import {
    ArrowLeft, MapPin, Calendar, Clock, Star, Heart,
    Share2, Camera, Users, Sparkles, Info,
    Navigation, Phone, Mail, Globe, ChevronRight,
    ArrowRight
} from 'lucide-react';
import Hero from '@/components/Hero';
import { placesData } from '@/lib/placeData';

const PlaceDetailPage = () => {
    const router = useRouter();
    const { placeId } = router.query;
    const [activeTab, setActiveTab] = useState('about');

    // Get place data or show not found
    const place = placeId ? placesData[placeId] : null;

    // Show loading while router is loading
    if (!router.isReady) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <p className="text-gray-600">Loading...</p>
                </div>
            </div>
        );
    }

    if (!place) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">स्थान नहीं मिला</h2>
                    <p className="text-gray-600 mb-6">क्षमा करें, यह स्थान उपलब्ध नहीं है।</p>
                    <a
                        href="/about"
                        className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span>वापस जाएं</span>
                    </a>
                </div>
            </div>
        );
    }

    const iconComponents = { Clock, Calendar, Users, Star };

    return (
        <>
            <Hero
                title={place.name}
                subtitle={`${place.englishName} - धेवधा गांव का प्रमुख स्थान`}
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
                                <span>वापस जाएं</span>
                            </a>

                            <div className="flex items-center space-x-6">
                                <button className="inline-flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors">
                                    <Heart className="w-5 h-5" />
                                    <span className="text-sm font-medium">पसंद करें</span>
                                </button>
                                <button className="inline-flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors">
                                    <Share2 className="w-5 h-5" />
                                    <span className="text-sm font-medium">शेयर करें</span>
                                </button>
                            </div>
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
                                <span className="text-sm font-semibold">{place.location}</span>
                            </div>

                            {/* Tabs */}
                            <div className="border-b border-gray-200">
                                <div className="flex space-x-8">
                                    {[
                                        { id: 'about', label: 'विवरण', icon: Info },
                                        { id: 'gallery', label: 'गैलरी', icon: Camera },
                                        { id: 'programs', label: place.programs ? 'कार्यक्रम' : 'त्योहार', icon: Sparkles }
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
                                            <h2 className="text-3xl font-black text-gray-900 mb-4">{place.name} के बारे में</h2>
                                            <p className="text-gray-700 leading-relaxed text-lg">
                                                {place.description.main}
                                            </p>

                                            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">ऐतिहासिक महत्व</h3>
                                            <p className="text-gray-700 leading-relaxed">
                                                {place.description.history}
                                            </p>

                                            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                                                {placeId && (placeId.includes('temple') || placeId.includes('sthan')) ? 'धार्मिक महत्व' : 'महत्व'}
                                            </h3>
                                            <p className="text-gray-700 leading-relaxed">
                                                {place.description.importance}
                                            </p>

                                            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg my-8">
                                                <div className="flex items-start space-x-3">
                                                    <Sparkles className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                                                    <div>
                                                        <h4 className="font-bold text-yellow-900 mb-2">विशेष सूचना</h4>
                                                        <p className="text-yellow-800">
                                                            अधिक जानकारी के लिए कृपया समिति से संपर्क करें।
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">सुविधाएं</h3>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                {place.facilities.map((facility, idx) => (
                                                    <div key={idx} className="flex items-center space-x-3 bg-green-50 rounded-lg p-4">
                                                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                                        <span className="text-gray-700 font-medium">{facility}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'gallery' && (
                                    <div className="space-y-6">
                                        <h2 className="text-3xl font-black text-gray-900 mb-6">फोटो गैलरी</h2>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            {place.galleryImages.map((image, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                                                    className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                                                >
                                                    <img
                                                        src={image.url}
                                                        alt={image.caption}
                                                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                                            <p className="text-white font-semibold text-lg">{image.caption}</p>
                                                        </div>
                                                    </div>
                                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <Camera className="w-5 h-5 text-green-600" />
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'programs' && place.programs && (
                                    <div className="space-y-6">
                                        <h2 className="text-3xl font-black text-gray-900 mb-6">
                                            {placeId && (placeId.includes('school') || placeId.includes('college')) ? 'कार्यक्रम और पाठ्यक्रम' : 'प्रमुख त्योहार और उत्सव'}
                                        </h2>
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
                                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{program.name}</h3>
                                                            <p className="text-gray-600 mb-3">{program.desc}</p>
                                                            <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                                                                <Calendar className="w-4 h-4" />
                                                                <span>{program.duration}</span>
                                                            </div>
                                                        </div>
                                                        <div className="ml-4">
                                                            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                                                                {placeId && (placeId.includes('school') || placeId.includes('college')) ? '📚' : '🎉'}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </div>

                        {/* Right Column - Sidebar (CONTINUED IN NEXT PART) */}
                        <div className="space-y-6">
                            {/* Quick Features */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">त्वरित जानकारी</h3>
                                <div className="space-y-4">
                                    {place.features.map((feature, idx) => {
                                        const IconComponent = iconComponents[feature.icon];
                                        return (
                                            <div key={idx} className="flex items-start space-x-4">
                                                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                                                    <IconComponent className="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900">{feature.title}</h4>
                                                    <p className="text-sm text-gray-600">{feature.desc}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Location Card */}
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">स्थान और दिशा</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="font-semibold text-gray-900">{place.name}</p>
                                            <p className="text-sm text-gray-600">{place.location}</p>
                                        </div>
                                    </div>
                                    <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-xl transition-colors flex items-center justify-center space-x-2">
                                        <Navigation className="w-5 h-5" />
                                        <span>मार्ग दिखाएं</span>
                                    </button>
                                </div>
                            </div>

                            {/* Contact Card */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">संपर्क करें</h3>
                                <div className="space-y-3">
                                    <a href="tel:+919876543210" className="flex items-center space-x-3 text-gray-700 hover:text-green-600 transition-colors">
                                        <Phone className="w-5 h-5" />
                                        <span className="text-sm font-medium">+91 98765 43210</span>
                                    </a>
                                    <a href="mailto:info@dheodhavikassamiti.org" className="flex items-center space-x-3 text-gray-700 hover:text-green-600 transition-colors">
                                        <Mail className="w-5 h-5" />
                                        <span className="text-sm font-medium">संपर्क करें</span>
                                    </a>
                                    <a href="/about" className="flex items-center space-x-3 text-gray-700 hover:text-green-600 transition-colors">
                                        <Globe className="w-5 h-5" />
                                        <span className="text-sm font-medium">अन्य स्थान देखें</span>
                                    </a>
                                </div>
                            </div>

                            {/* Guidelines */}
                            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                                <h3 className="text-lg font-bold text-blue-900 mb-4">
                                    {placeId && (placeId.includes('school') || placeId.includes('college')) ? 'प्रवेश दिशा-निर्देश' : 'दर्शनार्थियों के लिए दिशा-निर्देश'}
                                </h3>
                                <ul className="space-y-2 text-sm text-blue-800">
                                    <li className="flex items-start space-x-2">
                                        <ChevronRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                        <span>कृपया स्वच्छता बनाए रखें</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <ChevronRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                        <span>फोटोग्राफी की अनुमति है</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <ChevronRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                        <span>शांति बनाए रखें</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <ChevronRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                        <span>सभी नियमों का पालन करें</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Places */}
                <div className="bg-gray-50 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-black text-gray-900 mb-8">अन्य प्रमुख स्थान</h2>
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
                                                alt={relatedPlace.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                            <h3 className="absolute bottom-4 left-4 right-4 text-white font-bold text-lg">{relatedPlace.name}</h3>
                                        </div>
                                        <div className="p-4 flex items-center justify-between">
                                            <span className="text-green-600 font-semibold text-sm">विवरण देखें</span>
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
