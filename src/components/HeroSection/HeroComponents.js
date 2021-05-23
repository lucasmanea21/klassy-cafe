import styled from 'styled-components'
import {Link as LinkR} from 'react-scroll'

export const HeroWrapper = styled.div `
    width: 100%;
    display: flex;
    margin-bottom: 100px;
    /* padding-top: 100px; */
    
    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`
export const HeroContent = styled.div `
    background: url('https://templatemo.com/templates/templatemo_558_klassy_cafe/assets/images/top-left-bg.jpg');
    width: 30%;
    display: flex;
    flex-direction :column;
    align-items: center;
    justify-content: center;
    color: #fff;
    height: 800px;

    @media screen and (max-width: 1000px) {
        width: 100%;
        height: 30vh;
        padding: 15px 0;
    }
`
export const CafeTitle = styled.div `
    h4 {
        font-family: 'Dancing Script', cursive;
        font-size: 54px;
        margin: 0;
    }
`
export const CafeDesc = styled.div `
    text-transform: uppercase;
    font-size: 1.5rem;
    

    h6 {
        margin-top: 0;
        font-weight: 500;
    }
`
export const CafeBtn = styled.div ``
export const BtnWrapper = styled(LinkR) `
    background-color: #fff;
    display:flex;
    width: 180px;
    justify-content: center;
    border-radius: 3px;
    font-weight: 600;

   p {
       color: #fb5849;
       font-size: 14px;
   } 
`
export const HeroSliderSection = styled.div `
    width: 70% !important;
    height: 100% !important;
    z-index: 1;
    
    div {
        height: 800px !important;
        z-index: 1;
    }
    @media screen and (max-width: 1000px) {
        width: 100% !important;
        height: 100vh;
    }
`
export const ImageWrapper = styled.div `
    overflow: hidden !important;
    img {

        
    }
`