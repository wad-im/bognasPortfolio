import React from 'react'
import styled from 'styled-components'

const Footer = ()=>{
    return (
        <FooterContainer>
            <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    width: 100%;
    grid-column: 2 / span 12;
    padding: 2rem;
`


export default Footer