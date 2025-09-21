import logo2 from "../assets/logo2.png";

import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#004D2E] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
              <img
                src={logo2}
                alt="Elim Law Practice Logo"
                className="h-16 w-auto object-contain mb-4"
              />
            </NavLink>
            <p className="mb-4">
              Providing exceptional legal services with integrity and dedication
              since 1995.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-gray-300 cursor-pointer !rounded-button whitespace-nowrap"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="hover:text-gray-300 cursor-pointer !rounded-button whitespace-nowrap"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="hover:text-gray-300 cursor-pointer !rounded-button whitespace-nowrap"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                className="hover:text-gray-300 cursor-pointer !rounded-button whitespace-nowrap"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <nav>
                <li>
                  <Link
                    to="/"
                    className="hover:text-gray-300 cursor-pointer !rounded-button whitespace-nowrap"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-gray-300 cursor-pointer !rounded-button whitespace-nowrap"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/practice-areas"
                    className="hover:text-gray-300 cursor-pointer !rounded-button whitespace-nowrap"
                  >
                    Practice Areas
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    className="hover:text-gray-300 cursor-pointer !rounded-button whitespace-nowrap"
                  >
                    Contact
                  </Link>
                </li>
                {/* <li><a href="#" className="hover:text-gray-300 cursor-pointer !rounded-button whitespace-nowrap">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-gray-300 cursor-pointer !rounded-button whitespace-nowrap">Terms of Service</a></li> */}
              </nav>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">
              Contact Information
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3"></i>
                <span>
                  776 Lagos-Abeokuta Expressway
                  <br />
                  Lagos
                </span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone mr-3"></i>
                <span>+234 802 732 8872</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3"></i>
                <span>info@elimlawpractice.com</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-clock mr-3"></i>
                <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
            <div className="mt-4 flex space-x-3">
              <i className="fab fa-cc-visa text-2xl"></i>
              <i className="fab fa-cc-mastercard text-2xl"></i>
              <i className="fab fa-cc-amex text-2xl"></i>
              <i className="fab fa-paypal text-2xl"></i>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Elim Law Practice. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
