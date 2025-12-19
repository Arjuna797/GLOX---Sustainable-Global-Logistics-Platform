import React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Truck, Ship, Train, Warehouse } from 'lucide-react';
import videoBg from '../assets/l.mp4';

const Hero = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 50, damping: 20 });
    const mouseY = useSpring(y, { stiffness: 50, damping: 20 });

    function handleMouseMove({ clientX, clientY, currentTarget }) {
        const { width, height } = currentTarget.getBoundingClientRect();
        // Calculate percentage from center (-0.5 to 0.5) and multiply by movement range
        x.set((clientX / width - 0.5) * -30); // Move opposite to mouse for depth effect
        y.set((clientY / height - 0.5) * -30);
    }

    return (
        <section
            onMouseMove={handleMouseMove}
            className="relative h-screen min-h-[600px] flex items-center bg-gray-900 overflow-hidden"
        >
            {/* Background Video with Parallax */}
            <motion.div
                style={{ x: mouseX, y: mouseY, scale: 1.1 }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10" />
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    poster="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
                >
                    <source src={videoBg} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </motion.div>

            <div className="container mx-auto px-4 relative z-20 pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                        Smarter <span className="text-glox-green">European</span> Logistics.
                    </h1>
                    <p className="text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
                        Connecting key European hubs with seamless intermodal solutions.
                        From Rotterdam to Milan, GLOX delivers precision, speed, and reliability.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <button className="bg-glox-green text-white px-8 py-4 font-bold uppercase tracking-wide hover:bg-green-700 transition-all transform hover:translate-x-1 flex items-center gap-2 w-fit">
                            Explore Our Network <ArrowRight size={20} />
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 font-bold uppercase tracking-wide hover:bg-white hover:text-glox-dark transition-colors w-fit">
                            Get a Quote
                        </button>
                    </div>

                    {/* Quick Links */}
                    <div className="border-t border-white/20 pt-8">
                        <p className="text-white/60 text-sm uppercase tracking-widest mb-4 font-semibold">I'm looking for:</p>
                        <div className="flex flex-wrap gap-6 text-white font-medium">
                            <a href="#" className="flex items-center gap-2 hover:text-glox-green transition-colors group">
                                <Truck className="text-glox-green group-hover:scale-110 transition-transform" size={20} />
                                Road Freight
                            </a>
                            <a href="#" className="flex items-center gap-2 hover:text-glox-green transition-colors group">
                                <Train className="text-glox-green group-hover:scale-110 transition-transform" size={20} />
                                Intermodal Rail
                            </a>
                            <a href="#" className="flex items-center gap-2 hover:text-glox-green transition-colors group">
                                <Ship className="text-glox-green group-hover:scale-110 transition-transform" size={20} />
                                Port Drayage
                            </a>
                            <a href="#" className="flex items-center gap-2 hover:text-glox-green transition-colors group">
                                <Warehouse className="text-glox-green group-hover:scale-110 transition-transform" size={20} />
                                Warehousing
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
