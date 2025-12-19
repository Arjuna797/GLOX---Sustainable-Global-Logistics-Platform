import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { motion } from 'framer-motion';

const volumeData = [
    { time: '00:00', volume: 150 },
    { time: '04:00', volume: 230 },
    { time: '08:00', volume: 450 },
    { time: '12:00', volume: 580 },
    { time: '16:00', volume: 490 },
    { time: '20:00', volume: 320 },
    { time: '23:59', volume: 180 },
];

const onTimeData = [
    { name: 'On-Time', value: 98.5 },
    { name: 'Late', value: 1.5 },
];

const COLORS = ['#10b981', '#f3f4f6'];

const SupplyChainPerformance = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl font-bold text-glox-dark mb-2">Live Performance</h2>
                        <p className="text-xl text-gray-600">Real-time metrics from our control tower.</p>
                    </div>
                    <div className="flex items-center gap-2 mt-4 md:mt-0">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">System Live</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* On-Time Delivery Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 border border-gray-100 p-8 rounded-3xl shadow-sm"
                    >
                        <h3 className="text-2xl font-bold text-glox-dark mb-6">On-Time Delivery Rate</h3>
                        <div className="flex items-center justify-center h-[300px] relative">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={onTimeData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={80}
                                        outerRadius={110}
                                        startAngle={90}
                                        endAngle={-270}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {onTimeData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} strokeWidth={0} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                                <span className="text-5xl font-black text-glox-dark">98.5%</span>
                                <span className="text-gray-500 font-medium">Last 30 Days</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Volume Trends Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-glox-dark text-white p-8 rounded-3xl shadow-xl"
                    >
                        <h3 className="text-2xl font-bold mb-6">Shipment Volume (24h)</h3>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={volumeData}>
                                    <defs>
                                        <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#ffffff" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#ffffff" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis
                                        dataKey="time"
                                        tick={{ fill: '#9CA3AF' }}
                                        axisLine={false}
                                        tickLine={false}
                                    />
                                    <YAxis
                                        hide={true}
                                    />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px', color: '#fff' }}
                                        itemStyle={{ color: '#fff' }}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="volume"
                                        stroke="#ffffff"
                                        strokeWidth={3}
                                        fill="url(#colorVolume)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SupplyChainPerformance;
