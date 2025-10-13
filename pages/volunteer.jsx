// Volunteer page with multi-step form UI (NO BACKEND - UI-only)
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';

export default function Volunteer() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    interests: [],
    availability: '',
    skills: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // NO BACKEND: Show alert instead of actual submission
    alert('Volunteer form is UI-only. In production, wire this to your backend API to save volunteer applications.');
    console.log('Form data:', formData);
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckbox = (interest) => {
    const updated = formData.interests.includes(interest)
      ? formData.interests.filter((i) => i !== interest)
      : [...formData.interests, interest];
    setFormData({ ...formData, interests: updated });
  };

  return (
    <>
      <SEO
        title="Volunteer"
        description="Join our volunteer program and contribute your time and skills to empower communities."
        image="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1200&q=80&auto=format&fit=crop"
      />

      <Hero
        title="Volunteer With Us"
        subtitle="Your time and skills can change lives. Join our community of changemakers."
        backgroundImage="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1200&q=80&auto=format&fit=crop"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Volunteer?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-4xl mb-3">🤝</div>
                  <h3 className="font-bold text-gray-900 mb-2">Make an Impact</h3>
                  <p className="text-sm text-gray-600">Directly contribute to community empowerment</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-4xl mb-3">📚</div>
                  <h3 className="font-bold text-gray-900 mb-2">Learn & Grow</h3>
                  <p className="text-sm text-gray-600">Develop new skills and experiences</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-4xl mb-3">🌟</div>
                  <h3 className="font-bold text-gray-900 mb-2">Join Community</h3>
                  <p className="text-sm text-gray-600">Connect with like-minded individuals</p>
                </div>
              </div>
            </motion.div>

            {/* Multi-step Form (UI-only) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              {/* Progress Indicator */}
              <div className="flex items-center justify-between mb-8">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center flex-1">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                        step >= s ? 'bg-brand-green text-white' : 'bg-gray-300 text-gray-600'
                      }`}
                    >
                      {step > s ? <Check size={20} /> : s}
                    </div>
                    {s < 3 && (
                      <div
                        className={`flex-1 h-1 mx-2 ${
                          step > s ? 'bg-brand-green' : 'bg-gray-300'
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                  {/* Step 1: Personal Info */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Personal Information</h3>
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="city" className="block text-sm font-semibold text-gray-900 mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          required
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Interests */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Areas of Interest</h3>
                      <p className="text-gray-600 mb-4">Select all that apply:</p>
                      <div className="space-y-3">
                        {['Education', 'Healthcare', 'Livelihood', 'Event Management', 'Fundraising', 'Technology'].map((interest) => (
                          <label key={interest} className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                            <input
                              type="checkbox"
                              checked={formData.interests.includes(interest)}
                              onChange={() => handleCheckbox(interest)}
                              className="w-5 h-5 text-brand-green focus:ring-brand-green"
                            />
                            <span className="ml-3 text-gray-900">{interest}</span>
                          </label>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Availability & Skills */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Availability & Skills</h3>
                      <div>
                        <label htmlFor="availability" className="block text-sm font-semibold text-gray-900 mb-2">
                          Availability *
                        </label>
                        <select
                          id="availability"
                          name="availability"
                          required
                          value={formData.availability}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
                        >
                          <option value="">Select...</option>
                          <option value="weekends">Weekends Only</option>
                          <option value="weekdays">Weekdays</option>
                          <option value="flexible">Flexible</option>
                          <option value="occasional">Occasional Events</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="skills" className="block text-sm font-semibold text-gray-900 mb-2">
                          Skills & Experience
                        </label>
                        <textarea
                          id="skills"
                          name="skills"
                          rows="4"
                          value={formData.skills}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
                          placeholder="Tell us about your skills, experience, or how you'd like to contribute..."
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="px-6 py-3 border-2 border-brand-green text-brand-green rounded-lg font-semibold hover:bg-brand-green hover:text-white transition-colors focus-ring"
                    >
                      Previous
                    </button>
                  )}
                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="ml-auto px-6 py-3 bg-brand-green text-white rounded-lg font-semibold hover:bg-brand-green-dark transition-colors focus-ring"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="ml-auto px-6 py-3 bg-brand-green text-white rounded-lg font-semibold hover:bg-brand-green-dark transition-colors focus-ring"
                    >
                      Submit Application
                    </button>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
