"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({});

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({
          success: true,
          message: data.message || 'Your message has been sent directly to vs2ibha@gmail.com! I will respond shortly.',
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setSubmitStatus({
          success: false,
          message: data.message || 'Failed to send message. Please try again.',
        });
      }
    } catch (err: any) {
      console.error('Contact form submission error:', err);
      setSubmitStatus({
        success: false,
        message: 'Network error or service unavailable. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 mb-4 text-sm font-semibold">
            <FiMail className="text-amber-400" /> Real-Time Contact Dispatch
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Have a project, job opportunity, or inquiry? Send me a message below to send an email directly to my inbox in real time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Direct Contact Details
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I am actively seeking software engineering, full stack development, and AI roles. Feel free to contact me directly via email or phone.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start bg-gray-800/60 p-4 rounded-xl border border-gray-700/80">
                  <div className="p-3 bg-amber-500/10 text-amber-400 rounded-lg border border-amber-500/30 mr-4 shrink-0">
                    <FiMail size={22} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-1">Direct Email</h4>
                    <a href="mailto:vs2ibha@gmail.com" className="text-lg font-bold text-amber-400 hover:underline">
                      vs2ibha@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start bg-gray-800/60 p-4 rounded-xl border border-gray-700/80">
                  <div className="p-3 bg-amber-500/10 text-amber-400 rounded-lg border border-amber-500/30 mr-4 shrink-0">
                    <FiPhone size={22} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-1">Phone / Mobile</h4>
                    <p className="text-lg font-bold text-white">9373012758</p>
                  </div>
                </div>

                <div className="flex items-start bg-gray-800/60 p-4 rounded-xl border border-gray-700/80">
                  <div className="p-3 bg-amber-500/10 text-amber-400 rounded-lg border border-amber-500/30 mr-4 shrink-0">
                    <FiMapPin size={22} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-1">Location</h4>
                    <p className="text-lg font-bold text-white">Pune, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-400 mb-4">Connect on Professional Platforms</h4>
              <div className="flex space-x-4">
                <a href="https://leetcode.com/u/vaibhavsable122/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center text-amber-400 hover:bg-amber-400 hover:text-gray-950 transition-colors shadow-md">
                  <span className="font-bold text-xs">LC</span>
                </a>
                <a href="https://codeforces.com/profile/vaibhavsable150" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-colors shadow-md">
                  <span className="font-bold text-xs">CF</span>
                </a>
                <a href="https://www.codechef.com/users/vaibhavsable" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center text-orange-400 hover:bg-orange-500 hover:text-white transition-colors shadow-md">
                  <span className="font-bold text-xs">CC</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Real-time Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800/90 p-8 rounded-2xl border border-gray-700/80 shadow-2xl relative"
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              Send Me a Direct Message
            </h3>
            <p className="text-xs text-amber-400 mb-6 font-mono">
              ⚡ Delivered directly to vs2ibha@gmail.com in real time
            </p>

            {submitStatus.message && (
              <div
                className={`mb-6 p-4 rounded-xl border flex items-start gap-3 ${
                  submitStatus.success
                    ? 'bg-emerald-950/80 text-emerald-200 border-emerald-500/50'
                    : 'bg-rose-950/80 text-rose-200 border-rose-500/50'
                }`}
              >
                {submitStatus.success ? (
                  <FiCheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <FiAlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                )}
                <span className="text-sm leading-relaxed">{submitStatus.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-gray-300 mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 bg-gray-900 text-white placeholder-gray-500 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-gray-300 mb-2">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 bg-gray-900 text-white placeholder-gray-500 text-sm"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-xs font-semibold text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry / Job Opportunity"
                  className="w-full px-4 py-3 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 bg-gray-900 text-white placeholder-gray-500 text-sm"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-xs font-semibold text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 bg-gray-900 text-white placeholder-gray-500 text-sm resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 bg-amber-400 hover:bg-amber-300 text-gray-950 font-bold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed shadow-lg shadow-amber-500/20 text-sm cursor-pointer"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-gray-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Dispatching Email...
                  </span>
                ) : (
                  <>
                    <FiSend className="text-base" /> Send Direct Email
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
