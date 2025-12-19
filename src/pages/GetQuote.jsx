import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, Ship, Package, Calculator, Check, AlertCircle } from 'lucide-react';

const GetQuote = () => {
    const [formData, setFormData] = useState({
        contactName: '',
        contactCompany: '',
        contactEmail: '',
        contactPhone: '',
        type: 'import', // import | export
        steamshipLine: '',
        pickupLocation: '',
        deliveryLocation: '',
        containerSize: '40ft',
        isHazardous: false,
        isOverweight: false,
        isReefer: false
    });

    const [quote, setQuote] = useState(null);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const calculateQuote = () => {
        // Mock Calculation Logic
        // Base Rate
        let baseRate = 1200;

        // Container Size Multiplier
        const sizeMultipliers = { '20ft': 1, '40ft': 1.5, '45ft': 1.7, '48ft': 1.8, '53ft': 2.0 };
        baseRate *= (sizeMultipliers[formData.containerSize] || 1);

        // Surcharges
        let surcharges = 0;
        if (formData.isHazardous) surcharges += 500;
        if (formData.isOverweight) surcharges += 300;
        if (formData.isReefer) surcharges += 400;

        // Origin/Dest logic (mock)
        const distanceFactor = (formData.pickupLocation.length + formData.deliveryLocation.length) * 10;
        const freightCost = baseRate + distanceFactor;

        // Fuel Surcharge (15%)
        const fuelSurcharge = freightCost * 0.15;

        // Total
        const totalUSD = freightCost + surcharges + fuelSurcharge;

        // Currency Exchange Rates (Approx)
        const rateEUR = 0.95;
        const rateINR = 84.50;

        setQuote({
            breakdown: [
                { label: 'Base Freight', amount: freightCost },
                { label: 'Special Equipment/Handling', amount: surcharges },
                { label: 'Fuel Surcharge (15%)', amount: fuelSurcharge },
            ],
            total: {
                USD: totalUSD,
                EUR: totalUSD * rateEUR,
                INR: totalUSD * rateINR
            }
        });
    };

    const containerSizes = ['20ft', '40ft', '45ft', '48ft', '53ft'];
    const steamshipLines = ['Maersk', 'MSC', 'CMA CGM', 'COSCO', 'Hapag-Lloyd', 'Evergreen', 'ONE', 'Hyundai', 'Yang Ming'];

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-10"
                >
                    <h1 className="text-4xl font-black text-glox-dark mb-4">REQUEST A QUOTE</h1>
                    <p className="text-gray-600 text-lg">Get instant estimated rates for your international shipments.</p>
                </motion.div>

                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="p-8 md:p-12 space-y-8">

                        {/* Section 1: Contact */}
                        <div>
                            <h3 className="text-lg font-bold text-glox-dark border-b pb-2 mb-4 flex items-center gap-2">
                                <span className="bg-glox-green text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span>
                                Contact Details
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact Name</label>
                                    <input
                                        type="text"
                                        name="contactName"
                                        value={formData.contactName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-glox-green focus:ring-2 focus:ring-glox-green/20 outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                                    <input
                                        type="text"
                                        name="contactCompany"
                                        value={formData.contactCompany}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-glox-green focus:ring-2 focus:ring-glox-green/20 outline-none transition-all"
                                        placeholder="Company Ltd."
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        name="contactEmail"
                                        value={formData.contactEmail}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-glox-green focus:ring-2 focus:ring-glox-green/20 outline-none transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                    <input
                                        type="tel"
                                        name="contactPhone"
                                        value={formData.contactPhone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-glox-green focus:ring-2 focus:ring-glox-green/20 outline-none transition-all"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Section 2: Shipment Details */}
                        <div>
                            <h3 className="text-lg font-bold text-glox-dark border-b pb-2 mb-4 flex items-center gap-2">
                                <span className="bg-glox-green text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span>
                                Shipment Information
                            </h3>

                            {/* Import/Export Toggle */}
                            <div className="flex gap-4 mb-6">
                                <button
                                    className={`flex-1 py-3 rounded-lg font-bold transition-all ${formData.type === 'import' ? 'bg-glox-dark text-white ring-2 ring-glox-dark' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                                    onClick={() => setFormData(prev => ({ ...prev, type: 'import' }))}
                                >
                                    International Import
                                </button>
                                <button
                                    className={`flex-1 py-3 rounded-lg font-bold transition-all ${formData.type === 'export' ? 'bg-glox-dark text-white ring-2 ring-glox-dark' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                                    onClick={() => setFormData(prev => ({ ...prev, type: 'export' }))}
                                >
                                    International Export
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Steamship Line</label>
                                    <select
                                        name="steamshipLine"
                                        value={formData.steamshipLine}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-glox-green focus:ring-2 focus:ring-glox-green/20 outline-none transition-all"
                                    >
                                        <option value="">Select a line...</option>
                                        {steamshipLines.map(line => <option key={line} value={line}>{line}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Location</label>
                                    <input
                                        type="text"
                                        name="pickupLocation"
                                        value={formData.pickupLocation}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-glox-green focus:ring-2 focus:ring-glox-green/20 outline-none transition-all"
                                        placeholder="City, State, or Zip"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Location</label>
                                    <input
                                        type="text"
                                        name="deliveryLocation"
                                        value={formData.deliveryLocation}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-glox-green focus:ring-2 focus:ring-glox-green/20 outline-none transition-all"
                                        placeholder="City, State, or Zip"
                                    />
                                </div>
                            </div>

                            {/* Container Size */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Container Size</label>
                                <div className="flex flex-wrap gap-3">
                                    {containerSizes.map(size => (
                                        <button
                                            key={size}
                                            onClick={() => setFormData(prev => ({ ...prev, containerSize: size }))}
                                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${formData.containerSize === size
                                                    ? 'bg-glox-green text-white shadow-md transform scale-105'
                                                    : 'bg-white border border-gray-200 text-gray-600 hover:border-glox-green hover:text-glox-green'
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Options */}
                            <div className="flex flex-wrap gap-8 items-center bg-gray-50 p-4 rounded-xl">
                                <span className="text-sm font-bold text-gray-500 uppercase">Additional Options:</span>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <div className="relative">
                                        <input type="checkbox" name="isHazardous" checked={formData.isHazardous} onChange={handleInputChange} className="sr-only peer" />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-glox-green"></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">Hazardous</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <div className="relative">
                                        <input type="checkbox" name="isOverweight" checked={formData.isOverweight} onChange={handleInputChange} className="sr-only peer" />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-glox-green"></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">Overweight</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <div className="relative">
                                        <input type="checkbox" name="isReefer" checked={formData.isReefer} onChange={handleInputChange} className="sr-only peer" />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-glox-green"></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">Reefer</span>
                                </label>
                            </div>
                        </div>

                        {/* Action */}
                        <div className="flex justify-end pt-4">
                            <button
                                onClick={calculateQuote}
                                className="bg-glox-green text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:bg-green-600 transition-all flex items-center gap-2"
                            >
                                <Calculator size={20} />
                                Calculate Rate
                            </button>
                        </div>

                    </div>
                </div>

                {/* Quote Result */}
                {quote && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mt-8 bg-glox-dark text-white rounded-3xl shadow-2xl overflow-hidden"
                    >
                        <div className="p-8 md:p-12">
                            <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
                                <Check className="text-glox-green" size={32} />
                                ESTIMATED QUOTE
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                {/* Breakdown */}
                                <div className="space-y-4">
                                    <h4 className="text-gray-400 uppercase text-xs font-bold tracking-widest border-b border-gray-700 pb-2 mb-4">Cost Breakdown</h4>
                                    {quote.breakdown.map((item, idx) => (
                                        <div key={idx} className="flex justify-between items-center text-gray-300">
                                            <span>{item.label}</span>
                                            <span className="font-mono">${item.amount.toFixed(2)}</span>
                                        </div>
                                    ))}
                                    <div className="flex justify-between items-center text-white pt-4 border-t border-gray-700 font-bold text-lg">
                                        <span>Total (USD)</span>
                                        <span className="font-mono text-glox-green text-xl">${quote.total.USD.toFixed(2)}</span>
                                    </div>
                                </div>

                                {/* Currencies */}
                                <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm">
                                    <h4 className="text-gray-400 uppercase text-xs font-bold tracking-widest mb-6">Approximate Totals in Currency</h4>
                                    <div className="space-y-6">
                                        <div>
                                            <span className="block text-sm text-gray-400 mb-1">Euros (EUR)</span>
                                            <span className="text-3xl font-black text-white">€{quote.total.EUR.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                                        </div>
                                        <div>
                                            <span className="block text-sm text-gray-400 mb-1">US Dollar (USD)</span>
                                            <span className="text-3xl font-black text-white">${quote.total.USD.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                                        </div>
                                        <div>
                                            <span className="block text-sm text-gray-400 mb-1">Indian Rupee (INR)</span>
                                            <span className="text-3xl font-black text-white">₹{quote.total.INR.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                                        </div>
                                    </div>
                                    <p className="mt-6 text-xs text-gray-500 flex items-center gap-2">
                                        <AlertCircle size={14} />
                                        <span>Rates are subject to change. Valid for 24 hours.</span>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default GetQuote;
