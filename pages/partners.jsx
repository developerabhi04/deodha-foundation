// Partners page with logos grid (UI-only)
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import { partners } from '../lib/data';

export default function Partners() {
  return (
    <>
      <SEO
        title="Partners"
        description="Our partners and collaborators in creating social impact."
        image="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1200&q=80&auto=format&fit=crop"
      />

      <Hero
        title="Our Partners"
        subtitle="Working together to create lasting change and empower communities."
        backgroundImage="https://images.unsplash.com/photo-1509099836639-18ba9f7b5d3d?w=1200&q=80&auto=format&fit=crop"
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
            <p className="text-lg text-gray-700">
              We collaborate with government agencies, international organizations, corporate partners,
              and local NGOs to maximize our impact and reach more communities.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-lg shadow-md p-8 flex items-center justify-center hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-green to-brand-green-dark rounded-full flex items-center justify-center text-white text-2xl font-bold mb-3 mx-auto">
                    {partner.logo}
                  </div>
                  <p className="text-sm font-semibold text-gray-900">{partner.name}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 bg-gradient-to-r from-brand-green to-brand-green-dark text-white rounded-xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Become a Partner</h2>
            <p className="text-lg text-green-100 mb-6 max-w-2xl mx-auto">
              Join us in our mission to create sustainable social impact. We welcome partnerships
              with organizations that share our values and vision.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-brand-green px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors focus-ring"
            >
              Partner With Us
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
