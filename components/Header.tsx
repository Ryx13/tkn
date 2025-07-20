import React from 'react';

const Header: React.FC = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinkClass = "text-gray-300 hover:text-[#D1A7D5] transition-colors cursor-pointer";

  return (
    <header className="bg-[#1A1A2E]/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div 
            className="text-2xl font-bold text-white cursor-pointer"
            onClick={() => handleScroll('home')}
        >
          TKN <span className="text-[#D1A7D5]">Accounting</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
           <button 
            onClick={() => handleScroll('home')} 
            className={navLinkClass}
          >
            Home
          </button>
          <button onClick={() => handleScroll('services')} className={navLinkClass}>Services</button>
          <button onClick={() => handleScroll('about')} className={navLinkClass}>About</button>
          <button onClick={() => handleScroll('contact')} className={navLinkClass}>Contact</button>
          <button 
            onClick={() => handleScroll('schedule')} 
            className="bg-[#6A356B] hover:bg-[#572c59] text-white font-bold py-2 px-5 rounded-md transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Schedule a Consultation
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;