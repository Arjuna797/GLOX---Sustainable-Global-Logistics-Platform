import React from 'react';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

const News = () => {
    const newsItems = [
        {
            id: 1,
            title: "GLOX Expands Rail Network to Italy",
            category: "Network",
            date: "Dec 15, 2024",
            image: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=2069&auto=format&fit=crop",
            excerpt: "New direct connections between Rotterdam and Milan are now operational, offering faster transit times for cross-border shipments."
        },
        {
            id: 2,
            title: "Sustainability Milestone: 50% EV Fleet",
            category: "Sustainability",
            date: "Nov 28, 2024",
            image: "https://images.unsplash.com/photo-1591768793355-74d04bb6608f?q=80&w=2072&auto=format&fit=crop",
            excerpt: "We are proud to announce that half of our drayage fleet now runs on electric power, significantly reducing our carbon footprint."
        },
        {
            id: 3,
            title: "New Smart Warehouse in Hamburg",
            category: "Facilities",
            date: "Nov 10, 2024",
            image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop",
            excerpt: "Our latest 50,000 sqm facility features automated sorting and real-time inventory tracking to boost efficiency."
        },
        {
            id: 4,
            title: "Strategic Alliance with OceanBlue",
            category: "Partnership",
            date: "Oct 22, 2024",
            image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop",
            excerpt: "A new partnership securing guaranteed capacity on major Trans-Atlantic routes for GLOX customers."
        },
        {
            id: 5,
            title: "Client Portal 2.0 Launch",
            category: "Technology",
            date: "Oct 05, 2024",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
            excerpt: "Experience our upgraded digital platform with enhanced tracking, instant quoting, and automated documentation."
        },
        {
            id: 6,
            title: "Q3 Report: Intermodal Growth",
            category: "Performance",
            date: "Sep 30, 2024",
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2071&auto=format&fit=crop",
            excerpt: "Intermodal rail volumes have surged by 25% this quarter as more clients opt for sustainable transport solutions."
        }
    ];

    return (
        <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-black text-glox-dark mb-4 uppercase tracking-tight">Latest News</h1>
                    <p className="text-xl text-gray-600">Insights, updates, and announcements from the world of GLOX Logistics.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsItems.map((item) => (
                        <div key={item.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden border border-gray-100 flex flex-col">
                            <div className="h-56 overflow-hidden relative">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-glox-dark uppercase tracking-wider flex items-center gap-1">
                                    <Tag size={12} className="text-glox-green" /> {item.category}
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                                    <Calendar size={14} />
                                    <span>{item.date}</span>
                                </div>
                                <h3 className="text-xl font-bold text-glox-dark mb-3 leading-tight group-hover:text-glox-green transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">
                                    {item.excerpt}
                                </p>
                                <a href="#" className="inline-flex items-center gap-2 font-bold text-glox-dark uppercase text-sm tracking-wider group-hover:gap-3 transition-all">
                                    Read Article <ArrowRight size={16} className="text-glox-green" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default News;
