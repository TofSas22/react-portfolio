// src/components/Header.jsx
import { useState, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi'; // Importing burger icon from react-icons

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll event to change the header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Add blur effect after scrolling down 50px
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full p-4 transition-all ${
        isScrolled
          ? 'backdrop-blur-lg bg-white bg-opacity-30 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          <a href="#">MyLogo</a>
        </div>

        {/* Menu Items (Desktop) */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-white">Home</a>
          <a href="#about" className="text-white">About</a>
          <a href="#services" className="text-white">Services</a>
          <a href="#contact" className="text-white">Contact</a>
        </nav>

        {/* Burger Button (Mobile) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
        >
          <FiMenu size={24} />
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-0 right-0 bg-white bg-opacity-90 p-4 rounded-lg mt-16 md:hidden">
            <nav className="space-y-4">
              <a href="#home" className="block text-black">Home</a>
              <a href="#about" className="block text-black">About</a>
              <a href="#services" className="block text-black">Services</a>
              <a href="#contact" className="block text-black">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
