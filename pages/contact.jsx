// pages/Contact.jsx - Complete with Translation Support
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import { useLanguage } from '../lib/LanguageContext';

export default function Contact() {
  const { language, t } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();
    // NO BACKEND: Show alert instead of actual submission
    alert(
      language === 'hi'
        ? 'संपर्क फॉर्म केवल UI है। उत्पादन में, इसे अपने बैकएंड API या ईमेल सेवा से कनेक्ट करें।'
        : 'Contact form is UI-only. In production, wire this to your backend API or email service.'
    );
  };

  return (
    <>
      <SEO
        title={language === 'hi' ? 'संपर्क करें' : 'Contact Us'}
        description={
          language === 'hi'
            ? 'धेवधा विकास समिति से संपर्क करें। हम आपसे सुनना पसंद करेंगे।'
            : 'Get in touch with Dheodha Vikas Samiti. We\'d love to hear from you.'
        }
        image="https://res.cloudinary.com/dusalynec/image/upload/v1762001895/IMG_2626_jrqyt0.jpg"
        backgroundImage="https://res.cloudinary.com/dusalynec/image/upload/v1762001895/IMG_2626_jrqyt0.jpg"
      />

      <Hero
        title={language === 'hi' ? 'हमसे संपर्क करें' : 'Contact Us'}
        subtitle={
          language === 'hi'
            ? 'कोई प्रश्न है या शामिल होना चाहते हैं? हमसे संपर्क करें।'
            : 'Have questions or want to get involved? Reach out to us.'
        }
        backgroundImage="https://res.cloudinary.com/dusalynec/image/upload/v1762001895/IMG_2626_jrqyt0.jpg"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {language === 'hi' ? 'संपर्क में रहें' : 'Get in Touch'}
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  {language === 'hi'
                    ? 'चाहे आप दान करना चाहें, स्वयंसेवक बनना चाहें, या हमारे कार्यक्रमों के बारे में अधिक जानना चाहें, हम आपकी सहायता के लिए यहां हैं।'
                    : 'Whether you want to donate, volunteer, or learn more about our programs, we\'re here to help.'
                  }
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {language === 'hi' ? 'कार्यालय का पता' : 'Office Address'}
                      </h3>
                      <p className="text-gray-600">
                        {language === 'hi' ? (
                          <>
                            धेवधा विकास समिति<br />
                            गांव: धेवधा<br />
                            ब्लॉक: पकड़ी बारावां<br />
                            डाकघर: पकड़ीबारवां<br />
                            जिला: नवादा, बिहार - 805124
                          </>
                        ) : (
                          <>
                            Dheodha Vikas Samiti<br />
                            Village: Dheodha<br />
                            Block: Pakri Barawan<br />
                            Post: Pakaribarwan<br />
                            District: Nawada, Bihar - 805124
                          </>
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {language === 'hi' ? 'फोन' : 'Phone'}
                      </h3>
                      <p className="text-gray-600">+91 1234567890</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {language === 'hi' ? 'ईमेल' : 'Email'}
                      </h3>
                      <p className="text-gray-600">contact@dheodhavikassamiti.org</p>
                    </div>
                  </div>

                  {/* <div className="flex items-start">
                    <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock size={20} className="text-white" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {language === 'hi' ? 'कार्यालय समय' : 'Office Hours'}
                      </h3>
                      <p className="text-gray-600">
                        {language === 'hi' ? (
                          <>
                            सोमवार - शनिवार: सुबह 9:00 - शाम 6:00<br />
                            रविवार: बंद
                          </>
                        ) : (
                          <>
                            Monday - Saturday: 9:00 AM - 6:00 PM<br />
                            Sunday: Closed
                          </>
                        )}
                      </p>
                    </div>
                  </div> */}
                </div>

                {/* Map Placeholder */}
                <div className="mt-12 rounded-lg overflow-hidden shadow-md h-72">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53646.64694671025!2d85.67534506665197!3d24.978772129881946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f25104a245d999%3A0xadd601e531e9d304!2sDhewadha%20Chhatarwar%2C%20Bihar!5e1!3m2!1sen!2sin!4v1762013173170!5m2!1sen!2sin" referrerpolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title={language === 'hi' ? 'धेवधा विकास समिति कार्यालय स्थान' : 'Dheodha Vikas Samiti Office Location'}
                  />
                </div>
              </motion.div>

              {/* Contact Form (UI-only) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {language === 'hi' ? 'हमें संदेश भेजें' : 'Send us a Message'}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                      {language === 'hi' ? 'पूरा नाम *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
                      placeholder={language === 'hi' ? 'आपका नाम' : 'John Doe'}
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      {language === 'hi' ? 'ईमेल पता *' : 'Email Address *'}
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
                      placeholder={language === 'hi' ? 'आपका ईमेल' : 'john@example.com'}
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                      {language === 'hi' ? 'फोन नंबर' : 'Phone Number'}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
                      placeholder={language === 'hi' ? '+91 1234567890' : '+91 1234567890'}
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                      {language === 'hi' ? 'विषय *' : 'Subject *'}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
                      placeholder={language === 'hi' ? 'हम आपकी कैसे मदद कर सकते हैं?' : 'How can we help?'}
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                      {language === 'hi' ? 'संदेश *' : 'Message *'}
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
                      placeholder={language === 'hi' ? 'अपना संदेश यहां लिखें...' : 'Write your message here...'}
                      aria-required="true"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-green text-white py-3 rounded-lg font-semibold hover:bg-brand-green-dark transition-colors focus-ring"
                  >
                    {language === 'hi' ? 'संदेश भेजें' : 'Send Message'}
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    {language === 'hi'
                      ? 'हम 24-48 घंटों के भीतर आपको जवाब देंगे।'
                      : 'We\'ll get back to you within 24-48 hours.'
                    }
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
