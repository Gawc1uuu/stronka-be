import React from 'react';
import { motion } from 'framer-motion';

const RoofsText = () => {
  console.log(motion);

  return (
    <div className="w-full mx-auto py-12 my-10">
      <div className="max-w-[80%] mx-auto">
        <div className="text-center mb-4">
          <h1 className="text-center text-3xl md:text-4xl font-bold text-gray-800 ">RENOCARE DAKWERKEN</h1>
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
            Een goed dak beschermt je huis tegen weer en wind. Bij Renocaro kan je rekenen op duurzame en stevige dakwerken, uitgevoerd met
            vakkennis en oog voor detail
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
            Grondige dakinspectie Eerst onderzoeken we de bestaande dakstructuur. Is een volledige vervanging nodig, of volstaat een
            gedeeltelijke renovatie? We bespreken met jou de beste aanpak en geven een eerlijke, onderbouwde aanbeveling.
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
            Kwaliteitsvolle materialen Hoewel we zelf geen materialen verkopen, werken we wél samen met betrouwbare leveranciers en
            producenten. Zo kunnen we garant staan voor een lange levensduur en een feilloze afwerking van jouw dak.
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
            Optimale isolatie en comfort Een goed geïsoleerd dak is essentieel voor een aangenaam binnenklimaat. Wij informeren je graag
            over de verschillende isolatiemogelijkheden en plaatsen alles volgens de geldende normen.
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
            Nazorg en onderhoud Na de plaatsing van je dak ben je bij ons niet aan je lot overgelaten. We bieden een grondige controle en
            zijn beschikbaar voor eventuele onderhoudswerken of kleine herstellingen op de lange termijn.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default RoofsText;
