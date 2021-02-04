import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import {motion} from 'framer-motion'


export const HoverMotion = {
    rest: {
        opacity: 0,
        transition: {
            duration: 0.5,
            type: "tween",
            ease: "easeIn"
        }
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.5,
            type: "tween",
            ease: "easeIn"
        }
    },
    hover: {
        opacity: 1,
        transtion: {
            duration: 0.5,
            type: "tween",
            ease: "easeOut"
        },
    },
}
export const ContactMotion = {
    rest: {
        rotate: -15,
        transition: {
            duration: 0.75,
            type: "tween",
            ease: "backInOut"
        }
    },
    show: {
        rotate: 0,
        transition: {
            duration: 0.75,
            type: "tween",
            ease: "backInOut"
        }
    },
    hover: {
        rotate: 0,
        transtion: {
            duration: 0.75,
            type: "tween",
            ease: "backInOut"
        },
    },
}


const Header = ({pathname})=>{
      return (
        <HeaderContainer>
            <Menu>
                <li>
                    <StyledLink initial={pathname === '/' ? 'show' : 'rest'} whileHover='hover' animate={pathname === '/' ? 'show' : 'rest'} activeClassName='active' to="/">
                        Work
                        <Line variants={HoverMotion} pathname={pathname} link={'/'} color={'rgba(212, 184, 175, 0.5)'}/>
                    </StyledLink>
                </li>
                <li>
                    <StyledLink initial={pathname === '/about' ? 'show' : 'rest'} whileHover='hover' animate={pathname === '/about' ? 'show' : 'rest'} activeClassName='active' to="/about">
                        About
                        <Line variants={HoverMotion} pathname={pathname} link={'/about'}color={'rgba(184, 213, 222, 0.5)'}/>
                    </StyledLink>
                </li>
                <li>
                    <StyledLink initial={pathname === '/contact' ? 'show' : 'rest'} whileHover='hover' animate={pathname === '/contact' ? 'show' : 'rest'} activeClassName='active' to="/contact">
                        Contact
                        <ContactLine variants={ContactMotion} pathname={pathname} link={'/contact'} color={'rgba(120, 180, 180, 0.5)'}/> 
                    </StyledLink>
                </li>
            </Menu>
        </HeaderContainer>
        
    )
}

const HeaderContainer= styled.nav`
    width: 100%;
    height: 10vh;
    grid-column: 2 / span 1;
    padding: 2rem 0rem 1rem 0rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @media (max-width: 922px) {
        grid-column-start: 1;
    }  
`
const Menu = styled.ul`
    display: flex;
    list-style: none;
    width:100%;
    justify-content: flex-end;
`

const StyledLink = styled(motion.custom(Link))`
    text-decoration: none;
    margin-left: 7.27vw;
    text-transform: uppercase;
    color: #707070;
    font-weight: 700;
    padding: 0 0.2rem;
    position: relative;
`

const Line = styled(motion.div)`
    position: absolute;
    right: 0;
    bottom: -30%;
    height: clamp(0.83rem, 1.041vw, 1.25rem);
    z-index: -1;
    width: 100%;
    opacity: ${props => props.pathname===props.link ? '1' : '0'};
    background-color: ${props => props.color};
`
const ContactLine = styled(motion.div)`
    position: absolute;
    right: 0;
    bottom: -30%;
    height: clamp(0.83rem, 1.041vw, 1.25rem);
    z-index: -1;
    width: 100%;
    transform-origin: top right;
    opacity: 1;
    background-color: ${props => props.color};
`


export default Header