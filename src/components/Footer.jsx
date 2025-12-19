import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-glox-dark text-white pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div>
                        <div className="mb-6">
                            <span className="text-4xl font-black text-white tracking-tighter">GLOX</span>
                            <span className="block text-xs font-bold text-glox-green uppercase tracking-widest">Global Express</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            The premier European partner for intermodal logistics. We connect the continent's ports to your doorstep with speed and precision.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-glox-green transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-glox-green transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-glox-green transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-glox-green transition-colors"><Youtube size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-l-4 border-glox-green pl-3">Services</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link to="/services/drayage" className="hover:text-white transition-colors">Drayage</Link></li>
                            <li><Link to="/services/rail" className="hover:text-white transition-colors">Intermodal Rail</Link></li>
                            <li><Link to="/services/warehousing" className="hover:text-white transition-colors">Warehousing</Link></li>
                            <li><Link to="/services/customs" className="hover:text-white transition-colors">Customs Brokerage</Link></li>
                            <li><Link to="/services/project-cargo" className="hover:text-white transition-colors">Project Cargo</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-l-4 border-glox-green pl-3">Company</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/work-with-us" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link to="/sustainability" className="hover:text-white transition-colors">Sustainability</Link></li>
                            <li><Link to="/news" className="hover:text-white transition-colors">News & Insights</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-l-4 border-glox-green pl-3">European HQ</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex gap-3">
                                <MapPin className="text-glox-green flex-shrink-0" size={20} />
                                <span>
                                    Maasvlakte Boulevard 1<br />
                                    3011 Rotterdam<br />
                                    The Netherlands
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <Phone className="text-glox-green flex-shrink-0" size={20} />
                                <span>+31 10 123 4567</span>
                            </li>
                            <li className="flex gap-3">
                                <Mail className="text-glox-green flex-shrink-0" size={20} />
                                <span>europe@glox-logistics.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; 2024 GLOX Global Express. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                        <a href="#" className="hover:text-white">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
