import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, Clock, ShieldCheck, Calendar, MapPin, CheckCircle, MessageCircle } from 'lucide-react';

export default function Booking() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form Column */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-xl shadow-black/5 border border-gray-100">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Book Your Maxi Taxi</h1>
                
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <ShieldCheck className="h-10 w-10 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Booking Request Received!</h2>
                    <p className="text-gray-600 mb-8">
                      Thank you for your request. Your booking details have been sent to <strong>northcabswa@gmail.com</strong>. 
                      One of our dispatchers will contact you shortly via phone or SMS to confirm your booking.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="bg-black text-white px-8 py-4 rounded-xl font-bold"
                    >
                      Make Another Booking
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Full Name</label>
                        <input required type="text" className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none transition-all" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Phone Number</label>
                        <input required type="tel" className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none transition-all" placeholder="0400 000 000" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Service Type</label>
                      <select className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none transition-all">
                        <option>Wheelchair Accessible Taxi</option>
                        <option>12 Passenger Maxi Taxi</option>
                        <option>Airport Transfer</option>
                        <option>NDIS Transport</option>
                        <option>General Group Booking</option>
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Pickup Date</label>
                        <input required type="date" className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Pickup Time</label>
                        <input required type="time" className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none transition-all" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Pickup Address</label>
                      <input required type="text" className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none transition-all" placeholder="Street address, suburb" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Destination</label>
                      <input required type="text" className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none transition-all" placeholder="Where are you heading?" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Additional Notes (Passengers, Luggage, etc.)</label>
                      <textarea className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none transition-all h-32" placeholder="Tell us about any special requirements..."></textarea>
                    </div>

                    <button type="submit" className="w-full bg-yellow-400 text-black py-5 rounded-2xl font-bold text-xl hover:bg-yellow-500 transition-all shadow-xl shadow-yellow-400/20">
                      Submit Booking Request
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Info Column */}
            <div className="space-y-8">
              <div className="bg-black text-white rounded-[2rem] p-8">
                <h3 className="text-xl font-bold mb-6">Need Immediate Help?</h3>
                <div className="space-y-6">
                  <a href="tel:0411946000" className="flex items-center space-x-4 group">
                    <div className="bg-yellow-400 p-3 rounded-xl group-hover:scale-110 transition-transform">
                      <Phone className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Call 24/7</p>
                      <p className="text-lg font-bold">0411 946 000</p>
                    </div>
                  </a>
                  <a href="https://wa.me/61411946000" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group">
                    <div className="bg-green-500 p-3 rounded-xl group-hover:scale-110 transition-transform">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">WhatsApp</p>
                      <p className="text-lg font-bold">Chat Now</p>
                    </div>
                  </a>
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/10 p-3 rounded-xl">
                      <Clock className="h-6 w-6 text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Response Time</p>
                      <p className="text-lg font-bold">Under 15 Minutes</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Booking Information</h3>
                <ul className="space-y-4">
                  {[
                    'No upfront payment required',
                    'Confirmation via SMS/Phone',
                    'Free cancellation up to 2 hours before',
                    'All major credit cards accepted',
                    'NDIS invoices available'
                  ].map((item) => (
                    <li key={item} className="flex items-start space-x-3 text-sm text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
