// About page - mission, vision, history timeline, team (UI-only)
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import TeamCard from '../components/TeamCard';
import { team } from '../lib/data';
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Eye, Target, Users } from 'lucide-react';

// Dynamically import Swiper with SSR disabled
const Swiper = dynamic(() => import('swiper/react').then((mod) => mod.Swiper), {
  ssr: false,
});

const SwiperSlide = dynamic(() => import('swiper/react').then((mod) => mod.SwiperSlide), {
  ssr: false,
});

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Import Swiper modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function About() {
  const timeline = [
    { year: '2010', event: 'Foundation established with a vision to empower marginalized communities' },
    { year: '2012', event: 'Launched first education center serving 100 children in rural Bihar' },
    { year: '2015', event: 'Expanded healthcare program with mobile clinics reaching 10 villages' },
    { year: '2018', event: 'Introduced livelihood training programs, trained 500 individuals' },
    { year: '2021', event: 'Crossed milestone of impacting 5,000 lives across three states' },
    { year: '2025', event: 'Ongoing expansion with new programs and partnerships' },
  ];

  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Deodha Foundation's mission, vision, history, and the team driving social change."
        image="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1200&q=80&auto=format&fit=crop"
      />

      <Hero
        title="About Deodha Foundation"
        subtitle="Building a better tomorrow through compassion, commitment, and community empowerment."
        backgroundImage="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1200&q=80&auto=format&fit=crop"
      />

      {/* Mission & Vision */}
      {/* Vision & Mission Section*/}
      <section id="vision-mission" className="py-4 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 mb-24">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider inline-block mb-4">
              Our Direction
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Vision & Mission</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guiding principles driving Dheodha's transformation
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[16/9] relative overflow-hidden">
                <img
                  src="https://gsvsorissango.org/aionpanel/uploads/home/1708675359.jpg"
                  alt="Vision"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="flex items-center space-x-3">
                    <div className="bg-white p-2 rounded-lg">
                      <Eye className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-white font-semibold">Our Vision</span>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Model Village Initiative</h3>
                <p className="text-sm text-blue-600 font-medium mb-4">दृष्टिकोण</p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  To transform Dheodha into a model village that blends cultural heritage with modern development—ensuring quality education, sustainable infrastructure, economic empowerment, and a safe, inclusive environment for all.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Education</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Infrastructure</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Empowerment</span>
                </div>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[16/9] relative overflow-hidden">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR6V6qOJi6LcVGa5tWz83NofzkyRGiTWluxQ&s"
                  alt="Mission"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="flex items-center space-x-3">
                    <div className="bg-white p-2 rounded-lg">
                      <Target className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-white font-semibold">Our Mission</span>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Community-First Approach</h3>
                <p className="text-sm text-green-600 font-medium mb-4">मिशन</p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  To promote education, health, cleanliness, employment, and social harmony for the overall development of the village through transparent, community-driven initiatives.
                </p>
                <div className="space-y-2">
                  {['Transparent Governance', 'Community Participation', 'Sustainable Development'].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Deodha Foundation was born in 2010 from a simple yet powerful belief: that every individual deserves the opportunity to thrive. Founded by Dr. Anjali Mehta, a social development professional with over two decades of experience, the foundation began with a single education center serving 100 children in rural Bihar.
              </p>
              <p className="mb-4">
                Over the years, witnessing the transformative power of education, we expanded our reach to include healthcare and livelihood programs. Today, we operate across multiple states, touching the lives of over 10,000 individuals annually.
              </p>
              <p>
                Our journey has been fueled by the unwavering support of donors, volunteers, and partner organizations who share our vision. Together, we continue to build a more equitable and compassionate society.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600">Milestones that shaped our impact</p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center mr-6">
                  <div className="w-16 h-16 bg-brand-green text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {item.year}
                  </div>
                  {index !== timeline.length - 1 && (
                    <div className="w-1 h-full bg-brand-green-light mt-2" />
                  )}
                </div>
                <div className="flex-grow pb-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="text-gray-700">{item.event}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founding Members Section */}
      <div id="founding-members" className="mb-24 relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header - English Only */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-white text-indigo-600 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider mb-6 shadow-lg">
              <Users className="w-5 h-5" />
              <span>Leadership Team</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gray-900">Our </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Founding Members</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visionary leaders dedicated to transforming Dheodha through transparent governance and community empowerment
            </p>
          </motion.div>

          {/* Slider */}
          <div className="relative px-8">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: '.team-next',
                prevEl: '.team-prev',
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              className="team-swiper !pb-16"
            >
              {[
                {
                  name: 'Rajesh Kumar',
                  role: 'President',
                  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&q=80',
                  color: 'from-blue-500 to-indigo-600',
                },
                {
                  name: 'Chandan Kumar',
                  role: 'Vice President',
                  image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80',
                  color: 'from-green-500 to-emerald-600',
                },
                {
                  name: 'Mitendra Kumar',
                  role: 'Secretary',
                  image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&q=80',
                  color: 'from-purple-500 to-violet-600',
                },
                {
                  name: 'Devkant Mishra',
                  role: 'Treasurer',
                  image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&q=80',
                  color: 'from-pink-500 to-rose-600',
                },
                {
                  name: 'Brajesh Kumar',
                  role: 'Vice Secretary',
                  image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=500&q=80',
                  color: 'from-orange-500 to-amber-600',
                },
                {
                  name: 'Rishav Mishra',
                  role: 'Website & Tech Manager',
                  image: 'https://rishavmishra.com/assets/Avatar-CnoY_3lK.jpg',
                  color: 'from-teal-500 to-cyan-600',
                },
              ].map((member, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-full"
                  >
                    {/* Image Section */}
                    <div className="relative h-80 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />

                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${member.color} opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                      {/* Role Badge */}
                      <div className={`absolute top-6 right-6 bg-gradient-to-r ${member.color} text-white px-4 py-2 rounded-full text-xs font-bold shadow-xl border-2 border-white/30`}>
                        {member.role}
                      </div>

                      {/* Name & Title */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-2xl">{member.name}</h3>
                        <div className="flex items-center space-x-2">
                          <div className={`h-1 w-12 bg-gradient-to-r ${member.color} rounded-full`}></div>
                          <p className="text-sm text-gray-200 font-medium">{member.role}</p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Accent */}
                    <div className={`h-2 bg-gradient-to-r ${member.color}`}></div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <button className="team-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all group">
              <ChevronLeft className="w-7 h-7 text-gray-700 group-hover:text-white" />
            </button>
            <button className="team-next absolute right-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all group">
              <ChevronRight className="w-7 h-7 text-gray-700 group-hover:text-white" />
            </button>
          </div>

          {/* View Full Team Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-4"
          >
            <a
              href="/team"
              className="group inline-flex items-center space-x-3 bg-gradient-to-r from-green-600 to-purple-600 text-white px-12 py-5 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all"
            >
              <Users className="w-4 h-4" />
              <span>View Full Team</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-sm text-gray-500 mt-4">
              Learn more about our leadership and their journey
            </p>
          </motion.div>
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .team-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #6366f1;
          opacity: 0.4;
        }
        
        .team-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          width: 36px;
          border-radius: 6px;
          background: linear-gradient(to right, #6366f1, #a855f7);
        }
      `}</style>
    </>
  );
}
