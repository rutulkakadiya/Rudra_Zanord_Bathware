import React, { useState } from 'react';

const ProductIntro = () => {
    const products = [
        {
            id: 1,
            src: '/product1.jpeg',
            heading: 'Soap Holder',
            text: 'A sleek soap holder for your bathroom.',
            position: { top: '73%', left: '18%' },
            popUpPosition: { top: '50%', left: '20%' },
        },
        {
            id: 2,
            src: '/product2.jpeg',
            heading: 'Towel Ring',
            text: 'Stylish towel ring for convenience.',
            position: { top: '39%', left: '8%' },
            popUpPosition: { top: '42%', left: '2%' },
        },
        {
            id: 3,
            src: '/product6.jpeg',
            heading: 'Towel Rack',
            text: 'Spacious towel rack for multiple towels.',
            position: { top: '40%', left: '70%' },
            popUpPosition: { top: '43%', left: '63%' },
        },
    ];

    const [hoveredId, setHoveredId] = useState(null);

    return (
        <div
            className="relative h-[70vh] sm:h-[90vh] w-full bg-cover bg-center mt-12 overflow-hidden"
            style={{ backgroundImage: `url('/product_intro.png')` }}
        >
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            {/* Intro Text */}
            <div className="absolute top-[20%] left-[5%] sm:left-[10%] max-w-xl space-y-4" data-aos="fade-right" data-aos-duration="1500">
                <p className="heading-text text-2xl font-bold sm:text-5xl text-white leading-snug">
                    Redefine Your Bathroom with <span className="heading-text text-[var(--brand-color)]">Zanord</span> Bathware
                </p>

                <p className="text-white text-[14px] sm:text-base">
                    Our premium bathroom accessories — from the sleek towel ring, the elegant soap dish, to the spacious towel rack — are crafted to elevate your everyday routine.
                </p>

                <button className="relative px-6 sm:px-8 py-2 sm:py-3 font-semibold bg-black text-white tracking-wider rounded-md overflow-hidden group hover:scale-105 transition-transform duration-500">
                    <span className="absolute left-[-50px] top-0 h-full w-0 skew-x-[45deg] bg-[var(--brand-color)] z-[-1] transition-all duration-700 group-hover:w-[250%]"></span>
                    View Products
                </button>
            </div>

            {/* Blinking Dots + Popups */}
            {products.map((product) => (
                <div key={product.id}>
                    {/* Blinking Dot */}
                    <div
                        className="absolute w-5 h-5 bg-[var(--brand-color)] rounded-full animate-ping-slow cursor-pointer shadow-lg hidden md:block"
                        style={{
                            top: product.position.top,
                            left: product.position.left,
                            transform: 'translate(-50%, -50%)',
                        }}
                        onMouseEnter={() => setHoveredId(product.id)}
                        onMouseLeave={() => setHoveredId(null)}
                    ></div>

                    {/* Pop-up Box */}
                    {hoveredId === product.id && (
                        <div
                            className="absolute bg-white border border-gray-200 p-4 rounded-xl shadow-lg z-10 w-64 transition-all duration-300 animate-fadeIn"
                            style={{
                                top: product.popUpPosition.top,
                                left: product.popUpPosition.left,
                            }}
                        >
                            <img
                                src={product.src}
                                alt={product.heading}
                                className="w-full h-32 object-contain mb-2 rounded"
                            />
                            <h3 className="text-lg font-bold text-gray-800">{product.heading}</h3>
                            <p className="text-sm text-gray-600">{product.text}</p>
                        </div>
                    )}
                </div>
            ))}

        </div>
    );
};

export default ProductIntro;
