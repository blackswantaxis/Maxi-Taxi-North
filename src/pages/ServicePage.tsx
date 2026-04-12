import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Accessibility, 
  Users, 
  Plane, 
  ShieldCheck, 
  Calendar, 
  Phone, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { services } from '@/src/data/siteData';

export default function ServicePage() {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  if (!service) return <div className="pt-32 text-center">Service not found</div>;

  const getIcon = () => {
    switch (service.icon) {
      case 'Accessibility': return <Accessibility className="h-12 w-12 text-yellow-500" />;
      case 'Users': return <Users className="h-12 w-12 text-yellow-500" />;
      case 'Plane': return <Plane className="h-12 w-12 text-yellow-500" />;
      default: return <ShieldCheck className="h-12 w-12 text-yellow-500" />;
    }
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              {getIcon()}
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6"
            >
              {service.title} <br />
              <span className="text-yellow-500">Northern Perth</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed mb-10"
            >
              {service.description} We provide reliable, professional, and safe transport 
              solutions tailored to your specific needs in the northern suburbs.
            </motion.p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:0411946000" className="bg-black text-white px-8 py-4 rounded-xl font-bold flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>0411 946 000</span>
              </a>
              <Link to="/booking" className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Book Online</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our {service.title}?</h2>
              <ul className="space-y-6">
                {[
                  'Fully equipped modern vehicles',
                  'Professional, police-cleared drivers',
                  'On-time guarantee for all bookings',
                  'NDIS approved transport provider',
                  'Available 24/7 across northern suburbs',
                  'Transparent pricing with no hidden costs'
                ].map((item) => (
                  <li key={item} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-900 rounded-3xl p-10 text-white">
              <h3 className="text-2xl font-bold mb-6">Service Features</h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400/20 p-3 rounded-xl">
                    <ShieldCheck className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Safety First</h4>
                    <p className="text-gray-400 text-sm">All vehicles undergo regular safety inspections and maintenance.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400/20 p-3 rounded-xl">
                    <Users className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Spacious Comfort</h4>
                    <p className="text-gray-400 text-sm">Plenty of room for passengers and luggage in our modern fleet.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400/20 p-3 rounded-xl">
                    <Accessibility className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Full Accessibility</h4>
                    <p className="text-gray-400 text-sm">Specialized ramps and restraints for wheelchair users.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to book your {service.title}?</h2>
          <p className="text-gray-600 mb-10">
            Contact us today for a quote or book online in less than 2 minutes. 
            We're ready to get you where you need to go.
          </p>
          <Link 
            to="/booking" 
            className="inline-flex items-center space-x-2 bg-black text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-800 transition-all"
          >
            <span>Start Your Booking</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
