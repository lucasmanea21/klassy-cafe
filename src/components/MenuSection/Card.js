import React,{useState} from 'react'
import { DropdownIcon } from '../Navbar/NavbarComponents'
import * as Cp from './CardComponents'

const Card = ({price, title, desc,img}) => {
    const [hover, setHover] = useState(false)

    return (
        <Cp.CardWrapper onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <Cp.CardImg><img src={img} alt='Menu Item'/></Cp.CardImg>
            <Cp.CardPrice> <p> ${price}</p></Cp.CardPrice>
            <Cp.CardInfo hover={hover}>
                <Cp.InfoContent hover={hover} >
                    <Cp.CardTitle>
                        {title}
                    </Cp.CardTitle>
                <Cp.CardDesc hover={hover}>{desc}</Cp.CardDesc> 
                <Cp.BtnWrapper hover={hover} to="contact" spy={true} smooth={true} duration={500} offset={-100}>Make a reservation <DropdownIcon /> </Cp.BtnWrapper>
                </Cp.InfoContent>
            </Cp.CardInfo>
        </Cp.CardWrapper>
    )
}

export default Card
