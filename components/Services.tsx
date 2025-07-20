import React from 'react';
import CheckIcon from './icons/CheckIcon';

import col1 from '../images/col1.jpeg';
import col2 from '../images/col2.jpeg';
import col3 from '../images/col3.jpg';
interface ServiceItemProps {
    children: React.ReactNode;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ children }) => (
    <li className="flex items-start">
        <CheckIcon className="w-5 h-5 mr-3 mt-1 text-[#D1A7D5] flex-shrink-0" />
        <span>{children}</span>
    </li>
);

interface ServiceCardProps {
    imageSrc: string;
    title: string;
    description: string;
    items: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ imageSrc, title, description, items }) => (
    <div className="bg-[#242444] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-[#6A356B]/50 hover:scale-[1.02]">
        <img src={imageSrc} alt={title} className="w-full h-56 object-cover" />
        <div className="p-8">
            <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
            <p className="text-gray-400 mb-6">{description}</p>
            <ul className="space-y-3 text-gray-300">
                {items.map((item, index) => <ServiceItem key={index}>{item}</ServiceItem>)}
            </ul>
        </div>
    </div>
);

const Services: React.FC = () => {
    const servicesData = [
            {
            imageSrc: col1,
            title: "hollePersonal Tax Services",
            description: "Comprehensive individual tax planning. Return preparation and submission. Bespoke tax structuring to maximize your refunds and minimize your tax liability.",
            items: ["Tax Return Preparation", "Tax Planning", "Audit Support", "Provisional Tax Estimates"]
            },
            {
            imageSrc: col2,
            title: "Business Tax Services",
            description: "Expert business tax solutions for corporations, partnerships, trusts and sole proprietorships.",
            items: ["Corporate Tax Returns", "Corporate Restructuring", "Payroll Tax", "Value Added Tax","Dividend Tax","Security Transfer Tax"]
            },
            {
            imageSrc: col3,
            title: "Tax Audits & Disputes",
            description: "Professional and stream-lined dispute resolution services.",
            items: ["Handle all Your Audit Queries", "Notices of Objections", "Notices of Appeal", "Alternative Dispute Resolution (ADR)", "Deferred Payment Arrangement, Debt Writeoffs, and Compromise Arrangements Negotiations", "Voluntary Disclosure Programme Applications (VDPs)"]
            },
        {
            imageSrc: 'https://picsum.photos/seed/estate/400/300',
            title: 'Deceased Estate Services',
            description: 'Compassionate and expert handling of deceased estate matters, ensuring compliance and peace of mind during difficult times.',
            items: ['Final Tax Return Preparation', 'Estate & Trust Tax Returns', 'Clearance Certificate Assistance', 'Guidance for Executors']
        }
    ];

    return (
        <section id="services" className="py-20 bg-[#1A1A2E]" style={{scrollMarginTop: '80px'}}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Our <span className="text-[#D1A7D5]">Services</span></h2>
                    <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">We offer a wide range of services to meet your accounting needs.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {servicesData.map((service, index) => <ServiceCard key={index} {...service} />)}
                </div>
            </div>
        </section>
    );
};

export default Services;