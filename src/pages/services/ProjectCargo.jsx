import React from 'react';
import ServiceDetail from './ServiceDetail';

const ProjectCargo = () => {
    return (
        <ServiceDetail
            title="Project Cargo"
            subtitle="Specialized handling for oversized, heavy, and complex shipments."
            image="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=2070&auto=format&fit=crop"
            description={
                <>
                    <p className="mb-4">
                        When your cargo doesn't fit in a standard box, GLOX Project Cargo team steps in. We excel in moving heavy machinery, industrial equipment, and out-of-gauge shipments that require specialized planning.
                    </p>
                    <p className="mb-4">
                        Every project shipment is unique. We conduct detailed route surveys, engineering studies, and risk assessments to design a custom transport solution. From flat racks to breakbulk vessels, we coordinate every detail.
                    </p>
                    <p>
                        Our expert team supervises loading and unloading operations to ensure the safety and integrity of your high-value assets throughout the journey.
                    </p>
                </>
            }
            features={[
                "Out-of-Gauge (OOG) Transport",
                "Breakbulk & Heavy Lift Shipping",
                "Route Surveys & Feasibility Studies",
                "Crane & Rigging Coordination",
                "Permit Acquisition & Escort Services",
                "End-to-End Project Management"
            ]}
        />
    );
};

export default ProjectCargo;
