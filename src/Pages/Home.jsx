import { lawyers, officeInfo } from "../Components/data";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Elegant%20modern%20law%20office%20interior%20with%20dark%20wood%20paneling%2C%20law%20books%20on%20shelves%2C%20large%20windows%20with%20natural%20light%2C%20professional%20atmosphere%2C%20clean%20and%20sophisticated%20environment%2C%20high%20ceilings%2C%20marble%20floors%2C%20subtle%20lighting&width=1440&height=500&seq=1&orientation=landscape')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-[#004D2E] bg-opacity-70"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-2xl text-white">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Excellence in Legal Representation
            </h2>
            <p className="text-lg mb-8">
              With over 10 years of experience, we provide exceptional legal
              services tailored to your specific needs. Our team of dedicated
              professionals is committed to achieving the best possible outcomes
              for our clients.
            </p>
            <a href="#contact-form">
              <button className="bg-white text-[#004D2E] px-6 py-3 font-bold hover:bg-gray-100 transition duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                Book Consultation
              </button>
            </a>
          </div>
        </div>
      </section>
      {/* Practice Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-[#004D2E] mb-4">
              Our Practice Areas
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive legal services across various practice
              areas to meet the diverse needs of our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "fa-landmark",
                title: "Corporate Law",
                description:
                  "Expert legal advice for businesses of all sizes, from startups to established corporations.",
              },
              {
                icon: "fa-gavel",
                title: "Litigation",
                description:
                  "Skilled representation in court proceedings and dispute resolution across various legal matters.",
              },
              {
                icon: "fa-home",
                title: "Banking and Finance",
                description:
                  "Helps banks, businesses, and individuals manage loans, investments, and financial transactions while staying within the rules.",
              },
              {
                icon: "fa-users",
                title: "Project Finance",
                description:
                  "Supports big projects like roads, power plants, or factories by setting up clear agreements on funding, risks, and responsibilities so the project can run smoothly.",
              },
              {
                icon: "fa-balance-scale",
                title: "Property Law",
                description:
                  "Deals with owning, buying, selling, or renting land and buildings. It protects people’s rights to their property and helps resolve disputes if they arise.",
              },
              {
                icon: "fa-file-contract",
                title: "Oil and Gas",
                description:
                  "Covers the rules for finding, drilling, and selling oil and gas.",
              },
            ].map((area, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded shadow-md hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="text-[#004D2E] group-hover:text-[#006d42] mb-4 text-4xl">
                  <i className={`fas ${area.icon}`}></i>
                </div>
                <h3 className="text-xl font-serif font-bold text-[#004D2E] mb-2">
                  {area.title}
                </h3>
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
            <h2 className="text-3xl font-serif font-bold text-[#004D2E] mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We pride ourselves on delivering exceptional legal services with
              integrity and dedication.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "fa-award",
                title: "Experienced Team",
                description:
                  "Our attorneys bring decades of combined experience across various legal disciplines.",
              },
              {
                icon: "fa-handshake",
                title: "Client-Focused Approach",
                description:
                  "We prioritize your needs and work tirelessly to achieve your desired outcomes.",
              },
              {
                icon: "fa-star",
                title: "Proven Results",
                description:
                  "Our track record speaks for itself with numerous successful cases and satisfied clients.",
              },
            ].map((point, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-[#004D2E] text-4xl mb-4">
                  <i className={`fas ${point.icon}`}></i>
                </div>
                <h3 className="text-xl font-serif font-bold text-[#004D2E] mb-2">
                  {point.title}
                </h3>
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
            <h2 className="text-3xl font-serif font-bold text-[#004D2E] mb-4">
              Our Legal Team
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Meet our team of dedicated legal professionals committed to
              serving your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lawyers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded shadow-md overflow-hidden group"
              >
                <div className="h-72 w-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[400px] object-cover object-center rounded-lg transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-[#004D2E]">
                    {member.name}
                  </h3>
                  <p className="text-[#006d42] font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600">{member.description}</p>
                  <div className="mt-4 flex space-x-3">
                    <a
                      href="#"
                      className="text-[#004D2E] hover:text-[#006d42] cursor-pointer !rounded-button whitespace-nowrap"
                    >
                      <i className="fas fa-envelope"></i>
                    </a>
                    <a
                      href="#"
                      className="text-[#004D2E] hover:text-[#006d42] cursor-pointer !rounded-button whitespace-nowrap"
                    >
                      <i className="fas fa-phone"></i>
                    </a>
                    <a
                      href="#"
                      className="text-[#004D2E] hover:text-[#006d42] cursor-pointer !rounded-button whitespace-nowrap"
                    >
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
            <h2 className="text-3xl font-serif font-bold text-[#004D2E] mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We're here to help with your legal needs. Reach out to schedule a
              consultation.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-gray-100 p-6 rounded shadow-md h-full">
                <h3 className="text-xl font-serif font-bold text-[#004D2E] mb-4">
                  Office Information
                </h3>
                <div className="space-y-4">
                  {officeInfo.map((info) => {
                    return (
                      <div className="flex items-start" key={info.id}>
                        <div className="text-[#004D2E] mt-1 mr-3">
                          <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div>
                          <h4 className="font-medium text-green-900">
                            {info.title}
                          </h4>
                          <p className="text-gray-600">
                            {info.p1}
                            <br />
                            {info.p2}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-6 h-64 bg-gray-200 rounded">
                  <div className="w-full h-full flex items-center justify-center">
                    <iframe
                      title="Office Location"
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3962.7491627063127!2d3.269678!3d6.6779673!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9768eccfb575%3A0x78fb7b285154e88c!2s776%20Lagos-Abeokuta%20Expy%2C%20opp.%20Masters%20Energy%20Filling%20Station%2C%20Alagbado%2C%20Lagos%20101001%2C%20Lagos!5e0!3m2!1sen!2sng!4v1756916284589!5m2!1sen!2sng"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* Consultation */}
              <section
                id="contact-form"
                className="bg-gray-100 p-6 rounded shadow-md text-center"
              >
                <h3 className="text-3xl font-serif font-bold text-[#004D2E] mb-4">
                  Book a Consultation
                </h3>
                <p className="text-gray-700 mb-6">
                  Reach us directly via phone or email — we’ll be happy to
                  assist you.
                </p>

                {/* Phone */}
                <a
                  href="tel:+2348027328872"
                  className="block text-lg font-semibold text-[#004D2E] hover:underline mb-4"
                >
                  <button className="bg-[#004D2E] text-white px-6 py-3 font-bold hover:bg-[#006d42] transition duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                    +234 802 732 8872
                  </button>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@elimlawpractice.com"
                  className="block text-lg font-semibold text-[#004D2E] hover:underline"
                >
                  <button className="bg-[#004D2E] text-white px-6 py-3 font-bold hover:bg-[#006d42] transition duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                    info@elimlawpractice.com
                  </button>
                </a>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
