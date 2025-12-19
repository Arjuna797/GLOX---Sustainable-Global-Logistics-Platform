import React from 'react';
import Hero from '../components/Hero';
import ServicesGrid from '../components/ServicesGrid';
import EuropeMap from '../components/EuropeMap';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <>
            <Hero />
            <ServicesGrid />
            <EuropeMap />
            <Testimonials />
        </>
    );
};

export default Home;
