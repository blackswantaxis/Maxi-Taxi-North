import React from 'react';
import { motion } from 'motion/react';
import { 
  Accessibility, 
  ShieldCheck, 
  HeartHandshake, 
  Clock, 
  Phone, 
  Calendar, 
  CheckCircle, 
  Users, 
  MapPin,
  ArrowRight,
  Info,
  MessageCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { suburbs } from '@/src/data/siteData';

export default function WheelchairService() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1534705867302-2a41394f2a3b?auto=format&fit=crop&q=80&w=2000" 
            alt="Accessibility Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 bg-yellow-400 text-black px-4 py-1.5 rounded-full text-sm font-bold mb-8"
            >
              <ShieldCheck className="h-4 w-4" />
              <span>NDIS Approved Transport Provider</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-7xl font-extrabold text-white mb-8 leading-[1.1]"
            >
              Wheelchair Accessible <br />
              <span className="text-yellow-400">Taxi Perth North</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-12 leading-relaxed"
            >
              Safe, dignified, and reliable transport for wheelchair users and NDIS participants. 
              Our specialized fleet and trained drivers ensure a stress-free journey every time.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:0411946000" className="flex items-center justify-center space-x-3 bg-yellow-400 text-black px-8 py-5 rounded-2xl text-lg font-bold hover:bg-yellow-500 transition-all shadow-xl shadow-yellow-400/20">
                <Phone className="h-6 w-6" />
                <span>0411 946 000</span>
              </a>
              <a
                href="https://wa.me/61411946000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-green-500 text-white px-8 py-5 rounded-2xl text-lg font-bold hover:bg-green-600 transition-all shadow-xl shadow-green-500/20"
              >
                <MessageCircle className="h-6 w-6" />
                <span>WhatsApp</span>
              </a>
              <Link to="/booking" className="flex items-center justify-center space-x-3 bg-white text-black px-8 py-5 rounded-2xl text-lg font-bold hover:bg-gray-100 transition-all shadow-xl shadow-white/10">
                <Calendar className="h-6 w-6" />
                <span>Book Online</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals & NDIS Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: 'Safety Certified', desc: 'Multi-point restraint systems' },
              { icon: HeartHandshake, title: 'NDIS Registered', desc: 'Approved transport provider' },
              { icon: Accessibility, title: 'Full Access', desc: 'Hydraulic ramps & wide doors' },
              { icon: Clock, title: 'On-Time Always', desc: 'Priority for medical trips' }
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-4 p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="bg-yellow-400/20 p-3 rounded-xl">
                  <item.icon className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1508847154043-be5407fcaa5a?auto=format&fit=crop&q=80&w=1000" 
                  alt="Wheelchair Taxi Interior" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-yellow-400 p-10 rounded-[2.5rem] shadow-2xl hidden md:block max-w-xs">
                <p className="text-black font-extrabold text-2xl mb-2">100%</p>
                <p className="text-black/80 font-bold text-sm">Safety Compliance Record for all Accessibility Transport.</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-8 leading-tight">
                Designed for Comfort, <br />
                <span className="text-yellow-500">Built for Safety</span>
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                We understand that transport for wheelchair users requires more than just a vehicle. 
                It requires patience, professional training, and specialized equipment. Our drivers 
                are experts in securing wheelchairs and providing door-to-door assistance.
              </p>
              <div className="space-y-6">
                {[
                  { title: 'Trained Assistance', desc: 'Drivers trained in manual handling and wheelchair securement.' },
                  { title: 'Modern Ramps', desc: 'Low-gradient hydraulic ramps for easy entry and exit.' },
                  { title: 'Spacious Interior', desc: 'Room for the wheelchair user plus up to 4 additional passengers.' },
                  { title: 'Carer Friendly', desc: 'Ample space for carers and medical equipment.' }
                ].map((feature) => (
                  <div key={feature.title} className="flex items-start space-x-4">
                    <div className="mt-1">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{feature.title}</h4>
                      <p className="text-gray-500 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NDIS & Carer Focus */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-400 rounded-[3rem] p-12 lg:p-20 text-black">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-extrabold mb-6">NDIS Approved Transport</h2>
                <p className="text-lg font-medium mb-8 opacity-80">
                  We work closely with NDIS participants, plan managers, and support coordinators 
                  to provide seamless transport solutions.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-black" />
                    <span className="font-bold">Direct Invoicing for Plan Managers</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-black" />
                    <span className="font-bold">Regular Scheduled Bookings Available</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-black" />
                    <span className="font-bold">NDIS Transport Allowance Compliant</span>
                  </li>
                </ul>
                <Link to="/booking" className="inline-flex items-center space-x-2 bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-all">
                  <span>Inquire About NDIS Booking</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
              <div className="bg-white/20 backdrop-blur-md border border-white/30 p-8 lg:p-12 rounded-[2rem]">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-black p-3 rounded-xl">
                    <Info className="h-6 w-6 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-bold">Information for Carers</h3>
                </div>
                <p className="text-sm leading-relaxed mb-6">
                  We prioritize the comfort of both the passenger and their carer. Our maxi taxis 
                  allow the wheelchair user to remain in their chair while the carer sits directly 
                  beside or behind them, ensuring constant contact and support throughout the journey.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-sm font-bold">
                    <Users className="h-5 w-5" />
                    <span>Space for up to 2 Carers + Equipment</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm font-bold">
                    <ShieldCheck className="h-5 w-5" />
                    <span>Door-to-Door Assistance Included</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Suburb SEO Block */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Serving Perth's Northern Corridor</h2>
            <p className="text-gray-600">Priority wheelchair transport available in these local areas:</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {suburbs.slice(0, 18).map((suburb) => (
              <Link 
                key={suburb}
                to={`/suburbs/${suburb.toLowerCase().replace(/\s+/g, '-')}`}
                className="flex items-center space-x-2 p-3 rounded-xl bg-gray-50 hover:bg-yellow-50 hover:text-yellow-700 transition-all border border-gray-100 group"
              >
                <MapPin className="h-4 w-4 text-gray-400 group-hover:text-yellow-500" />
                <span className="text-sm font-medium">{suburb}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-yellow-400">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-8 leading-tight">
            Book Your Accessible Ride Today
          </h2>
          <p className="text-xl text-black/80 mb-12 font-medium">
            Don't settle for unreliable transport. Experience the professional difference 
            with Maxi Taxi North's dedicated accessibility service.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:0411946000"
              className="bg-black text-white px-10 py-6 rounded-2xl text-xl font-bold hover:bg-gray-800 transition-all shadow-2xl shadow-black/20"
            >
              Call 0411 946 000
            </a>
            <a
              href="https://wa.me/61411946000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-10 py-6 rounded-2xl text-xl font-bold hover:bg-green-600 transition-all shadow-2xl shadow-green-500/20"
            >
              WhatsApp Us
            </a>
            <Link
              to="/booking"
              className="bg-white text-black px-10 py-6 rounded-2xl text-xl font-bold hover:bg-gray-50 transition-all shadow-2xl shadow-black/10"
            >
              Book Online Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
