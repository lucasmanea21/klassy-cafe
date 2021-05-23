import React from 'react'
import { menuItems } from '../Data'
import Card from './Card'
import * as Cp from './MenuComponents'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Title, Topline } from '../About Us/AboutComponents'

const MenuSection = ({name}) => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 7000, 
        // variableWidth: true,
        responsive: [
           {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
            }
           },
           {
            breakpoint: 1100,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
           }, 
           {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                centerMode: true,
                // centerPadding: 75,
            }
           }                                   
        ]
      };

    const menuItem = menuItems.map((item,key) => (
       <Cp.CardWrapper>
         <Card 
        title={item.title}
        img= {item.img}
        price= {item.price}
        desc={item.desc} />  
       </Cp.CardWrapper>
      ))
    return (
        <Cp.SectionWrapper name={name}>
            <Cp.ContentWrapper>
                    <Topline>Our Menu</Topline>
                    <Title>Our selection of cakes with quality taste</Title>
                </Cp.ContentWrapper>
            <Cp.SliderWrapper>
                
                <Slider {...settings}>
               {menuItem} 
                </Slider>
            </Cp.SliderWrapper>
            
            
        </Cp.SectionWrapper>
    )
}

export default MenuSection
