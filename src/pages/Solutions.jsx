import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SupplyChainPerformance from '../components/SupplyChainPerformance';

const Solutions = () => {
    return (
        <div className="pt-24 pb-20">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-glox-dark mb-6">Our Solutions</h1>
                <p className="text-xl text-gray-600 max-w-3xl mb-16">
                    Comprehensive logistics strategies tailored for the European market. We connect your supply chain with precision and speed.
                </p>

                <div className="space-y-24">
                    <SupplyChainPerformance />

                    {/* Pan-European Drayage */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <img
                                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop"
                                alt="Pan-European Drayage Truck"
                                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                            />
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="text-3xl font-bold text-glox-dark mb-4">Pan-European Drayage</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Reliable container transport from all major European ports to inland destinations.
                                Our extensive fleet ensures flexible and timely delivery across borders, navigating complex EU regulations with ease.
                            </p>
                            <Link to="/services/drayage" className="inline-flex items-center gap-2 text-glox-green font-bold uppercase tracking-wider hover:gap-4 transition-all">
                                View Details <ArrowRight size={20} />
                            </Link>
                        </div>
                    </section>

                    {/* Intermodal Rail */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-1">
                            <h2 className="text-3xl font-bold text-glox-dark mb-4">Intermodal Rail</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Sustainable and cost-effective rail solutions connecting North Sea ports to the hinterland.
                                Reduce your carbon footprint while maintaining supply chain efficiency through our dedicated rail corridors.
                            </p>
                            <Link to="/services/rail" className="inline-flex items-center gap-2 text-glox-green font-bold uppercase tracking-wider hover:gap-4 transition-all">
                                View Details <ArrowRight size={20} />
                            </Link>
                        </div>
                        <div className="order-2">
                            <img
                                src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=2070&auto=format&fit=crop"
                                alt="Intermodal Rail Train"
                                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                            />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Solutions;
