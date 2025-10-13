// Resources page with downloadable PDFs (UI-only)
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';

export default function Resources() {
  const resources = [
    { id: 1, title: 'Annual Report 2024', category: 'Reports', size: '2.5 MB', file: '#' },
    { id: 2, title: 'Education Program Brochure', category: 'Brochures', size: '1.2 MB', file: '#' },
    { id: 3, title: 'Healthcare Impact Study', category: 'Research', size: '3.8 MB', file: '#' },
    { id: 4, title: 'Volunteer Handbook', category: 'Guides', size: '1.5 MB', file: '#' },
    { id: 5, title: 'Financial Transparency Report', category: 'Reports', size: '2.1 MB', file: '#' },
    { id: 6, title: 'Donation Guidelines', category: 'Guides', size: '0.8 MB', file: '#' },
  ];

  return (
    <>
      <SEO
        title="Resources"
        description="Download reports, brochures, and resources from Deodha Foundation."
        image="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1200&q=80&auto=format&fit=crop"
      />

      <Hero
        title="Resources"
        subtitle="Access our reports, brochures, and downloadable materials."
        backgroundImage="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=80&auto=format&fit=crop"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-lg text-gray-700 text-center mb-12"
            >
              Download our annual reports, program brochures, research studies, and volunteer guides.
              All resources are free and available for public use.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-6">
              {resources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-grow">
                      <div className="flex items-center mb-2">
                        <FileText size={24} className="text-brand-green mr-3" />
                        <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                          {resource.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
                      <p className="text-sm text-gray-600">Size: {resource.size}</p>
                    </div>
                    <button
                      onClick={() => alert('UI-only: Wire to actual file download in production')}
                      className="ml-4 p-3 bg-brand-green text-white rounded-lg hover:bg-brand-green-dark transition-colors focus-ring"
                      aria-label={`Download ${resource.title}`}
                    >
                      <Download size={20} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 bg-blue-50 border-l-4 border-blue-500 p-6 rounded"
            >
              <h3 className="font-bold text-gray-900 mb-2">Need More Information?</h3>
              <p className="text-gray-700 mb-4">
                If you need additional resources or have specific requests, please contact us.
              </p>
              <a
                href="/contact"
                className="inline-block bg-brand-green text-white px-6 py-2 rounded-lg font-semibold hover:bg-brand-green-dark transition-colors focus-ring"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
