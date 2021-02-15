import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {Intro, Layout} from '../components'
import SEO from '../components/SEO'

const projectPage = () => {
    return ( 
        <Layout>
            <SEO/>
            <Intro/>
            <ProjectPageGrid>
                <MainImage>
                    <Img/>
                </MainImage>
                <ProjectDescription>
                    
                </ProjectDescription>
                <SmallImage>
                    <Img/>
                </SmallImage>
            </ProjectPageGrid>
        </Layout>
     );
}

const ProjectPageGrid = styled.section`
    margin-top: 6rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 4.545%;
    grid-template-rows: fit-content;
`

const MainImage = styled.div`
    grid-column: 1 / span 2;
`
const ProjectDescription = styled.div`
    grid-column: 2 / span 1;
`
const SmallImage = styled.div`
    grid-column: 2 / span 1;
    grid-row: 2 / span 1;
`
 
export default projectPage;