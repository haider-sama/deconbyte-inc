import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { navLinks } from '../../config';
import { Link } from 'react-router-dom';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentYear = new Date().getFullYear();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="p-8 text-2xl focus:outline-none text-white lg:hidden"
        onClick={toggleMenu}
      >
        {isOpen ? <HiX /> : <HiMenu />}
      </button>
      <nav
        className={`fixed top-0 left-0 w-[250px] h-full glassmorphism-nos text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <ul className="flex flex-col p-4 space-y-4">
          {navLinks.map((link, index) => {
                                // Render main titles only
                                if (!link.dropdown) {
                                    return (
                                        <li key={index}><Link onClick={toggleMenu}
                                        to={link.href} className="hover:bg-gray-200 text-white hover:text-gray-900 border-b py-1 text-center block">
                                            {link.title}
                                        </Link>
                                        </li>
                                    );
                                }
                                return null; // Skip dropdown links here
                            })}
        </ul>
        <div className="absolute bottom-0 w-full text-center text-gray-600 text-xs mb-4">
          DeconByte Inc. &copy; {currentYear}. All rights reserved.
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
