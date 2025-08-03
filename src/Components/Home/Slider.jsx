import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Sparkles } from 'lucide-react';

export default function Slider() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const slides = [
        {
            bg: '/bg1.png',
            title: 'Every Detail Speaks Premium',
            subtitle: 'Zanord accessories are designed with precision, blending minimalist beauty and durable performance for the modern bathroom.',
            accent: 'Premium'
        },
        {
            bg: '/bg2.png',
            title: 'Your Bathroom, Our Exclusive Touch',
            subtitle: 'From towel rods to soap dispensers, our SS 304 steel accessories deliver elegance, utility, and enduring style.',
            accent: 'Exclusive'
        },
        {
            bg: '/bg3.png',
            title: 'Accessories that Define Quality Living',
            subtitle: 'Our bathware combines modern aesthetics with unmatched durability to complement your evolving lifestyle.',
            accent: 'Quality'
        }
    ];

    const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
    const goToSlide = (index) => setActiveSlide(index);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative overflow-hidden bg-black">

            {/* Loading Screen */}
            {isLoading && (
                <div className="absolute inset-0 bg-black z-50 flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-16 h-16 border-4 border-[var(--brand-color)] border-t-transparent rounded-full animate-spin mb-4"></div>
                        <p className="text-[var(--brand-color)] text-lg font-semibold">Loading Experience...</p>
                    </div>
                </div>
            )}

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-[var(--brand-color)]/30 rounded-full animate-ping"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 2}s`
                        }}
                    />
                ))}
            </div>

            {/* Slides */}
            <div className="relative h-[80vh] w-full">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-1500 ${activeSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                    >
                        <div
                            className="relative h-full w-full bg-cover bg-center flex items-center justify-start text-white px-4 md:px-10"
                            style={{
                                backgroundImage: `url('${slide.bg}')`,
                                filter: activeSlide === index ? 'brightness(1)' : 'brightness(0.7)',
                                transition: 'filter 1.5s ease-out'
                            }}
                        >
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
                            </div>

                            {/* Decorative Shapes */}
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                <div className={`absolute w-32 h-32 border border-[var(--brand-color)]/20 rounded-full transition-all duration-2000 ${activeSlide === index ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
                                    style={{
                                        top: '20%',
                                        right: '10%',
                                        transitionDelay: '800ms'
                                    }}
                                >
                                    <div className="absolute inset-4 border border-[var(--brand-color)]/30 rounded-full animate-spin-slow"></div>
                                </div>
                                <div className={`absolute w-20 h-20 bg-[var(--brand-color)]/10 rounded-lg rotate-45 transition-all duration-1500 ${activeSlide === index ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
                                    style={{
                                        bottom: '30%',
                                        right: '15%',
                                        transitionDelay: '1200ms'
                                    }}
                                ></div>
                            </div>

                            {/* Slide Content */}
                            <div className="relative z-10 max-w-2xl text-left ms-[3%]">
                                <div className={`inline-flex items-center gap-2 mb-6 px-6 py-3 bg-[var(--brand-color)] text-black text-sm font-bold rounded-full transition-all duration-1000 backdrop-blur-sm border border-[var(--brand-color)]/50 ${activeSlide === index ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-20 opacity-0 scale-95'}`}
                                    style={{
                                        transitionDelay: activeSlide === index ? '300ms' : '0ms',
                                        boxShadow: '0 4px 20px rgba(253, 203, 46, 0.3)'
                                    }}
                                >
                                    <Star className="w-4 h-4" />
                                    {slide.accent}
                                    <Sparkles className="w-4 h-4" />
                                </div>

                                <h2 className={`heading-text text-3xl sm:text-5xl mb-6 font-black transition-all duration-1200 ${activeSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                                    style={{
                                        transitionDelay: activeSlide === index ? '500ms' : '0ms',
                                        textShadow: '3px 3px 6px rgba(0,0,0,0.7)',
                                        lineHeight: '1.1'
                                    }}
                                >
                                    <span
                                        className='heading-text'
                                        dangerouslySetInnerHTML={{
                                            __html: slide.title.replace(
                                                slide.accent,
                                                `<span class="heading-text text-[var(--brand-color)] relative">
                                                    ${slide.accent}
                                                    <span class="absolute -bottom-2 left-0 w-full h-1 bg-[var(--brand-color)] rounded animate-pulse"></span>
                                                </span>`
                                            ),
                                        }}
                                    />
                                </h2>

                                <p className={`text-[14px] md:text-[16px] lg:text-[18px] mb-8 leading-relaxed transition-all duration-1000 ${activeSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                                    style={{
                                        transitionDelay: activeSlide === index ? '700ms' : '0ms',
                                        textShadow: '1px 1px 3px rgba(0,0,0,0.5)'
                                    }}
                                >
                                    {slide.subtitle}
                                </p>

                                {/* Explore Button */}
                                <div className={`transition-all duration-1000 z-10 ${activeSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                                    style={{
                                        transitionDelay: activeSlide === index ? '900ms' : '0ms'
                                    }}
                                >
                                    <button className="relative px-6 py-4 sm:px-8 sm:py-4 font-bold bg-[var(--brand-color)] tracking-widest text-black hover:text-white overflow-hidden group text-sm sm:text-base rounded-2xl transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-[var(--brand-color)]/30 border-2 border-transparent hover:border-[var(--brand-color)]/50">
                                        <span className="absolute left-[-50px] top-0 h-full w-0 skew-x-[45deg] bg-black z-[-1] transition-all duration-1000 group-hover:w-[250%]"></span>
                                        <span className="relative z-10 flex items-center justify-center gap-3">
                                            Explore Collection
                                            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button onClick={prevSlide} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/60 hover:bg-[var(--brand-color)] rounded-full border-2 border-[var(--brand-color)] hover:border-white backdrop-blur-md transition-all duration-500 hover:scale-125 shadow-2xl flex items-center justify-center group"
                style={{ boxShadow: '0 8px 32px rgba(253, 203, 46, 0.4)' }}
            >
                <ChevronLeft className="w-7 h-7 text-[var(--brand-color)] group-hover:text-black transition-all duration-300" />
            </button>
            <button onClick={nextSlide} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/60 hover:bg-[var(--brand-color)] rounded-full border-2 border-[var(--brand-color)] hover:border-white backdrop-blur-md transition-all duration-500 hover:scale-125 shadow-2xl flex items-center justify-center group"
                style={{ boxShadow: '0 8px 32px rgba(253, 203, 46, 0.4)' }}
            >
                <ChevronRight className="w-7 h-7 text-[var(--brand-color)] group-hover:text-black transition-all duration-300" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`relative h-2 rounded-full transition-all duration-700 cursor-pointer group ${activeSlide === index ? 'w-12 bg-[var(--brand-color)]' : 'w-6 bg-white/40 hover:bg-white/70'}`}
                        style={{
                            boxShadow: activeSlide === index ? '0 0 20px var(--brand-color)' : 'none'
                        }}
                    >
                        {activeSlide === index && (
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse rounded-full"></div>
                        )}
                        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-[var(--brand-color)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            0{index + 1}
                        </span>
                    </button>
                ))}
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
                <div className="h-full bg-[var(--brand-color)] transition-all duration-6000 ease-linear"
                    style={{ width: '100%', animation: 'progress 6s infinite linear' }}
                ></div>
            </div>

            {/* Custom Animations */}
            <style jsx>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                @keyframes progress {
                    from { width: 0%; }
                    to { width: 100%; }
                }

                .animate-spin-slow {
                    animation: spin-slow 10s linear infinite;
                }
            `}</style>
        </div>
    );
}
