const AboutUs = () => {
    return (
        <div className="min-h-screen bg-white">        
            {/* Hero Banner */}
            <section className="relative h-[500px] overflow-hidden">
                <div className="absolute inset-0 bg-[#004D2E] bg-opacity-10"
                 style={{
                    backgroundImage: `url('https://readdy.ai/api/search-image?query=Elegant%20modern%20law%20office%20interior%20with%20dark%20wood%20paneling%2C%20law%20books%20on%20shelves%2C%20large%20windows%20with%20natural%20light%2C%20professional%20atmosphere%2C%20clean%20and%20sophisticated%20environment%2C%20high%20ceilings%2C%20marble%20floors%2C%20subtle%20lighting&width=1440&height=500&seq=1&orientation=landscape')`
                 }}
                ></div>
                <div className="absolute inset-0 bg-[#004D2E] bg-opacity-70"></div>
                <div className="container mx-auto px-4 h-full flex items-center relative z-10">
                    <div className="max-w-3xl text-white">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Leading the Future of Legal Excellence</h2>
                        <p className="text-lg mb-8">As a modern legal practice, we combine cutting-edge technology with exceptional expertise to deliver innovative solutions for today's complex legal challenges. Our commitment to excellence and client success drives us to continuously evolve and set new standards in legal service.</p>
                    </div>
                </div>
            </section>
            {/* Firm History Timeline */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif font-bold text-[#004D2E] mb-4">Our Journey Through Time</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">Discover the milestones that have shaped our firm into the trusted legal institution we are today.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#004D2E]"></div>
                        <div className="space-y-12">
                            {[
                                {
                                    year: '2020',
                                    title: 'Virtual Practice Innovation',
                                    description: 'Pioneered virtual legal services and remote client engagement while maintaining exceptional service standards.',                                    
                                },
                                {
                                    year: '2022',
                                    title: 'Sustainability Initiative',
                                    description: 'Launched comprehensive sustainability program, implementing paperless solutions and eco-friendly practices.',
                                },
                                {
                                    year: '2025',
                                    title: 'Future Forward',
                                    description: 'Setting new standards in legal practice with innovative solutions and client-centered service excellence.',                                    
                                }
                            ].map((milestone, index) => (
                                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                                        <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                            <div className="text-2xl font-bold text-[#004D2E] mb-2">{milestone.year}</div>
                                            <h3 className="text-xl font-serif font-bold text-[#004D2E] mb-3">{milestone.title}</h3>
                                            <p className="text-gray-600">{milestone.description}</p>
                                        </div>
                                    </div>
                                    {/* <div className="relative z-10 w-16 h-16 bg-[#004D2E] rounded-full flex items-center justify-center">
                                        <div className="w-8 h-8 bg-white rounded-full"></div>
                                    </div>
                                    <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                                        <div className="w-full h-48 rounded-lg overflow-hidden shadow-md bg-gray-100">
                                            
                                        </div>
                                    </div> */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* Mission & Values */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif font-bold text-[#004D2E] mb-4">Our Foundation</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">The principles that guide our practice and define our commitment to excellence.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Mission Statement */}
                        <div className="bg-white p-8 rounded-lg shadow-md text-center">
                            <div className="text-[#004D2E] text-4xl mb-6">
                                <i className="fas fa-compass"></i>
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-[#004D2E] mb-4">Our Mission</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To provide innovative and practical legal services that empower our clients to navigate legal complexities with confidence and achieve their objectives.
                            </p>
                        </div>
                        {/* Core Values */}
                        <div className="bg-white p-8 rounded-lg shadow-md text-center">
                            <div className="text-[#004D2E] text-4xl mb-6">
                                <i className="fas fa-heart"></i>
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-[#004D2E] mb-4">Core Values</h3>
                            <div className="text-left space-y-3">
                                <div className="flex items-start">
                                    <i className="fas fa-check-circle text-[#004D2E] mt-1 mr-3"></i>
                                    <div>
                                        <strong className="text-[#004D2E]">Integrity:</strong>
                                        <span className="text-gray-600"> Upholding the highest ethical standards in all our dealings.</span>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <i className="fas fa-check-circle text-[#004D2E] mt-1 mr-3"></i>
                                    <div>
                                        <strong className="text-[#004D2E]">Excellence:</strong>
                                        <span className="text-gray-600">  Delivering superior legal services with professionalism and diligence.</span>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <i className="fas fa-check-circle text-[#004D2E] mt-1 mr-3"></i>
                                    <div>
                                        <strong className="text-[#004D2E]">Client-Centricity:</strong>
                                        <span className="text-gray-600"> Prioritizing our clients’ needs and building lasting relationships.</span>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <i className="fas fa-check-circle text-[#004D2E] mt-1 mr-3"></i>
                                    <div>
                                        <strong className="text-[#004D2E]">Innovation:</strong>
                                        <span className="text-gray-600"> Embracing creative solutions to complex legal issues.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Firm Philosophy */}
                        <div className="bg-white p-8 rounded-lg shadow-md text-center">
                            <div className="text-[#004D2E] text-4xl mb-6">
                                <i className="fas fa-lightbulb"></i>
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-[#004D2E] mb-4">Our Philosophy</h3>
                            <p className="text-gray-600 leading-relaxed">
                                At ELP, we combine deep legal expertise with a thorough understanding of our clients’ industries. Our approach is proactive and solution-oriented, ensuring that we not only address legal issues but also contribute to our clients’ strategic goals. We stay abreast of legal developments to provide timely and relevant advice.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Firm Overview */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif font-bold text-[#004D2E] mb-4">What Sets Us Apart</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">Discover the distinctive qualities that make Elim Law Practice the preferred choice for discerning clients.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h3 className="text-2xl font-serif font-bold text-[#004D2E] mb-6">Legal Expertise</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Our team brings together decades of combined experience across multiple practice areas, ensuring comprehensive legal coverage for our clients. We stay at the forefront of legal developments, continuously updating our knowledge to provide cutting-edge counsel.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-[#004D2E] rounded-full flex items-center justify-center mr-4">
                                        <span className="text-white font-bold text-xl">10+</span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-[#004D2E]">Years of Experience</div>
                                        <div className="text-gray-600 text-sm">Serving clients since 2016</div>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-[#004D2E] rounded-full flex items-center justify-center mr-4">
                                        <span className="text-white font-bold text-xl">100+</span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-[#004D2E]">Successful Cases</div>
                                        <div className="text-gray-600 text-sm">Proven track record of results</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-80 rounded-lg overflow-hidden shadow-lg bg-[#004D2E] bg-opacity-5 flex items-center justify-center">
                            <i className="fas fa-balance-scale text-6xl text-[#004D2E]"></i>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div className="order-2 lg:order-1 h-80 rounded-lg overflow-hidden shadow-lg bg-[#004D2E] bg-opacity-5 flex items-center justify-center">
                            <i className="fas fa-handshake text-6xl text-[#004D2E]"></i>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h3 className="text-2xl font-serif font-bold text-[#004D2E] mb-6">Client Commitment</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                At the heart of our practice is an unwavering commitment to our clients. We believe in building lasting relationships based on trust, transparency, and results. Every client receives personalized attention and strategic counsel tailored to their specific needs and objectives.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <i className="fas fa-user-friends text-[#004D2E] text-xl mt-1 mr-4"></i>
                                    <div>
                                        <div className="font-semibold text-[#004D2E] mb-1">Personalized Service</div>
                                        <div className="text-gray-600 text-sm">Tailored legal strategies for each client's unique situation</div>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <i className="fas fa-clock text-[#004D2E] text-xl mt-1 mr-4"></i>
                                    <div>
                                        <div className="font-semibold text-[#004D2E] mb-1">Responsive Communication</div>
                                        <div className="text-gray-600 text-sm">Prompt responses and regular case updates</div>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <i className="fas fa-shield-alt text-[#004D2E] text-xl mt-1 mr-4"></i>
                                    <div>
                                        <div className="font-semibold text-[#004D2E] mb-1">Confidentiality Assured</div>
                                        <div className="text-gray-600 text-sm">Strict adherence to attorney-client privilege</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-serif font-bold text-[#004D2E] mb-6">Industry Leadership</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Our firm is actively involved in shaping the future of the legal profession through thought leadership, professional associations, and community engagement. We set the standard for excellence in legal practice and ethical conduct.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-4 bg-gray-50 rounded-lg">
                                    <div className="text-2xl font-bold text-[#004D2E]">15+</div>
                                    <div className="text-sm text-gray-600">Professional Associations</div>
                                </div>
                                <div className="text-center p-4 bg-gray-50 rounded-lg">
                                    <div className="text-2xl font-bold text-[#004D2E]">98%</div>
                                    <div className="text-sm text-gray-600">Client Satisfaction Rate</div>
                                </div>
                                <div className="text-center p-4 bg-gray-50 rounded-lg">
                                    <div className="text-2xl font-bold text-[#004D2E]">24/7</div>
                                    <div className="text-sm text-gray-600">Emergency Support</div>
                                </div>
                                <div className="text-center p-4 bg-gray-50 rounded-lg">
                                    <div className="text-2xl font-bold text-[#004D2E]">100%</div>
                                    <div className="text-sm text-gray-600">Confidentiality Guarantee</div>
                                </div>
                            </div>
                        </div>
                        <div className="h-80 rounded-lg overflow-hidden shadow-lg bg-[#004D2E] bg-opacity-5 flex items-center justify-center">
                            <i className="fas fa-award text-6xl text-[#004D2E]"></i>
                        </div>
                    </div>
                </div>
            </section>
            {/* Call-to-Action */}
            <section className="py-16 bg-[#004D2E]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="text-white">
                            <h2 className="text-3xl font-serif font-bold mb-6">Ready to Experience Excellence?</h2>
                            <p className="text-lg mb-8 leading-relaxed">
                                Join the hundreds of satisfied clients who have trusted Elim Law Practice with their most important legal matters. Schedule your consultation today and discover why we've been the preferred choice for legal excellence since 2016.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <i className="fas fa-phone text-xl mr-4"></i>
                                    <div>
                                        <div className="font-semibold">Call Us Today</div>
                                        <div className="text-gray-300">+234 802 732 8872</div>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-envelope text-xl mr-4"></i>
                                    <div>
                                        <div className="font-semibold">Email Us</div>
                                        <div className="text-gray-300">elimlawpractice@gmail.com</div>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-clock text-xl mr-4"></i>
                                    <div>
                                        <div className="font-semibold">Office Hours</div>
                                        <div className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-serif font-bold text-[#004D2E] mb-6">Schedule Your Consultation</h3>
                            <form className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="firstName" className="block text-gray-700 mb-1 font-medium">First Name</label>
                                        <input
                                        type="text"
                                        id="firstName"
                                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#004D2E] focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-gray-700 mb-1 font-medium">Last Name</label>
                                        <input
                                         type="text"
                                         id="lastName"
                                         className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#004D2E] focus:border-transparent"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-gray-700 mb-1 font-medium">Email</label>
                                    <input
                                     type="email"
                                     id="email"
                                     className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#004D2E] focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-gray-700 mb-1 font-medium">Phone</label>
                                    <input
                                     type="tel"
                                     id="phone"
                                     className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#004D2E] focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-gray-700 mb-1 font-medium">Brief Description of Legal Matter</label>
                                    <textarea
                                     id="message"
                                     rows={4}
                                     className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#004D2E] focus:border-transparent"
                                    ></textarea>
                                </div>
                                <button
                                 type="submit"
                                 className="w-full bg-[#004D2E] text-white px-6 py-3 font-bold hover:bg-[#006d42] transition duration-300 cursor-pointer !rounded-button whitespace-nowrap"
                                >
                                    Schedule Free Consultation
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default AboutUs;