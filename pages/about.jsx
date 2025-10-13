// About page - mission, vision, history timeline, team (UI-only)
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import TeamCard from '../components/TeamCard';
import { team } from '../lib/data';

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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-brand-green to-brand-green-dark text-white p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg leading-relaxed text-green-50">
                To empower marginalized communities by providing access to quality education, healthcare, and sustainable livelihood opportunities, enabling them to break the cycle of poverty and lead dignified, self-reliant lives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-brand-warm to-orange-500 text-white p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg leading-relaxed text-orange-50">
                A world where every individual, regardless of their socio-economic background, has equal opportunities to access education, healthcare, and resources to achieve their full potential and contribute meaningfully to society.
              </p>
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

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">Dedicated professionals driving change</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <TeamCard member={member} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
