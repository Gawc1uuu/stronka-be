// ServicesGrid.jsx
import React from 'react';
import { motion } from 'framer-motion';
import photo from '../assets/IMG_1924.JPG';
import photo1 from '../assets/IMG_1920.JPG';
import photo2 from '../assets/IMG_1926.JPG';
import photo3 from '../assets/IMG_1930.JPG';

export default function ServicesGrid() {
  // Array of service data for convenience
  const services = [
    { image: photo, title: 'Dakwerken' },
    { image: photo1, title: 'Uitbreiding' },
    { image: photo2, title: 'Totaalrenovatie' },
    { image: photo3, title: 'Interieurrenovatie' },
  ];

  return (
    <section className="bg-gray-100 py-12 min-h-[70vh]">
      <h2 className="text-3xl md:text-4xl font-bold text-center mt-4 mb-8 text-gray-800">Our Services</h2>

      <div className="max-w-[80%] mx-auto px-6">
        {/* One column on mobile, two on md screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="flex flex-col items-center"
              // Framer Motion props
              initial={{ y: 50, opacity: 0 }} // start slightly below & invisible
              whileInView={{ y: 0, opacity: 1 }} // animate upward & fade in
              viewport={{ once: true, amount: 0.2 }} // trigger once 20% of this element is visible
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
            >
              <img src={service.image} alt={service.title} className="w-full h-auto rounded-md shadow-md" />
              <h3 className="mt-4 text-2xl font-semibold text-gray-800">{service.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
