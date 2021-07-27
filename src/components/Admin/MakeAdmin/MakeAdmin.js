import React, { useState } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
const axios = require('axios').default;

const MakeAdmin = () => {

    const [email, setEmail] = useState({})

    const handleBlur = (e) => {
        setEmail({ ...email, [e.target.name]: e.target.value })
    }

    const handleClick = async () => {
            const newEmail= email

            axios.post('https://gentle-ravine-49178.herokuapp.com/admin', {
                method:'POST',
                headers: { 'content-type': 'application/json' },
                body:(newEmail) 
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
    }

    return (
        <div className="row-fluid d-flex">
            <div className=" sidebar col-md-3">
                <AdminSidebar></AdminSidebar>
            </div>
            <div className=" p-5 mt-5 admin-content col-md-9">
                <h1 className="mb-3 text-center">Make Admin</h1>
                <div>
                    <div class="mb-2">
                        <label className="pb-1" htmlFor="email">Email:</label>
                        <input onBlur={handleBlur} name="email" type="email" className="form-control" placeholder="" />
                        <button onClick={handleClick} style={{ display: "Block", marginTop: "5px" }} class="btn btn-success" type="button">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;