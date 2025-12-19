import React from 'react';
import ServiceDetail from './ServiceDetail';

const Drayage = () => {
    return (
        <ServiceDetail
            title="Pan-European Drayage"
            subtitle="Connect every major port to inland destinations with our reliable fleet."
            image="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop"
            description={
                <>
                    <p className="mb-4">
                        Our drayage services bridge the gap between ocean ports and inland locations across Europe. We understand that the "first and last mile" are critical to your supply chain's success.
                    </p>
                    <p className="mb-4">
                        With GLOX, you gain access to a vast network of chassis and drivers ready to move your containers swiftly. Whether you're importing goods through Rotterdam or exporting via Hamburg, our fleet is positioned to handle high volumes with precision timing.
                    </p>
                    <p>
                        We navigate complex EU transport regulations so you don't have to, ensuring compliance and efficiency in every haul.
                    </p>
                </>
            }
            features={[
                "Port-to-Door Delivery Service",
                "Real-time Shipment Tracking",
                "Specialized Chassis for Heavy Loads",
                "Cross-border Compliance Management",
                "24/7 Dispatch and Support",
                "Flexible Capacity for Peak Seasons"
            ]}
        />
    );
};

export default Drayage;
