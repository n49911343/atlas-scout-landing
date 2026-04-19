import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Legal = () => {
  const location = useLocation();
  const path = location.pathname;

  let title = "Legal Information";
  if (path.includes('privacy-policy')) title = "Privacy Policy";
  if (path.includes('terms-of-service')) title = "Terms of Service";
  if (path.includes('cookie-policy')) title = "Cookie Policy";

  return (
    <div className="min-h-screen bg-base pt-24 pb-12 flex flex-col">
      <div className="container mx-auto px-6 max-w-4xl flex-grow">
        <Link to="/" className="text-gold hover:text-white mb-8 inline-block transition-colors">&larr; Back to Home</Link>
        
        <h1 className="font-serif text-4xl text-white mb-8">{title}</h1>
        
        <div className="prose prose-invert prose-gold max-w-none text-gray-300">
          <p className="mb-4">
            Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          
          <p className="mb-4">
            This is a placeholder page for the <strong>{title}</strong> of TRAVEL HACKS PRO (DIGITAL MEDIA SOLUTIONS LLC). 
            In a complete production environment, this page would contain the full legal text drafted by legal professionals.
          </p>
          
          <h2 className="text-2xl text-white mt-8 mb-4">1. General Information</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
          </p>
          
          <h2 className="text-2xl text-white mt-8 mb-4">2. Your Responsibilities</h2>
          <p className="mb-4">
            Donec tristique nisl eget libero mattis, nec consequat quam venenatis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
          </p>

          <p className="mt-12 text-sm text-gray-500">
            For questions, please contact us at our physical address: 1201 North Orange Street, Suite 7000, Wilmington, DE 19801, USA.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Legal;
