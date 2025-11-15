// components/about/AboutPlaces.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '../../lib/LanguageContext';

const AboutPlaces = () => {
    const { language } = useLanguage();

    const importantPlaces = [
        {
            name: language === 'hi' ? 'कृषक कॉलेज, धेवधा' : 'Krishak College, Dheodha',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761913595/Colleage5_ut0pxi.jpg',
            link: '/places/agriculture-college'
        },
        {
            name: language === 'hi' ? 'श्री राम जानकी ठाकुरवाड़ी' : 'Shri Ram Janaki Thakurwadi',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761913592/Thakurwadi1_qpgfnq.jpg',
            link: '/places/ram-janaki-thakurwadi'
        },
        {
            name: language === 'hi' ? 'धर्मशाला' : 'Dharamshala',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1762977579/IMG_3520_1_imhgx3.jpg',
            link: '/places/dharamshala'
        },
        {
            name: language === 'hi' ? 'नयका बाबाजी' : 'Nayka Babaji',
            image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=400&q=80',
            link: '/places/nayka-babaji'
        },
        {
            name: language === 'hi' ? 'पंचायत भवन सह पुस्तकालय' : 'Panchayat Bhawan-cum-Library',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761943481/545839216_1184272130402920_2963934031699955061_n_qt9tlk.jpg',
            link: '/places/panchayat-library'
        },
        {
            name: language === 'hi' ? 'संगत स्थल' : 'Sangat Sthal',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80',
            link: '/places/sangat-sthal'
        },
        {
            name: language === 'hi' ? 'दुर्गा स्थान' : 'Durga Sthan',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761913597/DP_2015_1_npc6vw.jpg',
            link: '/places/durga-sthan'
        },
        {
            name: language === 'hi' ? 'दरगाह' : 'Dargah',
            image: 'https://media.telanganatoday.com/wp-content/uploads/2023/05/Dargah.jpg',
            link: '/places/dargah'
        },
        {
            name: language === 'hi' ? 'इमामगढ़ा' : 'Imamgadha',
            image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&q=80',
            link: '/places/imamgadha'
        },
        {
            name: language === 'hi' ? 'देवस्थान, शियूरिया महारानी' : 'Devsthan Shiyuria Maharani',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761913594/DeviSthan2_uo34qi.jpg',
            link: '/places/devsthan-shiyuria'
        },
        {
            name: language === 'hi' ? 'महारानी स्थान' : 'Maharani Sthan',
            image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=400&q=80',
            link: '/places/maharani-sthan'
        },
        {
            name: language === 'hi' ? 'बैंक ऑफ बड़ौदा' : 'Bank of Baroda',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1763195455/156703-untitled-design-2023-10-11t152935012_bh4c0c.avif',
            link: '/places/bank-of-baroda'
        },
        {
            name: language === 'hi' ? 'पोस्ट ऑफ़िस' : 'Post Office',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1763195248/post-office-nandapur-koraput-government-organisations-mbttc7uv57_q38v2k.avif',
            link: '/places/post-office'
        },
        {
            name: language === 'hi' ? 'मध्य विद्यालय' : 'Middle School',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761943439/83870336_3305898712760571_5537012631879024640_n_uitcqu.jpg',
            link: '/places/middle-school'
        },
        {
            name: language === 'hi' ? 'जय बाबा डिहवाल' : 'Jai Baba Dhiwal',
            image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=400&q=80',
            link: '/places/jai-baba-dhiwal'
        },
        {
            name: language === 'hi' ? 'उत्कर्मित हाई विद्यालय (10+2)' : 'Upgraded High School (10+2)',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761913599/Highschool_tyycra.jpg',
            link: '/places/high-school'
        },
        {
            name: language === 'hi' ? 'शिवालय' : 'Shivalaya',
            image: 'https://kutri.in/wp-content/uploads/2024/08/Kutri-village-37-1-768x1024.jpeg',
            link: '/places/shivalaya'
        },
        {
            name: language === 'hi' ? 'पोखर' : 'Pond (Pokhar)',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761913597/Image2_z836i5.jpg',
            link: '/places/pokhar'
        },
        {
            name: language === 'hi' ? 'सिद्धमणि थान' : 'Siddhamani Than',
            image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=400&q=80',
            link: '/places/siddhamani-than'
        },
        {
            name: language === 'hi' ? 'ब्रह्मपिचास स्थान' : 'Brahmapichash Sthan',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761913592/BrahPichas1_nyjbm5.jpg',
            link: '/places/brahmapichash-sthan'
        },
        {
            name: language === 'hi' ? 'निंगुरिया स्थान' : 'Ninguriya Sthan',
            image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=400&q=80',
            link: '/places/ninguriya-sthan'
        },
        {
            name: language === 'hi' ? 'अहरा' : 'Ahara',
            image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&q=80',
            link: '/places/ahara'
        }
    ];


    return (
        <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                <div className="absolute -top-6 -right-6 bg-gradient-to-br from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-2xl font-black text-xl shadow-2xl rotate-12 hover:rotate-0 transition-transform">
                    {language === 'hi' ? '20+ स्थान' : '20+ Places'}
                </div>

                <h3 className="text-2xl font-black text-white mb-2">
                    {language === 'hi' ? 'महत्वपूर्ण स्थान' : 'Important Places'}
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                    {language === 'hi' ? 'धेवधा के महत्वपूर्ण स्थान' : 'Important Places of Dheodha'}
                </p>

                {/* Places Grid - Scrollable */}
                <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                    {importantPlaces.map((place, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 + idx * 0.05 }}
                        >
                            <Link
                                href={place.link}
                                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all cursor-pointer block"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>

                                <div className="relative flex items-center space-x-4 p-3">
                                    <div className="relative w-16 h-16 rounded-xl overflow-hidden ring-2 ring-white/20 group-hover:ring-4 transition-all flex-shrink-0">
                                        <img
                                            src={place.image}
                                            alt={place.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 to-emerald-600/30"></div>
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-white font-bold text-base truncate">{place.name}</h4>
                                    </div>

                                    <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-2 transition-all flex-shrink-0" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <Link
                    href="/places"
                    className="mt-6 flex items-center justify-center space-x-2 text-green-400 hover:text-green-300 font-bold transition-colors group"
                >
                    <span>{language === 'hi' ? 'सभी स्थान देखें' : 'View All Places'}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(16, 185, 129, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(16, 185, 129, 0.7);
        }
      `}</style>
        </div>
    );
};

export default AboutPlaces;
