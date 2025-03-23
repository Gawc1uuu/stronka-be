import BgImage from '../../assets/uitbreiding.png';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';

function HeroSectionWide() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center pt-16"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-10">
          <Typewriter
            options={{
              strings: [
                `<span style="text-transform: uppercase; color: white;">Uitbreiding</span>`,
                `<span style="text-transform: uppercase; color: #ACB939;">RENO</span><span style="text-transform: uppercase; color: black;">CARE</span>`,
              ],

              autoStart: true,
              loop: true,
              sanitize: false,
            }}
          />
        </h1>
        <p className="text-3xl">If you care for quality...</p>
        <Link to="/contact">
          <button className="cursor-pointer mt-6 px-6 py-3 bg-[#ACB939] hover:bg-[#acb939cd] text-white text-lg rounded-lg">
            Gratis Offerte
          </button>
        </Link>{' '}
      </div>
    </section>
  );
}

export default HeroSectionWide;
