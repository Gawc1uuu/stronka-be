import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Logo from "../assets/logo_renocare.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-colors duration-300 
        bg-white
        ${hasScrolled ? "md:bg-white md:shadow-md" : "md:bg-transparent"}
      `}
    >
      <div className="md:max-w-7xl px-6 mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className={`
              text-2xl font-bold transition-colors duration-300 
              ${hasScrolled ? "text-gray-800" : "text-white"}
            `}
          >
            <img src={Logo} alt="Renocare" />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-12">
            {["Home", "About", "Services", "Contact"].map((link) => (
              <a
                key={link}
                href="#"
                className={`
                  transition-colors duration-300
                  ${hasScrolled ? "text-gray-600 hover:text-red-500" : "text-white hover:text-red-200"}
                `}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`
              md:hidden transition-colors duration-300
              ${hasScrolled ?? "text-gray-800" }
            `}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden text-center transition-colors duration-300 bg-white shadow-md">
          {["Home", "About", "Services", "Contact"].map((link) => (
            <div
              key={link}
              className="py-3 px-4 hover:bg-gray-100 transition-colors duration-300"
            >
              <a
                href="#"
                className="block transition-colors duration-300 text-gray-600"
              >
                {link}
              </a>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
