import React,{useState} from 'react'
import * as Cp from './NavbarComponents'
import { data } from './NavbarData'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [hover, setHover] = useState(false)

    const navItems = data.map((item,index) => {
    return (
        <Cp.NavItem >
            <Cp.NavLink to='/' style={item.submenu ? { paddingTop: '30px', paddingBottom: '30px'} : null} onMouseEnter={() => item.submenu && setHover(true)} onMouseLeave={() => item.submenu && setHover(false)}>{item.title} {item.submenu && <Cp.DropdownIcon />}
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
                <Cp.NavLink to='/' onClick={() => item.submenu && setHover(true)}>
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
    return (
        <React.Fragment>
        <Cp.Nav>
           <Cp.NavbarWrapper>
               <Cp.ContentWrapper>
                    <Cp.LogoWrapper>
                     <img src="https://templatemo.com/templates/templatemo_558_klassy_cafe/assets/images/klassy-logo.png" alt='logo' />
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
            </React.Fragment>
    )
}

export default Navbar
