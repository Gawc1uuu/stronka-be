import { motion } from 'framer-motion';
import photo from '../../assets/IMG_1920.JPG';

export default function CenteredHeaderImageLeft() {
  console.log(motion);

  return (
    <section className="w-full py-12 bg-gray-100">
      {/* Header with bottom border */}
      <div className="text-center mb-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 inline-block">Waarom kiezen voor Renocare?</h2>
        {/* Border line under the header */}
        <div className="mx-auto w-24 h-1 bg-[#ACB939] mt-2 md:mb-20" />
      </div>

      {/* Two-column layout (stacked on mobile, side-by-side on md+) */}
      <div className="md:max-w-[80%] mx-auto px-6 flex flex-col md:flex-row items-start md:items-center gap-6 md:mb-30">
        {/* Left column (image) with slide-in from the left */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-start"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <img src={photo} alt="Example" className="w-full h-full object-cover rounded-lg shadow-md" />
        </motion.div>

        {/* Right column (text) */}
        <motion.div
          className="
            w-full md:w-1/2 mb-6 md:mb-0 md:pr-10
            border-b-8 md:border-r-8 md:border-b-0 border-[#ACB939]
            bg-white shadow-lg p-6 md:p-8
            text-center md:text-left
          "
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 className="text-3xl font-semibold text-[#ACB939] text-center mb-4">Kies voor zorgeloze renovaties in de regio Antwerpen</h2>

          <ul className="list-disc list-inside marker:text-[#ACB939] space-y-1 leading-relaxed text-start text-lg">
            <li>18+ jaar ervaring: één gespecialiseerd team, transparante prijzen binnen 2 werkdagen.</li>
            <li>Minimale hinder, snelle oplevering: vlot verloop zonder stress.</li>
            <li>Tevreden klanten &amp; zichtbare resultaten: bekijk onze realisaties en reviews.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
