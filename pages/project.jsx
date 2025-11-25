// pages/Project.jsx - WITH VISION 2030 PROJECTS INTEGRATED
import Hero from '@/components/Hero';
import React from 'react';
import { CheckCircle, Clock, TrendingUp, Users, Calendar, ArrowRight, Target, Award, Heart as HeartIcon, UserPlus, Building2, TreePine, GraduationCap, Hospital, Dumbbell, Palette } from 'lucide-react';
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

    // Vision 2030 Projects - All 17 Projects
    const vision2030Projects = [
        {
            id: 1,
            title: language === 'hi' ? 'प्राइमरी, मिडिल और हाई स्कूल की शिक्षा की गुणवत्ता बढ़ाना' : 'Improving quality of Primary, Middle and High School education',
            description: language === 'hi'
                ? 'गुणवत्तापूर्ण शिक्षा के लिए स्कूलों में बुनियादी सुविधाओं का विकास, शिक्षक प्रशिक्षण और शैक्षिक संसाधनों में सुधार।'
                : 'Development of basic facilities in schools, teacher training and improvement of educational resources for quality education.',
            budget: '₹8-10 lakh',
            category: language === 'hi' ? 'शिक्षा' : 'Education',
            icon: '📚',
            timeline: language === 'hi' ? '12 महीने' : '12 months',
            status: language === 'hi' ? 'नियोजित' : 'Planned',
            priority: 'high'
        },
        {
            id: 2,
            title: language === 'hi' ? 'महारानी स्थान मंदिर पर गुम्बज़ लगवाना' : 'Installing dome at Maharani Sthan temple',
            description: language === 'hi'
                ? 'प्राचीन महारानी स्थान मंदिर के संरक्षण और सौंदर्यीकरण के लिए पारंपरिक वास्तुकला के साथ गुम्बज़ का निर्माण।'
                : 'Construction of dome with traditional architecture for preservation and beautification of ancient Maharani Sthan temple.',
            budget: '₹5-7 lakh',
            category: language === 'hi' ? 'धार्मिक स्थल' : 'Religious Sites',
            icon: '🕌',
            timeline: language === 'hi' ? '6 महीने' : '6 months',
            status: language === 'hi' ? 'नियोजित' : 'Planned',
            priority: 'medium'
        },
        {
            id: 3,
            title: language === 'hi' ? 'महादेव स्थान में अशोक का पेड़ लगाना' : 'Planting Ashoka tree at Mahadev Sthan',
            description: language === 'hi'
                ? 'पर्यावरण संरक्षण और धार्मिक महत्व को ध्यान में रखते हुए महादेव स्थान में अशोक वृक्षारोपण अभियान।'
                : 'Ashoka tree plantation campaign at Mahadev Sthan keeping in mind environmental protection and religious significance.',
            budget: '₹50,000',
            category: language === 'hi' ? 'पर्यावरण' : 'Environment',
            icon: '🌳',
            timeline: language === 'hi' ? '2 महीने' : '2 months',
            status: language === 'hi' ? 'नियोजित' : 'Planned',
            priority: 'medium'
        },
        {
            id: 4,
            title: language === 'hi' ? 'छठ घाट के चबूतरे और सीढ़ियों की रंगाई' : 'Painting of Chhath Ghat platform and stairs',
            description: language === 'hi'
                ? 'छठ पूजा के लिए घाट का सौंदर्यीकरण और सुरक्षा सुनिश्चित करने के लिए चबूतरे व सीढ़ियों की रंगाई और मरम्मत।'
                : 'Painting and repair of platform and stairs to beautify the ghat for Chhath Puja and ensure safety.',
            budget: '₹2 lakh',
            category: language === 'hi' ? 'बुनियादी ढांचा' : 'Infrastructure',
            icon: '🎨',
            timeline: language === 'hi' ? '1 महीना' : '1 month',
            status: language === 'hi' ? 'नियोजित' : 'Planned',
            priority: 'high'
        },
        {
            id: 5,
            title: language === 'hi' ? 'धेवधा मुख्य द्वार से महादेव स्थान तक स्ट्रीट लाइटिंग' : 'Street lighting from Dheodha main gate to Mahadev Sthan',
            description: language === 'hi'
                ? 'रात्रि में सुरक्षित आवागमन के लिए मुख्य मार्ग पर ऊर्जा-कुशल LED स्ट्रीट लाइट्स की स्थापना।'
                : 'Installation of energy-efficient LED street lights on main route for safe movement at night.',
            budget: '₹4-5 lakh',
            category: language === 'hi' ? 'बुनियादी ढांचा' : 'Infrastructure',
            icon: '💡',
            timeline: language === 'hi' ? '3 महीने' : '3 months',
            status: language === 'hi' ? 'नियोजित' : 'Planned',
            priority: 'high'
        },
        {
            id: 6,
            title: language === 'hi' ? 'वॉलीबॉल मैदान का निर्माण' : 'Construction of volleyball ground',
            description: language === 'hi'
                ? 'युवाओं के शारीरिक विकास और खेल प्रतिभा को बढ़ावा देने के लिए मानक वॉलीबॉल कोर्ट का निर्माण।'
                : 'Construction of standard volleyball court to promote physical development and sports talent of youth.',
            budget: '₹3 lakh',
            category: language === 'hi' ? 'खेल' : 'Sports',
            icon: '🏐',
            timeline: language === 'hi' ? '2 महीने' : '2 months',
            status: language === 'hi' ? 'नियोजित' : 'Planned',
            priority: 'medium'
        },
        {
            id: 7,
            title: language === 'hi' ? 'डिजिटल लाइब्रेरी और ऑनलाइन क्लासेस' : 'Digital library and online classes',
            description: language === 'hi'
                ? 'छात्रों को शहरों जैसी शिक्षा उपलब्ध कराने के लिए कंप्यूटर, इंटरनेट और ई-लर्निंग संसाधनों से युक्त डिजिटल लाइब्रेरी।'
                : 'Digital library equipped with computers, internet and e-learning resources to provide city-like education to students.',
            budget: '₹5-6 lakh',
            category: language === 'hi' ? 'शिक्षा' : 'Education',
            icon: '💻',
            timeline: language === 'hi' ? '4 महीने' : '4 months',
            status: language === 'hi' ? 'नियोजित' : 'Planned',
            priority: 'high'
        },
        {
            id: 8,
            title: language === 'hi' ? 'बाबा ब्रह्मपिचास स्थान को राज्य-स्तर देव स्थल के रूप में विकसित करना' : 'Developing Baba Brahmpicha Sthan as state-level religious site',
            description: language === 'hi'
                ? 'ऐतिहासिक और धार्मिक महत्व के बाबा ब्रह्मपिचास स्थान का राज्य-स्तरीय तीर्थ स्थल के रूप में व्यापक विकास।'
                : 'Comprehensive development of historically and religiously significant Baba Brahmpicha Sthan as state-level pilgrimage site.',
            budget: '₹10-12 lakh',
            category: language === 'hi' ? 'धार्मिक स्थल' : 'Religious Sites',
            icon: '⛰️',
            timeline: language === 'hi' ? '8 महीने' : '8 months',
            status: language === 'hi' ? 'नियोजित' : 'Planned',
            priority: 'high'
        },
        {
            id: 9,
            title: language === 'hi' ? 'सिउररया महारानी को राज्य-स्तर देव स्थल के रूप में विकसित करना' : 'Developing Siurriya Maharani as state-level religious site',
            description: language === 'hi'
                ? 'सिउररया महारानी मंदिर परिसर का आधुनिक सुविधाओं के साथ राज्य-स्तरीय धार्मिक केंद्र के रूप में विकास।'
                : 'Development of Siurriya Maharani temple complex as state-level religious center with modern facilities.',
            budget: '₹10-12 lakh',
            category: language === 'hi' ? 'धार्मिक स्थल' : 'Religious Sites',
            icon: '🛕',
            timeline: language === 'hi' ? '8 महीने' : '8 months',
            status: language === 'hi' ? 'नियोजित' : 'Planned',
            priority: 'high'
        },
        {
            id: 10,
            title: language === 'hi' ? 'अतिरिक्त प्राथमिक स्वास्थ्य केंद्र (APHC) को सुचारू रूप से चालू करना' : 'Smooth operation of Additional Primary Health Center (APHC)',
            description: language === 'hi'
                ? 'APHC में डॉक्टर, दवाइयां और आवश्यक चिकित्सा उपकरणों की व्यवस्था करके 24/7 स्वास्थ्य सेवा सुनिश्चित करना।'
                : 'Ensuring 24/7 health services by arranging doctors, medicines and essential medical equipment at APHC.',
            budget: '₹15-20 lakh',
            category: language === 'hi' ? 'स्वास्थ्य' : 'Health',
            icon: '🏥',
            timeline: language === 'hi' ? '6 महीने' : '6 months',
            status: language === 'hi' ? 'नियोजित' : 'Planned',
            priority: 'high'
        },
        {
            id: 11,
            title: language === 'hi' ? '24/7 एम्बुलेंस उपलब्ध कराना' : 'Providing 24/7 ambulance service',
            description: language === 'hi'
                ? 'आपातकालीन चिकित्सा सेवा के लिए पूर्णकालिक सुसज्जित एम्बुलेंस और प्रशिक्षित चालक की व्यवस्था।'
                : 'Arrangement of fully equipped ambulance and trained driver for emergency medical services.',
            budget: '₹8-10 lakh',
            category: language === 'hi' ? 'स्वास्थ्य' : 'Health',
            icon: '🚑',
            timeline: language === 'hi' ? '3 महीने' : '3 months',
            status: language === 'hi' ? 'नियोजित' : 'Planned',
            priority: 'high'
        },
        {
            id: 12,
            title: language === 'hi' ? 'सड़क और नाली पर अतिक्रमण रोकना' : 'Preventing encroachment on roads and drains',
            description: language === 'hi'
                ? 'सामाजिक सहमति और प्रशासनिक सहयोग से सड़क व नाली पर अतिक्रमण हटाकर सार्वजनिक स्थान मुक्त कराना।'
                : 'Freeing public spaces by removing encroachment on roads and drains through social consensus and administrative cooperation.',
            budget: language === 'hi' ? 'CSR/समुदाय' : 'CSR/Community',
            category: language === 'hi' ? 'बुनियादी ढांचा' : 'Infrastructure',
            icon: '🚧',
            timeline: language === 'hi' ? 'सतत' : 'Ongoing',
            status: language === 'hi' ? 'सक्रिय' : 'Active',
            priority: 'high'
        },
        {
            id: 13,
            title: language === 'hi' ? 'सिद्धमनी स्थान के चारों ओर बाउंड्री' : 'Boundary around Siddhmani Sthan',
            description: language === 'hi'
                ? 'सिद्धमनी स्थान की सुरक्षा और संरक्षण के लिए मजबूत बाउंड्री वाल का निर्माण।'
                : 'Construction of strong boundary wall for security and preservation of Siddhmani Sthan.',
            budget: '₹3 lakh',
            category: language === 'hi' ? 'धार्मिक स्थल' : 'Religious Sites',
            icon: '🧱',
            timeline: language === 'hi' ? '2 महीने' : '2 months',
            status: language === 'hi' ? 'नियोजित' : 'Planned',
            priority: 'medium'
        },
        {
            id: 14,
            title: language === 'hi' ? 'बुढ़वा महादेव के चारों ओर बाउंड्री' : 'Boundary around Budhwa Mahadev',
            description: language === 'hi'
                ? 'प्राचीन बुढ़वा महादेव मंदिर परिसर की सुरक्षा के लिए बाउंड्री निर्माण।'
                : 'Boundary construction for security of ancient Budhwa Mahadev temple complex.',
            budget: '₹3 lakh',
            category: language === 'hi' ? 'धार्मिक स्थल' : 'Religious Sites',
            icon: '🧱',
            timeline: language === 'hi' ? '2 महीने' : '2 months',
            status: language === 'hi' ? 'नियोजित' : 'Planned',
            priority: 'medium'
        },
        {
            id: 15,
            title: language === 'hi' ? 'गाँव और बाध में खुले और लटके तारों को हटाकर सुरक्षित केबलिंग' : 'Safe cabling by removing open and hanging wires',
            description: language === 'hi'
                ? 'बिजली से होने वाली दुर्घटनाओं को रोकने के लिए सभी खुले तारों को हटाकर सुरक्षित अंडरग्राउंड/प्रोटेक्टेड केबलिंग।'
                : 'Safe underground/protected cabling by removing all open wires to prevent electrical accidents.',
            budget: '₹6-8 lakh',
            category: language === 'hi' ? 'बुनियादी ढांचा' : 'Infrastructure',
            icon: '⚡',
            timeline: language === 'hi' ? '4 महीने' : '4 months',
            status: language === 'hi' ? 'नियोजित' : 'Planned',
            priority: 'high'
        },
        {
            id: 16,
            title: language === 'hi' ? 'कला मंच का निर्माण' : 'Construction of art platform',
            description: language === 'hi'
                ? 'नाट्य कला, सांस्कृतिक कार्यक्रमों और सामुदायिक आयोजनों के लिए आधुनिक सुविधाओं से युक्त कला मंच का निर्माण।'
                : 'Construction of art platform equipped with modern facilities for theater arts, cultural programs and community events.',
            budget: '₹4-5 lakh',
            category: language === 'hi' ? 'संस्कृति' : 'Culture',
            icon: '🎭',
            timeline: language === 'hi' ? '3 महीने' : '3 months',
            status: language === 'hi' ? 'नियोजित' : 'Planned',
            priority: 'medium'
        },
        {
            id: 17,
            title: language === 'hi' ? 'ओपन जिम या फिटनेस सेंटर की व्यवस्था' : 'Arrangement of open gym or fitness center',
            description: language === 'hi'
                ? 'युवाओं और ग्रामवासियों के स्वास्थ्य के लिए व्यायाम उपकरणों से युक्त ओपन जिम की स्थापना।'
                : 'Establishment of open gym equipped with exercise equipment for health of youth and villagers.',
            budget: '₹5-6 lakh',
            category: language === 'hi' ? 'खेल' : 'Sports',
            icon: '💪',
            timeline: language === 'hi' ? '3 महीने' : '3 months',
            status: language === 'hi' ? 'नियोजित' : 'Planned',
            priority: 'medium'
        }
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

    // Impact Stats
    const impactStats = [
        {
            number: '₹4.22L',
            label: language === 'hi' ? 'कुल फंड संग्रहित' : 'Total Funds Raised',
            icon: '💰'
        },
        {
            number: `${ongoingProjects.length + completedProjects.length + vision2030Projects.length}+`,
            label: language === 'hi' ? 'परियोजनाएं' : 'Projects',
            icon: '🎯'
        },
        {
            number: '2000+',
            label: language === 'hi' ? 'लाभार्थी' : 'Beneficiaries',
            icon: '👥'
        }
    ];

    // Get category color
    const getCategoryColor = (category) => {
        const colorMap = {
            'शिक्षा': 'bg-blue-100 text-blue-700',
            'Education': 'bg-blue-100 text-blue-700',
            'धार्मिक स्थल': 'bg-purple-100 text-purple-700',
            'Religious Sites': 'bg-purple-100 text-purple-700',
            'पर्यावरण': 'bg-green-100 text-green-700',
            'Environment': 'bg-green-100 text-green-700',
            'बुनियादी ढांचा': 'bg-orange-100 text-orange-700',
            'Infrastructure': 'bg-orange-100 text-orange-700',
            'खेल': 'bg-teal-100 text-teal-700',
            'Sports': 'bg-teal-100 text-teal-700',
            'स्वास्थ्य': 'bg-pink-100 text-pink-700',
            'Health': 'bg-pink-100 text-pink-700',
            'संस्कृति': 'bg-indigo-100 text-indigo-700',
            'Culture': 'bg-indigo-100 text-indigo-700'
        };
        return colorMap[category] || 'bg-gray-100 text-gray-700';
    };

    // Get priority badge
    const getPriorityBadge = (priority) => {
        if (priority === 'high') {
            return (
                <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full">
                    {language === 'hi' ? 'उच्च प्राथमिकता' : 'High Priority'}
                </span>
            );
        }
        return null;
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

                {/* Vision 2030 Projects - All 17 Projects */}
                <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4">
                                <Target className="w-5 h-5" />
                                <span className="font-semibold">
                                    {language === 'hi' ? 'धेवधा Vision 2030' : 'Dheodha Vision 2030'}
                                </span>
                            </div>
                            <h2 className="text-4xl font-black text-gray-900 mb-4">
                                {language === 'hi' ? '17 प्रमुख परियोजनाएं (2026–2030)' : '17 Key Projects (2026–2030)'}
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                {language === 'hi'
                                    ? 'धेवधा को आदर्श गांव बनाने की व्यापक योजना'
                                    : 'Comprehensive plan to make Dheodha a model village'
                                }
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {vision2030Projects.map((project) => (
                                <div
                                    key={project.id}
                                    className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-purple-300"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="text-5xl">{project.icon}</div>
                                        {getPriorityBadge(project.priority)}
                                    </div>

                                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${getCategoryColor(project.category)}`}>
                                        {project.category}
                                    </div>

                                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                                        {project.title}
                                    </h3>

                                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="grid grid-cols-2 gap-3 mb-3">
                                        <div className="bg-gray-50 rounded-lg p-2">
                                            <div className="text-xs text-gray-500 mb-1">
                                                {language === 'hi' ? 'बजट' : 'Budget'}
                                            </div>
                                            <div className="font-bold text-gray-900 text-sm">{project.budget}</div>
                                        </div>
                                        <div className="bg-gray-50 rounded-lg p-2">
                                            <div className="text-xs text-gray-500 mb-1">
                                                {language === 'hi' ? 'अवधि' : 'Timeline'}
                                            </div>
                                            <div className="font-bold text-gray-900 text-sm">{project.timeline}</div>
                                        </div>
                                    </div>

                                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${project.status === 'सक्रिय' || project.status === 'Active'
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-gray-100 text-gray-700'
                                        }`}>
                                        {project.status}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Vision 2030 CTA */}
                        <div className="mt-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white text-center">
                            <h3 className="text-2xl font-bold mb-4">
                                {language === 'hi'
                                    ? 'इन परियोजनाओं को साकार करने में हमारी मदद करें'
                                    : 'Help Us Realize These Projects'
                                }
                            </h3>
                            <p className="text-lg opacity-90 mb-6">
                                {language === 'hi'
                                    ? 'CSR साझेदारी, सामुदायिक भागीदारी और आपके योगदान से ये सपने हकीकत बन सकते हैं।'
                                    : 'Through CSR partnership, community participation and your contribution, these dreams can become reality.'
                                }
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <a
                                    href="/about"
                                    className="inline-flex items-center px-6 py-3 bg-white text-purple-600 font-bold rounded-xl hover:bg-gray-100 transition-colors"
                                >
                                    {language === 'hi' ? 'विस्तार से जानें' : 'Learn More'}
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </a>
                            </div>
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
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Project;
