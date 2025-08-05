import { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, Phone, Mail } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [language, setLanguage] = useState('en');

    const location = useLocation();


    const navigationItems = [
        {
            id: 1,
            link: "/",
            pageName: 'Home'
        },
        {
            id: 2,
            link: "/companyProfile",
            pageName: 'Company Profile'
        },
        {
            id: 3,
            link: "/products",
            pageName: 'Products'
        },
        {
            id: 4,
            link: "/gallery",
            pageName: 'Gallery'
        },
        {
            id: 5,
            link: "/e-brochure",
            pageName: 'E-Brochure'
        },
        {
            id: 6,
            link: "/contactUs",
            pageName: 'Contact Us'
        },

    ];

    const handleChange = (e) => setLanguage(e.target.value);

    return (
        <header className="shadow-2xl relative overflow-hidden font-sans">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffd700' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3Ccircle cx='10' cy='50' r='1'/%3E%3Ccircle cx='50' cy='10' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            {/* Contact bar */}
            <div className="bg-[var(--brand-color)] hidden sm:block text-black py-2 px-4 relative z-10 text-sm">
                <div className="w-[90%] mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Phone size={14} />
                        <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="hidden md:flex items-center gap-2">
                        <Mail size={14} />
                        <span>zanordbath@gmail.com</span>
                    </div>
                </div>
            </div>

            {/* Main header */}
            <div className="w-[95%] sm:w-[90%] mx-auto px-4 py-5 relative z-10 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <img className="h-[50px]" src="/logo.png" alt="Logo" />
                </div>

                {/* Navigation (desktop) */}
                <nav className="hidden md:block">
                    <ul className="flex gap-6">
                        {navigationItems.map((item, index) => {
                            const isActive = location.pathname === item.link;

                            return (
                                <li key={index} className="relative group">
                                    <a
                                        href={item.link}
                                        className={`block font-medium pb-1 transition-all duration-300 ${isActive
                                                ? 'text-[var(--brand-color)] scale-105 font-semibold'
                                                : 'text-black hover:text-[var(--brand-color)]'
                                            }`}
                                    >
                                        {item.pageName}

                                        {/* Animated underline for active link */}
                                        <span
                                            className={`absolute bottom-0 left-0 h-0.5 bg-[var(--brand-color)] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                                }`}
                                        ></span>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>

                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    {/* Language selector */}
                    <select
                        value={language}
                        onChange={handleChange}
                        className="px-4 py-2 hidden sm:block rounded-lg bg-black text-white border border-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-color)] focus:border-transparent transition-all duration-200 ease-in-out hover:border-white text-sm sm:text-base"
                    >
                        <option value="en">English</option>
                        <option value="hi">Hindi</option>
                        <option value="gu">Gujarati</option>
                    </select>


                    {/* Mobile menu toggle */}
                    <button
                        className="md:hidden text-black"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-3 z-50">
                    <ul className="space-y-3">
                        {navigationItems.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.link}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block text-black font-medium hover:text-[var(--brand-color)]"
                                >
                                    {item.pageName}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Decorative line */}
            <div className="h-1 bg-gradient-to-r from-transparent via-[var(--brand-color)] to-transparent"></div>
        </header>
    );
}
