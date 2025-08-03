import React, { useState, useEffect, useRef } from 'react';

export default function About() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const imageRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        if (imageRef.current) {
            const moveX = (mousePos.x / window.innerWidth - 0.5) * -25;
            const moveY = (mousePos.y / window.innerHeight - 0.5) * -25;
            imageRef.current.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05) rotate(${moveX * 0.02}deg)`;
        }
    }, [mousePos]);

    return (
        <section className="relative text-white py-12 px-4 sm:px-6 md:px-10 mt-[100px] overflow-hidden bg-white">
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-[var(--brand-color)]/20 rounded-full blur-3xl opacity-60 transform translate-x-[30%] -translate-y-[30%] animate-pulse" />
            <div className="absolute bottom-10 left-10 w-40 h-40 sm:w-56 sm:h-56 bg-[var(--brand-color)]/15 rounded-full blur-2xl opacity-40 animate-pulse" />
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[var(--brand-color)]/10 rounded-full blur-xl opacity-50 animate-pulse" />

            <div className="absolute top-20 left-20 w-4 h-4 bg-[var(--brand-color)]/30 rotate-45 animate-bounce" />
            <div className="absolute bottom-32 right-32 w-6 h-6 bg-[var(--brand-color)]/20 rotate-45 animate-bounce" />
            <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-[var(--brand-color)]/40 rounded-full animate-ping" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-block mb-6 transition-all duration-1000 transform">
                        <span className="px-6 py-3 bg-[var(--brand-color)]/10 backdrop-blur-sm rounded-full text-[var(--brand-color)] text-sm font-semibold tracking-wider border-2 border-[var(--brand-color)]/20 hover:bg-[var(--brand-color)]/20 transition-all duration-300 hover:scale-105" data-aos="fade-up" data-aos-duration="1500">
                            ✨ DISCOVER OUR STORY
                        </span>
                    </div>

                    <h2 className="heading-text text-black font-bold text-3xl sm:text-6xl lg:text-7xl mb-6 transition-all duration-1000 delay-200 transform" data-aos="fade-up" data-aos-duration="1500">
                        About{' '}
                        <span className='text-[var(--brand-color)] relative inline-block'>
                            <span className="absolute inset-0 bg-[var(--brand-color)]/20 blur-lg animate-pulse"></span>
                            <span className="heading-text relative">Us</span>
                        </span>
                    </h2>

                    <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-black/80 leading-relaxed transition-all duration-1000" data-aos="fade-up" data-aos-duration="1500">
                        At Zanord, we redefine bathroom luxury with innovative designs and unparalleled quality.
                    </p>

                    <div className="w-24 h-1 bg-[var(--brand-color)] mx-auto mt-6 rounded-full transition-all duration-1000 delay-600 transform" data-aos="fade-up" data-aos-duration="1500" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
                    <div className="flex justify-center" data-aos="fade-right" data-aos-duration="1500">
                        <div className="relative group">
                            <div className="absolute -inset-6 bg-[var(--brand-color)]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                            <div className="absolute -inset-4 bg-[var(--brand-color)]/30 rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-all duration-500" />

                            <div className="relative flex justify-center p-3 rounded-3xl hover:shadow-[var(--brand-color)]/20 hover:shadow-3xl transition-all duration-700 group-hover:scale-105">
                                <img
                                    ref={imageRef}
                                    src="/about_us.png"
                                    alt="About Zanord"
                                    className="w-full rounded-2xl max-w-[90%] sm:max-w-[80%] md:max-w-[450px] h-full object-contain transition-all duration-700 group-hover:brightness-110"
                                    style={{ borderRadius: "200px 200px 0px 0px" }}
                                />
                                <div className="absolute -top-4 -right-4 w-8 h-8 bg-[var(--brand-color)] rounded-full animate-bounce shadow-lg" />
                                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-[var(--brand-color)]/70 rounded-full animate-pulse" />
                                <div className="absolute top-1/4 -left-6 w-4 h-4 bg-[var(--brand-color)]/50 rotate-45 animate-spin" style={{ animationDuration: '3s' }} />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 sm:space-y-8 transition-all duration-1000 delay-900 transform">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 mb-6" data-aos="fade-left" data-aos-duration="1500">
                                <div className="w-16 h-1 bg-[var(--brand-color)] rounded-full" />
                                <span className="text-[var(--brand-color)] text-sm sm:text-base tracking-[4px] font-bold animate-pulse">
                                    WELCOME TO COMPANY
                                </span>
                                <div className="w-8 h-1 bg-[var(--brand-color)]/50 rounded-full" />
                            </div>

                            <h3 className="heading-text font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black mb-4 leading-tight transition-colors duration-300" data-aos="fade-left" data-aos-duration="1500">
                                Our Story - <span className='heading-text text-[var(--brand-color)]'>Zanord</span> Bath Accessories
                            </h3>
                        </div>

                        <div className="space-y-6 text-black/90">
                            {[
                                "At Zanord, we believe that simplicity reveals the pure beauty of life. As one of India's leading manufacturers of premium bathware products, we specialize in crafting high-quality bathroom accessories that combine elegant design with long-lasting durability.",
                                "Our product line, made from SS 304 stainless steel, includes towel rods, soap dispensers, paper holders, and corner shelves — all designed to bring functionality and finesse into your everyday spaces.",
                                "Whether it's our sleek chrome designs or luxurious PVD finishes in gold, rose gold, and matte black, we strive to offer versatile solutions that suit diverse tastes and transform bathrooms into spaces of comfort and style."
                            ].map((text, index) => {
                                const updatedText = text.replace(
                                    /Zanord/,
                                    `<span class="text-[var(--brand-color)] font-semibold">Zanord</span>`
                                );
                                return (
                                    <div
                                        key={index}
                                        className="relative p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl hover:bg-white/90 transition-all duration-500 border-l-4 border-[var(--brand-color)] group cursor-pointer"
                                        data-aos="fade-left" data-aos-duration="1500"
                                    >
                                        <p
                                            className="text-sm sm:text-base leading-relaxed group-hover:text-black transition-colors duration-300"
                                            dangerouslySetInnerHTML={{ __html: updatedText }}
                                        />
                                        <div className="absolute top-4 right-4 w-2 h-2 bg-[var(--brand-color)] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                );
                            })}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-6" data-aos="fade-left" data-aos-duration="1500">
                            <button className="relative px-6 py-4 sm:px-8 sm:py-4 font-bold bg-black tracking-widest text-white overflow-hidden group text-sm sm:text-base rounded-2xl transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-[var(--brand-color)]/30 border-2 border-transparent hover:border-[var(--brand-color)]/50">
                                <span className="absolute left-[-50px] top-0 h-full w-0 skew-x-[45deg] bg-[var(--brand-color)] z-[-1] transition-all duration-1000 group-hover:w-[250%]"></span>
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    Learn More
                                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </button>


                            <button className="px-6 py-4 sm:px-8 sm:py-4 font-bold text-[var(--brand-color)] border-2 border-[var(--brand-color)] rounded-2xl hover:bg-[var(--brand-color)] hover:text-white transition-all duration-500 hover:scale-105 hover:shadow-lg group text-sm sm:text-base">
                                <span className="flex items-center justify-center gap-3">
                                    View Products
                                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 right-8 hidden sm:block">
                    <div className="flex flex-col space-y-3">
                        {[...Array(4)].map((_, i) => (
                            <div
                                key={i}
                                className="w-3 h-3 bg-[var(--brand-color)] rounded-full animate-pulse hover:scale-150 transition-transform duration-300 cursor-pointer"
                            />
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}
