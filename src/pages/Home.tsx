import React from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  Calendar, 
  ShieldCheck, 
  Clock, 
  Users, 
  Accessibility, 
  Plane, 
  ChevronRight, 
  Star,
  MapPin,
  CarTaxiFront,
  MessageCircle,
  HeartHandshake,
  Stethoscope,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { services, suburbs } from '@/src/data/siteData';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-24 pb-32 lg:pt-32 lg:pb-48">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-yellow-400 text-black px-6 py-2 rounded-full text-sm font-bold mb-10 shadow-lg shadow-yellow-400/20">
              <Star className="h-4 w-4 fill-current" />
              <span>Perth's #1 Rated Maxi Taxi Service</span>
            </div>
            <h1 className="text-6xl lg:text-9xl font-black tracking-tighter text-gray-900 leading-[0.85] mb-12 uppercase">
              Reliable <br />
              <span className="text-yellow-500">Maxi Taxi</span> <br />
              <span className="text-gray-300">North Perth</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-16 leading-relaxed max-w-2xl mx-auto font-medium">
              Specializing in Wheelchair Accessible transport and 12-passenger Maxi Taxis. 
              Safe, spacious, and always on time for airport transfers, events, and medical appointments.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="tel:0411946000"
                className="flex items-center justify-center space-x-4 bg-black text-white px-10 py-6 rounded-3xl text-xl font-bold hover:bg-gray-800 transition-all shadow-2xl shadow-black/20 group"
              >
                <Phone className="h-7 w-7 group-hover:rotate-12 transition-transform" />
                <span>0411 946 000</span>
              </a>
              <a
                href="https://wa.me/61411946000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-4 bg-green-500 text-white px-10 py-6 rounded-3xl text-xl font-bold hover:bg-green-600 transition-all shadow-xl shadow-green-500/20 group"
              >
                <MessageCircle className="h-7 w-7 group-hover:scale-110 transition-transform" />
                <span>WhatsApp</span>
              </a>
              <Link
                to="/booking"
                className="flex items-center justify-center space-x-4 bg-yellow-400 text-black px-10 py-6 rounded-3xl text-xl font-bold hover:bg-yellow-500 transition-all shadow-xl shadow-yellow-400/20"
              >
                <Calendar className="h-7 w-7" />
                <span>Book Online</span>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-0 opacity-[0.03] pointer-events-none overflow-hidden">
          <div className="text-[20rem] font-black leading-none select-none">MAXI TAXI NORTH PERTH</div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-50 grayscale">
            <div className="flex items-center space-x-2 font-black text-2xl italic">NDIS</div>
            <div className="flex items-center space-x-2 font-black text-2xl italic">PERTH AIRPORT</div>
            <div className="flex items-center space-x-2 font-black text-2xl italic">NORTHERN SUBURBS</div>
            <div className="flex items-center space-x-2 font-black text-2xl italic">MAXI TAXI</div>
          </div>
        </div>
      </section>

      {/* Services Grid (Bento Style) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-5xl font-black text-gray-900 mb-6 uppercase tracking-tighter">Our Premium <br /><span className="text-yellow-500">Fleet & Services</span></h2>
              <p className="text-xl text-gray-600 font-medium">
                We provide more than just a ride. Our fleet is equipped for every situation, 
                from solo medical trips to large group airport transfers.
              </p>
            </div>
            <Link to="/booking" className="bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-all">
              View All Services
            </Link>
          </div>

          <div className="grid md:grid-cols-12 gap-6">
            {/* Main Feature 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-8 bg-gray-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden group"
            >
              <div className="relative z-10">
                <div className="bg-yellow-400 p-4 rounded-2xl w-fit mb-8">
                  <Accessibility className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-3xl font-black mb-4 uppercase">Wheelchair Accessible Taxi</h3>
                <p className="text-gray-400 max-w-md mb-8 text-lg">Specialized transport for wheelchair users with safety-first positioning and NDIS support.</p>
                <Link to="/services/wheelchair-taxi-service" className="inline-flex items-center space-x-2 text-yellow-400 font-bold group-hover:translate-x-2 transition-transform">
                  <span>Learn More</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 group-hover:opacity-30 transition-opacity">
                <img src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=1000" alt="Wheelchair" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </motion.div>

            {/* Main Feature 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-4 bg-yellow-400 rounded-[2.5rem] p-10 text-black group"
            >
              <div className="bg-black p-4 rounded-2xl w-fit mb-8">
                <Plane className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-3xl font-black mb-4 uppercase">Airport Transfers</h3>
              <p className="text-black/70 mb-8 font-medium">Reliable, on-time transfers to and from Perth Airport with plenty of luggage space.</p>
              <Link to="/services/airport-transfers" className="inline-flex items-center space-x-2 font-bold group-hover:translate-x-2 transition-transform">
                <span>Book Now</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>

            {/* Secondary Features */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-4 bg-gray-50 rounded-[2.5rem] p-10 border border-gray-100 group"
            >
              <div className="bg-white p-4 rounded-2xl w-fit mb-8 shadow-sm">
                <Users className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase">12 Passenger Maxi</h3>
              <p className="text-gray-500 mb-8 text-sm font-medium">Spacious group transport for up to 12 people, perfect for families and events.</p>
              <Link to="/services/maxi-taxi-12-passenger" className="inline-flex items-center space-x-2 text-yellow-600 font-bold group-hover:translate-x-2 transition-transform">
                <span>Details</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-4 bg-gray-50 rounded-[2.5rem] p-10 border border-gray-100 group"
            >
              <div className="bg-white p-4 rounded-2xl w-fit mb-8 shadow-sm">
                <HeartHandshake className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase">NDIS Transport</h3>
              <p className="text-gray-500 mb-8 text-sm font-medium">Approved NDIS transport provider ensuring safe and comfortable travel.</p>
              <Link to="/services/ndis-transport" className="inline-flex items-center space-x-2 text-yellow-600 font-bold group-hover:translate-x-2 transition-transform">
                <span>Details</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-4 bg-gray-50 rounded-[2.5rem] p-10 border border-gray-100 group"
            >
              <div className="bg-white p-4 rounded-2xl w-fit mb-8 shadow-sm">
                <Calendar className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase">Event Transport</h3>
              <p className="text-gray-500 mb-8 text-sm font-medium">Group bookings for weddings, parties, and corporate events.</p>
              <Link to="/services/event-transport" className="inline-flex items-center space-x-2 text-yellow-600 font-bold group-hover:translate-x-2 transition-transform">
                <span>Details</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Three simple steps to your destination.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: '01', title: 'Request a Ride', desc: 'Call, WhatsApp, or use our online form to request your transport.' },
              { step: '02', title: 'Get Confirmation', desc: 'We confirm your booking and assign a professional local driver.' },
              { step: '03', title: 'Enjoy the Journey', desc: 'Our driver arrives on time to get you safely to your destination.' }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-8xl font-black text-gray-50 absolute -top-10 -left-4 z-0">{item.step}</div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">What Our Passengers Say</h2>
              <p className="text-lg text-gray-600">Trusted by thousands of residents across Perth's northern suburbs.</p>
            </div>
            <div className="flex items-center space-x-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img src={`https://picsum.photos/seed/${i + 10}/100/100`} alt="User" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-yellow-400 mb-1">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-3 w-3 fill-current" />)}
                </div>
                <p className="text-xs font-bold text-gray-900">4.9/5 from 500+ reviews</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah M.', suburb: 'Butler', text: 'The best wheelchair taxi service in Perth. The drivers are so respectful and the ramps are very easy to use.' },
              { name: 'David L.', suburb: 'Yanchep', text: 'Reliable airport transfers. Always on time and plenty of room for all our family luggage.' },
              { name: 'James K.', suburb: 'Clarkson', text: 'Used them for a group event. The 12-seater was clean and the driver knew all the best routes.' }
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <div className="flex text-yellow-400 mb-4">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-gray-700 mb-6 italic">"{review.text}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-black">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{review.name}</p>
                    <p className="text-xs text-gray-500">{review.suburb}, WA</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suburb Coverage */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-extrabold text-white mb-6 leading-tight">
                  Serving All Northern <br />
                  <span className="text-yellow-400">Suburbs of Perth</span>
                </h2>
                <p className="text-gray-400 text-lg mb-10">
                  From Yanchep to Woodvale, we are your local transport experts. 
                  Fast response times and local drivers who know the area perfectly.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {suburbs.slice(0, 12).map((suburb) => (
                    <Link 
                      key={suburb}
                      to={`/suburbs/${suburb.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-gray-300 hover:text-yellow-400 text-sm flex items-center space-x-2 transition-colors"
                    >
                      <MapPin className="h-3 w-3 text-yellow-500" />
                      <span>{suburb}</span>
                    </Link>
                  ))}
                </div>
                <Link 
                  to="/suburbs" 
                  className="inline-block mt-10 text-yellow-400 font-bold hover:underline"
                >
                  View all 27+ suburbs we cover →
                </Link>
              </div>
              <div className="hidden lg:block">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl">
                  <h3 className="text-white font-bold text-xl mb-6">Why Choose Maxi Taxi North?</h3>
                  <ul className="space-y-6">
                    {[
                      { title: 'No Hidden Fees', desc: 'Transparent pricing with no surprises.' },
                      { title: 'Professional Drivers', desc: 'Fully licensed, insured, and police-cleared.' },
                      { title: 'Modern Fleet', desc: 'Clean, air-conditioned vehicles for your comfort.' },
                      { title: 'Easy Booking', desc: 'Book via phone, SMS, or our online form.' }
                    ].map((item) => (
                      <li key={item.title} className="flex items-start space-x-4">
                        <div className="bg-yellow-400/20 p-2 rounded-lg">
                          <ShieldCheck className="h-5 w-5 text-yellow-400" />
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-sm">{item.title}</h4>
                          <p className="text-gray-500 text-xs">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-yellow-400">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-8 leading-tight">
            Need a Reliable Ride in Perth's North?
          </h2>
          <p className="text-xl text-black/80 mb-12 font-medium">
            Whether it's a wheelchair taxi for a medical appointment or a 12-seater for the airport, 
            we've got you covered.
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
