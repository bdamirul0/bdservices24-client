import React from 'react';
import testimonialImg from '../../../photos/testimonial.png'

const SingleTestimonial = ({testimonial}) => {
    return (
        <div style={{width:"400px", textAlign:"center"}} className="m-3 p-3">
            <div className="img-company ">
                <img style={{width:"30px"}} src={testimonialImg} alt="" />
                <h6 className="pt-3">{testimonial.name}</h6>
                <p>{testimonial.company}</p>
            </div>
            <p><small>{testimonial.comment}</small></p>
        </div>
    );
};

export default SingleTestimonial;