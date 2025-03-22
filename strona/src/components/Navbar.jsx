import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import Logo from '../assets/logo_renocare.svg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle
  const [hasScrolled, setHasScrolled] = useState(false);
  // Track which desktop link (if any) is currently open
  const [activeDropdown, setActiveDropdown] = useState(null);

  const mainLinks = [
    { label: 'Home', subLinks: [] },
    {
      label: 'Onze diensten',
      subLinks: ['Dakwerken', 'Uitbreiding', 'Totaalrenovatie', 'Interieurrenovatie'],
    },
    { label: 'Realisaties', subLinks: [] },
    { label: 'Contact', subLinks: [] },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle a dropdown by index: if already open, close; otherwise open
  const toggleDropdown = index => {
    setActiveDropdown(prev => (prev === index ? null : index));
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-colors duration-300
        bg-white
        ${hasScrolled ? 'md:bg-white md:shadow-md' : 'md:bg-transparent'}
      `}
    >
      <div className="md:max-w-7xl px-6 mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className={`
              text-2xl font-bold transition-colors duration-300 
              ${hasScrolled ? 'text-gray-800' : 'text-white'}
            `}
          >
            <img src={Logo} alt="Renocare" />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-12">
            {mainLinks.map((link, index) => {
              const hasSubs = link.subLinks && link.subLinks.length > 0;
              const isDropdownOpen = activeDropdown === index;

              return (
                <div key={link.label} className="relative">
                  {/* Main link (button or anchor) */}
                  <button
                    onClick={() => (hasSubs ? toggleDropdown(index) : null)}
                    className={`
                      transition-colors duration-300 text-base md:text-xl
                      flex items-center cursor-pointer
                      ${hasScrolled ? 'text-gray-600 hover:text-[#ACB939]' : 'text-white hover:text-[#ACB939]'}
                    `}
                  >
                    {link.label}
                    {/* Arrow only if subLinks exist */}
                    {hasSubs && (
                      <ChevronDown
                        className={`ml-1 h-5 w-5 transform transition-transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                      />
                    )}
                  </button>

                  {/* If subLinks exist, show/hide them */}
                  {hasSubs && (
                    <div
                      className={`
                        absolute left-0 mt-2 bg-white shadow-md transition-all
                        ${isDropdownOpen ? 'block' : 'hidden'}
                      `}
                    >
                      {link.subLinks.map(subLink => (
                        <a
                          key={subLink}
                          href="#"
                          className="block px-4 py-2 text-gray-600 
                                     hover:text-[#ACB939] cursor-pointer
                                     hover:bg-gray-50 transition-colors duration-300"
                        >
                          {subLink}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`
              md:hidden transition-colors duration-300
              cursor-pointer
              ${hasScrolled ? 'text-gray-800' : 'text-white'}
            `}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="text-gray-800" size={28} /> : <Menu className="text-gray-800" size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden text-center transition-colors duration-300 bg-white shadow-md">
          {mainLinks.map((link, index) => {
            const hasSubs = link.subLinks && link.subLinks.length > 0;
            const isDropdownOpen = activeDropdown === index;

            return (
              <div key={link.label} className="py-3 px-4 hover:bg-gray-50 transition-colors duration-300 text-left">
                {/* Main link for mobile */}
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="block transition-colors duration-300 text-gray-600 text-base cursor-pointer hover:text-[#ACB939]"
                    onClick={e => {
                      // If link has sub-links, prevent default to open dropdown
                      if (hasSubs) {
                        e.preventDefault();
                        toggleDropdown(index);
                      }
                    }}
                  >
                    {link.label}
                  </a>
                  {hasSubs && (
                    <button onClick={() => toggleDropdown(index)} className="text-gray-600 hover:text-[#ACB939] cursor-pointer">
                      <ChevronDown className={`h-5 w-5 transform transition-transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
                    </button>
                  )}
                </div>

                {/* Sub-links for mobile */}
                {hasSubs && isDropdownOpen && (
                  <div className="mt-2 pl-4">
                    {link.subLinks.map(subLink => (
                      <a
                        key={subLink}
                        href="#"
                        className="block py-2 text-gray-600 cursor-pointer 
                                   hover:text-[#ACB939] transition-colors duration-300"
                      >
                        {subLink}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
