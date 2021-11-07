import React from "react";
import TeamCard from "../TeamCard/TeamCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Angel from "../../images/Angel.jpg"
import Jaime from "../../images/Jaime.jpg"
import David from "../../images/David.jpg"
import Goyo from "../../images/Goyo.jpg"
import Moai from "../../images/El_menda.jpg"

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
        <TeamCard image={Jaime} name='Jaime Martinez' job='CEO'  alt='#'/>
        <TeamCard image={Moai} name='William Sargisson' job='COO' alt='#'/>
        <TeamCard image={Goyo} name='Gregorio Bujor' job='CTO' alt='#'/>
        <TeamCard image={Angel} name='Angel Rodriguez' job='Subdirector de desarrollo' alt='#'/>
        <TeamCard image={David} name='David Martinez' job='Programador' alt='#'/>
    </Slider>
    </>
        )
}

export default Carousel;