
import React from 'react';

const Footer: React.FC = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinkClass = "text-gray-400 hover:text-[#D1A7D5] transition-colors cursor-pointer";

  return (
    <footer className="bg-[#141424]">
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Column 1: About */}
            <div className="md:col-span-1">
              <h3 
                className="text-2xl font-bold text-white cursor-pointer inline-block"
                onClick={() => handleScroll('home')}
              >
                TKN <span className="text-[#D1A7D5]">Accounting</span>
              </h3>
              <p className="text-gray-400 mt-2 text-sm">
                Expert tax solutions for individuals and businesses, ensuring your financial success.
              </p>
            </div>
            
            {/* Column 2: Quick Links */}
            <div className="md:text-center">
              <h4 className="text-lg font-semibold text-white">Navigation</h4>
              <ul className="mt-4 space-y-2">
                <li><button onClick={() => handleScroll('home')} className={navLinkClass}>Home</button></li>
                <li><button onClick={() => handleScroll('services')} className={navLinkClass}>Services</button></li>
                <li><button onClick={() => handleScroll('about')} className={navLinkClass}>About</button></li>
                <li><button onClick={() => handleScroll('contact')} className={navLinkClass}>Contact</button></li>
              </ul>
            </div>
            
            {/* Column 3: Contact */}
            <div className="md:text-right">
              <h4 className="text-lg font-semibold text-white">Get in Touch</h4>
              <ul className="mt-4 space-y-2 text-gray-400">
                <li><a href="mailto:contact@tknaccounting.com" className="hover:text-[#D1A7D5] transition-colors">info@tknaccounting.co.za</a></li>
                <li><a href="tel:+1234567890" className="hover:text-[#D1A7D5] transition-colors">+27 64 538 3188<br />+27 82 924 5345</a></li>
                <li className="text-sm">154 Corlett Drive
Bramley, Johannesburg</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black/20">
        <div className="container mx-auto px-6 py-4 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} TKN Accounting. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;