// components/home/about.jsx - With Translation Support
import React from 'react';
import {
    ArrowRight, Eye, Target, Users, Heart, Phone, Lightbulb,
    TrendingUp, Award, UserPlus, CheckCircle2,
    Mail, Sparkles, ChevronLeft, ChevronRight
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '../../lib/LanguageContext';

const AboutSection = () => {
    const { language, t } = useLanguage();

    const teamMembers = [
        {
            name: language === 'hi' ? 'राजेश कुमार' : 'Rajesh Kumar',
            role: language === 'hi' ? 'अध्यक्ष' : 'President',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761915377/Rajesh3_au0gif.jpg',
            color: 'from-blue-500 to-indigo-600',
        },
        {
            name: language === 'hi' ? 'चंदन कुमार' : 'Chandan Kumar',
            role: language === 'hi' ? 'उपाध्यक्ष' : 'Vice President',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761914290/ChandanPhoto_jywqnh.jpg',
            color: 'from-green-500 to-emerald-600',
        },
        {
            name: language === 'hi' ? 'मितेंद्र कुमार' : 'Mitendra Kumar',
            role: language === 'hi' ? 'सचिव' : 'Secretary',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761915194/FuntyPhoto2_qrhwg3.jpg',
            color: 'from-purple-500 to-violet-600',
        },
        {
            name: language === 'hi' ? 'देवकांत मिश्रा' : 'Devkant Mishra',
            role: language === 'hi' ? 'कोषाध्यक्ष' : 'Treasurer',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761915355/Devkant2_dmk7sw.jpg',
            color: 'from-pink-500 to-rose-600',
        },
        {
            name: language === 'hi' ? 'ब्रजेश कुमार' : 'Brajesh Kumar',
            role: language === 'hi' ? 'उप-सचिव' : 'Vice-Secretary',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761914290/BrajeshPhoto_zyqivv.jpg',
            color: 'from-orange-500 to-amber-600',
        }
    ];

    const focusAreas = [
        {
            id: 'education',
            title: language === 'hi' ? 'शिक्षा' : 'Education',
            titleHindi: 'शिक्षा',
            icon: '📚',
            image: 'https://savioursfoundation.org/wp-content/uploads/2021/03/teach-for-india-1024x576.jpg',
            description: language === 'hi'
                ? 'गुणवत्ता सुधार, डिजिटल शिक्षण संसाधन, स्कूल के बाद ट्यूशन सहायता, और छात्र भागीदारी कार्यक्रमों के माध्यम से शिक्षा में परिवर्तन।'
                : 'Transforming education through quality improvement, digital learning resources, after-school tuition support, and engaging student participation programs.',
            initiatives: language === 'hi'
                ? ['डिजिटल लाइब्रेरी सेटअप', 'स्कूल के बाद ट्यूशन', 'शिक्षक प्रशिक्षण', 'छात्र छात्रवृत्ति']
                : ['Digital Library Setup', 'After-School Tuition', 'Teacher Training', 'Student Scholarships'],
            color: 'from-blue-500 to-blue-600',
            bgColor: 'from-blue-50 to-blue-100',
            stats: language === 'hi' ? '500+ छात्र' : '500+ students',
            impact: language === 'hi' ? 'सभी के लिए गुणवत्तापूर्ण शिक्षा' : 'Quality education for all'
        },
        {
            id: 'health',
            title: language === 'hi' ? 'स्वास्थ्य और स्वच्छता' : 'Health & Hygiene',
            titleHindi: 'स्वास्थ्य',
            icon: '🏥',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1763061620/Image00001dss-1_afdlmp.jpg',
            description: language === 'hi'
                ? 'व्यापक स्वास्थ्य सेवा पहुंच, स्वच्छता जागरूकता अभियान, निवारक स्वास्थ्य उपाय, और मातृ-बाल स्वास्थ्य कार्यक्रम।'
                : 'Comprehensive healthcare access, hygiene awareness campaigns, preventive health measures, and maternal-child health programs.',
            initiatives: language === 'hi'
                ? ['स्वास्थ्य शिविर', 'स्वच्छता प्रशिक्षण', 'मातृ देखभाल', 'रोग रोकथाम']
                : ['Health Camps', 'Hygiene Training', 'Maternal Care', 'Disease Prevention'],
            color: 'from-red-500 to-red-600',
            bgColor: 'from-red-50 to-red-100',
            stats: language === 'hi' ? '1000+ ग्रामीण' : '1000+ villagers',
            impact: language === 'hi' ? 'स्वस्थ समुदाय' : 'Healthier communities'
        },
        {
            id: 'women',
            title: language === 'hi' ? 'महिला सशक्तिकरण' : 'Women Empowerment',
            titleHindi: 'महिला सशक्तिकरण',
            icon: '👩‍🏫',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1763061889/tailoring2_s9x8hw.jpg',
            description: language === 'hi'
                ? 'व्यापक कौशल विकास, सुरक्षा पहल, स्वयं सहायता समूह गठन, और समावेशी भागीदारी के लिए मंच बनाना।'
                : 'Comprehensive skill development, safety initiatives, self-help group formation, and creating platforms for inclusive participation.',
            initiatives: language === 'hi'
                ? ['व्यावसायिक प्रशिक्षण', 'SHG गठन', 'सुरक्षा जागरूकता', 'नेतृत्व कार्यक्रम']
                : ['Vocational Training', 'SHG Formation', 'Safety Awareness', 'Leadership Programs'],
            color: 'from-pink-500 to-pink-600',
            bgColor: 'from-pink-50 to-pink-100',
            stats: language === 'hi' ? '200+ महिलाएं' : '200+ women',
            impact: language === 'hi' ? 'सशक्त भविष्य' : 'Empowered futures'
        },
        {
            id: 'agriculture',
            title: language === 'hi' ? 'कृषि' : 'Agriculture',
            titleHindi: 'कृषि',
            icon: '🌾',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1763040932/IMG_2791_pkxkqz.jpg',
            description: language === 'hi'
                ? 'आधुनिक खेती तकनीक, टिकाऊ कृषि प्रथाएं, फसल विविधीकरण मार्गदर्शन, और किसान सहायता नेटवर्क।'
                : 'Modern farming techniques, sustainable agricultural practices, crop diversification guidance, and farmer support networks.',
            initiatives: language === 'hi'
                ? ['आधुनिक तकनीक', 'जैविक खेती', 'फसल योजना', 'बाजार लिंकेज']
                : ['Modern Techniques', 'Organic Farming', 'Crop Planning', 'Market Linkages'],
            color: 'from-green-500 to-green-600',
            bgColor: 'from-green-50 to-green-100',
            stats: language === 'hi' ? '300+ किसान' : '300+ farmers',
            impact: language === 'hi' ? 'टिकाऊ खेती' : 'Sustainable farming'
        },
        {
            id: 'digital',
            title: language === 'hi' ? 'डिजिटलीकरण' : 'Digitalization',
            titleHindi: 'डिजिटलीकरण',
            icon: '💻',
            image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80',
            description: language === 'hi'
                ? 'डिजिटल बुनियादी ढांचा निर्माण, पारदर्शी ई-गवर्नेंस सुनिश्चित करना, ऑनलाइन सामुदायिक मंच, और डिजिटल विभाजन को पाटना।'
                : 'Building digital infrastructure, ensuring transparent e-governance, online community platforms, and bridging the digital divide.',
            initiatives: language === 'hi'
                ? ['ई-गवर्नेंस', 'डिजिटल साक्षरता', 'ऑनलाइन प्लेटफॉर्म', 'तकनीकी प्रशिक्षण']
                : ['E-Governance', 'Digital Literacy', 'Online Platforms', 'Tech Training'],
            color: 'from-indigo-500 to-indigo-600',
            bgColor: 'from-indigo-50 to-indigo-100',
            stats: language === 'hi' ? 'पूर्ण पारदर्शिता' : 'Full transparency',
            impact: language === 'hi' ? 'जुड़ा हुआ समुदाय' : 'Connected community'
        },
        {
            id: 'culture',
            title: language === 'hi' ? 'सांस्कृतिक पुनरुत्थान' : 'Cultural Revival',
            titleHindi: 'सांस्कृतिक पुनरुत्थान',
            icon: '🎭',
            image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80',
            description: language === 'hi'
                ? 'पारंपरिक लोक कलाओं का संरक्षण, राष्ट्रीय नाट्य कला परिषद का पुनरुद्धार, सांस्कृतिक त्योहारों का आयोजन, और युवाओं को विरासत कलाओं में प्रशिक्षण।'
                : 'Preserving traditional folk arts, reviving Rastriya Natya Kala Parishad, organizing cultural festivals, and training youth in heritage arts.',
            initiatives: language === 'hi'
                ? ['लोक कला पुनरुद्धार', 'सांस्कृतिक कार्यक्रम', 'युवा प्रशिक्षण', 'विरासत संरक्षण']
                : ['Folk Art Revival', 'Cultural Events', 'Youth Training', 'Heritage Preservation'],
            color: 'from-purple-500 to-purple-600',
            bgColor: 'from-purple-50 to-purple-100',
            stats: language === 'hi' ? 'समृद्ध विरासत' : 'Rich heritage',
            impact: language === 'hi' ? 'संरक्षित परंपराएं' : 'Preserved traditions'
        },
    ];

    return (
        <section id="about" className="relative py-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Main Hero About Section */}
                <div className="mb-24">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-6">
                            <div className="inline-block">
                                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
                                    {language === 'hi' ? 'धेवधा विकास समिति के बारे में' : 'About Dheodha Vikas Samiti'}
                                </span>
                            </div>

                            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                {language === 'hi' ? (
                                    <>
                                        ग्रामीण बिहार में
                                        <span className="relative inline-block ml-3">
                                            <span className="relative z-10 text-green-600">सामुदायिक कार्रवाई</span>
                                            <svg className="absolute bottom-0 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2 10C50 3 150 3 198 10" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" />
                                            </svg>
                                        </span>
                                        {' '}के माध्यम से परिवर्तन
                                    </>
                                ) : (
                                    <>
                                        Transforming Rural Bihar Through
                                        <span className="relative inline-block ml-3">
                                            <span className="relative z-10 text-green-600">Community Action</span>
                                            <svg className="absolute bottom-0 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2 10C50 3 150 3 198 10" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" />
                                            </svg>
                                        </span>
                                    </>
                                )}
                            </h1>

                            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                                {language === 'hi' ? (
                                    <>
                                        <p>
                                            धेवधा विकास समिति ग्रामीण बिहार में <strong className="text-gray-900">आशा की किरण</strong> के रूप में खड़ी है, जो <strong className="text-green-600">2 अगस्त 2025</strong> से जीवन को बदल रही है। समर्पित अप्रवासी ग्रामवासियों द्वारा स्थापित, हम पारदर्शी, समुदाय-संचालित पहलों के माध्यम से समग्र गांव विकास के लिए प्रतिबद्ध हैं।
                                        </p>
                                        <p>
                                            आधिकारिक रूप से एक <strong className="text-gray-900">अपंजीकृत गैर-लाभकारी संगठन</strong> के रूप में मान्यता प्राप्त, हम धेवधा और आसपास के गांवों में शिक्षा, स्वास्थ्य, स्वच्छता, रोजगार और सामाजिक सद्भाव को बढ़ावा देने के लिए अथक प्रयास कर रहे हैं, जो <strong className="text-gray-900">पकरीबरामा ब्लॉक, नवादा जिला</strong> में स्थित हैं।
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <p>
                                            Dheodha Vikas Samiti stands as a <strong className="text-gray-900">beacon of hope in rural Bihar</strong>, transforming lives since its establishment on <strong className="text-green-600">August 2, 2025</strong>. Founded by dedicated non-resident villagers (अप्रवासी ग्रामवासी), we are committed to holistic village development through transparent, community-driven initiatives.
                                        </p>
                                        <p>
                                            Officially recognized as an <strong className="text-gray-900">unregistered non-profit organization</strong>, we work tirelessly to promote education, health, cleanliness, employment, and social harmony across Dheodha and surrounding villages in <strong className="text-gray-900">Pakribarawan Block, Nawada District</strong>.
                                        </p>
                                    </>
                                )}
                            </div>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <Link
                                    href="/about"
                                    className="group bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all inline-flex items-center space-x-2"
                                >
                                    <span>{language === 'hi' ? 'हमारी टीम से मिलें' : 'Meet Our Team'}</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href="/contact"
                                    className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold border-2 border-gray-200 hover:border-green-500 hover:text-green-600 transition-all inline-flex items-center space-x-2"
                                >
                                    <Phone className="w-5 h-5" />
                                    <span>{language === 'hi' ? 'संपर्क करें' : 'Get in Touch'}</span>
                                </Link>
                            </div>
                        </div>

                        {/* Right Side - Professional Team Grid */}
                        <div className="relative">
                            <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-green-100">
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        {language === 'hi' ? 'हमारी नेतृत्व टीम' : 'Our Leadership Team'}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        {language === 'hi' ? 'परिवर्तन लाने वाले समर्पित पेशेवर' : 'Dedicated professionals driving change'}
                                    </p>
                                </div>

                                {/* Team Grid - 2x3 Layout */}
                                <div className="grid grid-cols-2 gap-4">
                                    {teamMembers.map((member, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                            className="group relative"
                                        >
                                            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                                                {/* Image */}
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                                                />

                                                {/* Gradient Overlay */}
                                                <div className={`absolute inset-0 bg-gradient-to-t ${member.color} opacity-40 group-hover:opacity-60 transition-opacity`}></div>
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                                                {/* Name & Role */}
                                                <div className="absolute bottom-0 left-0 right-0 p-3">
                                                    <h4 className="text-sm font-bold text-white leading-tight mb-1">{member.name}</h4>
                                                    <div className="flex items-center space-x-1">
                                                        <div className={`h-0.5 w-6 bg-gradient-to-r ${member.color} rounded-full`}></div>
                                                        <p className="text-xs text-gray-200 font-medium">{member.role}</p>
                                                    </div>
                                                </div>

                                                {/* Role Badge (Top Right) */}
                                                <div className={`absolute top-2 right-2 bg-gradient-to-r ${member.color} text-white px-2 py-1 rounded-lg text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity`}>
                                                    {member.role.split(' ')[0]}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Stats Bar */}
                                <div className="mt-6 grid grid-cols-3 gap-4 pt-6 border-t-2 border-gray-100">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-green-600">140</div>
                                        <div className="text-xs text-gray-600">
                                            {language === 'hi' ? 'मुख्य सदस्य' : 'Core Members'}
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-blue-600">₹4.22L</div>
                                        <div className="text-xs text-gray-600">
                                            {language === 'hi' ? 'निवेश' : 'Investment'}
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-purple-600">100%</div>
                                        <div className="text-xs text-gray-600">
                                            {language === 'hi' ? 'प्रतिबद्धता' : 'Commitment'}
                                        </div>
                                    </div>
                                </div>

                                {/* View Full Team Link */}
                                <div className="mt-6 text-center">
                                    <Link
                                        href="/team"
                                        className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 font-semibold text-sm transition-colors"
                                    >
                                        <span>{language === 'hi' ? 'विस्तृत प्रोफाइल देखें' : 'View Detailed Profiles'}</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>

                            {/* Floating badges */}
                            <div className="absolute top-6 -right-6 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold shadow-lg transform rotate-12 hover:rotate-0 transition-transform">
                                {language === 'hi' ? 'स्था. 2025' : 'Est. 2025'}
                            </div>

                            {/* Background decorative elements */}
                            <div className="absolute -z-10 top-1/2 left-1/2 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
                        </div>
                    </div>
                </div>

                {/* Key Focus Areas with Swiper */}
                <div id="focus-areas" className="mb-24 relative overflow-hidden">
                    {/* Background Elements */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-green-50/30 to-white -z-10"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <span className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wider mb-6 shadow-md">
                                <Sparkles className="w-5 h-5" />
                                <span>{language === 'hi' ? 'हमारे प्रभाव क्षेत्र' : 'Our Impact Areas'}</span>
                            </span>
                            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                {language === 'hi' ? (
                                    <>
                                        प्रमुख <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">फोकस क्षेत्र</span>
                                    </>
                                ) : (
                                    <>
                                        Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Focus Areas</span>
                                    </>
                                )}
                            </h2>
                            <div className="w-32 h-1.5 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 mx-auto mb-8 rounded-full"></div>
                            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                                {language === 'hi'
                                    ? 'धेवधा में शिक्षा, स्वास्थ्य, सशक्तिकरण और सांस्कृतिक संरक्षण में व्यापक परिवर्तन को संचालित करने वाली रणनीतिक पहल'
                                    : 'Strategic initiatives driving comprehensive transformation across education, health, empowerment, and cultural preservation in Dheodha'
                                }
                            </p>
                        </motion.div>

                        {/* Slider Component */}
                        <div className="relative">
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={30}
                                slidesPerView={1}
                                navigation={{
                                    nextEl: '.swiper-button-next-custom',
                                    prevEl: '.swiper-button-prev-custom',
                                }}
                                pagination={{
                                    clickable: true,
                                    dynamicBullets: true,
                                }}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    640: { slidesPerView: 1 },
                                    768: { slidesPerView: 2 },
                                    1024: { slidesPerView: 3 },
                                }}
                                className="focus-areas-swiper pb-16"
                            >
                                {focusAreas.map((area, index) => (
                                    <SwiperSlide key={area.id}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: index * 0.1 }}
                                            className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-full"
                                        >
                                            {/* Image Section */}
                                            <div className="relative h-64 overflow-hidden">
                                                <img
                                                    src={area.image}
                                                    alt={area.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className={`absolute inset-0 bg-gradient-to-t ${area.bgColor} opacity-60 group-hover:opacity-80 transition-opacity`}></div>
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                                                {/* Icon Badge */}
                                                <div className={`absolute top-6 right-6 w-16 h-16 bg-gradient-to-br ${area.color} rounded-2xl flex items-center justify-center text-3xl shadow-2xl border-4 border-white/30 group-hover:scale-110 group-hover:rotate-12 transition-all`}>
                                                    {area.icon}
                                                </div>

                                                {/* Title Overlay */}
                                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                                    <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">{area.title}</h3>
                                                </div>
                                            </div>

                                            {/* Content Section */}
                                            <div className="p-8">
                                                {/* Description */}
                                                <p className="text-gray-700 leading-relaxed mb-6 text-base">
                                                    {area.description}
                                                </p>

                                                {/* Initiatives */}
                                                <div className="mb-6">
                                                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center">
                                                        <CheckCircle2 className="w-4 h-4 mr-2 text-green-600" />
                                                        {language === 'hi' ? 'प्रमुख पहल' : 'Key Initiatives'}
                                                    </h4>
                                                    <div className="grid grid-cols-2 gap-2">
                                                        {area.initiatives.map((initiative, idx) => (
                                                            <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                                                                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${area.color}`}></div>
                                                                <span>{initiative}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Stats & Impact */}
                                                <div className={`flex items-center justify-between pt-6 border-t-2 border-gradient-to-r ${area.color}`}>
                                                    <div>
                                                        <div className={`text-2xl font-bold bg-gradient-to-r ${area.color} bg-clip-text text-transparent mb-1`}>
                                                            {area.stats}
                                                        </div>
                                                        <div className="text-xs text-gray-500 uppercase tracking-wide">
                                                            {area.impact}
                                                        </div>
                                                    </div>
                                                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${area.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer`}>
                                                        <ArrowRight className="w-6 h-6 text-white" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Bottom Accent */}
                                            <div className={`h-2 bg-gradient-to-r ${area.color}`}></div>
                                        </motion.div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* Custom Navigation Buttons */}
                            <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center cursor-pointer hover:bg-green-600 hover:text-white transition-all group -ml-7">
                                <ChevronLeft className="w-7 h-7 text-gray-700 group-hover:text-white" />
                            </div>
                            <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center cursor-pointer hover:bg-green-600 hover:text-white transition-all group -mr-7">
                                <ChevronRight className="w-7 h-7 text-gray-700 group-hover:text-white" />
                            </div>
                        </div>

                        {/* View All Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="text-center mt-16"
                        >
                            <a
                                href="/programs"
                                className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all"
                            >
                                <span>{language === 'hi' ? 'सभी कार्यक्रम देखें' : 'Explore All Programs'}</span>
                                <ArrowRight className="w-6 h-6" />
                            </a>
                        </motion.div>
                    </div>
                </div>

                {/* Add Custom Swiper Styles */}
                <style jsx global>{`
                    .focus-areas-swiper .swiper-pagination-bullet {
                        width: 12px;
                        height: 12px;
                        background: #10b981;
                        opacity: 0.3;
                    }
                    .focus-areas-swiper .swiper-pagination-bullet-active {
                        opacity: 1;
                        width: 32px;
                        border-radius: 6px;
                    }
                `}</style>
            </div>
        </section>
    );
};

export default AboutSection;
