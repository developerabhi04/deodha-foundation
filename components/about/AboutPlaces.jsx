// components/about/AboutPlaces.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '../../lib/LanguageContext';

const AboutPlaces = () => {
    const { language } = useLanguage();

    const importantPlaces = [
        // {
        //     name: language === 'hi' ? 'इमामगढ़' : 'Imamgadha',
        //     image: '',
        //     link: '/places/imamgadha'
        // },
        {
            name: language === 'hi' ? 'धाजा अंगना (शियूरिया महारानी)' : 'Dhaja Angana (Shiyuria Maharani)',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1763067508/IMG_3556_rgwkg2.jpg',
            link: '/places/devsthan-shiyuria'
        },
        {
            name: language === 'hi' ? 'महारानी स्थान' : 'Maharani Sthan',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761913594/DeviSthan2_uo34qi.jpg',
            link: '/places/maharani-sthan'
        },
        {
            name: language === 'hi' ? 'महादेव स्थान ' : 'Mahadev Sthan',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1766518018/IMG_20251209_124454539_atdgkh.jpg',
            link: '/places/mahadev-sthan'
        },
        {
            name: language === 'hi' ? 'पोखर' : 'Pond (Pokhar)',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761913597/Image2_z836i5.jpg',
            link: '/places/pokhar'
        },
        {
            name: language === 'hi' ? 'सिंह वाहिनी स्थान' : 'Singh vaahinee sthaan',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsf-U51kZPHHe74waJhVZiBlF0LfSa8SdjpQ&s',
            link: '/places/siddhamani-than'
        },
        {
            name: language === 'hi' ? 'ब्रह्मपिचास स्थान' : 'Brahmapichash Sthan',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761913592/BrahPichas1_nyjbm5.jpg',
            link: '/places/brahmapichas-sthan'
        },
        {
            name: language === 'hi' ? 'निंगोरिया स्थान' : 'Ninguriya Sthan',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1766666688/IMG_20251205_144239346_1_ng9bgg.jpg',
            link: '/places/ninguriya-sthan'
        },
        {
            name: language === 'hi' ? 'अहरा' : 'Ahara',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1770472163/WhatsApp_Image_2025-12-05_at_2.32.55_PM_qu9xfv.jpg',
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
