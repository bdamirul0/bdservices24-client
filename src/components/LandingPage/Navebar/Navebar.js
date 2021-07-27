import React from 'react';
import { Link } from 'react-router-dom';
import './Navebar.css'

const Navebar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-expand-md navbar-light  my-navbar">
                <div className="container-fluid d-flex">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link to="/" className="navbar-brand"><h2>BdServices24</h2></Link>
                    <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link to='/home' className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/serviceReview" className="nav-link " tabindex="-1" aria-disabled="true">Service Review</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/login" className="nav-link" >Login</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/admin" className="nav-link " href="#" tabindex="-1" aria-disabled="true">Admin</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navebar;