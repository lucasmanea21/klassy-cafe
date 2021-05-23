import styled from 'styled-components'
// import {Link} from 'react-router-dom'
import {Link as LinkR} from 'react-scroll'
import {CgMenuLeft} from 'react-icons/cg'
import {GrClose} from 'react-icons/gr'
import {MdKeyboardArrowDown } from 'react-icons/md'

export const Nav = styled.div `
    height: ${({scrollNav}) => (scrollNav ? '80px' : '100px')};
    background-color: ${({scrollNav}) => (scrollNav ? '#fff' : '#f7f7f7')};
    box-shadow: ${({scrollNav}) => (scrollNav ? '0px 0px 10px rgba(0,0,0,0.15)' : '0')};
    display:flex;
    width: 100%;
    position: ${({scrollNav}) => (scrollNav ? 'fixed' : 'static')};
    z-index: 99;
    transition: 0.5s ease;
`
export const NavbarWrapper = styled.div `
    display:flex;
    padding: 0 15%;
    align-items: center;
    justify-content: center;
    width: 100%;
    
`
export const LogoWrapper = styled.div `
    
    img {
        cursor: pointer
    }
`
export const ContentWrapper = styled.div `
    display:flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`
export const NavMenu = styled.div `
    font-size: 15px;
    font-weight: 600;
    display: flex;
    align-items: center;

    @media screen and (max-width: 900px) {
        font-size: 14px;
    }

    @media screen and (max-width: 800px) {
        display: none;
    }
`
export const NavLink = styled(LinkR) `
    color: #000;
    cursor: pointer;
    text-decoration: none;
    padding: 0 15px;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 900px) {
        padding: 0 5px;
    }

    &:hover {
        color: #fb5849;
    }
`
export const NavItem = styled.div `
    font-size: 15px;
    font-weight: 600;
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 1100px) {
        font-size: 14px;
    }

    @media screen and (max-width: 800px) {
        display: none;
    }
`
export const DropdownIcon = styled(MdKeyboardArrowDown) `
    transform: translate(0,3px);
`
export const MobileMenu = styled.div`
`
export const IconsWrapper = styled.div `
`
export const MenuIcon = styled(CgMenuLeft)`
    font-size: 2.1rem;
    font-weight: 200;
    display: none;
    cursor: pointer;

     @media screen and (max-width: 800px) {
        display: ${({isOpen}) => (isOpen ? 'none' : 'flex')};
    }
`
export const CloseIcon = styled(GrClose) `
    font-size: 2.1rem;
    font-weight: 200;
    display: none;
    cursor: pointer;

     @media screen and (max-width: 800px) {
        display: ${({isOpen}) => (isOpen ? 'flex' : 'none')};
    }
`

export const FeaturesWrapper= styled.div `
    display:${({hover}) => (hover ? 'flex' : 'none')};
    flex-direction: column !important; 
    position: fixed;
    background-color: #f7f7f7;
    width: 200px;
    font-size: 13px;
    font-weight: 300;
    top: 75px;
    z-index: 99;
`
export const FeaturesWrapperMob = styled.div `
    display: ${({hover}) => (hover ? 'flex' : 'none')};
    flex-direction: column !important; 
    width: 100% !important;

`
export const MobileWrapper = styled.div `
    display: none;
    width: 100%;
    justify-content: center;

    @media screen and (max-width: 800px) {
       display:${({isOpen}) => (isOpen ? 'flex' : 'none')};
    }

`
export const MobileNavMenu = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    position: ${({scrollNav}) => (scrollNav ? 'fixed' : 'absolute')};
    top: ${({scrollNav}) => (scrollNav ? '80px' : '100px')};
    background-color: #f7f7f7;
    justify-content: center;
    align-items: center;
    z-index: 99;

    /* @media screen and (max-width: 700px) {
        display: flex;
    } */
`

export const NavItemB = styled.div `
    width: 100%;
    justify-content: center !important;
    display:flex;
    align-items: center;
    flex-direction: column;
    border-top: 1px solid #efefef;
    border-bottom: 1px solid #efefef;
    z-index: 99;

    &:hover {
        p {
            color: #fb5849;
        }
        background-color: #eee;
    }
`