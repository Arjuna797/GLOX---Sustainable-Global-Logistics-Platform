import React from 'react';

const WorkWithUs = () => {
    return (
        <div className="pt-24 pb-20 container mx-auto px-4">
            <h1 className="text-4xl font-bold text-glox-dark mb-6">Work with Us</h1>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl">
                Join a team that keeps Europe moving. We are always looking for dedicated drivers,
                logistics planners, and technology experts.
            </p>

            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm max-w-3xl">
                <h2 className="text-2xl font-bold text-glox-dark mb-4">Open Positions</h2>
                <div className="space-y-6">
                    <div className="flex justify-between items-center border-b pb-4">
                        <div>
                            <h3 className="font-bold text-lg">International Truck Driver (CE)</h3>
                            <p className="text-gray-500">Rotterdam, NL</p>
                        </div>
                        <button className="text-glox-green font-bold uppercase text-sm">Apply Now</button>
                    </div>
                    <div className="flex justify-between items-center border-b pb-4">
                        <div>
                            <h3 className="font-bold text-lg">Transport Planner</h3>
                            <p className="text-gray-500">Hamburg, DE</p>
                        </div>
                        <button className="text-glox-green font-bold uppercase text-sm">Apply Now</button>
                    </div>
                    <div className="flex justify-between items-center border-b pb-4">
                        <div>
                            <h3 className="font-bold text-lg">Customs Specialist</h3>
                            <p className="text-gray-500">Antwerp, BE</p>
                        </div>
                        <button className="text-glox-green font-bold uppercase text-sm">Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkWithUs;
