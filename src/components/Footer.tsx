import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Tech Webbing
            </h3>
            <p className="text-gray-400 mb-4">
              AI automation and web design solutions for businesses worldwide.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/techwebbingofficial" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-900 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-all transform hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/techwebbing/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-900 hover:bg-pink-500 rounded-lg flex items-center justify-center transition-all transform hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">AI Automation</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Web Design</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">SEO & Marketing</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Social Media</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Paid Advertising</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-emerald-400 transition-colors">Portfolio</a></li>
              <li><a href="#why-choose-us" className="hover:text-emerald-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:techwebbingofficial@gmail.com" className="text-sm hover:text-emerald-300 transition-colors">techwebbingofficial@gmail.com</a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <a href="tel:+393447447541" className="text-sm hover:text-emerald-300 transition-colors">+39 344 744 7541</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Chittagong, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 Tech Webbing. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
