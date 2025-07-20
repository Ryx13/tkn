import React, { useState, useRef } from 'react';

// Let TypeScript know that emailjs is available on the window, loaded from the script in index.html
declare const emailjs: any;

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current || status === 'sending') return;

    setStatus('sending');

    const serviceID = 'service_a22ikcq';
    const templateID = 'template_al0vwwe';
    const publicKey = 'DDTB9scm_WkNThd84';

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result: any) => {
          console.log('EmailJS Success:', result.text);
          setStatus('sent');
          setFormData({
              firstName: '',
              lastName: '',
              email: '',
              phone: '',
              service: '',
              message: ''
          });
      }, (error: any) => {
          console.error('EmailJS Error:', error);
          setStatus('error');
      });
  };
  
  const inputClass = "w-full bg-[#242444] border border-[#4B204D] rounded-md py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D1A7D5] transition-shadow";
  const labelClass = "block text-sm font-medium text-gray-400 mb-2";

  return (
    <form ref={form} onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
            <label htmlFor="firstName" className={labelClass}>First Name <span className="text-[#D1A7D5]">(required)</span></label>
            <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} className={inputClass} required />
            </div>
            <div>
            <label htmlFor="lastName" className={labelClass}>Last Name <span className="text-[#D1A7D5]">(required)</span></label>
            <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} className={inputClass} required />
            </div>
        </div>
        <div>
            <label htmlFor="email" className={labelClass}>Email <span className="text-[#D1A7D5]">(required)</span></label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className={inputClass} required />
        </div>
        <div>
            <label htmlFor="phone" className={labelClass}>Phone</label>
            <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className={inputClass} />
        </div>
        <div>
            <label htmlFor="service" className={labelClass}>Service needed <span className="text-[#D1A7D5]">(required)</span></label>
            <select name="service" id="service" value={formData.service} onChange={handleChange} className={inputClass} required>
            <option value="">Select an option</option>
            <option value="Personal Tax">Personal Tax Services</option>
            <option value="Business Tax">Business Tax Services</option>
            <option value="Audit & Disputes">Tax Audits & Disputes</option>
            <option value="Deceased Estate">Deceased Estate Services</option>
            <option value="Other">Other</option>
            </select>
        </div>
        <div>
            <label htmlFor="message" className={labelClass}>Message <span className="text-[#D1A7D5]">(required)</span></label>
            <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} className={inputClass} required></textarea>
        </div>
        <div>
            <button 
                type="submit" 
                className="w-full sm:w-auto bg-[#6A356B] hover:bg-[#572c59] text-white font-bold py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 disabled:bg-gray-600 disabled:hover:bg-gray-600 disabled:cursor-not-allowed disabled:scale-100"
                disabled={status === 'sending'}
            >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
        </div>
        <div className="h-6">
            {status === 'sent' && (
                <p className="text-green-400">Thank you for your message! We will get back to you shortly.</p>
            )}
            {status === 'error' && (
                <p className="text-red-400">Oops! Something went wrong. Please try again later.</p>
            )}
        </div>
    </form>
  );
};

export default ContactForm;