import React, { useState, useEffect } from 'react';
import ParticleBackground from './ParticleBackground';

const Home = ({ navigateTo }) => {
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const taglines = React.useMemo(() => [
    "Full-Stack Developer", "Python Developer", "Web Innovator", "AI Explorer", "DevOps Enthusiast", "Competitive Programmer", "Polymath"
  ], []);

  useEffect(() => {
    let timer;
    const handleTyping = () => {
      const fullText = taglines[currentTaglineIndex];
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(75);
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && currentText === fullText) {
        setTypingSpeed(1500);
        setIsDeleting(true);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTaglineIndex((prev) => (prev + 1) % taglines.length);
        setTypingSpeed(200);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, typingSpeed, currentTaglineIndex, taglines]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden p-4">
      <ParticleBackground />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 bg-white bg-opacity-70 rounded-3xl shadow-2xl border border-blue-300 backdrop-blur-sm">
        <h1 className="text-6xl md:text-8xl font-extrabold text-gray-900 leading-tight mb-6 animate-fade-in-up">
          Krishna Pathak
        </h1>
        <p className="text-2xl md:text-4xl text-blue-600 font-mono mb-10 h-10">
          <span className="typewriter-text">{currentText}</span>
          <span className="blinking-cursor">_</span>
        </p>
        <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto animate-fade-in-up delay-300">
          A passionate developer building intelligent web solutions, exploring artificial intelligence, and engineering for the future.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-5 sm:space-y-0 sm:space-x-8 animate-fade-in-up delay-500">
          <button
            onClick={() => navigateTo('technical-prowess')}
            className="px-10 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-lg"
          >
            Explore My Work
          </button>
          <button
            onClick={() => navigateTo('contact')}
            className="px-10 py-4 bg-transparent border-2 border-blue-600 text-blue-600 font-semibold rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-lg"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;