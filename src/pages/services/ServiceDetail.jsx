import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceDetail = ({ title, subtitle, description, features, image, ctaLink = '/get-quote' }) => {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: `url(${image})` }}
                >
                    <div className="absolute inset-0 bg-glox-dark/70 backdrop-blur-sm"></div>
                </div>

                <div className="relative z-10 container mx-auto px-4 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase">{title}</h1>
                        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
                            {subtitle}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Content Section */}
            <div className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold text-glox-dark mb-8">Comprehensive {title} Solutions</h2>
                            <div className="prose prose-lg text-gray-600 mb-10">
                                {description}
                            </div>
                            <Link
                                to={ctaLink}
                                className="inline-flex items-center gap-2 bg-glox-green text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-green-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                Get a Quote <ArrowRight size={20} />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 p-10 rounded-3xl border border-gray-100 shadow-lg"
                        >
                            <h3 className="text-2xl font-bold text-glox-dark mb-8 border-b border-gray-200 pb-4">Key Features</h3>
                            <ul className="space-y-4">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <CheckCircle className="text-glox-green flex-shrink-0 mt-1" size={24} />
                                        <span className="text-lg text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
