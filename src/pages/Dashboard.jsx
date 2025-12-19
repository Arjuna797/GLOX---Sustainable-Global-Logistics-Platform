import React from 'react';
import { motion } from 'framer-motion';
import { Package, Truck, AlertCircle, FileText, Download, Search, Bell, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';

const Dashboard = () => {
    const stats = [
        { label: "Active Shipments", value: "12", icon: Truck, color: "text-blue-500", bg: "bg-blue-50" },
        { label: "Pending Customs", value: "3", icon: AlertCircle, color: "text-orange-500", bg: "bg-orange-50" },
        { label: "Delivered (Mtd)", value: "45", icon: Package, color: "text-glox-green", bg: "bg-green-50" },
        { label: "Open Invoices", value: "2", icon: FileText, color: "text-purple-500", bg: "bg-purple-50" },
    ];

    const shipments = [
        { id: "GLX-893021", origin: "Shanghai, CN", dest: "Los Angeles, US", status: "In Transit", eta: "Dec 24, 2025", type: "Ocean" },
        { id: "GLX-992102", origin: "Rotterdam, NL", dest: "London, UK", status: "Customs Hold", eta: "Dec 21, 2025", type: "Truck" },
        { id: "GLX-773829", origin: "Dubai, AE", dest: "New York, US", status: "Arrived", eta: "Dec 19, 2025", type: "Air" },
        { id: "GLX-332190", origin: "Singapore, SG", dest: "Hamburg, DE", status: "In Transit", eta: "Jan 05, 2026", type: "Ocean" },
        { id: "GLX-112938", origin: "Mumbai, IN", dest: "Toronto, CA", status: "Delivered", eta: "Dec 15, 2025", type: "Air" },
    ];

    const handleDownloadReport = () => {
        const doc = new jsPDF();

        // Header
        doc.setFontSize(22);
        doc.setTextColor(0, 51, 102); // Glox Dark
        doc.text("GLOX Global Express", 20, 20);

        doc.setFontSize(16);
        doc.setTextColor(100);
        doc.text("Monthly Shipment Report", 20, 30);

        doc.setFontSize(10);
        doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, 40);

        // Stats
        doc.setFontSize(14);
        doc.setTextColor(0);
        doc.text("Executive Summary", 20, 55);

        let yPos = 65;
        stats.forEach(stat => {
            doc.setFontSize(12);
            doc.text(`${stat.label}: ${stat.value}`, 25, yPos);
            yPos += 10;
        });

        // Footer
        doc.setFontSize(10);
        doc.setTextColor(150);
        doc.text("Thank you for shipping with GLOX.", 20, 280);

        doc.save("GLOX_Monthly_Report.pdf");
    };

    const handleViewInvoices = () => {
        const doc = new jsPDF();

        doc.setFontSize(20);
        doc.text("Open Invoices", 20, 20);

        doc.setFontSize(12);
        doc.text("1. INV-2025-001 - $1,200.00 - Due Dec 25, 2025 (Ocean Freight)", 20, 40);
        doc.text("2. INV-2025-002 - $450.50 - Due Dec 28, 2025 (Customs Duty)", 20, 50);

        doc.setFontSize(14);
        doc.text("Total Due: $1,650.50", 20, 70);

        doc.save("GLOX_Open_Invoices.pdf");
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            {/* Dashboard Header */}
            <div className="bg-white border-b border-gray-200">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-glox-dark">My Dashboard</h1>
                    <div className="flex items-center gap-4">
                        <div className="relative hidden md:block">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input type="text" placeholder="Search Shipment ID..." className="pl-10 pr-4 py-2 border rounded-full text-sm focus:outline-none focus:border-glox-green w-64" />
                        </div>
                        <button className="relative">
                            <Bell className="text-gray-600 hover:text-glox-green" size={20} />
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>
                        <div className="w-8 h-8 bg-glox-dark rounded-full flex items-center justify-center text-white font-bold text-xs">
                            JD
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                {/* Welcome */}
                <div className="mb-8">
                    <h2 className="text-3xl font-black text-glox-dark mb-1">Welcome back, John</h2>
                    <p className="text-gray-500">Here is your supply chain overview for today.</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between"
                        >
                            <div>
                                <p className="text-gray-500 text-sm font-medium mb-1">{stat.label}</p>
                                <h3 className="text-3xl font-black text-glox-dark">{stat.value}</h3>
                            </div>
                            <div className={`${stat.bg} ${stat.color} p-4 rounded-xl`}>
                                <stat.icon size={24} />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Recent Shipments */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                            <h3 className="font-bold text-lg text-glox-dark">Recent Shipments</h3>
                            <button className="text-glox-green text-sm font-bold hover:underline">View All</button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50 text-left text-xs uppercase text-gray-500 font-semibold">
                                    <tr>
                                        <th className="px-6 py-4">ID</th>
                                        <th className="px-6 py-4">Route</th>
                                        <th className="px-6 py-4">Type</th>
                                        <th className="px-6 py-4">ETA</th>
                                        <th className="px-6 py-4">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {shipments.map((shipment) => (
                                        <tr key={shipment.id} className="text-sm hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 font-bold text-glox-dark">{shipment.id}</td>
                                            <td className="px-6 py-4 text-gray-600">
                                                <div className="flex flex-col">
                                                    <span>{shipment.origin}</span>
                                                    <span className="text-xs text-gray-400">to {shipment.dest}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-gray-500">{shipment.type}</td>
                                            <td className="px-6 py-4 font-medium">{shipment.eta}</td>
                                            <td className="px-6 py-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold 
                                            ${shipment.status === 'In Transit' ? 'bg-blue-100 text-blue-600' :
                                                        shipment.status === 'Delivered' ? 'bg-green-100 text-green-600' :
                                                            shipment.status === 'Customs Hold' ? 'bg-orange-100 text-orange-600' :
                                                                'bg-gray-100 text-gray-600'}`}>
                                                    {shipment.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="space-y-6">
                        <div className="bg-glox-dark text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="font-bold text-xl mb-4">Book a new Shipment</h3>
                                <p className="text-gray-400 text-sm mb-6">Need to move cargo fast? Get an instant quote and book in minutes.</p>
                                <Link to="/get-quote" className="inline-block bg-glox-green text-white px-6 py-3 rounded-xl font-bold text-sm uppercase hover:bg-green-600 transition-colors">
                                    Start Booking
                                </Link>
                            </div>
                            <Truck className="absolute -right-6 -bottom-6 text-white/5" size={150} />
                        </div>

                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                            <h3 className="font-bold text-lg text-glox-dark mb-4">Quick Links</h3>
                            <ul className="space-y-3">
                                <li>
                                    <button
                                        onClick={handleDownloadReport}
                                        className="w-full flex items-center gap-3 text-gray-600 hover:text-glox-green p-2 hover:bg-gray-50 rounded-lg transition-all text-left"
                                    >
                                        <Download size={18} /> Download Monthly Report
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={handleViewInvoices}
                                        className="w-full flex items-center gap-3 text-gray-600 hover:text-glox-green p-2 hover:bg-gray-50 rounded-lg transition-all text-left"
                                    >
                                        <FileText size={18} /> View Invoices
                                    </button>
                                </li>
                                <li>
                                    <a
                                        href="mailto:support@glox.com?subject=Issue Report: GLX-Client-001"
                                        className="flex items-center gap-3 text-gray-600 hover:text-glox-green p-2 hover:bg-gray-50 rounded-lg transition-all"
                                    >
                                        <AlertCircle size={18} /> Report an Issue
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
