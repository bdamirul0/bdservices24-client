import React from 'react';
import { Link } from 'react-router-dom';

const ClientSidebar = () => {
    return (
        <div className="Sidebar">
            <h1 className="text-center">BdServices24</h1>
            <div className="sidebar-item">
                <Link to="/book"> <span><img src="https://img.icons8.com/ios-filled/50/000000/mobile-payment.png" alt=""/></span> Book</Link>
                <Link to="/bookingList"> <span><img src="https://img.icons8.com/ios-glyphs/30/000000/favorite-cart.png" alt=""/></span> Booking List</Link>
                <Link to="/review"> <span><img src="https://img.icons8.com/dotty/80/000000/reviewer-male.png" alt=""/></span> Review</Link>
            </div>
        </div>
    );
};

export default ClientSidebar;