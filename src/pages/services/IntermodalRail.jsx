import React from 'react';
import ServiceDetail from './ServiceDetail';

const IntermodalRail = () => {
    return (
        <ServiceDetail
            title="Intermodal Rail"
            subtitle="Sustainable, cost-effective long-haul transport across the continent."
            image="https://images.unsplash.com/photo-1519817914152-c2d1b1a14158?q=80&w=2070&auto=format&fit=crop"
            description={
                <>
                    <p className="mb-4">
                        Leverage the power of Europe's extensive rail network to move your cargo efficiently and sustainably. Intermodal rail is the backbone of green logistics, offering significant carbon reduction compared to road transport.
                    </p>
                    <p className="mb-4">
                        GLOX connects major North Sea ports with key industrial hubs in the hinterland. Our scheduled rail services ensure predictable transit times and cost stability, even during market fluctuations.
                    </p>
                    <p>
                        Integration with our drayage services means a seamless door-to-door experience, combining the economy of rail with the flexibility of trucks.
                    </p>
                </>
            }
            features={[
                "Daily Connections to Major Hubs",
                "Up to 40% Lower Carbon Emissions",
                "High-Volume Capacity",
                "Secure and Sealed Container Transport",
                "Integrated Last-Mile Delivery",
                "Cost-Effective for Long Distances"
            ]}
        />
    );
};

export default IntermodalRail;
