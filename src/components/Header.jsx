import React, { useState } from 'react';
import { Menu, X, Phone, User, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'About Us', href: '/about' },
        { name: 'Solutions', href: '/solutions' },
        { name: 'Network', href: '/network' },
        { name: 'Work with Us', href: '/work-with-us' },
        { name: 'News', href: '/news' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
            {/* Top Bar */}
            <div className="bg-glox-dark text-white text-xs py-2">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex gap-4">
                        <a href="tel:+31123456789" className="flex items-center gap-1 hover:text-glox-green transition-colors">
                            <Phone size={14} /> +31 10 123 4567 (EU HQ)
                        </a>
                    </div>
                    <div className="flex gap-4">
                        <Link to="/login" className="flex items-center gap-1 hover:text-glox-green transition-colors">
                            <User size={14} /> Client Portal
                        </Link>
                        <a href="#" className="flex items-center gap-1 hover:text-glox-green transition-colors">
                            <Globe size={14} /> EN
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Nav */}
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex flex-col">
                        <span className="text-2xl font-black text-glox-green tracking-tighter">GLOX</span>
                        <span className="text-[0.6rem] font-bold text-glox-dark uppercase tracking-widest -mt-1">Global Express</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        <nav>
                            <ul className="flex gap-6 font-medium text-sm text-glox-dark">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.href}
                                            className={`uppercase tracking-wide transition-colors ${isActive(link.href) ? 'text-glox-green font-bold' : 'hover:text-glox-green'}`}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div className="flex items-center gap-4">
                            <Link to="/track" className="text-sm font-bold text-glox-dark hover:text-glox-green uppercase">
                                Track Shipment
                            </Link>
                            <Link to="/get-quote" className="bg-glox-green text-white px-6 py-2.5 font-bold text-sm uppercase hover:bg-green-700 transition-colors">
                                Get a Quote
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-glox-dark" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-white border-t border-gray-100 absolute w-full"
                >
                    <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="text-glox-dark font-medium hover:text-glox-green py-2 border-b border-gray-50"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/track" className="text-glox-dark font-bold py-2" onClick={() => setIsOpen(false)}>Track Shipment</Link>
                        <Link to="/get-quote" className="bg-glox-green text-white text-center py-3 font-bold uppercase mt-2" onClick={() => setIsOpen(false)}>
                            Get a Quote
                        </Link>
                    </div>
                </motion.div>
            )}
        </header>
    );
};

export default Header;
