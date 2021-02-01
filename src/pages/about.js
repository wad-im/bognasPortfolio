import React from 'react'
import {Layout} from '../components'
import { Title } from '../components/Intro'
import styled from 'styled-components';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const AboutPage = ({location})=>{
    const pathname = location.pathname
    const data = useStaticQuery(graphql`
    query {
        contentfulAsset (id: {eq: "d6e37ce1-6c01-5dc7-8bcb-80bcb92b7600"})
            {description
            fluid(quality: 100){
                ...GatsbyContentfulFluid_withWebp
            }}
       }
    `)
    return (
        <Layout pathname={pathname}>
            <Title>Bogna Anna</Title>
            <AboutGrid>
                <div className="about_description">
                    <p>As a graphic designer, I place myself at the intersection of art and technical fields. I have a Bachelor’s Degree in Architecture and background in sustainability studies that I am always happy to bring in in my projects.</p>
                    <p>While designing I enter a space of flow, where I work fully focused and committed to create the best solution in the unique project context.</p>
                    <p>If not designing, I am most likely guiding yoga classes or practicing myself.</p>
                    <p>Since one of my side interest is sustainability and cities,  I founded URBANE films&talks project, discussing documentary films.</p>
                </div>
                <ProfileImg fluid={data.contentfulAsset.fluid} alt={data.contentfulAsset.description}/>
            </AboutGrid>
        </Layout>
    )
}

const AboutGrid = styled.div`
    margin-top: 6rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 4.545%;
    grid-template-rows: 400px;
    grid-auto-flow: column;
     .about_description {
        grid-column: span 2;
        column-count: 2;
        column-gap: 60px;
        p {
            margin-bottom: 1.5rem;
        }
    }
`

const ProfileImg = styled(Img)`
    grid-column: 3 / span 1;
    object-fit: cover;
    width: 100%;
    aspect-ratio: 1 / 1;
`

export default AboutPage