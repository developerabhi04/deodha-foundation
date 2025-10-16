import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Download, FileText, TrendingUp, MapPin, Clock, Calendar } from 'lucide-react';

const NewsSection = () => {
    const [selectedTab, setSelectedTab] = useState('announcements');

    const upcomingEvents = [
        {
            id: 1,
            title: 'Durga Puja Cultural Program',
            date: '2025-10-20',
            location: 'Dheodha Village',
            time: '6:00 PM',
            category: 'Cultural'
        },
        {
            id: 2,
            title: 'Digital Library Inauguration',
            date: '2026-01-15',
            location: 'Dheodha Village',
            time: '10:00 AM',
            category: 'Education'
        },
    ];

    const announcements = [
        {
            id: 1,
            title: 'Main Gate Construction: 60% Complete',
            date: 'Oct 14',
            type: 'Project',
            priority: 'high',
            icon: '🏗️'
        },
        {
            id: 2,
            title: 'Digital Library Planning Completed',
            date: 'Oct 10',
            type: 'Education',
            icon: '📚'
        },
        {
            id: 3,
            title: 'Women SHG Registration Open',
            date: 'Oct 5',
            type: 'Empowerment',
            priority: 'high',
            icon: '👩‍🏫'
        },
    ];

    const documents = [
        { id: 1, title: 'Budget Report', size: '2.3 MB', icon: '📊', isNew: true },
        { id: 2, title: 'Certificate', size: '1.5 MB', icon: '📜', isNew: false },
        { id: 3, title: 'Statement', size: '3.1 MB', icon: '💰', isNew: true },
    ];

    const newsTickerItems = [
        'Main Gate: 60% Done',
        'Digital Library: Jan 15',
        'SHG Registration: Oct 30',
    ];

    return (
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
                        <span className="text-xs font-bold text-gray-900">LATEST</span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold">
                        <span className="text-gray-900">News & </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Updates</span>
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
                            <span className="text-white font-bold text-xs">NEWS</span>
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
                <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
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
                            ANNOUNCEMENTS
                        </button>
                        <button
                            onClick={() => setSelectedTab('events')}
                            className={`flex-1 px-3 py-2 font-bold text-xs transition-all ${selectedTab === 'events'
                                    ? 'bg-green-600 text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            <Calendar className="w-3 h-3 inline mr-1" />
                            EVENTS
                        </button>
                    </div>

                    <div className="grid md:grid-cols-4 gap-0">
                        {/* Main Content - Highly Visible */}
                        <div className="md:col-span-3 p-3 border-r border-gray-200 bg-gradient-to-br from-white to-gray-50">
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
                                                                URGENT
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                                <span className="text-xs text-gray-500 font-semibold">{announcement.date}</span>
                                            </div>
                                            <h3 className="text-sm font-bold text-gray-900 mb-1.5 leading-tight">{announcement.title}</h3>
                                            <button className="flex items-center space-x-1 bg-orange-100 hover:bg-orange-200 text-orange-700 px-2 py-1 rounded text-xs font-bold transition-colors">
                                                <Download className="w-3 h-3" />
                                                <span>Download</span>
                                            </button>
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
                                                    <div className="text-xs uppercase font-bold">{new Date(event.date).toLocaleString('default', { month: 'short' })}</div>
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
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
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
                                        <span>DOCS</span>
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

                            {/* Stats */}
                            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg p-2.5 text-white">
                                <h3 className="font-bold text-xs mb-2 flex items-center space-x-1">
                                    <TrendingUp className="w-3 h-3" />
                                    <span>STATS</span>
                                </h3>
                                <div className="bg-white/20 rounded-lg p-1.5 mb-1.5 text-center">
                                    <div className="text-lg font-bold">₹3.93L</div>
                                    <div className="text-xs">Total</div>
                                </div>
                                <div className="grid grid-cols-2 gap-1.5">
                                    <div className="bg-white/20 rounded-lg p-1.5 text-center">
                                        <div className="text-base font-bold">2</div>
                                        <div className="text-xs">Done</div>
                                    </div>
                                    <div className="bg-white/20 rounded-lg p-1.5 text-center">
                                        <div className="text-base font-bold">3</div>
                                        <div className="text-xs">Active</div>
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
    );
};

export default NewsSection;
