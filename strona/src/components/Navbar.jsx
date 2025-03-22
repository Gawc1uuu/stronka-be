import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo_renocare.svg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Get current location from React Router
  const location = useLocation();

  const mainLinks = [
    {
      label: 'Home',
      path: '/',
      subLinks: [],
    },
    {
      label: 'Onze diensten',
      path: '/onze-diensten',
      subLinks: [
        { label: 'Dakwerken', path: '/dakwerken' },
        { label: 'Uitbreiding', path: '/uitbreiding' },
        { label: 'Totaalrenovatie', path: '/totaalrenovatie' },
        { label: 'Interieurrenovatie', path: '/interieurrenovatie' },
      ],
    },
    {
      label: 'Realisaties',
      path: '/realisaties',
      subLinks: [],
    },
    {
      label: 'Contact',
      path: '/contact',
      subLinks: [],
    },
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

  // Close all dropdowns (and mobile menu if desired)
  const closeAllMenus = () => {
    setActiveDropdown(null);
    setIsOpen(false); // close mobile menu as well
  };

  // Helper to see if a given link is "active"
  const isLinkActive = path => {
    // You can fine-tune matching logic, e.g. exact match or "startsWith"
    return location.pathname === path;
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
            <Link
              to="/"
              onClick={() => {
                closeAllMenus();
              }}
            >
              <img src={Logo} alt="Renocare" />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-12">
            {mainLinks.map((link, index) => {
              const hasSubs = link.subLinks && link.subLinks.length > 0;
              const isDropdownOpen = activeDropdown === index;
              const isActive = isLinkActive(link.path); // check main link

              return (
                <div key={link.label} className="relative">
                  {/* Main link */}
                  <Link
                    to={link.path}
                    className={`
                      transition-colors duration-300 text-base md:text-xl
                      flex items-center cursor-pointer
                      ${hasScrolled ? 'text-gray-600 hover:text-[#ACB939]' : 'text-white hover:text-[#ACB939]'}
                      ${isActive ? 'text-[#ACB939]!' : ''}
                    `}
                    onClick={e => {
                      // If this link has sub-links,
                      // prevent navigation and toggle dropdown instead
                      if (hasSubs) {
                        e.preventDefault();
                        toggleDropdown(index);
                      } else {
                        closeAllMenus();
                      }
                    }}
                  >
                    {link.label}
                    {hasSubs && (
                      <ChevronDown
                        className={`ml-1 h-5 w-5 transform transition-transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                      />
                    )}
                  </Link>

                  {/* If subLinks exist, show/hide them on desktop */}
                  {hasSubs && (
                    <div
                      className={`
                        absolute left-0 mt-2 bg-white shadow-md transition-all
                        ${isDropdownOpen ? 'block' : 'hidden'}
                      `}
                    >
                      {link.subLinks.map(subLink => {
                        const isSubActive = isLinkActive(subLink.path);
                        return (
                          <Link
                            key={subLink.label}
                            to={subLink.path}
                            className={`
                              block px-4 py-2 text-gray-600
                              hover:text-[#ACB939] cursor-pointer
                              hover:bg-gray-50 transition-colors duration-300
                              ${isSubActive ? 'text-[#ACB939]!' : ''}
                            `}
                            onClick={() => {
                              // Close dropdown after clicking subLink
                              closeAllMenus();
                            }}
                          >
                            {subLink.label}
                          </Link>
                        );
                      })}
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
            const isActive = isLinkActive(link.path);

            return (
              <div key={link.label} className="py-3 px-4 hover:bg-gray-50 transition-colors duration-300 text-left">
                {/* Main link for mobile */}
                <div className="flex items-center justify-between">
                  <Link
                    to={link.path}
                    className={`
                      block transition-colors duration-300 text-gray-600 text-base cursor-pointer hover:text-[#ACB939]
                      ${isActive ? 'underline underline-offset-4 decoration-2' : ''}
                    `}
                    onClick={e => {
                      if (hasSubs) {
                        e.preventDefault();
                        toggleDropdown(index);
                      } else {
                        closeAllMenus();
                      }
                    }}
                  >
                    {link.label}
                  </Link>
                  {hasSubs && (
                    <button onClick={() => toggleDropdown(index)} className="text-gray-600 hover:text-[#ACB939] cursor-pointer">
                      <ChevronDown className={`h-5 w-5 transform transition-transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
                    </button>
                  )}
                </div>

                {/* Sub-links for mobile */}
                {hasSubs && isDropdownOpen && (
                  <div className="mt-2 pl-4">
                    {link.subLinks.map(subLink => {
                      const isSubActive = isLinkActive(subLink.path);
                      return (
                        <Link
                          key={subLink.label}
                          to={subLink.path}
                          className={`
                            block py-2 text-gray-600 cursor-pointer 
                            hover:text-[#ACB939] transition-colors duration-300
                            ${isSubActive ? 'underline underline-offset-4 decoration-2' : ''}
                          `}
                          onClick={() => {
                            // Close everything after clicking subLink
                            closeAllMenus();
                          }}
                        >
                          {subLink.label}
                        </Link>
                      );
                    })}
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
