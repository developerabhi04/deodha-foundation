// Livelihood program detail page (UI-only - same structure)
import { motion } from 'framer-motion';
import Link from 'next/link';
import SEO from '../../components/SEO';
import Hero from '../../components/Hero';
import Accordion from '../../components/Accordion';
import { programs, gallery } from '../../lib/data';

export default function LivelihoodProgram() {
  const program = programs.find((p) => p.slug === 'livelihood');
  const programGallery = gallery.filter((img) => img.program === 'livelihood');

  return (
    <>
      <SEO
        title={program.title}
        description={program.description}
        image={program.image}
      />

      <Hero
        title={program.title}
        subtitle={program.shortDescription}
        backgroundImage={program.image}
        ctaText="Support This Program"
        ctaLink="/donate"
        secondaryCtaText="Volunteer"
        secondaryCtaLink="/volunteer"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Program Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">{program.description}</p>
              <div className="bg-brand-green text-white p-6 rounded-lg">
                <p className="text-2xl font-bold mb-2">{program.beneficiaries}</p>
                <p className="text-green-100">Individuals trained and supported</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Activities</h2>
              <ul className="space-y-3">
                {program.activities.map((activity, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-brand-green text-2xl mr-3">✓</span>
                    <span className="text-gray-700 text-lg">{activity}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {program.stories.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12 bg-gray-50 p-8 rounded-xl"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Success Story</h2>
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <img
                    src={program.stories[0].image}
                    alt={program.stories[0].name}
                    className="w-32 h-32 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-lg text-gray-700 italic mb-4">"{program.stories[0].quote}"</p>
                    <p className="font-semibold text-brand-green">— {program.stories[0].name}</p>
                  </div>
                </div>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <Accordion items={program.faqs} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Program Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {programGallery.slice(0, 6).map((image) => (
                  <div key={image.id} className="rounded-lg overflow-hidden shadow-md aspect-square">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <Link
                href="/gallery"
                className="inline-block text-brand-green font-semibold hover:text-brand-green-dark transition-colors focus-ring rounded"
              >
                View Full Gallery →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
