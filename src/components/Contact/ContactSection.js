import React from 'react'
import { Desc, Title, Topline } from '../About Us/AboutComponents'
import Button from '../Button'
import ContactCard from './ContactCard'
import * as Cp from './ContactComponents'
import {contactData} from '../Data'

const ContactSection = () => {
    const cards = contactData.map((item,index) => (
        <div id='item'><ContactCard {...item}/></div>
    ))
    return (
        <Cp.SectionWrapper>
           <Cp.SectionContent>
               <Cp.SectionInfo>
                    <Topline id='text'>Contact Us</Topline>
                    <Title id='text' >Here You Can Make A Reservation Or Just walkin to our cafe</Title>
                    <Desc id='text'  >Donec pretium est orci, non vulputate arcu hendrerit a. Fusce a eleifend riqsie, namei sollicitudin urna diam, sed commodo purus porta ut.</Desc>
                        <Cp.SectionCards>
                            {cards}
                        </Cp.SectionCards>
               </Cp.SectionInfo>
               
               <Cp.SectionForm>
                    <Cp.FormWrapper>
                        <Cp.FormContent>
                            <Title>Table Reservation</Title>
                            <Cp.InputWrapper>
                                <input placeholder='Your Name*' required/>
                                <input placeholder='Email Address' type='email'/>
                                <input placeholder='Phone Number*' required type='number'/>
                                <input placeholder='Number of Guests' type='number'/>
                                <input placeholder='dd/mm/yyyy' type='date' required/>
                                <input placeholder='Time' required type='time'/>
                                <input placeholder='Message' id='message' />
                             </Cp.InputWrapper>
                           <Cp.BtnWrapper><Button text='Make a reservation'/></Cp.BtnWrapper>
                        </Cp.FormContent>
                    </Cp.FormWrapper>
               </Cp.SectionForm>
           </Cp.SectionContent>
        </Cp.SectionWrapper>
    )
}

export default ContactSection
