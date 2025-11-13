// components/about/AboutHero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, MapPin, Users, Award, Heart, Shield, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../lib/LanguageContext';
import AboutPlaces from './AboutPlaces';

const AboutHero = () => {
  const { language } = useLanguage();

  const stats = [
    { 
      value: '140+', 
      label: language === 'hi' ? 'संस्थापक सदस्य' : 'Founding Members',
      icon: Users, 
      color: 'from-blue-600 to-indigo-600' 
    },
    { 
      value: '₹4.22L', 
      label: language === 'hi' ? 'सामुदायिक निवेश' : 'Community Investment',
      icon: Award, 
      color: 'from-green-600 to-emerald-600' 
    },
    { 
      value: '10K+', 
      label: language === 'hi' ? 'प्रभावित जीवन' : 'Lives Impacted',
      icon: Heart, 
      color: 'from-pink-600 to-rose-600' 
    },
    { 
      value: '100%', 
      label: language === 'hi' ? 'पारदर्शिता' : 'Transparency',
      icon: Shield, 
      color: 'from-purple-600 to-violet-600' 
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #22c55e 1px, transparent 1px),
            linear-gradient(to bottom, #22c55e 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      {/* Floating Orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl opacity-20"
          style={{
            width: `${400 + i * 100}px`,
            height: `${400 + i * 100}px`,
            background: `radial-gradient(circle, ${['#3b82f6', '#10b981', '#8b5cf6'][i]} 0%, transparent 70%)`,
            left: `${20 + i * 30}%`,
            top: `${20 + i * 20}%`,
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white px-6 py-3 rounded-full">
              <Building2 className="w-5 h-5 text-green-400" />
              <span className="text-sm font-bold tracking-wider">
                {language === 'hi' ? 'धेवधा विकास समिति' : 'Dheodha Vikas Samiti'}
              </span>
              <span className="text-xs bg-green-500 px-3 py-1 rounded-full font-bold">
                {language === 'hi' ? 'स्था. 2025' : 'EST. 2025'}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-black text-white  leading-tight tracking-tight">
              {language === 'hi' ? (
                <>
                  हम कौन हैं?
                  <span className="block bg-gradient-to-r from-green-400 via-emerald-400 py-3  to-teal-400 bg-clip-text text-transparent mt-3 text-4xl lg:text-6xl">
                    धेवधा की सेवा में
                  </span>
                </>
              ) : (
                <>
                  Who We Are?
                  <span className="block bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent mt-3 text-4xl lg:text-6xl">
                    Serving Dheodha
                  </span>
                </>
              )}
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              {language === 'hi' ? (
                <>
                  धेवधा विकास समिति एक <strong className="text-white font-bold">गैर-राजनीतिक, सामाजिक संगठन</strong> है, जिसकी स्थापना <strong className="text-green-400">2 अगस्त 2025</strong> में अप्रवासी ग्रामवासियों और स्थानीय लोगों के सहयोग से हुई। हमारा उद्देश्य है धेवधा ग्राम को <strong className="text-white">स्वच्छ, शिक्षित, सशक्त और सांस्कृतिक रूप से समृद्ध</strong> बनाना।
                </>
              ) : (
                <>
                  Dheodha Vikas Samiti is a <strong className="text-white font-bold">non-political, social organization</strong> established on <strong className="text-green-400">August 2, 2025</strong> through the collaboration of migrant villagers and local residents. Our goal is to make Dheodha village <strong className="text-white">clean, educated, empowered, and culturally enriched</strong>.
                </>
              )}
            </p>

            {/* Location Badge */}
            <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 w-fit">
              <MapPin className="w-6 h-6 text-green-400" />
              <div>
                <div className="text-white font-bold">
                  {language === 'hi' ? 'धेवधा गांव' : 'Dheodha Village'}
                </div>
                <div className="text-sm text-gray-400">
                  {language === 'hi' ? 'पकरीबरामा, नवादा, बिहार' : 'Pakribarawan, Nawada, Bihar'}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#story"
                className="group relative bg-gradient-to-r from-green-500 to-emerald-600 text-white px-10 py-5 rounded-2xl font-bold text-lg overflow-hidden transition-all hover:shadow-2xl hover:shadow-green-500/50 hover:scale-105"
              >
                <span className="relative z-10 flex items-center space-x-3">
                  <span>{language === 'hi' ? 'हमारी कहानी जानें' : 'Know Our Story'}</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>

              <a
                href="#team"
                className="group bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all inline-flex items-center space-x-3"
              >
                <Users className="w-6 h-6" />
                <span>{language === 'hi' ? 'टीम से मिलें' : 'Meet the Team'}</span>
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + idx * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Important Places */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <AboutPlaces />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-3 text-white/60">
          <span className="text-xs uppercase tracking-wider font-bold">
            {language === 'hi' ? 'नीचे स्क्रॉल करें' : 'Scroll Down'}
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2"
          >
            <div className="w-1 h-3 bg-white/60 rounded-full"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutHero;
