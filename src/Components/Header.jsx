import logo from '../assets/logo.png';

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu } from 'react-icons/hi';
import { HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClasses = ({ isActive }) => {
    return `font-medium pb-1 border-b-2 border-transparent transition-all duration-300 ${
      isActive
        ? "text-green-900 border-green-600 hover:text-green-800"
        : "text-green-800 hover:text-green-700 hover:border-green-700"
    }`;
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className='flex items-center'>
          <NavLink to="/">
            <img
             src={logo}
             alt='Elim Law Practice Logo'
             className='h-14 md:h-16 w-auto object-contain'
            />
          </NavLink>          
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={linkClasses}>Home</NavLink>
          <NavLink to="/about" className={linkClasses}>About Us</NavLink>
          <NavLink to="/practice-areas" className={linkClasses}>Practice Areas</NavLink>
          <NavLink to="/contact" className={linkClasses}>Contact</NavLink>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#004D2E] cursor-pointer bg-gray-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <AnimatePresence mode='wait' initial={false}>
            {isMenuOpen ? (
              <motion.div
               key='close'
               initial={{ rotate: -90, opacity: 0 }}
               animate={{ rotate: 0, opacity: 1 }}
               exit={{ rotate: 90, opacity: 0 }}
               transition={{ duration: 0.3 }}
              >
                <HiX size={20} />
              </motion.div>
            ) : (
              <motion.div
               key='menu'
               initial={{ rotate: 90, opacity: 0 }}
               animate={{ rotate: 0, opacity: 1 }}
               exit={{ rotate: -90, opacity: 0 }}
               transition={{ duration: 0.3 }}
              >
                <HiMenu size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-4 shadow-inner">
          <div className="flex flex-col space-y-4">
            <NavLink to="/" className={linkClasses}>Home</NavLink>
            <NavLink to="/about" className={linkClasses}>About Us</NavLink>
            <NavLink to="/practice-areas" className={linkClasses}>Practice Areas</NavLink>
            <NavLink to="/contact" className={linkClasses}>Contact</NavLink>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
