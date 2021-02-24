import React from 'react'
import {graphql} from 'gatsby'
import styled from 'styled-components'
import {documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Img from 'gatsby-image'
import {Intro, Layout} from '../components'
import SEO from '../components/SEO'

const projectPage = ({data, location}) => {
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
    margin-top: 6rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 4.545%;
    grid-template-rows: fit-content;
    /* grid-row-gap: 9.09%; */
`

const MainImage = styled.div`
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;
`
const ProjectDescription = styled.div`
    grid-column: 3 / span 1;
    h4 {
        text-transform: uppercase;
    }
    p {
        margin-top: 1.5vw;
    }
`
const SmallImage = styled.div`
    margin-top: 1.5vw;
    grid-column: 3 / span 1;
    grid-row: 2 / span 1;
`

const Image = styled(Img)`
    height: 100%;
`
 
export default projectPage;