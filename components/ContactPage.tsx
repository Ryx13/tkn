
import React from 'react';
import ContactForm from './ContactForm';

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
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-purple-900/50 text-purple-400 rounded-full flex items-center justify-center">
            {icon}
        </div>
        <div>
            <h4 className="text-lg font-semibold text-white">{title}</h4>
            <div className="text-gray-400">{children}</div>
        </div>
    </div>
);

const ContactPage: React.FC = () => {
  return (
    <div className="bg-[#1A1A2E] py-20 animate-fade-in">
        <style>{`
            @keyframes fade-in {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
        `}</style>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Contact <span className="text-purple-400">Us</span></h2>
            <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">We're here to help. Reach out to us with any questions or to schedule your consultation.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-stretch">
          <div className="bg-[#141424] p-8 rounded-2xl shadow-lg flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
            <div className="space-y-8">
                <ContactInfoItem icon={<LocationIcon className="w-6 h-6" />} title="Our Office">
                    <p>123 Corlett Drive<br />Bramley, Johannesburg</p>
                </ContactInfoItem>
                <ContactInfoItem icon={<MailIcon className="w-6 h-6" />} title="Email Us">
                    <a href="mailto:info@tknaccounting.co.za" className="hover:text-purple-400 transition-colors">info@tknaccounting.co.za</a>
                </ContactInfoItem>
                 <ContactInfoItem icon={<PhoneIcon className="w-6 h-6" />} title="Call Us">
                    <a href="tel:+1234567890" className="hover:text-purple-400 transition-colors">+27 64 538 3188</a>
                </ContactInfoItem>
            </div>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-lg h-full min-h-[400px]">
            <img src="https://picsum.photos/seed/mapview/800/600" alt="Location map" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="bg-[#141424] p-8 sm:p-12 rounded-2xl shadow-lg">
            <div className="text-center mb-10">
                 <h3 className="text-3xl font-bold text-white">Send Us a Message</h3>
                 <p className="text-gray-400 mt-2">Have a specific question? Fill out the form below.</p>
            </div>
            <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
