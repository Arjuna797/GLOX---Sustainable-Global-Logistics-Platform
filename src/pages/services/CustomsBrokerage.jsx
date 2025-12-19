import React from 'react';
import ServiceDetail from './ServiceDetail';

const CustomsBrokerage = () => {
    return (
        <ServiceDetail
            title="Customs Brokerage"
            subtitle="Navigating the complexities of international trade compliance."
            image="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2071&auto=format&fit=crop"
            description={
                <>
                    <p className="mb-4">
                        Cross-border trade requires precision and expertise. Our dedicated customs brokerage team ensures your shipments clear customs smoothly, avoiding costly delays and penalties.
                    </p>
                    <p className="mb-4">
                        We stay ahead of changing regulations, tariffs, and trade agreements across the EU and globally. Whether you are importing raw materials or exporting finished goods, we handle all necessary documentation and declarations.
                    </p>
                    <p>
                        GLOX acts as your compliance partner, optimizing your duty payments and ensuring your supply chain remains uninterrupted.
                    </p>
                </>
            }
            features={[
                "Import/Export Declaration Filing",
                "Duty and Tax Calculation",
                "HS Code Classification",
                "Compliance Consulting",
                "Bonded Transit Documentation (T1)",
                "Fiscal Representation Services"
            ]}
        />
    );
};

export default CustomsBrokerage;
