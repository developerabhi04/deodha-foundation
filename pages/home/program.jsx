// components/home/program.jsx - Complete with Translation Support
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Download, Users, GraduationCap, Heart, Sprout } from 'lucide-react';
import { useLanguage } from '../../lib/LanguageContext';

const ProgramsSection = () => {
    const { language, t } = useLanguage();
    const [currentSlide, setCurrentSlide] = useState(0);

    // Stats data with translations
    const stats = [
        {
            value: 10000,
            suffix: '+',
            label: language === 'hi' ? 'प्रभावित जीवन' : 'Lives Impacted',
            icon: Users,
            color: 'bg-green-500'
        },
        {
            value: 500,
            suffix: '+',
            label: language === 'hi' ? 'शिक्षित छात्र' : 'Students Educated',
            icon: GraduationCap,
            color: 'bg-blue-500'
        },
        {
            value: 300,
            suffix: '+',
            label: language === 'hi' ? 'समर्थित किसान' : 'Farmers Supported',
            icon: Sprout,
            color: 'bg-emerald-500'
        },
        {
            value: 200,
            suffix: '+',
            label: language === 'hi' ? 'सशक्त महिलाएं' : 'Women Empowered',
            icon: Heart,
            color: 'bg-pink-500'
        },
    ];

    // Programs data with full translations
    const programs = [
        {
            id: 'education',
            title: language === 'hi' ? 'शैक्षिक कार्यक्रम' : 'Education Programs',
            titleHindi: 'शैक्षिक कार्यक्रम',
            icon: '📚',
            image: 'https://savioursfoundation.org/wp-content/uploads/2021/03/teach-for-india-1024x576.jpg',
            gradient: 'from-blue-500 to-indigo-600',
            bgGradient: 'from-blue-50 to-indigo-50',
            borderColor: 'border-blue-100',
            iconColor: 'text-blue-600',
            description: language === 'hi'
                ? 'धेवधा में शिक्षा को बदलने के लिए स्कूल की गुणवत्ता में सुधार, डिजिटल लाइब्रेरी सेटअप, स्कूल के बाद ट्यूशन, और छात्र जागरूकता अभियान।'
                : 'Improving school quality, digital library setup, after-school tuition, and student awareness campaigns to transform education in Dheodha.',
            initiatives: language === 'hi'
                ? [
                    'ई-लर्निंग संसाधनों के साथ डिजिटल लाइब्रेरी',
                    'स्कूल के बाद निःशुल्क ट्यूशन सहायता',
                    'शिक्षक प्रशिक्षण और संलग्नता',
                    'मेधावी छात्रों के लिए छात्रवृत्ति कार्यक्रम'
                ]
                : [
                    'Digital library with e-learning resources',
                    'Free after-school tuition support',
                    'Teacher training and engagement',
                    'Scholarship programs for meritorious students'
                ],
            beneficiaries: language === 'hi' ? '500+ छात्र' : '500+ students',
            impact: language === 'hi' ? 'बेहतर सीखने के परिणाम' : 'Enhanced learning outcomes'
        },
        {
            id: 'health',
            title: language === 'hi' ? 'स्वास्थ्य और स्वच्छता' : 'Health & Hygiene',
            titleHindi: 'स्वास्थ्य और स्वच्छता',
            icon: '🏥',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1763061620/Image00001dss-1_afdlmp.jpg',
            gradient: 'from-red-500 to-pink-600',
            bgGradient: 'from-red-50 to-pink-50',
            borderColor: 'border-red-100',
            iconColor: 'text-red-600',
            description: language === 'hi'
                ? 'धेवधा में नियमित स्वास्थ्य शिविर, स्वच्छता जागरूकता, पोषण शिक्षा, और स्वास्थ्य सेवा बुनियादी ढांचे के लिए वकालत।'
                : 'Regular health camps, hygiene awareness, nutrition education, and advocacy for healthcare infrastructure in Dheodha.',
            initiatives: language === 'hi'
                ? [
                    'निःशुल्क जांच के साथ त्रैमासिक स्वास्थ्य शिविर',
                    'स्वच्छता और स्वच्छता जागरूकता',
                    'मातृ और बाल स्वास्थ्य फोकस',
                    'दवा वितरण कार्यक्रम'
                ]
                : [
                    'Quarterly health camps with free check-ups',
                    'Hygiene and sanitation awareness',
                    'Maternal and child health focus',
                    'Medicine distribution programs'
                ],
            beneficiaries: language === 'hi' ? '1,000+ ग्रामवासी' : '1,000+ villagers',
            impact: language === 'hi' ? 'बेहतर स्वास्थ्य परिणाम' : 'Improved health outcomes'
        },
        {
            id: 'women-empowerment',
            title: language === 'hi' ? 'महिला सशक्तिकरण' : 'Women Empowerment',
            titleHindi: 'महिला सशक्तिकरण',
            icon: '👩‍🏫',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
            gradient: 'from-pink-500 to-purple-600',
            bgGradient: 'from-pink-50 to-purple-50',
            borderColor: 'border-pink-100',
            iconColor: 'text-pink-600',
            description: language === 'hi'
                ? 'धेवधा में महिलाओं को सशक्त बनाने के लिए कौशल विकास, सुरक्षा पहल, स्वयं सहायता समूह, और नेतृत्व प्रशिक्षण।'
                : 'Skill development, safety initiatives, self-help groups, and leadership training empowering women in Dheodha.',
            initiatives: language === 'hi'
                ? [
                    'सिलाई और हस्तशिल्प में व्यावसायिक प्रशिक्षण',
                    'स्वयं सहायता समूह गठन और सूक्ष्म वित्त',
                    'सुरक्षा जागरूकता और नेतृत्व विकास',
                    'महिला उद्यमिता समर्थन'
                ]
                : [
                    'Vocational training in sewing and handicrafts',
                    'Self-help group formation and microfinance',
                    'Safety awareness and leadership development',
                    'Women entrepreneurship support'
                ],
            beneficiaries: language === 'hi' ? '200+ महिलाएं' : '200+ women',
            impact: language === 'hi' ? 'आर्थिक स्वतंत्रता' : 'Economic independence'
        },
        {
            id: 'cultural-revival',
            title: language === 'hi' ? 'सांस्कृतिक पुनरुद्धार' : 'Cultural Revival',
            titleHindi: 'सांस्कृतिक पुनरुत्थान',
            icon: '🎭',
            image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80',
            gradient: 'from-purple-500 to-indigo-600',
            bgGradient: 'from-purple-50 to-indigo-50',
            borderColor: 'border-purple-100',
            iconColor: 'text-purple-600',
            description: language === 'hi'
                ? 'राष्ट्रीय नाट्य कला परिषद का पुनरुद्धार, पारंपरिक लोक कलाएं, और धेवधा की समृद्ध विरासत का जश्न मनाने वाले सांस्कृतिक त्योहारों का आयोजन।'
                : 'Reviving Rastriya Natya Kala Parishad, traditional folk arts, and organizing cultural festivals celebrating Dheodha\'s rich heritage.',
            initiatives: language === 'hi'
                ? [
                    'राष्ट्रीय नाट्य कला परिषद का पुनरुद्धार',
                    'दुर्गा पूजा "डोमरा-डुमरी का नाच" प्रदर्शन',
                    'पारंपरिक कलाओं में युवा प्रशिक्षण',
                    'सांस्कृतिक त्योहार संगठन'
                ]
                : [
                    'Revival of Rastriya Natya Kala Parishad',
                    'Durga Puja "डोमरा-डुमरी का नाच" performances',
                    'Youth training in traditional arts',
                    'Cultural festival organization'
                ],
            beneficiaries: language === 'hi' ? 'पूरा गांव' : 'Entire village',
            impact: language === 'hi' ? 'विरासत संरक्षण' : 'Heritage preservation'
        },
        {
            id: 'agriculture',
            title: language === 'hi' ? 'कृषि विकास' : 'Agriculture Development',
            titleHindi: 'कृषि विकास',
            icon: '🌾',
            image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80',
            gradient: 'from-green-500 to-emerald-600',
            bgGradient: 'from-green-50 to-emerald-50',
            borderColor: 'border-green-100',
            iconColor: 'text-green-600',
            description: language === 'hi'
                ? 'टिकाऊ कृषि के लिए आधुनिक खेती की तकनीक, जैविक प्रथाएं, फसल विविधीकरण, और किसान प्रशिक्षण।'
                : 'Modern farming techniques, organic practices, crop diversification, and farmer training for sustainable agriculture.',
            initiatives: language === 'hi'
                ? [
                    'जैविक खेती प्रशिक्षण कार्यशालाएं',
                    'आधुनिक सिंचाई तकनीक',
                    'फसल विविधीकरण मार्गदर्शन',
                    'बाजार लिंकेज समर्थन'
                ]
                : [
                    'Organic farming training workshops',
                    'Modern irrigation techniques',
                    'Crop diversification guidance',
                    'Market linkage support'
                ],
            beneficiaries: language === 'hi' ? '300+ किसान' : '300+ farmers',
            impact: language === 'hi' ? 'बढ़ी हुई फसल उपज' : 'Increased crop yield'
        },
        {
            id: 'digital',
            title: language === 'hi' ? 'डिजिटल परिवर्तन' : 'Digital Transformation',
            titleHindi: 'डिजिटल परिवर्तन',
            icon: '💻',
            image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80',
            gradient: 'from-indigo-500 to-blue-600',
            bgGradient: 'from-indigo-50 to-blue-50',
            borderColor: 'border-indigo-100',
            iconColor: 'text-indigo-600',
            description: language === 'hi'
                ? 'गांव के विकास के लिए डिजिटल साक्षरता कार्यक्रम, ऑनलाइन प्लेटफ़ॉर्म, ई-गवर्नेंस, और प्रौद्योगिकी अपनाना।'
                : 'Digital literacy programs, online platforms, e-governance, and technology adoption for village development.',
            initiatives: language === 'hi'
                ? [
                    'डिजिटल साक्षरता प्रशिक्षण',
                    'ई-गवर्नेंस कार्यान्वयन',
                    'गांव की वेबसाइट और सोशल मीडिया',
                    'ऑनलाइन सामुदायिक प्लेटफॉर्म'
                ]
                : [
                    'Digital literacy training',
                    'E-governance implementation',
                    'Village website and social media',
                    'Online community platforms'
                ],
            beneficiaries: language === 'hi' ? 'सभी आयु वर्ग' : 'All age groups',
            impact: language === 'hi' ? 'डिजिटल सशक्तिकरण' : 'Digital empowerment'
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % programs.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + programs.length) % programs.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <section id="programs" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        {language === 'hi' ? 'सामुदायिक कार्यक्रम' : 'Community Programs'}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {language === 'hi'
                            ? 'शिक्षा, स्वास्थ्य, सशक्तिकरण और सांस्कृतिक पुनरुद्धार को संबोधित करने वाली व्यापक पहल'
                            : 'Comprehensive initiatives addressing education, health, empowerment, and cultural revival'
                        }
                    </p>
                </div>

                {/* Advanced Custom Slider */}
                <div className="relative mb-16">
                    {/* Main Slider Content */}
                    <div className="relative overflow-hidden rounded-3xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                                className={`bg-gradient-to-br ${programs[currentSlide].bgGradient} border ${programs[currentSlide].borderColor}`}
                            >
                                <div className="grid lg:grid-cols-2 gap-8 items-center">
                                    {/* Image Section */}
                                    <div className="relative h-96 lg:h-[500px] overflow-hidden lg:rounded-l-3xl">
                                        <img
                                            src={programs[currentSlide].image}
                                            alt={programs[currentSlide].title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-t ${programs[currentSlide].gradient} opacity-40`}></div>
                                        <div className="absolute top-6 left-6">
                                            <div className="text-6xl bg-white/20 backdrop-blur-sm p-4 rounded-2xl border-2 border-white/30">
                                                {programs[currentSlide].icon}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-8 lg:p-12">
                                        <div className="mb-4">
                                            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                                                {programs[currentSlide].title}
                                            </h3>
                                            {language === 'en' && (
                                                <p className="text-lg text-gray-600 font-semibold">
                                                    {programs[currentSlide].titleHindi}
                                                </p>
                                            )}
                                        </div>

                                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                            {programs[currentSlide].description}
                                        </p>

                                        {/* Initiatives List */}
                                        <div className="mb-6">
                                            <h4 className="text-sm font-bold text-gray-500 uppercase mb-3">
                                                {language === 'hi' ? 'प्रमुख पहल' : 'Key Initiatives'}
                                            </h4>
                                            <ul className="space-y-3">
                                                {programs[currentSlide].initiatives.map((initiative, idx) => (
                                                    <li key={idx} className="flex items-start space-x-3">
                                                        <ChevronRight className={`w-5 h-5 ${programs[currentSlide].iconColor} mt-0.5 flex-shrink-0`} />
                                                        <span className="text-gray-700">{initiative}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Stats */}
                                        <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                                            <div>
                                                <div className="text-sm text-gray-600 mb-1">
                                                    {language === 'hi' ? 'लाभार्थी' : 'Beneficiaries'}
                                                </div>
                                                <div className={`text-xl font-bold bg-gradient-to-r ${programs[currentSlide].gradient} bg-clip-text text-transparent`}>
                                                    {programs[currentSlide].beneficiaries}
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-sm text-gray-600 mb-1">
                                                    {language === 'hi' ? 'प्रभाव' : 'Impact'}
                                                </div>
                                                <div className={`text-xl font-bold bg-gradient-to-r ${programs[currentSlide].gradient} bg-clip-text text-transparent`}>
                                                    {programs[currentSlide].impact}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center hover:bg-gray-100 transition-all group"
                    >
                        <ChevronLeft className="w-7 h-7 text-gray-700 group-hover:scale-110 transition-transform" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center hover:bg-gray-100 transition-all group"
                    >
                        <ChevronRight className="w-7 h-7 text-gray-700 group-hover:scale-110 transition-transform" />
                    </button>

                    {/* Dot Indicators */}
                    <div className="flex justify-center space-x-3 mt-8">
                        {programs.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all ${currentSlide === index
                                    ? 'w-12 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full'
                                    : 'w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Program Cards Grid - Quick Access */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {programs.map((program, index) => (
                        <button
                            key={program.id}
                            onClick={() => goToSlide(index)}
                            className={`p-4 rounded-xl border-2 transition-all ${currentSlide === index
                                ? `border-transparent bg-gradient-to-br ${program.gradient} text-white shadow-lg scale-105`
                                : `border-gray-200 bg-white hover:border-gray-300 hover:shadow-md`
                                }`}
                        >
                            <div className="text-3xl mb-2">{program.icon}</div>
                            <div className={`text-sm font-semibold ${currentSlide === index ? 'text-white' : 'text-gray-900'}`}>
                                {program.title.split(' ')[0]}
                            </div>
                        </button>
                    ))}
                </div>

                {/* Impact Reports */}
                <div id="impact-reports" className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 mt-16">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            {language === 'hi' ? 'प्रभाव रिपोर्ट' : 'Impact Reports'}
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            {language === 'hi'
                                ? 'हमारे सामुदायिक विकास कार्य की पारदर्शी रिपोर्टिंग'
                                : 'Transparent reporting of our community development work'
                            }
                        </p>
                    </div>

                    {/* Stats Component */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
                                <div className={`${stat.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                                    <stat.icon className="w-8 h-8 text-white" />
                                </div>
                                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}{stat.suffix}</div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <a
                            href="#"
                            className="inline-flex items-center space-x-2 bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                        >
                            <Download className="w-5 h-5" />
                            <span>{language === 'hi' ? 'विस्तृत रिपोर्ट डाउनलोड करें' : 'Download Detailed Report'}</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgramsSection;
