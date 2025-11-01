// lib/faqData.js - Complete FAQ Data with Full Bilingual Support (All 27 Questions)
import {
    Building2, Calendar, Award, CheckCircle, TrendingUp, Users, Shield,
    FileText, Heart, Sparkles, DollarSign, Globe, Info, MessageCircle, Mail
} from 'lucide-react';

export const faqData = [
    // ==================== ABOUT US CATEGORY (5 QUESTIONS) ====================
    {
        id: 1,
        category: 'about',
        categoryLabel: { hi: 'हमारे बारे में', en: 'About Us' },
        question: {
            hi: 'धेवधा विकास समिति क्या है?',
            en: 'What is Dheodha Vikas Samiti?'
        },
        answer: {
            hi: 'धेवधा विकास समिति एक गैर-राजनीतिक, सामाजिक संगठन है जो धेवधा ग्राम के समग्र विकास के लिए कार्य करता है। इसका उद्देश्य सड़क, नाली, शिक्षा, स्वास्थ्य, पर्यावरण, महिला सशक्तिकरण और सांस्कृतिक गतिविधियों को बढ़ावा देना है।',
            en: 'Dheodha Vikas Samiti is a non-political, social organization working for the holistic development of Dheodha village. Its aim is to promote road infrastructure, drainage, education, health, environment, women empowerment, and cultural activities.'
        },
        highlight: {
            hi: 'समिति पूर्णतः जनहित में कार्य करती है और किसी भी राजनीतिक दल से संबद्ध नहीं है।',
            en: 'The Samiti works entirely in public interest and is not affiliated with any political party.'
        },
        icon: Building2,
        color: 'from-blue-600 to-indigo-600'
    },
    {
        id: 2,
        category: 'about',
        categoryLabel: { hi: 'हमारे बारे में', en: 'About Us' },
        question: {
            hi: 'समिति की स्थापना कब और क्यों हुई?',
            en: 'When and why was the Samiti established?'
        },
        answer: {
            hi: 'समिति की स्थापना 2 अगस्त 2025 को अप्रवासी ग्रामवासियों की पहल पर हुई, ताकि गांव के विकास कार्यों को संगठित और पारदर्शी तरीके से आगे बढ़ाया जा सके।',
            en: 'The Samiti was established on August 2, 2025, at the initiative of migrant villagers to carry forward village development work in an organized and transparent manner.'
        },
        list: {
            hi: [
                'गांव के बुनियादी ढांचे का विकास',
                'शिक्षा और स्वास्थ्य सुविधाओं में सुधार',
                'युवाओं को रोजगार और कौशल विकास के अवसर प्रदान करना',
                'सामाजिक एकता और सांस्कृतिक मूल्यों को बढ़ावा देना'
            ],
            en: [
                'Development of village infrastructure',
                'Improvement in education and health facilities',
                'Providing employment and skill development opportunities to youth',
                'Promoting social unity and cultural values'
            ]
        },
        icon: Calendar,
        color: 'from-green-600 to-emerald-600'
    },
    {
        id: 3,
        category: 'about',
        categoryLabel: { hi: 'हमारे बारे में', en: 'About Us' },
        question: {
            hi: 'समिति का विजन और मिशन क्या है?',
            en: 'What is the vision and mission of the Samiti?'
        },
        answer: {
            hi: 'विजन: धेवधा को बिहार का एक आदर्श गांव बनाना जहां शिक्षा, स्वास्थ्य, रोजगार और सामाजिक विकास के सभी संसाधन उपलब्ध हों।',
            en: 'Vision: To make Dheodha a model village of Bihar where all resources for education, health, employment, and social development are available.'
        },
        list: {
            hi: [
                'हर परिवार को बुनियादी सुविधाएं उपलब्ध कराना',
                'युवाओं को शिक्षा और कौशल विकास के अवसर देना',
                'महिला सशक्तिकरण को बढ़ावा देना',
                'पर्यावरण संरक्षण और स्वच्छता अभियान',
                'सांस्कृतिक विरासत का संरक्षण'
            ],
            en: [
                'Providing basic facilities to every family',
                'Giving education and skill development opportunities to youth',
                'Promoting women empowerment',
                'Environmental conservation and cleanliness campaigns',
                'Preservation of cultural heritage'
            ]
        },
        icon: Award,
        color: 'from-purple-600 to-violet-600'
    },
    {
        id: 4,
        category: 'about',
        categoryLabel: { hi: 'हमारे बारे में', en: 'About Us' },
        question: {
            hi: 'समिति के मुख्य उद्देश्य क्या हैं?',
            en: 'What are the main objectives of the Samiti?'
        },
        answer: {
            hi: 'समिति के प्रमुख उद्देश्य निम्नलिखित हैं:',
            en: 'The main objectives of the Samiti are as follows:'
        },
        list: {
            hi: [
                'बुनियादी ढांचा विकास: सड़क, नाली, पानी, बिजली की सुविधा',
                'शिक्षा: पुस्तकालय, कंप्यूटर केंद्र, शैक्षिक कार्यक्रम',
                'स्वास्थ्य: स्वास्थ्य शिविर, जागरूकता अभियान',
                'रोजगार: कौशल विकास, स्वरोजगार को बढ़ावा',
                'महिला सशक्तिकरण: स्वयं सहायता समूह, प्रशिक्षण कार्यक्रम',
                'युवा विकास: खेल, कला, सांस्कृतिक गतिविधियां',
                'पर्यावरण: वृक्षारोपण, स्वच्छता अभियान'
            ],
            en: [
                'Infrastructure development: Road, drainage, water, electricity facilities',
                'Education: Library, computer center, educational programs',
                'Health: Health camps, awareness campaigns',
                'Employment: Skill development, self-employment promotion',
                'Women empowerment: Self-help groups, training programs',
                'Youth development: Sports, arts, cultural activities',
                'Environment: Tree plantation, cleanliness campaigns'
            ]
        },
        icon: CheckCircle,
        color: 'from-teal-600 to-cyan-600'
    },
    {
        id: 5,
        category: 'about',
        categoryLabel: { hi: 'हमारे बारे में', en: 'About Us' },
        question: {
            hi: 'समिति की वर्तमान उपलब्धियां क्या हैं?',
            en: 'What are the current achievements of the Samiti?'
        },
        answer: {
            hi: 'अब तक की प्रमुख उपलब्धियां:',
            en: 'Major achievements so far:'
        },
        list: {
            hi: [
                'गांव में 2 किमी सड़क की मरम्मत और निर्माण',
                'स्वागत द्वार का निर्माण और सौंदर्यीकरण',
                'पुस्तकालय की स्थापना (500+ पुस्तकों के साथ)',
                'डिजिटल साक्षरता कार्यक्रम (100+ युवाओं को प्रशिक्षित)',
                '3 स्वास्थ्य शिविर (1000+ ग्रामवासियों को लाभ)',
                'महिला स्वयं सहायता समूहों का गठन (5 समूह)',
                'वृक्षारोपण अभियान (1000+ पेड़ लगाए गए)'
            ],
            en: [
                '2 km road repair and construction in the village',
                'Construction and beautification of welcome gate',
                'Library establishment (with 500+ books)',
                'Digital literacy program (100+ youth trained)',
                '3 health camps (1000+ villagers benefited)',
                'Formation of women self-help groups (5 groups)',
                'Tree plantation campaign (1000+ trees planted)'
            ]
        },
        icon: TrendingUp,
        color: 'from-orange-600 to-amber-600'
    },

    // ==================== ORGANIZATION STRUCTURE (4 QUESTIONS) ====================
    {
        id: 6,
        category: 'organization',
        categoryLabel: { hi: 'संगठनात्मक ढांचा', en: 'Organizational Structure' },
        question: {
            hi: 'समिति का संगठनात्मक ढांचा क्या है?',
            en: 'What is the organizational structure of the Samiti?'
        },
        answer: {
            hi: 'समिति का संगठनात्मक ढांचा निम्नलिखित पदों पर आधारित है:',
            en: 'The organizational structure of the Samiti is based on the following positions:'
        },
        list: {
            hi: [
                'अध्यक्ष: समिति का नेतृत्व और दिशा-निर्देशन',
                'उपाध्यक्ष: अध्यक्ष की सहायता और प्रतिनिधित्व',
                'महासचिव: सभी प्रशासनिक कार्यों का संचालन',
                'सचिव: दस्तावेज़ीकरण और संचार',
                'उप-सचिव: सचिव की सहायता',
                'कोषाध्यक्ष: वित्तीय प्रबंधन और लेखा-जोखा',
                'सलाहकार मंडल: रणनीतिक मार्गदर्शन',
                'प्रारंभिक सदस्य: (10–15) कार्यान्वयन टीम'
            ],
            en: [
                'President: Leadership and direction of the Samiti',
                'Vice President: Assistance and representation of President',
                'General Secretary: Managing all administrative work',
                'Secretary: Documentation and communication',
                'Joint Secretary: Assistant to Secretary',
                'Treasurer: Financial management and accounting',
                'Advisory Board: Strategic guidance',
                'Founding Members: (10-15) Implementation team'
            ]
        },
        icon: Users,
        color: 'from-blue-600 to-indigo-600'
    },
    {
        id: 7,
        category: 'organization',
        categoryLabel: { hi: 'संगठनात्मक ढांचा', en: 'Organizational Structure' },
        question: {
            hi: 'समिति के पदाधिकारी कौन हैं?',
            en: 'Who are the office bearers of the Samiti?'
        },
        answer: {
            hi: 'वर्तमान पदाधिकारी गण:',
            en: 'Current office bearers:'
        },
        list: {
            hi: [
                'अध्यक्ष: श्री राजेश कुमार',
                'उपाध्यक्ष: श्री चंदन कुमार',
                'सचिव: श्री मितेन्द्र कुमार',
                'कोषाध्यक्ष: श्री देवकांत मिश्रा',
                'उप सचिव: श्री ब्रजेश कुमार (सिट्टू)'
            ],
            en: [
                'President: Shri Rajesh Kumar',
                'Vice President: Shri Chandan Kumar',
                'Secretary: Shri Mitendra Kumar',
                'Treasurer: Shri Devkant Mishra',
                'Joint Secretary: Shri Brajesh Kumar (Sittu)'
            ]
        },
        highlight: {
            hi: 'सभी पदाधिकारी गांव के विकास के लिए समर्पित हैं और निःस्वार्थ भाव से सेवा कर रहे हैं।',
            en: 'All office bearers are dedicated to village development and serving selflessly.'
        },
        icon: Award,
        color: 'from-green-600 to-emerald-600'
    },
    {
        id: 8,
        category: 'organization',
        categoryLabel: { hi: 'संगठनात्मक ढांचा', en: 'Organizational Structure' },
        question: {
            hi: 'समिति की बैठकें कब और कैसे होती हैं?',
            en: 'When and how are the meetings of the Samiti held?'
        },
        answer: {
            hi: 'समिति की बैठकें नियमित रूप से आयोजित की जाती हैं:',
            en: 'Meetings of the Samiti are held regularly:'
        },
        list: {
            hi: [
                'मासिक बैठक: हर महीने के पहले रविवार को',
                'आपातकालीन बैठक: आवश्यकता अनुसार',
                'डिजिटल बैठक: Digital Dhewadha WhatsApp समूह के माध्यम से',
                'वार्षिक महासभा: साल में एक बार (अगस्त में)'
            ],
            en: [
                'Monthly meeting: First Sunday of every month',
                'Emergency meeting: As needed',
                'Digital meeting: Through Digital Dhewadha WhatsApp group',
                'Annual general meeting: Once a year (in August)'
            ]
        },
        highlight: {
            hi: 'बैठक में निर्णय: सभी निर्णय सामूहिक रूप से लिए जाते हैं और पारदर्शिता बनाए रखी जाती है।',
            en: 'Meeting decisions: All decisions are made collectively and transparency is maintained.'
        },
        icon: Calendar,
        color: 'from-purple-600 to-violet-600'
    },
    {
        id: 9,
        category: 'organization',
        categoryLabel: { hi: 'संगठनात्मक ढांचा', en: 'Organizational Structure' },
        question: {
            hi: 'समिति के सलाहकार मंडल की भूमिका क्या है?',
            en: 'What is the role of the Advisory Board of the Samiti?'
        },
        answer: {
            hi: 'सलाहकार मंडल की प्रमुख भूमिकाएं:',
            en: 'Key roles of the Advisory Board:'
        },
        list: {
            hi: [
                'रणनीतिक मार्गदर्शन और दिशा-निर्देशन',
                'महत्वपूर्ण निर्णयों में परामर्श',
                'बाहरी संस्थाओं और सरकारी विभागों से संपर्क',
                'विवादों का समाधान और मध्यस्थता',
                'समिति की गतिविधियों की निगरानी'
            ],
            en: [
                'Strategic guidance and direction',
                'Consultation in important decisions',
                'Liaison with external organizations and government departments',
                'Dispute resolution and mediation',
                'Monitoring Samiti activities'
            ]
        },
        icon: Shield,
        color: 'from-pink-600 to-rose-600'
    },

    // ==================== SERVICES & ACTIVITIES (5 QUESTIONS) ====================
    {
        id: 10,
        category: 'services',
        categoryLabel: { hi: 'सेवाएं और गतिविधियां', en: 'Services & Activities' },
        question: {
            hi: 'समिति के प्रमुख कार्य कौन-कौन से हैं?',
            en: 'What are the main activities of the Samiti?'
        },
        answer: {
            hi: 'समिति निम्नलिखित प्रमुख कार्य करती है:',
            en: 'The Samiti carries out the following main activities:'
        },
        list: {
            hi: [
                'सड़क मरम्मत और नाली सफाई: बुनियादी ढांचे का रखरखाव',
                'स्वागत द्वार का निर्माण: गांव के प्रवेश द्वार का सौंदर्यीकरण',
                'पुस्तकालय संचालन: शिक्षा केंद्र और पठन सामग्री',
                'जनहित जागरूकता: स्वास्थ्य, शिक्षा, अधिकारों के बारे में',
                'सरकारी योजनाओं की निगरानी: लाभार्थियों तक योजनाओं की पहुंच',
                'स्वास्थ्य शिविर: नियमित चिकित्सा जांच',
                'कौशल विकास: युवाओं के लिए प्रशिक्षण कार्यक्रम'
            ],
            en: [
                'Road repair and drainage cleaning: Infrastructure maintenance',
                'Welcome gate construction: Village entrance beautification',
                'Library operations: Education center and reading materials',
                'Public awareness: About health, education, rights',
                'Government schemes monitoring: Ensuring schemes reach beneficiaries',
                'Health camps: Regular medical check-ups',
                'Skill development: Training programs for youth'
            ]
        },
        icon: CheckCircle,
        color: 'from-orange-600 to-amber-600'
    },
    {
        id: 11,
        category: 'services',
        categoryLabel: { hi: 'सेवाएं और गतिविधियां', en: 'Services & Activities' },
        question: {
            hi: 'पुस्तकालय की सुविधाएं क्या हैं?',
            en: 'What are the library facilities?'
        },
        answer: {
            hi: 'समिति द्वारा संचालित पुस्तकालय में निम्न सुविधाएं उपलब्ध हैं:',
            en: 'The library operated by the Samiti offers the following facilities:'
        },
        list: {
            hi: [
                '500+ पुस्तकें: विभिन्न विषयों पर हिंदी और अंग्रेजी में',
                'समाचार पत्र और पत्रिकाएं: दैनिक और साप्ताहिक',
                'पढ़ने की सुविधा: शांत और आरामदायक वातावरण',
                'कंप्यूटर और इंटरनेट: डिजिटल साक्षरता के लिए',
                'प्रतियोगी परीक्षाओं की तैयारी: मार्गदर्शन और सामग्री',
                'खुलने का समय: सुबह 8 बजे से शाम 6 बजे तक'
            ],
            en: [
                '500+ books: In Hindi and English on various subjects',
                'Newspapers and magazines: Daily and weekly',
                'Reading facility: Quiet and comfortable environment',
                'Computer and internet: For digital literacy',
                'Competitive exam preparation: Guidance and materials',
                'Opening hours: 8 AM to 6 PM'
            ]
        },
        highlight: {
            hi: 'पुस्तकालय सभी ग्रामवासियों के लिए निःशुल्क है।',
            en: 'The library is free for all villagers.'
        },
        icon: FileText,
        color: 'from-blue-600 to-cyan-600'
    },
    {
        id: 12,
        category: 'services',
        categoryLabel: { hi: 'सेवाएं और गतिविधियां', en: 'Services & Activities' },
        question: {
            hi: 'स्वास्थ्य शिविर कब और कैसे आयोजित होते हैं?',
            en: 'When and how are health camps organized?'
        },
        answer: {
            hi: 'स्वास्थ्य शिविर की जानकारी:',
            en: 'Health camp information:'
        },
        list: {
            hi: [
                'आयोजन: हर तीन महीने में एक बार',
                'सुविधाएं: सामान्य जांच, रक्तचाप, रक्त शर्करा परीक्षण',
                'विशेषज्ञ डॉक्टर: सरकारी और निजी चिकित्सकों का सहयोग',
                'निःशुल्क दवाइयां: सामान्य बीमारियों की दवाएं',
                'जागरूकता सत्र: स्वास्थ्य और स्वच्छता पर'
            ],
            en: [
                'Organization: Once every three months',
                'Facilities: General check-up, blood pressure, blood sugar testing',
                'Specialist doctors: Assistance from government and private physicians',
                'Free medicines: For common ailments',
                'Awareness sessions: On health and hygiene'
            ]
        },
        highlight: {
            hi: 'अगले शिविर की जानकारी WhatsApp समूह पर साझा की जाती है।',
            en: 'Information about the next camp is shared on the WhatsApp group.'
        },
        icon: Heart,
        color: 'from-red-600 to-pink-600'
    },
    {
        id: 13,
        category: 'services',
        categoryLabel: { hi: 'सेवाएं और गतिविधियां', en: 'Services & Activities' },
        question: {
            hi: 'युवाओं के लिए क्या कार्यक्रम हैं?',
            en: 'What programs are there for youth?'
        },
        answer: {
            hi: 'युवाओं के लिए विशेष कार्यक्रम:',
            en: 'Special programs for youth:'
        },
        list: {
            hi: [
                'कंप्यूटर प्रशिक्षण: बेसिक से एडवांस लेवल',
                'अंग्रेजी भाषा कक्षाएं: संवाद और लेखन कौशल',
                'करियर काउंसलिंग: शिक्षा और रोजगार मार्गदर्शन',
                'स्किल डेवलपमेंट: विभिन्न व्यावसायिक प्रशिक्षण',
                'खेल प्रतियोगिताएं: क्रिकेट, फुटबॉल, वॉलीबॉल',
                'सांस्कृतिक कार्यक्रम: संगीत, नृत्य, नाटक'
            ],
            en: [
                'Computer training: From basic to advanced level',
                'English language classes: Communication and writing skills',
                'Career counseling: Education and employment guidance',
                'Skill development: Various vocational training',
                'Sports competitions: Cricket, football, volleyball',
                'Cultural programs: Music, dance, drama'
            ]
        },
        icon: Users,
        color: 'from-green-600 to-teal-600'
    },
    {
        id: 14,
        category: 'services',
        categoryLabel: { hi: 'सेवाएं और गतिविधियां', en: 'Services & Activities' },
        question: {
            hi: 'महिलाओं के लिए क्या सुविधाएं हैं?',
            en: 'What facilities are there for women?'
        },
        answer: {
            hi: 'महिला सशक्तिकरण के लिए विशेष पहल:',
            en: 'Special initiatives for women empowerment:'
        },
        list: {
            hi: [
                'स्वयं सहायता समूह: 5 सक्रिय समूह संचालित',
                'सिलाई-कढ़ाई प्रशिक्षण: आत्मनिर्भरता के लिए',
                'वित्तीय साक्षरता: बचत और निवेश की जानकारी',
                'स्वास्थ्य जागरूकता: मातृत्व और बाल स्वास्थ्य पर',
                'कानूनी अधिकार: महिलाओं के अधिकारों की जानकारी',
                'उद्यमिता प्रशिक्षण: छोटे व्यवसाय शुरू करने के लिए'
            ],
            en: [
                'Self-help groups: 5 active groups operating',
                'Sewing and embroidery training: For self-reliance',
                'Financial literacy: Information on savings and investment',
                'Health awareness: On maternity and child health',
                'Legal rights: Information about women\'s rights',
                'Entrepreneurship training: To start small businesses'
            ]
        },
        icon: Sparkles,
        color: 'from-purple-600 to-pink-600'
    },

    // ==================== MEMBERSHIP (4 QUESTIONS) ====================
    {
        id: 15,
        category: 'membership',
        categoryLabel: { hi: 'सदस्यता', en: 'Membership' },
        question: {
            hi: 'समिति में सदस्यता कैसे ली जा सकती है?',
            en: 'How can one become a member of the Samiti?'
        },
        answer: {
            hi: 'समिति की सदस्यता के लिए निम्न प्रक्रिया है:',
            en: 'The process for Samiti membership is as follows:'
        },
        list: {
            hi: [
                'समिति के किसी भी सक्रिय सदस्य से संपर्क करें',
                'नामांकन फॉर्म भरें (नाम, पता, संपर्क जानकारी)',
                'न्यूनतम योगदान राशि जमा करें',
                'समिति की गतिविधियों में भाग लेने की इच्छा व्यक्त करें',
                'Digital Dhewadha WhatsApp समूह में जुड़ें'
            ],
            en: [
                'Contact any active member of the Samiti',
                'Fill the enrollment form (name, address, contact information)',
                'Deposit minimum contribution amount',
                'Express willingness to participate in Samiti activities',
                'Join Digital Dhewadha WhatsApp group'
            ]
        },
        highlight: {
            hi: 'पात्रता: धेवधा गांव का कोई भी वयस्क निवासी या अप्रवासी सदस्य बन सकता है।',
            en: 'Eligibility: Any adult resident or migrant from Dheodha village can become a member.'
        },
        icon: FileText,
        color: 'from-teal-600 to-cyan-600'
    },
    {
        id: 16,
        category: 'membership',
        categoryLabel: { hi: 'सदस्यता', en: 'Membership' },
        question: {
            hi: 'सदस्यता शुल्क कितना है?',
            en: 'What is the membership fee?'
        },
        answer: {
            hi: 'सदस्यता योगदान:',
            en: 'Membership contribution:'
        },
        list: {
            hi: [
                'सामान्य सदस्य: ₹500 (एक बार)',
                'आजीवन सदस्य: ₹5,000 (एक बार)',
                'संरक्षक सदस्य: ₹10,000 या उससे अधिक',
                'वार्षिक योगदान: स्वैच्छिक (न्यूनतम ₹100)'
            ],
            en: [
                'General member: ₹500 (one-time)',
                'Lifetime member: ₹5,000 (one-time)',
                'Patron member: ₹10,000 or more',
                'Annual contribution: Voluntary (minimum ₹100)'
            ]
        },
        highlight: {
            hi: 'आर्थिक रूप से कमजोर वर्ग के लिए रियायत उपलब्ध है।',
            en: 'Concessions are available for economically weaker sections.'
        },
        icon: DollarSign,
        color: 'from-green-600 to-emerald-600'
    },
    {
        id: 17,
        category: 'membership',
        categoryLabel: { hi: 'सदस्यता', en: 'Membership' },
        question: {
            hi: 'सदस्यों के क्या अधिकार और जिम्मेदारियां हैं?',
            en: 'What are the rights and responsibilities of members?'
        },
        answer: {
            hi: 'सदस्यों के अधिकार और जिम्मेदारियां:',
            en: 'Rights and responsibilities of members:'
        },
        list: {
            hi: [
                'अधिकार: समिति की बैठकों में भाग लेना',
                'अधिकार: निर्णय लेने में मतदान का अधिकार',
                'अधिकार: समिति की सभी सुविधाओं का उपयोग',
                'अधिकार: पदाधिकारी चुनाव में खड़े होना',
                'जिम्मेदारी: समिति के नियमों का पालन करना',
                'जिम्मेदारी: गतिविधियों में सक्रिय भागीदारी',
                'जिम्मेदारी: वार्षिक योगदान देना'
            ],
            en: [
                'Right: Participate in Samiti meetings',
                'Right: Voting rights in decision making',
                'Right: Use all facilities of the Samiti',
                'Right: Stand in office bearer elections',
                'Responsibility: Follow Samiti rules',
                'Responsibility: Active participation in activities',
                'Responsibility: Give annual contribution'
            ]
        },
        icon: Shield,
        color: 'from-blue-600 to-indigo-600'
    },
    {
        id: 18,
        category: 'membership',
        categoryLabel: { hi: 'सदस्यता', en: 'Membership' },
        question: {
            hi: 'क्या अप्रवासी भी सदस्य बन सकते हैं?',
            en: 'Can migrants also become members?'
        },
        answer: {
            hi: 'हां, बिल्कुल! अप्रवासी ग्रामवासी न केवल सदस्य बन सकते हैं, बल्कि समिति में उनकी महत्वपूर्ण भूमिका है।',
            en: 'Yes, absolutely! Migrant villagers can not only become members but they have an important role in the Samiti.'
        },
        list: {
            hi: [
                'ऑनलाइन सदस्यता फॉर्म उपलब्ध',
                'डिजिटल भुगतान की सुविधा (UPI, बैंक ट्रांसफर)',
                'WhatsApp और वीडियो कॉल के माध्यम से बैठकों में भागीदारी',
                'वार्षिक महासभा में आमंत्रण',
                'नियमित अपडेट और रिपोर्ट'
            ],
            en: [
                'Online membership form available',
                'Digital payment facility (UPI, bank transfer)',
                'Participation in meetings through WhatsApp and video calls',
                'Invitation to annual general meetings',
                'Regular updates and reports'
            ]
        },
        highlight: {
            hi: 'समिति की स्थापना ही अप्रवासी ग्रामवासियों की पहल से हुई है।',
            en: 'The Samiti was established through the initiative of migrant villagers.'
        },
        icon: Globe,
        color: 'from-purple-600 to-violet-600'
    },

    // ==================== FUNDING & FINANCE (4 QUESTIONS) ====================
    {
        id: 19,
        category: 'funding',
        categoryLabel: { hi: 'फंडिंग और वित्त', en: 'Funding & Finance' },
        question: {
            hi: 'समिति के फंडिंग स्रोत क्या हैं?',
            en: 'What are the funding sources of the Samiti?'
        },
        answer: {
            hi: 'समिति के प्रमुख फंडिंग स्रोत:',
            en: 'Major funding sources of the Samiti:'
        },
        list: {
            hi: [
                'ग्रामवासियों का स्वैच्छिक योगदान: सदस्यता शुल्क और दान',
                'अप्रवासी सदस्यों का सहयोग: नियमित और विशेष योगदान',
                'जनप्रतिनिधियों से सहायता: विधायक/सांसद निधि',
                'सरकारी योजनाओं से अनुदान: विकास कार्यों के लिए',
                'कॉर्पोरेट CSR फंड: कंपनियों की सामाजिक जिम्मेदारी',
                'कार्यक्रमों से आय: सांस्कृतिक और खेल आयोजनों से'
            ],
            en: [
                'Voluntary contribution from villagers: Membership fees and donations',
                'Support from migrant members: Regular and special contributions',
                'Assistance from public representatives: MLA/MP funds',
                'Grants from government schemes: For development works',
                'Corporate CSR funds: Companies\' social responsibility',
                'Income from programs: From cultural and sports events'
            ]
        },
        icon: Heart,
        color: 'from-red-600 to-pink-600'
    },
    {
        id: 20,
        category: 'funding',
        categoryLabel: { hi: 'फंडिंग और वित्त', en: 'Funding & Finance' },
        question: {
            hi: 'अब तक कितनी धनराशि एकत्रित हुई है?',
            en: 'How much funds have been collected so far?'
        },
        answer: {
            hi: 'वित्तीय स्थिति (अक्टूबर 2025 तक):',
            en: 'Financial status (as of October 2025):'
        },
        list: {
            hi: [
                'कुल संग्रहित राशि: ₹3,93,000',
                'खर्च की गई राशि: ₹2,15,000',
                'उपलब्ध राशि: ₹1,78,000',
                'प्रमुख खर्च - सड़क निर्माण: ₹1,20,000',
                'स्वागत द्वार: ₹45,000',
                'पुस्तकालय सेटअप: ₹30,000',
                'स्वास्थ्य शिविर: ₹20,000'
            ],
            en: [
                'Total funds collected: ₹3,93,000',
                'Amount spent: ₹2,15,000',
                'Available amount: ₹1,78,000',
                'Major expense - Road construction: ₹1,20,000',
                'Welcome gate: ₹45,000',
                'Library setup: ₹30,000',
                'Health camp: ₹20,000'
            ]
        },
        icon: DollarSign,
        color: 'from-orange-600 to-amber-600'
    },
    {
        id: 21,
        category: 'funding',
        categoryLabel: { hi: 'फंडिंग और वित्त', en: 'Funding & Finance' },
        question: {
            hi: 'क्या समिति पारदर्शिता बनाए रखती है?',
            en: 'Does the Samiti maintain transparency?'
        },
        answer: {
            hi: 'हां, पूर्ण पारदर्शिता हमारा मूल सिद्धांत है:',
            en: 'Yes, complete transparency is our core principle:'
        },
        list: {
            hi: [
                'सभी निर्णय सार्वजनिक: Digital Dhewadha WhatsApp समूह में चर्चा',
                'वित्तीय रिपोर्ट: मासिक आय-व्यय का विवरण',
                'बैंक स्टेटमेंट: सदस्यों को उपलब्ध',
                'कार्य प्रगति: फोटो और वीडियो के साथ अपडेट',
                'वार्षिक ऑडिट: स्वतंत्र लेखा परीक्षण',
                'वेबसाइट पर जानकारी: dheodhavikassamiti.org'
            ],
            en: [
                'All decisions public: Discussed in Digital Dhewadha WhatsApp group',
                'Financial reports: Monthly income-expense statement',
                'Bank statements: Available to members',
                'Work progress: Updates with photos and videos',
                'Annual audit: Independent accounting review',
                'Information on website: dheodhavikassamiti.org'
            ]
        },
        highlight: {
            hi: 'पारदर्शिता हमारी ताकत है। हर रुपये का हिसाब सदस्यों के सामने है।',
            en: 'Transparency is our strength. Every rupee is accounted for to members.'
        },
        icon: TrendingUp,
        color: 'from-blue-600 to-cyan-600'
    },
    {
        id: 22,
        category: 'funding',
        categoryLabel: { hi: 'फंडिंग और वित्त', en: 'Funding & Finance' },
        question: {
            hi: 'दान कैसे दिया जा सकता है?',
            en: 'How can donations be made?'
        },
        answer: {
            hi: 'दान देने के तरीके:',
            en: 'Ways to donate:'
        },
        
        highlight: {
            hi: 'छोटी से छोटी राशि भी महत्वपूर्ण है। आपका योगदान गांव के विकास में सहायक होगा।',
            en: 'Even the smallest amount is important. Your contribution will help in village development.'
        },
        icon: Heart,
        color: 'from-green-600 to-teal-600'
    },

    // ==================== LEGAL & REGISTRATION (3 QUESTIONS) ====================
    {
        id: 23,
        category: 'legal',
        categoryLabel: { hi: 'कानूनी और पंजीकरण', en: 'Legal & Registration' },
        question: {
            hi: 'क्या समिति पंजीकृत है?',
            en: 'Is the Samiti registered?'
        },
        answer: {
            hi: 'वर्तमान में समिति अपंजीकृत है, लेकिन पंजीकरण की प्रक्रिया चल रही है।',
            en: 'Currently the Samiti is unregistered, but the registration process is underway.'
        },
        list: {
            hi: [
                'समाज पंजीकरण अधिनियम: के तहत पंजीकरण',
                'अनुमानित समय: 6-8 महीने',
                'लाभ: सरकारी योजनाओं का लाभ, कर छूट, कानूनी मान्यता'
            ],
            en: [
                'Society Registration Act: Registration under',
                'Estimated time: 6-8 months',
                'Benefits: Government scheme benefits, tax exemption, legal recognition'
            ]
        },
        highlight: {
            hi: 'पंजीकरण प्रक्रिया के बारे में नियमित जानकारी सदस्यों को दी जाती है।',
            en: 'Regular information about the registration process is provided to members.'
        },
        icon: Shield,
        color: 'from-pink-600 to-rose-600'
    },
    {
        id: 24,
        category: 'legal',
        categoryLabel: { hi: 'कानूनी और पंजीकरण', en: 'Legal & Registration' },
        question: {
            hi: 'समिति के नियम और विनियम क्या हैं?',
            en: 'What are the rules and regulations of the Samiti?'
        },
        answer: {
            hi: 'प्रमुख नियम:',
            en: 'Main rules:'
        },
        list: {
            hi: [
                'समिति गैर-राजनीतिक और धर्मनिरपेक्ष है',
                'सभी निर्णय बहुमत से लिए जाएंगे',
                'वित्तीय पारदर्शिता अनिवार्य है',
                'सदस्यों का व्यवहार सम्मानजनक होना चाहिए',
                'भ्रष्टाचार और भाई-भतीजावाद के खिलाफ शून्य सहनशीलता',
                'महिलाओं और युवाओं की भागीदारी अनिवार्य'
            ],
            en: [
                'Samiti is non-political and secular',
                'All decisions will be made by majority',
                'Financial transparency is mandatory',
                'Members\' behavior should be respectful',
                'Zero tolerance against corruption and nepotism',
                'Participation of women and youth is mandatory'
            ]
        },
        highlight: {
            hi: 'संपूर्ण नियमावली वेबसाइट पर उपलब्ध है।',
            en: 'Complete rule book is available on the website.'
        },
        icon: FileText,
        color: 'from-indigo-600 to-purple-600'
    },
    {
        id: 25,
        category: 'legal',
        categoryLabel: { hi: 'कानूनी और पंजीकरण', en: 'Legal & Registration' },
        question: {
            hi: 'क्या समिति किसी राजनीतिक दल से जुड़ी है?',
            en: 'Is the Samiti affiliated with any political party?'
        },
        answer: {
            hi: 'बिल्कुल नहीं! समिति पूरी तरह से गैर-राजनीतिक है और केवल जनहित में कार्य करती है।',
            en: 'Absolutely not! The Samiti is completely non-political and works only in public interest.'
        },
        list: {
            hi: [
                'किसी भी राजनीतिक दल से कोई संबंध नहीं',
                'धर्म, जाति, लिंग के आधार पर कोई भेदभाव नहीं',
                'सभी विचारधाराओं के लोगों का स्वागत',
                'केवल गांव के विकास पर फोकस'
            ],
            en: [
                'No connection with any political party',
                'No discrimination based on religion, caste, gender',
                'Welcome to people of all ideologies',
                'Focus only on village development'
            ]
        },
        highlight: {
            hi: 'हमारा मंत्र: "राजनीति नहीं, विकास हमारी प्राथमिकता है।"',
            en: 'Our motto: "Not politics, development is our priority."'
        },
        icon: Info,
        color: 'from-blue-600 to-teal-600'
    },

    // ==================== CONTACT & COMMUNICATION (2 QUESTIONS) ====================
    {
        id: 26,
        category: 'contact',
        categoryLabel: { hi: 'संपर्क और संचार', en: 'Contact & Communication' },
        question: {
            hi: 'समिति से संपर्क कैसे करें?',
            en: 'How to contact the Samiti?'
        },
        answer: {
            hi: 'हमसे जुड़ने के विभिन्न तरीके:',
            en: 'Various ways to connect with us:'
        },
        list: {
            hi: [
                'वेबसाइट: dheodhavikassamiti.org',
                'ईमेल: contact@dheodhavikassamiti.org',
                'WhatsApp समूह: Digital Dhewadha (लिंक वेबसाइट पर)',
                'फोन: +91 98765 43210 (अध्यक्ष)',
                'कार्यालय: पुस्तकालय भवन, धेवधा गांव',
                'सोशल मीडिया: Facebook, Instagram, Twitter'
            ],
            en: [
                'Website: dheodhavikassamiti.org',
                'Email: contact@dheodhavikassamiti.org',
                'WhatsApp group: Digital Dhewadha (link on website)',
                'Phone: +91 98765 43210 (President)',
                'Office: Library building, Dheodha village',
                'Social media: Facebook, Instagram, Twitter'
            ]
        },
        highlight: {
            hi: 'कार्यालय समय: सोमवार से शनिवार, सुबह 10 बजे से शाम 5 बजे तक',
            en: 'Office hours: Monday to Saturday, 10 AM to 5 PM'
        },
        icon: MessageCircle,
        color: 'from-green-600 to-teal-600'
    },
    {
        id: 27,
        category: 'contact',
        categoryLabel: { hi: 'संपर्क और संचार', en: 'Contact & Communication' },
        question: {
            hi: 'शिकायत या सुझाव कैसे दें?',
            en: 'How to give complaints or suggestions?'
        },
        answer: {
            hi: 'आपकी शिकायतें और सुझाव हमारे लिए महत्वपूर्ण हैं:',
            en: 'Your complaints and suggestions are important to us:'
        },
      
        highlight: {
            hi: 'प्रतिक्रिया समय: 48 घंटे के भीतर जवाब दिया जाएगा। गोपनीयता: आपकी शिकायत को पूर्ण गोपनीयता के साथ निपटाया जाएगा।',
            en: 'Response time: Reply will be given within 48 hours. Privacy: Your complaint will be handled with complete confidentiality.'
        },
        icon: Mail,
        color: 'from-purple-600 to-pink-600'
    }
];

// Category definitions for filtering
export const faqCategories = [
    { id: 'about', label: { hi: 'हमारे बारे में', en: 'About Us' }, icon: 'Building2', color: 'from-blue-600 to-indigo-600' },
    { id: 'organization', label: { hi: 'संगठनात्मक ढांचा', en: 'Organizational Structure' }, icon: 'Users', color: 'from-green-600 to-emerald-600' },
    { id: 'services', label: { hi: 'सेवाएं और गतिविधियां', en: 'Services & Activities' }, icon: 'CheckCircle', color: 'from-purple-600 to-violet-600' },
    { id: 'membership', label: { hi: 'सदस्यता', en: 'Membership' }, icon: 'FileText', color: 'from-pink-600 to-rose-600' },
    { id: 'funding', label: { hi: 'फंडिंग और वित्त', en: 'Funding & Finance' }, icon: 'DollarSign', color: 'from-orange-600 to-amber-600' },
    { id: 'legal', label: { hi: 'कानूनी और पंजीकरण', en: 'Legal & Registration' }, icon: 'Shield', color: 'from-teal-600 to-cyan-600' },
    { id: 'contact', label: { hi: 'संपर्क और संचार', en: 'Contact & Communication' }, icon: 'MessageCircle', color: 'from-indigo-600 to-purple-600' }
];
