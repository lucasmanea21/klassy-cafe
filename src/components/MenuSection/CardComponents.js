import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const CardWrapper = styled.div `
    display:flex;
    flex-direction: column;
    width: 300px;
    position: relative;
    transition: 0.3s ease;
    overflow:hidden;
    margin: 15px;
`
export const CardImg= styled.div `
     
     
     img {
         width: 100%;
     }
`
export const CardPrice = styled.div `
    position: absolute;
    color: #fff;
     width: auto !important;

    p {
        font-size: 19px;
        background-color: #fb5849;
        margin:0;
        padding: 15px;
        
    }
`
export const CardInfo = styled.div `
    z-index: 2;
    position: absolute;
    bottom: 0;
    background-color: #fb5849;
    width: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    overflow:hidden;
    transition: 0.5s ease;
    transform: ${({hover}) => (hover ? 'translate(0, 0%)' : 'translate(0, 70%)')};
    height: 50%;
    
`
export const InfoContent = styled.div `
    width: 80%;
    color: #fff;
    padding-left: 20px;
    
`

export const CardTitle = styled.p `
    font-size: 21px;
    font-weight: 700;
    margin: 0;
`
export const CardDesc = styled.p `
    display: ${({hover}) => (hover ? 'flex' : 'none')};
    display: flex;
`
export const BtnWrapper = styled(Link) `
    text-decoration: none;
    display: ${({hover}) => (hover ? 'flex' : 'none')};
    display: flex;
    color: #fff;
    font-weight: 600;
    padding-top: 15px;
`