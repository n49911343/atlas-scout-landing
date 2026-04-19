import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark-300 py-12 border-t border-dark-100 mt-auto">
      <div className="container mx-auto px-6 max-w-6xl text-center">
        
        <div className="mb-8 p-6 bg-dark-200 rounded-lg border border-dark-100 inline-block text-left max-w-3xl">
          <p className="text-gray-400 text-sm leading-relaxed">
            <strong className="text-gold font-medium">Affiliate Disclosure:</strong> This site contains affiliate links. We may receive a small commission for purchases made through these links at no additional cost to you.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          <Link to="/privacy-policy" className="text-gray-400 hover:text-gold transition-colors">Privacy Policy</Link>
          <span className="text-gray-600">|</span>
          <Link to="/terms-of-service" className="text-gray-400 hover:text-gold transition-colors">Terms of Service</Link>
          <span className="text-gray-600">|</span>
          <Link to="/cookie-policy" className="text-gray-400 hover:text-gold transition-colors">Cookie Policy</Link>
        </div>

        <div className="text-gray-500 text-sm space-y-2">
          <p>&copy; {new Date().getFullYear()} TRAVEL HACKS PRO | DIGITAL MEDIA SOLUTIONS LLC</p>
          <p>1201 North Orange Street, Suite 7000, Wilmington, DE 19801, USA</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
