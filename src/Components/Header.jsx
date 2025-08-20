// src/components/Header.jsx
import logo from '../assets/logo.png';

import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className='flex items-center'>
          <img
           src={logo}
           alt='Elim Law Practice Logo'
           className='h-14 md:h-16 w-auto object-contain'
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-[#004D2E] hover:text-[#006d42] font-medium">
            Home
          </Link>
          <Link to="/about" className="text-[#004D2E] hover:text-[#006d42] font-medium">
            About Us
          </Link>
          <Link to="/practice-areas" className="text-[#004D2E] hover:text-[#006d42] font-medium">
            Practice Areas
          </Link>
          {/* <Link to="/teams" className="text-[#004D2E] hover:text-[#006d42] font-medium">
            Our Team
          </Link> */}
          <Link to="/contact" className="text-[#004D2E] hover:text-[#006d42] font-medium">
            Contact
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#004D2E] cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-4 shadow-inner">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-[#004D2E] hover:text-[#006d42] font-medium">Home</Link>
            <Link to="/about" className="text-[#004D2E] hover:text-[#006d42] font-medium">About Us</Link>
            <Link to="/practice-areas" className="text-[#004D2E] hover:text-[#006d42] font-medium">Practice Areas</Link>
            {/* <Link to="/team" className="text-[#004D2E] hover:text-[#006d42] font-medium">Our Team</Link> */}
            <Link to="/contact" className="text-[#004D2E] hover:text-[#006d42] font-medium">Contact</Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
