import React, { useEffect, useRef, useState } from 'react';
import { Menu, X, Scissors, Zap, Palette, Crown, Facebook, Instagram, Twitter, MapPin, Phone, Clock, Mail } from 'lucide-react';

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    {
      icon: <Scissors className="h-12 w-12" />,
      title: "Classic Haircut",
      description: "Traditional and modern cuts tailored to your style and face shape.",
      price: "$35",
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Premium Shave",
      description: "Hot towel treatment with premium products for the smoothest shave.",
      price: "$25",
    },
    {
      icon: <Palette className="h-12 w-12" />,
      title: "Beard Styling",
      description: "Expert beard trimming and styling to complement your look.",
      price: "$20",
    },
    {
      icon: <Crown className="h-12 w-12" />,
      title: "VIP Package",
      description: "Complete grooming experience including cut, shave, and styling.",
      price: "$70",
    },
  ];

  const images = [
    "https://images.unsplash.com/photo-1647140655214-e4a2d914971f?q=80&w=765&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=687&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1589985494639-69e60c82cab2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  ];

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      details: "123 Main Street, Downtown City, NY 10001",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "info@nourbarbershop.com",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Hours",
      details: "Mon-Sat: 9AM-8PM, Sun: 10AM-6PM",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Scissors className="h-8 w-8 text-amber-500" />
              <span className="text-xl font-bold text-white">NOUR BARBERSHOP</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-300 hover:text-amber-500 px-3 py-2 text-sm font-medium transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Book Appointment Button */}
            <div className="hidden md:block">
              <button className="bg-gradient-to-r from-amber-500 to-amber-600 text-black px-6 py-2 rounded-full font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105">
                Book Now
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div ref={menuRef} className="md:hidden bg-black/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-amber-500 block px-3 py-2 text-base font-medium transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full mt-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black px-6 py-2 rounded-full font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-300">
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
            alt="Barbershop Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            PREMIUM
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              BARBERSHOP
            </span>
            EXPERIENCE
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Where tradition meets modern style. Experience the finest in men's grooming 
            with our expert barbers and premium services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={() => {document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });}} className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 text-black px-8 py-4 rounded-full font-bold text-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Book Appointment
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-amber-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-amber-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Professional grooming services designed to make you look and feel your best
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-black/50 backdrop-blur-sm p-8 rounded-2xl border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="text-amber-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{service.description}</p>
                <div className="text-2xl font-bold text-amber-500">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                About Nour Barbershop
              </h2>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                Established with a passion for traditional barbering and modern style, 
                Nour Barbershop has been serving the community for over a decade. Our 
                skilled barbers combine time-honored techniques with contemporary trends 
                to deliver exceptional grooming experiences.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                We believe that a great haircut is more than just a service – it's an 
                art form that boosts confidence and expresses personality. Every client 
                receives personalized attention in our comfortable, welcoming environment.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-500 mb-2">10+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-500 mb-2">5000+</div>
                  <div className="text-gray-400">Happy Clients</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Master Barber"
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our Work
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Take a look at some of our finest work and transformations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-2xl aspect-square cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-lg font-semibold">View Details</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Visit Us Today
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready for a premium grooming experience? Get in touch with us to book your appointment
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-amber-500 mt-1">{info.icon}</div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                      <p className="text-gray-400">{info.details}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 text-black px-8 py-4 rounded-full font-bold text-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105">
                  Book Your Appointment
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-900/50 p-8 rounded-2xl border border-amber-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors"
                />
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-black px-6 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-amber-500/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Scissors className="h-8 w-8 text-amber-500" />
                <span className="text-xl font-bold text-white">NOUR BARBERSHOP</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Premium barbershop experience where tradition meets modern style. 
                Your satisfaction is our commitment.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-6 w-6 text-gray-400 hover:text-amber-500 cursor-pointer transition-colors" />
                <Instagram className="h-6 w-6 text-gray-400 hover:text-amber-500 cursor-pointer transition-colors" />
                <Twitter className="h-6 w-6 text-gray-400 hover:text-amber-500 cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-amber-500 transition-colors">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-amber-500 transition-colors">Services</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-amber-500 transition-colors">About</a></li>
                <li><a href="#gallery" className="text-gray-400 hover:text-amber-500 transition-colors">Gallery</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-amber-500 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>123 Main Street</li>
                <li>Downtown City, NY 10001</li>
                <li>+1 (555) 123-4567</li>
                <li>info@nourbarbershop.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Nour Barbershop. All rights reserved. | Crafted with precision and style.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;