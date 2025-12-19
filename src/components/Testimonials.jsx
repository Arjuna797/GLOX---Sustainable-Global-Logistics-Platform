import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        text: "GLOX has transformed our supply chain efficiency across Europe. Their intermodal solutions are simply unmatched.",
        author: "Hans Weber",
        role: "Logistics Director, AutoMotive GmbH"
    },
    {
        text: "Reliability is key in our business, and GLOX delivers every single time. The tracking visibility is a game changer.",
        author: "Marie Dubois",
        role: "Supply Chain Manager, Retail Euro Group"
    },
    {
        text: "Fast, efficient, and professional. Their drayage services in Rotterdam saved us critical time during peak season.",
        author: "Lars Jensen",
        role: "Operations Lead, Nordic Imports"
    }
];

const Testimonials = () => {
    return (
        <section className="py-20 bg-glox-dark text-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold mb-4">Client Success Stories</h2>
                    <div className="w-20 h-1 bg-glox-green mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <div key={index} className="bg-white/5 p-8 rounded-lg backdrop-blur-sm border border-white/10 hover:border-glox-green transition-colors">
                            <Quote className="text-glox-green mb-6" size={40} />
                            <p className="text-lg text-gray-300 italic mb-6 leading-relaxed">"{item.text}"</p>
                            <div>
                                <strong className="block text-white font-bold">{item.author}</strong>
                                <span className="text-glox-green text-sm uppercase tracking-wider">{item.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
