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
        <TeamCard image={Jaime} name='Jaime Martinez' job='CEO' />
        <TeamCard image={Moai} name='William Sargisson' job='COO'/>
        <TeamCard image={Goyo} name='Gregorio Bujor' job='CTO'/>
        <TeamCard image={Angel} name='Angel Rodriguez' job='Subdirector de desarrollo'/>
        <TeamCard image={David} name='David Martinez' job='Programador'/>
    </Slider>
    </>
        )
}

export default Carousel;