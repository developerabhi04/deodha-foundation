// pages/Home.jsx - With Translation Support
import React from 'react';
import {
  Menu, X, ChevronDown, ChevronRight, Phone, Mail, MapPin,
  Facebook, Heart, Users, BookOpen, Heart as HeartIcon,
  Calendar, TrendingUp, Award, Target, Eye, Lightbulb,
  ArrowRight, Download, Send, UserPlus, DollarSign
} from 'lucide-react';
import HeroSlider from '@/components/HeroSlider';
import AboutSection from './home/about';
import ProjectsSection from './home/project';
import ProgramsSection from './home/program';
import NewsSection from './home/news';
import Link from 'next/link';
import { useLanguage } from '../lib/LanguageContext';

const Home = () => {
  const { language, t } = useLanguage();

  // Gallery Section with Translations
  const GallerySection = () => (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.gallery.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.gallery.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { url: 'https://res.cloudinary.com/dusalynec/image/upload/v1766659396/IMG_3747_pq5vy5.jpg', caption: language === 'hi' ? 'धेवधा गांव का दृश्य' : 'Dheodha village landscape' },
            { url: 'https://res.cloudinary.com/dusalynec/image/upload/v1761988428/Screenshot_2025-11-01_143140_qtujbz.png', caption: language === 'hi' ? 'शिक्षा पहल' : 'Education initiatives' },
            { url: 'https://res.cloudinary.com/dusalynec/image/upload/v1761943478/535406181_1167017038795096_2461049160579214706_n_zw0cey.jpg', caption: language === 'hi' ? 'सड़क मरम्मत परियोजना' : 'Road repair project' },
            { url: 'https://res.cloudinary.com/dusalynec/image/upload/v1761989019/45409174_2402526893097762_5143301432350343168_n_g8x7zd.jpg', caption: language === 'hi' ? 'सांस्कृतिक कार्यक्रम' : 'Cultural programs' },
            { url: 'https://res.cloudinary.com/dusalynec/image/upload/v1761943491/564625741_1220718416758291_2852318103725747144_n_d49x2c.jpg', caption: language === 'hi' ? 'महिला सशक्तिकरण' : 'Women empowerment' },
            { url: 'https://res.cloudinary.com/dusalynec/image/upload/v1761913596/DP_2015_3_v1njsg.jpg', caption: language === 'hi' ? 'स्वास्थ्य जागरूकता' : 'Health awareness' },
          ].map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <img src={item.url} alt={item.caption} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white font-semibold">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/gallery"
            className="inline-flex items-center space-x-2 bg-white text-gray-700 px-6 py-3 rounded-full font-semibold border-2 border-gray-300 hover:border-green-500 hover:text-green-600 transition-all"
          >
            <span>{t.common.viewFullGallery}</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );

  return (
    <>
      <HeroSlider />
      <AboutSection />
      <ProjectsSection />
      <GallerySection />
      <NewsSection />
    </>
  );
};

export default Home;
