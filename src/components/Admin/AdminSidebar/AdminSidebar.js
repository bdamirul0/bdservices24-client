import React from 'react';
import { Link } from 'react-router-dom';
import './AdminSidebar.css'
import listIcon from '../../../photos/list-icon.png'
import addIcon from '../../../photos/add-icon.png'
import adminIcon from '../../../photos/add-user-icon.png'


const AdminSidebar = () => {
    return (
        <div className="Sidebar">
            <h1 className="text-center">BdServices24</h1>
            <div className="sidebar-item">
                <Link to="/orderList"> <span><img src="https://img.icons8.com/ios/50/000000/add-list.png"alt=""/></span>  Order list</Link>
                <Link to="/addServices"> <span><img src="https://img.icons8.com/ios-glyphs/30/000000/service.png"alt=""/></span> Add services</Link>
                <Link to="/makeAdmin"> <span><img src="https://img.icons8.com/ios-filled/50/000000/admin-settings-male.png" alt=""/></span> Make admin</Link>
                <Link to="/manageServices"> <span><img src="https://img.icons8.com/ios/50/000000/management.png" alt=""/> </span> Manage Services</Link>
            </div>
        </div>
    );
};

export default AdminSidebar;