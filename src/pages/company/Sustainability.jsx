import React from 'react';
import ServiceDetail from '../services/ServiceDetail';
import SustainabilityAnalytics from '../../components/SustainabilityAnalytics';
import { Leaf, Recycle, Wind, Droplets } from 'lucide-react';
import { motion } from 'framer-motion';

const Sustainability = () => {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: `url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop)` }}
                >
                    <div className="absolute inset-0 bg-glox-dark/60 backdrop-blur-sm"></div>
                </div>

                <div className="relative z-10 container mx-auto px-4 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase">Moving Green</h1>
                        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
                            Pioneering sustainable logistics for a cleaner tomorrow.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <h2 className="text-4xl font-bold text-glox-dark mb-6">Our Commitment to Net Zero</h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            At GLOX, we believe that efficient logistics shouldn't cost the Earth. We are actively transforming our operations to minimize our environmental impact, targeting net-zero carbon emissions by 2040.
                        </p>
                    </div>

                    <SustainabilityAnalytics />


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Wind, title: "Clean Energy Fleet", desc: "Transitioning 50% of our drayage fleet to electric and hydrogen power by 2030." },
                            { icon: Leaf, title: "Carbon Offsetting", desc: "Partnering with certified reforestation projects to offset unavoidable emissions." },
                            { icon: Recycle, title: "Smart Routing", desc: "Using AI to optimize routes, reducing empty miles and fuel consumption." },
                            { icon: Droplets, title: "Intermodal First", desc: "Prioritizing rail and barge transport to significantly lower carbon footprint per ton-km." }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-gray-50 p-8 rounded-3xl text-center border border-gray-100 hover:shadow-lg transition-all"
                            >
                                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-glox-green">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-glox-dark mb-3">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sustainability;
