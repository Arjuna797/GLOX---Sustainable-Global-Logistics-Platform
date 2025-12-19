import React, { useState } from 'react';
import { Search, MapPin, Calendar, Clock, Anchor, Factory, Plane } from 'lucide-react';
import TrackingMap from '../components/TrackingMap';

const TrackShipment = () => {
    const [searchId, setSearchId] = useState('');
    const [trackingResult, setTrackingResult] = useState(null);
    const [isSearching, setIsSearching] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
        if (!searchId.trim()) return;

        setIsSearching(true);
        // Simulate API call
        setTimeout(() => {
            // Determine type based on input or random for demo
            // If input contains "AIR", force air.
            const isAir = searchId.toUpperCase().includes('AIR') || Math.random() > 0.6;

            const route = isAir ? [
                [31.2304, 121.4737], // Shanghai
                [55.0, -160.0],      // Over Pacific (Arc)
                [34.0522, -118.2437] // LA
            ] : [
                [31.2304, 121.4737], // Shanghai
                [25.0, 130.0],
                [35.0, -140.0],
                [34.0522, -118.2437] // LA
            ];

            setTrackingResult({
                id: searchId.toUpperCase(),
                status: 'In Transit',
                origin: 'Shanghai, CN',
                destination: 'Los Angeles, US',
                eta: 'Oct 24, 2026', // Request: Update time like 2026
                type: isAir ? 'air' : 'sea',
                route: route
            });
            setIsSearching(false);
        }, 1200);
    };

    return (
        <div className="pt-32 pb-40 container mx-auto px-4 bg-gray-50 min-h-screen">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-glox-dark mb-4">Track Your Shipment</h1>
                    <p className="text-lg text-gray-600">
                        Global visibility for Air, Sea, and Land Freight.
                    </p>
                </div>

                {/* Search Box */}
                <div className="bg-white p-2 rounded-full shadow-xl border border-gray-100 flex items-center mb-16 max-w-2xl mx-auto transform transition-all hover:scale-105 hover:shadow-2xl">
                    <input
                        type="text"
                        value={searchId}
                        onChange={(e) => setSearchId(e.target.value)}
                        placeholder="Enter Tracking ID (Try 'AIR-123' for Air Freight)"
                        className="flex-1 p-4 pl-8 rounded-full focus:outline-none text-xl bg-transparent font-medium"
                    />
                    <button
                        onClick={handleSearch}
                        disabled={isSearching}
                        className="bg-glox-green text-white p-4 px-8 rounded-full hover:bg-green-700 transition-all shadow-lg disabled:opacity-70 disabled:cursor-not-allowed text-lg font-bold flex items-center gap-2"
                    >
                        {isSearching ? 'Searching...' : <>Track <Search size={22} /></>}
                    </button>
                </div>

                {/* Results Section */}
                {trackingResult && (
                    <div className="animate-fade-in-up space-y-10">

                        {/* Status Dashboard */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                                <div className="p-4 bg-gray-100 text-gray-600 rounded-full mb-3">
                                    <MapPin size={28} />
                                </div>
                                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Origin</p>
                                <p className="font-bold text-gray-900 text-lg">{trackingResult.origin}</p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                                <div className="p-4 bg-blue-100 text-blue-600 rounded-full mb-3">
                                    <Clock size={28} />
                                </div>
                                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Status</p>
                                <p className="font-bold text-glox-green text-lg">{trackingResult.status}</p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                                <div className={`p-4 rounded-full mb-3 ${trackingResult.type === 'air' ? 'bg-red-100 text-red-600' : 'bg-indigo-100 text-indigo-600'}`}>
                                    {trackingResult.type === 'air' ? <Plane size={28} /> : <Anchor size={28} />}
                                </div>
                                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Mode</p>
                                <p className="font-bold text-gray-900 text-lg capitalize">{trackingResult.type} Freight</p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                                <div className="p-4 bg-orange-100 text-orange-600 rounded-full mb-3">
                                    <Calendar size={28} />
                                </div>
                                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Estimated Arrival</p>
                                <p className="font-bold text-gray-900 text-lg">{trackingResult.eta}</p>
                            </div>
                        </div>

                        {/* Map Component */}
                        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border-8 border-white">
                            <TrackingMap route={trackingResult.route} type={trackingResult.type} />
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
};

export default TrackShipment;
