import React from 'react'
import Header from '../Home/Header';
import Whatsapp from '../Whatsapp';
import { Link } from 'react-router-dom';
import { Eye, Sparkles, Star } from 'lucide-react';

export default function Products() {

    const products = [
        {
            id: 1,
            name: "Ovel Collection",
            category: "ovel",
            image: "/ovel_pvdgold.jpg",
        },
        {
            id: 2,
            name: "Square Collection",
            category: "square",
            image: "/square_pvdgold.jpg",
        },
        {
            id: 3,
            name: "Aristo Collection",
            category: "aristo",
            image: "/aristo_pvdgold.jpg",
        },
        {
            id: 4,
            name: "Shelf & Corner Collection",
            category: "shelf_corner",
            image: "/shelf_corner_gold.jpg",
        }
    ];

    const FloatingElement = ({ delay, size, position }) => (
        <div
            className={`absolute ${size} bg-[var(--brand-color)] rounded-full opacity-10 animate-bounce hidden lg:block`} // Changed to lg:block to hide on smaller screens
            style={{
                ...position,
                animationDelay: `${delay}s`,
                animationDuration: '3s',
            }}
        />
    );

    const GeometricShape = ({ className, delay, type = "square" }) => (
        <div
            className={`absolute border-2 border-[var(--brand-color)] opacity-10 ${className} hidden lg:block hover:opacity-20 transition-opacity duration-300`} // Changed to lg:block
            style={{
                animation: `spin ${25 + delay}s linear infinite`,
                animationDelay: `${delay}s`,
                background: type === "circle" ? "transparent" : "linear-gradient(45deg, transparent 49%, rgba(251, 191, 36, 0.1) 50%, transparent 51%)",
            }}
        />
    );

    return (
        <div>

            <Header />
            <Whatsapp />

            {/* Enhanced Hero Section */}

            <div className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
                {/* Animated Background Elements */}
                <FloatingElement
                    delay={0}
                    size="w-12 h-12 sm:w-16 h-16 md:w-20 h-20 lg:w-24 h-24"
                    position={{ top: '15%', left: '8%' }}
                    className="animate-bounce"
                />
                <FloatingElement
                    delay={1.5}
                    size="w-14 h-14 sm:w-20 h-20 md:w-24 h-24 lg:w-28 h-28"
                    position={{ top: '25%', right: '10%' }}
                    className="animate-pulse"
                />
                <FloatingElement
                    delay={2.5}
                    size="w-10 h-10 sm:w-12 h-12 md:w-16 h-16 lg:w-20 h-20"
                    position={{ bottom: '25%', left: '12%' }}
                    className="animate-bounce"
                />
                <FloatingElement
                    delay={1}
                    size="w-12 h-12 sm:w-14 h-14 md:w-18 h-18 lg:w-32 h-32"
                    position={{ bottom: '15%', right: '8%' }}
                    className="animate-pulse"
                />

                <GeometricShape
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 top-[20%] right-8 sm:right-12 md:right-16 lg:right-24 transform rotate-45"
                    delay={0}
                />
                <GeometricShape
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bottom-20 sm:bottom-24 md:bottom-28 lg:bottom-36 left-6 sm:left-8 md:left-12 lg:left-20 rounded-full"
                    delay={3}
                    type="circle"
                />

                <div className="text-center relative z-10" data-aos="fade-up" data-aos-duration="1500">
                    {/* Breadcrumb */}
                    <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-600 mb-6 sm:mb-8 transform translate-y-4" style={{ animationDelay: '0ms' }}>
                        <Link to={"/"}>Home</Link>
                        <span>/</span>
                        <span className="text-black font-semibold">Products</span>
                    </div>

                    {/* Main Title */}
                    <div className="relative inline-block">
                        <h1 className="heading-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black mb-4 sm:mb-6 transform translate-y-8" style={{ animationDelay: '200ms' }}>
                            Our{' '}
                            <span className='heading-text relative bg-gradient-to-r from-[var(--brand-color)] to-[var(--brand-color)] bg-clip-text text-transparent'>
                                Collection
                                <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-[var(--brand-color)] to-[var(--brand-color)] transform scale-x-0 animate-pulse" style={{ animation: 'scaleX 2s ease-in-out infinite' }}></div>
                            </span>
                        </h1>

                        {/* Floating sparkles */}
                        <div className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4">
                            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[var(--brand-color)] animate-spin" style={{ animationDuration: '8s' }} />
                        </div>
                        <div className="absolute -bottom-1 sm:-bottom-2 -left-3 sm:-left-4">
                            <Star className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[var(--brand-color)] animate-pulse" />
                        </div>
                    </div>

                    {/* Enhanced Decorative Elements */}
                    <div className="flex items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 transform translate-y-4" style={{ animationDelay: '800ms' }}>
                        <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-[var(--brand-color)] transform rotate-45 animate-spin bg-gradient-to-br from-transparent to-[var(--brand-color)]"
                            style={{ animationDuration: '6s' }} />
                        <div className="flex gap-1 sm:gap-2">
                            {[0, 1, 2, 3, 4].map((i) => (
                                <div
                                    key={i}
                                    className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-[var(--brand-color)] to-[var(--brand-color)] rounded-full animate-pulse transform hover:scale-150 transition-transform cursor-pointer"
                                    style={{ animationDelay: `${i * 0.15}s` }}
                                />
                            ))}
                        </div>
                        <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-[var(--brand-color)] transform rotate-45 animate-spin bg-gradient-to-br from-transparent to-[var(--brand-color)]"
                            style={{ animationDuration: '6s', animationDirection: 'reverse' }} />
                    </div>

                    {/* Subtitle */}
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mt-4 sm:mt-6 max-w-xl sm:max-w-2xl mx-auto animate-on-scroll opacity-0 transform translate-y-4" style={{ animationDelay: '1000ms' }}>
                        Crafting Excellence in Bathroom Aesthetics with Premium SS 304 Steel
                    </p>
                </div>
            </div>


            <div className='flex justify-center'>
                <div className="w-[95%] sm:w-[90%] px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {products.map((product, index) => (
                        <div
                            key={`${product.category}-${product.id}`}
                            className={`group cursor-pointer transform transition-all duration-700`}
                            style={{
                                transitionDelay: `${index * 150}ms`
                            }}
                        >
                            {/* Enhanced Product Card Container */}
                            <div className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 hover:rotate-1">

                                {/* Badge Animation */}
                                {/* {product.badge && (
                                <div className="absolute top-4 right-4 z-20">
                                    <span className="bg-[#FDCB2E] text-black px-3 py-1 rounded-full text-xs font-bold animate-pulse shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
                                        {product.badge}
                                    </span>
                                </div>
                            )} */}

                                {/* Enhanced Product Image */}
                                <div className="relative overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-[400px] object-cover transition-all duration-700 group-hover:scale-115 group-hover:brightness-110 group-hover:saturate-110"
                                        style={{
                                            filter: 'contrast(1.1)'
                                        }}
                                    />

                                    {/* Enhanced Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    {/* Floating Particles Effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute top-4 left-4 w-2 h-2 bg-[#FDCB2E] rounded-full animate-ping"></div>
                                        <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full animate-pulse delay-200"></div>
                                        <div className="absolute bottom-12 left-8 w-1.5 h-1.5 bg-[#FDCB2E] rounded-full animate-bounce delay-300"></div>
                                    </div>

                                    {/* Enhanced Quick View Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/20">
                                        <button className="bg-white text-gray-800 px-6 py-2 rounded-full font-semibold transform translate-y-6 scale-90 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 hover:bg-[#FDCB2E] hover:text-white shadow-lg hover:shadow-xl">
                                            <span className="flex items-center gap-2">
                                                <Eye size={16} />
                                                View Products
                                            </span>
                                        </button>
                                    </div>

                                    {/* Enhanced Shine Effect */}
                                    <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12 group-hover:left-full transition-all duration-1200 ease-out"></div>
                                </div>

                                {/* Enhanced Product Info */}
                                <div className="p-6 space-y-3 text-center relative bg-gradient-to-b from-white to-gray-50/50">
                                    {/* Animated Border with Pulse */}
                                    <div className="absolute top-0 left-1/2 w-0 h-0.5 bg-[#FDCB2E] group-hover:w-16 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-500 shadow-lg"></div>
                                    <div className="absolute top-0 left-1/2 w-0 h-0.5 bg-white opacity-75 group-hover:w-16 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-700 animate-pulse"></div>

                                    <h3 className="heading-text font-bold text-xl text-black transition-all duration-300 group-hover:text-[#FDCB2E] transform group-hover:scale-105 group-hover:-translate-y-1">
                                        {product.name}
                                    </h3>

                                    <div className="flex items-center justify-center gap-2">
                                        <span className="text-[18px] font-semibold text-[#FDCB2E] transform transition-all duration-300 group-hover:scale-110 group-hover:font-bold">
                                            {product.price}
                                        </span>
                                        {product.originalPrice && (
                                            <span className="text-sm text-gray-400 line-through opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
                                                {product.originalPrice}
                                            </span>
                                        )}
                                    </div>


                                </div>

                                {/* Corner Glow Effect */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#FDCB2E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-[#FDCB2E]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <style jsx>{`
                @keyframes slideInFromTop {
                    from {
                        transform: translateY(-20px);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-5px); }
                }
                
                .group:hover .animate-float {
                    animation: float 2s ease-in-out infinite;
                }
                
                .group:hover {
                    transform-style: preserve-3d;
                }
                
                @keyframes shimmer {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                }
                
                .animate-shimmer {
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
                    background-size: 200% 100%;
                    animation: shimmer 2s infinite;
                }
            `}</style>
        </div>
    )
}
