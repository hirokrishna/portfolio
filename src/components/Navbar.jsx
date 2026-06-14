import React, { useState } from 'react';

const Navbar = ({ navigateTo, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', name: 'Home' },
    { id: 'about-me', name: 'About Me' },
    { id: 'technical-prowess', name: 'Technical Prowess' },
    { id: 'leetcode', name: 'LeetCode' },
    { id: 'experience-timeline', name: 'Experience & Milestones' },
    { id: 'leadership-communication', name: 'Leadership & Communication' },
    { id: 'contact', name: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-80 backdrop-blur-md z-50 shadow-lg border-b border-blue-200">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
          </svg>
          <span className="text-2xl font-extrabold text-blue-600 tracking-wider">Krishna</span>
        </div>

        <div className="hidden md:flex space-x-8">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => navigateTo(item.id)}
              className={`text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium relative group
                ${activeSection === item.id ? 'text-blue-600 font-semibold' : ''}`}
            >
              {item.name}
              <span
                className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transform -translate-x-1/2 group-hover:w-full transition-all duration-300
                ${activeSection === item.id ? 'w-full' : ''}`}></span>
            </button>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none focus:text-blue-600">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white pb-4 border-t border-blue-200">
          <div className="flex flex-col items-center space-y-3 px-6">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => { navigateTo(item.id); setIsOpen(false); }}
                className={`block w-full text-center py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-300 rounded-md
                  ${activeSection === item.id ? 'bg-gray-100 text-blue-600 font-semibold' : ''}`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;