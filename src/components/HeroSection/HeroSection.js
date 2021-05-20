import React from 'react'
import '../../App.css'
import Button from '../Button'
import * as Cp from './HeroComponents'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import {heroPics} from '../Data'

const HeroSection = () => {
    const pictures = heroPics.map((item,index) => {
        console.log(item.src);
        return (
        <Cp.ImageWrapper>
            <img src={item.src} alt={item.alt} />
        </Cp.ImageWrapper>
    )})
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
      };
    return (
        <Cp.HeroWrapper>
            <Cp.HeroContent>
                <Cp.CafeTitle>
               <h4>KlassyCafe</h4> 
                </Cp.CafeTitle>
                <Cp.CafeDesc>
               <h6>The best experience</h6> 
                </Cp.CafeDesc>
                <Cp.CafeBtn>
                <Cp.BtnWrapper> <Button text='Make A Reservation'/> </Cp.BtnWrapper>
                </Cp.CafeBtn>
            </Cp.HeroContent>
            <Cp.HeroSliderSection>
            <div>
                <Slider {...settings}>
                   {pictures}
                </Slider> 
            </div> 
            </Cp.HeroSliderSection>
        </Cp.HeroWrapper>
    )
}

export default HeroSection
