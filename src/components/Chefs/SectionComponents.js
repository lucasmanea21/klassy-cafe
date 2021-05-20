import styled from 'styled-components'

export const SectionWrapper = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-self: center;
    justify-content: center;
    align-items: center;
    padding: 50px 0 150px 0;
`
export const SectionContent = styled.div `
    width: 80%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 50px;
    justify-self: center;

`
export const CardsWrapper = styled.div `
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;


    div div{ 
        @media screen and (max-width: 1200px) {
            width: 250px;
        }
        @media screen and (max-width: 900px) {
            width: 450px;
        }
        @media screen and (max-width: 600px) {
            width: 90%;
        }
     }
`