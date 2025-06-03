// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sha Balaji Computer and Education Center</h3>
            <p className="text-gray-400">
              Providing quality education and computer training since 2010. 
              Empowering students with knowledge and skills for a brighter future.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Courses</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Admissions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Results</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <address className="text-gray-400 not-italic">
              <p className="mb-2">sereri choraya , bhilwara, Rajasthan</p>
              <p className="mb-2">Phone: +91 9876543210</p>
              <p className="mb-2">Email: shribalajicomputers312@gmail.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Shri Balaji Computer and Education Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;