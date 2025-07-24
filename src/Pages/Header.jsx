import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "#About", label: "About" },
    { href: "#Skills", label: "Skills" },
    { href: "#Projects", label: "Project" },   
    { href: "#Footer", label: "Contact" }
  ];

  return (
    <header className="w-full bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main header bar */}
        <div className="flex items-center justify-between h-12">
          {/* Left side - Brand name */}
          <div className="text-xl font-bold text-gray-800">
            dhvani
          </div>
          <nav className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xl text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile menu button - visible only on mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu - stacked layout */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-gray-50">
            <nav className="py-4 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 rounded-md mx-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;