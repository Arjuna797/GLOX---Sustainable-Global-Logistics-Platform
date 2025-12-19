import React, { useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, Tooltip as LeafletTooltip, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Maximize, Moon, Sun, Minimize } from 'lucide-react';

// Fix for default marker icon in React Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const hubs = [
    { name: "London (HQ)", position: [51.505, -0.09], type: "Global HQ", capacity: "Primary Hub" },
    { name: "New York", position: [40.7128, -74.0060], type: "North America Hub", capacity: "High Volume" },
    { name: "Singapore", position: [1.3521, 103.8198], type: "APAC Hub", capacity: "High Volume" },
    { name: "Dubai", position: [25.2048, 55.2708], type: "MEZA Hub", capacity: "Strategic" },
    { name: "Rotterdam", position: [51.9225, 4.47917], type: "Euro Port", capacity: "Sea Freight" },
    { name: "Shanghai", position: [31.2304, 121.4737], type: "Asia Gateway", capacity: "Manufacturing" },
    { name: "Los Angeles", position: [34.0522, -118.2437], type: "West Coast Hub", capacity: "Import/Export" },
];

const routes = [
    { from: [51.505, -0.09], to: [40.7128, -74.0060], color: "#ef4444", type: "Air" },
    { from: [51.505, -0.09], to: [51.9225, 4.47917], color: "#10b981", type: "Rail" },
    { from: [51.9225, 4.47917], to: [1.3521, 103.8198], color: "#3b82f6", type: "Sea" },
    { from: [1.3521, 103.8198], to: [31.2304, 121.4737], color: "#3b82f6", type: "Sea" },
    { from: [25.2048, 55.2708], to: [51.505, -0.09], color: "#ef4444", type: "Air" },
    { from: [31.2304, 121.4737], to: [34.0522, -118.2437], color: "#3b82f6", type: "Sea" },
    { from: [40.7128, -74.0060], to: [34.0522, -118.2437], color: "#10b981", type: "Rail" },
];

// Helper to fly to marker on click
const FlyToMarker = ({ position }) => {
    const map = useMap();
    return (
        <div onClick={() => map.flyTo(position, 6, { duration: 2 })}></div>
    );
};

// Helper to handle map resize events
const MapUpdater = ({ isFullscreen }) => {
    const map = useMap();

    React.useEffect(() => {
        // Invalidate size after a slight delay to allow for CSS transitions/fullscreen animation
        const timer = setTimeout(() => {
            map.invalidateSize();
        }, 400); // 400ms to be safe (transition is 300ms)

        return () => clearTimeout(timer);
    }, [isFullscreen, map]);

    return null;
};

const GlobalNetworkMap = () => {
    const [isDark, setIsDark] = useState(false); // Default to colorful (Day) mode
    const [isFullscreen, setIsFullscreen] = useState(false);
    const mapContainerRef = useRef(null);

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            mapContainerRef.current.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
            });
            setIsFullscreen(true);
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            setIsFullscreen(false);
        }
    };

    // Listen for fullscreen change events (ESC key)
    React.useEffect(() => {
        const handleFullscreenChange = () => {
            if (!document.fullscreenElement) {
                setIsFullscreen(false);
            }
        };
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
    }, []);

    return (
        <div ref={mapContainerRef} className={`w-full relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 transition-all duration-300 ${isFullscreen ? 'h-screen w-screen fixed inset-0 z-[9999] rounded-none border-0' : 'h-[600px]'}`} style={{ backgroundColor: isDark ? '#111827' : '#AAD3DF' }}>
            <MapContainer
                center={[20, 0]}
                zoom={2}
                scrollWheelZoom={true}
                style={{ height: "100%", width: "100%", background: "transparent" }}
                minZoom={2}
            >
                <MapUpdater isFullscreen={isFullscreen} />

                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url={isDark
                        ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                        : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    }
                />

                {/* Routes with Glow Effect */}
                {routes.map((route, idx) => (
                    <React.Fragment key={idx}>
                        {/* Glow Line (Thicker, Transparent) */}
                        <Polyline
                            positions={[route.from, route.to]}
                            pathOptions={{
                                color: route.color,
                                weight: 6,
                                opacity: 0.2,
                            }}
                        />
                        {/* Main Line */}
                        <Polyline
                            positions={[route.from, route.to]}
                            pathOptions={{
                                color: route.color,
                                weight: 2,
                                opacity: 0.8,
                                dashArray: route.type === 'Air' ? '5, 10' : null
                            }}
                        />
                    </React.Fragment>
                ))}

                {hubs.map((hub, idx) => (
                    <Marker key={idx} position={hub.position} eventHandlers={{
                        click: (e) => {
                            e.target._map.flyTo(hub.position, 6, { duration: 1.5 });
                        },
                    }}>
                        <Popup className="custom-popup">
                            <div className="text-center p-2">
                                <h3 className="font-bold text-glox-dark text-lg">{hub.name}</h3>
                                <p className="text-sm text-gray-600 font-medium mb-2">{hub.type}</p>
                                <span className={`text-xs px-2 py-1 rounded-full text-white font-bold
                                    ${hub.type.includes('HQ') ? 'bg-purple-500' : 'bg-glox-green'}
                                `}>{hub.capacity}</span>
                            </div>
                        </Popup>
                        <LeafletTooltip direction="top" offset={[0, -20]} opacity={1}>
                            {hub.name}
                        </LeafletTooltip>
                    </Marker>
                ))}
            </MapContainer>

            {/* Controls Overlay */}
            <div className="absolute top-6 right-6 z-[1000] flex flex-col gap-3">
                <button
                    onClick={() => setIsDark(!isDark)}
                    className="bg-white hover:bg-gray-100 text-glox-dark p-3 rounded-full shadow-lg transition-all"
                    title={isDark ? "Switch to Colorful Map" : "Switch to Dark Map"}
                >
                    {isDark ? <Sun size={24} /> : <Moon size={24} />}
                </button>
                <button
                    onClick={toggleFullscreen}
                    className="bg-glox-green hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all"
                    title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                >
                    {isFullscreen ? <Minimize size={24} /> : <Maximize size={24} />}
                </button>
            </div>

            {/* Legend Overlay */}
            <div className="absolute bottom-6 left-6 z-[1000] bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-gray-100">
                <h4 className="font-bold text-glox-dark mb-2 text-sm">Logistics Corridors</h4>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-0.5 bg-red-500 border-t border-dashed border-red-500"></div>
                        <span className="text-xs font-medium text-gray-600">Air Freight</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-0.5 bg-blue-500"></div>
                        <span className="text-xs font-medium text-gray-600">Ocean Freight</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-0.5 bg-green-500"></div>
                        <span className="text-xs font-medium text-gray-600">Rail Network</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GlobalNetworkMap;
