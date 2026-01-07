
import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F172A] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 gradient-main rounded-xl flex items-center justify-center text-white">
                <Rocket size={24} />
              </div>
              <span className="text-xl font-bold tracking-tight">Vyoma<span className="text-[#06B6D4]">Systems</span></span>
            </Link>
            <p className="text-gray-400 mb-8 leading-relaxed">
              India's first complete learning ecosystem dedicated to building thinkers, not memorisers.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#06B6D4] transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#06B6D4] transition-colors"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#06B6D4] transition-colors"><Instagram size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/curio" className="hover:text-white transition-colors">Curio Platform</Link></li>
              <li><Link to="/ecosystem" className="hover:text-white transition-colors">Ecosystem</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Ecosystem</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/ecosystem" className="hover:text-white transition-colors">Nova (9-10)</Link></li>
              <li><Link to="/curio" className="hover:text-white transition-colors">Curio (11-12)</Link></li>
              <li><Link to="/ecosystem" className="hover:text-white transition-colors">Vibe (Skills)</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Partner with Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Get in Touch</h4>
            <ul className="space-y-6 text-gray-400">
              <li className="flex gap-4">
                <MapPin className="text-[#06B6D4] shrink-0" size={20} />
                <span>KCG Campus, i-Hub, Navrangpura, Ahmedabad, Gujarat</span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-[#06B6D4] shrink-0" size={20} />
                <span>+91 (800) 123-4567</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-[#06B6D4] shrink-0" size={20} />
                <span>contact@vyomasystems.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Vyoma Learning Systems Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
