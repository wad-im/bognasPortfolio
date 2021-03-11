import React from 'react'
import {Layout} from '../components'
import { Title } from '../components/Intro'
import styled from 'styled-components';
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage} from "gatsby-plugin-image"
import SEO from '../components/SEO';


const AboutPage = ({location})=>{
    const pathname = location.pathname
    const data = useStaticQuery(graphql`
    query {
        contentfulAsset (id: {eq: "8dbb0ae4-1461-5d16-8d4c-205524453d12"})
            {description
            gatsbyImageData (
                quality: 100
                placeholder: NONE
                aspectRatio: 1
                width: 400
                formats: [AUTO, WEBP]
            )
            }
       }
    `)
    return (
        <Layout pathname={pathname}>
            <SEO title="About"/>
            <Title>Bogna Anna</Title>
            <AboutGrid>
                <div className="text-bl text-bl-1">
                        <p>I design with an approach shaped by mixed interests in art and technical disciplines . My education in architecture and sustainability studies are threads that continue to be present in my design work.</p>
                        <p>While designing I enter a space of flow, where I work fully focused and committed to create the best solution to each unique project&nbsp;context.</p>
                </div>
                <div className="text-bl text-bl-2">
                        <p>If not by the desk, you can most likely find me in one of the local yoga studios, where I teach and practise.</p>
                        <p>I am also a founder of URBANE films&talks project  - a project discussing documentary films, cities and sustainable urban future.</p>
                </div>
                <ProfileImg image={data.contentfulAsset.gatsbyImageData} alt={data.contentfulAsset.description}/>
            </AboutGrid>
        </Layout>
    )
}

const AboutGrid = styled.div`
    margin-top: 4rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 4.545%;
     .text-bl p {
            margin-bottom: 1.5vw;
        }
    .text-bl-1 {
        grid-column: 1 / span 1;
    }
    .text-bl-2 {
        grid-column: 2 / span 1;
    }
    @media (max-width: 54rem) {
        margin-top: 3rem;
        grid-template-columns: 1fr 1fr;
        .text-bl-2 {
            grid-column: 1 / span 1;
        }
        
    }
    @media (max-width: 36rem) {
        grid-template-columns: 1fr;
        grid-column-gap: 0;
    }
`

const ProfileImg = styled(GatsbyImage)`
    grid-column: 3 / span 1;
    object-fit: cover;
    width: 100%;
    aspect-ratio: 1 / 1;
    @media (max-width: 54rem) {
        grid-column: 2 / span 1;
        grid-row: 1 / span 2;
    }
    @media (max-width: 36rem) {
        margin-top: 3.75rem;
        grid-column: 1 / span 1;
        grid-row: 3 / span 1;
    }
`

export default AboutPage