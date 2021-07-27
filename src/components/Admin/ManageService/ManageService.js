import React, { useEffect, useState } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import SingleOrder from '../SingleOrder/SingleOrder';

const ManageService = () => {
    const [orderedData, setOrderedData]=useState([])

    useEffect(()=>{
        fetch('https://gentle-ravine-49178.herokuapp.com/allOrderedList')
        .then(res=>res.json())
        .then(data=>setOrderedData(data))
    },[])
    return (
        <div className="row-fluid d-flex">
            <div className=" sidebar col-md-3">
                <AdminSidebar></AdminSidebar>
            </div>
            <div className="admin-content col-md-9">
                <h1 className="text-center">Manage your Service</h1>
                <div className="orderedList pt-3">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Service Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Option</th>
                                </tr>
                        </thead>
                        <tbody>
                            {
                                orderedData.map((list,index)=><SingleOrder index={index} list={list}></SingleOrder>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div> 
    );
};

export default ManageService;