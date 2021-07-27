import React, { useContext } from 'react';
import AdminSidebar from '../../Admin/AdminSidebar/AdminSidebar';
import ClientSidebar from '../ClientSidebar/ClientSidebar';
import {useEffect,useState} from 'react'
import { UserContext } from '../../../App';
import SingleBooking from './SingleBooking/SingleBooking';

const Client = () => {
    const [loggedInUser, setLoggedInUser]=useContext(UserContext)
    const [orderedData, setOrderedData]=useState([])
    const [handleDataLoad, setHandleDataLoad]=useState(true)

    if(loggedInUser.email && loggedInUser.title && loggedInUser.description && handleDataLoad){
        setHandleDataLoad(false)
        const orderedData={title:loggedInUser.title, description:loggedInUser.description,email:loggedInUser.email,status:loggedInUser.status}
            fetch('https://gentle-ravine-49178.herokuapp.com/addOrder',{
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(orderedData)
            })
            .then(res=>res.json())
            .then(data=>{
                const newLoggedIn= {...loggedInUser}
                newLoggedIn.title="";
                newLoggedIn.description="";
                setLoggedInUser(newLoggedIn)
            })

    }

    // useEffect(()=>{
        if(loggedInUser.email){
            fetch(`https://gentle-ravine-49178.herokuapp.com/orderedData/${loggedInUser.email}`)
            .then(res=>res.json())
            .then(data=>setOrderedData(data))
        }
    // },[])

    
    console.log(loggedInUser.title, loggedInUser.description,loggedInUser.email,loggedInUser.status)

    return (
        <div style={{}} className="row-fluid d-flex">
            <div className=" sidebar col-md-3">
                <ClientSidebar></ClientSidebar>
            </div>
            <div className="admin-content pt-5 ps-5 col-md-9">
                <h1 className="text-center">Your Total Booking List {orderedData.length}</h1>
                {
                    orderedData.length === 0 && <h4 className="text-center mt-5 text-danger">Sorry, We didn't found any booking list</h4>
                }
                <div className="row">
                    {
                        orderedData?.map(booking=><SingleBooking booking={booking}></SingleBooking>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Client;