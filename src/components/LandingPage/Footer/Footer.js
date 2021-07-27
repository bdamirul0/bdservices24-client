import React from 'react';
import './Footer.css'
import place from '../../../photos/meeting-point.png'
import facebook from '../../../photos/facebook.png'
import twitter from '../../../photos/twitter.png'
import linkedin from '../../../photos/linkedin.png'
import youtube from '../../../photos/youtube.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div style={{backgroundColor:'rgb(94, 92, 92)'}}>
            <div className="container d-flex footer">
                <div className="col-md-4 d-flex">
                    <img style={{height:'20px'}} src={place} alt="" />
                    <p className="">130/10-Kha-2, Baganbari,<br /> Mathertake, Dhaka-1214</p>
                </div>
                <div className="col-md-2">
                    <h6>Company</h6>
                    <p>About</p>
                    <p>Project</p>
                    <p>Out Teams</p>
                    <p>Terms and Condition</p>
                </div>
                <div className="col-md-2">
                    <h6>Quick Links</h6>
                    <p>Contact</p>
                    <p>Our Blogs</p>
                    <p>Sales</p>
                    <p></p>
                </div>
                <div className="col-md-4">
                    <div>
                        <h6>About us</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis explicabo quisquam suscipit sequi perferendis ipsum voluptatum dicta? Dolorum earum enim soluta minima commodi neque nisi.</p>
                    </div>
                    <div className="social-link">
                        <Link to="www.facebook.com/"><img src={facebook} alt="" /></Link>
                        <Link><img src={twitter} alt="" /></Link>
                        <Link><img src={linkedin} alt="" /></Link>
                        <Link to="https://www.youtube.com/"><img src={youtube} alt="" /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;