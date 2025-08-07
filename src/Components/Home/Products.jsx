import React, { useState, useEffect } from 'react';
import { Eye, Heart, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Products() {
    const [activeCategory, setActiveCategory] = useState('ovel');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const categories = [
        { id: 'ovel', name: 'Ovel Collection' },
        { id: 'square', name: 'Square Collection' },
        { id: 'aristo', name: 'Aristo Collection' },
        { id: 'shelf-corner', name: 'Shelf & Corner Collection' },
    ];

    const products = [
        {
            id: 1,
            name: "Ovel Chrome",
            subCategory: "ovel",
            image: "/ovel_chrome.jpg",
        },
        {
            id: 2,
            name: "Ovel PVD Gold",
            subCategory: "ovel",
            image: "/ovel_pvdgold.jpg",
        },
        {
            id: 3,
            name: "Ovel PVD Rose Gold",
            subCategory: "ovel",
            image: "/ovel_pvdrosegold.jpg",
        },
        {
            id: 4,
            name: "Ovel PVD Black Matt",
            subCategory: "ovel",
            image: "/ovel_pvd_balck_matt.jpg",
        },
        {
            id: 5,
            name: "Ovel PVD Black Gold",
            subCategory: "ovel",
            image: "/ovel_black_gold.jpg",
        },
        {
            id: 6,
            name: "Ovel PVD Black Rose Gold",
            subCategory: "ovel",
            image: "/ovel_black_rg.jpg",
        },

        {
            id: 7,
            name: "Square Chrome",
            subCategory: "square",
            image: "/square_chrome.jpg",
            badge: "Best Seller"
        },
        {
            id: 8,
            name: "Square PVD Gold",
            subCategory: "square",
            image: "/square_pvdgold.jpg",
            badge: "New"
        },
        {
            id: 9,
            name: "Square PVD Rose Gold",
            subCategory: "square",
            image: "/square_pvdrosegold.jpg",
        },
        {
            id: 10,
            name: "Square PVD Black Matt",
            subCategory: "square",
            image: "/square_pvd_balck_matt.jpg",
        },
        {
            id: 11,
            name: "Square PVD Black Gold",
            subCategory: "square",
            image: "/square_black_gold.jpg",
        },
        {
            id: 12,
            name: "Square PVD Black Rose Gold",
            subCategory: "square",
            image: "/square_black_rg.jpg",
            badge: "Smart"
        },

        {
            id: 13,
            name: "Aristo Chrome",
            subCategory: "aristo",
            image: "/aristo_chrome.jpg",
        },
        {
            id: 14,
            name: "Aristo PVD Gold",
            subCategory: "aristo",
            image: "/aristo_pvdgold.jpg",
        },
        {
            id: 15,
            name: "Aristo PVD Rose Gold",
            subCategory: "aristo",
            image: "/aristo_pvdrosegold.jpg",
        },
        {
            id: 16,
            name: "Aristo PVD Black Matt",
            subCategory: "aristo",
            image: "/aristo_pvd_balck_matt.jpg",
        },
        {
            id: 17,
            name: "Aristo PVD Black Gold",
            subCategory: "aristo",
            image: "/square_black_gold.jpg",
        },
        {
            id: 18,
            name: "Aristo PVD Black Rose Gold",
            subCategory: "aristo",
            image: "/aristo_black_rg.jpg",
        },

        {
            id: 19,
            name: "Shelf Corner Chrome",
            subCategory: "shelf-corner",
            image: "/shelf_corner_chrome.jpg",
        },
        {
            id: 20,
            name: "Shelf Corner Gold",
            subCategory: "shelf-corner",
            image: "/shelf_corner_gold.jpg",
        },
        {
            id: 21,
            name: "Shelf Corner Rose Gold",
            subCategory: "shelf-corner",
            image: "/shelf_corner_rosegold.jpg",
        },
        {
            id: 22,
            name: "Shelf Corner Black",
            subCategory: "shelf-corner",
            image: "/shelf_corner_black.jpg",
        }
    ];

    const filteredProducts = products.filter(product => product.subCategory === activeCategory);

    return (
        <section className="section-padding bg-white mt-[100px] overflow-hidden">
            <div className="w-[95%] sm:w-[90%] mx-auto container-padding">
                {/* Section Header with Enhanced Animations */}
                <div className="text-center mb-16">
                    <h2 className="heading-text text-2xl sm:text-5xl font-bold responsive text-black mb-4" data-aos="fade-up" data-aos-duration="1500">
                        Our Premium <span className='heading-text text-[var(--brand-color)] relative inline-block'>
                            Collection
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#FDCB2E] transform scale-x-0 origin-left transition-transform duration-1000 delay-500 group-hover:scale-x-100"></span>
                        </span>
                    </h2>
                    <p className={`text-[16px] sm:text-[18px] text-gray-600 max-w-3xl mx-auto transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`} data-aos="fade-up" data-aos-duration="1500">
                        Discover our carefully curated selection of bathroom accessories that combine style, functionality, and durability.
                    </p>
                </div>

                {/* Enhanced Category Filter */}
                <div className={`hidden sm:flex mt-[10px] flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                    {categories.map((category, index) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-500 transform hover:scale-110 hover:rotate-1 relative overflow-hidden group ${activeCategory === category.id
                                ? 'bg-[#FDCB2E] text-black shadow-lg scale-105'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            style={{
                                animationDelay: `${index * 100}ms`,
                                animation: isVisible ? 'slideInFromTop 0.8s ease-out forwards' : 'none'
                            }}
                        >
                            <span className="relative z-10">{category.name}</span>
                            <span className="absolute inset-0 bg-gradient-to-r from-[#FDCB2E] to-yellow-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                            <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-[100%] transition-all duration-700 skew-x-12"></span>
                        </button>
                    ))}
                </div>

                {/* Enhanced Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredProducts.map((product, index) => (
                        <div
                            key={`${product.category}-${product.id}`}
                            className={`group cursor-pointer`}
                            style={{
                                transitionDelay: `${index * 150}ms`
                            }}
                            data-aos={window.innerWidth < 640 ? (index % 2 === 0 ? "fade-right" : "fade-left") : "fade"}
                            data-aos-duration="1000"
                        >
                            {/* Enhanced Product Card Container */}
                            <div className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 hover:rotate-1">

                                {/* Badge Animation */}
                                {product.badge && (
                                    <div className="absolute top-4 right-4 z-20">
                                        <span className="bg-[#FDCB2E] text-black px-3 py-1 rounded-full text-xs font-bold animate-pulse shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
                                            {product.badge}
                                        </span>
                                    </div>
                                )}

                                {/* Enhanced Product Image */}
                                <div className="relative overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-115 group-hover:brightness-110 group-hover:saturate-110"
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
                                        <Link to={"/products"}>
                                            <button className="bg-white text-gray-800 px-6 py-2 rounded-full font-semibold transform translate-y-6 scale-90 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 hover:bg-[#FDCB2E] hover:text-white shadow-lg hover:shadow-xl">
                                                <span className="flex items-center gap-2">
                                                    <Eye size={16} />
                                                    View Products
                                                </span>
                                            </button>
                                        </Link>
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

                                    <Link to={`/products`}>
                                        <button
                                            className="block sm:hidden relative w-full sm:w-auto px-4 sm:px-6 py-3 sm:py-4 font-bold bg-[var(--brand-color)] tracking-widest text-black hover:text-white overflow-hidden group text-sm sm:text-base rounded-2xl transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-[var(--brand-color)]/30"
                                        >
                                            <span className="absolute left-[-50px] top-0 h-full w-0 skew-x-[45deg] bg-black text-white z-[-1] transition-all duration-1000 group-hover:w-[250%]"></span>
                                            <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                                                <Eye size={16} />

                                                View Products
                                            </span>
                                        </button>
                                    </Link>
                                </div>

                                {/* Corner Glow Effect */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#FDCB2E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-[#FDCB2E]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Enhanced View All Button */}
                <div className={`text-center mt-12 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                    <Link to={"/products"}>
                        <button className="relative px-8 py-3 font-bold bg-black tracking-widest text-white overflow-hidden group text-[15px] rounded-[5px] transition-all duration-1000 hover:scale-105 hover:text-white hover:border-[#FDCB2E] hover:shadow-2xl hover:shadow-[#FDCB2E]/25">
                            <span className="absolute left-[-50px] top-0 h-full w-0 skew-x-[45deg] bg-[#FDCB2E] z-[-1] transition-all duration-1000 group-hover:w-[250%]"></span>
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                            <span className="relative z-10 flex items-center gap-2">
                                View All Products
                                <span className="transform transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110">→</span>
                            </span>
                        </button>
                    </Link>
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
        </section>
    );
}