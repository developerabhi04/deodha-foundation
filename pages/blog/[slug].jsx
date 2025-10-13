// Dynamic blog post page (UI-only - uses getStaticPaths and getStaticProps)
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import SEO from '../../components/SEO';
import { blogPosts } from '../../lib/data';

export default function BlogPost({ post }) {
    if (!post) return <div>Post not found</div>;

    const postDate = new Date(post.date);
    const formattedDate = postDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <>
            <SEO
                title={post.title}
                description={post.excerpt}
                image={post.image}
            />

            <article className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        {/* Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-8"
                        >
                            <div className="mb-4">
                                <span className="inline-block bg-brand-green text-white px-4 py-1 rounded-full text-sm font-semibold">
                                    {post.category}
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{post.title}</h1>
                            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
                                <div className="flex items-center">
                                    <User size={18} className="mr-2" />
                                    <span>{post.author}</span>
                                </div>
                                <div className="flex items-center">
                                    <Calendar size={18} className="mr-2" />
                                    <span>{formattedDate}</span>
                                </div>
                                <div className="flex items-center">
                                    <Clock size={18} className="mr-2" />
                                    <span>{post.readTime}</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Featured Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mb-12"
                        >
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-96 object-cover rounded-xl shadow-lg"
                                loading="eager"
                            />
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="prose prose-lg max-w-none mb-12"
                        >
                            <p className="text-xl text-gray-700 leading-relaxed mb-6">{post.excerpt}</p>
                            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                                {post.content}
                            </div>
                        </motion.div>

                        {/* Share Buttons (UI-only) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="border-t border-b border-gray-200 py-6 mb-12"
                        >
                            <div className="flex items-center gap-4">
                                <span className="flex items-center text-gray-700 font-semibold">
                                    <Share2 size={20} className="mr-2" />
                                    Share this article:
                                </span>
                                <button
                                    className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors focus-ring"
                                    aria-label="Share on Facebook"
                                >
                                    <Facebook size={18} />
                                </button>
                                <button
                                    className="p-2 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors focus-ring"
                                    aria-label="Share on Twitter"
                                >
                                    <Twitter size={18} />
                                </button>
                                <button
                                    className="p-2 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors focus-ring"
                                    aria-label="Share on LinkedIn"
                                >
                                    <Linkedin size={18} />
                                </button>
                            </div>
                        </motion.div>

                        {/* Back to Blog */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="text-center"
                        >
                            <Link
                                href="/blog"
                                className="text-brand-green font-semibold hover:text-brand-green-dark transition-colors focus-ring rounded"
                            >
                                ← Back to Blog
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </article>
        </>
    );
}

export async function getStaticPaths() {
    const paths = blogPosts.map((post) => ({
        params: { slug: post.slug },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    return {
        props: {
            post: post || null,
        },
    };
}
