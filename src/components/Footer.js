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
    display: flex;
    justify-content: flex-end;
    p {
        font-size: .75rem;
    }
    @media (max-width: 922px) {
        grid-column: 1 / span 1;
    }  
`


export default Footer