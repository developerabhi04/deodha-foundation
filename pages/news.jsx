// pages/News.jsx - Complete with Full Hindi/English Translation
import React from 'react';
import Hero from '@/components/Hero';
import NewsSection from '../pages/home/news';
import { Calendar, Users, MapPin, TrendingUp, Heart, Award } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';
import ProjectsSection from './home/project';

const News = () => {
    const { language } = useLanguage();

    const newsUpdates = [
        {
            id: 1,
            category: language === 'hi' ? 'बुनियादी ढांचा' : 'Infrastructure',
            title: language === 'hi' ? 'मुख्य द्वार सौंदर्यीकरण परियोजना प्रगति पर' : 'Main Gate Beautification Project Underway',
            date: language === 'hi' ? 'नवंबर 2025' : 'November 2025',
            status: language === 'hi' ? 'चल रहा है' : 'Ongoing',
            description: language === 'hi'
                ? 'गांव के प्रवेश द्वार (स्वागत द्वार) के लिए निर्माण और डिज़ाइन का कार्य अच्छी तरह से आगे बढ़ रहा है। यह प्रतिष्ठित संरचना आगंतुकों का स्वागत करेगी और गांव के गौरव को बढ़ाएगी।'
                : 'Construction and design finalization for the village entrance gate (स्वागत द्वार) is progressing well. This iconic structure will welcome visitors and boost village pride.',
            details: language === 'hi' ? [
                'बजट: ₹2.42 लाख (समुदाय द्वारा वित्त पोषित, स्थानीय नेताओं के आंशिक समर्थन के साथ)',
                'समय-सीमा: 20-25 दिन',
                'अपेक्षित पूर्णता: दिसंबर 2025'
            ] : [
                'Budget: ₹2.42 lakh (community-funded with partial support from local leaders)',
                'Timeline: 20–25 days',
                'Expected completion: December 2025'
            ],
            image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
            icon: <Award className="w-6 h-6" />
        },
        {
            id: 2,
            category: language === 'hi' ? 'समुदाय' : 'Community',
            title: language === 'hi' ? 'सड़क मरम्मत और नाली सफाई सफलतापूर्वक पूर्ण' : 'Road Repair & Drainage Cleaning Successfully Completed',
            date: language === 'hi' ? 'अगस्त 2025' : 'August 2025',
            status: language === 'hi' ? 'पूर्ण' : 'Completed',
            description: language === 'hi'
                ? '22 दिनों के समर्पित सामुदायिक प्रयास के बाद, प्रमुख सड़क मरम्मत और नाली सफाई परियोजना पूरी हो गई है, जिससे जल भराव समाप्त हुआ और आवागमन में सुधार हुआ।'
                : 'After 22 days of dedicated community effort, the major road repair and drainage cleaning project has been completed, eliminating waterlogging and improving mobility.',
            details: language === 'hi' ? [
                'कुल बजट: ₹1,51,000',
                'अवधि: 22 दिन',
                'प्रभाव: स्वच्छता में सुधार और मच्छर प्रजनन में कमी'
            ] : [
                'Total Budget: ₹1,51,000',
                'Duration: 22 days',
                'Impact: Improved hygiene and reduced mosquito breeding'
            ],
            image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
            icon: <TrendingUp className="w-6 h-6" />
        },
        {
            id: 3,
            category: language === 'hi' ? 'शिक्षा' : 'Education',
            title: language === 'hi' ? 'डिजिटल पुस्तकालय पहल शुरू' : 'Digital Library Initiative Launched',
            date: language === 'hi' ? 'अक्टूबर 2025' : 'October 2025',
            status: language === 'hi' ? 'योजना' : 'Planning',
            description: language === 'hi'
                ? 'छात्रों के लिए ई-लर्निंग संसाधनों और इंटरनेट एक्सेस से सुसज्जित एक डिजिटल पुस्तकालय स्थापित करने की योजना चल रही है, जो धेवधा में शिक्षा में क्रांति लाएगा।'
                : 'Plans are underway to establish a digital library equipped with e-learning resources and internet access for students, revolutionizing education in Dheodha.',
            details: language === 'hi' ? [
                'सभी कक्षाओं के लिए ई-लर्निंग संसाधन',
                'छात्रों के लिए कंप्यूटर प्रशिक्षण',
                'अनुसंधान के लिए इंटरनेट कनेक्टिविटी'
            ] : [
                'E-learning resources for all grades',
                'Computer training for students',
                'Internet connectivity for research'
            ],
            image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80',
            icon: <Users className="w-6 h-6" />
        },
        {
            id: 4,
            category: language === 'hi' ? 'सांस्कृतिक' : 'Cultural',
            title: language === 'hi' ? 'राष्ट्रीय नाट्य कला परिषद का पुनरुद्धार' : 'Revival of National Natya Kala Parishad',
            date: language === 'hi' ? 'सितंबर 2025' : 'September 2025',
            status: language === 'hi' ? 'चल रहा है' : 'Ongoing',
            description: language === 'hi'
                ? 'ऐतिहासिक राष्ट्रीय नाट्य कला परिषद को पारंपरिक लोक नाटक को संरक्षित करने के लिए पुनर्जीवित किया जा रहा है, जिसमें दुर्गा पूजा के दौरान प्रसिद्ध "डोमरा-डुमरी का नाच" शामिल है।'
                : 'The historic National Natya Kala Parishad is being revived to preserve traditional folk drama, including the famous "डोमरा-डुमरी का नाच" during Durga Puja.',
            details: language === 'hi' ? [
                'लोक नाटक और पारंपरिक प्रदर्शन',
                'युवाओं की भागीदारी को प्रोत्साहन',
                'वार्षिक सांस्कृतिक महोत्सव की योजना'
            ] : [
                'Folk drama and traditional performances',
                'Youth participation encouraged',
                'Annual cultural festival planned'
            ],
            image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80',
            icon: <Heart className="w-6 h-6" />
        },
        {
            id: 5,
            category: language === 'hi' ? 'स्वास्थ्य' : 'Health',
            title: language === 'hi' ? 'निःशुल्क स्वास्थ्य शिविर की योजना' : 'Free Health Camp Scheduled',
            date: language === 'hi' ? 'दिसंबर 2025' : 'December 2025',
            status: language === 'hi' ? 'आगामी' : 'Upcoming',
            description: language === 'hi'
                ? 'सभी ग्रामवासियों के लिए निःशुल्क जांच, पोषण जागरूकता और बुनियादी चिकित्सा सेवाओं वाला एक व्यापक स्वास्थ्य शिविर आयोजित किया जाएगा।'
                : 'A comprehensive health camp will be organized featuring free check-ups, nutrition awareness, and basic medical services for all villagers.',
            details: language === 'hi' ? [
                'बुनियादी स्वास्थ्य जांच',
                'पोषण और स्वच्छता जागरूकता',
                'सामान्य बीमारियों के लिए निःशुल्क दवाइयां'
            ] : [
                'Basic health check-ups',
                'Nutrition and hygiene awareness',
                'Free medicines for common ailments'
            ],
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
            icon: <MapPin className="w-6 h-6" />
        }
    ];

    const announcements = [
        {
            date: language === 'hi' ? '15 नवं 2025' : '15 Nov 2025',
            title: language === 'hi' ? 'मासिक सामुदायिक बैठक' : 'Monthly Community Meeting',
            description: language === 'hi'
                ? 'आगामी परियोजनाओं और पहलों पर चर्चा करने के लिए मासिक योजना बैठक में शामिल हों।'
                : 'Join us for the monthly planning meeting to discuss upcoming projects and initiatives.'
        },
        {
            date: language === 'hi' ? '20 नवं 2025' : '20 Nov 2025',
            title: language === 'hi' ? 'स्वयंसेवक पंजीकरण खुला' : 'Volunteer Registration Open',
            description: language === 'hi'
                ? 'हम शिक्षा और सांस्कृतिक कार्यक्रमों के लिए उत्साही स्वयंसेवकों की तलाश कर रहे हैं।'
                : 'We are looking for passionate volunteers for education and cultural programs.'
        },
        {
            date: language === 'hi' ? '25 नवं 2025' : '25 Nov 2025',
            title: language === 'hi' ? 'दुर्गा पूजा सांस्कृतिक कार्यक्रम' : 'Durga Puja Cultural Program',
            description: language === 'hi'
                ? 'पारंपरिक लोक नाटक और सांस्कृतिक प्रदर्शन। सभी का स्वागत है!'
                : 'Traditional folk drama and cultural performances. Everyone is welcome!'
        }
    ];

    const getStatusColor = (status) => {
        const statusEn = language === 'hi' 
            ? (status === 'पूर्ण' ? 'Completed' : status === 'चल रहा है' ? 'Ongoing' : status === 'योजना' ? 'Planning' : status === 'आगामी' ? 'Upcoming' : status)
            : status;
            
        switch (statusEn) {
            case 'Completed':
                return 'bg-green-100 text-green-700 border-green-300';
            case 'Ongoing':
                return 'bg-blue-100 text-blue-700 border-blue-300';
            case 'Planning':
                return 'bg-yellow-100 text-yellow-700 border-yellow-300';
            case 'Upcoming':
                return 'bg-purple-100 text-purple-700 border-purple-300';
            default:
                return 'bg-gray-100 text-gray-700 border-gray-300';
        }
    };

    const impactStats = [
        {
            number: '₹4.22L',
            label: language === 'hi' ? 'कुल फंड संग्रहित' : 'Total Funds Raised'
        },
        
        {
            number: '5+',
            label: language === 'hi' ? 'परियोजनाएं पूर्ण' : 'Projects Completed'
        },
        {
            number: '100%',
            label: language === 'hi' ? 'पारदर्शिता' : 'Transparency'
        }
    ];

    return (
        <>
            <Hero
                title={language === 'hi' ? 'समाचार और अपडेट' : 'News & Updates'}
                subtitle={language === 'hi'
                    ? 'धेवधा विकास समिति से नवीनतम समाचार, कहानियां और अपडेट के साथ अपडेट रहें।'
                    : 'Stay informed with the latest news, stories, and updates from Dheodha Vikas Samiti.'
                }
                backgroundImage="https://res.cloudinary.com/dusalynec/image/upload/v1762001895/IMG_2628_gsbsju.jpg"
            />

            <div className="bg-gradient-to-b from-gray-50 to-white">
                {/* NewsSection Component - Compact News Ticker & Quick Updates */}
                <NewsSection />

                {/* Latest Updates Section */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-black text-gray-900 mb-4">
                                {language === 'hi' ? 'विस्तृत अपडेट' : 'Detailed Updates'}
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                {language === 'hi'
                                    ? 'धेवधा गांव को बदलने वाली चल रही और पूर्ण परियोजनाओं की खोज करें'
                                    : 'Discover the ongoing and completed projects transforming Dheodha village'
                                }
                            </p>
                        </div>

                        
                    </div>
                </section>

                {/* Announcements Section */}
                <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-black text-gray-900 mb-4">
                                {language === 'hi' ? 'आगामी कार्यक्रम' : 'Upcoming Events'}
                            </h2>
                            <p className="text-lg text-gray-600">
                                {language === 'hi' ? 'इन महत्वपूर्ण तिथियों को अपने कैलेंडर में चिह्नित करें' : 'Mark your calendar for these important dates'}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {announcements.map((announcement, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-green-100"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                                            <Calendar className="w-7 h-7 text-green-600" />
                                        </div>
                                        <div className="text-sm font-bold text-green-600">
                                            {announcement.date}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {announcement.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {announcement.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Impact Statistics */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-12 text-white">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl font-black mb-4">
                                    {language === 'hi' ? 'अब तक हमारा प्रभाव' : 'Our Impact So Far'}
                                </h2>
                                <p className="text-lg opacity-90">
                                    {language === 'hi' ? 'धेवधा में वास्तविक बदलाव ला रहे हैं' : 'Making a real difference in Dheodha'}
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                {impactStats.map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <div className="text-5xl font-black mb-2">{stat.number}</div>
                                        <div className="text-sm opacity-90">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-black text-gray-900 mb-4">
                            {language === 'hi' ? 'अपडेट रहना चाहते हैं?' : 'Want to Stay Updated?'}
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            {language === 'hi'
                                ? 'हमारी सभी पहलों के बारे में वास्तविक समय अपडेट प्राप्त करने के लिए हमारे WhatsApp समुदाय में शामिल हों'
                                : 'Join our WhatsApp community to receive real-time updates about all our initiatives'
                            }
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-colors shadow-lg"
                            >
                                <Users className="w-5 h-5 mr-2" />
                                {language === 'hi' ? 'WhatsApp समूह में शामिल हों' : 'Join WhatsApp Group'}
                            </a>
                            {/* <a
                                href="/volunteer"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-bold rounded-xl hover:bg-gray-50 transition-colors shadow-lg border-2 border-green-600"
                            >
                                {language === 'hi' ? 'स्वयंसेवक बनें' : 'Become a Volunteer'}
                            </a> */}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default News;
