import styled from 'styled-components'

export const SectionWrapper = styled.div `
    width: 100%;
    display:flex;
`
export const MealsContent = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 35px 0 105px 0;
`
export const MealsInfo = styled.div `
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 25px;
`
export const SelectorsWrapper = styled.div ``
export const MealsWrapper = styled.div `
    width: 100%;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
   
`
export const CardsWrapper = styled.div `
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    #card-wrapper {
        max-width: 33%;

        @media screen and (max-width: 1000px) {
            max-width: 100%;
        }
    }
    #content-wrapper {
        max-width: 100%;
    }

`