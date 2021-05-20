import React from 'react'
import * as Cp from './FooterComponents'


const Footer = () => {
    return (
        <Cp.Footer>
            <Cp.FooterContent>
                <Cp.SocialMedia className='section'>
                    <Cp.IconWrapper>
                        <Cp.Facebook id='icon'/>
                    </Cp.IconWrapper>
                    <Cp.IconWrapper>
                        <Cp.Twitter id='icon'/>
                    </Cp.IconWrapper>
                    <Cp.IconWrapper>
                        <Cp.Linkedin id='icon'/>
                    </Cp.IconWrapper>
                    <Cp.IconWrapper>
                        <Cp.Instagram id='icon'/>
                    </Cp.IconWrapper>
                    
                </Cp.SocialMedia>
                <Cp.Logo className='section'><img src='https://templatemo.com/templates/templatemo_558_klassy_cafe/assets/images/white-logo.png' alt='logo'/></Cp.Logo>
                <Cp.Rights className='section'><p>©Copyright Klassy Cafe Co.</p> <p>Design: TemplateMo</p><p>Coded by <a href='https://github.com/lucasmanea21'>Lucas Manea</a></p></Cp.Rights>
            </Cp.FooterContent>
        </Cp.Footer>
    )
}

export default Footer
