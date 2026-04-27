import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Why Us', href: '#why-choose-us' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-gray-950/95 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img src="/tech_webbing-removebg-preview.png" alt="Tech Webbing" className="h-14 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-emerald-400 transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a href="tel:+393447447541" className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors font-semibold">
            <Phone className="w-5 h-5" />
            +39 344 744 7541
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-emerald-400 transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-gray-300 hover:text-emerald-400 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-gray-800">
            <a href="tel:+393447447541" className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors font-semibold">
              <Phone className="w-5 h-5" />
              +39 344 744 7541
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
