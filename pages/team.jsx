// TeamPage.jsx - Complete Premium Team Members Page
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowLeft, Mail, Phone, Linkedin, Twitter, MapPin, Calendar,
    Award, Briefcase, GraduationCap, Heart, Users, CheckCircle,
    Star, TrendingUp, Target, Building2, Clock, Globe, Zap,
    Shield, BookOpen, Code, Sparkles, ArrowRight, Filter, Search,
    X, ExternalLink, Quote
} from 'lucide-react';
import Hero from '@/components/Hero';

const TeamPage = () => {
    const [selectedMember, setSelectedMember] = useState(null);
    const [filter, setFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const teamMembers = [
        {
            id: 1,
            name: 'Rajesh Kumar',
            role: 'President',
            category: 'leadership',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761915377/Rajesh3_au0gif.jpg',
            gradient: 'from-blue-600 via-blue-500 to-indigo-600',
            bgColor: 'bg-blue-500',
            location: 'Dheodha, Bihar',
            bio: 'श्री राजेश कुमार – एक प्रेरणास्रोत व्यक्तित्व',
            longBio: 'श्री राजेश कुमार, धेवधा ग्राम के एक दूरवर्ती निवासी होते हुए भी, अपने गांव के विकास के लिए निरंतर समर्पित हैं। वे वर्तमान में धेवधा विकास समिति के अध्यक्ष हैं और समिति की स्थापना से लेकर प्रत्येक जनहित कार्य में उनकी सक्रिय भूमिका रही है।',
            quote: '"समिति का उद्देश्य केवल विकास नहीं, बल्कि एकजुटता और जागरूकता है। हम सब मिलकर धेवधा को एक आदर्श ग्राम बना सकते हैं।"',

        },
        {
            id: 2,
            name: 'Chandan Kumar',
            role: 'Vice President',
            category: 'leadership',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761914290/ChandanPhoto_jywqnh.jpg',
            gradient: 'from-green-600 via-emerald-500 to-teal-600',
            bgColor: 'bg-green-500',
            location: 'Dheodha, Bihar',
            bio: 'श्री चंदन कुमार – धेवधा विकास समिति के वर्तमान उपाध्यक्ष',
            longBio: 'श्री चंदन कुमार, धेवधा विकास समिति के वर्तमान उपाध्यक्ष हैं। वे प्रशासनिक कार्यों में निपुणता और जनसेवा की भावना के साथ कार्य करते हैं। समिति के कई प्रयासों में उन्होंने सहयोग दिया है और ग्रामवासियों के हित में सकारात्मक भूमिका निभाई है।',
            quote: '"अगर कोई इच्छुक छात्र जिम्मेदारी लेता है तो मैं पुस्तकालय की चाबी सौंपने के लिए तैयार हूँ। यह ग्राम के युवाओं के लिए एक अवसर है।"',
        },
        {
            id: 3,
            name: 'Shree Santosh Kumar',
            role: 'Secretary',
            category: 'leadership',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1771521297/WhatsApp_Image_2026-02-19_at_10.40.23_PM_hccryy.jpg',
            gradient: 'from-purple-600 via-violet-500 to-purple-700',
            bgColor: 'bg-purple-500',
            location: 'Dheodha, Bihar',
            bio: 'श्री संतोष कुमार – समर्पित और सक्रिय ग्रामसेवक',
            longBio: 'श्री संतोष कुमार, धेवधा विकास समिति के महा सचिव के रूप में, सभी प्रशासनिक और संगठनात्मक कार्यों का कुशलतापूर्वक संचालन करते हैं। उनकी कार्यकुशलता और समर्पण समिति की सफलता का आधार है।',
            quote: '"गांव का विकास केवल योजनाओं से नहीं, बल्कि हर व्यक्ति के सक्रिय सहयोग से संभव है।"',
        },

        {
            id: 4,
            name: 'Devkant Mishra',
            role: 'Treasurer',
            category: 'leadership',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1761915355/Devkant2_dmk7sw.jpg',
            gradient: 'from-pink-600 via-rose-500 to-red-600',
            bgColor: 'bg-pink-500',
            location: 'Dheodha, Bihar',
            bio: 'श्री देवकांत मिश्रा – तकनीकी दक्षता और समाधान का पर्याय',
            longBio: 'श्री देवकांत मिश्रा, धेवधा विकास समिति के कोषाध्यक्ष और तकनीकी टीम के प्रमुख हैं। वे तकनीकी समस्याओं के समाधान, वेबसाइट प्रबंधन, और डिजिटल संचार के क्षेत्र में अत्यंत दक्ष हैं। समिति के डिजिटल प्लेटफॉर्म को सुचारू रूप से संचालित करने में उनकी भूमिका अत्यंत महत्वपूर्ण रही है।',
            quote: '"तकनीक और पारदर्शिता के माध्यम से हम समाज को एक नई दिशा दे सकते हैं।"',
        },
        {
            id: 5,
            name: 'Brajesh Kumar',
            role: 'Vice Secretary',
            category: 'leadership',
            image: 'https://res.cloudinary.com/dusalynec/image/upload/v1763231704/IMG-20251115-WA0006-Picsart-AiImageEnhancer_la6ecw.jpg',
            gradient: 'from-orange-600 via-amber-500 to-yellow-600',
            bgColor: 'bg-orange-500',
            location: 'Dheodha, Bihar',
            bio: 'श्री ब्रजेश कुमार उर्फ सिट्टू – जनसहयोग और समर्पण का प्रतीक',
            longBio: 'श्री ब्रजेश कुमार उर्फ सिट्टू, धेवधा विकास समिति के उप सचिव और विश्वसनीय सहयोगी हैं। वे न केवल समिति के कार्यों में भाग लेते हैं, बल्कि सामाजिक चंदा अभियान, जनजागरूकता, और ग्राम विकास योजनाओं में भी अग्रणी भूमिका निभाते हैं।',
            quote: '"गांव का विकास तभी संभव है जब हर व्यक्ति अपनी भूमिका निभाए – चाहे वह आर्थिक सहयोग हो या श्रमदान।"',
        }
    ];

    const stats = [
        { icon: Users, label: 'Team Members', value: '5', color: 'from-blue-600 to-indigo-600' },
        { icon: Award, label: 'Combined Experience', value: '60+ Years', color: 'from-green-600 to-emerald-600' },
        { icon: TrendingUp, label: 'Active Projects', value: '15+', color: 'from-purple-600 to-violet-600' },
        { icon: Heart, label: 'Lives Impacted', value: '10,000+', color: 'from-pink-600 to-rose-600' }
    ];

    const filters = [
        { id: 'all', label: 'All Members', count: teamMembers.length },
        { id: 'leadership', label: 'Leadership', count: teamMembers.filter(m => m.category === 'leadership').length }
    ];

    const filteredMembers = teamMembers
        .filter(member => filter === 'all' || member.category === filter)
        .filter(member =>
            searchQuery === '' ||
            member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            member.role.toLowerCase().includes(searchQuery.toLowerCase())
        );

    return (
        <>
            <Hero
                title="Our Team"
                subtitle="Meet the dedicated leaders transforming Dheodha village through innovation and community service."
                backgroundImage="https://res.cloudinary.com/dusalynec/image/upload/v1762001895/IMG_2626_jrqyt0.jpg"
            />

            <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50">
                {/* Hero Section */}
                <section className="relative py-24 overflow-hidden">
                    {/* Animated Background */}
                    <div className="absolute inset-0">
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute rounded-full opacity-10"
                                style={{
                                    width: `${200 + i * 50}px`,
                                    height: `${200 + i * 50}px`,
                                    background: `radial-gradient(circle, ${['#3b82f6', '#10b981', '#8b5cf6', '#ec4899', '#f59e0b', '#06b6d4'][i]} 0%, transparent 70%)`,
                                    left: `${10 + i * 15}%`,
                                    top: `${10 + i * 10}%`,
                                }}
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.1, 0.2, 0.1],
                                    rotate: [0, 180, 360]
                                }}
                                transition={{
                                    duration: 8 + i,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        ))}
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm border border-green-200 text-green-700 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg mb-6">
                                <Users className="w-5 h-5" />
                                <span>Leadership Team</span>
                                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">{teamMembers.length}</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
                                Meet The
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 mt-2">
                                    Changemakers
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                                Five visionary leaders who invested <strong className="text-gray-900">₹3.93 Lakhs</strong> to transform Dheodha into a model village. Each brings unique expertise and unwavering commitment to community development.
                            </p>

                            {/* Search Bar */}
                            <div className="max-w-xl mx-auto">
                                <div className="relative">
                                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search by name or role..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-14 pr-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-green-600 focus:outline-none text-gray-900 font-medium transition-all"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Stats Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 text-center group cursor-pointer"
                                >
                                    <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg`}>
                                        <stat.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                                    </div>
                                    <div className="text-3xl md:text-4xl font-black text-gray-900 mb-2">{stat.value}</div>
                                    <div className="text-xs md:text-sm text-gray-600 font-semibold">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Team Grid */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                    <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence mode="popLayout">
                            {filteredMembers.map((member, index) => (
                                <motion.div
                                    key={member.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    whileHover={{ y: -10 }}
                                    onClick={() => setSelectedMember(member)}
                                    className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                                >
                                    {/* Image Section */}
                                    <div className="relative h-80 overflow-hidden">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-t ${member.gradient} opacity-40 group-hover:opacity-60 transition-opacity`}></div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                                        {/* Role Badge */}
                                        <div className={`absolute top-6 right-6 bg-gradient-to-r ${member.gradient} text-white px-4 py-2 rounded-xl text-sm font-bold shadow-2xl border-2 border-white/30 backdrop-blur-sm`}>
                                            {member.role}
                                        </div>

                                        {/* Info */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            <h3 className="text-2xl md:text-3xl font-black text-white mb-2 drop-shadow-lg">{member.name}</h3>
                                            <div className="flex items-center space-x-2 mb-3">
                                                <MapPin className="w-4 h-4 text-gray-300" />
                                                <span className="text-sm text-gray-300">{member.location}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                                            {member.bio}
                                        </p>

                                        {/* Expertise Tags */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {member.expertise?.slice(0, 3).map((skill, idx) => (
                                                <span key={idx} className={`px-3 py-1 bg-gradient-to-r ${member.gradient} bg-opacity-10 text-xs font-semibold rounded-full border border-gray-200`}>
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>

                                        {/* View Profile Button */}
                                        <button className={`w-full bg-gradient-to-r ${member.gradient} text-white py-3 rounded-xl font-bold flex items-center justify-center space-x-2 hover:shadow-lg transition-all group`}>
                                            <span>View Full Profile</span>
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* No Results */}
                    {filteredMembers.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20"
                        >
                            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Search className="w-12 h-12 text-gray-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">No members found</h3>
                            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Member Detail Modal */}
            <AnimatePresence>
                {selectedMember && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedMember(null)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 50 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                        >
                            {/* Header */}
                            <div className="relative h-64 md:h-80">
                                <img
                                    src={selectedMember.image}
                                    alt={selectedMember.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t ${selectedMember.gradient} opacity-60`}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedMember(null)}
                                    className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                {/* Member Info */}
                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <div className={`inline-block bg-gradient-to-r ${selectedMember.gradient} text-white px-4 py-2 rounded-xl text-sm font-bold mb-4`}>
                                        {selectedMember.role}
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-black text-white mb-3">{selectedMember.name}</h2>
                                    <div className="flex items-center space-x-2 text-gray-200">
                                        <MapPin className="w-5 h-5" />
                                        <span>{selectedMember.location}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                {/* Quote */}
                                <div className={`bg-gradient-to-r ${selectedMember.gradient} bg-opacity-10 rounded-2xl p-6 mb-8 border-l-4 border-${selectedMember.bgColor}`}>
                                    <Quote className="w-8 h-8 text-gray-400 mb-3" />
                                    <p className="text-gray-700 italic text-lg leading-relaxed">
                                        {selectedMember.quote}
                                    </p>
                                </div>

                                {/* Bio */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                        <Users className="w-6 h-6 mr-2 text-green-600" />
                                        About
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {selectedMember.longBio}
                                    </p>
                                </div>

                              
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default TeamPage;
