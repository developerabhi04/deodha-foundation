// lib/placeData.js
export const placesData = {
    'agriculture-college': {
        name: 'कृषक महाविद्यालय',
        englishName: 'Agriculture College',
        heroImage: 'https://res.cloudinary.com/dusalynec/image/upload/v1761913595/Colleage5_ut0pxi.jpg',
        location: 'धेवधा गांव, पकड़ी बरवां, नवादा, बिहार',
        description: {
            main: 'कृषक महाविद्यालय धेवधा गांव का एक प्रमुख शैक्षणिक संस्थान है।',
            history: 'महाविद्यालय की स्थापना 2010 में हुई थी।',
            importance: 'यह संस्थान क्षेत्र के युवाओं को कृषि क्षेत्र में रोजगार के अवसर प्रदान करता है।'
        },
        galleryImages: [
            { url: 'https://res.cloudinary.com/dusalynec/image/upload/v1761913595/Colleage5_ut0pxi.jpg', caption: 'महाविद्यालय का मुख्य भवन' },
            { url: 'https://res.cloudinary.com/dusalynec/image/upload/v1761913594/Colleage1_s9vrz2.jpg', caption: 'कक्षा कक्ष' },
            { url: 'https://res.cloudinary.com/dusalynec/image/upload/v1761913593/ChathPuja1_x0hxeq.jpg', caption: 'प्रायोगिक खेत' },
            { url: 'https://res.cloudinary.com/dusalynec/image/upload/v1761943446/171335986_4644094375607658_2622171716120371887_n_rdtqpj.jpg', caption: 'प्रशिक्षण सत्र' }
        ],
        features: [
            { icon: 'Clock', title: 'समय', desc: 'सोमवार से शनिवार, सुबह 9:00 से शाम 5:00' },
            { icon: 'Calendar', title: 'कोर्स अवधि', desc: '6 महीने से 2 वर्ष' },
            { icon: 'Users', title: 'छात्र संख्या', desc: '200+ वर्तमान छात्र' },
            { icon: 'Star', title: 'मान्यता', desc: 'बिहार सरकार द्वारा मान्यता प्राप्त' }
        ],
        programs: [
            { name: 'डिप्लोमा इन एग्रीकल्चर', duration: '2 वर्ष', desc: 'आधुनिक कृषि तकनीक' },
            { name: 'जैविक खेती प्रमाण पत्र', duration: '6 महीने', desc: 'रासायनिक मुक्त खेती' },
            { name: 'कृषि यंत्र संचालन', duration: '3 महीने', desc: 'ट्रैक्टर संचालन' },
            { name: 'बागवानी प्रशिक्षण', duration: '4 महीने', desc: 'फल और सब्जी की खेती' }
        ],
        facilities: [
            'आधुनिक कक्षा कक्ष',
            'प्रायोगिक खेत',
            'पुस्तकालय',
            'कंप्यूटर लैब',
            'छात्रावास सुविधा',
            'निःशुल्क प्रशिक्षण सामग्री'
        ]
    },

    'ram-janaki-temple': {
        name: 'श्री राम जानकी ठाकुरवाड़ी',
        englishName: 'Ram Janaki Temple',
        heroImage: 'https://res.cloudinary.com/dusalynec/image/upload/v1761913592/Thakurwadi1_qpgfnq.jpg',
        location: 'धेवधा गांव, पकड़ी बरवां, नवादा, बिहार',
        description: {
            main: 'श्री राम जानकी ठाकुरवाड़ी धेवधा गांव का सबसे प्राचीन और पवित्र मंदिर है।',
            history: 'इस मंदिर का निर्माण लगभग 200 वर्ष पहले हुआ था।',
            importance: 'यह मंदिर आस्था का केंद्र है।'
        },
        galleryImages: [
            { url: 'https://res.cloudinary.com/dusalynec/image/upload/v1761913592/Thakurwadi1_qpgfnq.jpg', caption: 'मंदिर का मुख्य द्वार' },
            { url: 'https://images.unsplash.com/photo-1549213783-8284d0336c4f?w=800&q=80', caption: 'गर्भगृह' },
            { url: 'https://images.unsplash.com/photo-1604608672516-ab1228e49550?w=800&q=80', caption: 'मंदिर परिसर' },
            { url: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80', caption: 'संध्या आरती' }
        ],
        features: [
            { icon: 'Clock', title: 'दर्शन समय', desc: 'प्रातः 5:00 से रात्रि 10:00' },
            { icon: 'Calendar', title: 'विशेष दिन', desc: 'राम नवमी, दीपावली' },
            { icon: 'Users', title: 'दैनिक दर्शनार्थी', desc: '1000+ श्रद्धालु' },
            { icon: 'Star', title: 'प्राचीनता', desc: '200+ वर्ष पुराना' }
        ],
        programs: [
            { name: 'राम नवमी महोत्सव', duration: 'चैत्र मास', desc: 'भगवान राम के जन्मोत्सव का भव्य आयोजन' },
            { name: 'संध्या आरती', duration: 'प्रतिदिन', desc: 'शाम 7:00 बजे विशेष आरती' },
            { name: 'रामायण पाठ', duration: 'मासिक', desc: 'पूर्णिमा के दिन रामायण का पाठ' },
            { name: 'भंडारा', duration: 'त्यौहारों पर', desc: 'श्रद्धालुओं के लिए प्रसाद वितरण' }
        ],
        facilities: [
            'निःशुल्क प्रसाद',
            'पीने का शुद्ध जल',
            'साफ शौचालय',
            'जूता स्टैंड',
            'पार्किंग स्थल',
            'व्हीलचेयर सुविधा'
        ]
    },

    'durga-sthan': {
        name: 'दुर्गा स्थान',
        englishName: 'Durga Sthan',
        heroImage: 'https://res.cloudinary.com/dusalynec/image/upload/v1761913597/DP_2015_1_npc6vw.jpg',
        location: 'धेवधा गांव, पकड़ी बरवां, नवादा, बिहार',
        description: {
            main: 'दुर्गा स्थान धेवधा गांव का प्रसिद्ध शक्तिपीठ है।',
            history: 'दुर्गा स्थान की स्थापना लगभग 150 वर्ष पहले हुई थी।',
            importance: 'नवरात्रि के दौरान यहां भव्य पूजा-अर्चना होती है।'
        },
        galleryImages: [
            { url: 'https://res.cloudinary.com/dusalynec/image/upload/v1761913597/DP_2015_1_npc6vw.jpg', caption: 'माँ दुर्गा की प्रतिमा' },
            { url: 'https://images.unsplash.com/photo-1604608672516-ab1228e49550?w=800&q=80', caption: 'मंदिर परिसर' },
            { url: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80', caption: 'नवरात्रि उत्सव' },
            { url: 'https://images.unsplash.com/photo-1582632428916-bd77ece4d3ab?w=800&q=80', caption: 'आरती दृश्य' }
        ],
        features: [
            { icon: 'Clock', title: 'दर्शन समय', desc: 'प्रातः 6:00 से रात्रि 9:00' },
            { icon: 'Calendar', title: 'विशेष दिन', desc: 'नवरात्रि, मंगलवार, शुक्रवार' },
            { icon: 'Users', title: 'श्रद्धालु', desc: '800+ दैनिक दर्शनार्थी' },
            { icon: 'Star', title: 'विशेषता', desc: 'चमत्कारी माँ का स्थान' }
        ],
        programs: [
            { name: 'नवरात्रि महोत्सव', duration: '9 दिन', desc: 'माँ दुर्गा के नौ रूपों की पूजा' },
            { name: 'मंगलवार पूजा', duration: 'साप्ताहिक', desc: 'विशेष पूजा' },
            { name: 'दुर्गा सप्तशती पाठ', duration: 'मासिक', desc: 'पूर्णिमा को विशेष पाठ' },
            { name: 'कन्या भोज', duration: 'नवरात्रि', desc: 'कन्याओं का सम्मान और भोज' }
        ],
        facilities: [
            'प्रसाद वितरण',
            'पीने का पानी',
            'शौचालय',
            'पार्किंग',
            'बैठने की व्यवस्था',
            'ध्वनि प्रणाली'
        ]
    },

    'devsthan-shiyuria': {
        name: 'देवस्थान, शियूरिया महारानी',
        englishName: 'Devsthan Shiyuria Maharani',
        heroImage: 'https://res.cloudinary.com/dusalynec/image/upload/v1761913594/DeviSthan2_uo34qi.jpg',
        location: 'धेवधा गांव, पकड़ी बरवां, नवादा, बिहार',
        description: {
            main: 'शियूरिया महारानी का देवस्थान एक पवित्र शक्तिपीठ है।',
            history: 'इस देवस्थान का इतिहास बहुत प्राचीन है।',
            importance: 'यह स्थान मनोकामना पूर्ति के लिए प्रसिद्ध है।'
        },
        galleryImages: [
            { url: 'https://res.cloudinary.com/dusalynec/image/upload/v1761913594/DeviSthan2_uo34qi.jpg', caption: 'देवस्थान मुख्य भवन' },
            { url: 'https://res.cloudinary.com/dusalynec/image/upload/v1761943439/107812243_3790381330978971_788955600235734830_n_sjjcgn.jpg', caption: 'पूजा स्थल' },
            { url: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80', caption: 'उत्सव का दृश्य' },
            { url: 'https://images.unsplash.com/photo-1604608672516-ab1228e49550?w=800&q=80', caption: 'श्रद्धालु समूह' }
        ],
        features: [
            { icon: 'Clock', title: 'दर्शन समय', desc: 'प्रातः 5:00 से रात्रि 9:00' },
            { icon: 'Calendar', title: 'विशेष दिन', desc: 'चैत्र और आश्विन नवरात्रि' },
            { icon: 'Users', title: 'भक्त', desc: '600+ दैनिक दर्शनार्थी' },
            { icon: 'Star', title: 'विशेषता', desc: 'मनोकामना पूर्ति' }
        ],
        programs: [
            { name: 'चैत्र नवरात्रि', duration: 'चैत्र मास', desc: 'वसंत नवरात्रि का विशेष आयोजन' },
            { name: 'आश्विन नवरात्रि', duration: 'आश्विन मास', desc: 'शरद नवरात्रि महोत्सव' },
            { name: 'मनौती पूजा', duration: 'प्रतिदिन', desc: 'विशेष मनौती पूर्ति' },
            { name: 'भंडारा', duration: 'त्यौहार', desc: 'श्रद्धालुओं के लिए भोजन' }
        ],
        facilities: [
            'मनौती स्थल',
            'प्रसाद काउंटर',
            'जल व्यवस्था',
            'शौचालय',
            'छाया स्थल',
            'पार्किंग'
        ]
    },

    'high-school': {
        name: 'उत्कर्मित हाई विद्यालय',
        englishName: 'High School (10+2)',
        heroImage: 'https://res.cloudinary.com/dusalynec/image/upload/v1761913599/Highschool_tyycra.jpg',
        location: 'धेवधा गांव, पकड़ी बरवां, नवादा, बिहार',
        description: {
            main: 'उत्कर्मित हाई विद्यालय धेवधा गांव का प्रमुख शैक्षणिक संस्थान है।',
            history: 'विद्यालय की स्थापना 1985 में हुई थी।',
            importance: 'यह संस्थान गुणवत्तापूर्ण शिक्षा प्रदान करता है।'
        },
        galleryImages: [
            { url: 'https://res.cloudinary.com/dusalynec/image/upload/v1761913599/Highschool_tyycra.jpg', caption: 'विद्यालय भवन' },
            { url: 'https://res.cloudinary.com/dusalynec/image/upload/v1761943491/564625741_1220718416758291_2852318103725747144_n_d49x2c.jpg', caption: 'कक्षा कक्ष' },
            { url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80', caption: 'पुस्तकालय' },
            { url: 'https://res.cloudinary.com/dusalynec/image/upload/v1761943445/142890930_4412241408792957_2414951548440627212_n_bcbpsh.jpg', caption: 'खेल का मैदान' },
            { url: 'https://res.cloudinary.com/dusalynec/image/upload/v1761943445/142890930_4412241408792957_2414951548440627212_n_bcbpsh.jpg', caption: 'खेल का मैदान' },
        ],
        features: [
            { icon: 'Clock', title: 'समय', desc: 'सुबह 7:30 से दोपहर 1:30' },
            { icon: 'Calendar', title: 'सत्र', desc: 'अप्रैल से मार्च' },
            { icon: 'Users', title: 'छात्र संख्या', desc: '800+ छात्र' },
            { icon: 'Star', title: 'परीक्षा परिणाम', desc: '85% पास प्रतिशत' }
        ],
        programs: [
            { name: 'विज्ञान स्ट्रीम', duration: 'कक्षा 11-12', desc: 'भौतिकी, रसायन, गणित' },
            { name: 'कला स्ट्रीम', duration: 'कक्षा 11-12', desc: 'इतिहास, भूगोल, राजनीति विज्ञान' },
            { name: 'वाणिज्य स्ट्रीम', duration: 'कक्षा 11-12', desc: 'लेखा, व्यवसाय अध्ययन' },
            { name: 'खेल गतिविधियां', duration: 'वार्षिक', desc: 'क्रिकेट, फुटबॉल, वॉलीबॉल' }
        ],
        facilities: [
            'विज्ञान प्रयोगशाला',
            'कंप्यूटर लैब',
            'पुस्तकालय',
            'खेल का मैदान',
            'शुद्ध पेयजल',
            'साफ शौचालय'
        ]
    },

    'brahmapichas-sthan': {
        name: 'ब्रह्मपिचास स्थान',
        englishName: 'Brahmapichas Sthan',
        heroImage: 'https://res.cloudinary.com/dusalynec/image/upload/v1761913593/BrahmPichas2_faqb4s.jpg',
        location: 'धेवधा गांव, पकड़ी बरवां, नवादा, बिहार',
        description: {
            main: 'ब्रह्मपिचास स्थान एक अनोखा धार्मिक स्थल है।',
            history: 'इस स्थान का इतिहास सैकड़ों वर्ष पुराना है।',
            importance: 'यह स्थान पितृ दोष निवारण के लिए प्रसिद्ध है।'
        },
        galleryImages: [
            { url: 'https://res.cloudinary.com/dusalynec/image/upload/v1761913593/BrahmPichas2_faqb4s.jpg', caption: 'ब्रह्मपिचास स्थान' },
            { url: 'https://images.unsplash.com/photo-1580794852630-981488483d3f?w=800&q=80', caption: 'पूजा स्थल' },
            { url: 'https://images.unsplash.com/photo-1588153191435-c890d9adbb99?w=800&q=80', caption: 'धूप-दीप' },
            { url: 'https://images.unsplash.com/photo-1582632428916-bd77ece4d3ab?w=800&q=80', caption: 'श्रद्धालु समूह' }
        ],
        features: [
            { icon: 'Clock', title: 'पूजा समय', desc: 'शाम 6:00 से रात 9:00' },
            { icon: 'Calendar', title: 'विशेष दिन', desc: 'अमावस्या और पूर्णिमा' },
            { icon: 'Users', title: 'आगंतुक', desc: '300+ साप्ताहिक' },
            { icon: 'Star', title: 'विशेषता', desc: 'पितृ दोष निवारण' }
        ],
        programs: [
            { name: 'पितृ दोष निवारण', duration: 'अमावस्या', desc: 'विशेष पितृ तर्पण और पूजा' },
            { name: 'श्राद्ध कर्म', duration: 'पितृ पक्ष', desc: 'पितरों की आत्मा शांति' },
            { name: 'हवन', duration: 'पूर्णिमा', desc: 'नकारात्मक शक्तियों से मुक्ति' },
            { name: 'जागरण', duration: 'विशेष अवसर', desc: 'रात्रि जागरण और भजन' }
        ],
        facilities: [
            'पूजा सामग्री उपलब्ध',
            'पंडित सेवा',
            'प्रसाद वितरण',
            'बैठने की व्यवस्था',
            'पीने का पानी',
            'पार्किंग स्थल'
        ]
    },

    'ninguriya-sthan': {
        name: 'निंगुरिया स्थान',
        englishName: 'Ninguriya Sthan',
        heroImage: 'https://images.unsplash.com/photo-1582632428916-bd77ece4d3ab?w=1200&q=80',
        location: 'धेवधा गांव, पकड़ी बरवां, नवादा, बिहार',
        description: {
            main: 'निंगुरिया स्थान धेवधा गांव का एक प्रमुख धार्मिक स्थल है।',
            history: 'निंगुरिया स्थान का इतिहास 300 वर्ष पुराना माना जाता है।',
            importance: 'यह स्थान भगवान शिव को समर्पित है।'
        },
        galleryImages: [
            { url: 'https://images.unsplash.com/photo-1582632428916-bd77ece4d3ab?w=800&q=80', caption: 'निंगुरिया स्थान का मुख्य द्वार' },
            { url: 'https://images.unsplash.com/photo-1604608672516-ab1228e49550?w=800&q=80', caption: 'पूजा स्थल' },
            { url: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80', caption: 'मंदिर परिसर' },
            { url: 'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=800&q=80', caption: 'सांध्य आरती' }
        ],
        features: [
            { icon: 'Clock', title: 'खुलने का समय', desc: 'प्रातः 6:00 बजे से रात्रि 9:00 बजे तक' },
            { icon: 'Calendar', title: 'विशेष दिन', desc: 'मंगलवार और शनिवार' },
            { icon: 'Users', title: 'दर्शनार्थी', desc: '500+ दैनिक आगंतुक' },
            { icon: 'Star', title: 'रेटिंग', desc: '4.8/5 (200+ समीक्षाएं)' }
        ],
        programs: [
            { name: 'महाशिवरात्रि', duration: 'फरवरी-मार्च', desc: 'भगवान शिव का मुख्य त्योहार' },
            { name: 'श्रावण मास', duration: 'जुलाई-अगस्त', desc: 'प्रतिदिन विशेष पूजा' },
            { name: 'दीपावली', duration: 'अक्टूबर-नवंबर', desc: 'दीपों का उत्सव' },
            { name: 'नवरात्रि', duration: 'सितंबर-अक्टूबर', desc: 'नौ दिनों का उत्सव' }
        ],
        facilities: [
            'निःशुल्क पार्किंग सुविधा',
            'पीने का शुद्ध जल',
            'साफ शौचालय',
            'प्रसाद वितरण',
            'पुस्तक वितरण केंद्र',
            'बैठने की व्यवस्था'
        ]
    }
};
