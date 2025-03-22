// Footer.jsx
import Logo from '../assets/logo_renocare.svg';
// 1) Import desired icons
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100">
      {/* Top row with two colored blocks */}
      <div className="flex flex-col md:flex-row md:items-center">
        {/* Gray block (left) */}
        <div className="md:flex md:flex-col md:items-start md:justify-center bg-gray-800 text-white p-8 md:w-1/2 md:h-60">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Bent u geïnteresseerd in nieuwbouw of renovatiewerken?</h2>
          <p className="mb-2 text-xl">Bel ons vandaag nog!</p>
          {/* Clickable phone link */}
          <a href="tel:+32486696526" className="text-xl underline hover:text-gray-200 transition-colors duration-200">
            +32 486-696-526
          </a>
        </div>

        {/* Light green block (right) */}
        <div className="bg-[#ACB939] text-white p-8 md:w-1/2 md:h-80 md:flex md:flex-col md:items-start md:justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Zoekt u een professioneel en betrouwbaar bouw- en renovatiebedrijf?</h2>
          <p className="mb-2 text-xl">Neem direct contact met ons op!</p>
          {/* Another clickable phone link */}
          <a href="tel:+32484983619" className="text-xl underline hover:text-gray-200 transition-colors duration-200">
            +32 484-983-619
          </a>
        </div>
      </div>

      {/* Middle row with logo, address, contact info */}
      <div className="bg-gray-100 py-8 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center md:items-start text-gray-700 text-center md:text-left">
        {/* Logo area */}
        <div className="mb-6 md:mb-0">
          <img src={Logo} alt="Company Logo" className="h-16 object-contain" />
        </div>

        {/* Address */}
        <div className="mb-6 md:mb-0">
          <h3 className="font-semibold mb-2 text-lg">Adres</h3>
          <p>Diksmuidenlaan 46</p>
          <p>2600 Berchem (Antwerpen)</p>
        </div>

        {/* Contact */}
        <div className="mb-6 md:mb-0">
          <h3 className="font-semibold mb-2 text-lg">Contact</h3>
          {/* Clickable phone links */}
          <a href="tel:+32486696526" className="block hover:underline hover:text-gray-500">
            +32 486-696-526
          </a>
          <a href="tel:+32484983619" className="block hover:underline hover:text-gray-500">
            +32 484-983-619
          </a>
          {/* Clickable email link */}
          <a href="mailto:info@renocare.be" className="block hover:underline hover:text-gray-500">
            info@renocare.be
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="mt-6 md:mt-0">
          <h3 className="font-semibold mb-2 text-lg">Volg Ons</h3>
          <div className="flex items-center justify-center md:justify-start gap-4">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=100070373473102"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#ACB939] transition-colors duration-200"
            >
              <FaFacebookF className="w-6 h-6" />
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/_renocare_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#ACB939] transition-colors duration-200"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-gray-900 text-gray-100 text-center py-2">created by Gawc1uuu &amp; Seba</div>
    </footer>
  );
}
