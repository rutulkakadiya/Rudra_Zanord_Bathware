import React, { useEffect, useState } from 'react';
import { Shield, Award, Users, Wrench, Star, ArrowRight, Sparkles, CheckCircle, TrendingUp, Heart, Settings, Palette, Globe, Trophy, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../Common Components/Header';
import Whatsapp from '../Common Components/Whatsapp';
import Footer from '../Common Components/Footer';

const CompanyProfile = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhanced Intersection Observer for staggered animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          const id = entry.target.getAttribute('data-animate-id');
          if (id) {
            setIsVisible(prev => ({ ...prev, [id]: true }));
          }
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const FloatingElement = ({ delay, size, position }) => (
    <div
      className={`absolute ${size} bg-[var(--brand-color)] rounded-full opacity-10 animate-bounce hidden md:block`} // Changed to md:block for better mobile performance
      style={{
        ...position,
        animationDelay: `${delay}s`,
        animationDuration: '3s',
      }}
    />
  );

  const GeometricShape = ({ className, delay, type = "square" }) => (
    <div
      className={`absolute border-2 border-[var(--brand-color)] opacity-10 ${className} hidden md:block hover:opacity-20 transition-opacity duration-300`} // Changed to md:block
      style={{
        animation: `spin ${25 + delay}s linear infinite`,
        animationDelay: `${delay}s`,
        background: type === "circle" ? "transparent" : "linear-gradient(45deg, transparent 49%, rgba(251, 191, 36, 0.1) 50%, transparent 51%)",
      }}
    />
  );

  const StoryPoint = ({ children, delay, icon: Icon }) => (
    <div
      className={`transform transition-all duration-700 hover:translate-x-2 hover:shadow-xl hover:bg-gradient-to-r hover:from-yellow-50 hover:to-transparent p-4 rounded-2xl border border-transparent hover:border-[var(--brand-color)] group cursor-pointer`} // Simplified padding
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 mt-1">
          <div className="w-8 h-8 bg-gradient-to-br from-[var(--brand-color)] to-[var(--brand-color)] rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
            <Icon className="w-4 h-4 text-white" />
          </div>
        </div>
        <div className="flex-1">
          <div className="w-2 h-2 bg-gradient-to-r from-[var(--brand-color)] to-[var(--brand-color)] rounded-full mb-2 transform transition-all duration-300 group-hover:scale-125"></div>
          <p className="text-sm text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
            {children}
          </p>
        </div>
      </div>
    </div>
  );

  const FeatureCard = ({ icon: Icon, title, description, delay }) => (
    <div
      className="group/feature bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transform transition-all duration-700 hover:-translate-y-2 hover:rotate-1 border border-gray-100 hover:border-[var(--brand-color)] animate-on-scroll translate-y-8"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col items-center text-center space-y-3">
        <div className="w-16 h-16 bg-gradient-to-br from-[var(--brand-color)] to-[var(--brand-color)] rounded-2xl flex items-center justify-center transform transition-all duration-500 group-hover/feature:rotate-12 group-hover/feature:scale-110 shadow-lg">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="heading-text text-lg font-bold text-gray-900 group-hover/feature:text-[var(--brand-color)] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed group-hover/feature:text-gray-800 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-black font-sans overflow-x-hidden">
      <Header />
      <Whatsapp />
      {/* Enhanced Hero Section */}
      <div className="relative py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <FloatingElement
          delay={0}
          size="w-12 h-12 sm:w-16 h-16 md:w-20 h-20"
          position={{ top: '15%', left: '5%' }}
        />
        <FloatingElement
          delay={1.5}
          size="w-14 h-14 sm:w-18 h-18 md:w-24 h-24"
          position={{ top: '25%', right: '5%' }}
        />
        <FloatingElement
          delay={2.5}
          size="w-10 h-10 sm:w-12 h-12 md:w-16 h-16"
          position={{ bottom: '25%', left: '8%' }}
        />
        <FloatingElement
          delay={1}
          size="w-12 h-12 sm:w-14 h-14 md:w-18 h-18"
          position={{ bottom: '15%', right: '8%' }}
        />

        <GeometricShape
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 top-[20%] right-4 sm:right-8 md:right-12 transform rotate-45"
          delay={0}
        />
        <GeometricShape
          className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bottom-16 sm:bottom-20 md:bottom-24 left-4 sm:left-6 md:left-8 rounded-full"
          delay={3}
          type="circle"
        />

        <div className="text-center relative z-10" data-aos="fade-up" data-aos-duration="1500">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 animate-on-scroll opacity-0 transform translate-y-4" style={{ animationDelay: '0ms' }}>
            <Link to={"/"}>Home</Link>
            <span>/</span>
            <span className="text-black font-semibold">Company Profile</span>
          </div>

          {/* Main Title */}
          <div className="relative inline-block">
            <h1 className="heading-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-4 animate-on-scroll opacity-0 transform translate-y-8" style={{ animationDelay: '200ms' }}>
              Company{' '}
              <span className='heading-text relative bg-gradient-to-r from-[var(--brand-color)] to-[var(--brand-color)] bg-clip-text text-transparent'>
                Profile
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[var(--brand-color)] to-[var(--brand-color)] transform scale-x-0 animate-pulse" style={{ animation: 'scaleX 2s ease-in-out infinite' }}></div>
              </span>
            </h1>

            {/* Floating sparkles */}
            <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 animate-on-scroll opacity-0" style={{ animationDelay: '400ms' }}>
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--brand-color)] animate-spin" style={{ animationDuration: '8s' }} />
            </div>
            <div className="absolute -bottom-1 sm:-bottom-2 -left-2 sm:-left-3 animate-on-scroll opacity-0" style={{ animationDelay: '600ms' }}>
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--brand-color)] animate-pulse" />
            </div>
          </div>

          {/* Enhanced Decorative Elements */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-4 sm:mt-6 animate-on-scroll opacity-0 transform translate-y-4" style={{ animationDelay: '800ms' }}>
            <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-[var(--brand-color)] transform rotate-45 animate-spin bg-gradient-to-br from-transparent to-[var(--brand-color)]"
              style={{ animationDuration: '6s' }} />
            <div className="flex gap-1 sm:gap-1.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-[var(--brand-color)] to-[var(--brand-color)] rounded-full animate-pulse transform hover:scale-150 transition-transform cursor-pointer"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
            <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-[var(--brand-color)] transform rotate-45 animate-spin bg-gradient-to-br from-transparent to-[var(--brand-color)]"
              style={{ animationDuration: '6s', animationDirection: 'reverse' }} />
          </div>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mt-3 sm:mt-4 max-w-md sm:max-w-lg md:max-w-xl mx-auto animate-on-scroll opacity-0 transform translate-y-4" style={{ animationDelay: '1000ms' }}>
            Crafting Excellence in Bathroom Aesthetics with Premium SS 304 Steel
          </p>
        </div>
      </div>

      {/* Enhanced Our Story Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 overflow-hidden">
        <div className="w-[95%] sm:w-[90%] mx-auto">
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 items-center">
            {/* Left Content */}
            <div className="group/content">
              <div className="transform transition-all duration-700 hover:translate-x-2">
                <h2 className="heading-text text-center sm:text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-black leading-tight" data-aos="fade-right" data-aos-duration="1500">
                  Our{' '}
                  <span className="relative inline-block group/story">
                    <span className="heading-text text-[var(--brand-color)]">
                      Story
                    </span>
                    <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-[var(--brand-color)] to-[var(--brand-color)] transform scale-x-0 group-hover/story:scale-x-100 transition-transform duration-700 rounded-full"></div>
                    <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2">
                      <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--brand-color)] animate-pulse opacity-0 group-hover/story:opacity-100 transition-opacity duration-500" />
                    </div>
                  </span>
                </h2>

                <div className="space-y-2 sm:space-y-3" data-aos="fade-right" data-aos-duration="1500">
                  <StoryPoint delay={0} icon={Sparkles}>
                    Founded with a vision to revolutionize bathroom aesthetics, Zanord emerged from a simple belief:
                    every bathroom deserves to be a <span className="font-bold text-black bg-[var(--brand-color)] px-1 sm:px-1.5 py-0.5 rounded">sanctuary of elegance and functionality</span>.
                  </StoryPoint>

                  <StoryPoint delay={200} icon={Award}>
                    Our journey began when our founders, passionate about design and quality, recognized the gap
                    between ordinary bath accessories and truly <span className="font-bold text-black">premium solutions</span>. Using only the finest
                    <span className="bg-gradient-to-r from-[var(--brand-color)] to-[var(--brand-color)] text-white px-1.5 sm:px-2 py-0.5 rounded-full font-bold ml-2">SS 304 grade steel</span>, we craft each piece with meticulous attention to detail.
                  </StoryPoint>

                  <StoryPoint delay={400} icon={TrendingUp}>
                    Today, Zanord stands as a testament to <span className="font-bold text-black">innovation, quality, and timeless design</span>—trusted by
                    homeowners, architects, and interior designers who refuse to compromise on excellence.
                  </StoryPoint>
                </div>
              </div>
            </div>

            {/* Right Image Section with Enhanced Effects */}
            <div className="relative group/image" data-aos="fade-left" data-aos-duration="1500">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                {/* Image Container */}
                <div className="relative transform transition-all duration-700 group-hover/image:scale-105">
                  <img
                    src="/ovel_black_gold.jpg"
                    alt="Premium Bathroom Accessories"
                    className="w-full h-auto object-cover rounded-3xl max-h-[300px] sm:max-h-[400px] md:max-h-[500px]"
                  />

                  {/* Overlay Effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                  {/* Quality Badge */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/90 backdrop-blur-sm rounded-full p-1.5 sm:p-2 transform transition-all duration-500 group-hover/image:scale-110 group-hover/image:rotate-12 shadow-lg">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--brand-color)]" />
                  </div>
                </div>

                {/* Floating Elements around Image */}
                <div className="absolute -top-2 sm:-top-3 -left-2 sm:-left-3 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-[var(--brand-color)] to-[var(--brand-color)] rounded-full animate-bounce opacity-80" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
                <div className="absolute -bottom-2 sm:-bottom-3 -right-2 sm:-right-3 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-[var(--brand-color)] to-[var(--brand-color)] rounded-full animate-bounce opacity-80" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
                <div className="absolute top-1/2 -right-2 sm:-right-3 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-br from-[var(--brand-color)] to-[var(--brand-color)] rounded-full animate-pulse opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="heading-text text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 animate-on-scroll opacity-0 transform translate-y-8" data-aos="fade-up" data-aos-duration="1500">
              Why Choose <span className="heading-text text-[var(--brand-color)]">Zanord</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" data-aos="fade-up" data-aos-duration="1500">
            <FeatureCard
              icon={Shield}
              title="Premium SS 304 Material"
              description="Made from the finest SS 304 grade steel, ensuring durability, corrosion resistance, and long-lasting performance."
              delay={0}
            />

            <FeatureCard
              icon={Palette}
              title="Multiple Finish Options"
              description="Choose from Chrome, PVD Gold, Rose Gold, Black, and special combination finishes to match your style."
              delay={200}
            />

            <FeatureCard
              icon={Settings}
              title="Easy Installation"
              description="Designed for hassle-free installation with all necessary hardware and clear instructions included."
              delay={400}
            />

            <FeatureCard
              icon={Sparkles}
              title="Easy to Clean"
              description="Smooth finishes and quality materials make maintenance effortless, keeping your bathroom spotless."
              delay={600}
            />

            <FeatureCard
              icon={Globe}
              title="Export Quality"
              description="International quality standards with products exported to over 50 countries worldwide."
              delay={800}
            />

            <FeatureCard
              icon={Award}
              title="Best Quality Assurance"
              description="Rigorous quality checks at every stage ensure that each product meets our exacting standards of excellence."
              delay={1000}
            />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {/* Vision */}
            <div className="transform translate-y-8" data-aos="fade-right" data-aos-duration="1500">
              <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[var(--brand-color)]">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[var(--brand-color)] rounded-2xl flex items-center justify-center">
                    <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="heading-text text-xl sm:text-2xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                  Our vision as a bathroom accessories manufacturer is to <strong>transform every bathroom into a haven of comfort and sophistication</strong> by crafting innovative, high-quality products that inspire delightful experiences for our customers worldwide.
                </p>
              </div>
            </div>

            {/* Quality */}
            <div className="transform translate-y-8" data-aos="fade-left" data-aos-duration="1500">
              <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[var(--brand-color)]">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[var(--brand-color)] rounded-2xl flex items-center justify-center">
                    <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="heading-text text-xl sm:text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                  We are deeply dedicated to maintaining the <strong>highest standards of quality</strong> in every aspect of our production process. From sourcing the finest materials to employing skilled artisans, we ensure each product is crafted with precision and attention to detail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }
        
        @keyframes scaleX {
          0%, 100% { transform: scaleX(0); }
          50% { transform: scaleX(1); }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-on-scroll {
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-on-scroll.animate-in {
          opacity: 1 !important;
          transform: translateY(0) translateX(0) !important;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 4s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        /* Gradient border animation */
        @keyframes gradientBorder {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .gradient-border {
          background: linear-gradient(-45deg, #fbbf24, #f59e0b, #d97706, #fbbf24);
          background-size: 400% 400%;
          animation: gradientBorder 3s ease infinite;
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .heading-text {
            font-size: 1.5rem !important;
          }
          .animate-on-scroll {
            transform: translateY(0) !important;
            opacity: 1 !important;
          }
          .group/image img {
            max-height: 250px !important;
          }
        }

        @media (min-width: 641px) and (max-width: 768px) {
          .heading-text {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CompanyProfile;