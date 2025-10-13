// Admin dashboard UI placeholder (NO AUTH - UI-only demo)
import { motion } from 'framer-motion';
import { Users, Calendar, Heart, TrendingUp } from 'lucide-react';
import SEO from '../components/SEO';
import { stats, events, blogPosts } from '../lib/data';

export default function Admin() {
  // NO BACKEND: This is a UI-only demo dashboard
  return (
    <>
      <SEO
        title="Admin Dashboard"
        description="Admin dashboard for Deodha Foundation (UI-only demo)"
      />

      <div className="min-h-screen bg-gray-100">
        <div className="bg-brand-green text-white p-6">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-green-100 mt-2">
              ⚠️ UI-only demo - No authentication or backend implemented
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { icon: Users, label: 'Total Beneficiaries', value: '10,000+', color: 'blue' },
              { icon: Calendar, label: 'Upcoming Events', value: '2', color: 'green' },
              { icon: Heart, label: 'Active Donors', value: '350+', color: 'red' },
              { icon: TrendingUp, label: 'Volunteers', value: '150+', color: 'purple' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <stat.icon size={32} className={`text-${stat.color}-500`} />
                  <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
                </div>
                <p className="text-gray-600 font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Recent Events */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Recent Events</h2>
              <div className="space-y-4">
                {events.slice(0, 3).map((event) => (
                  <div key={event.id} className="border-b border-gray-200 pb-4 last:border-0">
                    <h3 className="font-semibold text-gray-900">{event.title}</h3>
                    <p className="text-sm text-gray-600">{event.date} - {event.location}</p>
                    <span className={`inline-block text-xs px-2 py-1 rounded mt-2 ${
                      event.type === 'upcoming' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {event.type}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent Blog Posts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Recent Blog Posts</h2>
              <div className="space-y-4">
                {blogPosts.slice(0, 3).map((post) => (
                  <div key={post.id} className="border-b border-gray-200 pb-4 last:border-0">
                    <h3 className="font-semibold text-gray-900">{post.title}</h3>
                    <p className="text-sm text-gray-600">{post.author} - {post.date}</p>
                    <span className="inline-block text-xs bg-brand-green text-white px-2 py-1 rounded mt-2">
                      {post.category}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Warning Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded"
          >
            <h3 className="font-bold text-gray-900 mb-2">⚠️ Development Note</h3>
            <p className="text-gray-700">
              This is a UI-only admin dashboard demo. In production, implement proper authentication
              (e.g., NextAuth.js), role-based access control, and secure API endpoints to manage data.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
