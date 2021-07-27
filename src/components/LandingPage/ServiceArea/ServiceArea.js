import React from 'react';
import homeTutor from '../../../photos/homeTutor.jpg'
import carRepair from '../../../photos/carRepair.jpg'
import electrician from '../../../photos/electrician.jpg'
import Service from '../Service/Service';
import {useState,useEffect} from 'react'

const ServiceArea = () => {
    const [serviceData, setServiceData]=useState([])
    
    useEffect(()=>{
        fetch('https://gentle-ravine-49178.herokuapp.com/getServices')
        .then(res=>res.json())
        .then(data=>{
            setServiceData(data)
        })
    },[serviceData])
    return (
        <div className="servicesArea mt-5 pt-5">
            <h2 className="text-center">Our Awesome <span style={{color:'rgb(94, 92, 92)'}}>Services</span> </h2>
            <div className="container row-fluid d-flex ">
                {
                    serviceData.map(service=><Service service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default ServiceArea;