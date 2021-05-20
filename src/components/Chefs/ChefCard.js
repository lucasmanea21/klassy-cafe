import React from 'react'
import * as Cp from './CardComponents'
import {FaFacebookF} from 'react-icons/fa'

const ChefCard = ({alt,src,name,role}) => {
    return (
        <Cp.CardWrapper>
            <Cp.CardContent>
                <Cp.CardImg> 
                    <img src={src} alt={alt} />
                    <Cp.Overlay id='overlay'>
                         <Cp.SocialIcons id='social-icons'>
                             <Cp.SocialLink><FaFacebookF /> </Cp.SocialLink>
                             <Cp.SocialLink><FaFacebookF /> </Cp.SocialLink>
                             <Cp.SocialLink><FaFacebookF /> </Cp.SocialLink>
                         </Cp.SocialIcons>
                    </Cp.Overlay>
                </Cp.CardImg>
                <Cp.InfoWrapper>
                     <Cp.NameWrapper><p>{name}</p></Cp.NameWrapper>
                     <Cp.RoleWrapper>{role}</Cp.RoleWrapper>
                </Cp.InfoWrapper>
               
            </Cp.CardContent>
        </Cp.CardWrapper>
    )
}

export default ChefCard
