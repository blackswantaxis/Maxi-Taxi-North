import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import WheelchairService from './pages/WheelchairService';
import SuburbPage from './pages/SuburbPage';
import Booking from './pages/Booking';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-yellow-200 selection:text-black">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/wheelchair-taxi-service" element={<WheelchairService />} />
            <Route path="/services/:slug" element={<ServicePage />} />
            <Route path="/suburbs/:name" element={<SuburbPage />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Booking />} /> {/* Reusing booking for contact demo */}
            <Route path="/suburbs" element={<Home />} /> {/* Placeholder */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
