// Programs index page (UI-only)
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import Hero from '../../components/Hero';
import ProgramCard from '../../components/ProgramCard';
import { programs } from '../../lib/data';

export default function Programs() {
  return (
    <>
      <SEO
        title="Our Programs"
        description="Discover our education, healthcare, and livelihood programs transforming communities."
        image="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=80&auto=format&fit=crop"
      />

      <Hero
        title="Our Programs"
        subtitle="Comprehensive initiatives addressing education, healthcare, and livelihoods to create sustainable impact."
        backgroundImage="https://images.unsplash.com/photo-1509099836639-18ba9f7b5d3d?w=1200&q=80&auto=format&fit=crop"
        ctaText="Get Involved"
        ctaLink="/volunteer"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 max-w-3xl mx-auto"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Our programs are designed to address root causes of poverty and inequality. Through a holistic approach combining education, healthcare, and livelihood support, we empower individuals and communities to build sustainable futures.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProgramCard program={program} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
