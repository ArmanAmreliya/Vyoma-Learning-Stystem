
import React from 'react';
import Section from '../components/Section';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-[#F8FAFC]">
      <header className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-[#1E3A8A] mb-8">Get In <span className="text-gradient">Touch</span></h1>
          <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
            Whether you're a student, a parent, or an institution looking to partner, we're just a message away.
          </p>
        </div>
      </header>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div>
            <div className="bg-white rounded-[40px] p-12 shadow-xl border border-gray-50 h-full">
              <h2 className="text-3xl font-bold text-[#1E3A8A] mb-12">Contact Information</h2>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#1E3A8A] flex items-center justify-center shrink-0">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1E3A8A] mb-1">Our Location</h4>
                    <p className="text-[#64748B]">KCG Campus, i-Hub,<br />Navrangpura, Ahmedabad, Gujarat 380009</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-50 text-[#06B6D4] flex items-center justify-center shrink-0">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1E3A8A] mb-1">Phone Number</h4>
                    <p className="text-[#64748B]">+91 (800) 123-4567<br />Mon - Fri, 9:00 - 18:00</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 text-[#F59E0B] flex items-center justify-center shrink-0">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1E3A8A] mb-1">Email Us</h4>
                    <p className="text-[#64748B]">support@vyomasystems.com<br />contact@vyomasystems.com</p>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="mt-12 rounded-3xl bg-gray-100 h-80 overflow-hidden relative border border-gray-200 shadow-inner group">
                <iframe
                  title="Vyoma HQ Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8687722744317!2d72.54133457591038!3d23.02859181609121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e851a7776481b%3A0x6b77227d81387d7b!2si-Hub%20(Gujarat%20Student%20Startup%20and%20Innovation%20Hub)!5e0!3m2!1sen!2sin!4v1709420000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#1E3A8A] rounded-[40px] p-12 shadow-2xl text-white">
            <h2 className="text-3xl font-bold mb-8">Send a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 opacity-80">Full Name</label>
                  <input type="text" className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#06B6D4] placeholder:text-white/30" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 opacity-80">Email</label>
                  <input type="email" className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#06B6D4] placeholder:text-white/30" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 opacity-80">Subject</label>
                <select className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#06B6D4] appearance-none">
                  <option className="bg-[#1E3A8A]">Student Inquiry</option>
                  <option className="bg-[#1E3A8A]">Parent Inquiry</option>
                  <option className="bg-[#1E3A8A]">Institutional Partnership</option>
                  <option className="bg-[#1E3A8A]">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 opacity-80">Message</label>
                <textarea rows={5} className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#06B6D4] placeholder:text-white/30" placeholder="How can we help?"></textarea>
              </div>
              <button className="w-full py-5 rounded-xl bg-white text-[#1E3A8A] font-bold text-lg hover:bg-[#06B6D4] hover:text-white transition-all flex items-center justify-center gap-3">
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
