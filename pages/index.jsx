import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight, Heart, Users, TrendingUp, Award, CheckCircle,
  MapPin, Shield, Target, Eye, Sparkles, Star, Phone, Mail
} from 'lucide-react';
import SEO from '../components/SEO';
import { stats, programs } from '../lib/data';
import { useLanguage } from '../lib/LanguageContext';
import HeroSlider from '@/components/HeroSlider';

export default function Home() {
  const { t, language } = useLanguage();

  return (
    <>
      <SEO
        title={language === 'hi' ? 'ध्यवाधा फाउंडेशन - बिहार का सर्वश्रेष्ठ NGO' : 'Dhewadha Foundation - Best NGO in Bihar'}
        description={language === 'hi'
          ? 'नवादा जिले का अग्रणी NGO। 2016 से 500+ बच्चों, 200+ महिलाओं को सशक्त बनाना।'
          : 'Leading NGO in Nawada District since 2016. Empowering 500+ children, 200+ women in rural Bihar.'}
      />

      {/* Floating Donation Button - Nabatara Style */}
      {/* <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Link
          href="/donate"
          className="group bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center gap-2 font-bold animate-bounce"
        >
          <Heart className="group-hover:scale-125 transition-transform" size={22} fill="white" />
          <span>{language === 'hi' ? 'दान करें' : 'Join Us'}</span>
        </Link>
      </motion.div> */}

      {/* Hero Section - Nabatara Inspired */}
      <HeroSlider />

      {/* Stats Section - Nabatara Style */}
      <section className="py-20 bg-gradient-to-b from-brand-green to-brand-green-dark text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              {language === 'hi' ? 'हमारा प्रभाव संख्या में' : 'Our Impact in Numbers'}
            </h2>
            <p className="text-xl text-green-100">
              {language === 'hi' ? 'वास्तविक परिवर्तन, वास्तविक जीवन' : 'Real Change, Real Lives'}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 border border-white/20"
              >
                <div className="text-5xl md:text-6xl font-black text-yellow-400 mb-3">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-lg font-bold text-white">
                  {language === 'hi'
                    ? t.stats[stat.label.toLowerCase().replace(/ /g, '')] || stat.label
                    : stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators - Nabatara Style */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: <CheckCircle size={32} />,
                title: language === 'hi' ? '100% पारदर्शी' : '100% Transparent',
                desc: language === 'hi' ? 'हर रुपये का हिसाब' : 'Every Rupee Tracked',
                color: 'from-green-500 to-emerald-600'
              },
              {
                icon: <Shield size={32} />,
                title: language === 'hi' ? 'सरकार द्वारा मान्यता प्राप्त' : 'Govt. Approved',
                desc: language === 'hi' ? 'आधिकारिक पंजीकृत' : 'Officially Registered',
                color: 'from-blue-500 to-cyan-600'
              },
              {
                icon: <Award size={32} />,
                title: language === 'hi' ? 'पुरस्कार प्राप्त' : 'Award Winning',
                desc: language === 'hi' ? 'मान्यता प्राप्त प्रभाव' : 'Recognized Impact',
                color: 'from-yellow-500 to-orange-600'
              },
              {
                icon: <TrendingUp size={32} />,
                title: language === 'hi' ? 'वास्तविक प्रभाव' : 'Real Impact',
                desc: language === 'hi' ? 'मापनीय परिणाम' : 'Measurable Results',
                color: 'from-purple-500 to-pink-600'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-to-br ${item.color} text-white p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300`}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/90 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Story Section */}
      <section className="py-20 bg-white overflow-auto hide-scrollbar">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1509099836639-18ba9f7b5d3d?w=800&q=80&auto=format&fit=crop"
                alt="About Us"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-bold text-sm mb-4">
                {language === 'hi' ? '2016 से सेवारत' : 'SERVING SINCE 2016'}
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                {language === 'hi' ? 'ध्यवाधा की कहानी' : 'The Dhewadha Story'}
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {language === 'hi'
                  ? 'नवादा जिले के ध्यवाधा गांव में, जहां बच्चे सड़क की रोशनी के नीचे पढ़ते हैं और परिवार बुनियादी स्वास्थ्य सेवा के लिए मीलों यात्रा करते हैं, वहां ध्यवाधा फाउंडेशन आशा का निर्माण कर रहा है।'
                  : 'In Dhewadha village, Nawada District, where children study under streetlights and families travel miles for basic healthcare, Dhewadha Foundation is building hope.'}
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {language === 'hi'
                  ? 'पकड़ी बारावां ब्लॉक के 15+ गांवों में, हम शिक्षा, स्वास्थ्य सेवा और आजीविका के माध्यम से जीवन बदल रहे हैं। हम केवल बुनियादी ढांचा नहीं बनाते - हम भविष्य का सह-निर्माण करते हैं।'
                  : 'Across 15+ villages in Pakri Barawan Block, we\'re transforming lives through education, healthcare, and livelihood. We don\'t just build infrastructure - we co-create futures.'}
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-brand-green text-white px-8 py-4 rounded-full font-bold hover:bg-brand-green-dark transition-all"
              >
                {language === 'hi' ? 'हमारी कहानी पढ़ें' : 'READ OUR STORY'}
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section - Card Style */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-green-100 text-brand-green px-6 py-2 rounded-full font-bold text-sm mb-4">
              {language === 'hi' ? 'हमारे कार्यक्रम' : 'OUR PROGRAMS'}
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              {language === 'hi' ? 'हम कैसे बदलाव लाते हैं' : 'How We Create Change'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'hi'
                ? 'शिक्षा, स्वास्थ्य सेवा, महिला सशक्तिकरण और आजीविका के माध्यम से समुदायों को सशक्त बनाना'
                : 'Empowering communities through education, healthcare, women empowerment, and livelihood'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/programs/${program.slug}`}>
                  <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 cursor-pointer border-4 border-transparent hover:border-brand-green">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-6xl">{program.icon}</div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-green transition-colors">
                        {language === 'hi' ? t.programs[program.id]?.title : program.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                        {language === 'hi' ? t.programs[program.id]?.shortDesc : program.shortDescription}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-brand-green font-bold">{program.beneficiaries}</span>
                        <ArrowRight className="text-brand-green group-hover:translate-x-2 transition-transform" size={20} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link
              href="/programs"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-green to-brand-green-dark text-white px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-all shadow-xl"
            >
              {language === 'hi' ? 'सभी कार्यक्रम देखें' : 'VIEW ALL PROGRAMS'}
              <ArrowRight size={24} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-brand-green text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-black mb-6 flex items-center gap-3">
                  <MapPin size={36} />
                  {language === 'hi' ? 'हम कहां हैं' : 'Where We Are'}
                </h2>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="space-y-4 text-lg">
                    <p><strong>{language === 'hi' ? 'गांव:' : 'Village:'}</strong> Dhewadha</p>
                    <p><strong>{language === 'hi' ? 'ब्लॉक:' : 'Block:'}</strong> Pakri Barawan</p>
                    <p><strong>{language === 'hi' ? 'जिला:' : 'District:'}</strong> Nawada, Bihar</p>
                    <p><strong>{language === 'hi' ? 'पिन:' : 'PIN:'}</strong> 805124</p>
                    <div className="border-t border-white/30 pt-4 mt-4">
                      <p><strong>{language === 'hi' ? 'नवादा से:' : 'From Nawada:'}</strong> 24 KM</p>
                      <p><strong>{language === 'hi' ? 'पटना से:' : 'From Patna:'}</strong> 108 KM</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6">{language === 'hi' ? '15+ गांवों की सेवा' : 'Serving 15+ Villages'}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {['Dhewadha', 'Pakri Barawan', 'Dumrawan', 'Madhepur', 'Konandpur', 'Poksi', 'Datraul', 'Dola', 'Dosut', 'Aruri', 'Keshauri', '+4 More'].map((village, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 flex items-center gap-2 border border-white/20">
                      <CheckCircle size={16} />
                      <span className="text-sm font-semibold">{village}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Nabatara Style */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-green rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Sparkles className="mx-auto mb-6 text-yellow-400" size={48} />
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              {language === 'hi' ? 'आज बदलाव शुरू करें' : 'Start Making a Difference Today'}
            </h2>
            <p className="text-2xl mb-12 text-gray-300">
              {language === 'hi'
                ? 'आपका छोटा सा कदम, किसी के जीवन में बड़ा बदलाव ला सकता है'
                : 'Your small step can create massive change in someone\'s life'}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/donate"
                className="group bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black px-12 py-6 rounded-full font-black text-xl hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-2xl"
              >
                <Heart className="mr-3" size={28} fill="black" />
                {language === 'hi' ? '' : 'Join Us'}
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={28} />
              </Link>
              <Link
                href="/volunteer"
                className="bg-white text-black px-12 py-6 rounded-full font-black text-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
              >
                <Users className="mr-3" size={28} />
                {language === 'hi' ? 'स्वयंसेवक बनें' : 'VOLUNTEER NOW'}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
