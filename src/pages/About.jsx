import React from 'react';

const About = () => {
    return (
        <div className="pt-24 pb-20 container mx-auto px-4">
            <h1 className="text-4xl font-bold text-glox-dark mb-6">About GLOX</h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                GLOX (Global Express) is the premier partner for intermodal logistics in Europe.
                Founded on the principles of reliability and innovation, we manage the flow of goods
                from major gateways like Rotterdam and Hamburg to the furthest corners of the continent.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-glox-green mb-2">Our Mission</h3>
                    <p className="text-gray-600">To simplify European logistics through technology and dedicated service.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-glox-green mb-2">Our Network</h3>
                    <p className="text-gray-600">Over 50 strategic locations across 12 countries.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-glox-green mb-2">Sustainability</h3>
                    <p className="text-gray-600">Committed to reducing CO2 emissions through intermodal transport.</p>
                </div>
            </div>
        </div>
    );
};

export default About;
