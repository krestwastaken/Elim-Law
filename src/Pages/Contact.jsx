import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    practiceArea: '',
    message: '',
    privacyAccepted: false
  });
  const [openFaq, setOpenFaq] = useState(null);

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
      

      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden bg-gradient-to-r from-[#004D2E] to-[#006d42]">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        {/* Background Image */}
        <img
          src="https://readdy.ai/api/search-image?query=Professional%20modern%20law%20office%20reception%20area%20with%20elegant%20furniture%2C%20warm%20lighting%2C%20sophisticated%20interior%20design%2C%20welcoming%20atmosphere%2C%20contemporary%20legal%20practice%20environment%2C%20clean%20professional%20background&width=1440&height=400&seq=contact1&orientation=landscape"
          alt="Contact Us"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
        />

        {/* Content */}
        <div className="container mx-auto px-4 h-full flex items-center justify-center md:justify-start relative z-10">
          <div className="max-w-3xl text-white text-center md:text-left">
            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-3 md:mb-4">
              Get in Touch
            </h1>
            <p className="text-sm md:text-lg mb-6 md:mb-8 px-2 md:px-0">
              Ready to discuss your legal needs? Our experienced team is here to provide you with personalized legal solutions. Contact us today to schedule your consultation.
            </p>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
              {[
                { icon: "fas fa-phone", title: "Call Us", text: "+234 802 732 8872" },
                { icon: "fas fa-envelope", title: "Email Us", text: "info@elimlawpractice.com" },
                { icon: "fas fa-clock", title: "Office Hours", text: "Mon-Fri: 9:00 AM - 6:00 PM" },
              ].map(({ icon, title, text }, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-10 backdrop-blur-sm p-4 md:p-6 rounded-lg text-center"
                >
                  <i className={`${icon} text-2xl md:text-3xl mb-2 md:mb-3`}></i>
                  <h3 className="font-serif font-bold mb-1 md:mb-2 text-base md:text-lg">
                    {title}
                  </h3>
                  <p className="text-xs md:text-sm">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">            
              <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
                <h3 className="text-2xl font-serif font-bold text-[#004D2E] mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#004D2E] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fas fa-map-marker-alt text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#004D2E] mb-1">Office Address</h4>
                      <p className="text-gray-600">776 Lagos-Abeokuta Expressway<br />Lagos<br />Nigeria</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#004D2E] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fas fa-phone text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#004D2E] mb-1">Phone Number</h4>
                      <p className="text-gray-600">Main: +234 802 732 8872</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#004D2E] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fas fa-envelope text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#004D2E] mb-1">Email Addresses</h4>
                      <p className="text-gray-600">General: info@elimlawpractice.com</p>
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
                    <h4 className="font-semibold text-[#004D2E] mb-2">By Bus</h4>
                    <p className="text-gray-600 text-sm">Routes 8, 25, 26, 242 stop nearby</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#004D2E] mb-2">Parking</h4>
                    <p className="text-gray-600 text-sm">Limited street parking available. NCP car park 2 minutes walk.</p>
                  </div>
                </div>
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
                +234 802 732 8872
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <i className="fas fa-clock text-4xl text-[#004D2E] mb-6"></i>
              <h3 className="text-xl font-serif font-bold text-[#004D2E] mb-4">Flexible Scheduling</h3>
              <p className="text-gray-600 mb-4">Evening and weekend appointments available by arrangement.</p>
              <a href='mailto:info@elimlawpractice.com'>
                <button className="bg-[#004D2E] text-white px-6 py-3 font-bold hover:bg-[#006d42] transition duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                  Schedule Appointment
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
