// TeamPage.jsx - Complete Premium Team Members Page
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowLeft, Mail, Phone, Linkedin, Twitter, MapPin, Calendar,
    Award, Briefcase, GraduationCap, Heart, Users, CheckCircle,
    Star, TrendingUp, Target, Building2, Clock, Globe, Zap,
    Shield, BookOpen, Code, Sparkles, ArrowRight, Filter, Search
} from 'lucide-react';
import Link from 'next/link';

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
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80',
            gradient: 'from-blue-600 via-blue-500 to-indigo-600',
            bgColor: 'bg-blue-500',
            email: 'rajesh@dheodhavikas.org',
            phone: '+91 98765 43210',
            location: 'Dheodha, Bihar',
            joinDate: 'August 2, 2025',
            investment: '₹78,600',
            bio: 'Visionary leader with 15+ years of experience in rural development and community empowerment. Leading the transformation of Dheodha into a model village through strategic planning and transparent governance.',
            longBio: 'With a deep-rooted connection to Dheodha and extensive experience in social entrepreneurship, Rajesh Kumar brings strategic vision and operational excellence to the organization. His leadership philosophy centers on empowering communities through education, technology, and sustainable practices. Under his guidance, Dheodha Vikas Samiti has established transparent governance frameworks and data-driven decision-making processes.',
            expertise: ['Strategic Leadership', 'Rural Development', 'Community Engagement', 'Policy Advocacy', 'Sustainable Development', 'Digital Transformation'],
            achievements: [
                'Founded Dheodha Vikas Samiti with vision to create model village',
                'Led investment of ₹3.93L in community development',
                'Established transparent governance framework',
                'Implemented digital platforms for community engagement',
                'Launched education programs benefiting 500+ students',
                'Awarded Best Community Leader - Bihar 2024'
            ],
            education: 'MBA in Rural Management, Delhi University',
            previousRole: 'Director, Rural Development NGO',
            skills: ['Leadership', 'Strategy', 'Public Speaking', 'Fundraising'],
            languages: ['Hindi', 'English', 'Bhojpuri'],
            quote: 'Every village has the potential to become self-sufficient and prosperous. Our role is to unlock that potential through community-driven innovation.',
            socialLinks: {
                linkedin: 'https://linkedin.com/in/rajesh-kumar',
                twitter: 'https://twitter.com/rajeshkumar',
                email: 'rajesh@dheodhavikas.org'
            },
            availability: 'Available for consultations',
            focusAreas: ['Education', 'Infrastructure', 'Digital Governance']
        },
        {
            id: 2,
            name: 'Chandan Kumar',
            role: 'Vice President',
            category: 'leadership',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80',
            gradient: 'from-green-600 via-emerald-500 to-teal-600',
            bgColor: 'bg-green-500',
            email: 'chandan@dheodhavikas.org',
            phone: '+91 98765 43211',
            location: 'Dheodha, Bihar',
            joinDate: 'August 2, 2025',
            investment: '₹78,600',
            bio: 'Agricultural expert passionate about sustainable farming and farmer empowerment. Dedicated to bringing modern farming techniques and organic practices to rural Bihar.',
            longBio: 'A second-generation farmer turned agricultural innovator, Chandan Kumar combines traditional farming wisdom with modern scientific approaches. His work focuses on sustainable agriculture, water conservation, and creating market linkages for small farmers. He believes that empowering farmers is the cornerstone of rural prosperity.',
            expertise: ['Sustainable Agriculture', 'Organic Farming', 'Water Management', 'Farmer Training', 'Crop Diversification', 'Market Linkages'],
            achievements: [
                'Trained 300+ farmers in modern agricultural techniques',
                'Introduced organic farming practices in 15 villages',
                'Implemented water conservation systems reducing usage by 40%',
                'Established farmer cooperatives for better market access',
                'Developed crop diversification programs',
                'Recognized as Progressive Farmer - National Award 2024'
            ],
            education: 'B.Sc. Agriculture, Bihar Agricultural University',
            previousRole: 'Agricultural Extension Officer',
            skills: ['Agronomy', 'Soil Science', 'Community Mobilization'],
            languages: ['Hindi', 'English', 'Maithili'],
            quote: 'Empowering farmers with knowledge and technology is the path to rural prosperity and food security.',
            socialLinks: {
                linkedin: 'https://linkedin.com/in/chandan-kumar',
                twitter: 'https://twitter.com/chandankumar'
            },
            availability: 'Conducts weekly farmer workshops',
            focusAreas: ['Agriculture', 'Water Conservation', 'Farmer Welfare']
        },
        {
            id: 3,
            name: 'Mitendra Kumar',
            role: 'Secretary',
            category: 'leadership',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80',
            gradient: 'from-purple-600 via-violet-500 to-purple-700',
            bgColor: 'bg-purple-500',
            email: 'mitendra@dheodhavikas.org',
            phone: '+91 98765 43212',
            location: 'Dheodha, Bihar',
            joinDate: 'August 2, 2025',
            investment: '₹78,600',
            bio: 'Operations expert ensuring transparent governance and efficient management. Specializes in organizational development and community engagement.',
            longBio: 'With a background in organizational management and legal compliance, Mitendra Kumar ensures that Dheodha Vikas Samiti operates with complete transparency and accountability. He has established robust documentation systems, community feedback mechanisms, and regular reporting frameworks that keep all stakeholders informed.',
            expertise: ['Operations Management', 'Legal Compliance', 'Documentation', 'Stakeholder Relations', 'Process Optimization', 'Governance Frameworks'],
            achievements: [
                'Established comprehensive governance and compliance framework',
                'Managed ₹3.93L investment with 100% transparency',
                'Coordinated 50+ community meetings and consultations',
                'Implemented digital record-keeping and reporting systems',
                'Created stakeholder communication protocols',
                'Achieved zero discrepancy in financial audits'
            ],
            education: 'M.Com, LLB - Patna University',
            previousRole: 'Company Secretary, Corporate Sector',
            skills: ['Administration', 'Legal Affairs', 'Documentation'],
            languages: ['Hindi', 'English'],
            quote: 'Transparency and accountability are not just principles—they are the foundation of community trust.',
            socialLinks: {
                linkedin: 'https://linkedin.com/in/mitendra-kumar'
            },
            availability: 'Office hours: Mon-Sat 10AM-5PM',
            focusAreas: ['Governance', 'Operations', 'Compliance']
        },
        {
            id: 4,
            name: 'Devkant Mishra',
            role: 'Treasurer',
            category: 'leadership',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80',
            gradient: 'from-pink-600 via-rose-500 to-red-600',
            bgColor: 'bg-pink-500',
            email: 'devkant@dheodhavikas.org',
            phone: '+91 98765 43213',
            location: 'Dheodha, Bihar',
            joinDate: 'August 2, 2025',
            investment: '₹78,600',
            bio: 'Financial expert managing funds with complete transparency. Ensuring every rupee creates maximum impact for the community.',
            longBio: 'A chartered accountant with expertise in financial management and audit, Devkant Mishra brings corporate-level financial discipline to community development. His meticulous approach to fund management ensures optimal resource allocation and maximum community impact. He champions financial transparency as a cornerstone of community trust.',
            expertise: ['Financial Management', 'Budget Planning', 'Audit & Compliance', 'Fund Allocation', 'Financial Analysis', 'Cost Optimization'],
            achievements: [
                'Maintained 100% financial transparency with public records',
                'Reduced operational costs by 25% through optimization',
                'Implemented digital payment and tracking systems',
                'Secured additional funding from government schemes',
                'Created detailed financial dashboards for stakeholders',
                'Published quarterly financial reports with zero discrepancies'
            ],
            education: 'CA, MBA Finance - ICAI & IIM Lucknow',
            previousRole: 'Senior Finance Manager, MNC',
            skills: ['Accounting', 'Financial Planning', 'Taxation'],
            languages: ['Hindi', 'English'],
            quote: 'Every penny invested in the community is a seed for future prosperity. Financial stewardship is sacred responsibility.',
            socialLinks: {
                linkedin: 'https://linkedin.com/in/devkant-mishra'
            },
            availability: 'Financial consultations by appointment',
            focusAreas: ['Finance', 'Budgeting', 'Fund Management']
        },
        {
            id: 5,
            name: 'Brajesh Kumar',
            role: 'Vice Secretary',
            category: 'leadership',
            image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&q=80',
            gradient: 'from-orange-600 via-amber-500 to-yellow-600',
            bgColor: 'bg-orange-500',
            email: 'brajesh@dheodhavikas.org',
            phone: '+91 98765 43214',
            location: 'Dheodha, Bihar',
            joinDate: 'August 2, 2025',
            investment: '₹78,600',
            bio: 'Education advocate focused on youth development and digital literacy. Building the future through quality education and technology access.',
            longBio: 'Combining technology expertise with educational passion, Brajesh Kumar leads initiatives to bridge the digital divide in rural Bihar. His programs focus on making quality education accessible through technology, establishing digital libraries, and training youth in 21st-century skills. He envisions a future where rural students have the same opportunities as their urban counterparts.',
            expertise: ['Education Programs', 'Digital Literacy', 'Youth Development', 'Technology Integration', 'Curriculum Design', 'Teacher Training'],
            achievements: [
                'Organized 20+ educational workshops and training sessions',
                'Engaged 500+ students in educational programs',
                'Established digital library with 1000+ e-learning resources',
                'Created scholarship programs for meritorious students',
                'Launched coding and digital literacy programs',
                'Trained 50+ teachers in modern teaching methodologies'
            ],
            education: 'M.Ed, B.Tech Computer Science',
            previousRole: 'IT Manager & Education Consultant',
            skills: ['Education Technology', 'Program Management', 'Youth Mentoring'],
            languages: ['Hindi', 'English'],
            quote: 'Education is the most powerful weapon we can use to change the world. Technology makes it accessible to all.',
            socialLinks: {
                linkedin: 'https://linkedin.com/in/brajesh-kumar',
                twitter: 'https://twitter.com/brajeshkumar'
            },
            availability: 'Conducts weekend digital literacy sessions',
            focusAreas: ['Education', 'Digital Literacy', 'Youth Programs']
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

                        <h1 className="text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
                            Meet The
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 mt-2">
                                Changemakers
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
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
                                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center group cursor-pointer"
                            >
                                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg`}>
                                    <stat.icon className="w-8 h-8 text-white" />
                                </div>
                                <div className="text-4xl font-black text-gray-900 mb-2">{stat.value}</div>
                                <div className="text-sm text-gray-600 font-semibold">{stat.label}</div>
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
                                        <h3 className="text-3xl font-black text-white mb-2 drop-shadow-lg">{member.name}</h3>
                                        <div className="flex items-center space-x-2 mb-3">
                                            <MapPin className="w-4 h-4 text-gray-300" />
                                            <span className="text-sm text-gray-300">{member.location}</span>
                                        </div>
                                        <div className={`h-1.5 w-24 bg-gradient-to-r ${member.gradient} rounded-full shadow-lg`}></div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                                        {member.bio}
                                    </p>

                                    {/* Expertise Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {member.expertise.slice(0, 3).map((skill, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-bold"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                        {member.expertise.length > 3 && (
                                            <span className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-xs font-bold">
                                                +{member.expertise.length - 3} more
                                            </span>
                                        )}
                                    </div>

                                    {/* Actions */}
                                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                                        <div className="flex items-center space-x-3">
                                            <a
                                                href={`mailto:${member.email}`}
                                                onClick={(e) => e.stopPropagation()}
                                                className={`w-11 h-11 rounded-xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white hover:scale-110 transition-all shadow-lg`}
                                            >
                                                <Mail className="w-5 h-5" />
                                            </a>
                                            {member.socialLinks?.linkedin && (
                                                <a
                                                    href={member.socialLinks.linkedin}
                                                    onClick={(e) => e.stopPropagation()}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:scale-110 transition-all"
                                                >
                                                    <Linkedin className="w-5 h-5" />
                                                </a>
                                            )}
                                        </div>
                                        <button className="text-sm font-bold text-green-600 hover:text-green-700 flex items-center space-x-2 group/btn">
                                            <span>View Profile</span>
                                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
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

            {/* Detail Modal */}
            <AnimatePresence>
                {selectedMember && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedMember(null)}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 50 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-3xl max-w-5xl w-full max-h-[95vh] overflow-y-auto shadow-2xl my-8"
                        >
                            {/* Modal Header */}
                            <div className="relative h-80 overflow-hidden">
                                <img
                                    src={selectedMember.image}
                                    alt={selectedMember.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t ${selectedMember.gradient} opacity-70`}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                                <button
                                    onClick={() => setSelectedMember(null)}
                                    className="absolute top-6 right-6 w-14 h-14 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all group"
                                >
                                    <span className="text-2xl group-hover:rotate-90 transition-transform">×</span>
                                </button>

                                <div className="absolute bottom-0 left-0 right-0 p-10">
                                    <div className={`inline-block bg-gradient-to-r ${selectedMember.gradient} text-white px-5 py-2 rounded-xl text-sm font-bold mb-4 shadow-xl`}>
                                        {selectedMember.role}
                                    </div>
                                    <h2 className="text-5xl font-black text-white mb-4">{selectedMember.name}</h2>
                                    <div className="flex flex-wrap items-center gap-6 text-gray-200">
                                        <div className="flex items-center space-x-2">
                                            <MapPin className="w-5 h-5" />
                                            <span className="text-sm font-medium">{selectedMember.location}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Calendar className="w-5 h-5" />
                                            <span className="text-sm font-medium">Joined {selectedMember.joinDate}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Award className="w-5 h-5" />
                                            <span className="text-sm font-medium">Investment: {selectedMember.investment}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="p-10">
                                {/* Quote */}
                                <div className={`bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 mb-10 border-l-4 bg-gradient-to-r ${selectedMember.gradient}`}>
                                    <Sparkles className="w-8 h-8 text-green-600 mb-4" />
                                    <p className="text-xl text-gray-700 italic leading-relaxed">"{selectedMember.quote}"</p>
                                </div>

                                <div className="grid lg:grid-cols-3 gap-10">
                                    {/* Left Column */}
                                    <div className="lg:col-span-2 space-y-10">
                                        {/* About */}
                                        <div>
                                            <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center">
                                                <Users className="w-6 h-6 mr-3 text-green-600" />
                                                About
                                            </h3>
                                            <p className="text-gray-700 leading-relaxed text-lg">{selectedMember.longBio}</p>
                                        </div>

                                        {/* Expertise */}
                                        <div>
                                            <h3 className="text-2xl font-black text-gray-900 mb-5 flex items-center">
                                                <Briefcase className="w-6 h-6 mr-3 text-green-600" />
                                                Areas of Expertise
                                            </h3>
                                            <div className="grid grid-cols-2 gap-3">
                                                {selectedMember.expertise.map((skill, idx) => (
                                                    <div
                                                        key={idx}
                                                        className={`px-5 py-3 bg-gradient-to-r ${selectedMember.gradient} text-white rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all hover:scale-105`}
                                                    >
                                                        {skill}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Achievements */}
                                        <div>
                                            <h3 className="text-2xl font-black text-gray-900 mb-5 flex items-center">
                                                <Award className="w-6 h-6 mr-3 text-green-600" />
                                                Key Achievements
                                            </h3>
                                            <div className="space-y-4">
                                                {selectedMember.achievements.map((achievement, idx) => (
                                                    <div key={idx} className="flex items-start space-x-4 group">
                                                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${selectedMember.gradient} flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform`}>
                                                            <CheckCircle className="w-5 h-5 text-white" />
                                                        </div>
                                                        <span className="text-gray-700 leading-relaxed">{achievement}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Column - Sidebar */}
                                    <div className="space-y-6">
                                        {/* Education */}
                                        <div className="bg-gray-50 rounded-2xl p-6">
                                            <GraduationCap className="w-8 h-8 text-green-600 mb-3" />
                                            <h4 className="font-bold text-gray-900 mb-2">Education</h4>
                                            <p className="text-gray-700 text-sm">{selectedMember.education}</p>
                                        </div>

                                        {/* Previous Role */}
                                        {selectedMember.previousRole && (
                                            <div className="bg-gray-50 rounded-2xl p-6">
                                                <Briefcase className="w-8 h-8 text-green-600 mb-3" />
                                                <h4 className="font-bold text-gray-900 mb-2">Previous Role</h4>
                                                <p className="text-gray-700 text-sm">{selectedMember.previousRole}</p>
                                            </div>
                                        )}

                                        {/* Languages */}
                                        <div className="bg-gray-50 rounded-2xl p-6">
                                            <Globe className="w-8 h-8 text-green-600 mb-3" />
                                            <h4 className="font-bold text-gray-900 mb-3">Languages</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedMember.languages.map((lang, idx) => (
                                                    <span key={idx} className="px-3 py-1 bg-white text-gray-700 rounded-lg text-xs font-bold border border-gray-200">
                                                        {lang}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Focus Areas */}
                                        <div className="bg-gray-50 rounded-2xl p-6">
                                            <Target className="w-8 h-8 text-green-600 mb-3" />
                                            <h4 className="font-bold text-gray-900 mb-3">Focus Areas</h4>
                                            <div className="space-y-2">
                                                {selectedMember.focusAreas.map((area, idx) => (
                                                    <div key={idx} className="flex items-center space-x-2">
                                                        <div className="w-2 h-2 rounded-full bg-green-600"></div>
                                                        <span className="text-gray-700 text-sm">{area}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Availability */}
                                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                                            <Clock className="w-8 h-8 text-green-600 mb-3" />
                                            <h4 className="font-bold text-gray-900 mb-2">Availability</h4>
                                            <p className="text-gray-700 text-sm">{selectedMember.availability}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Actions */}
                                <div className="flex flex-wrap gap-4 mt-10 pt-10 border-t border-gray-200">
                                    <a
                                        href={`mailto:${selectedMember.email}`}
                                        className={`flex items-center space-x-3 bg-gradient-to-r ${selectedMember.gradient} text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl hover:scale-105 transition-all`}
                                    >
                                        <Mail className="w-5 h-5" />
                                        <span>Send Email</span>
                                    </a>
                                    <a
                                        href={`tel:${selectedMember.phone}`}
                                        className="flex items-center space-x-3 bg-gray-100 text-gray-900 px-8 py-4 rounded-2xl font-bold hover:bg-gray-200 hover:scale-105 transition-all"
                                    >
                                        <Phone className="w-5 h-5" />
                                        <span>Call Now</span>
                                    </a>
                                    {selectedMember.socialLinks?.linkedin && (
                                        <a
                                            href={selectedMember.socialLinks.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-3 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 hover:scale-105 transition-all"
                                        >
                                            <Linkedin className="w-5 h-5" />
                                            <span>LinkedIn</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default TeamPage;
