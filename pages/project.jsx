// pages/Project.jsx - PROFESSIONAL REDESIGN
import Hero from '@/components/Hero';
import React from 'react';
import { motion } from 'framer-motion';
import {
    CheckCircle, Clock, TrendingUp, Users, Calendar, ArrowRight,
    Target, Award, Heart as HeartIcon, UserPlus, Sparkles,
    DollarSign, BarChart3, Zap
} from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

const Project = () => {
    const { language } = useLanguage();

    // Projects Data (same as before)
    const ongoingProjects = [
        // {
        //     id: 1,
        //     title: language === 'hi' ? 'मुख्य द्वार सौंदर्यीकरण परियोजना' : 'Main Gate Beautification Project',
        //     description: language === 'hi'
        //         ? 'गांव के गौरव और पहचान का प्रतीक भव्य प्रवेश द्वार (स्वागत द्वार) का निर्माण।'
        //         : 'Construction of grand entrance gate (Welcome Gate) symbolizing village pride and identity.',
        //     budget: '₹2.42 lakh',
        //     progress: 60,
        //     status: language === 'hi' ? 'चल रहा' : 'Ongoing',
        //     image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761943477/539776090_1174414584722008_982293286693648098_n_eclulv.jpg',
        //     category: language === 'hi' ? 'बुनियादी ढांचा' : 'Infrastructure',
        //     expectedCompletion: language === 'hi' ? 'दिसंबर 2025' : 'December 2025',
        //     timeline: language === 'hi' ? '20-25 दिन' : '20-25 days',
        //     features: language === 'hi' ? [
        //         'आधुनिक डिज़ाइन और निर्माण',
        //         'गांव का नाम और लोगो',
        //         'LED लाइटिंग सिस्टम'
        //     ] : [
        //         'Modern design and construction',
        //         'Village name and logo',
        //         'LED lighting system'
        //     ],
        // },
        {
            id: 2,
            title: language === 'hi' ? 'शैक्षिक गुणवत्ता सुधार' : 'Educational Quality Improvement',
            description: language === 'hi'
                ? 'डिजिटल लाइब्रेरी सेटअप, शिक्षक प्रशिक्षण, और स्कूल के बाद ट्यूशन कार्यक्रम।'
                : 'Digital library setup, teacher training, and after-school tuition programs.',
            budget: language === 'hi' ? 'बहु-चरण' : 'Multi-phase',
            progress: 35,
            status: language === 'hi' ? 'योजना' : 'Planning',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761943481/545839216_1184272130402920_2963934031699955061_n_qt9tlk.jpg',
            category: language === 'hi' ? 'शिक्षा' : 'Education',
            expectedCompletion: language === 'hi' ? 'जनवरी 2026' : 'January 2026',
            timeline: language === 'hi' ? '3 महीने' : '3 months',
            features: language === 'hi' ? [
                'डिजिटल लाइब्रेरी सेटअप',
                'शिक्षक प्रशिक्षण कार्यक्रम',
                'स्कूल के बाद ट्यूशन'
            ] : [
                'Digital library setup',
                'Teacher training programs',
                'After-school tuition'
            ],
        },
        {
            id: 3,
            title: language === 'hi' ? 'सांस्कृतिक पुनरुद्धार कार्यक्रम' : 'Cultural Revival Programs',
            description: language === 'hi'
                ? 'राष्ट्रीय नाट्य कला परिषद और पारंपरिक लोक कलाओं का पुनरुद्धार।'
                : 'Revival of Rastriya Natya Kala Parishad and traditional folk arts.',
            budget: language === 'hi' ? 'सामुदायिक' : 'Community',
            progress: 40,
            status: language === 'hi' ? 'सक्रिय' : 'Active',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761989019/122229215_4119849248032176_6598869593962715102_n_hxkb7o.jpg',
            category: language === 'hi' ? 'संस्कृति' : 'Culture',
            expectedCompletion: language === 'hi' ? 'फरवरी 2026' : 'February 2026',
            timeline: language === 'hi' ? '4 महीने' : '4 months',
            features: language === 'hi' ? [
                'नाट्य कला प्रशिक्षण',
                'पारंपरिक लोक कला',
                'सांस्कृतिक कार्यक्रम'
            ] : [
                'Drama art training',
                'Traditional folk arts',
                'Cultural events'
            ],
        },
    ];

    const completedProjects = [
        {
            id: 1,
            title: language === 'hi' ? 'सड़क मरम्मत और नाली सफाई' : 'Road Repair & Drainage Cleaning',
            description: language === 'hi'
                ? '22 दिनों के समर्पित प्रयास से गांव की 2 किमी सड़क की मरम्मत और नाली सफाई का कार्य पूर्ण किया गया।'
                : 'Completed 2 km road repair and drainage cleaning work through 22 days of dedicated effort.',
            budget: '₹1.51 lakh',
            duration: language === 'hi' ? '22 दिन' : '22 days',
            beneficiaries: language === 'hi' ? 'संपूर्ण गांव' : 'Entire Village',
            completionDate: language === 'hi' ? 'अगस्त 2024' : 'August 2024',
            impact: language === 'hi' ? [
                'जल भराव और कीचड़ की समस्या समाप्त',
                'मानसून के दौरान बेहतर आवागमन',
                'स्वच्छता में सुधार'
            ] : [
                'Eliminated waterlogging problems',
                'Better mobility during monsoon',
                'Improved sanitation'
            ],
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761997126/abd97183-3e9b-41ad-ba51-05170a964670_csr2md.png',
            category: language === 'hi' ? 'बुनियादी ढांचा' : 'Infrastructure'
        },
        {
            id: 2,
            title: language === 'hi' ? 'स्वच्छता और जागरूकता अभियान' : 'Sanitation & Awareness Campaigns',
            description: language === 'hi'
                ? 'गांव भर में स्वच्छता अभियान और सामाजिक जागरूकता कार्यक्रम का सफल आयोजन।'
                : 'Successfully conducted village-wide cleanliness drives and social awareness programs.',
            budget: language === 'hi' ? 'सामुदायिक' : 'Community',
            duration: language === 'hi' ? '6 महीने' : '6 months',
            beneficiaries: language === 'hi' ? '1000+ ग्रामवासी' : '1000+ villagers',
            completionDate: language === 'hi' ? 'सितंबर 2024' : 'September 2024',
            impact: language === 'hi' ? [
                'गांव की स्वच्छता में सुधार',
                'स्वास्थ्य जागरूकता',
                'समुदाय की भागीदारी बढ़ी'
            ] : [
                'Improved village hygiene',
                'Health awareness',
                'Increased participation'
            ],
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1763067938/Largest-water-conservation-awareness-campaign_jmvlgn.jpg',
            category: language === 'hi' ? 'स्वास्थ्य' : 'Health'
        },
        {
            id: 3,
            title: language === 'hi' ? 'मुख्य द्वार सौंदर्यीकरण' : 'Main Gate Beautification',
            description: language === 'hi'
                ? 'गांव के गौरव का प्रतीक भव्य स्वागत द्वार। 30 फीट ऊंचा पारंपरिक डिजाइन।'
                : 'Grand welcome gate symbolizing village pride. 30 feet tall traditional design.',
            budget: '₹3.36 lakh',
            duration: language === 'hi' ? '25 दिन' : '25 days',
            beneficiaries: language === 'hi' ? 'सभी गांववासी' : 'All villagers',
            completionDate: language === 'hi' ? 'दिसंबर 2024' : 'December 2024',
            impact: language === 'hi' ? [
                'गांव की पहचान में वृद्धि',
                'पर्यटन में सुधार',
                'सामुदायिक गौरव'
            ] : [
                'Enhanced village identity',
                'Improved tourism',
                'Community pride'
            ],
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1766659397/IMG_3746_fm9sza.jpg',
            category: language === 'hi' ? 'बुनियादी ढांचा' : 'Infrastructure'
        },
    ];

    const upcomingProjects = [
        {
            id: 1,
            title: language === 'hi' ? 'डिजिटल लाइब्रेरी उद्घाटन' : 'Digital Library Inauguration',
            description: language === 'hi'
                ? 'ई-लर्निंग संसाधनों और कंप्यूटर प्रशिक्षण केंद्र के साथ नई डिजिटल लाइब्रेरी का शुभारंभ।'
                : 'Launch of new digital library with e-learning resources and computer training center.',
            budget: '₹5 lakh',
            startDate: language === 'hi' ? 'जनवरी 2026' : 'January 2026',
            status: language === 'hi' ? 'नियोजित' : 'Planned',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761943482/544977792_1184272213736245_6643950750768153738_n_vllvdo.jpg',
            icon: '💡',
        },
        {
            id: 2,
            title: language === 'hi' ? 'महिला सशक्तिकरण केंद्र' : 'Women Empowerment Center',
            description: language === 'hi'
                ? 'गांव की महिलाओं के लिए कौशल विकास और व्यावसायिक प्रशिक्षण केंद्र।'
                : 'Skill development and vocational training center for village women.',
            budget: '₹3 lakh',
            startDate: language === 'hi' ? 'मार्च 2026' : 'March 2026',
            status: language === 'hi' ? 'नियोजित' : 'Planned',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1763068920/330207172_529598739266971_2580032597949579545_n_ibhdce.jpg',
            icon: '👩',
        },
        {
            id: 3,
            title: language === 'hi' ? 'सोलर स्ट्रीट लाइटिंग परियोजना' : 'Solar Street Lighting Project',
            description: language === 'hi'
                ? 'मुख्य गांव की सड़कों पर सोलर-संचालित स्ट्रीट लाइट्स स्थापित करना।'
                : 'Installing solar-powered street lights across main village roads.',
            budget: '₹4 lakh',
            startDate: language === 'hi' ? 'फरवरी 2026' : 'February 2026',
            status: language === 'hi' ? 'नियोजित' : 'Planned',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1763069558/RW-12_gneahb.jpg',
            icon: '☀️',
        },
    ];

    const impactStats = [
        {
            number: '₹4.22L',
            label: language === 'hi' ? 'कुल निवेश' : 'Total Investment',
            icon: DollarSign,
            color: 'from-green-500 to-emerald-600',
            bgColor: 'bg-green-50'
        },
        {
            number: `${ongoingProjects.length + completedProjects.length + upcomingProjects.length}`,
            label: language === 'hi' ? 'कुल परियोजनाएं' : 'Total Projects',
            icon: BarChart3,
            color: 'from-blue-500 to-indigo-600',
            bgColor: 'bg-blue-50'
        },
        {
            number: '2000+',
            label: language === 'hi' ? 'लाभार्थी' : 'Beneficiaries',
            icon: Users,
            color: 'from-purple-500 to-pink-600',
            bgColor: 'bg-purple-50'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <>
            <Hero
                title={language === 'hi' ? 'हमारी परियोजनाएं' : 'Our Projects'}
                subtitle={language === 'hi'
                    ? 'धेवधा विकास समिति द्वारा संचालित प्रभावशाली परियोजनाएं जो समुदाय को उन्नत करती हैं'
                    : 'Impactful projects run by Dheodha Vikas Samiti that uplift the community'
                }
                backgroundImage="https://res.cloudinary.com/dusalynec/image/upload/v1762001895/IMG_2626_jrqyt0.jpg"
            />

            <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50">
                {/* Impact Stats Section */}
                <section className="py-12 sm:py-16 lg:py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8"
                        >
                            {impactStats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className={`relative ${stat.bgColor} rounded-3xl p-6 sm:p-8 overflow-hidden group hover:shadow-2xl transition-all duration-300`}
                                >
                                    <div className="relative z-10">
                                        <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${stat.color} text-white mb-4 group-hover:scale-110 transition-transform`}>
                                            <stat.icon className="w-7 h-7 sm:w-8 sm:h-8" />
                                        </div>
                                        <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-2">
                                            {stat.number}
                                        </div>
                                        <div className="text-sm sm:text-base font-semibold text-gray-700">
                                            {stat.label}
                                        </div>
                                    </div>
                                    <div className={`absolute -right-8 -bottom-8 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500`}></div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Completed Projects Section */}
                <section className="py-12 sm:py-16 lg:py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-10 sm:mb-12 lg:mb-16"
                        >
                            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
                                <CheckCircle className="w-4 h-4" />
                                <span>{language === 'hi' ? 'पूर्ण परियोजनाएं' : 'Completed Projects'}</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
                                {language === 'hi' ? 'सफलतापूर्वक पूर्ण कार्य' : 'Successfully Completed'}
                            </h2>
                            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                                {language === 'hi'
                                    ? 'समुदाय की सक्रिय भागीदारी से पूर्ण की गई परियोजनाएं'
                                    : 'Projects completed with active community participation'
                                }
                            </p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                        >
                            {completedProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    variants={itemVariants}
                                    className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                                >
                                    {/* Image */}
                                    <div className="relative h-48 sm:h-56 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                                        {/* Status Badge */}
                                        <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1">
                                            <CheckCircle className="w-3 h-3" />
                                            <span>{language === 'hi' ? 'पूर्ण' : 'Done'}</span>
                                        </div>

                                        {/* Category Badge */}
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-bold">
                                            {project.category}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5 sm:p-6">
                                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                                            {project.description}
                                        </p>

                                        {/* Stats Grid */}
                                        <div className="grid grid-cols-2 gap-3 mb-4">
                                            <div className="bg-gray-50 rounded-xl p-3">
                                                <div className="text-xs text-gray-500 mb-1">
                                                    {language === 'hi' ? 'बजट' : 'Budget'}
                                                </div>
                                                <div className="font-bold text-gray-900 text-sm">{project.budget}</div>
                                            </div>
                                            <div className="bg-gray-50 rounded-xl p-3">
                                                <div className="text-xs text-gray-500 mb-1">
                                                    {language === 'hi' ? 'अवधि' : 'Duration'}
                                                </div>
                                                <div className="font-bold text-gray-900 text-sm">{project.duration}</div>
                                            </div>
                                        </div>

                                        {/* Impact Section */}
                                        <div className="bg-green-50 rounded-xl p-3 mb-4">
                                            <div className="flex items-center space-x-2 mb-2">
                                                <Zap className="w-4 h-4 text-green-600" />
                                                <span className="text-xs font-bold text-green-900">
                                                    {language === 'hi' ? 'प्रभाव' : 'Impact'}
                                                </span>
                                            </div>
                                            <ul className="space-y-1">
                                                {project.impact.map((item, idx) => (
                                                    <li key={idx} className="text-xs text-green-800 flex items-start">
                                                        <span className="text-green-600 mr-2 flex-shrink-0">✓</span>
                                                        <span className="line-clamp-1">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Footer */}
                                        <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs sm:text-sm">
                                            <div className="flex items-center space-x-1 text-gray-500">
                                                <Calendar className="w-4 h-4" />
                                                <span>{project.completionDate}</span>
                                            </div>
                                            <div className="flex items-center space-x-1 text-green-600 font-semibold">
                                                <Users className="w-4 h-4" />
                                                <span>{project.beneficiaries}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Ongoing Projects Section */}
                <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-10 sm:mb-12 lg:mb-16"
                        >
                            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
                                <Clock className="w-4 h-4" />
                                <span>{language === 'hi' ? 'चल रही परियोजनाएं' : 'Ongoing Projects'}</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
                                {language === 'hi' ? 'वर्तमान में प्रगति पर' : 'Currently in Progress'}
                            </h2>
                            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                                {language === 'hi'
                                    ? 'प्रगति पर हमारी महत्वाकांक्षी परियोजनाएं'
                                    : 'Our ambitious projects in progress'
                                }
                            </p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                        >
                            {ongoingProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    variants={itemVariants}
                                    className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                                >
                                    {/* Image with Progress */}
                                    <div className="relative h-48 sm:h-56 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                                        {/* Status Badge */}
                                        <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1">
                                            <Clock className="w-3 h-3" />
                                            <span>{project.status}</span>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <div className="flex justify-between text-white text-xs sm:text-sm font-semibold mb-2">
                                                <span>{language === 'hi' ? 'प्रगति' : 'Progress'}</span>
                                                <span>{project.progress}%</span>
                                            </div>
                                            <div className="w-full bg-white/20 backdrop-blur-sm rounded-full h-2.5 overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${project.progress}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, delay: 0.5 }}
                                                    className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full shadow-lg"
                                                ></motion.div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5 sm:p-6">
                                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                                            {project.description}
                                        </p>

                                        {/* Info Grid */}
                                        <div className="bg-blue-50 rounded-xl p-4 mb-4">
                                            <div className="grid grid-cols-2 gap-3 mb-3">
                                                <div>
                                                    <div className="text-xs text-gray-500 mb-1">
                                                        {language === 'hi' ? 'बजट' : 'Budget'}
                                                    </div>
                                                    <div className="font-bold text-gray-900 text-sm">{project.budget}</div>
                                                </div>
                                                <div>
                                                    <div className="text-xs text-gray-500 mb-1">
                                                        {language === 'hi' ? 'समय' : 'Timeline'}
                                                    </div>
                                                    <div className="font-bold text-gray-900 text-sm">{project.timeline}</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-2 text-sm text-blue-700 font-semibold">
                                                <Target className="w-4 h-4" />
                                                <span>{project.expectedCompletion}</span>
                                            </div>
                                        </div>

                                        {/* Features */}
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2 text-sm flex items-center space-x-2">
                                                <Sparkles className="w-4 h-4 text-blue-600" />
                                                <span>{language === 'hi' ? 'विशेषताएं' : 'Features'}</span>
                                            </h4>
                                            <ul className="space-y-1.5">
                                                {project.features.map((feature, idx) => (
                                                    <li key={idx} className="text-xs text-gray-700 flex items-start">
                                                        <span className="text-blue-600 mr-2 flex-shrink-0">✓</span>
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Upcoming Projects Section */}
                <section className="py-12 sm:py-16 lg:py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-10 sm:mb-12 lg:mb-16"
                        >
                            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
                                <TrendingUp className="w-4 h-4" />
                                <span>{language === 'hi' ? 'आगामी परियोजनाएं' : 'Upcoming Projects'}</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
                                {language === 'hi' ? 'भविष्य की योजनाएं' : 'Future Plans'}
                            </h2>
                            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                                {language === 'hi'
                                    ? 'धेवधा के समग्र विकास के लिए नई पहल'
                                    : 'New initiatives for overall development of Dheodha'
                                }
                            </p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                        >
                            {upcomingProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    variants={itemVariants}
                                    className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-200"
                                >
                                    {/* Image */}
                                    <div className="relative h-48 sm:h-52 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                                        {/* Icon */}
                                        <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                                            {project.icon}
                                        </div>

                                        {/* Status Badge */}
                                        <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                                            {project.status}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5 sm:p-6">
                                        <div className="flex items-start justify-between mb-3">
                                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex-1 line-clamp-1">
                                                {project.title}
                                            </h3>
                                            <span className="text-purple-600 font-bold text-sm whitespace-nowrap ml-2">
                                                {project.budget}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                                            {project.description}
                                        </p>

                                        {/* Footer */}
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                                                <Calendar className="w-4 h-4 text-purple-500" />
                                                <span className="font-semibold">{project.startDate}</span>
                                            </div>
                                            <ArrowRight className="w-5 h-5 text-purple-500 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-12 sm:py-16 lg:py-20">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 rounded-3xl p-8 sm:p-12 lg:p-16 text-white text-center overflow-hidden"
                        >
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
                                <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-3xl mb-6">
                                    <Award className="w-8 h-8 sm:w-10 sm:h-10" />
                                </div>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 sm:mb-6">
                                    {language === 'hi' ? 'इन परियोजनाओं का हिस्सा बनें' : 'Be Part of These Projects'}
                                </h2>
                                <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
                                    {language === 'hi'
                                        ? 'आपका योगदान हमारी परियोजनाओं को सफल बनाने में मदद करता है। आज ही जुड़ें और गांव के विकास में भागीदार बनें।'
                                        : 'Your contribution helps make our projects successful. Join today and become a partner in village development.'
                                    }
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a
                                        href="/about"
                                        className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl hover:bg-white/20 transition-all border-2 border-white/30"
                                    >
                                        <ArrowRight className="w-5 h-5 mr-2" />
                                        {language === 'hi' ? 'और जानें' : 'Learn More'}
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Project;
