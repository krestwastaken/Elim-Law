import { useState } from 'react';
import { practiceAreas, attorneys } from '../data/practiceData';

const PracticeAreas = () => {
  const [selectedPracticeArea, setSelectedPracticeArea] = useState('corporate');
  const [expandedService, setExpandedService] = useState(null);
  
  const toggleService = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };
  return (
    <div className="min-h-screen bg-white">
      
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

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <i className="fas fa-calendar-check text-4xl mb-4"></i>
              <h3 className="text-xl font-serif font-bold mb-2">Schedule Consultation</h3>
              <p className="text-sm opacity-90">Book your initial consultation by phone</p>
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
      
          {/* Contact Actions */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a className="inline-block"
            href='mailto:info@elimlawpractice.com'
            >
              <button className="bg-white text-[#004D2E] px-8 py-4 font-bold hover:bg-gray-100 transition duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                Contact via Email
              </button>
            </a>

            {/* Phone Contact */}
            <a
            href="tel:+234 802 732 8872"
            className="flex items-center"
            >
              <i className="fas fa-phone mr-3 text-xl"></i>
              <div className="text-center">
                <p className="text-sm opacity-90">Call us directly</p>
                <p className="text-lg font-bold">+234 802 732 8872</p>
              </div>
            </a>
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm opacity-90">Office Hours: Monday - Friday, 9:00 AM - 6:00 PM | Emergency Support Available 24/7</p>
          </div>
        </div>
      </section>  
    </div>
  );
};
export default PracticeAreas;