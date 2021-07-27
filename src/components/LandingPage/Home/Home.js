import React from 'react';
import Blog from '../Blog/Blog';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navebar from '../Navebar/Navebar';
import ServiceArea from '../ServiceArea/ServiceArea';
import Testimonial from '../Testemonial/Testimonial';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Navebar></Navebar>
            <Header></Header>
            <ServiceArea></ServiceArea>
            <Blog></Blog>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;