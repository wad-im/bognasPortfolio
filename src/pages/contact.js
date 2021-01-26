import React from 'react'
import {Layout} from '../components'
import { Title } from '../components/Intro'
import styled from 'styled-components';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ContactPage = ()=>{
    const data = useStaticQuery(graphql`
    query {
        contentfulAsset (id: {eq: "b7258b53-fc27-5f56-aec3-bf034c2c63d7"})
            {description
            fluid(quality: 100, maxWidth: 700){
                ...GatsbyContentfulFluid_withWebp
            }}
       }
    `)
    return (
        <Layout>
            <ContactGrid>
            <ContactPageImage fluid={data.contentfulAsset.fluid} alt={data.contentfulAsset.description}/>
            <div>
                <Title>Bogna Anna</Title>
                <p>myemail@gmail.com</p>
                <p className="description">
                I am looking forward to hear about new opportunities and emerging projects. You are welcome to contact me with any inquiry about design and my services.LinkedIn
                </p>
                <a href="https://dk.linkedin.com/in/bogna-anna-gebalska" title="Linkedin Profile">Linkedin</a>
            </div>
            </ContactGrid>
            
        </Layout>
        
    )
}

const ContactGrid = styled.section`
    margin-top: 6rem;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-column-gap: calc(4.545%*2);
    grid-template-rows: auto;
    .description {
        margin: 3rem 0;
    }
`

const ContactPageImage = styled(Img)`
    grid-column: 1;
`


export default ContactPage