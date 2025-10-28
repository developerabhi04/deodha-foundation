// Ultra-Professional AboutSection - Magazine Style Layout
import React, { useState } from 'react';
import {
  ArrowRight, Eye, Target, Users, Heart, Phone, Award,
  ChevronLeft, ChevronRight, MapPin, Calendar, Building2,
  Shield, Zap, Sparkles, TrendingUp, CheckCircle, Globe,
  Mail, Linkedin, Twitter, Facebook, Clock
} from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from '@/components/Hero';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('story');
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  const teamMembers = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'President',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80',
      gradient: 'from-blue-600 via-blue-500 to-indigo-600',
      expertise: 'Strategic Leadership',
      quote: 'Building tomorrow, today.'
    },
    {
      id: 2,
      name: 'Chandan Kumar',
      role: 'Vice President',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80',
      gradient: 'from-green-600 via-emerald-500 to-teal-600',
      expertise: 'Agriculture Development',
      quote: 'Empowering farmers, enriching lives.'
    },
    {
      id: 3,
      name: 'Mitendra Kumar',
      role: 'Secretary',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80',
      gradient: 'from-purple-600 via-violet-500 to-purple-700',
      expertise: 'Operations Management',
      quote: 'Transparency builds trust.'
    },
    {
      id: 4,
      name: 'Devkant Mishra',
      role: 'Treasurer',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80',
      gradient: 'from-pink-600 via-rose-500 to-red-600',
      expertise: 'Financial Stewardship',
      quote: 'Every rupee creates impact.'
    },
    {
      id: 5,
      name: 'Brajesh Kumar',
      role: 'Vice Secretary',
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&q=80',
      gradient: 'from-orange-600 via-amber-500 to-yellow-600',
      expertise: 'Education & Youth',
      quote: 'Education transforms generations.'
    }
  ];

  const stats = [
    { value: '5', label: 'Founding Members', icon: Users, color: 'from-blue-600 to-indigo-600' },
    { value: '₹3.93L', label: 'Community Investment', icon: Award, color: 'from-green-600 to-emerald-600' },
    { value: '10K+', label: 'Lives Impacted', icon: Heart, color: 'from-pink-600 to-rose-600' },
    { value: '100%', label: 'Transparency', icon: Shield, color: 'from-purple-600 to-violet-600' }
  ];

  const contentTabs = [
    { id: 'story', label: 'Our Story', icon: Building2 },
    { id: 'vision', label: 'Vision & Mission', icon: Target },
    { id: 'values', label: 'Core Values', icon: Award },
    { id: 'impact', label: 'Our Impact', icon: TrendingUp }
  ];

  return (
    <>
      <Hero
        title="About Us"
        subtitle="Learn more about our mission, vision, and the team behind Dheodha Vikas Samiti."
        backgroundImage="https://images.unsplash.com/photo-1509099836639-18ba9f7b5d3d?w=1200&q=80&auto=format&fit=crop"
      />


      <div className="relative bg-white overflow-hidden">
        {/* Hero Section - Full Width Magazine Style */}
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
              {/* Left Content - 7 columns */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-7 space-y-8"
              >
                {/* Badge */}
                <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white px-6 py-3 rounded-full">
                  <Building2 className="w-5 h-5 text-green-400" />
                  <span className="text-sm font-bold tracking-wider">DHEODHA VIKAS SAMITI</span>
                  <span className="text-xs bg-green-500 px-3 py-1 rounded-full font-bold">EST. 2025</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-6xl lg:text-8xl font-black text-white leading-none tracking-tight">
                  Transforming
                  <span className="block bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent mt-3">
                    Rural Bihar
                  </span>
                </h1>

                {/* Description */}
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  A community-driven initiative established by five visionary leaders, investing <strong className="text-white font-bold">₹3.93 Lakhs</strong> to create sustainable change in <strong className="text-white font-bold">Pakri Barawan, Nawada District</strong>.
                </p>

                {/* Location Badge */}
                <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 w-fit">
                  <MapPin className="w-6 h-6 text-green-400" />
                  <div>
                    <div className="text-white font-bold">Dheodha Village</div>
                    <div className="text-sm text-gray-400">Bihar, India</div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#story"
                    className="group relative bg-gradient-to-r from-green-500 to-emerald-600 text-white px-10 py-5 rounded-2xl font-bold text-lg overflow-hidden transition-all hover:shadow-2xl hover:shadow-green-500/50 hover:scale-105"
                  >
                    <span className="relative z-10 flex items-center space-x-3">
                      <span>Discover Our Story</span>
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </a>

                  <a
                    href="#team"
                    className="group bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all inline-flex items-center space-x-3"
                  >
                    <Users className="w-6 h-6" />
                    <span>Meet The Team</span>
                  </a>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-4 gap-6 pt-8">
                  {stats.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + idx * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                      <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right - Team Showcase - 5 columns */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-5"
              >
                <div className="relative">
                  {/* Main Featured Card */}
                  <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                    <div className="absolute -top-6 -right-6 bg-gradient-to-br from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-2xl font-black text-xl shadow-2xl rotate-12 hover:rotate-0 transition-transform">
                      5 Leaders
                    </div>

                    <h3 className="text-2xl font-black text-white mb-6">Leadership Council</h3>

                    {/* Team Grid - Stacked Layout */}
                    <div className="space-y-4">
                      {teamMembers.map((member, idx) => (
                        <motion.div
                          key={member.id}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                          className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all cursor-pointer overflow-hidden"
                        >
                          {/* Gradient Background */}
                          <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>

                          <div className="relative flex items-center space-x-4">
                            {/* Avatar */}
                            <div className="relative w-16 h-16 rounded-xl overflow-hidden ring-2 ring-white/20 group-hover:ring-4 transition-all">
                              <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                              <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-30`}></div>
                            </div>

                            {/* Info */}
                            <div className="flex-1">
                              <h4 className="text-white font-bold text-lg">{member.name}</h4>
                              <p className="text-sm text-gray-400">{member.role}</p>
                            </div>

                            {/* Arrow */}
                            <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-2 transition-all" />
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* View All Link */}
                    <a
                      href="/team"
                      className="mt-6 flex items-center justify-center space-x-2 text-green-400 hover:text-green-300 font-bold transition-colors group"
                    >
                      <span>View Full Profiles</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
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
              <span className="text-xs uppercase tracking-wider font-bold">Scroll to explore</span>
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

        {/* Content Section - Tabbed Layout */}
        <section id="story" className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Tab Navigation */}
            <div className="flex justify-center mb-16">
              <div className="inline-flex bg-gray-100 rounded-2xl p-2">
                {contentTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-8 py-4 rounded-xl font-bold text-sm transition-all ${activeTab === tab.id
                      ? 'bg-white text-gray-900 shadow-lg'
                      : 'text-gray-600 hover:text-gray-900'
                      }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-5xl mx-auto"
            >
              {activeTab === 'story' && (
                <div className="prose prose-lg prose-gray max-w-none">
                  <h2 className="text-5xl font-black text-gray-900 mb-8">Our Story</h2>
                  <div className="space-y-6 text-gray-700 leading-relaxed text-xl">
                    <p className="text-2xl font-light text-gray-600 italic border-l-4 border-green-600 pl-6">
                      "Every great change begins with a small group of committed individuals who refuse to accept the status quo."
                    </p>

                    <p>
                      On <strong className="text-gray-900">August 2, 2025</strong>, five visionary non-resident villagers came together with a shared dream: to transform Dheodha from a struggling rural village into a <strong className="text-green-600">model of sustainable development</strong> that other communities could emulate.
                    </p>

                    <p>
                      Each founding member invested <strong className="text-gray-900">₹78,600</strong>, creating a collective fund of <strong className="text-green-600">₹3,93,000</strong>—not just money, but a pledge of commitment to their birthplace. This wasn't about charity; it was about <strong className="text-gray-900">community ownership and sustainable transformation</strong>.
                    </p>

                    <p>
                      Located in <strong className="text-gray-900">Pakri Barawan Block, Nawada District, Bihar</strong>, Dheodha faces challenges common to rural India: limited educational infrastructure, inadequate healthcare access, agricultural stagnation, and youth migration. But where others saw problems, our founders saw <strong className="text-gray-900">opportunities for innovation</strong>.
                    </p>

                    <p>
                      <strong className="text-gray-900">Dheodha Vikas Samiti</strong> (ढ्योढ़ा विकास समिति) operates on principles of <strong className="text-green-600">complete transparency, community participation, and data-driven decision-making</strong>. Every rupee spent is accounted for, every decision is made collectively, and every program is designed with community input.
                    </p>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100 my-8">
                      <h3 className="text-2xl font-black text-gray-900 mb-4">What Makes Us Different</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                          <span><strong>100% Transparency:</strong> All financial records publicly accessible</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                          <span><strong>Community-Led:</strong> Decisions made by villagers, for villagers</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                          <span><strong>Technology-Enabled:</strong> Digital platforms for governance and monitoring</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                          <span><strong>Sustainable Impact:</strong> Long-term solutions, not quick fixes</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'vision' && (
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Vision */}
                  <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-10 border border-blue-100 shadow-lg">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl">
                        <Eye className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-black text-gray-900">Vision</h3>
                        <p className="text-blue-600 font-bold">दृष्टिकोण</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      To transform Dheodha into a <strong className="text-gray-900">self-sustaining model village</strong> where traditional culture harmonizes with modern development, ensuring quality education, healthcare, economic prosperity, and environmental sustainability for all residents.
                    </p>
                    <div className="space-y-2">
                      {['Quality Education', 'Modern Healthcare', 'Economic Growth', 'Cultural Preservation'].map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                          <span className="text-gray-700 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mission */}
                  <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-3xl p-10 border border-green-100 shadow-lg">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl">
                        <Target className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-black text-gray-900">Mission</h3>
                        <p className="text-green-600 font-bold">मिशन</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      To implement transparent, community-driven programs addressing education, health, agriculture, women empowerment, and digital transformation, creating measurable positive impact for every household in Dheodha.
                    </p>
                    <div className="space-y-3">
                      {['Transparent Governance', 'Data-Driven Decisions', 'Community Ownership', 'Sustainable Programs'].map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'values' && (
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { icon: Shield, title: 'Transparency', desc: '100% open financial records', color: 'from-blue-600 to-indigo-600' },
                    { icon: Users, title: 'Community First', desc: 'Villagers decide, we execute', color: 'from-green-600 to-emerald-600' },
                    { icon: Zap, title: 'Innovation', desc: 'Modern solutions for rural challenges', color: 'from-purple-600 to-violet-600' },
                    { icon: Heart, title: 'Compassion', desc: 'Serving with empathy and care', color: 'from-pink-600 to-rose-600' }
                  ].map((value, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -10, scale: 1.02 }}
                      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
                    >
                      <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                        <value.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-black text-gray-900 mb-3">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === 'impact' && (
                <div className="grid md:grid-cols-2 gap-8">
                  {stats.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
                    >
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-3xl flex items-center justify-center shadow-xl`}>
                          <stat.icon className="w-10 h-10 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-5xl font-black text-gray-900">{stat.value}</div>
                        </div>
                      </div>
                      <div className="text-xl font-bold text-gray-700">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-black text-white mb-6">Be Part of the Change</h2>
              <p className="text-xl text-green-100 mb-10 leading-relaxed">
                Join us in transforming Dheodha. Whether through contribution, volunteering, or partnership, every action creates ripples of positive change.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/donate"
                  className="bg-white text-green-600 px-10 py-5 rounded-2xl font-black text-lg hover:shadow-2xl transform hover:scale-105 transition-all inline-flex items-center space-x-3"
                >
                  <Heart className="w-6 h-6" />
                  <span>Support Our Mission</span>
                </a>
                <a
                  href="/contact"
                  className="bg-green-700 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-green-800 transition-all inline-flex items-center space-x-3"
                >
                  <Mail className="w-6 h-6" />
                  <span>Get In Touch</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>

  );
};

export default AboutSection;
