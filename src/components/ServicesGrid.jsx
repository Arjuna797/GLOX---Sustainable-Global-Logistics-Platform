import React from 'react';
import { ArrowRight } from 'lucide-react';
import drayageBg from '../assets/t.jpg';
import railBg from '../assets/ii.jpg';

const services = [
    {
        title: "Pan-European Drayage",
        desc: "Reliable container transport from all major European ports to inland destinations.",
        bg: drayageBg
    },
    {
        title: "Intermodal Rail",
        desc: "Sustainable and cost-effective rail solutions connecting North Sea ports to the hinterland.",
        bg: railBg
    },
    {
        title: "Warehousing & Storage",
        desc: "Secure storage facilities at strategic locations including Rotterdam, Hamburg, and Antwerp.",
        bg: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Customs Brokerage",
        desc: "Expert navigation of updated EU customs regulations and Brexit complexities.",
        bg: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop"
    }
];

const ServicesGrid = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="group relative h-[400px] overflow-hidden rounded-lg cursor-pointer shadow-lg">
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <img
                                    src={service.bg}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-3xl font-bold text-white mb-3">{service.title}</h3>
                                <p className="text-gray-300 mb-6 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    {service.desc}
                                </p>
                                <div className="flex items-center gap-2 text-glox-green font-bold uppercase tracking-wider text-sm">
                                    View Details <ArrowRight size={16} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;
