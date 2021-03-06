import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { GatsbyImage } from "gatsby-plugin-image"
import { removeWidows } from "string-remove-widows";
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

    const displayText = (text) => {
        const mainText = (documentToReactComponents(JSON.parse(text.raw)))
        const toBeDisplayedText = mainText.map(item => {
            const { res } = removeWidows(item.props.children[0]);
            const noBreak = '\u00A0';
            const textWithoutWidow = res.replace(/&nbsp;/gi, noBreak)
            return textWithoutWidow
        })
        return toBeDisplayedText
    }
    const mainText = projectPageText !== null ? displayText(projectPageText) : ''
    const expandedProject = bigTestimonial || optSmImage

    return (
        <Layout pathname={location.pathname}>
            <Seo title={caseName} description={seoDescription} />
            <Intro />
            <Container expandedProject={expandedProject}>
                <GatsbyImage image={bgImage.gatsbyImageData} alt={bgImage.title} className='bg-image' />
                <div className={`project-details ${optLgImage}`}>
                    <div className='project-details-text'>
                        <h4>CASE: {caseName}</h4>
                        <h4>CLIENT: {clientName}</h4>
                        {mainText.map(item => (
                            <p key={item}>{item}</p>
                        ))}
                    </div>
                    {   
                        smImage ? <GatsbyImage image={smallImage.gatsbyImageData} alt={smallImage.title} className='sm-image' /> : 
                        smallTestimonial  ? 
                            <div className="testimonial-container smalltestimonial smalltestimonial-desktop" smalltestimonial='true'>
                                {testimonial}
                                <div className="testimonial-author">
                                    {testimonialAuthor && testimonialAuthor.map(item => (
                                            <p key={item}>{item}</p>
                                            ))}
                                </div>
                            </div> : null
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
const Container = styled.section`
    position:relative;
    margin-top: 4rem;
    display: grid;
    grid-template-columns: 65.15151515% 30.30303030%;
    grid-column-gap: calc(100% - 65.15151515% - 30.303030%);
    grid-row-gap: clamp(2.5rem, 5.988%, 3.75rem);
    p {
        font-size: clamp(0.875rem, 1.0416666vw, 1.25rem);
        margin-bottom: 0.5rem;
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
            :nth-of-type(2) {
                margin-bottom: 1rem;
            }
        }
    }
    .larger-smImage {
        grid-row: 1 / span 2;
    }
    .testimonial-container {
        font-style: italic;
        grid-row: ${props => props.smalltestimonial ? '' : '2 / span 1'};
    }
    .testimonial-author {
        margin-top: 0.5rem;
        p {
            font-size: clamp(0.75rem, 0.9375vw, 1.125rem);
            text-align: right;
            font-style: normal;
            margin-bottom: 0;
        }
    }
    .smalltestimonial-mobile {
        display: none;
    }
    @media (max-width: 59rem){
      grid-template-columns: 1fr;
      grid-column-gap: 0;
      .project-details {
          grid-column: 1 / span 1;
          grid-row: 1 / span 1;
      } 
      .sm-image {
          display: none;
      }
      .bg-image {
          grid-column: 1 / span 1;
          grid-row: 2 / span 1;
      }
      .testimonial-container {
          grid-column: 1 / span 1;
          grid-row: 3 / span 1;
      }
    }
`

const Previous = styled(Link)`
    position: absolute;
    bottom: 0;
    left: -4rem;
    height: fit-content;
    line-height: 0;
    
    @media (max-width: 62,75rem) {
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
    @media (max-width: 62.75rem) {
        display: none;
    }
`

export default projectPage;