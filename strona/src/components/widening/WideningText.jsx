import React from 'react';
import { motion } from 'framer-motion';

const WideningText = () => {
  console.log(motion);

  return (
    <div className="w-full mx-auto py-12 my-10">
      <div className="max-w-[80%] mx-auto">
        <div className="text-center mb-4">
          <h1 className="text-center text-3xl md:text-4xl font-bold text-gray-800 ">RENOCARE UITBREIDING VAN UW WONING</h1>
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
            Ben je op zoek naar extra ruimte in huis? Een nieuwe leefkamer, een ruime keuken of een gezellige werkplek? Bij Renocaro pakken
            we elke uitbreiding grondig en vakkundig aan. We combineren onze jarenlange ervaring met frisse ideeën en oog voor detail.
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
            Duidelijke analyse & advies We beginnen steeds met een grondige plaatsbezoek en luisteren naar jouw wensen. Op basis daarvan
            stellen we een plan voor, met aandacht voor de bestaande constructie en de architecturale stijl van je woning.
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
            Van fundering tot afwerking Onze expertise reikt verder dan enkel bouwen. Wij regelen alles, van de basisconstructie en isolatie
            tot de stijlvolle afwerking binnen. Zo nemen we jou alle technische en praktische zorgen uit handen.
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
            Transparante communicatie Je weet altijd waar je aan toe bent. Samen bespreken we de planning, materialen en budget. Zo kom je
            niet voor verrassingen te staan en kun je de voortgang op de voet volgen.
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
            Kwaliteit die blijft Dankzij onze ruime ervaring en duurzame werkwijzen geniet je van een solide uitbouw die jarenlang meegaat –
            zonder in te boeten op comfort of esthetiek.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default WideningText;
