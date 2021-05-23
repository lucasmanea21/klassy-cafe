import React from 'react'
import { Title, Topline } from '../About Us/AboutComponents'
import ChefCard from './ChefCard'
import * as Cp from './SectionComponents'
import {chefsData} from '../Data'

const ChefsSection = ({name}) => {
    const chef = chefsData.map((item,index) => (
        <div><ChefCard {...item}/></div>
    ))
    return (
        <Cp.SectionWrapper name={name}>
            <Cp.SectionContent>
                <Topline>our chefs</Topline>
                <Title>We offer the best ingredients for you</Title>
            </Cp.SectionContent>
            <Cp.CardsWrapper>
               {chef}      
            </Cp.CardsWrapper>
            
        </Cp.SectionWrapper>
    )
}

export default ChefsSection
