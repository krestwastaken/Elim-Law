import React from 'react'

function Home() {
  return (
    <>        
        {/* Hero Section */}
        <section className="relative h-[500px] overflow-hidden">
            <div
             className="absolute inset-0 bg-cover bg-center"
             style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=Elegant%20modern%20law%20office%20interior%20with%20dark%20wood%20paneling%2C%20law%20books%20on%20shelves%2C%20large%20windows%20with%20natural%20light%2C%20professional%20atmosphere%2C%20clean%20and%20sophisticated%20environment%2C%20high%20ceilings%2C%20marble%20floors%2C%20subtle%20lighting&width=1440&height=500&seq=1&orientation=landscape')`
             }}
            ></div>
            <div className="absolute inset-0 bg-[#004D2E] bg-opacity-70"></div>
            <div className="container mx-auto px-4 h-full flex items-center relative z-10">
                <div className="max-w-2xl text-white">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Excellence in Legal Representation</h2>
                    <p className="text-lg mb-8">With over 10 years of experience, we provide exceptional legal services tailored to your specific needs. Our team of dedicated professionals is committed to achieving the best possible outcomes for our clients.</p>
                    <button className="bg-white text-[#004D2E] px-6 py-3 font-bold hover:bg-gray-100 transition duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                        Free Consultation
                    </button>
                </div>
            </div>
        </section>
        {/* Practice Areas */}
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif font-bold text-[#004D2E] mb-4">Our Practice Areas</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">We offer comprehensive legal services across various practice areas to meet the diverse needs of our clients.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { icon: 'fa-landmark', title: 'Corporate Law', description: 'Expert legal advice for businesses of all sizes, from startups to established corporations.' },
                        { icon: 'fa-gavel', title: 'Litigation', description: 'Skilled representation in court proceedings and dispute resolution across various legal matters.' },
                        { icon: 'fa-home', title: 'Real Estate Law', description: 'Comprehensive legal services for property transactions, leasing, and development projects.' },
                        { icon: 'fa-users', title: 'Family Law', description: 'Compassionate guidance through divorce, child custody, and other family legal matters.' },
                        { icon: 'fa-balance-scale', title: 'Criminal Defense', description: 'Strategic defense representation for individuals facing criminal charges.' },
                        { icon: 'fa-file-contract', title: 'Estate Planning', description: 'Personalized planning for wills, trusts, and asset protection to secure your legacy.' }
                    ].map((area, index) => (
                        <div
                         key={index}
                         className="bg-white p-6 rounded shadow-md hover:shadow-lg transition-shadow duration-300 group"
                        >
                            <div className="text-[#004D2E] group-hover:text-[#006d42] mb-4 text-4xl">
                                <i className={`fas ${area.icon}`}></i>
                            </div>
                            <h3 className="text-xl font-serif font-bold text-[#004D2E] mb-2">{area.title}</h3>
                            <p className="text-gray-600">{area.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        {/* Why Choose Us */}
        <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif font-bold text-[#004D2E] mb-4">Why Choose Us</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">We pride ourselves on delivering exceptional legal services with integrity and dedication.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: 'fa-award', title: 'Experienced Team', description: 'Our attorneys bring decades of combined experience across various legal disciplines.' },
                            { icon: 'fa-handshake', title: 'Client-Focused Approach', description: 'We prioritize your needs and work tirelessly to achieve your desired outcomes.' },
                            { icon: 'fa-star', title: 'Proven Results', description: 'Our track record speaks for itself with numerous successful cases and satisfied clients.' }
                        ].map((point, index) => (
                            <div key={index} className="text-center p-6">
                                <div className="text-[#004D2E] text-4xl mb-4">
                                    <i className={`fas ${point.icon}`}></i>
                                </div>
                                <h3 className="text-xl font-serif font-bold text-[#004D2E] mb-2">{point.title}</h3>
                                <p className="text-gray-600">{point.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Team Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif font-bold text-[#004D2E] mb-4">Our Legal Team</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">Meet our team of dedicated legal professionals committed to serving your needs.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                image: '/Team/Matylda.jpg',
                                name: 'Martylda Martyns-Yellowe Soligbo',
                                role: 'Managing Attorney',
                                description: 'Specializing in corporate law with nearly a decade of experience representing major corporations.'
                            },
                            {
                                image: '',
                                name: 'Peter E. Mbaba',
                                role: 'Litigation Specialist',
                                description: 'Expert in Dispute Resolution, Property Law, Banking and Finanace with a compassionate approach to client needs.'
                            },
                            {
                                image: '/Team/Omotunde.jpg',
                                name: 'Omotunde Adebimpe Janet',
                                role: 'Partner',
                                description: 'Accomplished Corprate Legal attorney with an impressive record of successful litigation outcomes.'
                            },
                            {
                                image: '/Team/Ifeyinwa.jpg',
                                name: 'Ifeyinwa I. Eze',
                                role: 'Partner',
                                description: 'Expert in Family Law, Property Law, and Human Rights Advocacy.'
                            }
                        ].map((member, index) => (
                            <div key={index} className="bg-white rounded shadow-md overflow-hidden group">
                                <div className="h-72 w-full overflow-hidden">
                                    <img
                                     src={member.image}
                                     alt={member.name}
                                     className="w-full h-[400px] object-cover object-center rounded-lg transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-serif font-bold text-[#004D2E]">{member.name}</h3>
                                    <p className="text-[#006d42] font-medium mb-2">{member.role}</p>
                                    <p className="text-gray-600">{member.description}</p>
                                    <div className="mt-4 flex space-x-3">
                                        <a href="#" className="text-[#004D2E] hover:text-[#006d42] cursor-pointer !rounded-button whitespace-nowrap">
                                            <i className="fas fa-envelope"></i>
                                        </a>
                                        <a href="#" className="text-[#004D2E] hover:text-[#006d42] cursor-pointer !rounded-button whitespace-nowrap">
                                            <i className="fas fa-phone"></i>
                                        </a>
                                        <a href="#" className="text-[#004D2E] hover:text-[#006d42] cursor-pointer !rounded-button whitespace-nowrap">
                                            <i className="fab fa-linkedin"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Contact Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif font-bold text-[#004D2E] mb-4">Contact Us</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">We're here to help with your legal needs. Reach out to schedule a consultation.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <div className="bg-gray-100 p-6 rounded shadow-md h-full">
                                <h3 className="text-xl font-serif font-bold text-[#004D2E] mb-4">Office Information</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="text-[#004D2E] mt-1 mr-3">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-medium">Address</h4>
                                            <p className="text-gray-600">123 Legal Avenue, Suite 500<br />London, EC2V 7EE</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="text-[#004D2E] mt-1 mr-3">
                                            <i className="fas fa-phone"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-medium">Phone</h4>
                                            <p className="text-gray-600">+234 802 732 8872</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="text-[#004D2E] mt-1 mr-3">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-medium">Email</h4>
                                            <p className="text-gray-600">info@elimlawpractice.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="text-[#004D2E] mt-1 mr-3">
                                            <i className="fas fa-clock"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-medium">Hours</h4>
                                            <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday & Sunday: Closed</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 h-64 bg-gray-200 rounded">
                                    <div className="w-full h-full flex items-center justify-center">
                                        <i className="fas fa-map-marked-alt text-4xl text-gray-400"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <form className="bg-gray-100 p-6 rounded shadow-md">
                                <h3 className="text-xl font-serif font-bold text-[#004D2E] mb-4">Send Us a Message</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label htmlFor="firstName" className="block text-gray-700 mb-1">First Name</label>
                                        <input
                                         type="text"
                                         id="firstName"
                                         className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#004D2E] focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-gray-700 mb-1">Last Name</label>
                                        <input
                                         type="text"
                                         id="lastName"
                                         className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#004D2E] focus:border-transparent"
                                        />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                                    <input
                                     type="email"
                                     id="email"
                                     className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#004D2E] focus:border-transparent"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="phone" className="block text-gray-700 mb-1">Phone</label>
                                    <input
                                     type="tel"
                                     id="phone"
                                     className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#004D2E] focus:border-transparent"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="practiceArea" className="block text-gray-700 mb-1">Practice Area</label>
                                    <div className="relative">
                                        <select
                                         id="practiceArea"
                                         className="appearance-none w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#004D2E] focus:border-transparent"
                                        >
                                            <option value="">Select a Practice Area</option>
                                            <option value="corporate">Corporate Law</option>
                                            <option value="litigation">Litigation</option>
                                            <option value="realestate">Real Estate Law</option>
                                            <option value="family">Family Law</option>
                                            <option value="criminal">Criminal Defense</option>
                                            <option value="estate">Estate Planning</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <i className="fas fa-chevron-down"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                                    <textarea
                                     id="message"
                                     rows={5}
                                     className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#004D2E] focus:border-transparent"
                                    ></textarea>
                                </div>
                                <button
                                 type="submit"
                                 className="bg-[#004D2E] text-white px-6 py-3 font-bold hover:bg-[#006d42] transition duration-300 cursor-pointer !rounded-button whitespace-nowrap"
                                >
                                    Submit Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
};

export default Home