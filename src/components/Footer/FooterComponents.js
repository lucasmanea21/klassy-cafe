import styled from 'styled-components'
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

export const Footer = styled.div `
    background-color: #fb5849;
`
export const FooterContent = styled.div ` 
    display:flex;
    justify-content: space-between;
    padding: 50px;

   @media screen and (max-width: 1000px) {
       flex-direction: column;
   }
`
export const SocialMedia = styled.div `
    display:flex;
    justify-content: center;
`

export const IconWrapper = styled.div `
    display: flex;
    background-color: #fff;
    border-radius: 50%;
    height: fit-content;
    cursor: pointer;
    margin: 10px;
    align-items: center;
    justify-content: center;
    

    #icon {
        padding: 15px;
        font-size: 2rem;
        color: #fb5849;
        transition: 0.5s ease;

        
        &:hover {
            color: #000;
        }
    }
`
export const Facebook = styled(FaFacebookF) ``
export const Twitter = styled(FaTwitter) `
`
export const Linkedin = styled(FaLinkedinIn) ``
export const Instagram = styled(FaInstagram) ``
export const Logo = styled.div `
    display:flex;
    justify-content: center;
    padding: 20px 0;
`
export const Rights = styled.div `
    color: #fff;
    text-align: center;
    padding: 15px;

    p {
        margin: 0;
    }
    a{
        text-decoration: none;
        color: #000;
    }
`