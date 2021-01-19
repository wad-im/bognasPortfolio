import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const Header = ()=>{
    return (
        <HeaderContainer>
            <Menu>
                <li>
                    <StyledLink activeClassName="active"to="/">Work</StyledLink>
                    
                </li>
                <li>
                    <StyledLink activeClassName="active" to="/about">About</StyledLink>
                
                </li>
                <li>
                    <StyledLink activeClassName="active" to="/contact">Contact</StyledLink>
                
                </li>
            </Menu>
        </HeaderContainer>
        
    )
}

const HeaderContainer= styled.nav`
    width: 100%;
    height: 10vh;
    grid-column: 2 /span 12;
    padding: 2rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
const Menu = styled.ul`
    display: flex;
    list-style: none;
    width: calc(100%/3);
    justify-content: space-between;
    li {
        position: relative;
    }

`

const StyledLink = styled(Link)`
    text-decoration: none;
    text-transform: uppercase;
    color: black;
    &.active {
        font-weight: 700;
    }

`


export default Header