// pages/Contact.jsx - Complete with EmailJS Integration and Validation
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, AlertCircle, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import { useLanguage } from '../lib/LanguageContext';

export default function Contact() {
  const { language } = useLanguage();

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // Validation errors
  const [errors, setErrors] = useState({});

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  // EmailJS Configuration - Replace with your actual credentials
  const EMAILJS_CONFIG = {
    serviceId: 'service_66fdw6f', // e.g., 'service_abc123'
    templateId: 'template_qxmquo3', // e.g., 'template_def456'
    publicKey: 'QRyLjNaHYK6cOaICI' // e.g., 'user_ghi789'
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = language === 'hi' ? 'नाम आवश्यक है' : 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = language === 'hi' ? 'नाम कम से कम 2 अक्षर का होना चाहिए' : 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = language === 'hi' ? 'ईमेल आवश्यक है' : 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = language === 'hi' ? 'वैध ईमेल पता दर्ज करें' : 'Please enter a valid email';
    }

    // Phone validation (optional but if provided, should be valid)
    if (formData.phone && !/^[0-9+\-\s()]{10,}$/.test(formData.phone)) {
      newErrors.phone = language === 'hi' ? 'वैध फोन नंबर दर्ज करें' : 'Please enter a valid phone number';
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = language === 'hi' ? 'विषय आवश्यक है' : 'Subject is required';
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = language === 'hi' ? 'विषय कम से कम 5 अक्षर का होना चाहिए' : 'Subject must be at least 5 characters';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = language === 'hi' ? 'संदेश आवश्यक है' : 'Message is required';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = language === 'hi' ? 'संदेश कम से कम 20 अक्षर का होना चाहिए' : 'Message must be at least 20 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        subject: formData.subject,
        message: formData.message
      };

      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );

      // Success
      setSubmitStatus('success');
      const data = setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      // Auto-hide success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);

    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
                            ब्लॉक: पकरीबरवां<br />
                            डाकघर: पकरीबरवां<br />
                            जिला: नवादा, बिहार - 805124
                          </>
                        ) : (
                          <>
                            Dheodha Vikas Samiti<br />
                            Village: Dheodha<br />
                            Block: Pakribarawan<br />
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
                      <p className="text-gray-600">+91 7678666621</p>
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
                      <p className="text-gray-600">dheodhavikassamiti@gmail.com</p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="mt-12 rounded-lg overflow-hidden shadow-md h-72">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53646.64694671025!2d85.67534506665197!3d24.978772129881946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f25104a245d999%3A0xadd601e531e9d304!2sDhewadha%20Chhatarwar%2C%20Bihar!5e1!3m2!1sen!2sin!4v1762013173170!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={language === 'hi' ? 'धेवधा विकास समिति कार्यालय स्थान' : 'Dheodha Vikas Samiti Office Location'}
                  />
                </div>
              </motion.div>

              {/* Contact Form with EmailJS */}
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

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start"
                  >
                    <CheckCircle className="text-green-600 mr-3 flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <p className="text-green-800 font-medium">
                        {language === 'hi' ? 'संदेश सफलतापूर्वक भेज दिया गया!' : 'Message sent successfully!'}
                      </p>
                      <p className="text-green-700 text-sm">
                        {language === 'hi' ? 'हम 24-48 घंटों के भीतर आपको जवाब देंगे।' : 'We\'ll get back to you within 24-48 hours.'}
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start"
                  >
                    <AlertCircle className="text-red-600 mr-3 flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <p className="text-red-800 font-medium">
                        {language === 'hi' ? 'संदेश भेजने में त्रुटि हुई। कृपया पुनः प्रयास करें।' : 'Error sending message. Please try again.'}
                      </p>
                      <p className="text-red-700 text-sm">
                        {language === 'hi' ? 'यदि समस्या बनी रहती है, कृपया सीधे ईमेल करें।' : 'If the issue persists, please email us directly.'}
                      </p>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                      {language === 'hi' ? 'पूरा नाम *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors ${errors.name
                        ? 'border-red-300 focus:ring-red-500'
                        : 'border-gray-300 focus:ring-brand-green'
                        }`}
                      placeholder={language === 'hi' ? 'आपका नाम' : 'John Doe'}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      {language === 'hi' ? 'ईमेल पता *' : 'Email Address *'}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors ${errors.email
                        ? 'border-red-300 focus:ring-red-500'
                        : 'border-gray-300 focus:ring-brand-green'
                        }`}
                      placeholder={language === 'hi' ? 'आपका ईमेल' : 'john@example.com'}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                      {language === 'hi' ? 'फोन नंबर' : 'Phone Number'}
                    </label>
                    <input
                      type="number"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors ${errors.phone
                        ? 'border-red-300 focus:ring-red-500'
                        : 'border-gray-300 focus:ring-brand-green'
                        }`}
                      placeholder={language === 'hi' ? '+91 1234567890' : '+91 1234567890'}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                      {language === 'hi' ? 'विषय *' : 'Subject *'}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors ${errors.subject
                        ? 'border-red-300 focus:ring-red-500'
                        : 'border-gray-300 focus:ring-brand-green'
                        }`}
                      placeholder={language === 'hi' ? 'हम आपकी कैसे मदद कर सकते हैं?' : 'How can we help?'}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                    />
                    {errors.subject && (
                      <p id="subject-error" className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                      {language === 'hi' ? 'संदेश *' : 'Message *'}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors ${errors.message
                        ? 'border-red-300 focus:ring-red-500'
                        : 'border-gray-300 focus:ring-brand-green'
                        }`}
                      placeholder={language === 'hi' ? 'अपना संदेश यहां लिखें...' : 'Write your message here...'}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 rounded-lg font-semibold transition-colors focus:ring-2 focus:ring-offset-2 ${isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed focus:ring-gray-400'
                      : 'bg-brand-green hover:bg-brand-green-dark focus:ring-brand-green'
                      } text-white`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {language === 'hi' ? 'भेजा जा रहा है...' : 'Sending...'}
                      </span>
                    ) : (
                      language === 'hi' ? 'संदेश भेजें' : 'Send Message'
                    )}
                  </button>

                  {!isSubmitting && (
                    <p className="text-sm text-gray-600 text-center">
                      {language === 'hi'
                        ? 'हम 24-48 घंटों के भीतर आपको जवाब देंगे।'
                        : 'We\'ll get back to you within 24-48 hours.'
                      }
                    </p>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
