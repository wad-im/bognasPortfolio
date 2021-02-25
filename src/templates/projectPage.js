import React from 'react'
import {graphql, Link} from 'gatsby'
import styled from 'styled-components'
import {documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Img from 'gatsby-image'
import {Intro, Layout} from '../components'
import SEO from '../components/SEO'
import ArrowIcon from '../images/arrow.svg'

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
                    <Image fluid={data.contentfulProject.bigImage.fluid} alt={data.contentfulProject.bigImage.title}/>
                </MainImage>
                <ProjectDescription>
                    <h4>Case: {data.contentfulProject.case}</h4>
                    <h4> Client: {data.contentfulProject.client}</h4>
                    {documentToReactComponents(JSON.parse(data.contentfulProject.projectPageText.raw))}
                </ProjectDescription>
                 <SmallImage>
                    <Image fluid={data.contentfulProject.smallImage.fluid} alt={data.contentfulProject.smallImage.title}/>
                 </SmallImage>
                 {prevURL && <Previous to={`/${prevURL}`}><img src={ArrowIcon} alt="Previous Project"/></Previous>}
                 {nextURL && <Next to={`/${nextURL}`}><img src={ArrowIcon} alt="Previous Project"/></Next> }
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
                fluid (maxHeight: 600, quality: 100){
                    ...GatsbyContentfulFluid_withWebp_noBase64
                }
            }
            smallImage {
                title
                fluid (quality: 100){
                    ...GatsbyContentfulFluid_withWebp_noBase64
                }
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

const Image = styled(Img)`
    height: 100%;
`

const Previous = styled(Link)`
    position: absolute;
    bottom: 0;
    left: -4rem;
    height: fit-content;
    line-height: 0;
`
const Next = styled(Link)`
    position: absolute;
    bottom: 0;
    right: -4rem;
    height: fit-content;
    line-height: 0;
    img {
        transform: rotate(180deg);
    }
`

 
export default projectPage;