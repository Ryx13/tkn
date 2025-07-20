import React from 'react';
import ContactForm from './ContactForm';
import lastone from '../images/lastone.jpeg';

const MailIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const PhoneIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);
const LocationIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const ContactInfoItem: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="flex flex-col items-center text-center">
        <div className="flex-shrink-0 w-16 h-16 bg-[#6A356B]/50 text-[#D1A7D5] rounded-full flex items-center justify-center mb-4">
            {icon}
        </div>
        <div>
            <h4 className="text-lg font-semibold text-white">{title}</h4>
            <div className="text-gray-400">{children}</div>
        </div>
    </div>
);


const Consultation: React.FC = () => {

  return (
    <section id="contact" className="py-20 bg-[#141424]" style={{scrollMarginTop: '80px'}}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Get In <span className="text-[#D1A7D5]">Touch</span></h2>
            <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">We're here to help. Reach out to us with any questions or to schedule your consultation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            <ContactInfoItem icon={<LocationIcon className="w-8 h-8" />} title="Our Office">
                <p>154 Corlett Drive<br />Bramley, Johannesburg</p>
            </ContactInfoItem>
            <ContactInfoItem icon={<MailIcon className="w-8 h-8" />} title="Email Us">
                <a href="mailto:contact@tknaccounting.com" className="hover:text-[#D1A7D5] transition-colors">info@tknaccounting.co.za</a>
            </ContactInfoItem>
                <ContactInfoItem icon={<PhoneIcon className="w-8 h-8" />} title="Call Us">
                <a href="tel:+1234567890" className="hover:text-[#D1A7D5] transition-colors">+27 64 538 3188<br /> +27 82 924 5345</a>
            </ContactInfoItem>
        </div>

        <div id="schedule" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-[#1A1A2E] p-8 sm:p-12 rounded-2xl shadow-lg" style={{scrollMarginTop: '80px'}}>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-white">Schedule a Consultation</h2>
            <p className="text-gray-400 text-lg mb-8">
              Enjoy tax peace of mind by scheduling an appointment with one of our dedicated professionals.
            </p>
            <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src={lastone} />
            </div>
          </div>
          
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Consultation;