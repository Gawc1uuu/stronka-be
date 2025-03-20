// Footer.jsx
import Logo from "../assets/logo_renocare.svg"
export default function Footer() {
    return (
      <footer className="w-full bg-gray-100 pt-50">
        {/* Top row with two colored blocks */}
        <div className="flex flex-col md:flex-row items-center">
          {/* Gray block (left) */}
          <div className="bg-gray-800 text-white md:w-1/2 p-8 ml-20 h-40">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Jesteś zainteresowany budową lub zakupem domu?
            </h2>
            <p className="mb-2">Zadzwoń</p>
            <p className="text-sm">
              {/* Example placeholder for a phone number */}
              604-641-251
            </p>
          </div>
  
          {/* Light green block (right) */}
          <div className="bg-green-500 text-white md:w-1/2 p-8 mr-20 h-60">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Szukasz profesjonalnej firmy budowlano-remontowej?
            </h2>
            <p className="mb-2">Zadzwoń</p>
            <p className="text-sm">
              {/* Example placeholder for a phone number */}
              791-950-200
            </p>
          </div>
        </div>
  
        {/* Middle row with logo, address, contact info */}
        <div className=" bg-gray-100 py-8 px-6 md:px-12 flex flex-col md:flex-row justify-between items-start text-gray-700">
          {/* Logo area */}
          <div className="mb-6 md:mb-0">
            <img
              src={Logo}
              alt="Company Logo"
              className="h-16 object-contain"
            />
          </div>
  
          {/* Address */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-semibold mb-2 text-lg">Adres</h3>
            <p>ul. Lubartowska</p>
            <p>20-440 Lublin</p>
          </div>
  
          {/* Contact */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-semibold mb-2 text-lg">Kontakt</h3>
            <p>604-641-251</p>
            <p>791-950-200</p>
            <p>(048) 365-29-12</p>
            <p>gawlikajkub9@gmail.com</p>
          </div>
        </div>
  
        {/* Bottom bar */}
        <div className="bg-gray-900 text-gray-100 text-center py-2">
          created by Gawc1uuu
        </div>
      </footer>
    );
  }
  