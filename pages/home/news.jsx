// components/home/news.jsx - FULLY CORRECTED
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Download, FileText, TrendingUp, MapPin, Clock, Calendar, ExternalLink, Book, Eye } from 'lucide-react';
import { useLanguage } from '../../lib/LanguageContext';
import dynamic from 'next/dynamic';



// ✅ CORRECT - Disable SSR for PDF/Document viewers
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

    const announcements = [
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

    const documents = [
        {
            id: 1,
            title: language === 'hi' ? 'बजट रिपोर्ट 2025' : 'Budget Report 2025',
            size: '2.3 MB',
            icon: '📊',
            isNew: true
        },
        {
            id: 2,
            title: language === 'hi' ? 'परियोजना प्रमाण पत्र' : 'Project Certificate',
            size: '1.5 MB',
            icon: '📜',
            isNew: false
        },
        {
            id: 3,
            title: language === 'hi' ? 'वित्तीय विवरण' : 'Financial Statement',
            size: '3.1 MB',
            icon: '💰',
            isNew: true
        },
    ];

    // ✅ CORRECTED - Use /documents/ not ../../public/documents/
    const referenceDocuments = [
        {
            id: 1,
            title: language === 'hi' ? 'परियोजनाएं' : 'Projects',
            titleOriginal: 'Projects.docx',
            description: language === 'hi' ? 'सभी परियोजनाओं की विस्तृत जानकारी' : 'Detailed information of all projects',
            filePath: '/documents/Projects.docx',  // ✅ FIXED
            fileType: 'docx',
            icon: '📁',
            size: '245 KB',
            isNew: true,
            category: language === 'hi' ? 'परियोजना' : 'Project'
        },
        {
            id: 2,
            title: language === 'hi' ? 'धेवधा ग्राम के महत्वपूर्ण जगह' : 'Important Places of Dheodha Village',
            titleOriginal: 'place.docx',
            description: language === 'hi' ? 'गांव के प्रमुख स्थानों की सूची और विवरण' : 'List and details of major places in the village',
            filePath: '/documents/place.docx',  // ✅ FIXED
            fileType: 'docx',
            icon: '📍',
            size: '180 KB',
            isNew: true,
            category: language === 'hi' ? 'स्थान' : 'Location'
        },
        {
            id: 3,
            title: language === 'hi' ? 'धेवधा विकास समिति की विचारधारा' : 'Dheodha Vikas Samiti Ideology',
            titleOriginal: 'deodha vikas धेवधा विकास समिति की विचारधारा.pdf',
            description: language === 'hi' ? 'समिति के उद्देश्य और विजन' : 'Committee objectives and vision',
            filePath: '/documents/thought.pdf',  // ✅ FIXED
            fileType: 'pdf',
            icon: '📜',
            size: '320 KB',
            isNew: true,
            category: language === 'hi' ? 'विचारधारा' : 'Ideology'
        }
    ];

    const newsTickerItems = language === 'hi'
        ? [
            'मुख्य द्वार: 60% पूर्ण',
            'ऐतिहासिक उपलब्धि हासिल',
            'छठ घाट सफाई पूर्ण',
            '5 परियोजनाएं पूर्ण',
        ]
        : [
            'Main Gate: 60% Complete',
            'Historic Achievement',
            'Chhath Ghat Cleaning Done',
            '5 Projects Completed',
        ];

    return (
        <>
            <section id="news" className="py-8 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    {/* Mini Header */}
                    <div className="text-center mb-6">
                        <div className="inline-flex items-center space-x-2 bg-red-100 px-3 py-1.5 rounded-full mb-3 border border-red-300">
                            <div className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                            </div>
                            <Bell className="w-3 h-3 text-red-600" />
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

                    {/* Mini News Ticker */}
                    <div className="bg-blue-900 border-y border-orange-500 py-1.5 mb-4">
                        <div className="flex items-center">
                            <div className="bg-orange-600 px-3 py-1 flex items-center space-x-1.5">
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
                                            {item} <span className="text-orange-400">•</span>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Compact Main Content */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 mb-6">
                        {/* Mini Tabs */}
                        <div className="bg-gray-50 border-b border-orange-400 flex">
                            <button
                                onClick={() => setSelectedTab('announcements')}
                                className={`flex-1 px-3 py-2 font-bold text-xs transition-all ${selectedTab === 'announcements'
                                    ? 'bg-orange-600 text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                <Bell className="w-3 h-3 inline mr-1" />
                                {language === 'hi' ? 'घोषणाएं' : 'ANNOUNCEMENTS'}
                            </button>
                            <button
                                onClick={() => setSelectedTab('events')}
                                className={`flex-1 px-3 py-2 font-bold text-xs transition-all ${selectedTab === 'events'
                                    ? 'bg-green-600 text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                <Calendar className="w-3 h-3 inline mr-1" />
                                {language === 'hi' ? 'कार्यक्रम' : 'EVENTS'}
                            </button>
                        </div>

                        <div className="grid md:grid-cols-4 gap-0">
                            {/* Main Content - Highly Visible */}
                            <div className="md:col-span-3 p-3 border-r border-gray-200 bg-gradient-to-br from-white to-gray-50 max-h-[600px] overflow-y-auto">
                                {selectedTab === 'announcements' && (
                                    <div className="space-y-2">
                                        {announcements.map((announcement, index) => (
                                            <motion.div
                                                key={announcement.id}
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.2, delay: index * 0.05 }}
                                                className="border-2 border-orange-300 rounded-lg p-3 hover:border-orange-500 transition-all bg-white hover:shadow-md"
                                            >
                                                <div className="flex items-start justify-between mb-1.5">
                                                    <div className="flex items-center space-x-2">
                                                        <span className="text-2xl">{announcement.icon}</span>
                                                        <div>
                                                            <span className="bg-orange-500 text-white px-2 py-0.5 rounded text-xs font-bold">
                                                                {announcement.type}
                                                            </span>
                                                            {announcement.priority === 'high' && (
                                                                <span className="ml-1 bg-red-500 text-white px-2 py-0.5 rounded text-xs font-bold animate-pulse">
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
                                                    className="flex items-center space-x-1 bg-orange-100 hover:bg-orange-200 text-orange-700 px-2 py-1 rounded text-xs font-bold transition-colors w-fit"
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
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.2, delay: index * 0.05 }}
                                                className="border-2 border-green-300 rounded-lg p-3 hover:border-green-500 transition-all bg-white hover:shadow-md"
                                            >
                                                <div className="flex items-start space-x-3">
                                                    <div className="bg-green-600 text-white rounded-lg p-2 text-center flex-shrink-0 shadow-md">
                                                        <div className="text-lg font-bold leading-none">{new Date(event.date).getDate()}</div>
                                                        <div className="text-xs uppercase font-bold">
                                                            {language === 'hi'
                                                                ? new Date(event.date).toLocaleString('hi-IN', { month: 'short' })
                                                                : new Date(event.date).toLocaleString('default', { month: 'short' })
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <span className="bg-green-500 text-white px-2 py-0.5 rounded text-xs font-bold">
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
                                                            className="flex items-center space-x-1 bg-green-100 hover:bg-green-200 text-green-700 px-2 py-1 rounded text-xs font-bold transition-colors w-fit mt-2"
                                                        >
                                                            <ExternalLink className="w-3 h-3" />
                                                            <span>{language === 'hi' ? 'विवरण देखें' : 'View Details'}</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                        {upcomingEvents.length === 0 && (
                                            <div className="text-center py-8 text-gray-500">
                                                {language === 'hi' ? 'कोई आगामी कार्यक्रम नहीं' : 'No Upcoming Events'}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Mini Sidebar */}
                            <div className="md:col-span-1 bg-gray-50 p-2.5 space-y-2.5">
                                {/* Documents */}
                                <div className="bg-white rounded-lg border border-orange-300 overflow-hidden">
                                    <div className="bg-orange-600 text-white px-2 py-1.5">
                                        <h3 className="font-bold text-xs flex items-center space-x-1">
                                            <FileText className="w-3 h-3" />
                                            <span>{language === 'hi' ? 'दस्तावेज़' : 'DOCS'}</span>
                                        </h3>
                                    </div>
                                    <div className="p-2 space-y-1">
                                        {documents.map((doc) => (
                                            <a
                                                key={doc.id}
                                                href="#"
                                                className="flex items-center space-x-1.5 p-1.5 rounded hover:bg-orange-50 transition-colors group relative"
                                            >
                                                {doc.isNew && (
                                                    <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                                    </span>
                                                )}
                                                <span className="text-base">{doc.icon}</span>
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="text-xs font-bold text-gray-900 truncate leading-tight">{doc.title}</h4>
                                                    <p className="text-xs text-gray-500">{doc.size}</p>
                                                </div>
                                                <Download className="w-3 h-3 text-gray-400 group-hover:text-orange-600 flex-shrink-0" />
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                {/* Stats - Updated */}
                                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg p-2.5 text-white">
                                    <h3 className="font-bold text-xs mb-2 flex items-center space-x-1">
                                        <TrendingUp className="w-3 h-3" />
                                        <span>{language === 'hi' ? 'आंकड़े' : 'STATS'}</span>
                                    </h3>
                                    <div className="bg-white/20 rounded-lg p-1.5 mb-1.5 text-center">
                                        <div className="text-lg font-bold">₹4.22L</div>
                                        <div className="text-xs">{language === 'hi' ? 'कुल बजट' : 'Total Budget'}</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-1.5">
                                        <div className="bg-white/20 rounded-lg p-1.5 text-center">
                                            <div className="text-base font-bold">5</div>
                                            <div className="text-xs">{language === 'hi' ? 'पूर्ण' : 'Done'}</div>
                                        </div>
                                        <div className="bg-white/20 rounded-lg p-1.5 text-center">
                                            <div className="text-base font-bold">2</div>
                                            <div className="text-xs">{language === 'hi' ? 'चल रहे' : 'Ongoing'}</div>
                                        </div>
                                        <div className="bg-white/20 rounded-lg p-1.5 text-center">
                                            <div className="text-base font-bold">7</div>
                                            <div className="text-xs">{language === 'hi' ? 'आगामी' : 'Upcoming'}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Reference Documents Section */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-blue-300">
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-3">
                            <h3 className="font-bold text-lg flex items-center space-x-2">
                                <Book className="w-5 h-5" />
                                <span>{language === 'hi' ? 'संदर्भ दस्तावेज़' : 'Reference Documents'}</span>
                            </h3>
                            <p className="text-xs text-blue-100 mt-1">
                                {language === 'hi' ? 'महत्वपूर्ण दस्तावेज़ और जानकारी' : 'Important documents and information'}
                            </p>
                        </div>

                        <div className="p-4 grid md:grid-cols-3 gap-3">
                            {referenceDocuments.map((doc, index) => (
                                <motion.div
                                    key={doc.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    className="relative border-2 border-blue-200 rounded-lg p-4 hover:border-blue-400 transition-all bg-gradient-to-br from-white to-blue-50 hover:shadow-lg group"
                                >
                                    {/* New Badge */}
                                    {doc.isNew && (
                                        <div className="absolute -top-2 -right-2 z-10">
                                            <span className="relative flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                            </span>
                                        </div>
                                    )}

                                    {/* Icon and Category */}
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="bg-blue-100 rounded-lg p-3 group-hover:bg-blue-200 transition-colors">
                                            <span className="text-3xl">{doc.icon}</span>
                                        </div>
                                        <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">
                                            {doc.category}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h4 className="font-bold text-gray-900 mb-1 leading-tight text-sm">
                                        {doc.title}
                                    </h4>

                                    {/* Description */}
                                    <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                                        {doc.description}
                                    </p>

                                    {/* File Info */}
                                    <div className="flex items-center justify-between mb-3 pb-3 border-b border-blue-200">
                                        <span className="text-xs text-gray-500 font-semibold flex items-center space-x-1">
                                            <FileText className="w-3 h-3" />
                                            <span>{doc.size}</span>
                                        </span>
                                        <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs font-bold uppercase">
                                            {doc.fileType}
                                        </span>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="space-y-2">
                                        <button
                                            onClick={() => {
                                                if (doc.fileType === 'pdf') {
                                                    handleViewPdf(doc.filePath, doc.title);
                                                } else {
                                                    handleViewDoc(doc.filePath, doc.title, doc.fileType);
                                                }
                                            }}
                                            className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-xs font-bold transition-colors"
                                        >
                                            <Eye className="w-3.5 h-3.5" />
                                            <span>{language === 'hi' ? 'दस्तावेज़ देखें' : 'View Document'}</span>
                                        </button>

                                        <button
                                            onClick={() => handleDownloadFile(doc.filePath, doc.titleOriginal)}
                                            className="w-full flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-xs font-bold transition-colors"
                                        >
                                            <Download className="w-3.5 h-3.5" />
                                            <span>{language === 'hi' ? 'डाउनलोड करें' : 'Download'}</span>
                                        </button>
                                    </div>

                                    {/* Original Filename */}
                                    <div className="mt-2 pt-2 border-t border-blue-100">
                                        <p className="text-xs text-gray-500 truncate" title={doc.titleOriginal}>
                                            {language === 'hi' ? 'फाइल:' : 'File:'} {doc.titleOriginal}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Footer Note */}
                        <div className="bg-blue-50 border-t border-blue-200 px-4 py-2 text-center">
                            <p className="text-xs text-blue-700 font-semibold">
                                {language === 'hi'
                                    ? '💡 ये दस्तावेज़ धेवधा विकास समिति की आधिकारिक जानकारी प्रदान करते हैं'
                                    : '💡 These documents provide official information of Dheodha Vikas Samiti'}
                            </p>
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
                    .line-clamp-2 {
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }
                `}</style>
            </section>

            {/* PDF Modal */}
            {pdfModalOpen && (
                <PDFModal
                    isOpen={pdfModalOpen}
                    onClose={() => setPdfModalOpen(false)}
                    pdfPath={selectedPdf?.path}
                    title={selectedPdf?.title}
                    language={language}
                />
            )}

            {/* Document Modal (DOCX) */}
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
