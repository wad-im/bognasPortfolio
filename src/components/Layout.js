import React from 'react'
import styled from 'styled-components'
import GlobalStyle from "../GlobalStyles"
import {Header, Footer} from './index'

const Layout = ({children, pathname}) => {
      return (
        <PageContainer>
            <GlobalStyle/>
            <Header pathname={pathname}/>
            <Content>
                {children}
            </Content>
            <Footer/>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    min-height: 100vh;
    display: grid;
    max-width: 120rem;
    grid-template-columns: auto 68.75% auto;
    grid-template-rows: auto 1fr auto;
    /* padding: 0 2rem; */
    @media (max-width: 1220px) {
        grid-template-columns: 8% auto 8%;
    }
    @media (max-width: 1004px) {
        grid-template-columns: 4% auto 4%;
    }
    @media (max-width: 922px) {
        grid-template-columns: 1fr;
    }
`
const Content = styled.main`
    padding: 2rem 0rem;
    grid-column: 2 / span 1;
    @media (max-width: 922px) {
        grid-column-start: 1;
    }   
`

export default Layout