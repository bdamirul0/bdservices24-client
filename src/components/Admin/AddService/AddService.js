import React, { useState } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import '../Admin/Admin.css'
import { useForm } from "react-hook-form";
const axios = require('axios').default;


const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [file, setFile]=useState(null)

    const onSubmit = data => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('title', data.serviceTitle)
        formData.append('description', data.description)
        formData.append('status',"pending")

      
        fetch('https://gentle-ravine-49178.herokuapp.com/addService', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        })

    };

    const handleChange=(e) => {
        console.log(e.target.files[0])
        const newFile = e.target.files[0]
        setFile(newFile);
    }


    return (
       <div className="row-fluid d-flex">
            <div className=" sidebar col-md-3">
                <AdminSidebar></AdminSidebar>
            </div>
            <div className="admin-content p-5 col-md-9">
                <h1 className="text-center pb-3">Add Your Service</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col">
                            <input type="text" class="form-control" {...register("serviceTitle", { required: true })} placeholder="Service title"/>
                            {errors.serviceTitle && <span style={{color:'red'}}>This field is required</span>}
                            
                        </div>
                        <div class="col">
                            <input onChange={handleChange} type="file" className="form-control"  {...{required: true }} placeholder=""/>
                        </div>
                       </div>
                       <div className="mb-3">
                            <label for="description" class="form-label">Description</label>
                            <textarea class="form-control" {...register("description", { required: true })} id="description" rows="3"></textarea>
                            {errors.description && <span style={{color:'red'}}>This field is required</span>}
                        </div>
                       <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>      
    );
};

export default AddService;
