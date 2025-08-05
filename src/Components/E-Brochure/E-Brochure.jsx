import React, { useState, useEffect } from 'react';
import { Download, FileText, Eye, Share2, Mail, Phone, MapPin, Star, Check, Play, Pause, Volume2, VolumeX, ExternalLink, Calendar, Clock, Users, Award, Sparkles } from 'lucide-react';
import Header from '../Home/Header';
import Whatsapp from '../Whatsapp';
import Footer from '../Home/Footer';
import { Link } from 'react-router-dom';

const ZanordEBrochure = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [downloadCount, setDownloadCount] = useState(1247);
  const [selectedFormat, setSelectedFormat] = useState('pdf');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);


  const features = [
    { icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6" />, title: "20+ Pages", description: "Comprehensive product showcase" },
    { icon: <Star className="w-5 h-5 sm:w-6 sm:h-6" />, title: "HD Images", description: "High resolution product photos" },
    { icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />, title: "Latest Collection", description: "2024-25 newest products" },
    { icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />, title: "Customer Reviews", description: "Real customer testimonials" }
  ];

  const handleDownload = (format) => {
    setIsDownloading(true);
    setDownloadProgress(0);

    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDownloading(false);
          setDownloadCount(prev => prev + 1);
          const link = document.createElement('a');
          link.href = '/zanord_bath.pdf';
          link.download = `zanord-brochure-${format}.${format === 'pdf' ? 'pdf' : format === 'ppt' ? 'pptx' : 'zip'}`;
          link.click();
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);
  };

  const handlePreview = () => {
    window.open('/zanord_bath.pdf', '_blank');
  };

  const handleEmailSubmit = () => {
    if (email && phone) {
      handleDownload(selectedFormat);
      setShowForm(false);
      setEmail('');
      setPhone('');
    }
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

      <div className="py-6 sm:py-8">
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
        <FloatingElement
          delay={0.5}
          size="w-10 h-10 sm:w-14 h-14 md:w-24 h-24"
          position={{ bottom: '10%', right: '5%' }}
        />

        <GeometricShape
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 top-[25%] right-8 sm:right-10 md:right-20 transform rotate-45"
          delay={0}
        />
        <GeometricShape
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bottom-20 sm:bottom-24 md:bottom-32 left-6 sm:left-8 md:left-16 rounded-full"
          delay={3}
        />

        <div className="text-center mt-6 sm:mt-8 md:mt-12">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 md:mb-8" data-aos="fade-up" data-aos-duration="1500">
            <Link to={"/"}>Home</Link>
            <span>/</span>
            <span className="text-black font-medium">E-Brochure</span>
          </div>

          <h1 className="heading-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-3 sm:mb-4 md:mb-6 relative" data-aos="fade-up" data-aos-duration="1500">
            E-Brochure
            <div className="absolute -top-1 sm:-top-2 md:-top-3 -right-1 sm:-right-2 md:-right-3">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[var(--brand-color)] animate-pulse" />
            </div>
          </h1>

          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-4 sm:mt-6 md:mt-8">
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

      <section className="py-12 sm:py-16 flex justify-center">
        <div className="w-[95%] sm:w-[90%] px-4">
          <div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8">

              <div className="w-full md:w-1/2 relative order-2 md:order-1">
                {/* Subtle background decoration */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-xl"></div>

                <div className="relative">
                  <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6" data-aos="fade-right" data-aos-duration="1500">
                    <span className="heading-text bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                      Brochure Preview
                    </span>
                  </h3>

                  <div className="relative p-1 rounded-2xl" data-aos="fade-right" data-aos-duration="1500">
                    <div className="bg-white rounded-xl p-4 sm:p-5">
                      <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                        Discover our exclusive range of{' '}
                        <span className="text-[var(--brand-color)] font-bold">
                          Premium Bath Accessories
                        </span>{' '}
                        crafted for modern homes. Designed with style and durability in mind, our brochure features an array of SS 304 grade products that blend elegance with long-lasting performance.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[var(--brand-color)]/5 rounded-xl p-4 sm:p-5 border border-slate-200 shadow-sm" data-aos="fade-right" data-aos-duration="1500">
                    <ul className="space-y-3 sm:space-y-4">
                      <li className="flex items-center text-gray-700 text-sm sm:text-base group">
                        <div className="w-2 h-2 bg-[var(--brand-color)] rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></div>
                        <span className="group-hover:text-slate-900 transition-colors duration-200">Minimalist & modern design</span>
                      </li>
                      <li className="flex items-center text-gray-700 text-sm sm:text-base group">
                        <div className="w-2 h-2 bg-[var(--brand-color)] rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></div>
                        <span className="group-hover:text-slate-900 transition-colors duration-200">High-grade stainless steel (SS 304)</span>
                      </li>
                      <li className="flex items-center text-gray-700 text-sm sm:text-base group">
                        <div className="w-2 h-2 bg-[var(--brand-color)] rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></div>
                        <span className="group-hover:text-slate-900 transition-colors duration-200">Corrosion & rust-resistant</span>
                      </li>
                      <li className="flex items-center text-gray-700 text-sm sm:text-base group">
                        <div className="w-2 h-2 bg-[var(--brand-color)] rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></div>
                        <span className="group-hover:text-slate-900 transition-colors duration-200">Elegant finishes & smart fixtures</span>
                      </li>
                    </ul>
                  </div>

                  <button
                    className="relative w-full sm:w-auto px-4 sm:px-6 py-3 sm:py-4 mt-6 sm:mt-8 md:mt-10 font-bold bg-[var(--brand-color)] tracking-widest text-black hover:text-white overflow-hidden group text-sm sm:text-base rounded-2xl transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-[var(--brand-color)]/30"
                    data-aos="fade-right" data-aos-duration="1500"
                    onClick={() => setShowForm(true)}
                    disabled={isDownloading}
                  >
                    <span className="absolute left-[-50px] top-0 h-full w-0 skew-x-[45deg] bg-black text-white z-[-1] transition-all duration-1000 group-hover:w-[250%]"></span>
                    <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                      <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                      {isDownloading ? 'Downloading...' : 'Download Now'}
                    </span>
                  </button>
                </div>
              </div>

              <div className="w-full md:w-1/2 overflow-hidden rounded-2xl order-1 md:order-2" data-aos="fade-left" data-aos-duration="1500">
                <div
                  className="relative h-[250px] md:h-full p-4 sm:p-6 rounded-2xl text-white text-center overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                  onClick={handlePreview}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  style={{
                    backgroundImage: "linear-gradient(135deg, rgba(20, 20, 20, 0.3), rgba(40, 40, 40, 0.5)), url('/aristo_black_gold.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--brand-color)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 group-hover:to-black/50 transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--brand-color)]/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>

                  <div className="relative z-10 h-full flex flex-col justify-center">
                    <div className="transform transition-all duration-500 group-hover:scale-110">
                      <p className="heading-text text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-[var(--brand-color)] drop-shadow-lg tracking-wide">
                        Premium Bath Accessories
                      </p>
                      <div className="w-20 sm:w-24 h-1 bg-[var(--brand-color)] mx-auto mb-6 sm:mb-8 rounded-full transform transition-all duration-500 group-hover:w-24 sm:group-hover:w-32"></div>
                    </div>

                    <div className={`absolute top-[45%] inset-0 flex items-center justify-center transition-all duration-500 ${isHovering ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                      <div className="bg-[var(--brand-color)] text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold flex items-center shadow-xl transform transition-all duration-300 hover:bg-[#FDD835] hover:scale-110 hover:shadow-2xl">
                        <Eye className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 animate-pulse" />
                        <span className="text-sm sm:text-lg tracking-wide">Preview Brochure</span>
                      </div>
                    </div>

                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-l-2 border-[var(--brand-color)] opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-r-2 border-[var(--brand-color)] opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-6 sm:w-8 h-6 sm:h-8 border-b-2 border-l-2 border-[var(--brand-color)] opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-6 sm:w-8 h-6 sm:h-8 border-b-2 border-r-2 border-[var(--brand-color)] opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-8 sm:mt-10 md:mt-12 lg:mt-16" data-aos="fade" data-aos-duration="1500">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-6 sm:p-8 text-center shadow-lg shadow-gray-100 hover:shadow-xl hover:shadow-[var(--brand-color)]/20 transition-all duration-500 transform hover:-translate-y-2 border border-gray-50 hover:border-[var(--brand-color)]/30 overflow-hidden"
                  data-aos="fade"
                  data-aos-duration="1500"
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-color)]/5 via-transparent to-[var(--brand-color)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Icon container with enhanced animation */}
                  <div className="relative z-10 text-[var(--brand-color)] mb-4 flex justify-center">
                    <div className="p-3 rounded-xl bg-[var(--brand-color)]/10 group-hover:bg-[var(--brand-color)]/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                    </div>
                  </div>

                  {/* Title with enhanced styling */}
                  <h5 className="relative z-10 heading-text font-bold text-gray-800 group-hover:text-[var(--brand-color)] text-sm sm:text-base mb-3 transition-colors duration-300">
                    {feature.title}
                  </h5>

                  {/* Description with better spacing */}
                  <p className="relative z-10 text-gray-600 group-hover:text-gray-700 text-xs sm:text-sm leading-relaxed transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Subtle animated accent line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[var(--brand-color)] to-[var(--brand-color)]/60 group-hover:w-full transition-all duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full">
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">Get Your Free Brochure</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">Enter your details to download the brochure</p>

            <div className="space-y-4">
              <div>
                <div className="block text-xs sm:text-sm font-semibold text-black mb-2">Email Address</div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:border-[var(--brand-color)] focus:outline-none transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <div className="block text-xs sm:text-sm font-semibold text-black mb-2">Phone Number</div>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:border-[var(--brand-color)] focus:outline-none transition-colors duration-300"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 pt-3 sm:pt-4">
                <button
                  onClick={() => setShowForm(false)}
                  className="flex-1 py-2 sm:py-3 border border-gray-300 text-black rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleEmailSubmit}
                  className="flex-1 py-2 sm:py-3 bg-[var(--brand-color)] text-black rounded-xl font-semibold hover:bg-yellow-300 transition-colors duration-300"
                >
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ZanordEBrochure;