import React from 'react'
import {Layout} from '../components'
import Intro from '../components/Intro'
import styled from 'styled-components';
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage} from "gatsby-plugin-image"
import Seo from '../components/SEO';


const AboutPage = ({location})=>{
    const pathname = location.pathname
    const link = pathname === '/' ? '/about' : '/'
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
            <Seo title="About"/>
            {/* <Link to={link}>
                <Title>Bogna Anna</Title>
            </Link> */}
            <Intro pathname={pathname}/>
            <AboutGrid>
                <div className="text-bl text-bl-1">
                        <p>My design approach stems from architecture studies, where aesthetics and composition goes hand in hand with technical solutions. That practical, users oriented mindset pervades my design thinking.</p>
                        <p>Sustainability studies, which I took at KTH in Stockholm, brought an important aspet to my design work and together with Scandinavian design and my East European roots give a distinct basis for my creative work.</p>
                </div>
                <div className="text-bl text-bl-2">
                        <p>While designing I enter a space of flow, where I work fully focused and committed to create the best solution to each unique project&nbsp;context.</p>
                        <p>If not by the desk, you will most likely find me trekking in nature or teaching and practicing in one of the local yoga&nbsp;studios.</p>
                        <p>Few years ago, I founded URBANE films&talks - a project discussing documentary films, cities and sustainable urban future, out of my passion for these fields.</p>
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
            margin-bottom: 1rem;
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