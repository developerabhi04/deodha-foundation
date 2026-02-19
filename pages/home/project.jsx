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
            title: language === 'hi' ? 'ब्रह्मपिशाच क्षेत्र में फ्लोरिंग' : 'Flooring inside Brahmpishach Area',
            description: language === 'hi'
                ? 'परिसर के अंदर सुंदरीकरण और टिकाऊ फ्लोरिंग का कार्य। इससे क्षेत्र की सुंदरता और स्थायित्व में वृद्धि होगी।'
                : 'Beautification and durable flooring inside the premises. This will enhance the area\'s beauty and durability.',
            budget: '₹1,50,000',
            progress: 45,
            status: language === 'hi' ? 'प्रगति पर' : 'In Progress',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761989019/122229215_4119849248032176_6598869593962715102_n_hxkb7o.jpg',
        },
    ];


    const completedProjects = [
        {
            id: 1,
            title: language === 'hi' ? 'सड़क मरम्मत और नाली सफाई' : 'Road Repair & Drain Cleaning',
            description: language === 'hi'
                ? 'जलभराव को खत्म करने वाली प्रमुख सामुदायिक बुनियादी ढांचा परियोजना। सड़क मरम्मत और नाली सफाई का कार्य सफलतापूर्वक पूर्ण।'
                : 'Major community infrastructure project eliminating waterlogging. Road repair and drain cleaning work successfully completed.',
            budget: '₹1,20,000',
            completionDate: language === 'hi' ? 'अगस्त 2025' : 'August 2025',
            impact: language === 'hi' ? '₹1,51,000 खर्च' : '₹1,51,000 spent',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761997126/abd97183-3e9b-41ad-ba51-05170a964670_csr2md.png',
        },
        {
            id: 2,
            title: language === 'hi' ? 'छठ पूजा घाट सामूहिक आरती' : 'Chhath Puja Ghat Collective Aarti',
            description: language === 'hi'
                ? 'छठ पूजा घाट पर भव्य सामूहिक आरती का आयोजन। सामुदायिक सद्भाव और धार्मिक उत्सव को बढ़ावा देने वाला कार्यक्रम।'
                : 'Grand collective aarti organized at Chhath Puja Ghat. Program promoting community harmony and religious celebration.',
            budget: '₹25,000',
            completionDate: language === 'hi' ? 'नवंबर 2025' : 'November 2025',
            impact: language === 'hi' ? '₹25,128 खर्च' : '₹25,128 spent',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1763067938/Largest-water-conservation-awareness-campaign_jmvlgn.jpg',
        },
        {
            id: 3,
            title: language === 'hi' ? 'धेवधा लाइब्रेरी, पंचायत भवन' : 'Dhevdha Library, Panchayat Bhavan',
            description: language === 'hi'
                ? 'पंचायत भवन में पुस्तकालय का संचालन नियमित रूप से शुरू। शैक्षणिक, प्रतियोगी परीक्षा और सामान्य ज्ञान की पुस्तकें उपलब्ध।'
                : 'Library operations started regularly with academic, competitive exam, and general knowledge books available.',
            budget: '₹2,000',
            completionDate: language === 'hi' ? 'सितंबर 2025' : 'September 2025',
            impact: language === 'hi' ? 'शिक्षा सुविधा' : 'Education facility',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761943482/544977792_1184272213736245_6643950750768153738_n_vllvdo.jpg',
        },
        {
            id: 4,
            title: language === 'hi' ? 'मुख्य द्वार सौंदर्यीकरण' : 'Main Gate Beautification',
            description: language === 'hi'
                ? 'गांव के गौरव का प्रतीक भव्य स्वागत द्वार। मजबूत और आकर्षक बनाने के लिए गेट संरचना का पुनर्निर्माण।'
                : 'Grand welcome gate symbolizing village pride. Gate structure redesigned to make it strong and attractive.',
            budget: '₹2,42,500',
            completionDate: language === 'hi' ? 'दिसंबर 2025' : 'December 2025',
            impact: language === 'hi' ? '₹3,56,000 खर्च' : '₹3,56,000 spent',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1766659397/IMG_3746_fm9sza.jpg',
        },
        {
            id: 5,
            title: language === 'hi' ? 'सेल्फी पॉइंट' : 'Selfie Point',
            description: language === 'hi'
                ? 'यह स्थान पर्यटकों और स्थानीय लोगों के लिए एक नया आकर्षण केंद्र।'
                : 'This will a new attraction for tourists and locals.',
            budget: '₹45,000',
            completionDate: language === 'hi' ? 'फरवरी 2026' : 'February 2026',
            impact: language === 'hi' ? 'पर्यटक आकर्षण' : 'Tourist attraction',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1771521608/WhatsApp_Image_2026-02-19_at_10.48.06_PM_jatvjo.jpg',
        },
    ];


    const upcomingProjects = [
        {
            id: 1,
            title: language === 'hi' ? 'बुद्धवा महादेव, महादेव स्थान' : 'Budhwa Mahadev, Mahadev Sthan',
            description: language === 'hi'
                ? 'बुद्धवा महादेव मंदिर में सीमा दीवार और सुरक्षा कार्य। मंदिर परिसर की सुरक्षा और सौंदर्यीकरण के लिए योजना।'
                : 'Boundary wall and protection work at Budhwa Mahadev temple. Planning for temple premises security and beautification.',
            budget: language === 'hi' ? 'योजनाबद्ध' : 'To be planned',
            startDate: language === 'hi' ? 'मार्च 2026' : 'Mar 2026',
            status: language === 'hi' ? 'नियोजित' : 'Planned',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1763069558/RW-12_gneahb.jpg',
        },
        {
            id: 2,
            title: language === 'hi' ? 'धार्मिक विरासत - छठ घाट सीढ़ियों की पेंटिंग' : 'Religious Heritage - Chhath Ghat Stairs Painting',
            description: language === 'hi'
                ? 'छठ घाट की सीढ़ियों पर रंगीन पेंटिंग। पारंपरिक और आधुनिक कला का संगम, घाट को आकर्षक बनाने के लिए।'
                : 'Colorful painting on Chhath Ghat stairs. Fusion of traditional and modern art to make the ghat attractive.',
            budget: language === 'hi' ? 'योजनाबद्ध' : 'To be planned',
            startDate: language === 'hi' ? 'अप्रैल 2026' : 'Apr 2026',
            status: language === 'hi' ? 'नियोजित' : 'Planned',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1763067938/Largest-water-conservation-awareness-campaign_jmvlgn.jpg',
        },
        {
            id: 3,
            title: language === 'hi' ? 'पार्वती मंदिर, महादेव स्थान' : 'Parvati Temple, Mahadev Sthan',
            description: language === 'hi'
                ? 'शिव मंदिर के सामने माँ पार्वती की मूर्ति स्थापना का प्रस्ताव। धार्मिक स्थल की पूर्णता के लिए योजना।'
                : 'Proposal to install Maa Parvati idol in front of Shiv temple. Planning for completeness of religious site.',
            budget: language === 'hi' ? 'योजनाबद्ध' : 'To be planned',
            startDate: language === 'hi' ? 'मई 2026' : 'May 2026',
            status: language === 'hi' ? 'नियोजित' : 'Planned',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1763068920/330207172_529598739266971_2580032597949579545_n_ibhdce.jpg',
        },
        {
            id: 4,
            title: language === 'hi' ? 'वृक्षारोपण' : 'Tree Plantation',
            description: language === 'hi'
                ? 'तालाब के दोनों ओर वृक्षारोपण। पर्यावरण संरक्षण और हरित आवरण बढ़ाने के लिए सामुदायिक पहल।'
                : 'Plantation on both sides of the pond. Community initiative to increase green cover and environmental protection.',
            budget: language === 'hi' ? 'योजनाबद्ध' : 'To be planned',
            startDate: language === 'hi' ? 'जून 2026' : 'Jun 2026',
            status: language === 'hi' ? 'नियोजित' : 'Planned',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761943481/545839216_1184272130402920_2963934031699955061_n_qt9tlk.jpg',
        },
        {
            id: 5,
            title: language === 'hi' ? 'महारानी स्थान मंदिर गुंबद' : 'Maharani Sthan Temple Dome',
            description: language === 'hi'
                ? 'मंदिर गुंबद का सौंदर्यीकरण या संरचनात्मक विस्तार। पारंपरिक वास्तुकला को संरक्षित करते हुए आधुनिकीकरण।'
                : 'Beautification or structural expansion of temple dome. Modernization while preserving traditional architecture.',
            budget: language === 'hi' ? 'योजनाबद्ध' : 'To be planned',
            startDate: language === 'hi' ? 'जुलाई 2026' : 'Jul 2026',
            status: language === 'hi' ? 'नियोजित' : 'Planned',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761989019/122229215_4119849248032176_6598869593962715102_n_hxkb7o.jpg',
        },
        {
            id: 6,
            title: language === 'hi' ? 'सिद्धमणि स्थान' : 'Siddhmani Sthan',
            description: language === 'hi'
                ? 'सीमा दीवार और सुरक्षा कार्य। धार्मिक स्थल की सुरक्षा और रखरखाव के लिए व्यापक योजना।'
                : 'Boundary wall and protection work. Comprehensive plan for security and maintenance of religious site.',
            budget: language === 'hi' ? 'योजनाबद्ध' : 'To be planned',
            startDate: language === 'hi' ? 'अगस्त 2026' : 'Aug 2026',
            status: language === 'hi' ? 'नियोजित' : 'Planned',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1763069558/RW-12_gneahb.jpg',
        },
        {
            id: 7,
            title: language === 'hi' ? 'सोलर स्ट्रीट लाइट' : 'Solar Street Lights',
            description: language === 'hi'
                ? 'मुख्य धेवधा रोड से शिवाला तक प्रत्येक खंभे पर सोलर/इलेक्ट्रिक लाइट। पर्यावरण अनुकूल और ऊर्जा बचत समाधान।'
                : 'Solar/electric lights on each pole on main Dhevdha road to Shivala. Eco-friendly and energy-saving solution.',
            budget: language === 'hi' ? 'योजनाबद्ध' : 'To be planned',
            startDate: language === 'hi' ? 'फरवरी 2026' : 'Feb 2026',
            status: language === 'hi' ? 'नियोजित' : 'Planned',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1763069558/RW-12_gneahb.jpg',
        },
        {
            id: 8,
            title: language === 'hi' ? 'सांस्कृतिक पुनरुद्धार कार्यक्रम' : 'Cultural Revival Program',
            description: language === 'hi'
                ? 'राष्ट्रीय नाट्य कला और पारंपरिक लोक कलाओं का पुनरुद्धार। स्थानीय कलाकारों को प्रशिक्षण और मंच के अवसर।'
                : 'Revival of national drama arts and traditional folk arts. Training opportunities and platform for local artists.',
            budget: language === 'hi' ? 'योजनाबद्ध' : 'To be planned',
            startDate: language === 'hi' ? 'जनवरी 2026' : 'Jan 2026',
            status: language === 'hi' ? 'नियोजित' : 'Planned',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761989019/122229215_4119849248032176_6598869593962715102_n_hxkb7o.jpg',
        },
        {
            id: 9,
            title: language === 'hi' ? 'डिजिटल लाइब्रेरी' : 'Digital Library',
            description: language === 'hi'
                ? 'ई-लर्निंग संसाधन और कंप्यूटर प्रशिक्षण केंद्र। 20 कंप्यूटर और हाई-स्पीड इंटरनेट के साथ आधुनिक सुविधा।'
                : 'E-learning resources and computer training center. Modern facility with 20 computers and high-speed internet.',
            budget: language === 'hi' ? 'योजनाबद्ध' : 'To be planned',
            startDate: language === 'hi' ? 'मार्च 2026' : 'Mar 2026',
            status: language === 'hi' ? 'नियोजित' : 'Planned',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761943482/544977792_1184272213736245_6643950750768153738_n_vllvdo.jpg',
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
            count: 2
        },
        {
            id: 'completed',
            label: language === 'hi' ? 'पूर्ण' : 'Completed',
            icon: Award,
            gradient: 'from-green-500 to-emerald-500',
            bgColor: 'bg-green-100',
            textColor: 'text-green-700',
            count: 4
        },
        {
            id: 'upcoming',
            label: language === 'hi' ? 'आगामी' : 'Upcoming',
            icon: Calendar,
            gradient: 'from-blue-500 to-indigo-500',
            bgColor: 'bg-blue-100',
            textColor: 'text-blue-700',
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
