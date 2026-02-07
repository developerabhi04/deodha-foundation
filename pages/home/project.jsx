// components/home/project.jsx - Professional & Fully Responsive
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    TrendingUp, Award, Calendar, ArrowRight,
    CheckCircle2, Clock, Sparkles
} from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '../../lib/LanguageContext';

const ProjectsSection = () => {
    const { language } = useLanguage();
    const [activeTab, setActiveTab] = useState('ongoing');

    // Projects Data
    const ongoingProjects = [
        {
            id: 2,
            title: language === 'hi' ? 'पंचायत भवन, धेवधा पुस्तकालय' : 'Panchayat Bhawan Library',
            description: language === 'hi'
                ? 'पंचायत भवन में स्थित पुस्तकालय का संचालन अब नियमित रूप से शुरू हो रहा है। यहाँ पाठ्यक्रम की किताबें, प्रतियोगी परीक्षा सामग्री और सामान्य ज्ञान की पुस्तकें उपलब्ध हैं।'
                : 'The library in Panchayat Bhawan is now operating regularly with course books, competitive exam materials, and general knowledge books.',
            budget: language === 'hi' ? 'बहु-चरण' : 'Multi-phase',
            progress: 35,
            status: language === 'hi' ? 'योजना चरण' : 'Planning',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761943481/545839216_1184272130402920_2963934031699955061_n_qt9tlk.jpg',
        },
        {
            id: 3,
            title: language === 'hi' ? 'सांस्कृतिक पुनरुद्धार कार्यक्रम' : 'Cultural Revival Program',
            description: language === 'hi'
                ? 'राष्ट्रीय नाट्य कला परिषद और पारंपरिक लोक कलाओं का पुनरुद्धार। स्थानीय कलाकारों को प्रशिक्षण और मंच के अवसर।'
                : 'Revival of Rastriya Natya Kala Parishad and traditional folk arts with training opportunities for local artists.',
            budget: language === 'hi' ? 'सामुदायिक' : 'Community',
            progress: 40,
            status: language === 'hi' ? 'सक्रिय' : 'Active',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761989019/122229215_4119849248032176_6598869593962715102_n_hxkb7o.jpg',
        },
    ];

    const completedProjects = [
        {
            id: 1,
            title: language === 'hi' ? 'सड़क मरम्मत और नाली सफाई' : 'Road Repair & Drainage',
            description: language === 'hi'
                ? 'जलभराव को खत्म करने वाली प्रमुख सामुदायिक बुनियादी ढांचा परियोजना। 2 किमी सड़क मरम्मत पूर्ण।'
                : 'Major community infrastructure project eliminating waterlogging. 2 km road repair completed.',
            budget: '₹1.51 lakh',
            completionDate: language === 'hi' ? 'अगस्त 2024' : 'August 2024',
            impact: language === 'hi' ? '500+ परिवार लाभान्वित' : '500+ families benefited',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761997126/abd97183-3e9b-41ad-ba51-05170a964670_csr2md.png',
        },
        {
            id: 2,
            title: language === 'hi' ? 'स्वच्छता अभियान' : 'Sanitation Campaign',
            description: language === 'hi'
                ? 'गांव भर में स्वच्छता अभियान और सामाजिक जागरूकता कार्यक्रम। 50+ ड्राइव सफलतापूर्वक संपन्न।'
                : 'Village-wide cleanliness and awareness programs. 50+ drives successfully completed.',
            budget: '₹75,000',
            completionDate: language === 'hi' ? 'सितंबर 2024' : 'September 2024',
            impact: language === 'hi' ? 'बेहतर स्वच्छता' : 'Improved hygiene',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1763067938/Largest-water-conservation-awareness-campaign_jmvlgn.jpg',
        },
        {
            id: 3,
            title: language === 'hi' ? 'मुख्य द्वार सौंदर्यीकरण' : 'Main Gate Beautification',
            description: language === 'hi'
                ? 'गांव के गौरव का प्रतीक भव्य स्वागत द्वार। 30 फीट ऊंचा पारंपरिक डिजाइन।'
                : 'Grand welcome gate symbolizing village pride. 30 feet tall traditional design.',
            budget: '₹3.36 lakh',
            completionDate: language === 'hi' ? 'दिसंबर 2024' : 'December 2024',
            impact: language === 'hi' ? 'गांव की पहचान' : 'Village identity',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1766659397/IMG_3746_fm9sza.jpg',
        },
    ];

    const upcomingProjects = [
        {
            id: 1,
            title: language === 'hi' ? 'डिजिटल लाइब्रेरी' : 'Digital Library',
            description: language === 'hi'
                ? 'ई-लर्निंग संसाधन और कंप्यूटर प्रशिक्षण केंद्र। 20 कंप्यूटर और हाई-स्पीड इंटरनेट।'
                : 'E-learning resources and computer training center with 20 computers and high-speed internet.',
            budget: '₹5 lakh',
            startDate: language === 'hi' ? 'जनवरी 2026' : 'Jan 2026',
            status: language === 'hi' ? 'नियोजित' : 'Planned',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761943482/544977792_1184272213736245_6643950750768153738_n_vllvdo.jpg',
        },
        {
            id: 2,
            title: language === 'hi' ? 'महिला सशक्तिकरण केंद्र' : 'Women Empowerment Center',
            description: language === 'hi'
                ? 'कौशल विकास और व्यावसायिक प्रशिक्षण। सिलाई, कढ़ाई और हस्तशिल्प कार्यक्रम।'
                : 'Skill development and vocational training including sewing, embroidery, and handicrafts.',
            budget: '₹3 lakh',
            startDate: language === 'hi' ? 'मार्च 2026' : 'Mar 2026',
            status: language === 'hi' ? 'नियोजित' : 'Planned',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1763068920/330207172_529598739266971_2580032597949579545_n_ibhdce.jpg',
        },
        {
            id: 3,
            title: language === 'hi' ? 'सोलर स्ट्रीट लाइट' : 'Solar Street Lights',
            description: language === 'hi'
                ? 'मुख्य सड़कों पर 50 सोलर लाइट्स। पर्यावरण अनुकूल और ऊर्जा बचत।'
                : 'Installing 50 solar lights on main roads. Eco-friendly and energy-saving solution.',
            budget: '₹4 lakh',
            startDate: language === 'hi' ? 'फरवरी 2026' : 'Feb 2026',
            status: language === 'hi' ? 'नियोजित' : 'Planned',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1763069558/RW-12_gneahb.jpg',
        },
    ];

    const tabs = [
        {
            id: 'ongoing',
            label: language === 'hi' ? 'चल रहे' : 'Ongoing',
            icon: TrendingUp,
            gradient: 'from-yellow-500 to-orange-500',
            bgColor: 'bg-yellow-100',
            textColor: 'text-yellow-700',
            // count: ongoingProjects.length 
            count: 2
        },
        {
            id: 'completed',
            label: language === 'hi' ? 'पूर्ण' : 'Completed',
            icon: Award,
            gradient: 'from-green-500 to-emerald-500',
            bgColor: 'bg-green-100',
            textColor: 'text-green-700',
            // count: completedProjects.length
            count: 4
        },
        {
            id: 'upcoming',
            label: language === 'hi' ? 'आगामी' : 'Upcoming',
            icon: Calendar,
            gradient: 'from-blue-500 to-indigo-500',
            bgColor: 'bg-blue-100',
            textColor: 'text-blue-700',
            // count: upcomingProjects.length
            count: 9
        }
    ];

    const getCurrentProjects = () => {
        switch (activeTab) {
            case 'ongoing': return ongoingProjects;
            case 'completed': return completedProjects;
            case 'upcoming': return upcomingProjects;
            default: return ongoingProjects;
        }
    };

    return (
        <section id="projects" className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-40">
                <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 sm:mb-12 lg:mb-16"
                >
                    <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        <Sparkles className="w-4 h-4" />
                        <span>{language === 'hi' ? 'विकास कार्य' : 'Development Work'}</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
                        {language === 'hi' ? 'हमारी परियोजनाएं' : 'Our Projects'}
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                        {language === 'hi'
                            ? 'समुदाय-संचालित विकास पहलों के माध्यम से धेवधा का सतत विकास'
                            : 'Sustainable development of Dheodha through community-driven initiatives'
                        }
                    </p>
                </motion.div>

                {/* Tab Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 lg:mb-16 px-4 sm:px-0"
                >
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`relative px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-sm sm:text-base transition-all duration-300 ${activeTab === tab.id
                                ? `bg-gradient-to-r ${tab.gradient} text-white shadow-xl scale-105`
                                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
                                }`}
                        >
                            <div className="flex items-center justify-center space-x-2">
                                <tab.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                <span>{tab.label}</span>
                                <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${activeTab === tab.id ? 'bg-white/20 text-white' : `${tab.bgColor} ${tab.textColor}`
                                    }`}>
                                    {tab.count}
                                </span>
                            </div>
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="mb-12 sm:mb-16 lg:mb-20"
                    >
                        {/* Ongoing Projects */}
                        {activeTab === 'ongoing' && (
                            <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
                                {ongoingProjects.map((project, index) => (
                                    <motion.div
                                        key={project.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                                    >
                                        <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                                            <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1">
                                                <Clock className="w-3 h-3" />
                                                <span>{project.status}</span>
                                            </div>
                                        </div>
                                        <div className="p-5 sm:p-6">
                                            <div className="flex items-center justify-between mb-3">
                                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 line-clamp-1">
                                                    {project.title}
                                                </h3>
                                                <span className="text-green-600 font-bold text-sm whitespace-nowrap ml-2">
                                                    {project.budget}
                                                </span>
                                            </div>
                                            <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-2">
                                                {project.description}
                                            </p>
                                            <div className="space-y-2">
                                                <div className="flex justify-between text-xs sm:text-sm text-gray-600">
                                                    <span className="font-medium">{language === 'hi' ? 'प्रगति' : 'Progress'}</span>
                                                    <span className="font-bold text-green-600">{project.progress}%</span>
                                                </div>
                                                <div className="relative w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${project.progress}%` }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 1, delay: 0.5 }}
                                                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                                                    ></motion.div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        )}

                        {/* Completed Projects */}
                        {activeTab === 'completed' && (
                            <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                                {completedProjects.map((project, index) => (
                                    <motion.div
                                        key={project.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                                    >
                                        <div className="relative h-48 sm:h-52 overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                                            <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1">
                                                <CheckCircle2 className="w-3 h-3" />
                                                <span>{language === 'hi' ? 'पूर्ण' : 'Done'}</span>
                                            </div>
                                        </div>
                                        <div className="p-5">
                                            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                                {project.description}
                                            </p>
                                            <div className="space-y-2 text-xs sm:text-sm">
                                                {project.budget && (
                                                    <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
                                                        <span className="text-gray-600">{language === 'hi' ? 'बजट' : 'Budget'}</span>
                                                        <span className="font-bold text-gray-900">{project.budget}</span>
                                                    </div>
                                                )}
                                                <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
                                                    <span className="text-gray-600">{language === 'hi' ? 'पूर्ण' : 'Completed'}</span>
                                                    <span className="font-bold text-gray-900">{project.completionDate}</span>
                                                </div>
                                                <div className="flex justify-between items-center py-1.5">
                                                    <span className="text-gray-600">{language === 'hi' ? 'प्रभाव' : 'Impact'}</span>
                                                    <span className="font-bold text-green-600">{project.impact}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        )}

                        {/* Upcoming Projects */}
                        {activeTab === 'upcoming' && (
                            <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                                {upcomingProjects.map((project, index) => (
                                    <motion.div
                                        key={project.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-blue-200"
                                    >
                                        <div className="relative h-48 sm:h-52 overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                                            <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                                                {project.status}
                                            </div>
                                        </div>
                                        <div className="p-5">
                                            <div className="flex items-start justify-between mb-3">
                                                <h3 className="text-lg font-bold text-gray-900 flex-1 line-clamp-1">
                                                    {project.title}
                                                </h3>
                                                <span className="text-blue-600 font-bold text-sm whitespace-nowrap ml-2">
                                                    {project.budget}
                                                </span>
                                            </div>
                                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                                {project.description}
                                            </p>
                                            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                                <div className="flex items-center space-x-2 text-sm text-gray-600">
                                                    <Calendar className="w-4 h-4 text-blue-500" />
                                                    <span className="font-medium">{project.startDate}</span>
                                                </div>
                                                <ArrowRight className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center"
                >
                    <Link
                        href="/project"
                        className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                    >
                        <span>{language === 'hi' ? 'सभी परियोजनाएं देखें' : 'Explore All Projects'}</span>
                        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsSection;
