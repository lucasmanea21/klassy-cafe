import React from 'react'
import styled from 'styled-components'
import {FaPhoneAlt} from 'react-icons/fa'

const CardWrapper= styled.div `
    background-color: #fff;
    width: auto;
    text-align: center;
    border-radius: 5px;
`
const CardIcon= styled.div `
    
`
const IconWrapper= styled.div `
    transform: translate(0, -50%);
    display:flex;
    justify-content: center;
    align-items: center;

    svg {
        background-color: #fb5849;
        border-radius: 50%;
        padding: 25px;
        font-size: 1.5rem;
        color: #fff;
    }
`
const CardDetails= styled.div `
    transform: translate(0, -20%);
    display:flex;
    flex-direction: column;
    padding: 0 20px;
`
const CardTitle= styled.div `
    font-weight: 700;
    font-size: 1.2rem;
    
    h3 {
        margin: 0;
    }
`
const CardDesc= styled.div `
 p {
        margin: 10px 0;
    }
`

const ContactCard = ({icon,title,item1,item2}) => {
    return (
        <CardWrapper>
            <CardIcon>
                <IconWrapper>
                    {icon}
                </IconWrapper>
            </CardIcon>
            <CardDetails>
                <CardTitle><h3>{title}</h3></CardTitle>
                <CardDesc><p>{item1} <br/>{item2}</p></CardDesc>
            </CardDetails>
        </CardWrapper>
    )
}

export default ContactCard
