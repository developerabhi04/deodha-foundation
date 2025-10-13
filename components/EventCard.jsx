// Event card component (UI-only)
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

export default function EventCard({ event }) {
    const eventDate = new Date(event.date);
    const formattedDate = eventDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
        >
            <div className="relative h-48 overflow-hidden">
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
                {event.type === 'upcoming' && (
                    <div className="absolute top-4 right-4 bg-brand-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Upcoming
                    </div>
                )}
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                        <Calendar size={16} className="mr-2" />
                        <span>{formattedDate}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                        <MapPin size={16} className="mr-2" />
                        <span>{event.location}</span>
                    </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{event.shortDescription}</p>
                <Link
                    href={`/events/${event.slug}`}
                    className="inline-block text-brand-green font-semibold hover:text-brand-green-dark transition-colors focus-ring rounded"
                >
                    Read More →
                </Link>
            </div>
        </motion.div>
    );
}
