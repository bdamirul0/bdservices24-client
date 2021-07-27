import React from 'react';
import ClientSidebar from '../ClientSidebar/ClientSidebar';
import { useForm } from "react-hook-form";

const Review = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data =>{
        fetch('https://gentle-ravine-49178.herokuapp.com/addReview',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({name:data.name,company:data.company,comment:data.comment})
        })
        console.log(data);
    }
    return (
        <div className="row-fluid d-flex">
            <div className=" sidebar col-md-3">
                <ClientSidebar></ClientSidebar>
            </div>
            <div className="admin-content p-5 col-md-9">
                <h1>Review</h1>
                <div style={{maxWidth:'500px'}}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col">
                                <input type="text" class="form-control" {...register("name", { required: true })} placeholder="Yur name"/>
                                {errors.name && <span style={{color:'red'}}>This field is required</span>}
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col">
                                <input type="text" class="form-control" {...register("company", { required: true })} placeholder="company's name Designation"/>
                                {errors.company && <span style={{color:'red'}}>This field is required</span>}
                            </div>
                        </div>
                        <div className="row mt-2">
                        <div class="form-floating">
                            <textarea class="form-control" {...register("comment", { required: true })} placeholder="Leave a comment here" id="floatingTextarea2" style={{height:'100px'}}></textarea>
                            <label style={{padding:"20px"}} for="floatingTextarea2">Comments</label>
                            {errors.comment && <span style={{color:'red'}}>This field is required</span>}
                            </div>
                        </div>
                        
                       <button style={{marginTop:'8px'}} className="btn btn-success">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;