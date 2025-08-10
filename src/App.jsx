import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Team from './Pages/Team.jsx';
import AboutUs from './Pages/AboutUs.jsx'
import PracticeAreas from './Pages/PracticeAreas.jsx';
import Contact from './Pages/Contact.jsx'
import Home from './Pages/Home.jsx';

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="bg-white shadow-md">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="mr-4">
                            <div className="flex items-end">
                                <div className="bg-[#004D2E] h-10 w-6 mr-1"></div>
                                <div className="bg-[#004D2E] h-12 w-6 mr-1"></div>
                                <div className="bg-[#004D2E] h-14 w-6"></div>
                            </div>
                            <div className="bg-[#004D2E] h-0.5 w-20 mt-1"></div>
                        </div>
                        <div>
                            <h1 className="text-[#004D2E] text-2xl font-serif font-bold">ELIM LAW PRACTICE</h1>
                            <p className="text-[#004D2E] text-xs tracking-wider">BARRISTERS & SOLICITORS</p>
                        </div>
                    </div>
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-[#004D2E] hover:text-[#006d42] font-medium active:border-b-2 active:border-[#004D2E] ">Home</Link>
                        <Link to="/about" className="text-[#004D2E] hover:text-[#006d42] font-medium active:border-b-2 active:border-[#004D2E]">About Us</Link>
                        <Link to="/practice-areas" className="text-[#004D2E] hover:text-[#006d42] font-medium">Practice Areas</Link>
                        <Link to="/team" className="text-[#004D2E] hover:text-[#006d42] font-medium">Our Team</Link>
                        <Link to="/contact" className="text-[#004D2E] hover:text-[#006d42] font-medium">Contact</Link>
                    </nav>
                    {/* Mobile menu button */}
                    <button
                     className="md:hidden text-[#004D2E] cursor-pointer !rounded-button whitespace-nowrap"
                     onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                    </button>
                </div>
                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden bg-white py-4 px-4 shadow-inner">
                        <div className="flex flex-col space-y-4">
                            <Link to='/' className="text-[#004D2E] hover:text-[#006d42] font-medium">Home</Link>
                            <Link to='/about' className="text-[#004D2E] hover:text-[#006d42] font-medium">About Us</Link>
                            <Link to='/practice-areas' className="text-[#004D2E] hover:text-[#006d42] font-medium">Practice Areas</Link>
                            <Link to='/team' className="text-[#004D2E] hover:text-[#006d42] font-medium">Our Team</Link>
                            <Link to='/contact' className="text-[#004D2E] hover:text-[#006d42] font-medium">Contact</Link>
                        </div>
                    </nav>
                )}
            </header>
            
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<AboutUs />} />
                <Route path='/practice-areas' element={<PracticeAreas />} />
                <Route path='/teams' element={<Team />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>

            {/* Footer */}
            <footer className="bg-[#004D2E] text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <div className="flex items-center mb-4">
                                <div className="mr-3">
                                    <div className="flex items-end">
                                        <div className="bg-white h-8 w-4 mr-1"></div>
                                        <div className="bg-white h-10 w-4 mr-1"></div>
                                        <div className="bg-white h-12 w-4"></div>
                                    </div>
                                    <div className="bg-white h-0.5 w-16 mt-1"></div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-serif font-bold">ELIM LAW PRACTICE</h3>
                                    <p className="text-xs tracking-wider">BARRISTERS & SOLICITORS</p>
                                </div>
                            </div>
                            <p className="mb-4">Providing exceptional legal services with integrity and dedication since 1995.</p>
                            <div className="flex space-x-4">
                                <a href="#" className="hover:text-gray-300 cursor-pointer !rounded-button whitespace-nowrap">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="hover:text-gray-300 cursor-pointer !rounded-button whitespace-nowrap">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="hover:text-gray-300 cursor-pointer !rounded-button whitespace-nowrap">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="#" className="hover:text-gray-300 cursor-pointer !rounded-button whitespace-nowrap">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-serif font-bold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-gray-300 cursor-pointer !rounded-button whitespace-nowrap">Home</a></li>
                                <li><a href="#" className="hover:text-gray-300 cursor-pointer !rounded-button whitespace-nowrap">About Us</a></li>
                                <li><a href="#" className="hover:text-gray-300 cursor-pointer !rounded-button whitespace-nowrap">Practice Areas</a></li>
                                <li><a href="https://readdy.ai/home/d66b71df-70ec-4055-a03e-45ce2d423138/bfe8b00e-4e19-4a6d-8f63-75b4cb4053c6" data-readdy="true" className="hover:text-gray-300 cursor-pointer !rounded-button whitespace-nowrap">Our Team</a></li>
                                <li><a href="#" className="hover:text-gray-300 cursor-pointer !rounded-button whitespace-nowrap">Contact</a></li>
                                <li><a href="#" className="hover:text-gray-300 cursor-pointer !rounded-button whitespace-nowrap">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-gray-300 cursor-pointer !rounded-button whitespace-nowrap">Terms of Service</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-serif font-bold mb-4">Contact Information</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <i className="fas fa-map-marker-alt mt-1 mr-3"></i>
                                    <span>123 Legal Avenue, Suite 500<br />London, EC2V 7EE</span>
                                </li>
                                <li className="flex items-center">
                                    <i className="fas fa-phone mr-3"></i>
                                    <span>+44 20 7123 4567</span>
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
                        <p>&copy; {new Date().getFullYear()} Elim Law Practice. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
export default App
