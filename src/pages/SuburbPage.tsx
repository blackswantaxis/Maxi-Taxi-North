import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Phone, Calendar, CheckCircle, CarTaxiFront, Accessibility, Users, Plane } from 'lucide-react';
import { suburbs } from '@/src/data/siteData';

export default function SuburbPage() {
  const { name } = useParams();
  const suburbName = name?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  if (!suburbs.find(s => s.toLowerCase().replace(/\s+/g, '-') === name)) {
    return <div className="pt-32 text-center">Suburb not found</div>;
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 text-yellow-600 font-bold mb-4">
                <MapPin className="h-5 w-5" />
                <span>Local Service Area</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6">
                Maxi Taxi <span className="text-yellow-500">{suburbName}</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-10">
                Need a reliable taxi in {suburbName}? We provide professional maxi taxi and 
                wheelchair accessible transport services throughout {suburbName} and surrounding areas.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:0411946000" className="bg-black text-white px-8 py-4 rounded-xl font-bold flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Call 0411 946 000</span>
                </a>
                <Link to="/booking" className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Book Online</span>
                </Link>
              </div>
            </div>
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold mb-6">Services Available in {suburbName}</h3>
              <div className="space-y-4">
                {[
                  { icon: Accessibility, text: 'Wheelchair Accessible Taxis' },
                  { icon: Users, text: '12 Passenger Maxi Taxis' },
                  { icon: Plane, text: 'Perth Airport Transfers' },
                  { icon: CheckCircle, text: 'NDIS Transport Provider' },
                  { icon: CarTaxiFront, text: 'Local Suburb-to-Suburb' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 bg-white p-4 rounded-xl border border-gray-100">
                    <item.icon className="h-5 w-5 text-yellow-500" />
                    <span className="font-medium text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Your Trusted Local Transport in {suburbName}</h2>
            <p className="text-gray-600 leading-relaxed">
              Whether you're heading to a medical appointment, catching a flight from Perth Airport, 
              or planning a group night out, Maxi Taxi North is your first choice for transport in {suburbName}. 
              Our local drivers are always nearby, ensuring fast pickup times and reliable service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
              <h4 className="font-bold text-lg mb-4">Fast Response</h4>
              <p className="text-sm text-gray-600">We have drivers stationed near {suburbName} to ensure we get to you as quickly as possible.</p>
            </div>
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
              <h4 className="font-bold text-lg mb-4">Local Knowledge</h4>
              <p className="text-sm text-gray-600">Our drivers know the streets of {suburbName} like the back of their hand, avoiding traffic and finding the best routes.</p>
            </div>
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
              <h4 className="font-bold text-lg mb-4">Community Focused</h4>
              <p className="text-sm text-gray-600">We take pride in serving the {suburbName} community with care, especially our seniors and NDIS participants.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Suburbs */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold mb-8 text-center">Other Nearby Areas We Serve</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {suburbs.filter(s => s !== suburbName).slice(0, 15).map((suburb) => (
              <Link 
                key={suburb}
                to={`/suburbs/${suburb.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:bg-yellow-400 hover:text-black transition-all border border-gray-200"
              >
                {suburb}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
