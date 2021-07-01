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
    const optLgImage = !optSmImage && bigTestimonial ? 'larger-smImage' : ''
    const caseName = data.contentfulProject.case !== null ? data.contentfulProject.case : ''
    const clientName = client !== null ? client : ''
    const mainText = projectPageText !== null ? documentToReactComponents(JSON.parse(projectPageText.raw)) : ''
    

    const expandedProject = bigTestimonial || optSmImage

    return (
        <Layout pathname={location.pathname}>
            <Seo title={caseName} description={seoDescription} />
            <Intro />
            <Container expandedProject={expandedProject}>
                <GatsbyImage image={bgImage.gatsbyImageData} alt={bgImage.title} className='bg-image' />
                <div className={`project-details ${optLgImage}`}>
                    <div>
                        <h4>Case: {caseName}</h4>
                        <h4>Client: {clientName}</h4>
                        {mainText}
                    </div>
                    {
                        smImage ? <GatsbyImage image={smallImage.gatsbyImageData} alt={smallImage.title} className='sm-image' /> : 
                        smallTestimonial ? 
                            <div className="testimonial-container" smalltestimonial='true'>
                                {testimonial}
                                <div className="testimonial-author">
                                    {testimonialAuthor && testimonialAuthor.map(item => (
                                            <p key={item}>{item}</p>
                                            ))}
                                </div>
                            </div> : ''
                    }
                </div>
                {
                    optSmImage && <GatsbyImage image={optionalSmallImage.gatsbyImageData} alt={optionalSmallImage.title} className='sm-image opt-image' />
                }
                {
                   bigTestimonial &&
                    <div className="testimonial-container">
                        {testimonial}
                        <div className="testimonial-author">
                            {testimonialAuthor && testimonialAuthor.map(item => (
                                    <p key={item}>{item}</p>
                                    ))}
                        </div>
                    </div>
                }
                {prevURL && <Previous to={`/${prevURL}`}>
                    <Arrow />
                </Previous>}
                {nextURL && <Next to={`/${nextURL}`}><Arrow /></Next>}
            </Container>
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
                    quality: 100
                    formats: [AUTO, WEBP]
                )
            }
            smallImage {
                title
                gatsbyImageData (
                    placeholder: NONE
                    quality: 100
                    formats: [AUTO, WEBP]
                    width: 400
                )
            }
            optionalSmallImage {
                title
                gatsbyImageData (
                    placeholder: NONE
                    quality: 100
                    formats: [AUTO, WEBP]
                    width: 400
                )
            }
        }
    }
`
// big image ratio 880/660 and small image 400/300, on two pages font size is 20pt not 24, the author is 18, and the testimonial is in italic
const Container = styled.section`
    position:relative;
    margin-top: 4rem;
    display: grid;
    grid-template-columns: 65.15151515% 30.30303030%;
    grid-column-gap: calc(100% - 65.15151515% - 30.303030%);
    grid-row-gap: 3.75rem;
    p {
        font-size: 1.5rem;
        ${props => props.expandedProject && `
            font-size: 1.25rem;
        `}
    }
    .bg-image {
        aspect-ratio: calc(4/3);
        width: 100%;
    }
    .project-details {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        grid-column: 2 / span 1;
        h4 {
            text-transform: uppercase;
            :nth-of-type(2) {
                margin-bottom: 1rem;
            }
        }
    }
    .larger-smImage {
        grid-row: 1 / span 2;
    }
    .sm-image {
        max-width: 400px;
    }
    .testimonial-container {
        font-style: italic;
        grid-row: ${props => props.smalltestimonial ? '' : '2 / span 1'};
    }
    .testimonial-author {
        margin-top: 0.5rem;
        p {
            font-size: 1.125rem;
            text-align: right;
            font-style: normal;
        }
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