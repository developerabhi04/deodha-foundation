// Complete Modern AboutSection Component with Vision & Mission
import React from 'react';
import {
    ArrowRight, Eye, Target, Users, Heart, Phone, Lightbulb,
    TrendingUp, Award, UserPlus, CheckCircle2,
    Mail,
    Sparkles,
    ChevronLeft, ChevronRight
} from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';



const AboutSection = () => (
    <section id="about" className="relative py-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50">
            <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322c55e' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Main Hero About Section */}
            <div className="mb-24">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <div className="inline-block">
                            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
                                About Dheodha Vikas Samiti
                            </span>
                        </div>

                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Transforming Rural Bihar Through
                            <span className="relative inline-block ml-3">
                                <span className="relative z-10 text-green-600">Community Action</span>
                                <svg className="absolute bottom-0 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 10C50 3 150 3 198 10" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h1>

                        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                            <p>
                                Dheodha Vikas Samiti stands as a <strong className="text-gray-900">beacon of hope in rural Bihar</strong>, transforming lives since its establishment on <strong className="text-green-600">August 2, 2025</strong>. Founded by dedicated non-resident villagers (अप्रवासी ग्रामवासी), we are committed to holistic village development through transparent, community-driven initiatives.
                            </p>

                            <p>
                                Officially recognized as an <strong className="text-gray-900">unregistered non-profit organization</strong>, we work tirelessly to promote education, health, cleanliness, employment, and social harmony across Dheodha and surrounding villages in <strong className="text-gray-900">Pakri Barawan Block, Nawada District</strong>.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <a
                                href="#vision-mission"
                                className="group bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all inline-flex items-center space-x-2"
                            >
                                <span>Learn More About Us</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#contact"
                                className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold border-2 border-gray-200 hover:border-green-500 hover:text-green-600 transition-all inline-flex items-center space-x-2"
                            >
                                <Phone className="w-5 h-5" />
                                <span>Get in Touch</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Image Section */}
                    <div className="relative">
                        {/* Main Image with Decorative Frame */}
                        <div className="relative">
                            {/* Decorative background shape */}
                            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl transform rotate-3"></div>

                            {/* Image container */}
                            <div className="relative bg-white p-3 rounded-3xl shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                                <img
                                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80"
                                    alt="Dheodha Village Development"
                                    className="w-full h-[500px] object-cover rounded-2xl"
                                />

                                {/* Floating Stats Card */}
                                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl max-w-xs">
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-xl">
                                            <TrendingUp className="w-8 h-8 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-3xl font-bold text-gray-900">₹3.93L</h3>
                                            <p className="text-sm text-gray-600">Community Investment</p>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex items-center space-x-2 text-sm text-green-600">
                                        <span className="flex items-center">
                                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                                            2 Projects Completed
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Floating badges */}
                            <div className="absolute top-6 -right-6 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold shadow-lg transform rotate-12 hover:rotate-0 transition-transform">
                                Est. 2025
                            </div>
                        </div>

                        {/* Background decorative elements */}
                        <div className="absolute -z-10 top-1/2 left-1/2 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                </div>
            </div>

            {/* Vision & Mission Section*/}
            <section id="vision-mission" className="py-4 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 mb-24">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider inline-block mb-4">
                            Our Direction
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Vision & Mission</h2>
                        <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Guiding principles driving Dheodha's transformation
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Vision */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                        >
                            <div className="aspect-[16/9] relative overflow-hidden">
                                <img
                                    src="https://gsvsorissango.org/aionpanel/uploads/home/1708675359.jpg"
                                    alt="Vision"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-6 left-6">
                                    <div className="flex items-center space-x-3">
                                        <div className="bg-white p-2 rounded-lg">
                                            <Eye className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <span className="text-white font-semibold">Our Vision</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Model Village Initiative</h3>
                                <p className="text-sm text-blue-600 font-medium mb-4">दृष्टिकोण</p>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    To transform Dheodha into a model village that blends cultural heritage with modern development—ensuring quality education, sustainable infrastructure, economic empowerment, and a safe, inclusive environment for all.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Education</span>
                                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Infrastructure</span>
                                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Empowerment</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Mission */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                        >
                            <div className="aspect-[16/9] relative overflow-hidden">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR6V6qOJi6LcVGa5tWz83NofzkyRGiTWluxQ&s"
                                    alt="Mission"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-6 left-6">
                                    <div className="flex items-center space-x-3">
                                        <div className="bg-white p-2 rounded-lg">
                                            <Target className="w-5 h-5 text-green-600" />
                                        </div>
                                        <span className="text-white font-semibold">Our Mission</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Community-First Approach</h3>
                                <p className="text-sm text-green-600 font-medium mb-4">मिशन</p>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    To promote education, health, cleanliness, employment, and social harmony for the overall development of the village through transparent, community-driven initiatives.
                                </p>
                                <div className="space-y-2">
                                    {['Transparent Governance', 'Community Participation', 'Sustainable Development'].map((item, idx) => (
                                        <div key={idx} className="flex items-center space-x-2 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <div className="mb-24 relative">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl -mx-4 -z-10"></div>
                <div className="py-16 px-4">
                    <div className="text-center mb-16">
                        <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider inline-block mb-4">
                            What Drives Us
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Core Values</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            The principles that guide every decision and action we take
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: '🔍',
                                title: 'Transparency',
                                description: 'Complete openness in financial matters and project execution',
                                color: 'from-blue-500 to-blue-600'
                            },
                            {
                                icon: '🤝',
                                title: 'Community First',
                                description: 'Every initiative driven by collective community participation',
                                color: 'from-green-500 to-green-600'
                            },
                            {
                                icon: '⚖️',
                                title: 'Non-Political',
                                description: 'Development without political influence or interference',
                                color: 'from-purple-500 to-purple-600'
                            },
                            {
                                icon: '🎭',
                                title: 'Cultural Pride',
                                description: 'Preserving heritage while embracing modernization',
                                color: 'from-pink-500 to-pink-600'
                            },
                            {
                                icon: '🌟',
                                title: 'Inclusivity',
                                description: 'Equal opportunities for all sections of society',
                                color: 'from-yellow-500 to-orange-600'
                            },
                            {
                                icon: '♻️',
                                title: 'Sustainability',
                                description: 'Long-term solutions for future generations',
                                color: 'from-teal-500 to-teal-600'
                            },
                        ].map((value, index) => (
                            <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all">
                                <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            {/* Founding Members Section */}
            <div id="founding-members" className="mb-24 relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header - English Only */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center space-x-2 bg-white text-indigo-600 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider mb-6 shadow-lg">
                            <Users className="w-5 h-5" />
                            <span>Leadership Team</span>
                        </div>
                        <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                            <span className="text-gray-900">Our </span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Founding Members</span>
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Visionary leaders dedicated to transforming Dheodha through transparent governance and community empowerment
                        </p>
                    </motion.div>

                    {/* Slider */}
                    <div className="relative px-8">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation={{
                                nextEl: '.team-next',
                                prevEl: '.team-prev',
                            }}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 4 },
                            }}
                            className="team-swiper !pb-16"
                        >
                            {[
                                {
                                    name: 'Rajesh Kumar',
                                    role: 'President',
                                    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&q=80',
                                    color: 'from-blue-500 to-indigo-600',
                                },
                                {
                                    name: 'Chandan Kumar',
                                    role: 'Vice President',
                                    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80',
                                    color: 'from-green-500 to-emerald-600',
                                },
                                {
                                    name: 'Mitendra Kumar',
                                    role: 'Secretary',
                                    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&q=80',
                                    color: 'from-purple-500 to-violet-600',
                                },
                                {
                                    name: 'Devkant Mishra',
                                    role: 'Treasurer',
                                    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&q=80',
                                    color: 'from-pink-500 to-rose-600',
                                },
                                {
                                    name: 'Brajesh Kumar',
                                    role: 'Vice Secretary',
                                    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=500&q=80',
                                    color: 'from-orange-500 to-amber-600',
                                },
                                {
                                    name: 'Rishav Mishra',
                                    role: 'Website & Tech Manager',
                                    image: 'https://rishavmishra.com/assets/Avatar-CnoY_3lK.jpg',
                                    color: 'from-teal-500 to-cyan-600',
                                },
                            ].map((member, index) => (
                                <SwiperSlide key={index}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-full"
                                    >
                                        {/* Image Section */}
                                        <div className="relative h-80 overflow-hidden">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />

                                            {/* Gradient Overlay */}
                                            <div className={`absolute inset-0 bg-gradient-to-t ${member.color} opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                                            {/* Role Badge */}
                                            <div className={`absolute top-6 right-6 bg-gradient-to-r ${member.color} text-white px-4 py-2 rounded-full text-xs font-bold shadow-xl border-2 border-white/30`}>
                                                {member.role}
                                            </div>

                                            {/* Name & Title */}
                                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                                <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-2xl">{member.name}</h3>
                                                <div className="flex items-center space-x-2">
                                                    <div className={`h-1 w-12 bg-gradient-to-r ${member.color} rounded-full`}></div>
                                                    <p className="text-sm text-gray-200 font-medium">{member.role}</p>
                                                </div>
                                            </div>
                                        </div>



                                        {/* Bottom Accent */}
                                        <div className={`h-2 bg-gradient-to-r ${member.color}`}></div>
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Navigation Buttons */}
                        <button className="team-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all group">
                            <ChevronLeft className="w-7 h-7 text-gray-700 group-hover:text-white" />
                        </button>
                        <button className="team-next absolute right-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all group">
                            <ChevronRight className="w-7 h-7 text-gray-700 group-hover:text-white" />
                        </button>
                    </div>

                    {/* View Full Team Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-center mt-4"
                    >
                        <a
                            href="/team"
                            className="group inline-flex items-center space-x-3 bg-gradient-to-r from-green-600 to-purple-600 text-white px-12 py-5 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all"
                        >
                            <Users className="w-4 h-4" />
                            <span>View Full Team</span>
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <p className="text-sm text-gray-500 mt-4">
                            Learn more about our leadership and their journey
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Custom Swiper Styles */}
            <style jsx global>{`
                .team-swiper .swiper-pagination-bullet {
                width: 12px;
                height: 12px;
                background: #6366f1;
                opacity: 0.4;
                }
                
                .team-swiper .swiper-pagination-bullet-active {
                opacity: 1;
                width: 36px;
                border-radius: 6px;
                background: linear-gradient(to right, #6366f1, #a855f7);
                }
           `}</style>



            {/* Key Focus Areas */}
            <div id="focus-areas" className="mb-24 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-b from-white via-green-50/30 to-white -z-10"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wider mb-6 shadow-md">
                            <Sparkles className="w-5 h-5" />
                            <span>Our Impact Areas</span>
                        </span>
                        <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Focus Areas</span>
                        </h2>
                        <div className="w-32 h-1.5 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 mx-auto mb-8 rounded-full"></div>
                        <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Strategic initiatives driving comprehensive transformation across education, health, empowerment, and cultural preservation in Dheodha
                        </p>
                    </motion.div>

                    {/* Slider Component */}
                    <div className="relative">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation={{
                                nextEl: '.swiper-button-next-custom',
                                prevEl: '.swiper-button-prev-custom',
                            }}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            className="focus-areas-swiper pb-16"
                        >
                            {[
                                {
                                    id: 'education',
                                    title: 'Education',
                                    titleHindi: 'शिक्षा',
                                    icon: '📚',
                                    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80',
                                    description: 'Transforming education through quality improvement, digital learning resources, after-school tuition support, and engaging student participation programs.',
                                    initiatives: ['Digital Library Setup', 'After-School Tuition', 'Teacher Training', 'Student Scholarships'],
                                    color: 'from-blue-500 to-blue-600',
                                    bgColor: 'from-blue-50 to-blue-100',
                                    stats: '500+ students',
                                    impact: 'Quality education for all'
                                },
                                {
                                    id: 'health',
                                    title: 'Health & Hygiene',
                                    titleHindi: 'स्वास्थ्य',
                                    icon: '🏥',
                                    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
                                    description: 'Comprehensive healthcare access, hygiene awareness campaigns, preventive health measures, and maternal-child health programs.',
                                    initiatives: ['Health Camps', 'Hygiene Training', 'Maternal Care', 'Disease Prevention'],
                                    color: 'from-red-500 to-red-600',
                                    bgColor: 'from-red-50 to-red-100',
                                    stats: '1000+ villagers',
                                    impact: 'Healthier communities'
                                },
                                {
                                    id: 'women',
                                    title: 'Women Empowerment',
                                    titleHindi: 'महिला सशक्तिकरण',
                                    icon: '👩‍🏫',
                                    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
                                    description: 'Comprehensive skill development, safety initiatives, self-help group formation, and creating platforms for inclusive participation.',
                                    initiatives: ['Vocational Training', 'SHG Formation', 'Safety Awareness', 'Leadership Programs'],
                                    color: 'from-pink-500 to-pink-600',
                                    bgColor: 'from-pink-50 to-pink-100',
                                    stats: '200+ women',
                                    impact: 'Empowered futures'
                                },
                                {
                                    id: 'agriculture',
                                    title: 'Agriculture',
                                    titleHindi: 'कृषि',
                                    icon: '🌾',
                                    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80',
                                    description: 'Modern farming techniques, sustainable agricultural practices, crop diversification guidance, and farmer support networks.',
                                    initiatives: ['Modern Techniques', 'Organic Farming', 'Crop Planning', 'Market Linkages'],
                                    color: 'from-green-500 to-green-600',
                                    bgColor: 'from-green-50 to-green-100',
                                    stats: '300+ farmers',
                                    impact: 'Sustainable farming'
                                },
                                {
                                    id: 'digital',
                                    title: 'Digitalization',
                                    titleHindi: 'डिजिटलीकरण',
                                    icon: '💻',
                                    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80',
                                    description: 'Building digital infrastructure, ensuring transparent e-governance, online community platforms, and bridging the digital divide.',
                                    initiatives: ['E-Governance', 'Digital Literacy', 'Online Platforms', 'Tech Training'],
                                    color: 'from-indigo-500 to-indigo-600',
                                    bgColor: 'from-indigo-50 to-indigo-100',
                                    stats: 'Full transparency',
                                    impact: 'Connected community'
                                },
                                {
                                    id: 'culture',
                                    title: 'Cultural Revival',
                                    titleHindi: 'सांस्कृतिक पुनरुत्थान',
                                    icon: '🎭',
                                    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80',
                                    description: 'Preserving traditional folk arts, reviving Rastriya Natya Kala Parishad, organizing cultural festivals, and training youth in heritage arts.',
                                    initiatives: ['Folk Art Revival', 'Cultural Events', 'Youth Training', 'Heritage Preservation'],
                                    color: 'from-purple-500 to-purple-600',
                                    bgColor: 'from-purple-50 to-purple-100',
                                    stats: 'Rich heritage',
                                    impact: 'Preserved traditions'
                                },
                            ].map((area, index) => (
                                <SwiperSlide key={area.id}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-full"
                                    >
                                        {/* Image Section */}
                                        <div className="relative h-64 overflow-hidden">
                                            <img
                                                src={area.image}
                                                alt={area.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className={`absolute inset-0 bg-gradient-to-t ${area.bgColor} opacity-60 group-hover:opacity-80 transition-opacity`}></div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                                            {/* Icon Badge */}
                                            <div className={`absolute top-6 right-6 w-16 h-16 bg-gradient-to-br ${area.color} rounded-2xl flex items-center justify-center text-3xl shadow-2xl border-4 border-white/30 group-hover:scale-110 group-hover:rotate-12 transition-all`}>
                                                {area.icon}
                                            </div>

                                            {/* Title Overlay */}
                                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                                <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">{area.title}</h3>
                                                <p className="text-base text-gray-200 font-semibold">{area.titleHindi}</p>
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="p-8">
                                            {/* Description */}
                                            <p className="text-gray-700 leading-relaxed mb-6 text-base">
                                                {area.description}
                                            </p>

                                            {/* Initiatives */}
                                            <div className="mb-6">
                                                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center">
                                                    <CheckCircle2 className="w-4 h-4 mr-2 text-green-600" />
                                                    Key Initiatives
                                                </h4>
                                                <div className="grid grid-cols-2 gap-2">
                                                    {area.initiatives.map((initiative, idx) => (
                                                        <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                                                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${area.color}`}></div>
                                                            <span>{initiative}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Stats & Impact */}
                                            <div className={`flex items-center justify-between pt-6 border-t-2 border-gradient-to-r ${area.color}`}>
                                                <div>
                                                    <div className={`text-2xl font-bold bg-gradient-to-r ${area.color} bg-clip-text text-transparent mb-1`}>
                                                        {area.stats}
                                                    </div>
                                                    <div className="text-xs text-gray-500 uppercase tracking-wide">
                                                        {area.impact}
                                                    </div>
                                                </div>
                                                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${area.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer`}>
                                                    <ArrowRight className="w-6 h-6 text-white" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Bottom Accent */}
                                        <div className={`h-2 bg-gradient-to-r ${area.color}`}></div>
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Custom Navigation Buttons */}
                        <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center cursor-pointer hover:bg-green-600 hover:text-white transition-all group -ml-7">
                            <ChevronLeft className="w-7 h-7 text-gray-700 group-hover:text-white" />
                        </div>
                        <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center cursor-pointer hover:bg-green-600 hover:text-white transition-all group -mr-7">
                            <ChevronRight className="w-7 h-7 text-gray-700 group-hover:text-white" />
                        </div>
                    </div>

                    {/* View All Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="text-center mt-16"
                    >
                        <a
                            href="/programs"
                            className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all"
                        >
                            <span>Explore All Programs</span>
                            <ArrowRight className="w-6 h-6" />
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Add Custom Swiper Styles */}
            <style jsx global>{`
    .focus-areas-swiper .swiper-pagination-bullet {
        width: 12px;
        height: 12px;
        background: #10b981;
        opacity: 0.3;
    }
    .focus-areas-swiper .swiper-pagination-bullet-active {
        opacity: 1;
        width: 32px;
        border-radius: 6px;
    }
`}</style>

            {/* CTA Section */}
            <div className="relative rounded-3xl overflow-hidden">
                {/* Background with overlay */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1509099836639-18ba9f7b5d3d?w=1200&q=80"
                        alt="Community"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600/95 to-blue-600/95"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 py-16 px-8 lg:px-16 text-center text-white">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">Join Our Mission to Transform Dheodha</h2>
                    <p className="text-xl mb-10 max-w-3xl mx-auto text-green-50">
                        Be part of rural Bihar's development journey. Your time, skills, and support create lasting change in our community.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="#volunteer-registration"
                            className="group bg-white text-green-600 px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all inline-flex items-center space-x-3"
                        >
                            <UserPlus className="w-6 h-6" />
                            <span>Become a Volunteer</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#donation"
                            className="bg-transparent text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all inline-flex items-center space-x-3 border-2 border-white"
                        >
                            <Heart className="w-6 h-6" />
                            <span>Support Our Work</span>
                        </a>
                    </div>

                    {/* Trust badges */}
                    <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm">
                        <div className="flex items-center space-x-2">
                            <Award className="w-5 h-5" />
                            <span>100% Transparent</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Users className="w-5 h-5" />
                            <span>Community-Driven</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <TrendingUp className="w-5 h-5" />
                            <span>Measurable Impact</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default AboutSection;
