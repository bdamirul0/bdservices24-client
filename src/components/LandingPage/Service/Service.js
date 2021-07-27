import React, { useContext, useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { UserContext } from '../../../App';

const Service =({service}) => {
    const [loggedInUser, setLoggedInUser]=useContext(UserContext)

    const handleService=(service)=>{
            const orderedProduct= {title:service.title,description:service.description,status:service.status}
            setLoggedInUser({...loggedInUser,...orderedProduct})
    }
    
    return (
        <div  style={{textAlign: 'center'}} className="col-md-4 col-sm-6 mt-3 pt-5 align-items-center">
            <img style={{width:'90%',height:'220px'}} src={`data:image/jpeg;base64,${service.image.img}`} alt="" />
            <h6 className="pt-4">{service.title}</h6>
            {/* <p style={{color:'rgb(94, 92, 92)'}} className="pt-3">Price: {service.price}</p> */}
            <Link to={`/bookingList/?id=${service._id}`}><button onClick={()=>handleService(service)} style={{backgroundColor:'rgb(94, 92, 92)', border:'none', padding:'5px',color:'rgb(250, 233, 233)'}}>Get Service</button></Link>
            <p><small>{service.description}</small></p>
        </div>
    );
};

export default Service;