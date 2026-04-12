import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, CarTaxiFront, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Wheelchair Taxi', href: '/services/wheelchair-taxi-service' },
    { name: 'Maxi Taxi', href: '/services/maxi-taxi-12-passenger' },
    { name: 'Airport Transfers', href: '/services/airport-transfers' },
    { name: 'Booking', href: '/booking' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-yellow-400 p-2 rounded-lg">
              <CarTaxiFront className="h-6 w-6 text-black" />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">
              Maxi Taxi <span className="text-yellow-500">North</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-yellow-600",
                  location.pathname === link.href ? "text-yellow-600" : "text-gray-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-3">
              <a
                href="https://wa.me/61411946000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2.5 rounded-full text-sm font-semibold hover:bg-green-600 transition-all shadow-lg shadow-green-500/20"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:0411946000"
                className="flex items-center space-x-2 bg-black text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all shadow-lg shadow-black/10"
              >
                <Phone className="h-4 w-4" />
                <span>0411 946 000</span>
              </a>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block px-3 py-4 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <a
                  href="tel:0411946000"
                  className="flex items-center justify-center space-x-2 bg-yellow-400 text-black px-4 py-4 rounded-xl font-bold text-lg"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call 0411 946 000</span>
                </a>
                <a
                  href="https://wa.me/61411946000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-green-500 text-white px-4 py-4 rounded-xl font-bold text-lg"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
