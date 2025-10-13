// Dynamic event detail page (UI-only - uses getStaticPaths and getStaticProps)
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, MapPin, Users } from 'lucide-react';
import SEO from '../../components/SEO';
import Hero from '../../components/Hero';
import { events } from '../../lib/data';

export default function EventDetail({ event }) {
  if (!event) return <div>Event not found</div>;

  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <SEO
        title={event.title}
        description={event.shortDescription}
        image={event.image}
      />

      <Hero
        title={event.title}
        subtitle={formattedDate}
        backgroundImage={event.image}
        ctaText={event.registrationRequired && event.type === 'upcoming' ? 'Register Now' : undefined}
        ctaLink={event.registrationRequired && event.type === 'upcoming' ? '/contact' : undefined}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Event Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-md p-8 mb-8"
            >
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center text-gray-700">
                  <Calendar size={20} className="mr-2 text-brand-green" />
                  <span>{formattedDate}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <MapPin size={20} className="mr-2 text-brand-green" />
                  <span>{event.location}</span>
                </div>
                {event.registrationRequired && (
                  <div className="flex items-center text-gray-700">
                    <Users size={20} className="mr-2 text-brand-green" />
                    <span>Registration Required</span>
                  </div>
                )}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Event</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">{event.fullDescription}</p>

              {event.type === 'upcoming' && event.registrationRequired && (
                <div className="bg-brand-green-light bg-opacity-10 border-l-4 border-brand-green p-6 rounded">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">How to Register</h3>
                  <p className="text-gray-700 mb-4">
                    To register for this event, please fill out our contact form or reach out to us directly.
                    Our team will get back to you with confirmation details.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block bg-brand-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-green-dark transition-colors focus-ring"
                  >
                    Contact Us to Register
                  </Link>
                </div>
              )}
            </motion.div>

            {/* Related Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <Link
                href="/events"
                className="text-brand-green font-semibold hover:text-brand-green-dark transition-colors focus-ring rounded"
              >
                ← Back to All Events
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticPaths() {
  const paths = events.map((event) => ({
    params: { slug: event.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const event = events.find((e) => e.slug === params.slug);

  return {
    props: {
      event: event || null,
    },
  };
}
