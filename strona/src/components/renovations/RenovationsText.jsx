import React from 'react';
import { motion } from 'framer-motion';

const RenovationsText = () => {
  console.log(motion);

  return (
    <div className="w-full mx-auto py-12 my-10">
      <div className="max-w-[80%] mx-auto">
        <div className="text-center mb-4">
          <h1 className="text-center text-3xl md:text-4xl font-bold text-gray-800 ">RENOCARE TOTAALRENOVATIE VAN UW WONING</h1>
          <div className="mx-auto w-24 h-1 bg-[#ACB939] mt-2 md:mb-20" />
          <div />
        </div>
        <motion.div
          className="w-full md:max-w-3/4 bg-white p-6 shadow-lg border-l-8 border-[#ACB939] my-4"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p>
            Wil je jouw woning volledig in een nieuw jasje steken? Met een totaalrenovatie van Renocaro krijgt je huis een tweede leven, van
            kelder tot zolder.
          </p>
        </motion.div>
        <motion.div
          className="w-full md:max-w-3/4 bg-white p-6 shadow-lg border-r-8 border-[#ACB939] ml-auto my-4"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p>
            Allround expertise We beschikken over een multidisciplinair team: van ruwbouw- en elektriciteitswerken tot stukadoors, schilders
            en binnenafwerking. Door alles in eigen beheer te coördineren, verloopt je renovatie efficiënt en volgens planning.
          </p>
        </motion.div>
        <motion.div
          className="w-full md:max-w-3/4 bg-white p-6 shadow-lg border-l-8 border-[#ACB939] my-2"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p>
            Persoonlijke begeleiding We starten met een grondig overleg om je woonideeën te leren kennen. Hou je van een moderne stijl of
            juist van een klassieke uitstraling?
            <br />
            We adviseren je over materialen, indeling en technische mogelijkheden, zodat jouw wensen perfect tot uiting komen
          </p>
        </motion.div>
        <motion.div
          className="w-full md:max-w-3/4 bg-white p-6 shadow-lg border-r-8 border-[#ACB939] ml-auto my-4"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p>
            Totale ontzorging Een renovatie is vaak een complex proces. Wij nemen alle coördinatie op ons, zodat je niet hoeft te jongleren
            met verschillende aannemers. Eén contactpersoon, één duidelijk aanspreekpunt.
          </p>
        </motion.div>
        <motion.div
          className="w-full md:max-w-3/4 bg-white p-6 shadow-lg border-l-8 border-[#ACB939] my-4"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p>
            Duurzame resultaten We werken uitsluitend met kwaliteitsvolle materialen en letten op energiezuinige oplossingen. Zo haal je
            niet alleen een prachtig resultaat in huis, maar bespaar je op termijn ook op onderhouds- en energiekosten.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default RenovationsText;
