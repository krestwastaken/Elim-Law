import React, { useState } from 'react';

const Contact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    practiceArea: '',
    message: '',
    privacyAccepted: false
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: 'What should I bring to my initial consultation?',
      answer: 'Please bring any relevant documents related to your legal matter, a list of questions you\'d like to discuss, and a form of identification. We\'ll provide you with a detailed checklist when you schedule your appointment.'
    },
    {
      question: 'How are your legal fees structured?',
      answer: 'Our fee structure varies depending on the type of legal service required. We offer hourly rates, flat fees for certain services, and contingency arrangements where appropriate. We provide transparent fee estimates during your initial consultation.'
    },
    {
      question: 'How long will my case take to resolve?',
      answer: 'The timeline for legal matters varies significantly based on complexity, court schedules, and other factors. We\'ll provide you with realistic timeframes and keep you updated throughout the process.'
    },
    {
      question: 'Do you offer emergency legal services?',
      answer: 'Yes, we provide 24/7 emergency legal support for urgent matters. Contact our main number and follow the prompts for emergency assistance.'
    },
    {
      question: 'Is my information kept confidential?',
      answer: 'Absolutely. We maintain strict attorney-client privilege and confidentiality for all communications and documents. Your privacy and confidentiality are our top priorities.'
    },
    {
      question: 'Can I get a second opinion on my case?',
      answer: 'Yes, we welcome clients seeking second opinions. We can review your case and provide an independent assessment of your legal options and strategy.'
    }
  ];

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
            <a href="https://readdy.ai/home/d66b71df-70ec-4055-a03e-45ce2d423138/e76d046b-52c8-48f7-a2c3-a210e809c74e" data-readdy="true" className="text-[#004D2E] hover:text-[#006d42] font-medium whitespace-nowrap cursor-pointer">Home</a>
            <a href="https://readdy.ai/home/d66b71df-70ec-4055-a03e-45ce2d423138/9964b298-d53e-4287-8862-8c437892f9f3" data-readdy="true" className="text-[#004D2E] hover:text-[#006d42] font-medium whitespace-nowrap cursor-pointer">About Us</a>
            <a href="#" className="text-[#004D2E] hover:text-[#006d42] font-medium whitespace-nowrap cursor-pointer">Practice Areas</a>
            <a href="#" className="text-[#004D2E] hover:text-[#006d42] font-medium whitespace-nowrap cursor-pointer">Our Team</a>
            <a href="#" className="text-[#004D2E] hover:text-[#006d42] font-medium whitespace-nowrap border-b-2 border-[#004D2E] cursor-pointer">Contact</a>
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
              <a href="https://readdy.ai/home/d66b71df-70ec-4055-a03e-45ce2d423138/e76d046b-52c8-48f7-a2c3-a210e809c74e" data-readdy="true" className="text-[#004D2E] hover:text-[#006d42] font-medium cursor-pointer">Home</a>
              <a href="https://readdy.ai/home/d66b71df-70ec-4055-a03e-45ce2d423138/9964b298-d53e-4287-8862-8c437892f9f3" data-readdy="true" className="text-[#004D2E] hover:text-[#006d42] font-medium cursor-pointer">About Us</a>
              <a href="#" className="text-[#004D2E] hover:text-[#006d42] font-medium cursor-pointer">Practice Areas</a>
              <a href="#" className="text-[#004D2E] hover:text-[#006d42] font-medium cursor-pointer">Our Team</a>
              <a href="#" className="text-[#004D2E] hover:text-[#006d42] font-medium border-b border-[#004D2E] cursor-pointer">Contact</a>
            </div>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden bg-gradient-to-r from-[#004D2E] to-[#006d42]">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <img
          src="https://readdy.ai/api/search-image?query=Professional%20modern%20law%20office%20reception%20area%20with%20elegant%20furniture%2C%20warm%20lighting%2C%20sophisticated%20interior%20design%2C%20welcoming%20atmosphere%2C%20contemporary%20legal%20practice%20environment%2C%20clean%20professional%20background&width=1440&height=400&seq=contact1&orientation=landscape"
          alt="Contact Us"
          className="absolute inset-0 w-full h-full object-cover object-top opacity-30"
        />
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Get in Touch</h1>
            <p className="text-lg mb-8">Ready to discuss your legal needs? Our experienced team is here to provide you with personalized legal solutions. Contact us today to schedule your consultation.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg text-center">
                <i className="fas fa-phone text-3xl mb-3"></i>
                <h3 className="font-serif font-bold mb-2">Call Us</h3>
                <p className="text-sm">+44 20 7123 4567</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg text-center">
                <i className="fas fa-envelope text-3xl mb-3"></i>
                <h3 className="font-serif font-bold mb-2">Email Us</h3>
                <p className="text-sm">info@elimlawpractice.com</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg text-center">
                <i className="fas fa-clock text-3xl mb-3"></i>
                <h3 className="font-serif font-bold mb-2">Office Hours</h3>
                <p className="text-sm">Mon-Fri: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-[#004D2E] mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">Complete the form below and we'll get back to you within 24 hours. For urgent matters, please call our office directly.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 mb-2 font-medium">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004D2E] focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 mb-2 font-medium">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004D2E] focus:border-transparent text-sm"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004D2E] focus:border-transparent text-sm"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004D2E] focus:border-transparent text-sm"
                  />
                </div>
                
                <div>
                  <label htmlFor="practiceArea" className="block text-gray-700 mb-2 font-medium">Practice Area</label>
                  <div className="relative">
                    <select
                      id="practiceArea"
                      name="practiceArea"
                      value={formData.practiceArea}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004D2E] focus:border-transparent text-sm appearance-none cursor-pointer"
                    >
                      <option value="">Select a practice area</option>
                      <option value="corporate">Corporate Law</option>
                      <option value="litigation">Litigation</option>
                      <option value="employment">Employment Law</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="family">Family Law</option>
                      <option value="criminal">Criminal Defense</option>
                      <option value="other">Other</option>
                    </select>
                    <i className="fas fa-chevron-down absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Please describe your legal matter and how we can assist you..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004D2E] focus:border-transparent text-sm resize-vertical"
                  ></textarea>
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="privacyAccepted"
                    name="privacyAccepted"
                    checked={formData.privacyAccepted}
                    onChange={handleInputChange}
                    required
                    className="mt-1 mr-3 cursor-pointer"
                  />
                  <label htmlFor="privacyAccepted" className="text-gray-600 text-sm cursor-pointer">
                    I agree to the <a href="#" className="text-[#004D2E] hover:underline cursor-pointer">Privacy Policy</a> and consent to being contacted regarding my inquiry. *
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#004D2E] text-white px-6 py-4 font-bold hover:bg-[#006d42] transition duration-300 cursor-pointer !rounded-button whitespace-nowrap"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
                <h3 className="text-2xl font-serif font-bold text-[#004D2E] mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#004D2E] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fas fa-map-marker-alt text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#004D2E] mb-1">Office Address</h4>
                      <p className="text-gray-600">123 Legal Avenue, Suite 500<br />London, EC2V 7EE<br />United Kingdom</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#004D2E] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fas fa-phone text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#004D2E] mb-1">Phone Numbers</h4>
                      <p className="text-gray-600">Main: +44 20 7123 4567<br />Emergency: +44 20 7123 4568</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#004D2E] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fas fa-envelope text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#004D2E] mb-1">Email Addresses</h4>
                      <p className="text-gray-600">General: info@elimlawpractice.com<br />New Clients: newclient@elimlawpractice.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#004D2E] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fas fa-clock text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#004D2E] mb-1">Office Hours</h4>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 2:00 PM<br />Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-serif font-bold text-[#004D2E] mb-6">Getting Here</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#004D2E] mb-2">By Underground</h4>
                    <p className="text-gray-600 text-sm">Bank Station (Central, Northern, Waterloo & City lines) - 3 minutes walk</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#004D2E] mb-2">By Bus</h4>
                    <p className="text-gray-600 text-sm">Routes 8, 25, 26, 242 stop nearby</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#004D2E] mb-2">Parking</h4>
                    <p className="text-gray-600 text-sm">Limited street parking available. NCP car park 2 minutes walk.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#004D2E] mb-2">Accessibility</h4>
                    <p className="text-gray-600 text-sm">Wheelchair accessible entrance and facilities available.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-[#004D2E] mb-4">Find Our Office</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Located in the heart of London's financial district, our office is easily accessible by public transport and offers convenient parking options.</p>
          </div>
          
          <div className="bg-gray-200 h-96 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
            <div className="text-center">
              <i className="fas fa-map-marked-alt text-6xl text-[#004D2E] mb-4"></i>
              <h3 className="text-xl font-serif font-bold text-[#004D2E] mb-2">Interactive Map</h3>
              <p className="text-gray-600">123 Legal Avenue, Suite 500, London, EC2V 7EE</p>
              <button className="mt-4 bg-[#004D2E] text-white px-6 py-3 font-bold hover:bg-[#006d42] transition duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-[#004D2E] mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Find answers to common questions about our services, processes, and policies.</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md mb-4 overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition duration-200 cursor-pointer"
                >
                  <h3 className="text-lg font-semibold text-[#004D2E]">{faq.question}</h3>
                  <i className={`fas ${openFaq === index ? 'fa-chevron-up' : 'fa-chevron-down'} text-[#004D2E]`}></i>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Hours Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-[#004D2E] mb-4">Office Hours & Availability</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We're here when you need us. Our flexible scheduling accommodates your busy lifestyle.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <i className="fas fa-calendar-alt text-4xl text-[#004D2E] mb-6"></i>
              <h3 className="text-xl font-serif font-bold text-[#004D2E] mb-4">Regular Hours</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <i className="fas fa-phone-alt text-4xl text-[#004D2E] mb-6"></i>
              <h3 className="text-xl font-serif font-bold text-[#004D2E] mb-4">Emergency Support</h3>
              <p className="text-gray-600 mb-4">24/7 emergency legal assistance available for urgent matters.</p>
              <div className="text-[#004D2E] font-semibold">
                Emergency Line:<br />
                +44 20 7123 4568
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <i className="fas fa-clock text-4xl text-[#004D2E] mb-6"></i>
              <h3 className="text-xl font-serif font-bold text-[#004D2E] mb-4">Flexible Scheduling</h3>
              <p className="text-gray-600 mb-4">Evening and weekend appointments available by arrangement.</p>
              <button className="bg-[#004D2E] text-white px-6 py-3 font-bold hover:bg-[#006d42] transition duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                Schedule Appointment
              </button>
            </div>
          </div>
        </div>
      </section>

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
              <p className="mb-4">Providing exceptional legal services with integrity and dedication since 2016.</p>
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
                <li><a href="https://readdy.ai/home/d66b71df-70ec-4055-a03e-45ce2d423138/e76d046b-52c8-48f7-a2c3-a210e809c74e" data-readdy="true" className="hover:text-gray-300 cursor-pointer !rounded-button whitespace-nowrap">Home</a></li>
                <li><a href="https://readdy.ai/home/d66b71df-70ec-4055-a03e-45ce2d423138/9964b298-d53e-4287-8862-8c437892f9f3" data-readdy="true" className="hover:text-gray-300 cursor-pointer !rounded-button whitespace-nowrap">About Us</a></li>
                <li><a href="#" className="hover:text-gray-300 cursor-pointer !rounded-button whitespace-nowrap">Practice Areas</a></li>
                <li><a href="#" className="hover:text-gray-300 cursor-pointer !rounded-button whitespace-nowrap">Our Team</a></li>
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
};

export default Contact;
