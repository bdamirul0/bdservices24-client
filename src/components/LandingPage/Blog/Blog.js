import React from 'react';
import blogImage from  '../../../photos/blogImage.jpg'

const Blog = () => {
    return (
        <div className="container">
            <div style={{textAlign: 'center',marginTop:'30px'}}>
                <h3 style={{display:'inline', borderBottom: '1px solid gray'}} className="pt-5 mt-3 text-center pb-3">Blog</h3>
            </div>
            <div className="d-flex mt-5 pt-4">
            <div className="col-md-7 blog-img-section">
                <img style={{width:'80%'}} src={blogImage} alt="" />
            </div>
            <div className="col-md-5 blog-text-section">
                <h3>Answer All Your Kids Questions.</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus minima aperiam fuga, omnis in expedita? Quod perferendis ut ab, adipisci possimus deleniti voluptatum hic, exercitationem repellat eum nostrum, incidunt magni! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique rerum vel saepe maxime magni vitae possimus corporis qui nam ab consequatur, autem laudantium quam voluptate veniam impedit eum minus ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta incidunt praesentium ducimus non ipsa, amet libero distinctio? Nihil, corporis nemo?</p>
                <button style={{border:'none',padding:'5px',backgroundColor:'rgb(94, 92, 92)',color:'rgb(250, 233, 233)'}}>Red more</button>
            </div>
        </div>
        </div>
    );
};

export default Blog;