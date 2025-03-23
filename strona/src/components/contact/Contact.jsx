import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const formRef = useRef();

  // Create state for each input field
  const [name, setName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [feedback] = useState('');

  const sendEmail = e => {
    e.preventDefault();

    // For now, simply log the form data.
    console.log('Naam:', name);
    console.log('Voornaam:', firstName);
    console.log('Telefoonnummer:', phone);
    console.log('Email:', email);
    console.log('Bericht:', message);

    // Here you can add your email sending logic (e.g., EmailJS)
    // After sending, you can reset the states and show feedback:
    // setFeedback('Bericht succesvol verzonden!');
    // setName(''); setFirstName(''); setPhone(''); setEmail(''); setMessage('');
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
            onSubmit={sendEmail}
            className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          >
            {/* Naam */}
            <div className="mb-4">
              <label className="block text-gray-800 mb-2" htmlFor="name">
                Naam
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
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
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
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
                value={phone}
                onChange={e => setPhone(e.target.value)}
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
                value={email}
                onChange={e => setEmail(e.target.value)}
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
                value={message}
                onChange={e => setMessage(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#ACB939]"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-[#ACB939] text-white text-lg rounded-lg hover:bg-[#ACB939] transition-colors duration-300"
              >
                Verzend Bericht
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
