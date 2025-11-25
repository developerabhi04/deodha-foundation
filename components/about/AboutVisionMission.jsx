// components/about/AboutVisionMission.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target, Building2, BookOpen, Heart, Crown, Users, Lightbulb, TreePine, Shield, Dumbbell } from 'lucide-react';
import { useLanguage } from '../../lib/LanguageContext';

const AboutVisionMission = () => {
    const { language } = useLanguage();

    const missionPoints = [
        {
            icon: Crown,
            title: language === 'hi' ? 'धार्मिक-सांस्कृतिक विरासत' : 'Religious-Cultural Heritage',
            desc: language === 'hi'
                ? 'धार्मिक-सांस्कृतिक विरासत का संरक्षण और समावेशी सांस्कृतिक मंच'
                : 'Preservation of religious-cultural heritage and inclusive cultural platform',
            color: 'from-purple-600 to-violet-600'
        },
        {
            icon: TreePine,
            title: language === 'hi' ? 'हरित पहल' : 'Green Initiatives',
            desc: language === 'hi'
                ? 'हरित पहल (अशोक वृक्षारोपण) और सार्वजनिक स्थानों का सौंदर्यीकरण'
                : 'Green initiatives (Ashoka tree plantation) and beautification of public spaces',
            color: 'from-green-600 to-emerald-600'
        },
        {
            icon: BookOpen,
            title: language === 'hi' ? 'शिक्षा और डिजिटल सशक्तिकरण' : 'Education & Digital Empowerment',
            desc: language === 'hi'
                ? 'शिक्षा और डिजिटल समन्विकरण के लिए लाइब्रेरी और ऑनलाइन क्लासेस'
                : 'Library and online classes for education and digital coordination',
            color: 'from-blue-600 to-indigo-600'
        },
        {
            icon: Heart,
            title: language === 'hi' ? 'स्वास्थ्य सुविधाएं' : 'Health Facilities',
            desc: language === 'hi'
                ? 'अतिरिक्त प्राथमिक स्वास्थ्य केंद्र (APHC) को पूर्णतः चालू करते हुए 24/7 एम्बुलेंस उपलब्धता'
                : 'Fully operationalizing Additional Primary Health Center (APHC) with 24/7 ambulance availability',
            color: 'from-pink-600 to-rose-600'
        },
        {
            icon: Shield,
            title: language === 'hi' ? 'सुरक्षा और बुनियादी ढांचा' : 'Safety & Infrastructure',
            desc: language === 'hi'
                ? 'सुरक्षित मार्ग, ऊर्जा-कुशल प्रकाश और तारों की प्रोटेक्टेड केबलिंग'
                : 'Safe routes, energy-efficient lighting and protected wiring',
            color: 'from-orange-600 to-amber-600'
        },
        {
            icon: Dumbbell,
            title: language === 'hi' ? 'युवा स्वास्थ्य और कल्याण' : 'Youth Health & Welfare',
            desc: language === 'hi'
                ? 'युवा खेल मैदान, कला मंच, ओपन जिम—स्वास्थ्य व सामुदायिक कल्याण'
                : 'Youth sports ground, art platform, open gym—health and community welfare',
            color: 'from-teal-600 to-cyan-600'
        },
        {
            icon: Users,
            title: language === 'hi' ? 'पारदर्शी शासन' : 'Transparent Governance',
            desc: language === 'hi'
                ? 'अतिक्रमण-निरोध के लिए सामाजिक सहमति और पारदर्शी स्थानीय शासन'
                : 'Social consensus for encroachment prevention and transparent local governance',
            color: 'from-indigo-600 to-purple-600'
        }
    ];

    const keyProjects = [
        {
            category: language === 'hi' ? 'शिक्षा' : 'Education',
            items: language === 'hi' ? [
                'प्राइमरी, मिडिल और हाई स्कूल की शिक्षा की गुणवत्ता बढ़ाना',
                'डिजिटल लाइब्रेरी और ऑनलाइन क्लासेस'
            ] : [
                'Improving quality of Primary, Middle and High School education',
                'Digital library and online classes'
            ]
        },
        {
            category: language === 'hi' ? 'धार्मिक स्थल विकास' : 'Religious Site Development',
            items: language === 'hi' ? [
                'महारानी स्थान मंदिर पर गुम्बज़ लगवाना',
                'बाबा ब्रह्मपिचास स्थान को राज्य-स्तर देव स्थल के रूप में विकसित करना',
                'सिउररया महारानी को राज्य-स्तर देव स्थल के रूप में विकसित करना',
                'सिद्धमनी स्थान के चारों ओर बाउंड्री',
                'बुढ़वा महादेव के चारों ओर बाउंड्री'
            ] : [
                'Installing dome at Maharani Sthan temple',
                'Developing Baba Brahmpicha Sthan as a state-level religious site',
                'Developing Siurriya Maharani as a state-level religious site',
                'Boundary around Siddhmani Sthan',
                'Boundary around Budhwa Mahadev'
            ]
        },
        {
            category: language === 'hi' ? 'स्वास्थ्य' : 'Health',
            items: language === 'hi' ? [
                'अतिरिक्त प्राथमिक स्वास्थ्य केंद्र (APHC) को सुचारू रूप से चालू करना',
                '24/7 एम्बुलेंस उपलब्ध कराना'
            ] : [
                'Smooth operation of Additional Primary Health Center (APHC)',
                'Providing 24/7 ambulance service'
            ]
        },
        {
            category: language === 'hi' ? 'बुनियादी ढांचा और सुरक्षा' : 'Infrastructure & Safety',
            items: language === 'hi' ? [
                'धेवधा मुख्य द्वार से महादेव स्थान तक स्ट्रीट लाइटिंग',
                'सड़क और नाली पर अतिक्रमण रोकना',
                'गाँव और बाध में खुले और लटके तारों को हटाकर सुरक्षित केबलिंग',
                'छठ घाट के चबूतरे और सीढ़ियों की रंगाई'
            ] : [
                'Street lighting from Dheodha main gate to Mahadev Sthan',
                'Preventing encroachment on roads and drains',
                'Safe cabling by removing open and hanging wires in village and embankment',
                'Painting of Chhath Ghat platform and stairs'
            ]
        },
        {
            category: language === 'hi' ? 'युवा और खेल' : 'Youth & Sports',
            items: language === 'hi' ? [
                'वॉलीबॉल मैदान का निर्माण',
                'कला मंच का निर्माण',
                'ओपन जिम या फिटनेस सेंटर की व्यवस्था'
            ] : [
                'Construction of volleyball ground',
                'Construction of art platform',
                'Arrangement of open gym or fitness center'
            ]
        },
        {
            category: language === 'hi' ? 'पर्यावरण' : 'Environment',
            items: language === 'hi' ? [
                'महादेव स्थान में अशोक का पेड़ लगाना'
            ] : [
                'Planting Ashoka tree at Mahadev Sthan'
            ]
        }
    ];

    const whyImportant = [
        {
            icon: '🛡️',
            title: language === 'hi' ? 'सुरक्षा और सुविधा' : 'Safety and Convenience',
            desc: language === 'hi' ? 'स्ट्रीट लाइटिंग और सुरक्षित केबलिंग से दुर्घटनाओं में कमी' : 'Reduction in accidents through street lighting and safe cabling'
        },
        {
            icon: '📚',
            title: language === 'hi' ? 'शिक्षा का सशक्तिकरण' : 'Education Empowerment',
            desc: language === 'hi' ? 'डिजिटल लाइब्रेरी से छात्रों को शहरों जैसा अवसर' : 'City-like opportunities for students through digital library'
        },
        {
            icon: '🏥',
            title: language === 'hi' ? 'स्वास्थ्य सुरक्षा' : 'Health Security',
            desc: language === 'hi' ? 'APHC और एम्बुलेंस से जीवन बचाने की गारंटी' : 'Life-saving guarantee through APHC and ambulance'
        },
        {
            icon: '🎭',
            title: language === 'hi' ? 'सांस्कृतिक पुनर्जागरण' : 'Cultural Renaissance',
            desc: language === 'hi' ? 'कला मंच से नाट्य कला और सांस्कृतिक कार्यक्रमों की वापसी' : 'Revival of theater arts and cultural programs through art platform'
        },
        {
            icon: '💪',
            title: language === 'hi' ? 'युवा समन्विकरण' : 'Youth Coordination',
            desc: language === 'hi' ? 'खेल मैदान और ओपन जिम से फिटनेस और खेलों को बढ़ावा' : 'Promotion of fitness and sports through playground and open gym'
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
                            {language === 'hi' ? 'धेवधा Vision 2030' : 'Dheodha Vision 2030'}
                        </h2>
                        <p className="text-blue-600 font-semibold text-lg">
                            {language === 'hi' ? 'हमारा सपना, हमारी जिम्मेदारी' : 'Our Dream, Our Responsibility'}
                        </p>
                    </div>
                </div>

                <div className="prose prose-lg max-w-none space-y-4">
                    <p className="text-gray-700 text-base leading-relaxed">
                        {language === 'hi' ? (
                            <>
                                धेवधा ग्राम <strong className="text-blue-600">बिहार के नवादा जिले</strong> का एक सांस्कृतिक और सामाजिक रूप से समृद्ध गाँव है। लेकिन समय के साथ कई चुनौतियाँ सामने आई हैं—<strong>बुनियादी ढाँचे की कमी, शिक्षा में पिछड़ापन, स्वास्थ्य सुविधाओं का अभाव, और युवाओं के लिए सीमित अवसर।</strong>
                            </>
                        ) : (
                            <>
                                Dheodha village in <strong className="text-blue-600">Nawada district of Bihar</strong> is a culturally and socially rich village. However, over time, several challenges have emerged—<strong>lack of basic infrastructure, educational backwardness, absence of health facilities, and limited opportunities for youth.</strong>
                            </>
                        )}
                    </p>

                    <p className="text-gray-700 text-base leading-relaxed">
                        {language === 'hi' ? (
                            <>
                                <strong className="text-blue-600">धेवधा Vision 2030</strong> इन चुनौतियों को अवसर में बदलने का एक सामूहिक प्रयास है। हमारा लक्ष्य है कि <strong>अगले पाँच वर्षों में धेवधा को एक आदर्श ग्राम</strong> के रूप में स्थापित किया जाए।
                            </>
                        ) : (
                            <>
                                <strong className="text-blue-600">Dheodha Vision 2030</strong> is a collective effort to transform these challenges into opportunities. Our goal is to establish Dheodha as a <strong>model village within the next five years.</strong>
                            </>
                        )}
                    </p>

                    <div className="bg-blue-100 border-l-4 border-blue-600 p-4 rounded-r-lg mt-4">
                        <p className="text-gray-800 font-semibold">
                            {language === 'hi'
                                ? 'यह प्रस्ताव धेवधा ग्राम के 2030 विज़न को कॉर्पोरेट सामाजिक उत्तरदायित्व (CSR) साझेदारी के माध्यम से कार्यान्वित करने हेतु प्रस्तुत है।'
                                : 'This proposal is presented to implement Dheodha village\'s 2030 vision through Corporate Social Responsibility (CSR) partnership.'
                            }
                        </p>
                    </div>
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

            {/* 15 Key Projects Section */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border-2 border-orange-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
                    {language === 'hi' ? '15 प्रमुख परियोजनाएं (2026–2030)' : '15 Key Projects (2026–2030)'}
                </h2>
                <p className="text-center text-orange-600 font-semibold mb-8">
                    {language === 'hi' ? 'सतत विकास की ओर' : 'Towards Sustainable Development'}
                </p>

                <div className="space-y-6">
                    {keyProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-500"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                                    {index + 1}
                                </span>
                                {project.category}
                            </h3>
                            <ul className="space-y-2 ml-11">
                                {project.items.map((item, idx) => (
                                    <li key={idx} className="text-gray-700 flex items-start">
                                        <span className="text-orange-500 mr-2 mt-1">●</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Why Important Section */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
                    {language === 'hi' ? 'क्यों जरूरी है यह विज़न?' : 'Why Is This Vision Important?'}
                </h2>
                <p className="text-center text-purple-600 font-semibold mb-8">
                    {language === 'hi' ? 'समुदाय के लिए प्रभाव' : 'Impact for the Community'}
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {whyImportant.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-purple-300"
                        >
                            <div className="text-5xl mb-4">{item.icon}</div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Success Mantra Section */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 border-2 border-indigo-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                    {language === 'hi' ? 'सफलता का मंत्र' : 'Formula for Success'}
                </h2>

                <div className="bg-white rounded-xl p-6 shadow-md mb-6">
                    <p className="text-gray-700 text-lg leading-relaxed text-center">
                        {language === 'hi' ? (
                            <>
                                इस विजन को सफल बनाने के लिए <strong className="text-indigo-600">ग्रामवासियों की सामाजिक भागीदारी</strong> और <strong className="text-indigo-600">जन-प्रतिनिधियों का सहयोग</strong> अनिवार्य है। जो भी जन-प्रतिनिधि इस विजन में आगे आते हैं, उन्हें <strong className="text-indigo-600">100% श्रेय</strong> दिया जाएगा।
                            </>
                        ) : (
                            <>
                                To make this vision successful, <strong className="text-indigo-600">social participation of villagers</strong> and <strong className="text-indigo-600">cooperation of public representatives</strong> is essential. Any public representative who steps forward in this vision will be given <strong className="text-indigo-600">100% credit</strong>.
                            </>
                        )}
                    </p>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    {language === 'hi' ? 'आप कैसे योगदान दे सकते हैं?' : 'How Can You Contribute?'}
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        {
                            icon: '🗣️',
                            text: language === 'hi' ? 'ग्राम सभा में सक्रिय भाग लें' : 'Participate actively in Gram Sabha'
                        },
                        {
                            icon: '🤝',
                            text: language === 'hi' ? 'CSR पार्टनर्स और दानदाताओं को जोड़ने में मदद करें' : 'Help connect CSR partners and donors'
                        },
                        {
                            icon: '📱',
                            text: language === 'hi' ? 'सोशल मीडिया पर इस विज़न को साझा करें' : 'Share this vision on social media'
                        },
                        {
                            icon: '⏰',
                            text: language === 'hi' ? 'समय, श्रम या संसाधन से सहयोग करें' : 'Contribute with time, labor or resources'
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-xl p-5 shadow-md flex items-center space-x-4 hover:shadow-lg transition-all"
                        >
                            <div className="text-4xl">{item.icon}</div>
                            <p className="text-gray-700 font-medium">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Core Values Section */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 border-2 border-teal-200">
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
