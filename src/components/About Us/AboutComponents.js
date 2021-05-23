import styled from 'styled-components'
import {AiFillPlayCircle} from 'react-icons/ai'

export const AboutSection = styled.div `
    display: flex;
    justify-content: center;
    z-index: 3;
    width: 100%;
    padding: 0 0 100px 0;
`


export const AboutContent = styled.div `
    display: flex;
    justify-content: center;
    max-width: 75%;

    @media screen and (max-width: 1200px) {
        width: 90%;
    }
    @media screen and (max-width: 800px) {
        flex-direction: column
    }
`
export const AboutDetails = styled.div `
    padding-right: 15px;
    max-width: 50%;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 800px) {
        max-width: 100%;
    }
`
export const Topline = styled.p `
    color: #fb5849;
    text-transform: uppercase;
`
export const Title = styled.h2 `
    margin: 0;
    font-size: 30px;
    font-weight: 800;
    color : #2a2a2a;
`
export const Desc = styled.div ``
export const AboutImages = styled.div `
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    img {
        width: 30%;
        height: calc(30% * 0.9)

        @media screen and (max-width: 1200px) {
        height: 140px;
    }
    }

    
`
export const AboutVideo = styled.div `
    margin-top: 50px;
    padding-left : 15px;
    max-width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: contain;
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
    max-height: 510px;

      @media screen and (max-width: 800px) {
        max-width: 100%;
     }

     @media screen and (max-width: 800px) {
        padding-left : 0%; */
     }
    @media screen and (max-width: 1200px) {
        height: 420px;
    } 

    @media screen and (max-width: 1000px) {
        height: 330px;
    } 
    @media screen and (max-width: 800px) {
        height: 100%; 
    }  
   img {
      /* height: calc(width* 1.06);  */
      max-height: 510px;   
      height: calc(width * 1.06)px; 
      overflow: hidden;  
      object-fit: contain;
   } 
`

export const PlayIcon = styled(AiFillPlayCircle) `
    position: absolute;
    align-self: center;
    z-index: 1;
    color: #fb5849;
    font-size: 100px;
    cursor: pointer;
`