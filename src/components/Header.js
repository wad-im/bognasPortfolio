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
    grid-column: 2 /span 1;
    padding: 2rem 0rem 1rem 0rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
const Menu = styled.ul`
    display: flex;
    list-style: none;
    width:100%;
    justify-content: flex-end;
    li {
        position: relative;
    }

`

const StyledLink = styled(Link)`
    text-decoration: none;
    margin-left: 8rem;
    text-transform: uppercase;
    color: #707070;
    font-weight: 700;
    

`


export default Header