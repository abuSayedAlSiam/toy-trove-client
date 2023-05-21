import { useContext } from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import UseTitle from "../../../Hooks/UseTitle";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS file for AOS animations
import Testimonial from "../Testimonial/Testimonial";
import Statistics from "../Statistics/Statistics";


const Home = () => {
    UseTitle('Home');
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
      }, []);
    
    return (
        <div data-aos="fade-up">
            <Banner></Banner>
            <h2 className="text-center md:text-5xl text-xl font-bold mb-5 mt-16">Gallery</h2>
            <Gallery></Gallery>
            <h2 className='text-4xl text-center font-bold  mt-16 mb-10'>Shop By Category</h2>
            <ShopByCategory></ShopByCategory>
            <Statistics></Statistics>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;