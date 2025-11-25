// pages/Project.jsx - FULLY CORRECTED
import Hero from '@/components/Hero';
import React from 'react';
import { CheckCircle, Clock, TrendingUp, Users, Calendar, ArrowRight, Target, Award, Heart as HeartIcon, UserPlus } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

const Project = () => {
    const { language } = useLanguage();

    // Stats Data
    const stats = [
        { label: language === 'hi' ? 'बच्चे समर्थित' : 'Children Supported', value: 500, suffix: '+', icon: Users, color: 'bg-blue-500' },
        { label: language === 'hi' ? 'सशक्त महिलाएं' : 'Women Empowered', value: 200, suffix: '+', icon: HeartIcon, color: 'bg-pink-500' },
        { label: language === 'hi' ? 'ग्रामीण तक पहुंच' : 'Villagers Reached', value: 1000, suffix: '+', icon: Users, color: 'bg-green-500' },
        { label: language === 'hi' ? 'सक्रिय स्वयंसेवक' : 'Active Volunteers', value: 100, suffix: '+', icon: UserPlus, color: 'bg-purple-500' },
    ];

    // Ongoing Projects Data
    const ongoingProjects = [
        {
            id: 1,
            title: language === 'hi' ? 'मुख्य द्वार सौंदर्यीकरण परियोजना' : 'Main Gate Beautification Project',
            description: language === 'hi'
                ? 'गांव के गौरव और पहचान का प्रतीक भव्य प्रवेश द्वार (स्वागत द्वार) का निर्माण।'
                : 'Construction of grand entrance gate (Welcome Gate) symbolizing village pride and identity.',
            budget: '₹2.42 lakh',
            progress: 60,
            status: language === 'hi' ? 'चल रहा' : 'Ongoing',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761943477/539776090_1174414584722008_982293286693648098_n_eclulv.jpg',
            category: language === 'hi' ? 'बुनियादी ढांचा' : 'Infrastructure',
            expectedCompletion: language === 'hi' ? 'दिसंबर 2025' : 'December 2025',
            timeline: language === 'hi' ? '20-25 दिन' : '20-25 days',
            features: language === 'hi' ? [
                'आधुनिक डिज़ाइन और निर्माण',
                'गांव का नाम और लोगो',
                'LED लाइटिंग सिस्टम'
            ] : [
                'Modern design and construction',
                'Village name and logo',
                'LED lighting system'
            ],
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
            budget: language === 'hi' ? 'समुदाय द्वारा वित्त पोषित' : 'Community funded',
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

    // Completed Projects Data
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
            completionDate: language === 'hi' ? 'अगस्त 2025' : 'August 2025',
            impact: language === 'hi' ? [
                'जल भराव और कीचड़ की समस्या समाप्त',
                'मानसून के दौरान बेहतर आवागमन',
                'स्वच्छता में सुधार और मच्छर प्रजनन में कमी'
            ] : [
                'Eliminated waterlogging and mud problems',
                'Better mobility during monsoon',
                'Improved sanitation and reduced mosquito breeding'
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
            budget: language === 'hi' ? 'समुदाय द्वारा वित्त पोषित' : 'Community funded',
            duration: language === 'hi' ? '6 महीने' : '6 months',
            beneficiaries: language === 'hi' ? '1000+ ग्रामवासी' : '1000+ villagers',
            completionDate: language === 'hi' ? 'सितंबर 2025' : 'September 2025',
            impact: language === 'hi' ? [
                'गांव की स्वच्छता में सुधार',
                'स्वास्थ्य जागरूकता',
                'समुदाय की भागीदारी बढ़ी'
            ] : [
                'Improved village hygiene',
                'Health awareness',
                'Increased community participation'
            ],
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1763067938/Largest-water-conservation-awareness-campaign_jmvlgn.jpg',
            category: language === 'hi' ? 'स्वास्थ्य' : 'Health'
        },
    ];

    // Upcoming Projects Data
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
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
            icon: '🏛️',
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
            image: 'https://images.unsplash.com/photo-1509391111737-a6f1241a85d4?w=600&q=80',
            icon: '🌳',
        },
    ];

    // Impact Stats
    const impactStats = [
        {
            number: '₹4.22L',
            label: language === 'hi' ? 'कुल फंड संग्रहित' : 'Total Funds Raised',
            icon: '💰'
        },

        {
            number: `${ongoingProjects.length + completedProjects.length + upcomingProjects.length}+`,
            label: language === 'hi' ? 'परियोजनाएं' : 'Projects',
            icon: '🎯'
        },
        {
            number: '2000+',
            label: language === 'hi' ? 'लाभार्थी' : 'Beneficiaries',
            icon: '👥'
        }
    ];

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

            <div className="bg-gradient-to-b from-gray-50 to-white">
                {/* Impact Stats */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {impactStats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                                >
                                    <div className="text-4xl mb-3">{stat.icon}</div>
                                    <div className="text-3xl font-black text-green-600 mb-2">{stat.number}</div>
                                    <div className="text-sm text-gray-600 font-semibold">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Completed Projects */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
                                <CheckCircle className="w-5 h-5" />
                                <span className="font-semibold">
                                    {language === 'hi' ? 'पूर्ण परियोजनाएं' : 'Completed Projects'}
                                </span>
                            </div>
                            <h2 className="text-4xl font-black text-gray-900 mb-4">
                                {language === 'hi' ? 'सफलतापूर्वक पूर्ण किए गए कार्य' : 'Successfully Completed Works'}
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                {language === 'hi'
                                    ? 'समुदाय की सक्रिय भागीदारी से पूर्ण की गई परियोजनाएं'
                                    : 'Projects completed with active community participation'
                                }
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {completedProjects.map((project) => (
                                <div
                                    key={project.id}
                                    className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                                >
                                    <div className="relative h-56 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                                            <CheckCircle className="w-4 h-4" />
                                            {language === 'hi' ? 'पूर्ण' : 'Completed'}
                                        </div>
                                        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                                            {project.category}
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                                        <p className="text-gray-600 mb-4 leading-relaxed text-sm">{project.description}</p>

                                        <div className="grid grid-cols-2 gap-3 mb-4">
                                            <div className="bg-gray-50 rounded-lg p-3">
                                                <div className="text-xs text-gray-500 mb-1">
                                                    {language === 'hi' ? 'बजट' : 'Budget'}
                                                </div>
                                                <div className="font-bold text-gray-900">{project.budget}</div>
                                            </div>
                                            <div className="bg-gray-50 rounded-lg p-3">
                                                <div className="text-xs text-gray-500 mb-1">
                                                    {language === 'hi' ? 'अवधि' : 'Duration'}
                                                </div>
                                                <div className="font-bold text-gray-900">{project.duration}</div>
                                            </div>
                                        </div>

                                        <div className="bg-green-50 rounded-lg p-3 mb-4">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Users className="w-4 h-4 text-green-600" />
                                                <span className="text-sm font-semibold text-green-900">
                                                    {language === 'hi' ? 'प्रभाव' : 'Impact'}
                                                </span>
                                            </div>
                                            <ul className="space-y-1">
                                                {project.impact.map((item, idx) => (
                                                    <li key={idx} className="text-xs text-green-800 flex items-start">
                                                        <span className="text-green-600 mr-2">✓</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="flex items-center justify-between text-sm">
                                            <div className="flex items-center gap-1 text-gray-500">
                                                <Calendar className="w-4 h-4" />
                                                <span>{project.completionDate}</span>
                                            </div>
                                            <div className="text-green-600 font-semibold">
                                                {project.beneficiaries}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Ongoing Projects */}
                <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
                                <Clock className="w-5 h-5" />
                                <span className="font-semibold">
                                    {language === 'hi' ? 'चल रही परियोजनाएं' : 'Ongoing Projects'}
                                </span>
                            </div>
                            <h2 className="text-4xl font-black text-gray-900 mb-4">
                                {language === 'hi' ? 'वर्तमान में संचालित कार्य' : 'Currently Running Works'}
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                {language === 'hi'
                                    ? 'प्रगति पर हमारी महत्वाकांक्षी परियोजनाएं'
                                    : 'Our ambitious projects in progress'
                                }
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {ongoingProjects.map((project) => (
                                <div
                                    key={project.id}
                                    className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                                >
                                    <div className="relative h-56 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <div className="mb-2">
                                                <div className="flex justify-between text-white text-sm mb-1">
                                                    <span>{language === 'hi' ? 'प्रगति' : 'Progress'}</span>
                                                    <span className="font-bold">{project.progress}%</span>
                                                </div>
                                                <div className="w-full bg-white/30 rounded-full h-2">
                                                    <div
                                                        className="bg-green-400 h-2 rounded-full transition-all duration-500"
                                                        style={{ width: `${project.progress}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                                        <p className="text-gray-600 mb-4 leading-relaxed text-sm">{project.description}</p>

                                        <div className="bg-blue-50 rounded-lg p-4 mb-4">
                                            <div className="grid grid-cols-2 gap-3 mb-3">
                                                <div>
                                                    <div className="text-xs text-gray-500 mb-1">
                                                        {language === 'hi' ? 'बजट' : 'Budget'}
                                                    </div>
                                                    <div className="font-bold text-gray-900 text-sm">{project.budget}</div>
                                                </div>
                                                <div>
                                                    <div className="text-xs text-gray-500 mb-1">
                                                        {language === 'hi' ? 'समय-सीमा' : 'Timeline'}
                                                    </div>
                                                    <div className="font-bold text-gray-900 text-sm">{project.timeline}</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-blue-700">
                                                <Target className="w-4 h-4" />
                                                <span className="font-semibold">{project.expectedCompletion}</span>
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                                                {language === 'hi' ? 'विशेषताएं:' : 'Features:'}
                                            </h4>
                                            <ul className="space-y-1">
                                                {project.features.map((feature, idx) => (
                                                    <li key={idx} className="text-xs text-gray-700 flex items-start">
                                                        <span className="text-blue-600 mr-2">✓</span>
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Upcoming Projects */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4">
                                <TrendingUp className="w-5 h-5" />
                                <span className="font-semibold">
                                    {language === 'hi' ? 'आगामी परियोजनाएं' : 'Upcoming Projects'}
                                </span>
                            </div>
                            <h2 className="text-4xl font-black text-gray-900 mb-4">
                                {language === 'hi' ? 'भविष्य की योजनाएं' : 'Future Plans'}
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                {language === 'hi'
                                    ? 'धेवधा के समग्र विकास के लिए नई पहल'
                                    : 'New initiatives for overall development of Dheodha'
                                }
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {upcomingProjects.map((project, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100"
                                >
                                    <div className="text-5xl mb-4">{project.icon}</div>
                                    <div className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                                        {project.status}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                                    <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <Calendar className="w-4 h-4" />
                                        <span>{language === 'hi' ? 'अपेक्षित:' : 'Expected:'} {project.startDate}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-12 text-white text-center">
                            <Award className="w-16 h-16 mx-auto mb-6" />
                            <h2 className="text-4xl font-black mb-6">
                                {language === 'hi' ? 'इन परियोजनाओं का हिस्सा बनें' : 'Be Part of These Projects'}
                            </h2>
                            <p className="text-lg mb-8 opacity-90">
                                {language === 'hi'
                                    ? 'आपका योगदान हमारी परियोजनाओं को सफल बनाने में मदद करता है। आज ही जुड़ें और गांव के विकास में भागीदार बनें।'
                                    : 'Your contribution helps make our projects successful. Join today and become a partner in village development.'
                                }
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                {/* <a
                                    href="/volunteer"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
                                >
                                    <Users className="w-5 h-5 mr-2" />
                                    {language === 'hi' ? 'स्वयंसेवक बनें' : 'Become a Volunteer'}
                                </a> */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Project;
