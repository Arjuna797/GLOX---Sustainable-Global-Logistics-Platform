import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import WorkWithUs from './pages/WorkWithUs';
import News from './pages/News';
import TrackShipment from './pages/TrackShipment';
import GetQuote from './pages/GetQuote';
import Contact from './pages/Contact';
import Network from './pages/Network';
import Sustainability from './pages/company/Sustainability';
import Drayage from './pages/services/Drayage';
import IntermodalRail from './pages/services/IntermodalRail';
import Warehousing from './pages/services/Warehousing';
import CustomsBrokerage from './pages/services/CustomsBrokerage';
import ProjectCargo from './pages/services/ProjectCargo';

// Scroll to top on route change
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="min-h-screen bg-white font-sans text-glox-dark flex flex-col">
                <Header />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/solutions" element={<Solutions />} />
                        <Route path="/work-with-us" element={<WorkWithUs />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/track" element={<TrackShipment />} />
                        <Route path="/get-quote" element={<GetQuote />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/sustainability" element={<Sustainability />} />
                        <Route path="/network" element={<Network />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/dashboard" element={<Dashboard />} />

                        {/* Services Routes */}
                        <Route path="/services/drayage" element={<Drayage />} />
                        <Route path="/services/rail" element={<IntermodalRail />} />
                        <Route path="/services/warehousing" element={<Warehousing />} />
                        <Route path="/services/customs" element={<CustomsBrokerage />} />
                        <Route path="/services/project-cargo" element={<ProjectCargo />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
