import React from 'react'
import styled from 'styled-components'
import GlobalStyle from "../GlobalStyles"
import {Header, Footer} from './index'

const Layout = ({children, pathname}) => {
    console.log(pathname)
      return (
        <PageContainer>
            <GlobalStyle/>
            <Header pathname={pathname}/>
            <Content as="main">
                {children}
            </Content>
            <Footer/>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr minmax(auto, 1320px) 1fr;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    width: 100%;
    padding: 0 2rem;
`
const Content = styled.div`
    padding: 2rem 0rem;
    grid-column: 2 / span 1;
    
`

export default Layout