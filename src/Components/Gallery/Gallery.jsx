import React, { useState, useEffect } from 'react';
import { X, Download, Share2, Heart, Eye, ZoomIn, ChevronLeft, ChevronRight, Grid, List, Sparkles, Star, Award, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../Home/Header';
import Whatsapp from '../Whatsapp';
import Footer from '../Home/Footer';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Sample gallery data - replace with your actual images
    const galleryImages = [
        {
            id: 1,
            src: "ovel_chrome.jpg",
        },
        {
            id: 2,
            src: "ovel_pvdgold.jpg",
        },
        {
            id: 3,
            src: "ovel_pvdrosegold.jpg",
        },
        {
            id: 4,
            src: "ovel_pvd_balck_matt.jpg",
        },
        {
            id: 5,
            src: "ovel_black_rg.jpg",
        },
        {
            id: 6,
            src: "ovel_black_gold.jpg",
        },
        {
            id: 7,
            src: "aristo_black_gold.jpg",
        },
        {
            id: 8,
            src: "aristo_black_rg.jpg",
        },
        {
            id: 9,
            src: "aristo_pvd_balck_matt.jpg",
        }
    ];


    useEffect(() => {
        setIsVisible(true);
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    const openModal = (image, index) => {
        setSelectedImage(image);
        setCurrentIndex(index);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const nextImage = () => {
        const nextIndex = (currentIndex + 1) % galleryImages.length;
        setCurrentIndex(nextIndex);
        setSelectedImage(galleryImages[nextIndex]);
    };

    const prevImage = () => {
        const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        setCurrentIndex(prevIndex);
        setSelectedImage(galleryImages[prevIndex]);
    };

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
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
            <Header />
            <Whatsapp />
            {/* Background Elements */}
            <FloatingElement
                delay={0}
                size="w-10 h-10 sm:w-12 h-12 md:w-16 h-16"
                position={{ top: '10%', left: '5%' }}
            />
            <FloatingElement
                delay={1}
                size="w-12 h-12 sm:w-16 h-16 md:w-20 h-20"
                position={{ top: '20%', right: '5%' }}
            />
            <FloatingElement
                delay={2}
                size="w-8 h-8 sm:w-10 h-10 md:w-12 h-12"
                position={{ bottom: '20%', left: '10%' }}
            />

            <GeometricShape
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 top-[25%] right-8 sm:right-10 md:right-20 transform rotate-45"
                delay={0}
            />
            <GeometricShape
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bottom-20 sm:bottom-24 md:bottom-32 left-6 sm:left-8 md:left-16 rounded-full"
                delay={3}
            />

            {/* Header Section */}
            <div className="py-8 sm:py-12 md:py-16">
                <div className="text-center">
                    <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6" data-aos="fade-up" data-aos-duration="1500">
                        <Link to={"/"}>Home</Link>
                        <span>/</span>
                        <span className="text-black font-medium">Gallery</span>
                    </div>

                    <h1 className="heading-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-3 sm:mb-4 md:mb-6 relative" data-aos="fade-up" data-aos-duration="1500">
                        Our <span className='heading-text text-[var(--brand-color)]'>Gallery</span>
                        <div className="absolute -top-1 sm:-top-2 md:-top-3 -right-1 sm:-right-2 md:-right-3">
                            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[var(--brand-color)] animate-pulse" />
                        </div>
                    </h1>

                    <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6 sm:mb-8" data-aos="fade-up" data-aos-duration="1500">
                        Explore our premium collection of bathroom and kitchen accessories designed for modern living
                    </p>

                    <div className="flex items-center justify-center gap-3 sm:gap-4">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 border-2 border-[var(--brand-color)] transform rotate-45 animate-spin"
                            style={{ animationDuration: '4s' }} />
                        <div className="flex gap-1 sm:gap-2">
                            {[0, 1, 2].map((i) => (
                                <div
                                    key={i}
                                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-[var(--brand-color)] rounded-full animate-pulse"
                                    style={{ animationDelay: `${i * 0.2}s` }}
                                />
                            ))}
                        </div>
                        <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 border-2 border-[var(--brand-color)] transform rotate-45 animate-spin"
                            style={{ animationDuration: '4s', animationDirection: 'reverse' }} />
                    </div>
                </div>
            </div>


            {/* Gallery Grid */}
            <div>
                <div className="w-[95%] sm:w-[90%] px-4 mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                        {galleryImages.map((image, index) => (
                            <div
                                key={image.id}
                                className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer aspect-square`}
                                onClick={() => openModal(image, index)}
                                style={{
                                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                                }}
                            >
                                {/* Image */}
                                <div className={`relative overflow-hidden h-full`}>
                                    <img
                                        src={image.src}
                                        alt={image.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Hover Actions */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <div className="bg-[var(--brand-color)] text-black px-4 py-2 rounded-full font-bold flex items-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                                            <ZoomIn className="w-4 h-4 mr-2" />
                                            View
                                        </div>
                                    </div>



                                </div>

                                {/* Content */}
                                <div className="p-4">
                                    <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[var(--brand-color)] transition-colors duration-300">
                                        {image.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {image.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                    {/* Close Button */}
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 z-60 p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-60 p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-60 p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Modal Content */}
                    <div className="max-w-4xl max-h-[90vh] w-full">
                        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                            <div className="w-full bg-gray-100">
                                <img
                                    src={selectedImage.src}
                                    alt={selectedImage.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            )}
            <Footer />


            <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

        </div>
    );
};

export default Gallery;