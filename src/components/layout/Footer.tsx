import { Link } from 'react-router-dom';
import { CarTaxiFront, Mail, MapPin, Phone, Facebook, Instagram } from 'lucide-react';
import { suburbs } from '@/src/data/siteData';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-yellow-400 p-2 rounded-lg">
                <CarTaxiFront className="h-6 w-6 text-black" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Maxi Taxi <span className="text-yellow-500">North</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Northern Perth's premier maxi taxi and wheelchair accessible transport provider. 
              Reliable, safe, and professional service across all northern suburbs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-400 transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-yellow-400 transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Our Services</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services/wheelchair-taxi-service" className="hover:text-yellow-400 transition-colors">Wheelchair Accessible Taxi</Link></li>
              <li><Link to="/services/maxi-taxi-12-passenger" className="hover:text-yellow-400 transition-colors">12 Passenger Maxi Taxi</Link></li>
              <li><Link to="/services/airport-transfers" className="hover:text-yellow-400 transition-colors">Airport Transfers</Link></li>
              <li><Link to="/services/ndis-transport" className="hover:text-yellow-400 transition-colors">NDIS Transport</Link></li>
              <li><Link to="/services/event-transport" className="hover:text-yellow-400 transition-colors">Event Transport</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-yellow-500 shrink-0" />
                <a href="tel:0411946000" className="hover:text-yellow-400 transition-colors">0411 946 000</a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-yellow-500 shrink-0" />
                <a href="mailto:northcabswa@gmail.com" className="hover:text-yellow-400 transition-colors">northcabswa@gmail.com</a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-500 shrink-0" />
                <span>Serving Northern Suburbs, Perth WA</span>
              </li>
            </ul>
          </div>

          {/* Suburbs Grid (Mini) */}
          <div>
            <h3 className="text-white font-bold mb-6">Service Areas</h3>
            <div className="flex flex-wrap gap-2">
              {suburbs.slice(0, 8).map((suburb) => (
                <Link 
                  key={suburb} 
                  to={`/suburbs/${suburb.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-xs bg-gray-800 px-2 py-1 rounded hover:bg-yellow-500 hover:text-black transition-all"
                >
                  {suburb}
                </Link>
              ))}
              <Link to="/suburbs" className="text-xs text-yellow-500 hover:underline">View all areas</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Maxi Taxi North. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
