import React, { useEffect, useState } from 'react';
import { Shield, Award, Users, Wrench, Star, ArrowRight, Sparkles, CheckCircle, TrendingUp, Heart, Settings, Palette, Globe, Trophy, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../Home/Header';
import Whatsapp from '../Whatsapp';
import Footer from '../Home/Footer';

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

  const StoryPoint = ({ children, delay, icon: Icon }) => (
    <div
      className={`transform transition-all duration-700 hover:translate-x-2 hover:shadow-xl hover:bg-gradient-to-r hover:from-yellow-50 hover:to-transparent p-4 sm:p-6 rounded-2xl border border-transparent hover:border-[var(--brand-color)] group cursor-pointer`} // Adjusted padding
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start space-x-3 sm:space-x-4">
        <div className="flex-shrink-0 mt-1">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[var(--brand-color)] to-[var(--brand-color)] rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
            <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" /> {/* Adjusted icon size */}
          </div>
        </div>
        <div className="flex-1">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-[var(--brand-color)] to-[var(--brand-color)] rounded-full mb-2 sm:mb-3 transform transition-all duration-300 group-hover:scale-125"></div>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
            {children}
          </p>
        </div>
      </div>
    </div>
  );

  const FeatureCard = ({ icon: Icon, title, description, delay }) => (
    <div
      className="group/feature bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transform transition-all duration-700 hover:-translate-y-2 hover:rotate-1 border border-gray-100 hover:border-[var(--brand-color)] animate-on-scroll translate-y-8"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[var(--brand-color)] to-[var(--brand-color)] rounded-2xl flex items-center justify-center transform transition-all duration-500 group-hover/feature:rotate-12 group-hover/feature:scale-110 shadow-lg">
          <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" /> {/* Adjusted icon size */}
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover/feature:text-[var(--brand-color)] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover/feature:text-gray-800 transition-colors duration-300">
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
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-600 mb-6 sm:mb-8 animate-on-scroll opacity-0 transform translate-y-4" style={{ animationDelay: '0ms' }}>
            <Link to={"/"}>Home</Link>
            <span>/</span>
            <span className="text-black font-semibold">Company Profile</span>
          </div>

          {/* Main Title */}
          <div className="relative inline-block">
            <h1 className="heading-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black mb-4 sm:mb-6 animate-on-scroll opacity-0 transform translate-y-8" style={{ animationDelay: '200ms' }}>
              Company{' '}
              <span className='heading-text relative bg-gradient-to-r from-[var(--brand-color)] to-[var(--brand-color)] bg-clip-text text-transparent'>
                Profile
                <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-[var(--brand-color)] to-[var(--brand-color)] transform scale-x-0 animate-pulse" style={{ animation: 'scaleX 2s ease-in-out infinite' }}></div>
              </span>
            </h1>

            {/* Floating sparkles */}
            <div className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 animate-on-scroll opacity-0" style={{ animationDelay: '400ms' }}>
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[var(--brand-color)] animate-spin" style={{ animationDuration: '8s' }} />
            </div>
            <div className="absolute -bottom-1 sm:-bottom-2 -left-3 sm:-left-4 animate-on-scroll opacity-0" style={{ animationDelay: '600ms' }}>
              <Star className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[var(--brand-color)] animate-pulse" />
            </div>
          </div>

          {/* Enhanced Decorative Elements */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 animate-on-scroll opacity-0 transform translate-y-4" style={{ animationDelay: '800ms' }}>
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

      {/* Enhanced Our Story Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden">
        <div className="w-full sm:w-[95%] lg:w-[90%] px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="group/content animate-on-scroll opacity-0 transform translate-x-[-50px]" style={{ animationDelay: '200ms' }}>
              <div className="transform transition-all duration-700 hover:translate-x-2">
                <h2 className="heading-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 md:mb-10 text-black leading-tight" data-aos="fade-right" data-aos-duration="1500">
                  Our{' '}
                  <span className="relative inline-block group/story">
                    <span className="heading-text bg-gradient-to-r from-[var(--brand-color)] to-[var(--brand-color)] bg-clip-text text-transparent">
                      Story
                    </span>
                    <div className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-1 sm:h-2 bg-gradient-to-r from-[var(--brand-color)] to-[var(--brand-color)] transform scale-x-0 group-hover/story:scale-x-100 transition-transform duration-700 rounded-full"></div>
                    <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2">
                      <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--brand-color)] animate-pulse opacity-0 group-hover/story:opacity-100 transition-opacity duration-500" />
                    </div>
                  </span>
                </h2>

                <div className="space-y-2 sm:space-y-3" data-aos="fade-right" data-aos-duration="1500">
                  <StoryPoint delay={0} icon={Sparkles}>
                    Founded with a vision to revolutionize bathroom aesthetics, Zanord emerged from a simple belief:
                    every bathroom deserves to be a <span className="font-bold text-black bg-[var(--brand-color)] px-1 sm:px-2 py-0.5 sm:py-1 rounded">sanctuary of elegance and functionality</span>.
                  </StoryPoint>

                  <StoryPoint delay={200} icon={Award}>
                    Our journey began when our founders, passionate about design and quality, recognized the gap
                    between ordinary bath accessories and truly <span className="font-bold text-black">premium solutions</span>. Using only the finest
                    <span className="bg-gradient-to-r from-[var(--brand-color)] to-[var(--brand-color)] text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-bold ml-1 sm:ml-2">SS 304 grade steel</span>, we craft each piece with meticulous attention to detail.
                  </StoryPoint>

                  <StoryPoint delay={400} icon={TrendingUp}>
                    Today, Zanord stands as a testament to <span className="font-bold text-black">innovation, quality, and timeless design</span>—trusted by
                    homeowners, architects, and interior designers who refuse to compromise on excellence.
                  </StoryPoint>
                </div>
              </div>
            </div>

            {/* Right Image Section with Enhanced Effects */}
            <div className="relative group/image animate-on-scroll opacity-0 transform translate-x-[50px]" style={{ animationDelay: '400ms' }} data-aos="fade-left" data-aos-duration="1500">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                {/* Image Container */}
                <div className="relative transform transition-all duration-700 group-hover/image:scale-105">
                  <img
                    src="/ovel_black_gold.jpg"
                    alt="Premium Bathroom Accessories"
                    className="w-full h-auto object-cover rounded-3xl max-h-[400px] sm:max-h-[500px] md:max-h-[600px]"
                  />

                  {/* Overlay Effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                  {/* Quality Badge */}
                  <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3 transform transition-all duration-500 group-hover/image:scale-110 group-hover/image:rotate-12 shadow-lg">
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--brand-color)]" />
                  </div>
                </div>

                {/* Floating Elements around Image */}
                <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-[var(--brand-color)] to-[var(--brand-color)] rounded-full animate-bounce opacity-80" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
                <div className="absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-[var(--brand-color)] to-[var(--brand-color)] rounded-full animate-bounce opacity-80" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
                <div className="absolute top-1/2 -right-4 sm:-right-6 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-[var(--brand-color)] to-[var(--brand-color)] rounded-full animate-pulse opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="w-full sm:w-[95%] lg:w-[90%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="heading-text text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 animate-on-scroll opacity-0 transform translate-y-8" data-aos="fade-up" data-aos-duration="1500">
              Why Choose <span className="heading-text text-[var(--brand-color)]">Zanord</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" data-aos="fade-up" data-aos-duration="1500">
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

      <section className="py-16 sm:py-20 md:py-24">
        <div className="w-full sm:w-[95%] lg:w-[90%] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Vision */}
            <div className="animate-on-scroll opacity-0 transform translate-y-8" style={{ animationDelay: '200ms' }} data-aos="fade-right" data-aos-duration="1500">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[var(--brand-color)]">
                <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[var(--brand-color)] rounded-2xl flex items-center justify-center">
                    <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  Our vision as a bathroom accessories manufacturer is to <strong>transform every bathroom into a haven of comfort and sophistication</strong> by crafting innovative, high-quality products that inspire delightful experiences for our customers worldwide.
                </p>
              </div>
            </div>

            {/* Quality */}
            <div className="animate-on-scroll opacity-0 transform translate-y-8" style={{ animationDelay: '400ms' }} data-aos="fade-left" data-aos-duration="1500">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[var(--brand-color)]">
                <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[var(--brand-color)] rounded-2xl flex items-center justify-center">
                    <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
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
          50% { transform: translateY(-15px) rotate(5deg); }
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
      `}</style>
    </div>
  );
};

export default CompanyProfile;