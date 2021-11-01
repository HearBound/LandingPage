import React from "react";
import TeamCard from "../TeamCard/TeamCard";
import Image from '../../images/desktop.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
    };
        
    return(
        <>
         <Slider {...settings}>
        <TeamCard image={Image} name='Jaime Martinez' job='CEO' />
        <TeamCard image={Image} name='William Sargisson' job='COO'/>
        <TeamCard image={Image} name='Gregorio Bujor' job='CTO'/>
        <TeamCard image={Image} name='Angel Rodriguez' job='Subdirector de desarrollo'/>
        <TeamCard image={Image} name='David Martinez' job='Programador'/>
    </Slider>
    </>
        )
}

export default Carousel;