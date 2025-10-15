import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';





// Community Programs Section with Advanced Slider
const ProgramsSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const programs = [
        {
            id: 'education',
            title: 'Education Programs',
            titleHindi: 'शैक्षिक कार्यक्रम',
            icon: '📚',
            image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80',
            gradient: 'from-blue-500 to-indigo-600',
            bgGradient: 'from-blue-50 to-indigo-50',
            borderColor: 'border-blue-100',
            iconColor: 'text-blue-600',
            description: 'Improving school quality, digital library setup, after-school tuition, and student awareness campaigns to transform education in Dheodha.',
            initiatives: [
                'Digital library with e-learning resources',
                'Free after-school tuition support',
                'Teacher training and engagement',
                'Scholarship programs for meritorious students'
            ],
            beneficiaries: '500+ students',
            impact: 'Enhanced learning outcomes'
        },
        {
            id: 'health',
            title: 'Health & Hygiene',
            titleHindi: 'स्वास्थ्य और स्वच्छता',
            icon: '🏥',
            image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
            gradient: 'from-red-500 to-pink-600',
            bgGradient: 'from-red-50 to-pink-50',
            borderColor: 'border-red-100',
            iconColor: 'text-red-600',
            description: 'Regular health camps, hygiene awareness, nutrition education, and advocacy for healthcare infrastructure in Dheodha.',
            initiatives: [
                'Quarterly health camps with free check-ups',
                'Hygiene and sanitation awareness',
                'Maternal and child health focus',
                'Medicine distribution programs'
            ],
            beneficiaries: '1,000+ villagers',
            impact: 'Improved health outcomes'
        },
        {
            id: 'women-empowerment',
            title: 'Women Empowerment',
            titleHindi: 'महिला सशक्तिकरण',
            icon: '👩‍🏫',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
            gradient: 'from-pink-500 to-purple-600',
            bgGradient: 'from-pink-50 to-purple-50',
            borderColor: 'border-pink-100',
            iconColor: 'text-pink-600',
            description: 'Skill development, safety initiatives, self-help groups, and leadership training empowering women in Dheodha.',
            initiatives: [
                'Vocational training in sewing and handicrafts',
                'Self-help group formation and microfinance',
                'Safety awareness and leadership development',
                'Women entrepreneurship support'
            ],
            beneficiaries: '200+ women',
            impact: 'Economic independence'
        },
        {
            id: 'cultural-revival',
            title: 'Cultural Revival',
            titleHindi: 'सांस्कृतिक पुनरुत्थान',
            icon: '🎭',
            image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80',
            gradient: 'from-purple-500 to-indigo-600',
            bgGradient: 'from-purple-50 to-indigo-50',
            borderColor: 'border-purple-100',
            iconColor: 'text-purple-600',
            description: 'Reviving Rastriya Natya Kala Parishad, traditional folk arts, and organizing cultural festivals celebrating Dheodha\'s rich heritage.',
            initiatives: [
                'Revival of Rastriya Natya Kala Parishad',
                'Durga Puja "डोमरा-डुमरी का नाच" performances',
                'Youth training in traditional arts',
                'Cultural festival organization'
            ],
            beneficiaries: 'Entire village',
            impact: 'Heritage preservation'
        },
        {
            id: 'agriculture',
            title: 'Agriculture Development',
            titleHindi: 'कृषि विकास',
            icon: '🌾',
            image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80',
            gradient: 'from-green-500 to-emerald-600',
            bgGradient: 'from-green-50 to-emerald-50',
            borderColor: 'border-green-100',
            iconColor: 'text-green-600',
            description: 'Modern farming techniques, organic practices, crop diversification, and farmer training for sustainable agriculture.',
            initiatives: [
                'Organic farming training workshops',
                'Modern irrigation techniques',
                'Crop diversification guidance',
                'Market linkage support'
            ],
            beneficiaries: '300+ farmers',
            impact: 'Increased crop yield'
        },
        {
            id: 'digital',
            title: 'Digital Transformation',
            titleHindi: 'डिजिटल परिवर्तन',
            icon: '💻',
            image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80',
            gradient: 'from-indigo-500 to-blue-600',
            bgGradient: 'from-indigo-50 to-blue-50',
            borderColor: 'border-indigo-100',
            iconColor: 'text-indigo-600',
            description: 'Digital literacy programs, online platforms, e-governance, and technology adoption for village development.',
            initiatives: [
                'Digital literacy training',
                'E-governance implementation',
                'Village website and social media',
                'Online community platforms'
            ],
            beneficiaries: 'All age groups',
            impact: 'Digital empowerment'
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % programs.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + programs.length) % programs.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <section id="programs" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Community Programs</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Comprehensive initiatives addressing education, health, empowerment, and cultural revival
                    </p>
                </div>

                {/* Advanced Custom Slider */}
                <div className="relative mb-16">
                    {/* Main Slider Content */}
                    <div className="relative overflow-hidden rounded-3xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                                className={`bg-gradient-to-br ${programs[currentSlide].bgGradient} border ${programs[currentSlide].borderColor}`}
                            >
                                <div className="grid lg:grid-cols-2 gap-8 items-center">
                                    {/* Image Section */}
                                    <div className="relative h-96 lg:h-[500px] overflow-hidden lg:rounded-l-3xl">
                                        <img
                                            src={programs[currentSlide].image}
                                            alt={programs[currentSlide].title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-t ${programs[currentSlide].gradient} opacity-40`}></div>
                                        <div className="absolute top-6 left-6">
                                            <div className="text-6xl bg-white/20 backdrop-blur-sm p-4 rounded-2xl border-2 border-white/30">
                                                {programs[currentSlide].icon}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-8 lg:p-12">
                                        <div className="mb-4">
                                            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                                                {programs[currentSlide].title}
                                            </h3>
                                            <p className="text-lg text-gray-600 font-semibold">
                                                {programs[currentSlide].titleHindi}
                                            </p>
                                        </div>

                                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                            {programs[currentSlide].description}
                                        </p>

                                        {/* Initiatives List */}
                                        <div className="mb-6">
                                            <h4 className="text-sm font-bold text-gray-500 uppercase mb-3">Key Initiatives</h4>
                                            <ul className="space-y-3">
                                                {programs[currentSlide].initiatives.map((initiative, idx) => (
                                                    <li key={idx} className="flex items-start space-x-3">
                                                        <ChevronRight className={`w-5 h-5 ${programs[currentSlide].iconColor} mt-0.5 flex-shrink-0`} />
                                                        <span className="text-gray-700">{initiative}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Stats */}
                                        <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                                            <div>
                                                <div className="text-sm text-gray-600 mb-1">Beneficiaries</div>
                                                <div className={`text-xl font-bold bg-gradient-to-r ${programs[currentSlide].gradient} bg-clip-text text-transparent`}>
                                                    {programs[currentSlide].beneficiaries}
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-sm text-gray-600 mb-1">Impact</div>
                                                <div className={`text-xl font-bold bg-gradient-to-r ${programs[currentSlide].gradient} bg-clip-text text-transparent`}>
                                                    {programs[currentSlide].impact}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center hover:bg-gray-100 transition-all group"
                    >
                        <ChevronLeft className="w-7 h-7 text-gray-700 group-hover:scale-110 transition-transform" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center hover:bg-gray-100 transition-all group"
                    >
                        <ChevronRight className="w-7 h-7 text-gray-700 group-hover:scale-110 transition-transform" />
                    </button>

                    {/* Dot Indicators */}
                    <div className="flex justify-center space-x-3 mt-8">
                        {programs.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all ${currentSlide === index
                                        ? 'w-12 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full'
                                        : 'w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Program Cards Grid - Quick Access */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {programs.map((program, index) => (
                        <button
                            key={program.id}
                            onClick={() => goToSlide(index)}
                            className={`p-4 rounded-xl border-2 transition-all ${currentSlide === index
                                    ? `border-transparent bg-gradient-to-br ${program.gradient} text-white shadow-lg scale-105`
                                    : `border-gray-200 bg-white hover:border-gray-300 hover:shadow-md`
                                }`}
                        >
                            <div className="text-3xl mb-2">{program.icon}</div>
                            <div className={`text-sm font-semibold ${currentSlide === index ? 'text-white' : 'text-gray-900'}`}>
                                {program.title.split(' ')[0]}
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProgramsSection;
