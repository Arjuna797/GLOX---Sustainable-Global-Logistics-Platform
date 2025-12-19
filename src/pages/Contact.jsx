import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-24 pb-20 px-4">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-black text-glox-dark mb-4">GET IN TOUCH</h1>
                    <p className="text-xl text-gray-600">Our team is ready to assist with your logistics challenges.</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">

                    {/* Contact Info */}
                    <div className="bg-glox-dark text-white p-12 flex flex-col justify-between relative overflow-hidden">
                        <div className="z-10 relative">
                            <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="bg-white/10 p-3 rounded-lg"><MapPin size={24} className="text-glox-green" /></div>
                                    <div>
                                        <h4 className="font-bold text-lg">European HQ</h4>
                                        <p className="text-gray-400">Maasvlakte Boulevard 1<br />3011 Rotterdam<br />The Netherlands</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-white/10 p-3 rounded-lg"><Phone size={24} className="text-glox-green" /></div>
                                    <div>
                                        <h4 className="font-bold text-lg">Phone</h4>
                                        <p className="text-gray-400">+31 10 123 4567</p>
                                        <p className="text-gray-500 text-sm mt-1">Mon-Fri 8am-6pm CET</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-white/10 p-3 rounded-lg"><Mail size={24} className="text-glox-green" /></div>
                                    <div>
                                        <h4 className="font-bold text-lg">Email</h4>
                                        <p className="text-gray-400">europe@glox-logistics.com</p>
                                        <p className="text-gray-400">sales@glox-logistics.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative Circles */}
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-glox-green/20 rounded-full blur-3xl"></div>
                        <div className="absolute -top-24 -left-24 w-64 h-64 bg-glox-green/10 rounded-full blur-3xl"></div>
                    </div>

                    {/* Contact Form */}
                    <div className="p-12">
                        <h2 className="text-2xl font-bold text-glox-dark mb-8">Send us a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-glox-green focus:ring-2 focus:ring-glox-green/20 outline-none transition-all" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-glox-green focus:ring-2 focus:ring-glox-green/20 outline-none transition-all" placeholder="your@email.com" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-glox-green focus:ring-2 focus:ring-glox-green/20 outline-none transition-all">
                                    <option>General Inquiry</option>
                                    <option>Sales & Quotes</option>
                                    <option>Operations Support</option>
                                    <option>Careers</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-glox-green focus:ring-2 focus:ring-glox-green/20 outline-none transition-all" placeholder="How can we help?"></textarea>
                            </div>
                            <button type="button" className="w-full bg-glox-dark text-white font-bold py-4 rounded-xl hover:bg-black transition-all flex items-center justify-center gap-2">
                                <Send size={18} /> Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
