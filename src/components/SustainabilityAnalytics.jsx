import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { motion } from 'framer-motion';

const SustainabilityAnalytics = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/data/sustainability.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then(jsonData => {
                setData(jsonData);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching sustainability data:", err);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <section className="py-20 bg-gray-50 flex justify-center items-center min-h-[400px]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-glox-green"></div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="py-20 bg-gray-50 flex justify-center items-center">
                <p className="text-red-500">Error loading analytics: {error}</p>
            </section>
        );
    }

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-glox-dark mb-4">Impact Analytics</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Track our progress towards Net Zero. We transparently share our carbon reduction metrics.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-xl max-w-5xl mx-auto">
                    <div className="h-[400px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart
                                data={data.analytics}
                                margin={{
                                    top: 10,
                                    right: 30,
                                    left: 0,
                                    bottom: 0,
                                }}
                            >
                                <defs>
                                    <linearGradient id="colorEmissions" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorSavings" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                                <XAxis
                                    dataKey="year"
                                    tick={{ fill: '#4B5563' }}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <YAxis
                                    tick={{ fill: '#4B5563' }}
                                    tickLine={false}
                                    axisLine={false}
                                    label={{ value: 'Metric Tons CO2', angle: -90, position: 'insideLeft', offset: 10, fill: '#6B7280' }}
                                />
                                <Tooltip
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                                />
                                <Legend wrapperStyle={{ paddingTop: '20px' }} />
                                <Area
                                    type="monotone"
                                    dataKey="emissions"
                                    name="CO2 Emissions"
                                    stroke="#ef4444"
                                    fillOpacity={1}
                                    fill="url(#colorEmissions)"
                                />
                                <Area
                                    type="monotone"
                                    dataKey="savings"
                                    name="CO2 Savings"
                                    stroke="#10b981"
                                    fillOpacity={1}
                                    fill="url(#colorSavings)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-100">
                        <div className="text-center">
                            <p className="text-sm text-gray-500 mb-1 uppercase tracking-wider font-semibold">Total Savings</p>
                            <p className="text-3xl font-black text-glox-green">{data.metrics.totalSavings}</p>
                        </div>
                        <div className="text-center">
                            <p className="text-sm text-gray-500 mb-1 uppercase tracking-wider font-semibold">Current Emissions</p>
                            <p className="text-3xl font-black text-red-500">{data.metrics.currentEmissions}</p>
                        </div>
                        <div className="text-center">
                            <p className="text-sm text-gray-500 mb-1 uppercase tracking-wider font-semibold">Net Zero Target</p>
                            <p className="text-3xl font-black text-glox-dark">{data.metrics.target}</p>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-xs text-gray-400 italic">
                            * Data sourced from Kaggle: Global Supply Chain Emissions Analysis (2015-2024). Modeled for demonstration.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SustainabilityAnalytics;
