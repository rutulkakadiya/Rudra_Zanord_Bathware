import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Star, Sparkles } from 'lucide-react';
import Header from '../Common Components/Header';
import ContactUsImage from '../../../public/contactUs.json';
import Lottie from 'lottie-react';
import Footer from '../Common Components/Footer';
import Whatsapp from '../Common Components/Whatsapp';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isVisible, setIsVisible] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    const contactInfo = [
        {
            icon: Phone,
            title: 'Phone',
            info: '+91 12345 67890',
            subInfo: 'Call Us Anytime'
        },
        {
            icon: Mail,
            title: 'Email',
            info: 'zanordbath@gmail.com',
            subInfo: 'Send Us a Message'
        },
        {
            icon: MapPin,
            title: 'Address',
            info: 'Rajkot',
            subInfo: 'Gujarat'
        },
        {
            icon: Clock,
            title: 'Business Hours',
            info: 'Mon - Sat: 10 AM - 8 PM',
            subInfo: 'Sunday: 12 PM - 6 PM'
        }
    ];

    const FloatingElement = ({ delay, size, position }) => (
        <div
            className={`absolute ${size} bg-[var(--brand-color)] rounded-full opacity-10 animate-bounce hidden sm:block`}
            style={{
                ...position,
                animationDelay: `${delay}s`,
                animationDuration: '3s',
            }}
        />
    );

    const GeometricShape = ({ className, delay }) => (
        <div
            className={`absolute border-2 border-black opacity-5 ${className} hidden md:block`}
            style={{
                animation: `spin ${20 + delay}s linear infinite`,
                animationDelay: `${delay}s`,
            }}
        />
    );

    return (
        <div className="relative overflow-hidden">
            <Header />
            <Whatsapp />

            <FloatingElement
                delay={0}
                size="w-12 h-12 sm:w-16 h-16"
                position={{ top: '10%', left: '5%' }}
            />
            <FloatingElement
                delay={1}
                size="w-16 h-16 sm:w-20 h-20"
                position={{ top: '20%', right: '5%' }}
            />
            <FloatingElement
                delay={2}
                size="w-10 h-10 sm:w-12 h-12"
                position={{ bottom: '20%', left: '10%' }}
            />
            <FloatingElement
                delay={0.5}
                size="w-14 h-14 sm:w-24 h-24"
                position={{ bottom: '10%', right: '5%' }}
            />

            <GeometricShape
                className="w-24 h-24 sm:w-32 sm:h-32 top-[25%] right-10 sm:right-20 transform rotate-45"
                delay={0}
            />
            <GeometricShape
                className="w-20 h-20 sm:w-24 sm:h-24 bottom-24 sm:bottom-32 left-8 sm:left-16 rounded-full"
                delay={3}
            />

            <div className="text-center mt-8 sm:mt-12 md:mt-16">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-6 sm:mb-8" data-aos="fade-up" data-aos-duration="1500">
                    <Link to={"/"}>Home</Link>
                    <span>/</span>
                    <span className="text-black font-medium">Contact Us</span>
                </div>

                <h1 className="heading-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-4 sm:mb-6 relative" data-aos="fade-up" data-aos-duration="1500">
                    Contact <span className='heading-text text-[var(--brand-color)]'>Us</span>
                    <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4">
                        <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--brand-color)] animate-pulse" />
                    </div>
                </h1>

                <div className="flex items-center justify-center gap-4 mt-6 sm:mt-8">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-[var(--brand-color)] transform rotate-45 animate-spin"
                        style={{ animationDuration: '4s' }} />
                    <div className="flex gap-2">
                        {[0, 1, 2].map((i) => (
                            <div
                                key={i}
                                className="w-2 h-2 sm:w-3 sm:h-3 bg-[var(--brand-color)] rounded-full animate-pulse"
                                style={{ animationDelay: `${i * 0.2}s` }}
                            />
                        ))}
                    </div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-[var(--brand-color)] transform rotate-45 animate-spin"
                        style={{ animationDuration: '4s', animationDirection: 'reverse' }} />
                </div>
            </div>

            <div className="min-h-screen mt-8 sm:mt-12 md:mt-16 relative overflow-hidden">
                <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 bg-[var(--brand-color)] rounded-full opacity-20 animate-bounce hidden sm:block"></div>
                <div className="absolute top-20 sm:top-40 right-5 sm:right-20 w-10 h-10 sm:w-16 sm:h-16 bg-black rounded-full opacity-10 animate-pulse hidden sm:block"></div>
                <div className="absolute bottom-20 sm:bottom-40 left-5 sm:left-20 w-8 h-8 sm:w-12 sm:h-12 bg-[var(--brand-color)] rounded-full opacity-30 animate-ping hidden sm:block"></div>

                <div className="container px-4 mx-auto py-8 sm:py-12 w-[95%] sm:w-[90%]">
                    <div className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000`} data-aos="fade-up" data-aos-duration="1500">
                        <div className="flex items-center justify-center mb-4 sm:mb-6">
                            <Sparkles className="text-[var(--brand-color)] w-6 h-6 sm:w-8 sm:h-8 mr-2 animate-spin" />
                            <h1 className="heading-text text-3xl sm:text-4xl md:text-5xl font-bold text-black">
                                Get In <span className="heading-text text-[var(--brand-color)]">Touch</span>
                            </h1>
                            <Sparkles className="text-[var(--brand-color)] w-6 h-6 sm:w-8 sm:h-8 ml-2 animate-spin" />
                        </div>
                        <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-black via-[var(--brand-color)] to-black mx-auto rounded-full"></div>
                        <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-4 sm:mt-6 max-w-xl sm:max-w-2xl mx-auto">
                            Premium accessories that define your style. Get in touch with us for the finest collection.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 w-full mx-auto">
                        <div className={`transition-all duration-1000 delay-300`}>
                            <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-gray-100 hover:shadow-3xl transition-all duration-300">
                                <div className="flex items-center mb-6 sm:mb-8" data-aos="fade-right" data-aos-duration="1500">
                                    <div className="bg-[var(--brand-color)] p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
                                        <Send className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                                    </div>
                                    <h2 className="heading-text text-2xl sm:text-3xl font-bold text-black">Send Us a Message</h2>
                                </div>

                                {submitted && (
                                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6 animate-pulse">
                                        <div className="flex items-center">
                                            <Star className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                            Thank you! Your message has been sent successfully.
                                        </div>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6" data-aos="fade-right" data-aos-duration="1500">
                                        <div className="group">
                                            <label className="block text-black font-medium mb-2 text-sm sm:text-base">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:border-[var(--brand-color)] focus:outline-none transition-all duration-300 group-hover:border-gray-300"
                                                placeholder="Enter your name"
                                            />
                                        </div>
                                        <div className="group" data-aos="fade-right" data-aos-duration="1500">
                                            <label className="block text-black font-medium mb-2 text-sm sm:text-base">Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:border-[var(--brand-color)] focus:outline-none transition-all duration-300 group-hover:border-gray-300"
                                                placeholder="Enter Phone Number"
                                            />
                                        </div>
                                    </div>

                                    <div className="group" data-aos="fade-right" data-aos-duration="1500">
                                        <label className="block text-black font-medium mb-2 text-sm sm:text-base">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:border-[var(--brand-color)] focus:outline-none transition-all duration-300 group-hover:border-gray-300"
                                            placeholder="your@email.com"
                                        />
                                    </div>

                                    <div className="group" data-aos="fade-right" data-aos-duration="1500">
                                        <label className="block text-black font-medium mb-2 text-sm sm:text-base">Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={4}
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:border-[var(--brand-color)] focus:outline-none transition-all duration-300 group-hover:border-gray-300 resize-none"
                                            placeholder="Tell us about your accessory needs..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-black text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center group"
                                        data-aos="fade-right" data-aos-duration="1500"
                                    >
                                        <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div data-aos="fade-left" data-aos-duration="1500">
                            <Lottie animationData={ContactUsImage} loop={true} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container px-4 mx-auto py-8 sm:py-12 w-[95%] sm:w-[90%]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-12 w-full mx-auto">
                    <div className={`transition-all lg:col-span-4`} data-aos="fade-right" data-aos-duration="1500">
                        <div className="space-y-6">
                            <h2 className="heading-text text-2xl sm:text-3xl font-bold text-black mb-6 sm:mb-8 flex items-center">
                                <div className="bg-[var(--brand-color)] p-2 sm:p-3 rounded-full mr-3 sm:mr-4 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                                </div>
                                Contact Information
                            </h2>

                            {contactInfo.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] border border-gray-100 group cursor-pointer relative overflow-hidden"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                    data-aos="fade-right" data-aos-duration="1500"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-color)]/5 to-[var(--brand-color)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="flex items-start relative z-10">
                                        <div className="bg-gradient-to-br from-[var(--brand-color)] to-[var(--brand-color)] p-2 sm:p-3 rounded-full mr-3 sm:mr-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-md group-hover:shadow-xl">
                                            <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-black group-hover:scale-110 transition-transform duration-300" />
                                        </div>
                                        <div className="flex-1 group-hover:translate-x-2 transition-transform duration-300">
                                            <h3 className="heading-text font-bold text-black text-base sm:text-lg mb-1 group-hover:text-gray-900 transition-colors duration-300">{item.title}</h3>
                                            <p className="text-gray-800 font-medium group-hover:text-black transition-colors duration-300 text-sm sm:text-base">{item.info}</p>
                                            <p className="text-gray-600 text-xs sm:text-sm group-hover:text-gray-700 transition-colors duration-300">{item.subInfo}</p>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[var(--brand-color)] to-[var(--brand-color)] group-hover:w-full transition-all duration-500"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="shadow-lg lg:col-span-8 h-[50vh] sm:h-[60vh] lg:h-[85vh] flex justify-center items-center w-full order-1 lg:order-2 mt-6 sm:mt-8"
                        data-aos="fade-left" data-aos-duration="1500">
                        <iframe
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBkn10cBeoFz5AGnJ5gyabgpVHZGQfH7qE&q=Zanord Bathroom Accessories"
                            width="100%"
                            height="100%"
                            style={{ border: 0, borderRadius: "15px" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ContactUs;