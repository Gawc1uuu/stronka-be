import React from 'react';
import { motion } from 'framer-motion';
import photo from '../../assets/IMG_1927.JPG';

export default function TextLeftImageRight() {
  console.log(motion);

  return (
    <section className="w-full py-12 bg-gray-100">
      {/* Centered title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
        RENOCARE - Ervaar meer dan 18 jaar topkwaliteit
        <div className="w-16 h-1 bg-[#ACB939] mt-2 mx-auto" />
      </h2>

      {/* Two-column layout */}
      <div className="md:max-w-[80%] gap-6 mx-auto px-6 flex flex-col md:flex-row items-start md:items-center md:mb-30">
        {/* Left column - text & button */}
        <motion.div
          className="
            w-full 
            md:w-1/2 
            mb-6 md:mb-0 md:pr-10 
            border-b-8 md:border-l-8 md:border-b-0 border-[#ACB939] 
            bg-white shadow-lg 
            p-6 md:p-8 
            text-center md:text-left
          "
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="leading-relaxed text-lg mb-6">
            <span className="block mb-4">
              Met ruim 18 jaar ervaring en een gedreven team staan wij garant voor topkwaliteit – of het nu gaat om kleine aanpassingen of
              een grootschalige verbouwing.
            </span>
            <span>
              Bekijk onze realisaties en ervaar zelf waarom klanten zo tevreden zijn. Klaar voor de volgende stap? Neem vandaag nog contact
              met ons op voor advies en een vrijblijvende offerte!
            </span>
          </p>
          <button
            className="bg-[#ACB939] text-white font-semibold px-6 py-2 rounded-md
                       hover:bg-[#ACB939]/90 transition-colors duration-300 cursor-pointer"
          >
            Contacteer ons
          </button>
        </motion.div>

        {/* Right column - image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-end"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <img src={photo} alt="Example" className="h-full w-full object-cover rounded-lg shadow-md" />
        </motion.div>
      </div>
    </section>
  );
}
