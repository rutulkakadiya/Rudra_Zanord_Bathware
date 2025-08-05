import React, { useState } from 'react';

const ProductShowCase = () => {
    const [activeSection, setActiveSection] = useState('ovel');

    const sections = [
        {
            id: 'ovel',
            title: 'Ovel Collection',
            items: '( Explore 10+ items )',
            bgImage: '/ovel_black_gold.jpg'
        },
        {
            id: 'square',
            title: 'Square Collection',
            items: '( Explore 15+ items )',
            bgImage: '/square_black_gold.jpg'
        },
        {
            id: 'aristo',
            title: 'Aristo Collection',
            items: '( Explore 10+ items )',
            bgImage: '/aristo_black_gold.jpg'
        },
        {
            id: 'shelf',
            title: 'Shelf & Corner Collection',
            items: '( Explore 10+ items )',
            bgImage: '/shelf_corner_gold.jpg'
        }
    ];

    return (
        <div className="w-full h-[95vh] relative overflow-hidden">
            {/* Background Image */}
            {activeSection && (
                <div
                    className="absolute inset-0 bg-cover bg-no-repeat bg-center transition-all duration-700"
                    style={{
                        backgroundImage: `url(${sections.find(s => s.id === activeSection)?.bgImage})`
                    }}
                >
                </div>
            )}

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 h-[100%]">
                {sections.map((section, index) => {
                    const isActive = activeSection === section.id;

                    return (
                        <div
                            key={section.id}
                            className="flex relative cursor-pointer border-b md:border-b-0 md:border-r border-white/30 border-opacity-20 last:border-r-0 w-full"
                            onMouseEnter={() => setActiveSection(section.id)}
                        >
                            {/* Transparent Background */}
                            <div className={`absolute inset-0 ${isActive ? 'bg-[#ab7f5c]/50' : 'bg-black/30'}`}></div>

                            {/* Content */}
                            <div className="relative z-10 w-full h-full flex flex-col justify-end p-4 md:p-6 lg:p-8 text-white text-center">
                                {/* Main Title - Pinned to Bottom with Other Content */}
                                <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-2 md:mb-4 transition-all duration-500 ${isActive ? 'transform -translate-y-4 md:-translate-y-6' : ''}`}>
                                    {section.title}
                                </h2>

                                {/* Hover Content - Pinned to Bottom */}
                                <div className={`transition-all duration-500 overflow-hidden ${isActive
                                    ? 'max-h-32 sm:max-h-40 md:max-h-60 lg:max-h-96 opacity-100 transform translate-y-0'
                                    : 'max-h-0 opacity-0 transform translate-y-4'
                                    }`}>
                                    <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-2 md:mb-4 font-light opacity-90">
                                        {section.description}
                                    </p>
                                    <p className="text-xs sm:text-sm opacity-70 font-light">
                                        {section.items}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductShowCase;