import React from 'react';
import ServiceDetail from './ServiceDetail';

const Warehousing = () => {
    return (
        <ServiceDetail
            title="Warehousing & Distribution"
            subtitle="Strategic storage solutions at key logistics gateways."
            image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
            description={
                <>
                    <p className="mb-4">
                        Our warehousing facilities are strategically located near major European ports and transport nodes. We offer more than just storage; we provide a fully integrated distribution hub for your supply chain.
                    </p>
                    <p className="mb-4">
                        From short-term transloading to long-term inventory management, GLOX solutions are scalable to your needs. Our modern facilities are equipped with state-of-the-art WMS technology to provide real-time visibility of your stock.
                    </p>
                    <p>
                        Add value to your logistics with our pick-and-pack, labeling, and kitting services, ensuring your goods are market-ready before they leave our docks.
                    </p>
                </>
            }
            features={[
                "Strategic Port-Centric Locations",
                "Real-Time Inventory Visibility",
                "Cross-Docking and Transloading",
                "Pick, Pack, and Ship Services",
                "Bonded Warehouse Capabilities",
                "Climate-Controlled Storage Options"
            ]}
        />
    );
};

export default Warehousing;
