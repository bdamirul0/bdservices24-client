import React from 'react';

const SingleBooking = ({booking}) => {
    return (
        <div style={{backgroundColor:'gray',borderRadius:'7px'}} className="col-md-6 mt-3 p-3">
            <div className="title-status d-flex justify-content-between">
                <h6>{booking?.title}</h6>
                <span style={{backgroundColor:'green',padding:'5px'}}>{booking?.status}</span>
            </div>
            <p>{booking?.description}</p>
        </div>
    );
};

export default SingleBooking;