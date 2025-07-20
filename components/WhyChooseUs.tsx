import React from 'react';
import handshake from '../images/handshake.jpg';

const WhyChooseUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#141424]" style={{scrollMarginTop: '80px'}}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-lg">
             <img src={handshake} alt="Why Choose TKN" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#141424] via-transparent to-transparent"></div>
          </div>
          <div className="text-left">
            <h2 className="text-4xl font-bold mb-6 text-white">Why choose <span className="text-[#D1A7D5]">TKN?</span></h2>
            <p className="text-gray-400 text-lg mb-10">
              With years of experience in tax preparation and financial consulting, TKN Accounting has built a reputation for excellence, integrity, and personalized service.
            </p>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[#D1A7D5]">Maximize Your Savings</h3>
                <p className="text-gray-400">Our expert strategies help you minimize tax liability and maximize refunds.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[#D1A7D5]">Audit Protection</h3>
                <p className="text-gray-400">Complete audit defense and representation services for peace of mind.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[#D1A7D5]">Personalized Service</h3>
                <p className="text-gray-400">Dedicated professionals who understand your unique financial situation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;