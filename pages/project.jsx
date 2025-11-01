// pages/Project.jsx - Complete with Full Hindi/English Translation
import Hero from '@/components/Hero';
import React from 'react';
import { CheckCircle, Clock, TrendingUp, Users, MapPin, Calendar, ArrowRight, Target, Award } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

const Project = () => {
    const { language } = useLanguage();

    const completedProjects = [
        {
            id: 1,
            title: language === 'hi' ? 'सड़क मरम्मत और नाली सफाई' : 'Road Repair & Drainage Cleaning',
            description: language === 'hi'
                ? '22 दिनों के समर्पित प्रयास से गांव की 2 किमी सड़क की मरम्मत और नाली सफाई का कार्य पूर्ण किया गया।'
                : 'Completed 2 km road repair and drainage cleaning work through 22 days of dedicated effort.',
            budget: '₹1,51,000',
            duration: language === 'hi' ? '22 दिन' : '22 days',
            beneficiaries: language === 'hi' ? 'संपूर्ण गांव' : 'Entire Village',
            completedDate: language === 'hi' ? 'अगस्त 2025' : 'August 2025',
            impact: language === 'hi' ? [
                'जल भराव और कीचड़ की समस्या समाप्त',
                'मानसून के दौरान बेहतर आवागमन',
                'स्वच्छता में सुधार और मच्छर प्रजनन में कमी'
            ] : [
                'Eliminated waterlogging and mud problems',
                'Better mobility during monsoon',
                'Improved sanitation and reduced mosquito breeding'
            ],
            image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
            category: language === 'hi' ? 'बुनियादी ढांचा' : 'Infrastructure'
        },
        {
            id: 2,
            title: language === 'hi' ? 'पुस्तकालय स्थापना' : 'Library Establishment',
            description: language === 'hi'
                ? '500+ पुस्तकों के साथ एक आधुनिक डिजिटल पुस्तकालय की स्थापना की गई।'
                : 'Established a modern digital library with 500+ books.',
            budget: '₹30,000',
            duration: language === 'hi' ? '3 महीने' : '3 months',
            beneficiaries: language === 'hi' ? '500+ छात्र' : '500+ students',
            completedDate: language === 'hi' ? 'सितंबर 2025' : 'September 2025',
            impact: language === 'hi' ? [
                'विभिन्न विषयों पर हिंदी और अंग्रेजी में 500+ पुस्तकें',
                'कंप्यूटर और इंटरनेट सुविधा',
                'प्रतियोगी परीक्षाओं की तैयारी केंद्र'
            ] : [
                '500+ books in Hindi and English on various subjects',
                'Computer and internet facility',
                'Competitive exam preparation center'
            ],
            image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80',
            category: language === 'hi' ? 'शिक्षा' : 'Education'
        },
        {
            id: 3,
            title: language === 'hi' ? 'स्वास्थ्य शिविर आयोजन' : 'Health Camp Organization',
            description: language === 'hi'
                ? '3 निःशुल्क स्वास्थ्य शिविरों का सफल आयोजन, 1000+ ग्रामवासियों को लाभ।'
                : 'Successfully organized 3 free health camps, benefiting 1000+ villagers.',
            budget: '₹20,000',
            duration: language === 'hi' ? '6 महीने' : '6 months',
            beneficiaries: language === 'hi' ? '1000+ ग्रामवासी' : '1000+ villagers',
            completedDate: language === 'hi' ? 'अक्टूबर 2025' : 'October 2025',
            impact: language === 'hi' ? [
                'सामान्य स्वास्थ्य जांच और परामर्श',
                'रक्तचाप और रक्त शर्करा परीक्षण',
                'निःशुल्क दवाइयां वितरित'
            ] : [
                'General health check-ups and consultations',
                'Blood pressure and blood sugar testing',
                'Free medicines distributed'
            ],
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
            category: language === 'hi' ? 'स्वास्थ्य' : 'Health'
        },
        {
            id: 4,
            title: language === 'hi' ? 'डिजिटल साक्षरता कार्यक्रम' : 'Digital Literacy Program',
            description: language === 'hi'
                ? '100+ युवाओं को बेसिक कंप्यूटर और इंटरनेट कौशल में प्रशिक्षित किया गया।'
                : 'Trained 100+ youth in basic computer and internet skills.',
            budget: '₹15,000',
            duration: language === 'hi' ? '4 महीने' : '4 months',
            beneficiaries: language === 'hi' ? '100+ युवा' : '100+ youth',
            completedDate: language === 'hi' ? 'अक्टूबर 2025' : 'October 2025',
            impact: language === 'hi' ? [
                'MS Office, Internet Browsing प्रशिक्षण',
                'ई-मेल और सोशल मीडिया का उपयोग',
                'ऑनलाइन फॉर्म भरने की जानकारी'
            ] : [
                'MS Office, Internet Browsing training',
                'Email and social media usage',
                'Online form filling knowledge'
            ],
            image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80',
            category: language === 'hi' ? 'शिक्षा' : 'Education'
        },
        {
            id: 5,
            title: language === 'hi' ? 'महिला स्वयं सहायता समूह गठन' : 'Women Self-Help Groups Formation',
            description: language === 'hi'
                ? '5 स्वयं सहायता समूहों का गठन, 150+ महिलाओं को सशक्त बनाया गया।'
                : 'Formed 5 self-help groups, empowering 150+ women.',
            budget: '₹25,000',
            duration: language === 'hi' ? '6 महीने' : '6 months',
            beneficiaries: language === 'hi' ? '150+ महिलाएं' : '150+ women',
            completedDate: language === 'hi' ? 'सितंबर 2025' : 'September 2025',
            impact: language === 'hi' ? [
                '5 सक्रिय SHG समूह संचालित',
                'सिलाई-कढ़ाई प्रशिक्षण',
                'वित्तीय साक्षरता कार्यक्रम'
            ] : [
                '5 active SHG groups operating',
                'Sewing and embroidery training',
                'Financial literacy programs'
            ],
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
            category: language === 'hi' ? 'महिला सशक्तिकरण' : 'Women Empowerment'
        }
    ];

    const ongoingProjects = [
        {
            id: 1,
            title: language === 'hi' ? 'स्वागत द्वार निर्माण' : 'Welcome Gate Construction',
            description: language === 'hi'
                ? 'गांव के प्रवेश द्वार का सौंदर्यीकरण और स्वागत द्वार निर्माण कार्य प्रगति पर है।'
                : 'Village entrance beautification and welcome gate construction in progress.',
            budget: '₹2,42,000',
            progress: 65,
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
            image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
            category: language === 'hi' ? 'बुनियादी ढांचा' : 'Infrastructure'
        },
        {
            id: 2,
            title: language === 'hi' ? 'कृषि प्रशिक्षण केंद्र' : 'Agriculture Training Center',
            description: language === 'hi'
                ? 'किसानों के लिए आधुनिक कृषि तकनीक और जैविक खेती का प्रशिक्षण केंद्र।'
                : 'Training center for modern agricultural techniques and organic farming for farmers.',
            budget: '₹75,000',
            progress: 40,
            expectedCompletion: language === 'hi' ? 'जनवरी 2026' : 'January 2026',
            timeline: language === 'hi' ? '3 महीने' : '3 months',
            features: language === 'hi' ? [
                'जैविक खेती प्रशिक्षण',
                'आधुनिक कृषि यंत्रों की जानकारी',
                'मृदा परीक्षण सुविधा'
            ] : [
                'Organic farming training',
                'Modern agricultural equipment knowledge',
                'Soil testing facility'
            ],
            image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80',
            category: language === 'hi' ? 'कृषि' : 'Agriculture'
        },
        {
            id: 3,
            title: language === 'hi' ? 'खेल का मैदान विकास' : 'Sports Ground Development',
            description: language === 'hi'
                ? 'युवाओं के लिए खेल सुविधाओं का विकास और मैदान का समतलीकरण।'
                : 'Development of sports facilities and ground leveling for youth.',
            budget: '₹1,20,000',
            progress: 30,
            expectedCompletion: language === 'hi' ? 'फरवरी 2026' : 'February 2026',
            timeline: language === 'hi' ? '4 महीने' : '4 months',
            features: language === 'hi' ? [
                'क्रिकेट पिच निर्माण',
                'फुटबॉल और वॉलीबॉल कोर्ट',
                'बैठने की व्यवस्था और शेड'
            ] : [
                'Cricket pitch construction',
                'Football and volleyball courts',
                'Seating arrangement and sheds'
            ],
            image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=800&q=80',
            category: language === 'hi' ? 'खेल' : 'Sports'
        }
    ];

    const upcomingProjects = [
        {
            title: language === 'hi' ? 'सौर ऊर्जा स्ट्रीट लाइट' : 'Solar Street Lights',
            description: language === 'hi'
                ? 'गांव की मुख्य सड़कों पर सौर ऊर्जा से चलने वाली स्ट्रीट लाइट लगाना'
                : 'Installing solar-powered street lights on main village roads',
            icon: '💡',
            status: language === 'hi' ? 'योजना' : 'Planning'
        },
        {
            title: language === 'hi' ? 'सामुदायिक हॉल निर्माण' : 'Community Hall Construction',
            description: language === 'hi'
                ? 'सामाजिक और सांस्कृतिक कार्यक्रमों के लिए बहुउद्देशीय हॉल'
                : 'Multi-purpose hall for social and cultural events',
            icon: '🏛️',
            status: language === 'hi' ? 'फंडिंग' : 'Funding'
        },
        {
            title: language === 'hi' ? 'वृक्षारोपण अभियान' : 'Tree Plantation Campaign',
            description: language === 'hi'
                ? '1000+ पेड़ लगाने और पर्यावरण संरक्षण की पहल'
                : 'Initiative to plant 1000+ trees and environmental conservation',
            icon: '🌳',
            status: language === 'hi' ? 'योजना' : 'Planning'
        },
        {
            title: language === 'hi' ? 'डिजिटल गवर्नेंस प्लेटफॉर्म' : 'Digital Governance Platform',
            description: language === 'hi'
                ? 'वेबसाइट और मोबाइल ऐप के माध्यम से पारदर्शिता'
                : 'Transparency through website and mobile app',
            icon: '💻',
            status: language === 'hi' ? 'विकास' : 'Development'
        }
    ];

    const impactStats = [
        { 
            number: '₹3.93L', 
            label: language === 'hi' ? 'कुल फंड संग्रहित' : 'Total Funds Raised',
            icon: '💰' 
        },
        { 
            number: '₹2.15L', 
            label: language === 'hi' ? 'फंड उपयोग' : 'Funds Utilized',
            icon: '📊' 
        },
        { 
            number: '10+', 
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
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                                                <span>{project.completedDate}</span>
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

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                                    <p className="text-sm text-gray-600">{project.description}</p>
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
                                <a
                                    href="/volunteer"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
                                >
                                    <Users className="w-5 h-5 mr-2" />
                                    {language === 'hi' ? 'स्वयंसेवक बनें' : 'Become a Volunteer'}
                                </a>
                                <a
                                    href="/donate"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-green-800 text-white font-bold rounded-xl hover:bg-green-900 transition-colors shadow-lg"
                                >
                                    {language === 'hi' ? 'दान करें' : 'Donate Now'}
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Project;
