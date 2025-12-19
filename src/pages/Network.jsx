import React from 'react';
import GlobalNetworkMap from '../components/GlobalNetworkMap';
import { Globe, Plane, Anchor, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

const Network = () => {
    return (
        <div className="pt-20">
            <div className="bg-glox-dark text-white py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="md:w-1/2">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-glox-green font-bold tracking-widest uppercase mb-4 inline-block"
                        >
                            Global Reach
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-black mb-8 leading-tight"
                        >
                            The World,<br />On Time.
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-400 max-w-lg mb-12"
                        >
                            Our integrated network spans 200+ countries, connecting major economic hubs with precision logistics.
                        </motion.p>

                        <div className="flex gap-8">
                            <div>
                                <h3 className="text-4xl font-bold text-white mb-1">50+</h3>
                                <p className="text-sm text-gray-400 uppercase tracking-wider">Global Hubs</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold text-white mb-1">200+</h3>
                                <p className="text-sm text-gray-400 uppercase tracking-wider">Countries Served</p>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2 w-full">
                        <GlobalNetworkMap />
                    </div>
                </div>

                {/* Background Decor */}
                <Globe className="absolute -right-20 -bottom-20 text-white/5 w-[500px] h-[500px]" strokeWidth={0.5} />
            </div>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { icon: Plane, title: "Air Freight", desc: "Express connections between all major continents with 24-48h transit times." },
                            { icon: Anchor, title: "Ocean Freight", desc: "High-capacity lanes connecting major ports in Asia, Europe, and the Americas." },
                            { icon: Truck, title: "Ground Network", desc: "Dense last-mile delivery network ensuring your cargo reaches the final doorstep." }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-center group"
                            >
                                <div className="w-20 h-20 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-glox-green/10 transition-colors">
                                    <item.icon size={40} className="text-glox-dark group-hover:text-glox-green transition-colors" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold text-glox-dark mb-4">{item.title}</h3>
                                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Network;
