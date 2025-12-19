import React, { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Truck, Ship, Package, Plane, Maximize, Minimize } from 'lucide-react';
import { renderToStaticMarkup } from 'react-dom/server';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const createIcon = (IconComponent, color) => {
    const iconMarkup = renderToStaticMarkup(
        <div className="relative flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-xl border-4 border-white transform transition-transform hover:scale-110" style={{ color: color }}>
            <IconComponent size={24} fill={color} className="opacity-90" />
            <div className="absolute -bottom-1 w-3 h-3 bg-white transform rotate-45"></div>
        </div>
    );

    return L.divIcon({
        html: iconMarkup,
        className: 'custom-leaflet-icon',
        iconSize: [48, 48],
        iconAnchor: [24, 52],
        popupAnchor: [0, -52],
    });
};

const VehicleMarker = ({ position, type }) => {
    let IconComponent = Truck;
    let color = '#10b981'; // Green

    if (type === 'sea') {
        IconComponent = Ship;
        color = '#3b82f6'; // Blue
    } else if (type === 'air') {
        IconComponent = Plane;
        color = '#ef4444'; // Red
    }

    const icon = createIcon(IconComponent, color);

    return (
        <Marker position={position} icon={icon} zIndexOffset={100}>
            <Popup className="custom-popup">
                <div className="text-center">
                    <h3 className="font-bold text-gray-800 capitalize">{type} Transit</h3>
                    <p className="text-sm text-gray-600">On Schedule</p>
                </div>
            </Popup>
        </Marker>
    );
};

const MapBounds = ({ route }) => {
    const map = useMap();
    useEffect(() => {
        if (route && route.length > 0) {
            const bounds = L.latLngBounds(route);
            map.fitBounds(bounds, { padding: [100, 100] });
        }
    }, [route, map]);
    return null;
};

// Component to handle map resize updates
const MapUpdater = ({ isFullscreen }) => {
    const map = useMap();
    useEffect(() => {
        const timer = setTimeout(() => {
            map.invalidateSize();
        }, 100); // Faster update for smoother feel
        return () => clearTimeout(timer);
    }, [isFullscreen, map]);
    return null;
};

const TrackingMap = ({ route, type = 'truck' }) => {
    const [currentPosition, setCurrentPosition] = useState(route[0]);
    const [progress, setProgress] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);

    // Portal container ref
    const mapContentRef = useRef(null);

    const toggleFullscreen = () => {
        setIsFullscreen(!isFullscreen);
    };

    // Animation
    useEffect(() => {
        let animationFrame;
        let startTime;
        const duration = type === 'air' ? 5000 : 12000;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const t = (elapsed % duration) / duration;

            if (route.length > 1) {
                const totalSegments = route.length - 1;
                const segmentIndex = Math.floor(t * totalSegments);
                const segmentProgress = (t * totalSegments) - segmentIndex;

                const start = route[segmentIndex];
                const end = route[segmentIndex + 1] || route[route.length - 1];

                const lat = start[0] + (end[0] - start[0]) * segmentProgress;
                const lng = start[1] + (end[1] - start[1]) * segmentProgress;

                setCurrentPosition([lat, lng]);
                setProgress(t * 100);
            }
            animationFrame = requestAnimationFrame(animate);
        };
        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [route, type]);

    const routeColor = '#3b82f6'; // Blue

    const MapContent = (
        <div
            className={`relative transition-all duration-300 bg-gray-50 border-gray-100 shadow-xl
                ${isFullscreen
                    ? 'fixed inset-0 z-[10000] h-screen w-screen border-0 rounded-none'
                    : 'w-full h-[600px] rounded-[2rem] border-8 border-white overflow-hidden'
                }`}
        >
            <MapContainer
                center={route[0]}
                zoom={4}
                style={{ height: '100%', width: '100%' }}
                scrollWheelZoom={true} // Enable scroll zoom
                zoomControl={false}
            >
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                />

                <MapBounds route={route} />
                <MapUpdater isFullscreen={isFullscreen} />

                <Polyline
                    positions={route}
                    pathOptions={{
                        color: routeColor,
                        weight: 6,
                        opacity: 0.8,
                        lineCap: 'round',
                        lineJoin: 'round',
                        dashArray: type === 'air' ? '10, 10' : null
                    }}
                />

                <Marker position={route[0]} icon={createIcon(Package, '#6b7280')}>
                    <Popup>Origin</Popup>
                </Marker>

                <Marker position={route[route.length - 1]} icon={createIcon(Package, '#6b7280')}>
                    <Popup>Destination</Popup>
                </Marker>

                <VehicleMarker position={currentPosition} type={type} />

            </MapContainer>

            {/* Controls */}
            <div className="absolute top-6 right-6 z-[1000] flex flex-col gap-3">
                <button
                    onClick={toggleFullscreen}
                    className="bg-white text-gray-700 p-4 rounded-full shadow-2xl hover:bg-glox-green hover:text-white transition-all transform hover:scale-110"
                    title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                >
                    {isFullscreen ? <Minimize size={28} /> : <Maximize size={28} />}
                </button>
            </div>

            {/* Overlay Info */}
            <div className="absolute bottom-8 left-8 z-[1000] bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-gray-100 max-w-sm">
                <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl ${type === 'air' ? 'bg-red-100 text-red-600' : type === 'sea' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}`}>
                        {type === 'air' ? <Plane size={24} /> : type === 'sea' ? <Ship size={24} /> : <Truck size={24} />}
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-lg capitalize">{type} Freight</h4>
                        <p className="text-xs text-gray-500 font-medium tracking-wide">LIVE TRACKING ACTIVE</p>
                    </div>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5 mb-2 overflow-hidden">
                    <div
                        className={`h-full rounded-full transition-all duration-300 ${type === 'air' ? 'bg-red-500' : 'bg-blue-500'}`}
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-400 font-bold uppercase tracking-widest">
                    <span>Shanghai</span>
                    <span>Los Angeles</span>
                </div>
            </div>
        </div>
    );

    // If fullscreen, use Portal to render at body level to escape z-index/overflow issues
    if (isFullscreen) {
        return createPortal(MapContent, document.body);
    }

    return MapContent;
};

export default TrackingMap;
