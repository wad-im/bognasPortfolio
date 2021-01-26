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
    grid-column: 2 / span 1;
    padding: 2rem 0;
    p {font-size: 1rem;}
`


export default Footer