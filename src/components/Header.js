import React from 'react'
import styled from 'styled-components'

const Header = ()=>{
    return (
        <HeaderContainer>
            <h1>Bogna Design</h1>
        </HeaderContainer>
        
    )
}

const HeaderContainer= styled.div`
    width: 100%;
    grid-column: 2 /span 12;
    padding: 2rem;
`

export default Header