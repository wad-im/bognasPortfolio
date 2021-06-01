import React from 'react'
import {graphql, Link} from 'gatsby'
import styled from 'styled-components'
import {documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { GatsbyImage} from "gatsby-plugin-image"
import {Intro, Layout} from '../components'
import Seo from '../components/SEO'
import Arrow from '../images/arrow'

const projectPage = ({data, location, pageContext}) => {
    const {next, previous} = pageContext
    const prevURL = previous ? previous.slug : null
    const nextURL = next ? next.slug : null

    const smallTestimonial = data.contentfulProject.testimonialType !== null && data.contentfulProject.testimonialText !== null && data.contentfulProject.testimonialType.includes('Small Testimonial (displayed instead of small image)')
    const bigTestimonial = data.contentfulProject.testimonialType !== null && data.contentfulProject.testimonialText !== null && data.contentfulProject.testimonialType.includes('Big testimonial (displayed below the large image)')
    const smallImage = data.contentfulProject.smallImage !== null
    const bigImage = data.contentfulProject.bigImage !== null
    const optionalSmallImage = data.contentfulProject.optionalSmallImage !== null && !smallTestimonial 
    const caseContent = data.contentfulProject.case !== null
    const client = data.contentfulProject.client !== null
    const description = data.contentfulProject.projectPageText !== null
    console.log(optionalSmallImage)


    return ( 
        <Layout pathname={location.pathname}>
            <Seo title={data.contentfulProject.client} description={data.contentfulProject.seoDescription} />
            <Intro/>
            <ProjectPageGrid>
                {
                    bigImage ? 
                        <MainImage>
                            <Image image={data.contentfulProject.bigImage.gatsbyImageData} alt={data.contentfulProject.bigImage.title}/>
                        </MainImage>
                        : ''
                }
                <ProjectDescription>
                    <h4>Case: {caseContent ? data.contentfulProject.case : ''}</h4>
                    <h4> Client: {client ? data.contentfulProject.client : ''}</h4>
                    {description ? documentToReactComponents(JSON.parse(data.contentfulProject.projectPageText.raw)): ''}
                </ProjectDescription>
                
                 {
                     smallImage ? 
                 <BelowText>
                    <Image image={data.contentfulProject.smallImage.gatsbyImageData} alt={data.contentfulProject.smallImage.title}/>
                 </BelowText> 
                    : smallTestimonial ? <BelowText>
                        {documentToReactComponents(JSON.parse(data.contentfulProject.testimonialText.raw))}
                            <div className="testimonialAuthor">
                                {data.contentfulProject.testimonialAuthor.map(line => (
                                    <p key={line}>{line}</p>
                                 ))}
                            </div>
                    </BelowText> 
                    : ''
                 }
                 {
                    bigTestimonial ? 
                        <BigTestimonial>
                            {documentToReactComponents(JSON.parse(data.contentfulProject.testimonialText.raw))}
                            <div className="testimonialAuthor">
                                {data.contentfulProject.testimonialAuthor.map(line => (
                                    <p key={line}>{line}</p>
                                 ))}
                            </div>
                            
                        </BigTestimonial> : ''
                 }
                 {
                     optionalSmallImage ? 
                        <OptSmImage>
                            <Image image={data.contentfulProject.optionalSmallImage.gatsbyImageData} alt={data.contentfulProject.optionalSmallImage.title}/>
                        </OptSmImage> : ''
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
            case
            client
            projectPageText {raw}
            testimonialText {raw}
            testimonialAuthor
            testimonialType
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
            optionalSmallImage {
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
    grid-column-gap: clamp(3rem, 4.545%, 3.75rem);
    grid-template-rows: fit-content;
    grid-row-gap: clamp(3rem, 4.545%, 3.75rem);
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
    .testimonialAuthor {
        text-align: right;
        margin-top: 1rem;
        p {
            line-height: 1.2;
        }
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
const BelowText = styled.div`
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

const OptSmImage = styled.div`
    margin-top: 1.5vw;
    grid-column: 3 / span 1;
    grid-row: 3 / span 1;
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
const BigTestimonial = styled.div`
    grid-column: 1 / span 2;
    grid-row: 3 / span 1;
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