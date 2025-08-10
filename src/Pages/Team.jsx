import { useState } from 'react';

const Team = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedAttorney, setExpandedAttorney] = useState<number | null>(null);
  const [sortOption, setSortOption] = useState('alphabetical');
  const [showSortOptions, setShowSortOptions] = useState(false);

  const practiceAreas = [
    'All',
    'Corporate Law',
    'Litigation',
    'Real Estate Law',
    'Family Law',
    'Criminal Defense',
    'Estate Planning'
  ];

  const attorneys = [
    {
      id: 1,
      name: 'Jonathan Parker',
      role: 'Managing Partner',
      image: 'https://readdy.ai/api/search-image?query=Professional%2520male%2520lawyer%2520in%2520formal%2520suit%2520with%2520confident%2520expression%252C%2520neutral%2520background%252C%2520studio%2520lighting%252C%2520high%2520quality%2520portrait%252C%2520professional%2520headshot%2520style%252C%2520clean%2520background%252C%2520business%2520attire&width=400&height=500&seq=2&orientation=portrait',
      specializations: ['Corporate Law', 'Mergers & Acquisitions'],
      experience: 25,
      education: [
        'J.D., Harvard Law School',
        'B.A. in Economics, Yale University'
      ],
      barAdmissions: [
        'New York State Bar',
        'U.S. District Court for the Southern District of New York'
      ],
      biography: 'Jonathan Parker has over 25 years of experience representing major corporations in complex transactions and litigation. He has successfully negotiated multi-billion dollar mergers and acquisitions and has been recognized as a leading corporate lawyer by Chambers and Partners for 15 consecutive years.',
      achievements: [
        'Named "Lawyer of the Year" by Legal Business Magazine (2023)',
        'Successfully negotiated the $4.2 billion merger of Tech Innovations and Global Solutions',
        'Lead counsel in over 50 successful M&A transactions'
      ],
      publications: [
        'The Future of Corporate Governance (Harvard Law Review, 2022)',
        'Strategic Approaches to Mergers & Acquisitions (Oxford Press, 2020)'
      ],
      testimonials: [
        { client: 'CEO, Fortune 500 Company', text: 'Jonathan\'s strategic guidance was instrumental in successfully completing our complex merger. His attention to detail and negotiation skills are unmatched.', rating: 5 },
        { client: 'CFO, Tech Startup', text: 'Working with Jonathan gave us the confidence to navigate challenging legal waters during our acquisition. His expertise was invaluable.', rating: 5 }
      ],
      email: 'jparker@elimlawpractice.com',
      phone: '+44 20 7123 4567',
      linkedin: 'linkedin.com/in/jonathanparker'
    },
    {
      id: 2,
      name: 'Sarah Thompson',
      role: 'Senior Partner',
      image: 'https://readdy.ai/api/search-image?query=Professional%2520female%2520lawyer%2520in%2520formal%2520business%2520attire%2520with%2520confident%2520expression%252C%2520neutral%2520background%252C%2520studio%2520lighting%252C%2520high%2520quality%2520portrait%252C%2520professional%2520headshot%2520style%252C%2520clean%2520background&width=400&height=500&seq=3&orientation=portrait',
      specializations: ['Family Law', 'Estate Planning'],
      experience: 18,
      education: [
        'J.D., Columbia Law School',
        'B.A. in Psychology, Princeton University'
      ],
      barAdmissions: [
        'New York State Bar',
        'Connecticut State Bar'
      ],
      biography: 'Sarah Thompson specializes in family law and estate planning with a compassionate approach to client needs. With 18 years of experience, she has helped hundreds of families navigate complex legal matters including divorce, child custody, and comprehensive estate planning.',
      achievements: [
        'Board Certified Family Law Specialist',
        'Named "Top Family Lawyer" by City Legal Journal (2021-2023)',
        'Successfully mediated over 200 high-conflict divorce cases'
      ],
      publications: [
        'Modern Approaches to Child Custody Arrangements (Family Law Quarterly, 2021)',
        'Estate Planning for Blended Families (Legal Planning Today, 2019)'
      ],
      testimonials: [
        { client: 'Private Client', text: 'Sarah guided me through an extremely difficult divorce with empathy and strategic thinking. She protected my interests while keeping the process as amicable as possible.', rating: 5 },
        { client: 'Family Trust Client', text: 'Sarah\'s expertise in estate planning helped our family create a comprehensive plan that gave us peace of mind for generations to come.', rating: 5 }
      ],
      email: 'sthompson@elimlawpractice.com',
      phone: '+44 20 7123 4568',
      linkedin: 'linkedin.com/in/sarahthompson'
    },
    {
      id: 3,
      name: 'Michael Reynolds',
      role: 'Litigation Specialist',
      image: 'https://readdy.ai/api/search-image?query=Professional%2520male%2520lawyer%2520in%2520formal%2520suit%2520with%2520serious%2520expression%252C%2520neutral%2520background%252C%2520studio%2520lighting%252C%2520high%2520quality%2520portrait%252C%2520professional%2520headshot%2520style%252C%2520clean%2520background%252C%2520business%2520attire&width=400&height=500&seq=4&orientation=portrait',
      specializations: ['Litigation', 'Criminal Defense'],
      experience: 15,
      education: [
        'J.D., Stanford Law School',
        'B.A. in Political Science, UC Berkeley'
      ],
      barAdmissions: [
        'California State Bar',
        'U.S. Court of Appeals for the Ninth Circuit'
      ],
      biography: 'Michael Reynolds is an accomplished trial attorney with an impressive record of successful litigation outcomes. With 15 years of courtroom experience, he has represented clients in high-stakes civil litigation and criminal defense cases, earning a reputation for his strategic approach and persuasive advocacy.',
      achievements: [
        'Named "Top 100 Trial Lawyers" by National Trial Lawyers Association',
        'Won landmark case establishing new precedent in commercial contract law',
        'Maintained 85% success rate in jury trials'
      ],
      publications: [
        'Effective Cross-Examination Techniques (Litigation Journal, 2022)',
        'The Art of Persuasion in the Modern Courtroom (Legal Advocacy Press, 2020)'
      ],
      testimonials: [
        { client: 'Corporate Client', text: 'Michael\'s courtroom skills are exceptional. His ability to simplify complex issues for the jury was key to our favorable verdict.', rating: 5 },
        { client: 'Individual Client', text: 'When facing serious charges, Michael was the steady, strategic advocate I needed. His dedication to my case resulted in all charges being dismissed.', rating: 5 }
      ],
      email: 'mreynolds@elimlawpractice.com',
      phone: '+44 20 7123 4569',
      linkedin: 'linkedin.com/in/michaelreynolds'
    },
    {
      id: 4,
      name: 'Emily Chen',
      role: 'Partner',
      image: 'https://readdy.ai/api/search-image?query=Professional%2520Asian%2520female%2520lawyer%2520in%2520business%2520attire%2520with%2520confident%2520expression%252C%2520neutral%2520background%252C%2520studio%2520lighting%252C%2520high%2520quality%2520portrait%252C%2520professional%2520headshot%2520style%252C%2520clean%2520background&width=400&height=500&seq=5&orientation=portrait',
      specializations: ['Real Estate Law', 'Corporate Law'],
      experience: 14,
      education: [
        'J.D., University of Chicago Law School',
        'B.S. in Business Administration, NYU Stern'
      ],
      barAdmissions: [
        'New York State Bar',
        'Illinois State Bar'
      ],
      biography: 'Emily Chen specializes in complex real estate transactions and corporate law. With 14 years of experience, she has represented developers, investors, and corporations in transactions valued at over $2 billion collectively. Her expertise in navigating complex regulatory environments has made her a sought-after advisor for major development projects.',
      achievements: [
        'Led legal team for $500M mixed-use development project',
        'Named "Rising Star in Real Estate Law" by Legal 500',
        'Negotiated landmark public-private partnership for urban renewal project'
      ],
      publications: [
        'Navigating Zoning Challenges in Urban Development (Real Estate Law Journal, 2021)',
        'Structuring Joint Ventures for Major Development Projects (Commercial Property Law Review, 2019)'
      ],
      testimonials: [
        { client: 'Real Estate Developer', text: 'Emily\'s understanding of both the legal and business aspects of real estate development is exceptional. She anticipated issues before they arose and found creative solutions.', rating: 5 },
        { client: 'Investment Firm Partner', text: 'We rely on Emily for all our major property acquisitions. Her attention to detail and strategic thinking have saved us from potential pitfalls numerous times.', rating: 5 }
      ],
      email: 'echen@elimlawpractice.com',
      phone: '+44 20 7123 4570',
      linkedin: 'linkedin.com/in/emilychen'
    },
    {
      id: 5,
      name: 'David Wilson',
      role: 'Partner',
      image: 'https://readdy.ai/api/search-image?query=Professional%2520Black%2520male%2520lawyer%2520in%2520formal%2520suit%2520with%2520confident%2520expression%252C%2520neutral%2520background%252C%2520studio%2520lighting%252C%2520high%2520quality%2520portrait%252C%2520professional%2520headshot%2520style%252C%2520clean%2520background%252C%2520business%2520attire&width=400&height=500&seq=6&orientation=portrait',
      specializations: ['Estate Planning', 'Tax Law'],
      experience: 16,
      education: [
        'J.D., Georgetown University Law Center',
        'LL.M. in Taxation, New York University',
        'B.A. in Economics, Duke University'
      ],
      barAdmissions: [
        'New York State Bar',
        'Washington D.C. Bar'
      ],
      biography: 'David Wilson combines his expertise in estate planning and tax law to provide comprehensive wealth preservation strategies for high-net-worth individuals and families. With 16 years of experience and an LL.M. in Taxation, he helps clients navigate complex tax regulations while securing their legacy through sophisticated estate planning techniques.',
      achievements: [
        'Certified Specialist in Estate Planning',
        'Developed innovative trust structures adopted by multiple family offices',
        'Recognized by Wealth Management Magazine as "Top 40 Under 40" advisor'
      ],
      publications: [
        'Strategic Tax Planning for Family Businesses (Tax Law Review, 2022)',
        'Multigenerational Wealth Transfer Strategies (Estate Planning Today, 2020)'
      ],
      testimonials: [
        { client: 'Family Office Director', text: 'David\'s comprehensive approach to estate and tax planning has saved our clients millions in potential tax liabilities while ensuring their wishes are honored.', rating: 5 },
        { client: 'Business Owner', text: 'When planning my business succession, David\'s insights were invaluable. He created a strategy that protected my legacy and minimized tax impact.', rating: 5 }
      ],
      email: 'dwilson@elimlawpractice.com',
      phone: '+44 20 7123 4571',
      linkedin: 'linkedin.com/in/davidwilson'
    },
    {
      id: 6,
      name: 'Olivia Martinez',
      role: 'Senior Associate',
      image: 'https://readdy.ai/api/search-image?query=Professional%2520Hispanic%2520female%2520lawyer%2520in%2520business%2520attire%2520with%2520confident%2520expression%252C%2520neutral%2520background%252C%2520studio%2520lighting%252C%2520high%2520quality%2520portrait%252C%2520professional%2520headshot%2520style%252C%2520clean%2520background&width=400&height=500&seq=7&orientation=portrait',
      specializations: ['Family Law', 'Immigration Law'],
      experience: 8,
      education: [
        'J.D., University of California, Los Angeles',
        'B.A. in Sociology, University of Miami'
      ],
      barAdmissions: [
        'California State Bar',
        'Florida State Bar'
      ],
      biography: 'Olivia Martinez specializes in family law with a focus on cases involving immigration issues. With 8 years of experience, she has helped numerous families navigate the complexities of international custody disputes, cross-border divorces, and family-based immigration matters. Her bilingual capabilities and cultural understanding make her particularly effective in representing diverse clients.',
      achievements: [
        'Pro Bono Award for representation of immigrant families',
        'Successfully reunited over 25 families separated by immigration issues',
        'Developed firm\'s protocol for handling international custody cases'
      ],
      publications: [
        'International Custody Disputes: Legal Frameworks and Practical Approaches (Family Law International, 2021)',
        'Immigration Considerations in Family Court Proceedings (Immigration Law Today, 2019)'
      ],
      testimonials: [
        { client: 'Family Reunification Client', text: 'Olivia fought tirelessly to reunite our family after immigration complications separated us. Her understanding of both family and immigration law was crucial to our success.', rating: 5 },
        { client: 'International Divorce Client', text: 'Navigating a divorce across international borders seemed impossible until we found Olivia. Her expertise in both jurisdictions made a complex situation manageable.', rating: 5 }
      ],
      email: 'omartinez@elimlawpractice.com',
      phone: '+44 20 7123 4572',
      linkedin: 'linkedin.com/in/oliviamartinez'
    }
  ];

  const filteredAttorneys = attorneys.filter(attorney => {
    // Filter by practice area
    const practiceAreaMatch = activeFilter === 'All' || attorney.specializations.includes(activeFilter);
    
    // Filter by search term
    const searchMatch = attorney.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        attorney.specializations.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase())) ||
                        attorney.role.toLowerCase().includes(searchTerm.toLowerCase());
    
    return practiceAreaMatch && searchMatch;
  });

  // Sort attorneys based on selected option
  const sortedAttorneys = [...filteredAttorneys].sort((a, b) => {
    if (sortOption === 'alphabetical') {
      return a.name.localeCompare(b.name);
    } else if (sortOption === 'experience') {
      return b.experience - a.experience;
    } else {
      return a.name.localeCompare(b.name); // Default sorting
    }
  });

  const toggleAttorneyExpansion = (id) => {
    if (expandedAttorney === id) {
      setExpandedAttorney(null);
    } else {
      setExpandedAttorney(id);
    }
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
            <a href="https://readdy.ai/home/d66b71df-70ec-4055-a03e-45ce2d423138/e76d046b-52c8-48f7-a2c3-a210e809c74e" data-readdy="true" className="text-[#004D2E] hover:text-[#006d42] font-medium whitespace-nowrap">Home</a>
            <a href="#" className="text-[#004D2E] hover:text-[#006d42] font-medium whitespace-nowrap">About Us</a>
            <a href="#" className="text-[#004D2E] hover:text-[#006d42] font-medium whitespace-nowrap">Practice Areas</a>
            <a href="#" className="text-[#004D2E] hover:text-[#006d42] font-medium whitespace-nowrap font-bold border-b-2 border-[#004D2E]">Our Team</a>
            <a href="#" className="text-[#004D2E] hover:text-[#006d42] font-medium whitespace-nowrap">Contact</a>
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
              <a href="https://readdy.ai/home/d66b71df-70ec-4055-a03e-45ce2d423138/e76d046b-52c8-48f7-a2c3-a210e809c74e" data-readdy="true" className="text-[#004D2E] hover:text-[#006d42] font-medium">Home</a>
              <a href="#" className="text-[#004D2E] hover:text-[#006d42] font-medium">About Us</a>
              <a href="#" className="text-[#004D2E] hover:text-[#006d42] font-medium">Practice Areas</a>
              <a href="#" className="text-[#004D2E] hover:text-[#006d42] font-medium font-bold">Our Team</a>
              <a href="#" className="text-[#004D2E] hover:text-[#006d42] font-medium">Contact</a>
            </div>
          </nav>
        )}
      </header>

      {/* Team Banner */}
      <section className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Elegant%2520modern%2520law%2520office%2520interior%2520with%2520dark%2520wood%2520paneling%252C%2520law%2520books%2520on%2520shelves%252C%2520large%2520windows%2520with%2520natural%2520light%252C%2520professional%2520atmosphere%252C%2520clean%2520and%2520sophisticated%2520environment%252C%2520high%2520ceilings%252C%2520marble%2520floors%252C%2520subtle%2520lighting&width=1440&height=400&seq=8&orientation=landscape')`
          }}
        ></div>
        <div className="absolute inset-0 bg-[#004D2E] bg-opacity-70"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl text-white">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Meet Our Legal Team</h2>
            <p className="text-lg mb-8">Our team of dedicated attorneys brings decades of combined experience across various practice areas. We are committed to providing exceptional legal representation with integrity, expertise, and a client-focused approach.</p>
            <div className="flex flex-wrap gap-3">
              {practiceAreas.slice(0, 4).map((area, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveFilter(area)}
                  className={`px-4 py-2 rounded transition duration-300 cursor-pointer !rounded-button whitespace-nowrap ${
                    activeFilter === area 
                      ? 'bg-white text-[#004D2E] font-bold' 
                      : 'bg-transparent text-white border border-white hover:bg-white hover:bg-opacity-20'
                  }`}
                >
                  {area}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Filtering Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            {/* Search Bar */}
            <div className="w-full md:w-1/3 relative">
              <input
                type="text"
                placeholder="Search by name or expertise..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004D2E] focus:border-transparent"
              />
              <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
            
            {/* Practice Area Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {practiceAreas.map((area, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFilter(area)}
                  className={`px-3 py-2 text-sm rounded transition duration-300 cursor-pointer !rounded-button whitespace-nowrap ${
                    activeFilter === area
                      ? 'bg-[#004D2E] text-white font-medium'
                      : 'bg-white text-[#004D2E] border border-[#004D2E] hover:bg-[#004D2E] hover:bg-opacity-10'
                  }`}
                >
                  {area}
                </button>
              ))}
            </div>
            
            {/* Sort Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setShowSortOptions(!showSortOptions)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer !rounded-button whitespace-nowrap"
              >
                <i className="fas fa-sort text-[#004D2E]"></i>
                <span>Sort By</span>
                <i className={`fas fa-chevron-down text-xs transition-transform ${showSortOptions ? 'rotate-180' : ''}`}></i>
              </button>
              
              {showSortOptions && (
                <div className="absolute right-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  <button 
                    onClick={() => {
                      setSortOption('alphabetical');
                      setShowSortOptions(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer !rounded-button whitespace-nowrap"
                  >
                    Alphabetical
                  </button>
                  <button 
                    onClick={() => {
                      setSortOption('experience');
                      setShowSortOptions(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer !rounded-button whitespace-nowrap"
                  >
                    Years of Experience
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {sortedAttorneys.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedAttorneys.map((attorney) => (
                <div key={attorney.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300">
                  {/* Collapsed View */}
                  <div className={`${expandedAttorney === attorney.id ? 'hidden' : 'block'}`}>
                    <div className="h-80 overflow-hidden">
                      <img
                        src={attorney.image}
                        alt={attorney.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-serif font-bold text-[#004D2E] mb-1">{attorney.name}</h3>
                      <p className="text-[#006d42] font-medium mb-2">{attorney.role}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {attorney.specializations.map((spec, index) => (
                          <span key={index} className="bg-gray-100 text-[#004D2E] text-sm px-3 py-1 rounded-full">
                            {spec}
                          </span>
                        ))}
                      </div>
                      <p className="text-gray-600 mb-4"><i className="fas fa-briefcase mr-2"></i>{attorney.experience} Years Experience</p>
                      <p className="text-gray-700 line-clamp-3 mb-4">{attorney.biography.substring(0, 120)}...</p>
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-3">
                          <a href={`mailto:${attorney.email}`} className="text-[#004D2E] hover:text-[#006d42] cursor-pointer !rounded-button whitespace-nowrap">
                            <i className="fas fa-envelope text-lg"></i>
                          </a>
                          <a href={`tel:${attorney.phone}`} className="text-[#004D2E] hover:text-[#006d42] cursor-pointer !rounded-button whitespace-nowrap">
                            <i className="fas fa-phone text-lg"></i>
                          </a>
                          <a href={`https://${attorney.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-[#004D2E] hover:text-[#006d42] cursor-pointer !rounded-button whitespace-nowrap">
                            <i className="fab fa-linkedin text-lg"></i>
                          </a>
                        </div>
                        <button 
                          onClick={() => toggleAttorneyExpansion(attorney.id)}
                          className="text-[#004D2E] border border-[#004D2E] hover:bg-[#004D2E] hover:text-white px-4 py-2 rounded transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap"
                        >
                          View Profile
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Expanded View */}
                  {expandedAttorney === attorney.id && (
                    <div className="p-0">
                      <div className="relative">
                        <button 
                          onClick={() => toggleAttorneyExpansion(attorney.id)}
                          className="absolute top-4 right-4 bg-white text-[#004D2E] w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 z-10 cursor-pointer !rounded-button whitespace-nowrap"
                        >
                          <i className="fas fa-times"></i>
                        </button>
                        <div className="h-96 overflow-hidden">
                          <img
                            src={attorney.image}
                            alt={attorney.name}
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                      </div>
                      
                      <div className="p-8">
                        <div className="mb-6">
                          <h3 className="text-3xl font-serif font-bold text-[#004D2E] mb-1">{attorney.name}</h3>
                          <p className="text-[#006d42] font-medium text-xl mb-4">{attorney.role}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {attorney.specializations.map((spec, index) => (
                              <span key={index} className="bg-gray-100 text-[#004D2E] px-3 py-1 rounded-full">
                                {spec}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <h4 className="text-xl font-serif font-bold text-[#004D2E] mb-4">Biography</h4>
                            <p className="text-gray-700 mb-6">{attorney.biography}</p>
                            
                            <h4 className="text-xl font-serif font-bold text-[#004D2E] mb-4">Education</h4>
                            <ul className="list-disc list-inside text-gray-700 mb-6">
                              {attorney.education.map((edu, index) => (
                                <li key={index} className="mb-2">{edu}</li>
                              ))}
                            </ul>
                            
                            <h4 className="text-xl font-serif font-bold text-[#004D2E] mb-4">Bar Admissions</h4>
                            <ul className="list-disc list-inside text-gray-700">
                              {attorney.barAdmissions.map((admission, index) => (
                                <li key={index} className="mb-2">{admission}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-xl font-serif font-bold text-[#004D2E] mb-4">Notable Achievements</h4>
                            <ul className="list-disc list-inside text-gray-700 mb-6">
                              {attorney.achievements.map((achievement, index) => (
                                <li key={index} className="mb-2">{achievement}</li>
                              ))}
                            </ul>
                            
                            <h4 className="text-xl font-serif font-bold text-[#004D2E] mb-4">Publications</h4>
                            <ul className="list-disc list-inside text-gray-700 mb-6">
                              {attorney.publications.map((publication, index) => (
                                <li key={index} className="mb-2">{publication}</li>
                              ))}
                            </ul>
                            
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <h4 className="text-xl font-serif font-bold text-[#004D2E] mb-4">Contact Information</h4>
                              <div className="space-y-3">
                                <p className="flex items-center text-gray-700">
                                  <i className="fas fa-envelope text-[#004D2E] mr-3 w-5"></i>
                                  <a href={`mailto:${attorney.email}`} className="hover:text-[#004D2E] cursor-pointer !rounded-button whitespace-nowrap">{attorney.email}</a>
                                </p>
                                <p className="flex items-center text-gray-700">
                                  <i className="fas fa-phone text-[#004D2E] mr-3 w-5"></i>
                                  <a href={`tel:${attorney.phone}`} className="hover:text-[#004D2E] cursor-pointer !rounded-button whitespace-nowrap">{attorney.phone}</a>
                                </p>
                                <p className="flex items-center text-gray-700">
                                  <i className="fab fa-linkedin text-[#004D2E] mr-3 w-5"></i>
                                  <a href={`https://${attorney.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#004D2E] cursor-pointer !rounded-button whitespace-nowrap">{attorney.linkedin}</a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Testimonials */}
                        <div className="mb-8">
                          <h4 className="text-xl font-serif font-bold text-[#004D2E] mb-4">Client Testimonials</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {attorney.testimonials.map((testimonial, index) => (
                              <div key={index} className="bg-gray-50 p-5 rounded-lg">
                                <div className="flex mb-2">
                                  {[...Array(testimonial.rating)].map((_, i) => (
                                    <i key={i} className="fas fa-star text-yellow-500"></i>
                                  ))}
                                </div>
                                <p className="text-gray-700 italic mb-3">"{testimonial.text}"</p>
                                <p className="text-[#004D2E] font-medium">— {testimonial.client}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <button 
                            onClick={() => toggleAttorneyExpansion(attorney.id)}
                            className="text-[#004D2E] border border-[#004D2E] hover:bg-[#004D2E] hover:text-white px-6 py-3 rounded transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap"
                          >
                            <i className="fas fa-arrow-left mr-2"></i> Back to Summary
                          </button>
                          <button 
                            className="bg-[#004D2E] text-white px-6 py-3 rounded hover:bg-[#006d42] transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap"
                          >
                            Schedule Consultation
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <i className="fas fa-search text-4xl text-gray-300 mb-4"></i>
              <h3 className="text-2xl font-serif font-bold text-[#004D2E] mb-2">No Results Found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              <button 
                onClick={() => {
                  setActiveFilter('All');
                  setSearchTerm('');
                }}
                className="mt-4 bg-[#004D2E] text-white px-6 py-3 rounded hover:bg-[#006d42] transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-[#004D2E] mb-4">Ready to Work With Our Team?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">Our attorneys are ready to assist you with your legal needs. Contact us today to schedule a consultation with the right specialist for your case.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+442071234567" className="bg-[#004D2E] text-white px-8 py-3 rounded hover:bg-[#006d42] transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
              <i className="fas fa-phone mr-2"></i> Call Us
            </a>
            <a href="mailto:info@elimlawpractice.com" className="bg-white text-[#004D2E] border border-[#004D2E] px-8 py-3 rounded hover:bg-gray-100 transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
              <i className="fas fa-envelope mr-2"></i> Email Us
            </a>
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
                <li><a href="https://readdy.ai/home/d66b71df-70ec-4055-a03e-45ce2d423138/e76d046b-52c8-48f7-a2c3-a210e809c74e" data-readdy="true" className="hover:text-gray-300 cursor-pointer !rounded-button whitespace-nowrap">Home</a></li>
                <li><a href="#" className="hover:text-gray-300 cursor-pointer !rounded-button whitespace-nowrap">About Us</a></li>
                <li><a href="#" className="hover:text-gray-300 cursor-pointer !rounded-button whitespace-nowrap">Practice Areas</a></li>
                <li><a href="#" className="hover:text-gray-300 font-bold cursor-pointer !rounded-button whitespace-nowrap">Our Team</a></li>
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

export default Team;
