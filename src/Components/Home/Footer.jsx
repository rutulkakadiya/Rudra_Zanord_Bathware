import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ChevronUp } from 'lucide-react';

export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const currentYear = new Date().getFullYear();

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    const footerLinks = {
        company: [
            { name: 'Home', href: '#' },
            { name: 'Company Profile', href: '#' },
            { name: 'Products', href: '#' },
            { name: 'Gallery', href: '#' },
            { name: 'E-Brochure', href: '#' },
            { name: 'Contact Us', href: '#' },
        ]
    };

    const socialLinks = [
        { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
        { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
        { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter', color: 'hover:bg-blue-400' },
        { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-700' }
    ];

    return (
        <>
            <footer 
                className="relative bg-black text-white mt-[100px] overflow-hidden"
                onMouseMove={handleMouseMove}
            >
                {/* Background Circles */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-[#FDCB2E] rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-10 right-20 w-96 h-96 bg-[#FDCB2E] rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-[#FDCB2E] rounded-full blur-2xl animate-bounce delay-500"></div>
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-[#FDCB2E] rounded-full opacity-30"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                                animationDelay: `${Math.random() * 2}s`
                            }}
                        />
                    ))}
                </div>

                {/* Mouse Following Glow */}
                <div
                    className="absolute w-96 h-96 bg-[#FDCB2E] rounded-full opacity-5 blur-3xl pointer-events-none transition-all duration-300 ease-out"
                    style={{
                        transform: `translate(${mousePosition.x - 192}px, ${mousePosition.y - 192}px)`
                    }}
                />

                {/* Top Overlay */}
                <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-black/20" />

                {/* Main Footer Content */}
                <div className="relative z-10 w-[95%] mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {/* Company Info */}
                        <div className="lg:col-span-2 group">
                            <div className="flex items-center space-x-3 mb-6 transform transition-all duration-500 hover:scale-105">
                               <img className='h-[70px]' src="/footer_logo.png" alt="" />
                            </div>
                            <p className="text-gray-300 mb-6 leading-relaxed transform transition-all duration-500 hover:text-white">
                                Transforming bathrooms into luxurious sanctuaries with premium accessories that combine style, functionality, and durability. Your trusted partner in bathroom excellence.
                            </p>
                        </div>

                        {/* Address Section */}
                        <div className="group">
                            <h3 className="heading-text text-lg font-semibold mb-6 text-[#FDCB2E] relative inline-block">
                                Address
                                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FDCB2E] group-hover:w-full transition-all duration-500"></div>
                            </h3>
                            <div className="space-y-4">
                                {[{ icon: Phone, text: '+91 12345 67890' },
                                  { icon: Mail, text: 'zanordbath@gmail.com' },
                                  { icon: MapPin, text: 'Rajkot, Gujarat' }].map((item, index) => (
                                    <div key={index} className="flex items-center space-x-3 group/item transform transition-all duration-300 hover:translate-x-2">
                                        <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover/item:bg-[#FDCB2E] group-hover/item:text-black transition-all duration-300">
                                            <item.icon className="w-5 h-5 text-[#FDCB2E] group-hover/item:text-black" />
                                        </div>
                                        <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">
                                            {item.text}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="group">
                            <h3 className="heading-text text-lg font-semibold mb-6 text-[#FDCB2E] relative inline-block">
                                Quick Links
                                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FDCB2E] group-hover:w-full transition-all duration-500"></div>
                            </h3>
                            <ul className="space-y-3">
                                {footerLinks.company.map((link, index) => (
                                    <li key={link.name} className="transform transition-all duration-300 hover:translate-x-2" style={{ animationDelay: `${index * 100}ms` }}>
                                        <a
                                            href={link.href}
                                            className="text-gray-300 hover:text-[#FDCB2E] transition-all duration-300 relative group/link flex items-center"
                                        >
                                            <span className="w-0 h-0.5 bg-[#FDCB2E] group-hover/link:w-4 transition-all duration-300 mr-0 group-hover/link:mr-2"></span>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Follow Us */}
                        <div className="group">
                            <h3 className="heading-text text-lg font-semibold mb-6 text-[#FDCB2E] relative inline-block">
                                Follow Us
                                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FDCB2E] group-hover:w-full transition-all duration-500"></div>
                            </h3>
                            <div className="flex space-x-3">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        className={`w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${social.color} shadow-lg hover:shadow-xl`}
                                        aria-label={social.label}
                                        style={{ animationDelay: `${index * 150}ms` }}
                                    >
                                        <div className="transform transition-transform duration-300 hover:rotate-12">
                                            {social.icon}
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="relative z-10 border-t border-gray-800/50 backdrop-blur-sm">
                    <div className="w-[95%] mx-auto px-6 py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <div className="text-gray-400 text-sm transform transition-all duration-300 hover:text-white">
                                © {currentYear} Zanord Bathware. All rights reserved.
                            </div>
                            <div className="text-sm text-gray-400">
                                <p className="transform transition-all duration-300 hover:text-white">
                                    Developed and Designed By{' '}
                                    <span className="text-[#FDCB2E] font-semibold hover:text-yellow-300 transition-colors duration-300 cursor-pointer">
                                        <a target='_blank' href="https://www.rudrabranding.com">Rudra Branding</a>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Back to Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`fixed bottom-[13%] right-4 w-14 h-14 bg-gradient-to-r from-[#FDCB2E] to-yellow-400 text-black rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 z-50 transform ${
                    isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-0'
                } hover:scale-110 hover:shadow-[0_0_30px_rgba(253,203,46,0.5)] group`}
                aria-label="Back to top"
            >
                <ChevronUp className="w-6 h-6 transform transition-transform duration-300 group-hover:-translate-y-1" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FDCB2E] to-yellow-400 opacity-0 group-hover:opacity-20 animate-pulse"></div>
            </button>
        </>
    );
}
