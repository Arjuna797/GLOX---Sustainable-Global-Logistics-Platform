import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix for default Leaflet icon not showing
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const locations = [
    { id: 1, name: "Rotterdam HQ", coords: [51.9225, 4.47917], type: "Headquarters" },
    { id: 2, name: "Hamburg Hub", coords: [53.5511, 9.9937], type: "Port Logistics" },
    { id: 3, name: "Antwerp Hub", coords: [51.2194, 4.4025], type: "Port Logistics" },
    { id: 4, name: "Paris Distribution", coords: [48.8566, 2.3522], type: "Distribution Center" },
    { id: 5, name: "Milan Rail Terminal", coords: [45.4642, 9.1900], type: "Rail Terminal" },
    { id: 6, name: "Warsaw Logistics", coords: [52.2297, 21.0122], type: "Logistics Hub" },
];

const EuropeMap = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-glox-dark mb-4">Regional Expertise. <span className="text-glox-green">European Scope.</span></h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Strategic presence in every major European gateway. Our network ensures your cargo moves efficiently across borders.
                    </p>
                </div>

                <div className="h-[600px] w-full rounded-xl overflow-hidden shadow-2xl border border-gray-200 z-0 relative">
                    <MapContainer
                        center={[50.0, 10.0]}
                        zoom={4}
                        scrollWheelZoom={false}
                        style={{ height: "100%", width: "100%" }}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                        />
                        {locations.map(loc => (
                            <Marker key={loc.id} position={loc.coords}>
                                <Popup className="font-sans">
                                    <strong className="text-glox-green text-lg block mb-1">{loc.name}</strong>
                                    <span className="text-gray-600 text-sm">{loc.type}</span>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>
            </div>
        </section>
    );
};

export default EuropeMap;
