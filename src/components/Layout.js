import React from 'react'
import styled from 'styled-components'
import GlobalStyle from "../GlobalStyles"
import {Footer} from './index'

const Layout = (props) => {
    return (
        <PageContainer>
            <GlobalStyle/>
            <Content as="main">
                {props.children}
            </Content>
            <Footer/>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;
    column-gap: 2rem;
    grid-template-rows: 1fr auto;
    min-height: 100vh;
    width: 100%;

`
const Content = styled.div`
    grid-column: 2 / span 12;
    padding: 2rem;
    
`

export default Layout