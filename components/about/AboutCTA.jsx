// components/about/AboutCTA.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Users, Mail } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '../../lib/LanguageContext';

const AboutCTA = () => {
  const { language } = useLanguage();

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, white 2px, transparent 2px),
            radial-gradient(circle at 80% 80%, white 2px, transparent 2px)
          `,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Floating Shapes */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10"
          style={{
            width: `${200 + i * 100}px`,
            height: `${200 + i * 100}px`,
            left: `${20 + i * 30}%`,
            top: `${30 - i * 10}%`,
          }}
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-xl border border-white/30 text-white px-6 py-3 rounded-full mb-8">
            <Heart className="w-5 h-5" />
            <span className="font-bold text-sm">
              {language === 'hi' ? 'धेवधा के विकास में शामिल हों' : 'Join Dheodha Development'}
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
            {language === 'hi' ? (
              <>
                आइए मिलकर बनाएं<br />
                <span className="text-yellow-300">एक बेहतर धेवधा</span>
              </>
            ) : (
              <>
                Let's Build Together<br />
                <span className="text-yellow-300">A Better Dheodha</span>
              </>
            )}
          </h2>

          {/* Description */}
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
            {language === 'hi'
              ? 'आपका योगदान, चाहे वह दान हो, स्वयंसेवा हो, या विचार - हर कदम मायने रखता है। धेवधा के उज्ज्वल भविष्य के निर्माण में हमारे साथ जुड़ें।'
              : 'Your contribution, whether donation, volunteering, or ideas - every step matters. Join us in building a brighter future for Dheodha.'
            }
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <Link
              href="/donate"
              className="group relative bg-white text-green-600 px-10 py-5 rounded-2xl font-bold text-lg overflow-hidden transition-all hover:shadow-2xl hover:scale-105"
            >
              <span className="relative z-10 flex items-center space-x-3">
                <Heart className="w-6 h-6" />
                <span>{language === 'hi' ? 'दान करें' : 'Donate Now'}</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>

            <Link
              href="/volunteer"
              className="group bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all inline-flex items-center space-x-3"
            >
              <Users className="w-6 h-6" />
              <span>{language === 'hi' ? 'स्वयंसेवक बनें' : 'Become a Volunteer'}</span>
            </Link>

            <Link
              href="/contact"
              className="group bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all inline-flex items-center space-x-3"
            >
              <Mail className="w-6 h-6" />
              <span>{language === 'hi' ? 'संपर्क करें' : 'Contact Us'}</span>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { 
                value: '₹3.93L', 
                label: language === 'hi' ? 'कुल निवेश' : 'Total Investment' 
              },
              { 
                value: '10K+', 
                label: language === 'hi' ? 'प्रभावित जीवन' : 'Lives Impacted' 
              },
              { 
                value: '5', 
                label: language === 'hi' ? 'सक्रिय परियोजनाएं' : 'Active Projects' 
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6"
              >
                <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTA;
