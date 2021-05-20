import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const CardWrapper = styled.div `
    border: 1px solid #000;
    display: flex;
    justify-content: center;
    position: relative;
    margin: 15px;
    flex-direction: column;
    

    &:hover {
        border: 1px solid #fb5849;
        div p {
            color: #fb5849;
        }
        #overlay {
           visibility: visible; 
           transition: 0.5s ease;
        }

        #social-icons {
            visibility: visible;
        }
    }
`
export const CardContent = styled.div `
    display: flex;
    flex-direction: column;
    transition: 0.5s ease;
    width: 100% !important;
    justify-content: center;
`
export const CardImg = styled.div `
    color: #212529;
    position: relative;
    transition: 0.5s ease;
    display:flex;
    width: calc(100% - 2px) !important;
    justify-self: center;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    img {
        width:100% !important;
        height: auto;
        width: auto;
        object-fit: cover;
    }
`
export const InfoWrapper = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    text-align: center;
    padding: 20px 0 25px 0;
`
export const NameWrapper = styled.div `
    font-weight: 600;
    font-size: 20px;



    p {
        margin: 0;
    }
`
export const RoleWrapper = styled.div `
    color: #2a2a2a;
    font-size: 16px;
`
export const Overlay = styled.div `
    position: absolute;
    background-color: #2a2a2a;
    display:flex;
    justify-content: center;
    align-items: center;
    opacity: .9;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    visibility: hidden;
    max-width: 100%;
    /* transition: 0.5s ease; */
 
`
export const SocialIcons = styled.div `
    display: flex;
    visibility: hidden;
    justify-content: center;
    
       &:hover{
        visibility: visible;
        /* transition: 0.5s ease; */
         }
    }

`

export const SocialLink = styled(Link)` 
        text-decoration: none;
        cursor: pointer;
        height: 40px;
        width: 40px;
        margin: 0;
        padding: 0;
        color: #000;
        
        @media screen and (max-width: 1200px) {
            height: 30px;
            width: 30px;
        }
        
        svg {
        background-color: #fff;
        display: flex;
        font-size: 1.3rem;
        border-radius: 50%;
        padding: 5px;
         &:hover {
            background-color: #fb5849;
        }
        @media screen and (max-width: 1200px) {
            font-size: 0.8rem;
        }
        }
`