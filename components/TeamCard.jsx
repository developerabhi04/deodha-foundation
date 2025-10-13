// Team member card component (UI-only)
import { motion } from 'framer-motion';

export default function TeamCard({ member }) {
    return (
        <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-md overflow-hidden text-center"
        >
            <div className="relative h-64 overflow-hidden">
                <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-brand-green font-semibold text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
        </motion.div>
    );
}
