import styled from 'styled-components'

export const SectionWrapper = styled.div `
    background-color: #fffafa;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px 0 100px 0;
`
export const SliderWrapper = styled.div `
`
export const ContentWrapper = styled.div `
    width: 80%;
    align-self: center;
    display: flex;
    flex-direction: column;
    padding-bottom: 35px;
`

export const CardWrapper = styled.div `
    display: flex;
    
    @media screen and (max-width: 1350px) { 
        div {
             width: 250px;
        } 
   }
   /* @media screen and (max-width: 1100px) { 
        div {
             width: 95%;
             height: 10%;
        } 
   } */
`
