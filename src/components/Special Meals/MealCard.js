import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div `
    margin: 25px 35px;
    width: 100%;
    display:flex;
    justify-content: center;
`
const ContentWrapper = styled.div `
    display: flex;
    justify-content: center;
`
const ImgWrapper = styled.div ``
const InfoWrapper = styled.div `
    max-width: 60%;
    padding: 0 15px;
    margin-top: 10px;

    h4 {
        margin: 0;
        font-size: 1.2rem;
    }

    p {
        color: #2a2a2a;
        font-size: 14px;
    }
`
const PriceWrapper = styled.div `
    color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
    justify-content: center;
    align-items: center;
    

    p {
        background-color: #fb5849;
        padding: 25px;
        border-radius: 3px;
        margin: 0;
    }
`

const MealCard = () => {
    return (
        <CardWrapper id='card-wrapper'>
            <ContentWrapper id='content-wrapper'>
                <ImgWrapper><img src='https://templatemo.com/templates/templatemo_558_klassy_cafe/assets/images/tab-item-01.png' alt='salad'/></ImgWrapper>
                <InfoWrapper>
                    <h4>Fresh Chicken Salad</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur koit adipiscing elit, sed do.</p>
                </InfoWrapper>
                <PriceWrapper><p>$5</p></PriceWrapper>
            </ContentWrapper>
        </CardWrapper>
    )
}

export default MealCard
