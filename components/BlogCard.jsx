// Blog post card component (UI-only)
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, User } from 'lucide-react';

export default function BlogCard({ post }) {
    const postDate = new Date(post.date);
    const formattedDate = postDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

    return (
        <motion.article
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col"
        >
            <div className="relative h-48 overflow-hidden">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-brand-green text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 text-sm flex-grow line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center text-xs text-gray-500 space-x-4 mb-4">
                    <div className="flex items-center">
                        <User size={14} className="mr-1" />
                        <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        <span>{formattedDate}</span>
                    </div>
                    <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        <span>{post.readTime}</span>
                    </div>
                </div>
                <Link
                    href={`/blog/${post.slug}`}
                    className="text-brand-green font-semibold hover:text-brand-green-dark transition-colors focus-ring rounded inline-block"
                >
                    Read Article →
                </Link>
            </div>
        </motion.article>
    );
}
