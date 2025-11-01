// components/about/AboutVisionMission.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target, Building2, BookOpen, Heart, Crown, Users, Lightbulb } from 'lucide-react';
import { useLanguage } from '../../lib/LanguageContext';

const AboutVisionMission = () => {
    const { language } = useLanguage();

    const missionPoints = [
        {
            icon: Building2,
            title: language === 'hi' ? 'बुनियादी ढांचा विकास' : 'Infrastructure Development',
            desc: language === 'hi'
                ? 'सड़क, नाली और सार्वजनिक सुविधाओं का सुधार'
                : 'Improvement of roads, drainage, and public facilities',
            color: 'from-blue-600 to-indigo-600'
        },
        {
            icon: BookOpen,
            title: language === 'hi' ? 'शिक्षा और डिजिटल सशक्तिकरण' : 'Education & Digital Empowerment',
            desc: language === 'hi'
                ? 'लाइब्रेरी, ई-लर्निंग और स्किल डेवलपमेंट'
                : 'Library, e-learning, and skill development',
            color: 'from-green-600 to-emerald-600'
        },
        {
            icon: Heart,
            title: language === 'hi' ? 'स्वास्थ्य और स्वच्छता' : 'Health & Sanitation',
            desc: language === 'hi'
                ? 'जन-जागरूकता अभियान और सफाई पहल'
                : 'Public awareness campaigns and sanitation initiatives',
            color: 'from-pink-600 to-rose-600'
        },
        {
            icon: Crown,
            title: language === 'hi' ? 'सांस्कृतिक संरक्षण' : 'Cultural Preservation',
            desc: language === 'hi'
                ? 'पारंपरिक त्योहारों और धरोहरों का संरक्षण'
                : 'Preservation of traditional festivals and heritage',
            color: 'from-purple-600 to-violet-600'
        },
        {
            icon: Users,
            title: language === 'hi' ? 'महिला सशक्तिकरण' : 'Women Empowerment',
            desc: language === 'hi'
                ? 'रोजगार और नेतृत्व के अवसर'
                : 'Employment and leadership opportunities',
            color: 'from-orange-600 to-amber-600'
        },
        {
            icon: Lightbulb,
            title: language === 'hi' ? 'युवा नेतृत्व' : 'Youth Leadership',
            desc: language === 'hi'
                ? 'युवाओं को नेतृत्व के अवसर प्रदान करना'
                : 'Providing leadership opportunities to youth',
            color: 'from-teal-600 to-cyan-600'
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
        >
            {/* Vision Section */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200">
                <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Eye className="w-8 h-8 text-white" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">
                            {language === 'hi' ? 'हमारा विज़न' : 'Our Vision'}
                        </h2>
                        <p className="text-blue-600 font-semibold">
                            {language === 'hi' ? 'भविष्य की कल्पना' : 'Imagining the Future'}
                        </p>
                    </div>
                </div>

                <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 text-lg leading-relaxed">
                        {language === 'hi' ? (
                            <>
                                धेवधा गांव को <strong className="text-blue-600">बिहार का एक आदर्श गांव</strong> बनाना, जहां हर व्यक्ति को <strong>शिक्षा, स्वास्थ्य, रोजगार और सम्मानजनक जीवन</strong> के समान अवसर मिलें। एक ऐसा गांव जो अपनी <strong>सांस्कृतिक धरोहर</strong> को संरक्षित रखते हुए <strong>आधुनिकता</strong> को अपनाए।
                            </>
                        ) : (
                            <>
                                To make Dheodha village a <strong className="text-blue-600">model village of Bihar</strong>, where every person has equal opportunities for <strong>education, health, employment, and dignified life</strong>. A village that embraces <strong>modernity</strong> while preserving its <strong>cultural heritage</strong>.
                            </>
                        )}
                    </p>
                </div>
            </div>

            {/* Mission Section */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
                <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Target className="w-8 h-8 text-white" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">
                            {language === 'hi' ? 'हमारा मिशन' : 'Our Mission'}
                        </h2>
                        <p className="text-green-600 font-semibold">
                            {language === 'hi' ? 'हमारे उद्देश्य' : 'Our Goals'}
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {missionPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-green-300"
                        >
                            <div className={`w-14 h-14 bg-gradient-to-br ${point.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                                <point.icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{point.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{point.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Values Section */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                    {language === 'hi' ? 'हमारे मूल्य' : 'Our Core Values'}
                </h2>

                <div className="grid md:grid-cols-4 gap-6">
                    {[
                        {
                            title: language === 'hi' ? 'पारदर्शिता' : 'Transparency',
                            desc: language === 'hi' ? '100% वित्तीय पारदर्शिता' : '100% financial transparency',
                            icon: '🔍'
                        },
                        {
                            title: language === 'hi' ? 'समावेशिता' : 'Inclusivity',
                            desc: language === 'hi' ? 'सभी के लिए समान अवसर' : 'Equal opportunities for all',
                            icon: '🤝'
                        },
                        {
                            title: language === 'hi' ? 'सतत विकास' : 'Sustainability',
                            desc: language === 'hi' ? 'पर्यावरण के अनुकूल विकास' : 'Environment-friendly development',
                            icon: '🌱'
                        },
                        {
                            title: language === 'hi' ? 'सामुदायिक भागीदारी' : 'Community Participation',
                            desc: language === 'hi' ? 'सभी की भागीदारी और निर्णय' : 'Everyone\'s participation and decisions',
                            icon: '👥'
                        }
                    ].map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all"
                        >
                            <div className="text-4xl mb-3">{value.icon}</div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                            <p className="text-gray-600 text-sm">{value.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default AboutVisionMission;
