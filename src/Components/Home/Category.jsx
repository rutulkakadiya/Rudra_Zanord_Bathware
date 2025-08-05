import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Category() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);
    const imageRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        if (imageRef.current) {
            const moveX = (mousePos.x / window.innerWidth - 0.5) * -15;
            const moveY = (mousePos.y / window.innerHeight - 0.5) * -15;
            imageRef.current.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.02)`;
        }
    }, [mousePos]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const productItems = [
        { name: "Towel Rack", delay: "0ms" },
        { name: "Napkin Ring", delay: "100ms" },
        { name: "Soap Dish", delay: "200ms" },
        { name: "Paper Holder", delay: "300ms" },
        { name: "Liquid Dispenser", delay: "400ms" }
    ];

    return (
        <section
            ref={sectionRef}
            className="relative text-white py-16 px-4 sm:px-6 md:px-10 mt-[100px] overflow-hidden"
        >
            {/* Enhanced Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Main decorative blob with enhanced animation */}
                <div className={`absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-br from-[var(--brand-color)]/20 to-[var(--brand-color)]/5 rounded-full blur-3xl opacity-60 transform translate-x-[30%] -translate-y-[30%] transition-all duration-1000 ${isVisible ? 'animate-pulse scale-110' : 'scale-100'}`} />

                {/* Additional floating elements with staggered animations */}
                <div className={`absolute top-1/4 left-0 w-24 h-24 bg-[var(--brand-color)]/10 rounded-full blur-2xl transition-all duration-1000 ${isVisible ? 'animate-bounce opacity-100' : 'opacity-0'}`} style={{ animationDuration: '3s' }} />
                <div className={`absolute bottom-1/3 right-1/4 w-16 h-16 bg-[var(--brand-color)]/15 rounded-full blur-xl transition-all duration-1000 delay-300 ${isVisible ? 'animate-pulse opacity-100' : 'opacity-0'}`} style={{ animationDelay: '1s' }} />

                {/* Enhanced floating particles */}
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-[var(--brand-color)]/30 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
                <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-[var(--brand-color)]/40 rounded-full animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '2s' }} />

                {/* Animated decorative sparkles */}
                <div className={`absolute top-20 left-10 transition-all duration-1000 ${isVisible ? 'opacity-100 rotate-180' : 'opacity-0'}`}>
                    <Sparkles className="w-4 h-4 text-[var(--brand-color)]/30 animate-spin" style={{ animationDuration: '4s' }} />
                </div>
                <div className={`absolute top-1/3 right-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-110' : 'opacity-0 scale-75'}`}>
                    <Sparkles className="w-3 h-3 text-[var(--brand-color)]/40 animate-pulse" />
                </div>
                <div className={`absolute bottom-20 left-1/4 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 rotate-45' : 'opacity-0'}`}>
                    <Sparkles className="w-5 h-5 text-[var(--brand-color)]/25 animate-bounce" style={{ animationDuration: '2.5s' }} />
                </div>

                {/* Floating geometric shapes */}
                <div className="absolute top-32 right-32 w-8 h-8 border-2 border-[var(--brand-color)]/20 rotate-45 animate-spin" style={{ animationDuration: '8s' }} />
                <div className="absolute bottom-32 left-32 w-6 h-6 bg-[var(--brand-color)]/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="w-[95%] sm:w-[90%] mx-auto relative z-10">
                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Enhanced Text Content */}
                    <div className="space-y-6 order-2 sm:order-1" data-aos="fade-right" data-aos-duration="1500">
                        {/* Enhanced Badge */}
                        <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[var(--brand-color)]/10 to-[var(--brand-color)]/5 rounded-full border border-[var(--brand-color)]/20 backdrop-blur-sm transform transition-all duration-1000 hover:scale-105 hover:bg-gradient-to-r hover:from-[var(--brand-color)]/15 hover:to-[var(--brand-color)]/10 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                            <Star className="w-4 h-4 text-[var(--brand-color)]" />
                            <p className="text-[var(--brand-color)] text-xs sm:text-sm font-medium tracking-[2px] animate-pulse">
                                THE BEST, A LITTLE BETTER
                            </p>
                        </div>

                        {/* Enhanced Main Heading */}
                        <div className="overflow-hidden" data-aos="fade-right" data-aos-duration="1500">
                            <h3 className="heading-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text leading-tight transform transition-all duration-1000 cursor-default">
                                Our stunning <span className="heading-text text-[var(--brand-color)] drop-shadow-sm relative inline-block">
                                    bathroom
                                    <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[var(--brand-color)]/50 to-transparent transform scale-x-0 origin-left transition-transform duration-1000 group-hover:scale-x-100"></span>
                                </span> product options
                            </h3>
                        </div>

                        {/* Enhanced Description */}
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed hover:text-gray-700" data-aos="fade-right" data-aos-duration="1500">
                            Are you ready to transform your bathroom? We offer modern, smart and stylish bathroom products with focus on
                            <span className="font-semibold text-gray-800 hover:text-[var(--brand-color)] transition-colors duration-300 cursor-default"> comfort, sophistication, hygiene</span> and
                            <span className="font-semibold text-gray-800 hover:text-[var(--brand-color)] transition-colors duration-300 cursor-default"> durability</span>.
                        </p>

                        {/* Enhanced Product Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2" data-aos="fade-right" data-aos-duration="1500">
                            <ul className="space-y-1">
                                {productItems.slice(0, 3).map((item, index) => (
                                    <li
                                        key={index}
                                        className={`group flex items-center gap-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-[var(--brand-color)]/5 hover:to-transparent transition-all duration-300 cursor-pointer transform hover:translate-x-2 hover:scale-105 ${hoveredItem === index ? 'shadow-lg' : ''}`}
                                        style={{
                                            animationDelay: item.delay,
                                            transitionDelay: `${index * 100}ms`
                                        }}
                                        onMouseEnter={() => setHoveredItem(index)}
                                        onMouseLeave={() => setHoveredItem(null)}
                                    >
                                        <div className="w-8 h-8 bg-gradient-to-r from-[var(--brand-color)] to-[var(--brand-color)]/80 rounded-full flex items-center justify-center transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 shadow-lg group-hover:shadow-[var(--brand-color)]/30">
                                            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
                                        </div>
                                        <span className="text-lg text-gray-800 font-medium group-hover:text-black group-hover:font-semibold transition-all duration-300 relative">
                                            {item.name}
                                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--brand-color)] group-hover:w-full transition-all duration-300"></span>
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <ul className="space-y-1">
                                {productItems.slice(3).map((item, index) => (
                                    <li
                                        key={index + 3}
                                        className={`group flex items-center gap-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-[var(--brand-color)]/5 hover:to-transparent transition-all duration-300 cursor-pointer transform hover:translate-x-2 hover:scale-105 ${hoveredItem === index + 3 ? 'shadow-lg' : ''}`}
                                        style={{
                                            animationDelay: item.delay,
                                            transitionDelay: `${(index + 3) * 100}ms`
                                        }}
                                        onMouseEnter={() => setHoveredItem(index + 3)}
                                        onMouseLeave={() => setHoveredItem(null)}
                                    >
                                        <div className="w-8 h-8 bg-gradient-to-r from-[var(--brand-color)] to-[var(--brand-color)]/80 rounded-full flex items-center justify-center transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 shadow-lg group-hover:shadow-[var(--brand-color)]/30">
                                            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
                                        </div>
                                        <span className="text-lg text-gray-800 font-medium group-hover:text-black group-hover:font-semibold transition-all duration-300 relative">
                                            {item.name}
                                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--brand-color)] group-hover:w-full transition-all duration-300"></span>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Enhanced CTA Button */}
                        <div className={`transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`} data-aos="fade-right" data-aos-duration="1500">
                            <Link to={"/products"}>
                                <button className="relative px-5 py-3 sm:px-8 sm:py-4 font-bold bg-black tracking-widest text-white overflow-hidden group text-sm sm:text-base rounded-2xl transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-[var(--brand-color)]/30 border-2 border-transparent hover:border-[var(--brand-color)]/50 hover:-translate-y-1">
                                    <span className="absolute left-[-50px] top-0 h-full w-0 skew-x-[45deg] bg-[var(--brand-color)] z-[-1] transition-all duration-1000 group-hover:w-[250%]"></span>

                                    {/* Animated shine effect */}
                                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>

                                    <span className="relative z-10 flex items-center justify-center gap-3">
                                        Learn More
                                        <svg className="w-5 h-5 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>

                                    {/* Ripple effect */}
                                    <span className="absolute inset-0 rounded-2xl bg-[var(--brand-color)]/20 scale-0 group-active:scale-100 transition-transform duration-200"></span>
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Enhanced Image Section */}
                    <div className={`flex justify-center order-1 sm:order-2 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`} data-aos="fade-left" data-aos-duration="1500">
                        <div className="relative group">
                            {/* Floating frame effect */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-[var(--brand-color)]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

                            {/* Image glow effect */}
                            <div className="absolute -inset-2 bg-gradient-to-r from-[var(--brand-color)]/20 via-transparent to-[var(--brand-color)]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <img
                                ref={imageRef}
                                src="/image1.png"
                                alt="Luxury Bathroom Products"
                                className="w-full h-[600px] rounded-xl object-cover transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-[var(--brand-color)]/20 relative z-10 hover:brightness-110"
                            />

                            {/* Floating overlay elements */}
                            <div className="absolute top-4 right-4 w-3 h-3 bg-[var(--brand-color)] rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500"></div>
                            <div className="absolute bottom-4 left-4 w-2 h-2 bg-[var(--brand-color)]/70 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-500" style={{ animationDelay: '0.5s' }}></div>
                        </div>
                    </div>
                </div>

                {/* Enhanced Decorative Dots */}
                <div className={`absolute bottom-8 right-8 hidden sm:block transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                    <div className="flex flex-col space-y-3">
                        {[...Array(4)].map((_, i) => (
                            <div
                                key={i}
                                className="relative group cursor-pointer"
                            >
                                <div
                                    className="w-3 h-3 bg-gradient-to-r from-[var(--brand-color)] to-[var(--brand-color)]/70 rounded-full animate-pulse shadow-lg transform group-hover:scale-150 transition-transform duration-300"
                                    style={{
                                        animationDelay: `${i * 0.3}s`,
                                        animationDuration: '2s'
                                    }}
                                ></div>
                                <div
                                    className="absolute inset-0 w-3 h-3 bg-[var(--brand-color)]/30 rounded-full animate-ping"
                                    style={{
                                        animationDelay: `${i * 0.3 + 1}s`,
                                        animationDuration: '3s'
                                    }}
                                ></div>

                                {/* Hover ring effect */}
                                <div className="absolute inset-0 w-6 h-6 -translate-x-1.5 -translate-y-1.5 border border-[var(--brand-color)]/30 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Additional floating elements for enhanced ambiance */}
                <div className="absolute top-1/2 left-4 w-1 h-16 bg-gradient-to-b from-[var(--brand-color)]/20 to-transparent opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-1/4 right-12 w-12 h-1 bg-gradient-to-r from-[var(--brand-color)]/20 to-transparent opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                
                @keyframes slideInUp {
                    from {
                        transform: translateY(30px);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }

                @keyframes fadeInScale {
                    from {
                        transform: scale(0.8);
                        opacity: 0;
                    }
                    to {
                        transform: scale(1);
                        opacity: 1;
                    }
                }

                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }

                .animate-slideInUp {
                    animation: slideInUp 0.8s ease-out forwards;
                }

                .animate-fadeInScale {
                    animation: fadeInScale 0.6s ease-out forwards;
                }
            `}</style>
        </section>
    );
}