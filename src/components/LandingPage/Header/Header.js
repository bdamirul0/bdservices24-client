import React from 'react';
import './Header.css'
import headerPhoto from '../../../photos/header.jpg'

const Header = () => {
    return (
        <div className="row-fluid header d-flex">
            <div className="col-md-5 pt-5 offset-md-1 header-text">
                <h1>Make it possible</h1>
                <h1><span id="outsource">with outsource</span></h1>
            </div>
            <div className="header-img col-md-6">
                <img src={headerPhoto} alt="" />
            </div>
        </div>
    );
};

export default Header;