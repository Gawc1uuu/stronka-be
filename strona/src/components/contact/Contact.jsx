import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [feedback] = useState('');

  // onSubmit handler that sets the loading state.
  // Since the form submits normally, the page will navigate away.
  const handleSubmit = () => {
    setLoading(true);
  };

  console.log(motion);

  return (
    <section className="w-full h-[80vh] bg-gray-100 flex items-center justify-center">
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            Contacteer ons
          </motion.h2>
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            action="https://formsubmit.co/info@renocare.be" // Replace with your email endpoint
            method="POST"
            className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          >
            {/* Optional hidden fields */}
            <input type="hidden" name="_next" value="https://renocare.be" />
            <input type="hidden" name="_captcha" value="false" />

            {/* Naam */}
            <div className="mb-4">
              <label className="block text-gray-800 mb-2" htmlFor="name">
                Naam
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#ACB939]"
              />
            </div>
            {/* Voornaam */}
            <div className="mb-4">
              <label className="block text-gray-800 mb-2" htmlFor="firstName">
                Voornaam
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#ACB939]"
              />
            </div>
            {/* Telefoonnummer */}
            <div className="mb-4">
              <label className="block text-gray-800 mb-2" htmlFor="phone">
                Telefoonnummer
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#ACB939]"
              />
            </div>
            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-800 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#ACB939]"
              />
            </div>
            {/* Bericht */}
            <div className="mb-4">
              <label className="block text-gray-800 mb-2" htmlFor="message">
                Bericht
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#ACB939]"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className={`px-6 py-3 text-white text-lg rounded-lg transition-colors duration-300 cursor-pointer ${
                  loading ? 'bg-gray-500' : 'bg-[#ACB939] hover:bg-[#91b637] active:scale-95'
                }`}
              >
                {loading ? 'Verzenden...' : 'Verzend Bericht'}
              </button>
            </div>
            {feedback && <p className="mt-4 text-center text-lg text-gray-800">{feedback}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
