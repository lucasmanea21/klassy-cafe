import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const ButtonWrapper = styled(Link) `
    display:flex;
    text-decoration: none;
`

const Button = ({text}) => {
    return (
        <ButtonWrapper>
            <p>{text}</p>
        </ButtonWrapper>
    )
}

export default Button
