
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Consultation from './components/Consultation';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#1A1A2E] text-gray-200 font-sans">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Consultation />
      </main>
      <Footer />
    </div>
  );
};

export default App;
