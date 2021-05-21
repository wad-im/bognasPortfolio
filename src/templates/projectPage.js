import React from 'react'
import {graphql, Link} from 'gatsby'
import styled from 'styled-components'
import {documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { GatsbyImage} from "gatsby-plugin-image"
import {Intro, Layout} from '../components'
import SEO from '../components/SEO'
import Arrow from '../images/arrow'

const projectPage = ({data, location, pageContext}) => {
    const {next, previous} = pageContext
    const prevURL = previous ? previous.slug : null
    const nextURL = next ? next.slug : null
    return ( 
        <Layout pathname={location.pathname}>
            <SEO title={data.contentfulProject.category} description={data.contentfulProject.seoDescription} />
            <Intro/>
            <ProjectPageGrid>
                <MainImage>
                    <Image image={data.contentfulProject.bigImage.gatsbyImageData} alt={data.contentfulProject.bigImage.title}/>
                </MainImage>
                <ProjectDescription>
                    <h4>Case: {data.contentfulProject.case}</h4>
                    <h4> Client: {data.contentfulProject.client}</h4>
                    {documentToReactComponents(JSON.parse(data.contentfulProject.projectPageText.raw))}
                </ProjectDescription>
                 {
                     data.contentfulProject.smallImage !== null ? 
                 <SmallImage>
                    <Image image={data.contentfulProject.smallImage.gatsbyImageData} alt={data.contentfulProject.smallImage.title}/>
                 </SmallImage> : <div></div>
                 }
                 {prevURL && <Previous to={`/${prevURL}`}>
                        <Arrow/>
                     </Previous>}
                 {nextURL && <Next to={`/${nextURL}`}><Arrow/></Next> }
            </ProjectPageGrid>
        </Layout>
     );
}

export const query = graphql`
    query ($slug: String!){
        contentfulProject (slug: {eq: $slug}) {
            seoDescription
            category
            case
            client
            projectPageText {raw}
            bigImage {
                title
                gatsbyImageData (
                    height: 675
                    placeholder: NONE
                    quality: 80
                    formats: [AUTO, WEBP]
                )
            }
            smallImage {
                title
                gatsbyImageData (
                    placeholder: NONE
                    quality: 80
                    formats: [AUTO, WEBP]
                )
            }
            
        }
    }
`

const ProjectPageGrid = styled.section`
    position:relative;
    margin-top: 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 4.545%;
    grid-template-rows: fit-content;
    @media (max-width: 54rem) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 36rem) {
        grid-template-columns: 1fr;
        grid-column-gap: 0;
        grid-row-gap: 3.75rem;
    }
    .arrow {
        transition: fill 0.5s ease;
    }    
`

const MainImage = styled.div`
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;
    @media (max-width: 54rem) {
        display: none;
    }
`
const ProjectDescription = styled.div`
    grid-column: 3 / span 1;
    h4 {
        text-transform: uppercase;
    }
    p {
        margin-top: 1.5vw;
    }
    @media (max-width: 54rem) {
        grid-column: 2 / span 1;
        
    }
    @media (max-width: 36rem) {
        grid-column: 1 / span 1;
    }
`
const SmallImage = styled.div`
    margin-top: 1.5vw;
    grid-column: 3 / span 1;
    grid-row: 2 / span 1;
    @media (max-width: 54rem) {
        grid-column: 1 / span 1;
        grid-row: 1 / span 1;
        margin-top: 0;
    }
    @media (max-width: 36rem) {
        grid-column: 1 / span 1;
        grid-row: 2 / span 1;
        
    }
`

const Image = styled(GatsbyImage)`
    height: 100%;
`

const Previous = styled(Link)`
    position: absolute;
    bottom: 0;
    left: -4rem;
    height: fit-content;
    line-height: 0;
    
    @media (max-width: 54rem){
        display: none;
    }
    &:hover .arrow {
        fill: rgba(146, 146, 165, 0.8);
    }
`
const Next = styled(Link)`
    position: absolute;
    bottom: 0;
    right: -4rem;
    height: fit-content;
    line-height: 0;
    .arrow {
        transform: rotate(180deg);
    }
    &:hover .arrow {
        fill: rgba(146, 146, 165, 0.8);
    }    
    @media (max-width: 54rem){
        display: none;
    }
`


 
export default projectPage;