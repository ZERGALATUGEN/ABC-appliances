/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Wrench, 
  Truck, 
  Trash2, 
  CheckCircle2, 
  Star, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  ChevronRight, 
  Menu, 
  X,
  Award,
  Users,
  Calendar
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const PHONE_NUMBER = "(813) 555-0123";
const BUSINESS_NAME = "ABC Appliances & Services";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Wrench className="text-white w-6 h-6" />
          </div>
          <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
            ABC <span className="text-red-600">Appliances</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {['Services', 'Inventory', 'Repair', 'Reviews'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className={`font-medium hover:text-red-600 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {item}
            </a>
          ))}
          <a 
            href={`tel:${PHONE_NUMBER}`}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 transition-transform active:scale-95"
          >
            <Phone size={18} />
            {PHONE_NUMBER}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className={isScrolled ? 'text-gray-900' : 'text-white'} /> : <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {['Services', 'Inventory', 'Repair', 'Reviews'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-gray-800 font-semibold text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a 
                href={`tel:${PHONE_NUMBER}`}
                className="bg-blue-600 text-white p-4 rounded-xl font-bold flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Call Now: {PHONE_NUMBER}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000" 
          alt="Clean modern kitchen appliances" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-100 px-4 py-1 rounded-full text-sm font-semibold mb-6">
            <ShieldCheck size={16} className="text-red-500" />
            30-Day Warranty on All Appliances
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Reliable, Affordable <span className="text-red-500">Appliances in Tampa</span> – Tested & Guaranteed
          </h1>
          <p className="text-xl text-blue-100 mb-10 max-w-lg">
            Don't overpay for new. Get top-brand washers, dryers, and refrigerators at a fraction of the cost. Delivered fast, installed right.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={`tel:${PHONE_NUMBER}`}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 transition-all hover:-translate-y-1 active:translate-y-0"
            >
              <Phone size={22} />
              Call Now
            </a>
            <a 
              href="#quote"
              className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all hover:-translate-y-1 active:translate-y-0"
            >
              Schedule Service
              <ChevronRight size={22} />
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
            <div className="text-center">
              <div className="text-white font-bold text-2xl">15+</div>
              <div className="text-blue-200 text-xs uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="text-center border-x border-white/10">
              <div className="text-white font-bold text-2xl">5k+</div>
              <div className="text-blue-200 text-xs uppercase tracking-wider">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-white font-bold text-2xl">30-Day</div>
              <div className="text-blue-200 text-xs uppercase tracking-wider">Full Warranty</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:block relative"
        >
          <div className="bg-white p-8 rounded-3xl shadow-2xl relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-green-100 p-3 rounded-full">
                <Users className="text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Family Owned & Operated</h3>
                <p className="text-sm text-gray-500">Serving Tampa Bay since 2009</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-700">
                <CheckCircle2 className="text-blue-600" size={20} />
                <span>Rapid 2-3 Day Delivery</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <CheckCircle2 className="text-blue-600" size={20} />
                <span>Expert Installation Included</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <CheckCircle2 className="text-blue-600" size={20} />
                <span>Old Appliance Removal</span>
              </div>
            </div>
            <div className="mt-8 p-4 bg-blue-50 rounded-2xl flex items-center justify-between">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i+10}`} 
                    className="w-8 h-8 rounded-full border-2 border-white" 
                    alt="Customer"
                  />
                ))}
              </div>
              <div className="flex items-center gap-1">
                <Star className="text-red-500 fill-red-500" size={16} />
                <span className="font-bold text-blue-900">4.9/5</span>
                <span className="text-blue-600 text-sm">(200+ Reviews)</span>
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-red-600 rounded-full blur-3xl opacity-20" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-600 rounded-full blur-3xl opacity-20" />
        </motion.div>
      </div>
    </section>
  );
};

const TrustSection = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "30-Day Warranty",
      desc: "Every appliance we sell is backed by our comprehensive 30-day parts and labor warranty."
    },
    {
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      title: "Rapid Delivery",
      desc: "Fast 2-3 day delivery options across Tampa and surrounding areas."
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Certified Quality",
      desc: "Our technicians rigorously test every unit to ensure it meets our high performance standards."
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Expert Repair",
      desc: "Fast, reliable repair services for all major brands. We get your home back to normal."
    }
  ];

  return (
    <section className="py-20 bg-white" id="trust">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Why Choose Us</h2>
          <p className="text-3xl md:text-4xl font-extrabold text-gray-900">The Most Trusted Name in Tampa Appliances</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl transition-all"
            >
              <div className="mb-6">{f.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-blue-900 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to upgrade your home?</h3>
            <p className="text-blue-200">Visit our Tampa showroom today to see our latest inventory of refurbished washers, dryers, and fridges.</p>
          </div>
          <div className="flex gap-4">
            <a href={`tel:${PHONE_NUMBER}`} className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold transition-colors">
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Appliance Sales",
      desc: "Huge selection of refurbished washers, dryers, fridges, and stoves from top brands like Samsung, LG, and Whirlpool.",
      icon: <Truck className="w-10 h-10" />,
      image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=800",
      cta: "View Inventory"
    },
    {
      title: "Appliance Repair",
      desc: "Is your fridge not cooling or washer leaking? Our expert technicians provide fast, affordable repairs on all major brands.",
      icon: <Wrench className="w-10 h-10" />,
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800",
      cta: "Book Repair"
    },
    {
      title: "Delivery & Installation",
      desc: "Professional delivery and setup. We don't just drop it off; we make sure it's working perfectly before we leave.",
      icon: <Truck className="w-10 h-10" />,
      image: "https://images.unsplash.com/photo-1621905252507-b354bcadcabc?auto=format&fit=crop&q=80&w=800",
      cta: "Learn More"
    },
    {
      title: "Appliance Removal",
      desc: "Getting a new unit? We'll haul away your old, broken appliances for free when you purchase from us.",
      icon: <Trash2 className="w-10 h-10" />,
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800",
      cta: "Request Removal"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Our Services</h2>
          <p className="text-3xl md:text-4xl font-extrabold text-gray-900">Everything You Need for Your Home</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
              <div className="h-48 overflow-hidden relative">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-blue-600 text-white p-2 rounded-lg">
                  {s.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{s.desc}</p>
                <button className="w-full py-3 border-2 border-blue-600 text-blue-600 font-bold rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {s.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedProducts = () => {
  const products = [
    { name: "Samsung Front-Load Washer", price: "$349 - $499", condition: "Refurbished", img: "https://images.unsplash.com/photo-1626806819282-2c1dc61a0e05?auto=format&fit=crop&q=80&w=400" },
    { name: "Whirlpool Electric Dryer", price: "$299 - $399", condition: "Tested & Cleaned", img: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80&w=400" },
    { name: "LG French Door Fridge", price: "$599 - $899", condition: "Excellent", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400" },
    { name: "GE Electric Range/Stove", price: "$325 - $450", condition: "Refurbished", img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=400" }
  ];

  return (
    <section className="py-20 bg-white" id="inventory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Featured Inventory</h2>
            <p className="text-3xl md:text-4xl font-extrabold text-gray-900">Current Deals in Tampa</p>
          </div>
          <a href={`tel:${PHONE_NUMBER}`} className="text-blue-600 font-bold flex items-center gap-2 hover:underline">
            Call for current availability
            <ChevronRight size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 p-4 hover:shadow-lg transition-shadow">
              <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-gray-100">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full mb-2">
                {p.condition}
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{p.name}</h3>
              <p className="text-blue-600 font-bold text-lg mb-4">{p.price}</p>
              <a 
                href={`tel:${PHONE_NUMBER}`}
                className="block w-full text-center py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-blue-600 transition-colors"
              >
                Call for Availability
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { title: "Schedule Diagnostic", desc: "Book a technician for a $98 diagnostic. This fee is applied directly to your repair cost.", icon: <Phone className="w-6 h-6" /> },
    { title: "Choose Your Appliance", desc: "Visit our showroom or browse our current stock over the phone.", icon: <CheckCircle2 className="w-6 h-6" /> },
    { title: "Schedule Delivery", desc: "We offer rapid 2-3 day delivery across the Tampa Bay area.", icon: <Truck className="w-6 h-6" /> },
    { title: "Enjoy Reliability", desc: "Your appliance is installed and tested. You're covered by our 30-day warranty.", icon: <ShieldCheck className="w-6 h-6" /> }
  ];

  return (
    <section className="py-20 bg-blue-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4">How It Works</h2>
          <p className="text-3xl md:text-4xl font-extrabold">Getting Your Home Back to Normal is Easy</p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-800 -translate-y-1/2 z-0" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-red-600/20 rotate-3">
                  <div className="-rotate-3 text-white">{s.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SEOSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Serving Tampa & Surrounding Areas</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Searching for <strong>used appliances in Tampa</strong>? ABC Appliances & Services is your local destination for <strong>affordable washer and dryer Tampa</strong> deals. We specialize in <strong>refrigerator repair Tampa FL</strong> and serve customers in Brandon, Riverview, Town 'n' Country, and Lutz.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {['Tampa', 'Brandon', 'Riverview', 'Lutz', 'Wesley Chapel', 'Temple Terrace'].map(city => (
              <div key={city} className="flex items-center gap-2 text-gray-700 font-medium">
                <MapPin size={18} className="text-blue-600" />
                {city}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-2xl h-80 bg-gray-200 relative">
          <img 
            src="https://images.unsplash.com/photo-1516900557549-41557d405adf?auto=format&fit=crop&q=80&w=1000" 
            alt="Tampa Florida Skyline" 
            className="w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur p-6 rounded-2xl shadow-xl text-center">
              <MapPin className="text-blue-600 mx-auto mb-2" size={32} />
              <p className="font-bold text-gray-900">Visit Our Showroom</p>
              <p className="text-sm text-gray-600">1234 N Florida Ave, Tampa, FL 33602</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LeadForm = () => {
  return (
    <section className="py-20 bg-white" id="quote">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-50 rounded-3xl p-8 md:p-12 shadow-inner border border-blue-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Schedule a Diagnostic</h2>
            <p className="text-gray-600">Request a technician visit for just $98. <strong>The diagnostic fee is included in your final repair cost!</strong></p>
          </div>
          
          <form className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Full Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Phone Number</label>
              <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all" placeholder="(813) 000-0000" />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-bold text-gray-700">Service Needed</label>
              <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all appearance-none bg-white">
                <option>Appliance Purchase</option>
                <option>Repair Service</option>
                <option>Delivery & Installation</option>
                <option>Appliance Removal</option>
              </select>
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-bold text-gray-700">Message (Optional)</label>
              <textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all h-32" placeholder="Tell us about the appliance you need or the issue you're having..."></textarea>
            </div>
            <div className="md:col-span-2">
              <button className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-xl shadow-lg shadow-red-600/30 transition-all active:scale-95">
                Request Service Call
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Wrench className="text-white w-6 h-6" />
              </div>
              <span className="font-bold text-2xl tracking-tight">
                ABC <span className="text-red-600">Appliances</span>
              </span>
            </div>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              Tampa's most trusted source for high-quality refurbished appliances and expert repair services. Family owned and operated since 2009.
            </p>
            <div className="flex gap-4">
              {/* Social icons would go here */}
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <Users size={20} />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <Star size={20} />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#inventory" className="hover:text-white transition-colors">Inventory</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Repair Services</a></li>
              <li><a href="#trust" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#quote" className="hover:text-white transition-colors">Schedule Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-500 shrink-0" />
                <span>1234 N Florida Ave, Tampa, FL 33602</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-blue-500 shrink-0" />
                <a href={`tel:${PHONE_NUMBER}`} className="hover:text-white transition-colors">{PHONE_NUMBER}</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={20} className="text-blue-500 shrink-0" />
                <span>Mon-Sat: 9am - 6pm</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 {BUSINESS_NAME}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const StickyCallButton = () => {
  return (
    <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
      <a 
        href={`tel:${PHONE_NUMBER}`}
        className="bg-red-600 text-white w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-2xl shadow-red-600/40 animate-bounce-subtle"
      >
        <Phone size={24} />
        Call Now for Rapid Delivery Deals
      </a>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <Hero />
      
      {/* Urgency Banner */}
      <div className="bg-red-600 py-3 overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee gap-12 text-white font-bold uppercase tracking-widest text-sm">
          {[1,2,3,4,5].map(i => (
            <span key={i} className="flex items-center gap-2">
              <Clock size={16} />
              Limited Time Offer: $30 OFF any Washer/Dryer Set!
            </span>
          ))}
        </div>
      </div>

      <TrustSection />
      <Services />
      <FeaturedProducts />
      <Process />
      <SEOSection />
      
      {/* Final CTA Section */}
      <section className="py-20 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Don't Wait – Save Today!</h2>
          <p className="text-xl text-blue-100 mb-10">
            Our inventory moves fast. Call now to check availability or schedule a repair technician to your home today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${PHONE_NUMBER}`}
              className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-xl"
            >
              <Phone size={28} />
              {PHONE_NUMBER}
            </a>
          </div>
          <p className="mt-6 text-blue-200 font-semibold">
            Open Mon-Sat 9am - 6pm | Rapid Delivery Available
          </p>
        </div>
      </section>

      <LeadForm />
      <Footer />
      <StickyCallButton />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          width: fit-content;
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
      `}} />
    </div>
  );
}
