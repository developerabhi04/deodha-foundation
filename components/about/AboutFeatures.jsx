// components/about/AboutFeatures.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Heart, Globe, Users, Award, TrendingUp, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../lib/LanguageContext';

const AboutFeatures = () => {
    const { language } = useLanguage();

    const features = [
        {
            icon: Shield,
            title: language === 'hi' ? '100% पारदर्शिता' : '100% Transparency',
            desc: language === 'hi'
                ? 'सभी वित्तीय लेन-देन और निर्णय पूर्णतः पारदर्शी और जवाबदेह।'
                : 'All financial transactions and decisions are completely transparent and accountable.',
            color: 'from-blue-600 to-indigo-600',
            gradient: 'from-blue-50 to-indigo-50'
        },
        {
            icon: Users,
            title: language === 'hi' ? 'समुदाय-संचालित' : 'Community-Driven',
            desc: language === 'hi'
                ? 'हर निर्णय समुदाय की सहमति और भागीदारी से लिया जाता है।'
                : 'Every decision is made with community consensus and participation.',
            color: 'from-green-600 to-emerald-600',
            gradient: 'from-green-50 to-emerald-50'
        },
        {
            icon: Zap,
            title: language === 'hi' ? 'तेज़ कार्यान्वयन' : 'Fast Implementation',
            desc: language === 'hi'
                ? 'परियोजनाओं का त्वरित और प्रभावी कार्यान्वयन।'
                : 'Quick and effective implementation of projects.',
            color: 'from-yellow-600 to-orange-600',
            gradient: 'from-yellow-50 to-orange-50'
        },
        {
            icon: Heart,
            title: language === 'hi' ? 'सामाजिक प्रभाव' : 'Social Impact',
            desc: language === 'hi'
                ? '10,000+ ग्रामवासियों के जीवन में सकारात्मक बदलाव।'
                : 'Positive change in the lives of 10,000+ villagers.',
            color: 'from-pink-600 to-rose-600',
            gradient: 'from-pink-50 to-rose-50'
        },
        {
            icon: Globe,
            title: language === 'hi' ? 'डिजिटल पहुंच' : 'Digital Reach',
            desc: language === 'hi'
                ? 'ऑनलाइन प्लेटफॉर्म के माध्यम से वैश्विक पहुंच और सहयोग।'
                : 'Global reach and collaboration through online platforms.',
            color: 'from-purple-600 to-violet-600',
            gradient: 'from-purple-50 to-violet-50'
        },
        {
            icon: Award,
            title: language === 'hi' ? 'गुणवत्तापूर्ण कार्य' : 'Quality Work',
            desc: language === 'hi'
                ? 'उच्च मानकों के साथ प्रत्येक परियोजना का कार्यान्वयन।'
                : 'Implementation of each project with high standards.',
            color: 'from-teal-600 to-cyan-600',
            gradient: 'from-teal-50 to-cyan-50'
        },
        {
            icon: TrendingUp,
            title: language === 'hi' ? 'सतत विकास' : 'Sustainable Growth',
            desc: language === 'hi'
                ? 'पर्यावरण के अनुकूल और दीर्घकालिक विकास मॉडल।'
                : 'Environment-friendly and long-term development model.',
            color: 'from-green-600 to-lime-600',
            gradient: 'from-green-50 to-lime-50'
        },
        {
            icon: CheckCircle,
            title: language === 'hi' ? 'प्रमाणित परिणाम' : 'Verified Results',
            desc: language === 'hi'
                ? 'सभी परियोजनाओं के परिणाम और प्रभाव का दस्तावेज़ीकरण।'
                : 'Documentation of results and impact of all projects.',
            color: 'from-indigo-600 to-blue-600',
            gradient: 'from-indigo-50 to-blue-50'
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
        >
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    {language === 'hi' ? 'हमारी विशेषताएँ' : 'What Makes Us Different'}
                </h2>
                <p className="text-lg text-gray-600">
                    {language === 'hi'
                        ? 'धेवधा विकास समिति को विशेष बनाने वाली प्रमुख विशेषताएँ'
                        : 'Key features that make Dheodha Vikas Samiti special'
                    }
                </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className={`relative bg-gradient-to-br ${feature.gradient} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-green-300 group overflow-hidden`}
                    >
                        {/* Background Gradient Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>

                        {/* Icon */}
                        <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                            <feature.icon className="w-8 h-8 text-white" />
                        </div>

                        {/* Content */}
                        <div className="relative">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Stats Section */}
            <div className="mt-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
                <div className="grid md:grid-cols-4 gap-8 text-center">
                    {[
                        { value: '₹7L', label: language === 'hi' ? 'कुल निवेश' : 'Total Investment' },
                        { value: '4', label: language === 'hi' ? 'पूर्ण परियोजनाएं' : 'Completed Projects' },
                        { value: '2', label: language === 'hi' ? 'चल रही परियोजनाएं' : 'Ongoing Projects' },
                        { value: '10K+', label: language === 'hi' ? 'लाभार्थी' : 'Beneficiaries' }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="text-4xl font-black mb-2">{stat.value}</div>
                            <div className="text-green-100 font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default AboutFeatures;
