import { useState } from 'react';
import { Building2, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-800 via-indigo-900 to-indigo-700 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            {/* AIFBF logo wrapped in <a> tag to navigate to home page */}
            <a href="/" className="flex items-center space-x-2">
              <Building2 className="w-8 h-8 text-white" />
              <span className="text-xl font-extrabold text-white">AIFBF</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-white text-lg font-semibold hover:text-yellow-400 transition-colors duration-300 transform hover:scale-105"
            >
              About Us
            </a>
            <a
              href="#vision"
              className="text-white text-lg font-semibold hover:text-yellow-400 transition-colors duration-300 transform hover:scale-105"
            >
              Vision
            </a>
            <a
              href="#sectors"
              className="text-white text-lg font-semibold hover:text-yellow-400 transition-colors duration-300 transform hover:scale-105"
            >
              Sectors
            </a>
            {/* New Leaders Link */}
            <a
              href="#leadership"
              className="text-white text-lg font-semibold hover:text-yellow-400 transition-colors duration-300 transform hover:scale-105"
            >
              Leaders
            </a>
            {/* New Location Link */}
            <a
              href="#findus"
              className="text-white text-lg font-semibold hover:text-yellow-400 transition-colors duration-300 transform hover:scale-105"
            >
              Location
            </a>
            <a
              href="#contact"
              className="bg-yellow-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-yellow-400 transition-colors duration-300 transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-yellow-400"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 space-y-4 bg-gradient-to-r from-indigo-800 via-indigo-900 to-indigo-700 rounded-b-lg shadow-xl">
              <a
                href="#about"
                className="block text-white text-lg font-semibold hover:text-yellow-400 transition-colors duration-300 transform hover:scale-105"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </a>
              <a
                href="#vision"
                className="block text-white text-lg font-semibold hover:text-yellow-400 transition-colors duration-300 transform hover:scale-105"
                onClick={() => setIsOpen(false)}
              >
                Vision
              </a>
              <a
                href="#sectors"
                className="block text-white text-lg font-semibold hover:text-yellow-400 transition-colors duration-300 transform hover:scale-105"
                onClick={() => setIsOpen(false)}
              >
                Sectors
              </a>
              {/* New Leaders Link for Mobile */}
              <a
                href="#leadership"
                className="block text-white text-lg font-semibold hover:text-yellow-400 transition-colors duration-300 transform hover:scale-105"
                onClick={() => setIsOpen(false)}
              >
                Leaders
              </a>
              {/* New Location Link for Mobile */}
              <a
                href="#findus"
                className="block text-white text-lg font-semibold hover:text-yellow-400 transition-colors duration-300 transform hover:scale-105"
                onClick={() => setIsOpen(false)}
              >
                Location
              </a>
              <a
                href="#contact"
                className="w-full text-white bg-yellow-500 px-6 py-2 rounded-full shadow-lg hover:bg-yellow-400 transition-colors duration-300 transform hover:scale-105"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
