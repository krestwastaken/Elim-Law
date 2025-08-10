import React, { useState } from 'react';

const PracticeAreas = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedPracticeArea, setSelectedPracticeArea] = useState('corporate');
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const practiceAreas = [
    {
    id: 'corporate',
    title: 'Corporate Law',
    icon: 'fas fa-building',
    description: 'Comprehensive legal solutions for businesses of all sizes, from startups to multinational corporations.',
    services: ['Business Formation', 'Mergers & Acquisitions', 'Corporate Governance', 'Securities Law', 'Contract Negotiations', 'Compliance & Regulatory']
    },
    {
    id: 'litigation',
    title: 'Litigation',
    icon: 'fas fa-gavel',
    description: 'Experienced trial attorneys representing clients in complex commercial and civil disputes.',
    services: ['Commercial Litigation', 'Contract Disputes', 'Employment Disputes', 'Intellectual Property Litigation', 'Class Action Defense', 'Arbitration & Mediation']
    },
    {
    id: 'employment',
    title: 'Employment Law',
    icon: 'fas fa-users',
    description: 'Protecting both employers and employees in workplace-related legal matters.',
    services: ['Employment Contracts', 'Workplace Discrimination', 'Wrongful Termination', 'Wage & Hour Claims', 'Executive Compensation', 'HR Policy Development']
    },
    {
    id: 'real-estate',
    title: 'Real Estate',
    icon: 'fas fa-home',
    description: 'Full-service real estate legal support for residential and commercial transactions.',
    services: ['Property Transactions', 'Commercial Leasing', 'Zoning & Land Use', 'Real Estate Development', 'Property Disputes', 'Title Insurance']
    },
    {
    id: 'family',
    title: 'Family Law',
    icon: 'fas fa-heart',
    description: 'Compassionate legal guidance through life\'s most personal and challenging moments.',
    services: ['Divorce & Separation', 'Child Custody', 'Adoption Services', 'Prenuptial Agreements', 'Domestic Violence', 'Property Division']
    },
    {
    id: 'criminal',
    title: 'Criminal Defense',
    icon: 'fas fa-shield-alt',
    description: 'Aggressive defense representation for individuals facing criminal charges.',
    services: ['White Collar Crimes', 'DUI Defense', 'Drug Offenses', 'Assault & Battery', 'Theft Crimes', 'Appeals & Post-Conviction']
    }
  ];
  const attorneys = {
    corporate: [
      {
        name: 'Sarah Mitchell',
        title: 'Senior Partner, Corporate Law',
        image: 'https://readdy.ai/api/search-image?query=Professional%20female%20corporate%20lawyer%20in%20business%20suit%2C%20confident%20expression%2C%20modern%20office%20background%2C%20professional%20headshot%20portrait%2C%20sophisticated%20business%20attire%2C%20clean%20white%20background&width=300&height=400&seq=att1&orientation=portrait',
        bio: '15+ years specializing in corporate transactions and business law.',
        phone: '+44 20 7123 4570'
      },
      {
        name: 'David Thompson',
        title: 'Partner, M&A Specialist',
        image: 'https://readdy.ai/api/search-image?query=Professional%20male%20business%20lawyer%20in%20dark%20suit%2C%20confident%20smile%2C%20modern%20office%20setting%2C%20executive%20portrait%2C%20professional%20business%20attire%2C%20clean%20white%20background&width=300&height=400&seq=att2&orientation=portrait',
        bio: '12+ years in mergers, acquisitions, and corporate restructuring.',
        phone: '+44 20 7123 4571'
      }
    ],
    litigation: [
      {
        name: 'Michael Roberts',
        title: 'Senior Litigation Partner',
        image: 'https://readdy.ai/api/search-image?query=Professional%20male%20trial%20lawyer%20in%20formal%20suit%2C%20serious%20expression%2C%20courtroom%20background%2C%20experienced%20attorney%20portrait%2C%20professional%20legal%20attire%2C%20clean%20white%20background&width=300&height=400&seq=att3&orientation=portrait',
        bio: '20+ years of trial experience in complex commercial disputes.',
        phone: '+44 20 7123 4572'
      },
      {
        name: 'Emma Wilson',
        title: 'Associate, Civil Litigation',
        image: 'https://readdy.ai/api/search-image?query=Professional%20female%20litigation%20attorney%20in%20business%20suit%2C%20determined%20expression%2C%20law%20office%20background%2C%20confident%20lawyer%20portrait%2C%20professional%20attire%2C%20clean%20white%20background&width=300&height=400&seq=att4&orientation=portrait',
        bio: '8+ years focusing on civil litigation and dispute resolution.',
        phone: '+44 20 7123 4573'
      }
    ],
    employment: [
      {
        name: 'Jennifer Adams',
        title: 'Employment Law Partner',
        image: 'https://readdy.ai/api/search-image?query=Professional%20female%20employment%20lawyer%20in%20navy%20suit%2C%20approachable%20smile%2C%20modern%20office%20environment%2C%20HR%20legal%20specialist%20portrait%2C%20professional%20business%20wear%2C%20clean%20white%20background&width=300&height=400&seq=att5&orientation=portrait',
        bio: '14+ years in employment law and workplace compliance.',
        phone: '+44 20 7123 4574'
      }
    ],
    'real-estate': [
      {
        name: 'Robert Chen',
        title: 'Real Estate Partner',
        image: 'https://readdy.ai/api/search-image?query=Professional%20male%20real%20estate%20attorney%20in%20gray%20suit%2C%20friendly%20expression%2C%20property%20office%20background%2C%20real%20estate%20lawyer%20portrait%2C%20professional%20attire%2C%20clean%20white%20background&width=300&height=400&seq=att6&orientation=portrait',
        bio: '18+ years in commercial and residential real estate law.',
        phone: '+44 20 7123 4575'
      }
    ],
    family: [
      {
        name: 'Lisa Rodriguez',
        title: 'Family Law Partner',
        image: 'https://readdy.ai/api/search-image?query=Professional%20female%20family%20lawyer%20in%20warm%20colored%20suit%2C%20compassionate%20expression%2C%20comfortable%20office%20setting%2C%20family%20law%20attorney%20portrait%2C%20approachable%20professional%20attire%2C%20clean%20white%20background&width=300&height=400&seq=att7&orientation=portrait',
        bio: '16+ years providing compassionate family law representation.',
        phone: '+44 20 7123 4576'
      }
    ],
    criminal: [
      {
        name: 'James Parker',
        title: 'Criminal Defense Partner',
        image: 'https://readdy.ai/api/search-image?query=Professional%20male%20criminal%20defense%20lawyer%20in%20black%20suit%2C%20serious%20confident%20expression%2C%20legal%20office%20background%2C%20defense%20attorney%20portrait%2C%20formal%20professional%20attire%2C%20clean%20white%20background&width=300&height=400&seq=att8&orientation=portrait',
        bio: '22+ years defending clients in criminal matters.',
        phone: '+44 20 7123 4577'
      }
    ]
  };
  const toggleService = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };
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
  <a href="https://readdy.ai/home/d66b71df-70ec-4055-a03e-45ce2d423138/9e2b4b17-f756-48a9-ad4d-3a9cb7f51e2e" data-readdy="true" className="text-[#004D2E] hover:text-[#006d42] font-medium whitespace-nowrap cursor-pointer">Home</a>
  <a href="#" className="text-[#004D2E] hover:text-[#006d42] font-medium whitespace-nowrap cursor-pointer">About Us</a>
  <a href="#" className="text-[#004D2E] hover:text-[#006d42] font-medium whitespace-nowrap border-b-2 border-[#004D2E] cursor-pointer">Practice Areas</a>
  <a href="#" className="text-[#004D2E] hover:text-[#006d42] font-medium whitespace-nowrap cursor-pointer">Our Team</a>
  <a href="#" className="text-[#004D2E] hover:text-[#006d42] font-medium whitespace-nowrap cursor-pointer">Contact</a>
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
  <a href="https://readdy.ai/home/d66b71df-70ec-4055-a03e-45ce2d423138/9e2b4b17-f756-48a9-ad4d-3a9cb7f51e2e" data-readdy="true" className="text-[#004D2E] hover:text-[#006d42] font-medium cursor-pointer">Home</a>
  <a href="#" className="text-[#004D2E] hover:text-[#006d42] font-medium cursor-pointer">About Us</a>
  <a href="#" className="text-[#004D2E] hover:text-[#006d42] font-medium border-b border-[#004D2E] cursor-pointer">Practice Areas</a>
  <a href="#" className="text-[#004D2E] hover:text-[#006d42] font-medium cursor-pointer">Our Team</a>
  <a href="#" className="text-[#004D2E] hover:text-[#006d42] font-medium cursor-pointer">Contact</a>
  </div>
  </nav>
  )}
  </header>
  {/* Hero Section */}
  <section className="relative h-[500px] overflow-hidden">
  <img
  src="https://readdy.ai/api/search-image?query=Elegant%20modern%20law%20office%20interior%20with%20sophisticated%20furniture%2C%20warm%20professional%20lighting%2C%20legal%20books%20and%20scales%20of%20justice%2C%20executive%20meeting%20room%20atmosphere%2C%20prestigious%20legal%20practice%20environment%2C%20rich%20wood%20and%20leather%20accents&width=1440&height=500&seq=hero1&orientation=landscape"
  alt="Practice Areas"
  className="absolute inset-0 w-full h-full object-cover object-top"
  />
  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
  <div className="container mx-auto px-4 h-full flex items-center relative z-10">
  <div className="max-w-2xl text-white">
  <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Practice Areas</h1>
  <p className="text-lg mb-8 leading-relaxed">With decades of combined experience across multiple legal disciplines, our expert attorneys provide comprehensive legal solutions tailored to your unique needs. From corporate transactions to personal legal matters, we deliver exceptional results with unwavering dedication.</p>
  <button className="bg-[#004D2E] text-white px-8 py-4 font-bold hover:bg-[#006d42] transition duration-300 cursor-pointer !rounded-button whitespace-nowrap">
  Schedule Consultation
  </button>
  </div>
  </div>
  </section>
  {/* Practice Areas Grid */}
  <section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
  <div className="text-center mb-12">
  <h2 className="text-3xl font-serif font-bold text-[#004D2E] mb-4">Areas of Legal Expertise</h2>
  <p className="text-gray-600 max-w-2xl mx-auto">Our comprehensive legal services cover a wide range of practice areas, ensuring we can meet all your legal needs under one roof.</p>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {practiceAreas.map((area) => (
  <div key={area.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer">
  <div className="p-8 text-center">
  <div className="w-16 h-16 bg-[#004D2E] rounded-full flex items-center justify-center mx-auto mb-6">
  <i className={`${area.icon} text-2xl text-white`}></i>
  </div>
  <h3 className="text-xl font-serif font-bold text-[#004D2E] mb-4">{area.title}</h3>
  <p className="text-gray-600 leading-relaxed">{area.description}</p>
  </div>
  </div>
  ))}
  </div>
  </div>
  </section>
  {/* Services Overview */}
  <section className="py-16 bg-white">
  <div className="container mx-auto px-4">
  <div className="text-center mb-12">
  <h2 className="text-3xl font-serif font-bold text-[#004D2E] mb-4">Detailed Services</h2>
  <p className="text-gray-600 max-w-2xl mx-auto">Explore our comprehensive range of legal services within each practice area.</p>
  </div>
  <div className="max-w-4xl mx-auto">
  {practiceAreas.map((area) => (
  <div key={area.id} className="mb-6 bg-gray-50 rounded-lg overflow-hidden">
  <button
  onClick={() => toggleService(area.id)}
  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition duration-200 cursor-pointer"
  >
  <div className="flex items-center">
  <i className={`${area.icon} text-[#004D2E] mr-4`}></i>
  <h3 className="text-xl font-serif font-bold text-[#004D2E]">{area.title}</h3>
  </div>
  <i className={`fas ${expandedService === area.id ? 'fa-chevron-up' : 'fa-chevron-down'} text-[#004D2E]`}></i>
  </button>
  {expandedService === area.id && (
  <div className="px-6 pb-6">
  <p className="text-gray-600 mb-4">{area.description}</p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {area.services.map((service, index) => (
  <div key={index} className="flex items-center">
  <i className="fas fa-check-circle text-[#004D2E] mr-3"></i>
  <span className="text-gray-700">{service}</span>
  </div>
  ))}
  </div>
  </div>
  )}
  </div>
  ))}
  </div>
  </div>
  </section>
  {/* Attorney Profiles */}
  <section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
  <div className="text-center mb-12">
  <h2 className="text-3xl font-serif font-bold text-[#004D2E] mb-4">Meet Our Attorneys</h2>
  <p className="text-gray-600 max-w-2xl mx-auto">Our experienced legal professionals are dedicated to providing exceptional representation in their respective practice areas.</p>
  </div>
  <div className="mb-8">
  <div className="flex flex-wrap justify-center gap-4">
  {practiceAreas.map((area) => (
  <button
  key={area.id}
  onClick={() => setSelectedPracticeArea(area.id)}
  className={`px-6 py-3 font-semibold transition duration-300 cursor-pointer !rounded-button whitespace-nowrap ${
  selectedPracticeArea === area.id
  ? 'bg-[#004D2E] text-white'
  : 'bg-white text-[#004D2E] hover:bg-[#004D2E] hover:text-white'
  }`}
  >
  {area.title}
  </button>
  ))}
  </div>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {attorneys[selectedPracticeArea]?.map((attorney, index) => (
  <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
  <div className="h-64 overflow-hidden">
  <img
  src={attorney.image}
  alt={attorney.name}
  className="w-full h-full object-cover object-top"
  />
  </div>
  <div className="p-6">
  <h3 className="text-xl font-serif font-bold text-[#004D2E] mb-2">{attorney.name}</h3>
  <p className="text-[#004D2E] font-semibold mb-3">{attorney.title}</p>
  <p className="text-gray-600 mb-4">{attorney.bio}</p>
  <div className="flex items-center justify-between">
  <div className="flex items-center text-gray-600">
  <i className="fas fa-phone mr-2"></i>
  <span className="text-sm">{attorney.phone}</span>
  </div>
  <button className="bg-[#004D2E] text-white px-4 py-2 text-sm font-bold hover:bg-[#006d42] transition duration-300 cursor-pointer !rounded-button whitespace-nowrap">
  Contact
  </button>
  </div>
  </div>
  </div>
  ))}
  </div>
  </div>
  </section>
  {/* Consultation CTA */}
  <section className="py-16 bg-[#004D2E] text-white">
  <div className="container mx-auto px-4 text-center">
  <h2 className="text-3xl font-serif font-bold mb-6">Ready to Get Started?</h2>
  <p className="text-lg mb-8 max-w-2xl mx-auto">Don't let legal challenges overwhelm you. Our experienced attorneys are here to guide you through every step of the legal process. Schedule your consultation today and take the first step toward resolving your legal matters.</p>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
  <div className="text-center">
  <i className="fas fa-calendar-check text-4xl mb-4"></i>
  <h3 className="text-xl font-serif font-bold mb-2">Schedule Consultation</h3>
  <p className="text-sm opacity-90">Book your initial consultation online or by phone</p>
  </div>
  <div className="text-center">
  <i className="fas fa-comments text-4xl mb-4"></i>
  <h3 className="text-xl font-serif font-bold mb-2">Discuss Your Case</h3>
  <p className="text-sm opacity-90">Share details about your legal matter with our experts</p>
  </div>
  <div className="text-center">
  <i className="fas fa-handshake text-4xl mb-4"></i>
  <h3 className="text-xl font-serif font-bold mb-2">Get Legal Solutions</h3>
  <p className="text-sm opacity-90">Receive personalized legal strategies and representation</p>
  </div>
  </div>
  <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
  <a href="https://readdy.ai/home/d66b71df-70ec-4055-a03e-45ce2d423138/fd4f90bf-7c07-4e84-b0cc-4f9efe3aab04" data-readdy="true" className="inline-block">
    <button className="bg-white text-[#004D2E] px-8 py-4 font-bold hover:bg-gray-100 transition duration-300 cursor-pointer !rounded-button whitespace-nowrap">
      Schedule Free Consultation
    </button>
  </a>
  <div className="flex items-center">
  <i className="fas fa-phone mr-3 text-xl"></i>
  <div className="text-left">
  <p className="text-sm opacity-90">Call us directly</p>
  <p className="text-lg font-bold">+44 20 7123 4567</p>
  </div>
  </div>
  </div>
  <div className="mt-8 text-center">
  <p className="text-sm opacity-90">Office Hours: Monday - Friday, 9:00 AM - 6:00 PM | Emergency Support Available 24/7</p>
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
  <li><a href="https://readdy.ai/home/d66b71df-70ec-4055-a03e-45ce2d423138/9e2b4b17-f756-48a9-ad4d-3a9cb7f51e2e" data-readdy="true" className="hover:text-gray-300 cursor-pointer !rounded-button whitespace-nowrap">Home</a></li>
  <li><a href="#" className="hover:text-gray-300 cursor-pointer !rounded-button whitespace-nowrap">About Us</a></li>
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
export default PracticeAreas;