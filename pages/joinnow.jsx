// Donate page with payment options UI (NO BACKEND - UI-only)
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Hero from '../components/Hero';

export default function Donate() {
    const [selectedAmount, setSelectedAmount] = useState(1000);
    const [customAmount, setCustomAmount] = useState('');
    const [selectedPayment, setSelectedPayment] = useState('upi');

    const suggestedAmounts = [500, 1000, 2500, 5000, 10000];

    const handleDonate = (e) => {
        e.preventDefault();
        // NO BACKEND: Show alert instead of actual processing
        alert('Donation form is UI-only. In production, wire this to a payment gateway like Razorpay or Stripe.');
    };

    return (
        <>
          

            <Hero
                title="Make a Difference"
                subtitle="Your contribution helps us empower communities and transform lives. Every rupee counts."
                backgroundImage="https://res.cloudinary.com/dusalynec/image/upload/v1762001895/IMG_2626_jrqyt0.jpg"
            />

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        {/* Impact Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-gradient-to-r from-brand-green to-brand-green-dark text-white rounded-xl p-8 mb-12"
                        >
                            <h2 className="text-3xl font-bold mb-6">Your Impact</h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div>
                                    <p className="text-4xl font-bold mb-2">₹500</p>
                                    <p className="text-green-100">Provides school supplies for 5 children</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-bold mb-2">₹2,000</p>
                                    <p className="text-green-100">Covers medical checkup for 10 families</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-bold mb-2">₹5,000</p>
                                    <p className="text-green-100">Funds vocational training for 2 individuals</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Donation Form (UI-only) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white rounded-xl shadow-lg p-8"
                        >
                            <form onSubmit={handleDonate}>
                                {/* Amount Selection */}
                                <div className="mb-8">
                                    <label className="block text-lg font-semibold text-gray-900 mb-4">
                                        Select Donation Amount
                                    </label>
                                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-4">
                                        {suggestedAmounts.map((amount) => (
                                            <button
                                                key={amount}
                                                type="button"
                                                onClick={() => {
                                                    setSelectedAmount(amount);
                                                    setCustomAmount('');
                                                }}
                                                className={`p-4 rounded-lg font-semibold transition-all focus-ring ${selectedAmount === amount && !customAmount
                                                        ? 'bg-brand-green text-white'
                                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                    }`}
                                            >
                                                ₹{amount.toLocaleString()}
                                            </button>
                                        ))}
                                    </div>
                                    <input
                                        type="number"
                                        placeholder="Enter custom amount"
                                        value={customAmount}
                                        onChange={(e) => {
                                            setCustomAmount(e.target.value);
                                            setSelectedAmount(0);
                                        }}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
                                    />
                                </div>

                                {/* Payment Method (UI-only) */}
                                <div className="mb-8">
                                    <label className="block text-lg font-semibold text-gray-900 mb-4">
                                        Payment Method
                                    </label>
                                    <div className="space-y-3">
                                        {[
                                            { id: 'upi', label: 'UPI (Google Pay, PhonePe, Paytm)' },
                                            { id: 'bank', label: 'Bank Transfer / NEFT' },
                                            { id: 'card', label: 'Credit/Debit Card (Coming Soon)' },
                                        ].map((method) => (
                                            <button
                                                key={method.id}
                                                type="button"
                                                onClick={() => setSelectedPayment(method.id)}
                                                className={`w-full p-4 rounded-lg border-2 transition-all text-left flex items-center justify-between focus-ring ${selectedPayment === method.id
                                                        ? 'border-brand-green bg-brand-green bg-opacity-5'
                                                        : 'border-gray-300 hover:border-gray-400'
                                                    }`}
                                                disabled={method.id === 'card'}
                                            >
                                                <span className="font-semibold text-gray-900">{method.label}</span>
                                                {selectedPayment === method.id && (
                                                    <Check size={24} className="text-brand-green" />
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Donor Information (UI-only) */}
                                <div className="mb-8 space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-brand-green text-white py-4 rounded-lg font-bold text-lg hover:bg-brand-green-dark transition-colors focus-ring"
                                >
                                    Proceed to Donate ₹{customAmount || selectedAmount.toLocaleString()}
                                </button>

                                <p className="text-sm text-gray-600 text-center mt-4">
                                    🔒 Secure donation. Your information is protected. Tax exemption certificate available.
                                </p>
                            </form>
                        </motion.div>

                        {/* Tax Benefit Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded"
                        >
                            <h3 className="font-bold text-gray-900 mb-2">Tax Benefits</h3>
                            <p className="text-gray-700">
                                Donations to Deodha Foundation are eligible for 80G tax exemption under the Income Tax Act.
                                You will receive a tax exemption certificate via email.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
