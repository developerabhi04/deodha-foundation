// Press kit page with downloadable assets (UI-only)
import { motion } from 'framer-motion';
import { Image, FileText, Download } from 'lucide-react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';

export default function Press() {
  const pressKit = [
    { type: 'Logo', format: 'PNG, SVG', size: '0.5 MB', icon: Image },
    { type: 'Brand Guidelines', format: 'PDF', size: '1.2 MB', icon: FileText },
    { type: 'Press Release', format: 'PDF', size: '0.8 MB', icon: FileText },
    { type: 'High-Res Photos', format: 'ZIP', size: '15 MB', icon: Image },
  ];

  return (
    <>
      <SEO
        title="Press Kit"
        description="Download logos, brand guidelines, and media assets for Deodha Foundation."
        image="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1200&q=80&auto=format&fit=crop"
      />

      <Hero
        title="Press Kit"
        subtitle="Media resources, logos, and brand assets for press and partners."
        backgroundImage="https://images.unsplash.com/photo-1520975914731-8aa8f3a7e7d1?w=1200&q=80&auto=format&fit=crop"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <p className="text-lg text-gray-700">
                Download our official logos, brand guidelines, and media assets. All materials are
                available for press and partner use with proper attribution.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {pressKit.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center">
                    <item.icon size={32} className="text-brand-green mr-4" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{item.type}</h3>
                      <p className="text-sm text-gray-600">{item.format} • {item.size}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => alert('UI-only: Wire to actual file download in production')}
                    className="p-3 bg-brand-green text-white rounded-lg hover:bg-brand-green-dark transition-colors focus-ring"
                    aria-label={`Download ${item.type}`}
                  >
                    <Download size={20} />
                  </button>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Media Inquiries</h2>
              <p className="text-gray-700 mb-6">
                For press inquiries, interviews, or additional information, please contact our media team.
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Media Contact:</strong> media@deodhafoundation.org</p>
                <p><strong>Phone:</strong> +91 11 1234 5678</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded"
            >
              <h3 className="font-bold text-gray-900 mb-2">Usage Guidelines</h3>
              <p className="text-gray-700">
                When using our brand assets, please maintain proper spacing, do not alter colors,
                and always credit "Deodha Foundation." For detailed guidelines, download our Brand Guidelines PDF.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
