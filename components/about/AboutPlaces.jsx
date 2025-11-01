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
            name: language === 'hi' ? 'कृषक महाविद्यालय, पकड़ी बारवां' : 'Agriculture College, Pakri Barawan',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761913595/Colleage5_ut0pxi.jpg',
            link: '/places/agriculture-college'
        },
        {
            name: language === 'hi' ? 'श्री राम जानकी ठाकुरवाड़ी' : 'Shri Ram Janaki Thakurwadi',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761913592/Thakurwadi1_qpgfnq.jpg',
            link: '/places/ram-janaki-temple'
        },
        {
            name: language === 'hi' ? 'धर्मशाला' : 'Dharamshala',
            image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&q=80',
            link: '/places/dharamshala'
        },
        {
            name: language === 'hi' ? 'दुर्गा स्थान' : 'Durga Sthan',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761913597/DP_2015_1_npc6vw.jpg',
            link: '/places/durga-sthan'
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
            name: language === 'hi' ? 'मध्य विद्यालय, धेवधा' : 'Middle School, Dheodha',
            image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&q=80',
            link: '/places/middle-school'
        },
        {
            name: language === 'hi' ? 'उत्कर्मित हाई विद्यालय (10+2)' : 'Upgraded High School (10+2)',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761913599/Highschool_tyycra.jpg',
            link: '/places/high-school'
        },
        {
            name: language === 'hi' ? 'प्राथमिक विद्यालय' : 'Primary School',
            image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=80',
            link: '/places/primary-school'
        },
        {
            name: language === 'hi' ? 'आंगनवाड़ी केंद्र' : 'Anganwadi Center',
            image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&q=80',
            link: '/places/anganwadi'
        },
        {
            name: language === 'hi' ? 'सामुदायिक स्वास्थ्य केंद्र' : 'Community Health Center',
            image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&q=80',
            link: '/places/health-center'
        },
        {
            name: language === 'hi' ? 'पंचायत भवन' : 'Panchayat Bhawan',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80',
            link: '/places/panchayat-bhawan'
        },
        {
            name: language === 'hi' ? 'डाकघर' : 'Post Office',
            image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&q=80',
            link: '/places/post-office'
        },
        {
            name: language === 'hi' ? 'बैंक शाखा' : 'Bank Branch',
            image: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=400&q=80',
            link: '/places/bank-branch'
        },
        {
            name: language === 'hi' ? 'ग्राम पुस्तकालय' : 'Village Library',
            image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&q=80',
            link: '/places/village-library'
        },
        {
            name: language === 'hi' ? 'खेल मैदान' : 'Sports Ground',
            image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&q=80',
            link: '/places/sports-ground'
        },
        {
            name: language === 'hi' ? 'सामुदायिक हॉल' : 'Community Hall',
            image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&q=80',
            link: '/places/community-hall'
        },
        {
            name: language === 'hi' ? 'हनुमान मंदिर' : 'Hanuman Mandir',
            image: 'https://images.unsplash.com/photo-1582632909121-4971e332f0ff?w=400&q=80',
            link: '/places/hanuman-mandir'
        },
        {
            name: language === 'hi' ? 'शिव मंदिर' : 'Shiv Mandir',
            image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&q=80',
            link: '/places/shiv-mandir'
        },
        {
            name: language === 'hi' ? 'गांधी चौक' : 'Gandhi Chowk',
            image: 'https://images.unsplash.com/photo-1533586662937-4c2d2676bcd7?w=400&q=80',
            link: '/places/gandhi-chowk'
        },
        {
            name: language === 'hi' ? 'सामुदायिक तालाब' : 'Community Pond',
            image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&q=80',
            link: '/places/community-pond'
        },
        {
            name: language === 'hi' ? 'कृषि बाजार' : 'Agriculture Market',
            image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=400&q=80',
            link: '/places/agriculture-market'
        },
        {
            name: language === 'hi' ? 'मुख्य द्वार (स्वागत द्वार)' : 'Main Gate (Welcome Gate)',
            image: 'https://images.unsplash.com/photo-1587582423116-ec07293f0395?w=400&q=80',
            link: '/places/main-gate'
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
