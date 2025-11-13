// components/home/project.jsx - With Translation Support
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    TrendingUp, Award, Calendar, Download,
    Users, Heart as HeartIcon, Send, UserPlus, DollarSign,
    ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '../../lib/LanguageContext';

const ProjectsSection = () => {
    const { language, t } = useLanguage();
    const [activeTab, setActiveTab] = useState('ongoing'); // 'ongoing', 'completed', 'upcoming'

    // Stats Data
    const stats = [
        { label: language === 'hi' ? 'बच्चे समर्थित' : 'Children Supported', value: 500, suffix: '+', icon: Users, color: 'bg-blue-500' },
        { label: language === 'hi' ? 'सशक्त महिलाएं' : 'Women Empowered', value: 200, suffix: '+', icon: HeartIcon, color: 'bg-pink-500' },
        { label: language === 'hi' ? 'ग्रामीण तक पहुंच' : 'Villagers Reached', value: 1000, suffix: '+', icon: Users, color: 'bg-green-500' },
        { label: language === 'hi' ? 'सक्रिय स्वयंसेवक' : 'Active Volunteers', value: 100, suffix: '+', icon: UserPlus, color: 'bg-purple-500' },
    ];

    // Projects Data
    const ongoingProjects = [
        {
            id: 1,
            title: language === 'hi' ? 'मुख्य द्वार सौंदर्यीकरण परियोजना' : 'Main Gate Beautification Project',
            description: language === 'hi' 
                ? 'गांव के गौरव और पहचान का प्रतीक भव्य प्रवेश द्वार (स्वागत द्वार) का निर्माण।'
                : 'Construction of grand entrance gate (स्वागत द्वार) symbolizing village pride and identity.',
            budget: '₹2.42 lakh',
            progress: 60,
            status: language === 'hi' ? 'चल रहा' : 'Ongoing',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761943477/539776090_1174414584722008_982293286693648098_n_eclulv.jpg',
        },
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
        },
        {
            id: 3,
            title: language === 'hi' ? 'सांस्कृतिक पुनरुद्धार कार्यक्रम' : 'Cultural Revival Programs',
            description: language === 'hi'
                ? 'राष्ट्रीय नाट्य कला परिषद और पारंपरिक लोक कलाओं का पुनरुद्धार।'
                : 'Revival of Rastriya Natya Kala Parishad and traditional folk arts.',
            budget: language === 'hi' ? 'समुदाय द्वारा वित्त पोषित' : 'Community funded',
            progress: 40,
            status: language === 'hi' ? 'सक्रिय' : 'Active',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761989019/122229215_4119849248032176_6598869593962715102_n_hxkb7o.jpg',
        },
    ];

    const completedProjects = [
        {
            id: 1,
            title: language === 'hi' ? 'सड़क मरम्मत और नाली सफाई' : 'Road Repair & Drainage Cleaning',
            description: language === 'hi'
                ? 'जलभराव को खत्म करने वाली प्रमुख सामुदायिक बुनियादी ढांचा परियोजना।'
                : 'Major community-driven infrastructure project eliminating waterlogging.',
            budget: '₹1.51 lakh',
            completionDate: language === 'hi' ? 'अगस्त 2025' : 'August 2025',
            impact: language === 'hi' ? '500+ परिवार लाभान्वित' : '500+ families benefited',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761997126/abd97183-3e9b-41ad-ba51-05170a964670_csr2md.png',
        },
        {
            id: 2,
            title: language === 'hi' ? 'स्वच्छता और जागरूकता अभियान' : 'Sanitation & Awareness Campaigns',
            description: language === 'hi'
                ? 'गांव भर में स्वच्छता अभियान और सामाजिक जागरूकता कार्यक्रम।'
                : 'Village-wide cleanliness drives and social awareness programs.',
            budget: language === 'hi' ? 'समुदाय द्वारा वित्त पोषित' : 'Community funded',
            completionDate: '2025',
            impact: language === 'hi' ? 'सुधरी हुई गांव की स्वच्छता' : 'Improved village hygiene',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1763067938/Largest-water-conservation-awareness-campaign_jmvlgn.jpg',
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
        },
    ];

    return (
        <section id="projects" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        {language === 'hi' ? 'हमारी परियोजनाएं' : 'Our Projects'}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        {language === 'hi' 
                            ? 'समुदाय-संचालित विकास पहलों के माध्यम से धेवधा का परिवर्तन'
                            : 'Transforming Dheodha through community-driven development initiatives'
                        }
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <button
                        onClick={() => setActiveTab('ongoing')}
                        className={`px-8 py-4 rounded-full font-semibold transition-all ${activeTab === 'ongoing'
                            ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg scale-105'
                            : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                            }`}
                    >
                        <div className="flex items-center space-x-2">
                            <TrendingUp className="w-5 h-5" />
                            <span>{language === 'hi' ? 'चल रहे प्रोजेक्ट्स' : 'Ongoing Projects'}</span>
                            <span className={`ml-2 px-2 py-1 rounded-full text-xs ${activeTab === 'ongoing' ? 'bg-white/20' : 'bg-yellow-100 text-yellow-700'
                                }`}>
                                {ongoingProjects.length}
                            </span>
                        </div>
                    </button>

                    <button
                        onClick={() => setActiveTab('completed')}
                        className={`px-8 py-4 rounded-full font-semibold transition-all ${activeTab === 'completed'
                            ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg scale-105'
                            : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                            }`}
                    >
                        <div className="flex items-center space-x-2">
                            <Award className="w-5 h-5" />
                            <span>{language === 'hi' ? 'पूर्ण प्रोजेक्ट्स' : 'Completed Projects'}</span>
                            <span className={`ml-2 px-2 py-1 rounded-full text-xs ${activeTab === 'completed' ? 'bg-white/20' : 'bg-green-100 text-green-700'
                                }`}>
                                {completedProjects.length}
                            </span>
                        </div>
                    </button>

                    <button
                        onClick={() => setActiveTab('upcoming')}
                        className={`px-8 py-4 rounded-full font-semibold transition-all ${activeTab === 'upcoming'
                            ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg scale-105'
                            : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                            }`}
                    >
                        <div className="flex items-center space-x-2">
                            <Calendar className="w-5 h-5" />
                            <span>{language === 'hi' ? 'आगामी प्रोजेक्ट्स' : 'Upcoming Projects'}</span>
                            <span className={`ml-2 px-2 py-1 rounded-full text-xs ${activeTab === 'upcoming' ? 'bg-white/20' : 'bg-blue-100 text-blue-700'
                                }`}>
                                {upcomingProjects.length}
                            </span>
                        </div>
                    </button>
                </div>

                {/* Projects Grid */}
                <div className="mb-20">
                    {/* Ongoing Projects */}
                    {activeTab === 'ongoing' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {ongoingProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
                                >
                                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold">
                                                {project.status}
                                            </span>
                                            <span className="text-green-600 font-bold">{project.budget}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                                        <p className="text-gray-600 mb-4">{project.description}</p>
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-sm text-gray-600">
                                                <span>{language === 'hi' ? 'प्रगति' : 'Progress'}</span>
                                                <span className="font-semibold">{project.progress}%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div
                                                    className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all"
                                                    style={{ width: `${project.progress}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                    {/* Completed Projects */}
                    {activeTab === 'completed' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="grid md:grid-cols-2 gap-8"
                        >
                            {completedProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
                                >
                                    <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
                                    <div className="p-6">
                                        <div className="flex items-center space-x-2 mb-3">
                                            <Award className="w-5 h-5 text-green-600" />
                                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                                                {language === 'hi' ? 'पूर्ण' : 'Completed'}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                                        <p className="text-gray-600 mb-4">{project.description}</p>
                                        <div className="space-y-2 text-sm text-gray-600">
                                            {project.budget && (
                                                <div className="flex justify-between">
                                                    <span>{language === 'hi' ? 'बजट:' : 'Budget:'}</span>
                                                    <span className="font-semibold">{project.budget}</span>
                                                </div>
                                            )}
                                            <div className="flex justify-between">
                                                <span>{language === 'hi' ? 'पूर्ण:' : 'Completed:'}</span>
                                                <span className="font-semibold">{project.completionDate}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>{language === 'hi' ? 'प्रभाव:' : 'Impact:'}</span>
                                                <span className="font-semibold text-green-600">{project.impact}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                    {/* Upcoming Projects */}
                    {activeTab === 'upcoming' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {upcomingProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
                                >
                                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                                                {project.status}
                                            </span>
                                            <span className="text-blue-600 font-bold">{project.budget}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                                        <p className="text-gray-600 mb-4">{project.description}</p>
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                                                <Calendar className="w-4 h-4" />
                                                <span>{language === 'hi' ? 'अपेक्षित:' : 'Expected:'} {project.startDate}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="text-center mt-16"
                >
                    <Link
                        href="/project"
                        className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all"
                    >
                        <span>{language === 'hi' ? 'सभी परियोजनाएं देखें' : 'Explore All Projects'}</span>
                        <ArrowRight className="w-6 h-6" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsSection;
