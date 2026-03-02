// components/home/news.jsx - WITH NEW/LATEST BLINKING BADGE
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Download, FileText, TrendingUp, MapPin, Clock, Calendar, ExternalLink, Eye, Sparkles } from 'lucide-react';
import { useLanguage } from '../../lib/LanguageContext';
import dynamic from 'next/dynamic';

const PDFModal = dynamic(() => import('@/components/PDFModal'), {
    ssr: false,
    loading: () => <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
        <div className="text-white">Loading PDF Viewer...</div>
    </div>
});

const DocumentViewer = dynamic(() => import('@/components/DocumentViewer'), {
    ssr: false,
    loading: () => <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
        <div className="text-white">Loading Document Viewer...</div>
    </div>
});

const NewsSection = () => {
    const { language } = useLanguage();
    const [selectedTab, setSelectedTab] = useState('announcements');
    const [pdfModalOpen, setPdfModalOpen] = useState(false);
    const [docModalOpen, setDocModalOpen] = useState(false);
    const [selectedPdf, setSelectedPdf] = useState(null);
    const [selectedDoc, setSelectedDoc] = useState(null);

    const handleViewPdf = (pdfPath, title) => {
        setSelectedPdf({ path: pdfPath, title });
        setPdfModalOpen(true);
    };

    const handleViewDoc = (docPath, title, fileType) => {
        setSelectedDoc({ path: docPath, title, fileType });
        setDocModalOpen(true);
    };

    const handleDownloadFile = (filePath, fileName) => {
        const link = document.createElement('a');
        link.href = filePath;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const upcomingEvents = [
        {
            id: 1,
            title: language === 'hi' ? 'ब्रह्म पिचास स्थान पर सेवा कार्य' : 'Service Work at Brahma Pichas Sthan',
            date: '2026-01-15',
            location: language === 'hi' ? 'धेवधा गांव' : 'Dheodha Village',
            time: language === 'hi' ? 'सुबह 10:00 बजे' : '10:00 AM',
            category: language === 'hi' ? 'धार्मिक' : 'Religious',
            link: 'https://www.facebook.com/share/p/1Gi4FQfyVw/'
        }
    ];

    const announcements = [{
        id: 1,
        title: language === 'hi' ? '🎉 नव‑नियुक्त कार्यकारी सचिव Bam Singh को हार्दिक शुभकामनाएँ।' : '🎉 Hearty congratulations to the newly appointed Executive Secretary Bam Singh.',
        date: language === 'hi' ? '1 मार्च' : 'March 1',
        type: language === 'hi' ? 'सूचना' : 'Information',
        priority: 'high',
        icon: '🏗️',
        link: 'https://www.facebook.com/share/p/17p7CYJm6S/'
    },
    {
        id: 1,
        title: language === 'hi' ? 'मुख्य द्वार सौंदर्यीकरण परियोजना: संगमरमर एवं ग्रेनाइट कार्य हेतु मिस्त्री चयन' : 'Main Gate Beautification Project: Mason Selection for Marble & Granite Work',
        date: language === 'hi' ? '14 अक्टूबर' : 'Oct 14',
        type: language === 'hi' ? 'परियोजना' : 'Project',
        priority: 'high',
        icon: '🏗️',
        link: 'https://www.facebook.com/share/p/14NLX3EJ4AT/'
    },
    {
        id: 2,
        title: language === 'hi' ? 'छठ घाट सफाई अभियान' : 'Chhath Ghat Cleaning Campaign',
        date: language === 'hi' ? '12 अक्टूबर' : 'Oct 12',
        type: language === 'hi' ? 'सफाई' : 'Cleanliness',
        icon: '🧹',
        link: 'https://www.facebook.com/share/p/17LZcBkEYf/'
    },
    {
        id: 3,
        title: language === 'hi' ? 'छठ पूजा घाट पर सामूहिक आरती का आयोजन' : 'Collective Aarti at Chhath Puja Ghat',
        date: language === 'hi' ? '10 अक्टूबर' : 'Oct 10',
        type: language === 'hi' ? 'धार्मिक' : 'Religious',
        priority: 'high',
        icon: '🪔',
        link: 'https://www.facebook.com/share/p/19hBuRicSg/'
    },
    {
        id: 4,
        title: language === 'hi' ? 'धन्यवाद संदेश' : 'Thank You Message',
        date: language === 'hi' ? '8 अक्टूबर' : 'Oct 8',
        type: language === 'hi' ? 'सूचना' : 'Information',
        icon: '🙏',
        link: 'https://www.facebook.com/share/p/15MQAe4h8Jn/'
    },
    {
        id: 5,
        title: language === 'hi' ? 'मुख्य द्वार सौंदर्यीकरण परियोजना: धन्यवाद ज्ञापन धेवधा पंचायत के माननीय मुखिया श्री संदीप राजवंशी' : 'Main Gate Beautification: Thanks to Mukhiya Shri Sandeep Rajvanshi',
        date: language === 'hi' ? '6 अक्टूबर' : 'Oct 6',
        type: language === 'hi' ? 'धन्यवाद' : 'Gratitude',
        icon: '🙏',
        link: 'https://www.facebook.com/share/p/1Jg7ECsJig/'
    },
    {
        id: 6,
        title: language === 'hi' ? 'जनहित अपील – धेवधा ग्राम की सड़क और नाली की बदहाल स्थिति पर' : 'Public Appeal - Poor Condition of Road and Drains in Dheodha Village',
        date: language === 'hi' ? '5 अक्टूबर' : 'Oct 5',
        type: language === 'hi' ? 'अपील' : 'Appeal',
        priority: 'high',
        icon: '📢',
        link: 'https://www.facebook.com/share/p/1AJKEG6dEh/'
    },
    {
        id: 7,
        title: language === 'hi' ? 'अपडेट | धेवधा विकास समिति' : 'Update | Dheodha Vikas Samiti',
        date: language === 'hi' ? '3 अक्टूबर' : 'Oct 3',
        type: language === 'hi' ? 'अपडेट' : 'Update',
        icon: '📰',
        link: 'https://www.facebook.com/share/p/1BRQgnbUtU/'
    },
    {
        id: 8,
        title: language === 'hi' ? 'धेवधा पंचायत के लिए ऐतिहासिक उपलब्धि!' : 'Historic Achievement for Dheodha Panchayat!',
        date: language === 'hi' ? '1 अक्टूबर' : 'Oct 1',
        type: language === 'hi' ? 'उपलब्धि' : 'Achievement',
        priority: 'high',
        icon: '🏆',
        link: 'https://www.facebook.com/share/p/17HqE3XLzs/'
    },
    {
        id: 9,
        title: language === 'hi' ? 'हार्दिक बधाई एवं शुभकामनाएँ' : 'Heartfelt Congratulations and Best Wishes',
        date: language === 'hi' ? '28 सितंबर' : 'Sep 28',
        type: language === 'hi' ? 'बधाई' : 'Congratulations',
        icon: '🎉',
        link: 'https://www.facebook.com/share/p/1ETzKvhMcX/'
    },
    {
        id: 10,
        title: language === 'hi' ? 'धन्यवाद एवं सादर आभार' : 'Thanks and Gratitude',
        date: language === 'hi' ? '25 सितंबर' : 'Sep 25',
        type: language === 'hi' ? 'धन्यवाद' : 'Thanks',
        icon: '🙏',
        link: 'https://www.facebook.com/share/p/1aQBh2fPSR/'
    },
    {
        id: 11,
        title: language === 'hi' ? 'ग्राम संवाद सह निगरानी समिति – बैठक निष्कर्ष' : 'Village Dialogue cum Monitoring Committee - Meeting Conclusions',
        date: language === 'hi' ? '22 सितंबर' : 'Sep 22',
        type: language === 'hi' ? 'बैठक' : 'Meeting',
        icon: '📋',
        link: 'https://www.facebook.com/share/p/17NHZenKqY/'
    },
    {
        id: 12,
        title: language === 'hi' ? 'घोषणा – ब्रह्म पिचास स्थान पर सेवा कार्य' : 'Announcement - Service Work at Brahma Pichas Sthan',
        date: language === 'hi' ? '20 सितंबर' : 'Sep 20',
        type: language === 'hi' ? 'घोषणा' : 'Announcement',
        icon: '🔔',
        link: 'https://www.facebook.com/share/p/1Gi4FQfyVw/'
    },
    {
        id: 13,
        title: language === 'hi' ? 'हार्दिक बधाई एवं शुभकामनाएँ' : 'Heartfelt Congratulations and Best Wishes',
        date: language === 'hi' ? '18 सितंबर' : 'Sep 18',
        type: language === 'hi' ? 'बधाई' : 'Congratulations',
        icon: '🎊',
        link: 'https://www.facebook.com/share/p/14PMpS7qtKn/'
    }
    ];

    const referenceDocuments = [
        {
            id: 2,
            title: language === 'hi' ? 'विचारधारा' : 'Ideology',
            titleOriginal: 'thought.pdf',
            filePath: '/documents/thought.pdf',
            fileType: 'pdf',
            icon: '📜',
            size: '320 KB',
            isNew: false,
        },
        {
            id: 3,
            title: language === 'hi' ? 'व्यय रिपोर्ट-1' : 'Expenditure Report – 1',
            titleOriginal: 'व्यय रिपोर्ट-1.pdf',
            filePath: '/documents/व्यय रिपोर्ट-1.pdf',
            fileType: 'pdf',
            icon: '📜',
            size: '445 KB',
            isNew: true,  // Mark as NEW
        },
        {
            id: 4,
            title: language === 'hi' ? 'बजट व्यय रिपोर्ट-1' : 'Budget & Expense Report – 1',
            titleOriginal: 'sdk.pdf',
            filePath: '/documents/sdk.pdf',
            fileType: 'pdf',
            icon: '📜',
            size: '445 KB',
            isNew: true,  // Mark as NEW
        },
        {
            id: 5,
            title: language === 'hi' ? 'परियोजनाएं' : 'Projects',
            titleOriginal: 'Projects.docx',
            filePath: '/documents/Projects.docx',
            fileType: 'docx',
            icon: '📁',
            size: '245 KB',
            isNew: true,
        },
        {
            id: 5,
            title: language === 'hi' ? 'परियोजनाएं' : 'Projects',
            titleOriginal: 'Projects.docx',
            filePath: '/documents/Projects.docx',
            fileType: 'docx',
            icon: '📁',
            size: '245 KB',
            isNew: true,
        },
    ];

    const newsTickerItems = language === 'hi'
        ? ['मुख्य द्वार: 100% पूर्ण किया गया', 'ऐतिहासिक उपलब्धि', 'छठ घाट सफाई पूर्ण', '5 परियोजनाएं पूर्ण']
        : ['Main Gate: 100% Completed', 'Historic Achievement', 'Chhath Ghat Cleaned', '5 Projects Done'];

    return (
        <>
            <section id="news" className="py-8 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-6xl mx-auto px-4">
                    {/* Header */}
                    <div className="text-center mb-6">
                        <div className="inline-flex items-center space-x-2 bg-orange-100 px-3 py-1.5 rounded-full mb-3 border border-orange-300">
                            <div className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
                            </div>
                            <Bell className="w-3 h-3 text-orange-600" />
                            <span className="text-xs font-bold text-gray-900">
                                {language === 'hi' ? 'नवीनतम' : 'LATEST'}
                            </span>
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold">
                            <span className="text-gray-900">
                                {language === 'hi' ? 'समाचार और ' : 'News & '}
                            </span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                                {language === 'hi' ? 'अपडेट' : 'Updates'}
                            </span>
                        </h2>
                    </div>

                    {/* News Ticker */}
                    <div className="bg-gradient-to-r from-orange-600 to-red-600 border-y-2 border-orange-700 py-1.5 mb-4 rounded">
                        <div className="flex items-center">
                            <div className="bg-white/20 px-3 py-1 flex items-center space-x-1.5 backdrop-blur">
                                <div className="relative flex h-1.5 w-1.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
                                </div>
                                <span className="text-white font-bold text-xs">
                                    {language === 'hi' ? 'समाचार' : 'NEWS'}
                                </span>
                            </div>
                            <div className="flex-1 overflow-hidden px-2">
                                <div className="animate-scroll-left whitespace-nowrap inline-block">
                                    {[...newsTickerItems, ...newsTickerItems].map((item, index) => (
                                        <span key={index} className="text-white font-semibold text-xs mx-3">
                                            {item} <span className="text-white/60">•</span>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
                        {/* Tabs */}
                        <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-orange-400 flex">
                            <button
                                onClick={() => setSelectedTab('announcements')}
                                className={`flex-1 px-3 py-2.5 font-bold text-xs transition-all ${selectedTab === 'announcements'
                                    ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
                                    : 'text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                <Bell className="w-3 h-3 inline mr-1" />
                                {language === 'hi' ? 'घोषणाएं' : 'ANNOUNCEMENTS'}
                            </button>
                            <button
                                onClick={() => setSelectedTab('events')}
                                className={`flex-1 px-3 py-2.5 font-bold text-xs transition-all ${selectedTab === 'events'
                                    ? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg'
                                    : 'text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                <Calendar className="w-3 h-3 inline mr-1" />
                                {language === 'hi' ? 'कार्यक्रम' : 'EVENTS'}
                            </button>
                        </div>

                        <div className="grid md:grid-cols-5 gap-0">
                            {/* Main Content */}
                            <div className="md:col-span-3 p-3 border-r border-gray-200 bg-gradient-to-br from-white via-gray-50 to-white max-h-[600px] overflow-y-auto">
                                {selectedTab === 'announcements' && (
                                    <div className="space-y-2">
                                        {announcements.map((announcement, index) => (
                                            <motion.div
                                                key={announcement.id}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.2, delay: index * 0.05 }}
                                                className="border-l-4 border-orange-500 rounded-lg p-3 hover:border-orange-600 transition-all bg-white hover:shadow-md"
                                            >
                                                <div className="flex items-start justify-between mb-1.5">
                                                    <div className="flex items-center space-x-2">
                                                        <span className="text-2xl">{announcement.icon}</span>
                                                        <div>
                                                            <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-0.5 rounded text-xs font-bold">
                                                                {announcement.type}
                                                            </span>
                                                            {announcement.priority === 'high' && (
                                                                <span className="ml-1 bg-red-600 text-white px-2 py-0.5 rounded text-xs font-bold animate-pulse">
                                                                    {language === 'hi' ? 'तत्काल' : 'URGENT'}
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <span className="text-xs text-gray-500 font-semibold">{announcement.date}</span>
                                                </div>
                                                <h3 className="text-sm font-bold text-gray-900 mb-1.5 leading-tight">{announcement.title}</h3>
                                                <a
                                                    href={announcement.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center space-x-1 bg-orange-50 hover:bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-bold transition-colors w-fit"
                                                >
                                                    <ExternalLink className="w-3 h-3" />
                                                    <span>{language === 'hi' ? 'विवरण देखें' : 'View Details'}</span>
                                                </a>
                                            </motion.div>
                                        ))}
                                    </div>
                                )}

                                {selectedTab === 'events' && (
                                    <div className="space-y-2">
                                        {upcomingEvents.map((event, index) => (
                                            <motion.div
                                                key={event.id}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.2, delay: index * 0.05 }}
                                                className="border-l-4 border-emerald-500 rounded-lg p-3 hover:border-emerald-600 transition-all bg-white hover:shadow-md"
                                            >
                                                <div className="flex items-start space-x-3">
                                                    <div className="bg-gradient-to-br from-emerald-600 to-green-600 text-white rounded-lg p-2 text-center flex-shrink-0 shadow-lg">
                                                        <div className="text-lg font-bold leading-none">{new Date(event.date).getDate()}</div>
                                                        <div className="text-xs uppercase font-bold">
                                                            {language === 'hi'
                                                                ? new Date(event.date).toLocaleString('hi-IN', { month: 'short' })
                                                                : new Date(event.date).toLocaleString('default', { month: 'short' })
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <span className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-2 py-0.5 rounded text-xs font-bold">
                                                            {event.category}
                                                        </span>
                                                        <h3 className="text-sm font-bold text-gray-900 mt-1 leading-tight">{event.title}</h3>
                                                        <div className="flex items-center space-x-2 mt-1.5 text-xs text-gray-600">
                                                            <div className="flex items-center space-x-1">
                                                                <Clock className="w-3 h-3" />
                                                                <span className="font-semibold">{event.time}</span>
                                                            </div>
                                                            <span className="text-gray-400">•</span>
                                                            <div className="flex items-center space-x-1">
                                                                <MapPin className="w-3 h-3" />
                                                                <span className="font-semibold">{event.location}</span>
                                                            </div>
                                                        </div>
                                                        <a
                                                            href={event.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center space-x-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs font-bold transition-colors w-fit mt-2"
                                                        >
                                                            <ExternalLink className="w-3 h-3" />
                                                            <span>{language === 'hi' ? 'विवरण देखें' : 'View Details'}</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Sidebar */}
                            <div className="md:col-span-2 bg-gradient-to-b from-gray-50 to-white p-2.5 space-y-5">
                                {/* Documents Section with NEW Badge */}
                                <div className="bg-white rounded-lg border-2 border-indigo-200 overflow-hidden shadow-sm">
                                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-2 py-1.5">
                                        <h3 className="font-bold text-xs flex items-center space-x-1">
                                            <FileText className="w-3 h-3" />
                                            <span>{language === 'hi' ? 'दस्तावेज़' : 'DOCS'}</span>
                                        </h3>
                                    </div>
                                    <div className="p-2 space-y-1">
                                        {referenceDocuments.map((doc) => (
                                            <div
                                                key={doc.id}
                                                className="relative border border-gray-200 rounded-lg p-2 hover:border-indigo-300 hover:bg-indigo-50 transition-all group"
                                            >
                                                {/* NEW/LATEST Blinking Badge */}
                                                {doc.isNew && (
                                                    <div className="absolute -top-2 -right-2 z-10">
                                                        <div className="relative">
                                                            {/* Pulsing Ring */}
                                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                                            {/* Badge */}
                                                            <span className="relative inline-flex items-center space-x-1 bg-gradient-to-r from-red-600 to-pink-600 text-white px-2 py-0.5 rounded-full text-xs font-black shadow-lg animate-pulse">
                                                                <Sparkles className="w-3 h-3" />
                                                                <span>{language === 'hi' ? 'नया' : 'NEW'}</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                )}

                                                <div className="flex items-center space-x-2 mb-2">
                                                    <span className="text-xl">{doc.icon}</span>
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="text-xs font-bold text-gray-900 truncate">{doc.title}</h4>
                                                        <p className="text-xs text-gray-500">{doc.size}</p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-1">
                                                    <button
                                                        onClick={() => {
                                                            if (doc.fileType === 'pdf') {
                                                                handleViewPdf(doc.filePath, doc.title);
                                                            } else {
                                                                handleViewDoc(doc.filePath, doc.title, doc.fileType);
                                                            }
                                                        }}
                                                        className="flex-1 flex items-center justify-center space-x-1 bg-indigo-600 hover:bg-indigo-700 text-white px-2 py-1 rounded text-xs font-bold transition-colors"
                                                    >
                                                        <Eye className="w-3 h-3" />
                                                        <span className="hidden sm:inline">{language === 'hi' ? 'देखें' : 'View'}</span>
                                                    </button>
                                                    <button
                                                        onClick={() => handleDownloadFile(doc.filePath, doc.titleOriginal)}
                                                        className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded transition-colors"
                                                        title={language === 'hi' ? 'डाउनलोड' : 'Download'}
                                                    >
                                                        <Download className="w-3 h-3" />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-lg p-2.5 text-white shadow-lg">
                                    <h3 className="font-bold text-xs mb-2 flex items-center space-x-1">
                                        <TrendingUp className="w-3 h-3" />
                                        <span>{language === 'hi' ? 'आंकड़े' : 'STATS'}</span>
                                    </h3>
                                    <div className="bg-white/20 backdrop-blur rounded-lg p-1.5 mb-1.5 text-center">
                                        <div className="text-lg font-bold">₹7L</div>
                                        <div className="text-xs">{language === 'hi' ? 'कुल बजट' : 'Budget'}</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-1.5">
                                        <div className="bg-white/20 backdrop-blur rounded-lg p-1.5 text-center">
                                            <div className="text-base font-bold">4</div>
                                            <div className="text-xs">{language === 'hi' ? 'पूर्ण' : 'Done'}</div>
                                        </div>
                                        <div className="bg-white/20 backdrop-blur rounded-lg p-1.5 text-center">
                                            <div className="text-base font-bold">2</div>
                                            <div className="text-xs">{language === 'hi' ? 'चल रहे' : 'Active'}</div>
                                        </div>
                                        <div className="bg-white/20 backdrop-blur rounded-lg p-1.5 text-center">
                                            <div className="text-base font-bold">9</div>
                                            <div className="text-xs">{language === 'hi' ? 'आगामी' : 'Coming'}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    @keyframes scroll-left {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-scroll-left {
                        animation: scroll-left 15s linear infinite;
                    }
                `}</style>
            </section>

            {pdfModalOpen && (
                <PDFModal
                    isOpen={pdfModalOpen}
                    onClose={() => setPdfModalOpen(false)}
                    pdfPath={selectedPdf?.path}
                    title={selectedPdf?.title}
                    language={language}
                />
            )}

            {docModalOpen && (
                <DocumentViewer
                    isOpen={docModalOpen}
                    onClose={() => setDocModalOpen(false)}
                    docPath={selectedDoc?.path}
                    title={selectedDoc?.title}
                    fileType={selectedDoc?.fileType}
                    language={language}
                />
            )}
        </>
    );
};

export default NewsSection;
