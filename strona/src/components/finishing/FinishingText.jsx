import React from 'react';
import { motion } from 'framer-motion';

const FinishingText = () => {
  console.log(motion);

  return (
    <div className="w-full mx-auto py-12 my-10">
      <div className="max-w-[80%] mx-auto">
        <div className="text-center mb-4">
          <h1 className="text-center text-3xl md:text-4xl font-bold text-gray-800 ">RENOCARE INTERIEURRENOVATIE VAN UW WONINGG</h1>
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
            Van ontwerp tot realisatie We luisteren naar je wensen, maken een ontwerpvoorstel en gaan aan de slag met sloop-, opbouw- en
            afwerkingswerken. Hierbij besteden we veel aandacht aan functionaliteit en esthetiek: elk detail moet kloppen.
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
            Persoonlijke toets We staan altijd open voor jouw eigen ideeën en inspiraties. Wil je een specifieke kleur, materiaal of
            afwerkingsstijl? Wij combineren jouw input met onze vakkennis, zodat je woning helemaal jouw unieke sfeer uitstraalt.
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
            Uitgebreid dienstenpakket Muren verven, vloeren leggen, plafonds afwerken, maatkasten plaatsen, verlichting installeren… Ons
            team heeft alle nodige expertise in huis om jouw interieurproject van A tot Z te realiseren.
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
            Persoonlijke toets We staan altijd open voor jouw eigen ideeën en inspiraties. Wil je een specifieke kleur, materiaal of
            afwerkingsstijl? Wij combineren jouw input met onze vakkennis, zodat je woning helemaal jouw unieke sfeer uitstraalt.
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
            Kwaliteitsgarantie In elk interieurproject gebruiken we materialen die voldoen aan hoge kwaliteitsnormen. Mocht er achteraf toch
            iets zijn dat bijgestuurd moet worden, kun je rekenen op onze snelle en flexibele service.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FinishingText;
