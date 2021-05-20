import React from 'react'
import { Title, Topline } from '../About Us/AboutComponents'
import MealCard from './MealCard'
import * as Cp from './MealsComponents'

const MealsSection = () => {
    return (
        <Cp.SectionWrapper>
            <Cp.MealsContent>
                <Cp.MealsInfo>
                    <Topline>klassy week</Topline>
                    <Title>This Week's Special Meal Offers</Title>
                </Cp.MealsInfo>
                <Cp.SelectorsWrapper>

                </Cp.SelectorsWrapper>
                <Cp.MealsWrapper>
                    <Cp.CardsWrapper>
                        <MealCard id='card'/>
                        <MealCard id='card'/>
                        <MealCard id='card'/>
                        <MealCard id='card'/>
                        <MealCard id='card'/>
                        <MealCard id='card'/>  
                    </Cp.CardsWrapper>

                </Cp.MealsWrapper>
            </Cp.MealsContent>
        </Cp.SectionWrapper>
    )
}

export default MealsSection
