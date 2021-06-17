import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { GatsbyImage } from "gatsby-plugin-image"
import { Intro, Layout } from '../components'
import Seo from '../components/SEO'
import Arrow from '../images/arrow'

const projectPage = ({ data, location, pageContext }) => {
    const { next, previous } = pageContext
    const prevURL = previous ? previous.slug : null
    const nextURL = next ? next.slug : null

    const { testimonialType,
        testimonialText,
        smallImage,
        testimonialAuthor,
        bigImage,
        optionalSmallImage,
        client,
        projectPageText,
        seoDescription } = data.contentfulProject

    const testimonial = testimonialText !== null ? documentToReactComponents(JSON.parse(testimonialText.raw)) : ''
    const smallTestimonial = testimonialType !== null && testimonialType.includes('Small Testimonial (displayed instead of small image)')
    const bigTestimonial = testimonialType !== null && testimonialType.includes('Big testimonial (displayed below the large image)')
    const smImage = smallImage !== null
    const bgImage = bigImage !== null ? bigImage : ''
    const optSmImage = optionalSmallImage !== null && !smallTestimonial
    const caseName = data.contentfulProject.case !== null ? data.contentfulProject.case : ''
    const clientName = client !== null ? client : ''
    const mainText = projectPageText !== null ? documentToReactComponents(JSON.parse(projectPageText.raw)) : ''


    return (
        <Layout pathname={location.pathname}>
            <Seo title={caseName} description={seoDescription} />
            <Intro />
            <ProjectPageGrid>
                <GatsbyImage image={bgImage.gatsbyImageData} alt={bgImage.title} className='bgImage' />
                <ProjectDescription>
                    <h4>Case: {caseName}</h4>
                    <h4> Client: {clientName}</h4>
                    {mainText}
                </ProjectDescription>
                {
                    smImage ?
                        <BelowText>
                            <GatsbyImage image={smallImage.gatsbyImageData} alt={smallImage.title} className='smallImage' />
                        </BelowText>
                        : smallTestimonial ? <BelowText>
                            {testimonial}
                            <div className="testimonialAuthor">
                                {testimonialAuthor.map(line => (
                                    <p key={line}>{line}</p>
                                ))}
                            </div>
                        </BelowText>
                            : ''
                }
                {
                    bigTestimonial ?
                        <div className='bigTestimonial'>
                            {testimonial}
                            <div className="testimonialAuthor">
                                {testimonialAuthor.map(line => (
                                    <p key={line}>{line}</p>
                                ))}
                            </div>

                        </div> : ''
                }
                {
                    optSmImage ?
                        <OptSmImage>
                            <GatsbyImage image={optionalSmallImage.gatsbyImageData} alt={optionalSmallImage.title} />
                        </OptSmImage> : ''
                }
                {prevURL && <Previous to={`/${prevURL}`}>
                    <Arrow />
                </Previous>}
                {nextURL && <Next to={`/${nextURL}`}><Arrow /></Next>}
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
                    width: 880
                    aspectRatio: 1.334
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
                    width: 400
                    aspectRatio: 1.334
                )
            }
            optionalSmallImage {
                title
                gatsbyImageData (
                    placeholder: NONE
                    quality: 80
                    formats: [AUTO, WEBP]
                    width: 400
                    aspectRatio: 1.334
                )
            }
        }
    }
`
// big image ratio 880/660 and small image 400/300, on two pages font size is 20pt not 24, the author is 18, and the testimonial is in italic
const ProjectPageGrid = styled.section`
    position:relative;
    margin-top: 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: clamp(3rem, 4.545%, 3.75rem);
    grid-template-rows: repeat(3, 300px);
    grid-row-gap: clamp(3rem, 4.545%, 3.75rem);
    p {
        font-size: 1.25rem;
    }
    @media (max-width: 54rem) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 36rem) {
        grid-template-columns: 1fr;
        grid-column-gap: 0;
        grid-row-gap: 3.75rem;
    }
    .bgImage {
        grid-column: 1 / span 2;
        grid-row: 1 / span 2;
        @media (max-width: 54rem) {
            display: none;
        } 
    }
    .arrow {
        transition: fill 0.5s ease;
    }
    .bigTestimonial {
        grid-column: 1 / span 2;
        grid-row: 3 / span 1;
    }
    .testimonialAuthor {
        text-align: right;
        margin-top: 1rem;
        p {
            line-height: 1.2;
        }
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