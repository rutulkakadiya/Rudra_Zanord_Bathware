import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Slider() {
    const [activeSlide, setActiveSlide] = useState(0);

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

    const nextSlide = () => {
        setActiveSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setActiveSlide(index);
    };

    // Auto-play functionality
    React.useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative overflow-hidden">
            {/* Animated background accent */}
            <div
                className="absolute top-0 left-0 w-full h-2 transition-all duration-1000 ease-out z-10"
                style={{
                    background: `linear-gradient(90deg, #FDCB2E ${activeSlide * 33.33}%, transparent ${activeSlide * 33.33 + 33.33}%)`
                }}
            ></div>

            {/* Slider Container */}
            <div className="relative h-[80vh] w-full">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1200 ${activeSlide === index ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <div
                            className="relative h-full w-full bg-cover bg-center flex items-center justify-start text-white px-4 md:px-10"
                            style={{
                                backgroundImage: `url('${slide.bg}')`,
                            }}
                        >
                            {/* Dynamic overlay with gradient */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>

                            {/* Content with enhanced animations */}
                            <div className="relative z-10 max-w-xl text-left ms-[3%]">
                                {/* Accent badge */}
                                <div
                                    className={`inline-block mb-4 px-4 py-2 bg-[#FDCB2E] text-black text-sm font-semibold rounded-full transition-all duration-700 ${activeSlide === index ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                                        }`}
                                    style={{
                                        transitionDelay: activeSlide === index ? '300ms' : '0ms'
                                    }}
                                >
                                    {slide.accent}
                                </div>

                                {/* Main heading with stagger animation */}
                                <h2
                                    className={`heading-text text-3xl md:text-5xl mb-4 transition-all duration-800 ${activeSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                        }`}
                                    style={{
                                        transitionDelay: activeSlide === index ? '500ms' : '0ms',
                                        textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                                    }}
                                >
                                    <span
                                        className='heading-text font-bold'
                                        dangerouslySetInnerHTML={{
                                            __html: slide.title.replace(
                                                slide.accent,
                                                `<span class="text-[#FDCB2E]">${slide.accent}</span>`
                                            ),
                                        }}
                                    />
                                </h2>

                                {/* Subtitle animation */}
                                <p
                                    className={`text-[16px] md:text-[18px] mb-6 transition-all duration-800 ${activeSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                        }`}
                                    style={{
                                        transitionDelay: activeSlide === index ? '700ms' : '0ms'
                                    }}
                                >
                                    {slide.subtitle}
                                </p>

                                {/* CTA Button with hover effects */}
                                <button className="relative px-8 py-3 font-bold bg-white tracking-widest text-black overflow-hidden group text-[15px] rounded-[5px] transition-transform duration-1000 hover:scale-105 hover:text-black hover:border-[#FDCB2E]">
                                    <span className="absolute left-[-50px] top-0 h-full w-0 skew-x-[45deg] bg-[#FDCB2E] z-[-1] transition-all duration-1000 group-hover:w-[250%]"></span>
                                    Explore Collection
                                </button>
                            </div>

                            {/* Floating decorative elements */}
                            <div className="absolute bottom-10 right-10 hidden md:block">
                                {[...Array(3)].map((_, i) => (
                                    <div
                                        key={i}
                                        className={`w-2 h-2 bg-[#FDCB2E] rounded-full mb-2 transition-all duration-1000 ${activeSlide === index ? 'opacity-60 animate-pulse' : 'opacity-0'
                                            }`}
                                        style={{
                                            transitionDelay: `${1000 + i * 200}ms`,
                                            animationDelay: `${i * 0.5}s`
                                        }}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Custom Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-[#FDCB2E]/90 hover:bg-[#FDCB2E] rounded-full border-2 border-white/30 hover:border-white/60 backdrop-blur-sm transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl flex items-center justify-center group"
                style={{
                    boxShadow: '0 4px 15px rgba(253, 203, 46, 0.3)'
                }}
            >
                <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-black transition-transform duration-300 group-hover:scale-110" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-[#FDCB2E]/90 hover:bg-[#FDCB2E] rounded-full border-2 border-white/30 hover:border-white/60 backdrop-blur-sm transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl flex items-center justify-center group"
                style={{
                    boxShadow: '0 4px 15px rgba(253, 203, 46, 0.3)'
                }}
            >
                <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-black transition-transform duration-300 group-hover:scale-110" />
            </button>

            {/* Custom slide indicators with brand colors */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-1 rounded-full transition-all duration-500 cursor-pointer ${activeSlide === index
                            ? 'w-8 bg-[#FDCB2E]'
                            : 'w-4 bg-white/50 hover:bg-white/70'
                            }`}
                        style={{
                            boxShadow: activeSlide === index ? '0 0 10px #FDCB2E' : 'none'
                        }}
                    ></button>
                ))}
            </div>

            {/* Side accent line animation */}
            <div
                className="absolute right-0 top-0 w-1 h-full"
                style={{
                    background: `linear-gradient(180deg, transparent 0%, #FDCB2E ${20 + activeSlide * 20}%, transparent ${60 + activeSlide * 20}%)`
                }}
            ></div>
        </div>
    )
}