import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-8 text-center text-gray-700 text-base border-t border-blue-200">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Krishna Pathak. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;