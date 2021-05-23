import React,{useState, useEffect} from 'react'
import * as Cp from './NavbarComponents'
import { data } from './NavbarData'
import {animateScroll as scroll} from 'react-scroll'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [hover, setHover] = useState(false)
    const [scrollNav, setScrollNav] = useState(false)

    const navItems = data.map((item,index) => {
    console.log(item.to);
        return (
        <Cp.NavItem >
            <Cp.NavLink to={item.to} spy={true} smooth={true} offset={-100} duration={500} style={item.submenu ? { paddingTop: '30px', paddingBottom: '30px'} : null} onMouseEnter={() => item.submenu && setHover(true)} onMouseLeave={() => item.submenu && setHover(false)}>{item.title} {item.submenu && <Cp.DropdownIcon />}
           <Cp.FeaturesWrapper hover={hover}>
            {item.submenu && item.submenu.map((child, key) => {
                return(
                    <React.Fragment>
                <Cp.NavItemB>
                    <Cp.NavLink to='/'><p>{child}</p></Cp.NavLink>
                </Cp.NavItemB> 
                </React.Fragment>
                ) 
            })} 
            </Cp.FeaturesWrapper>
            </Cp.NavLink>
        </Cp.NavItem>
    )})
    const navItemsMob = data.map((item,index) => {
        return (
            <Cp.NavItemB >
                <Cp.NavLink to={item.to} spy={true} smooth={true} offset={50} duration={500} onClick={() => item.submenu && setHover(true)}>
                    <p>{item.title} {item.submenu && <Cp.DropdownIcon />}</p> 
               </Cp.NavLink> 
               <Cp.FeaturesWrapperMob hover={hover}>
                {item.submenu && item.submenu.map((child, key) => {
                    return (
                        <React.Fragment>
                    <Cp.NavItemB>
                        <Cp.NavLink to='/'><p>{child}</p></Cp.NavLink>
                    </Cp.NavItemB> 
                        </React.Fragment>
                    ) 
                })} 
                </Cp.FeaturesWrapperMob>
            </Cp.NavItemB>
        )})
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    const changeNav = () => {
        if (window.scrollY >= 600) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);
  
    return (
        <>
        <Cp.Nav scrollNav={scrollNav}>
           <Cp.NavbarWrapper>
               <Cp.ContentWrapper>
                    <Cp.LogoWrapper>
                     <img src="https://templatemo.com/templates/templatemo_558_klassy_cafe/assets/images/klassy-logo.png" alt='logo' onClick={toggleHome}/>
                    </Cp.LogoWrapper>
                    <Cp.NavMenu>
                      {navItems}
                    </Cp.NavMenu>
               </Cp.ContentWrapper>
                 <Cp.IconsWrapper>
                       <Cp.MenuIcon onClick={toggle} isOpen={isOpen}/> 
                       <Cp.CloseIcon onClick={toggle} isOpen={isOpen}/>
                 </Cp.IconsWrapper>
           </Cp.NavbarWrapper>
        </Cp.Nav>
        <Cp.MobileWrapper isOpen={isOpen}>
            <Cp.MobileNavMenu >
                {navItemsMob}
           </Cp.MobileNavMenu>
        </Cp.MobileWrapper>
            </>
    )
}

export default Navbar
