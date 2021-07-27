import React from 'react';
import SingleTestimonial from '../SingleTestimonial/SingleTestimonial';
import './Testemonial.css'
import {useState,useEffect} from 'react'

const Testimonial = () => {
    const [testimonialData, setTestimonialData]=useState([])

    useEffect(()=>{
        fetch('https://gentle-ravine-49178.herokuapp.com/getReview')
        .then(res=>res.json())
        .then(data=>setTestimonialData(data))
    },[testimonialData])
    return (
        <div className="mt-5">
            <div>
                <h2 style={{color:"rgb(94, 92, 92"}} className="text-center pt-5">Testimonials</h2>
            </div>
            <div style={{textAlign:'center'}} className="singleTestimonial row-fluid d-flex">
                {
                    testimonialData.map(testimonial=><SingleTestimonial testimonial={testimonial}></SingleTestimonial>)
                }
            </div>
        </div>
    );
};

export default Testimonial;