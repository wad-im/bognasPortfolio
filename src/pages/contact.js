import React from 'react'
import {Layout} from '../components'
import { Title } from '../components/Intro'
import styled from 'styled-components';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {HoverMotion, ProjectOverlay} from '../components/ProjectCard'
import {motion} from 'framer-motion'
import LinkedinIcon from '../images/iconmonstr-linkedin-1.svg'
import IssuuIcon from '../images/issuu-icon_1.svg'
import SEO from '../components/SEO';

const ContactPage = ({location})=>{
    const pathname = location.pathname
    const data = useStaticQuery(graphql`
    query {
        contentfulAsset (id: {eq: "b7258b53-fc27-5f56-aec3-bf034c2c63d7"})
            {description
            fluid(quality: 70, maxWidth: 700){
                ...GatsbyContentfulFluid_withWebp_noBase64
            }}
       }
    `)
    return (
        <Layout pathname={pathname}>
            <SEO title="Contact"/>
            <ContactGrid>
            <motion.div className="contact_page_image" whileHover="hover" whileTap="hover" initial="rest" animate="rest">
                <ContactPageImage fluid={data.contentfulAsset.fluid} alt={data.contentfulAsset.description}/>
                <ProjectOverlay variants={HoverMotion}>
                    <h4>Illustration</h4>
                    <h5>Copenhagen</h5>
                </ProjectOverlay>
            </motion.div>
            
            <div className="contact-text">
                <div className="content">
                    <Title>Bogna Anna</Title>
                    <p>bognaanna.design@gmail.com</p>
                    <p className="description">
                    Previously, living in Milan, Stockholm and Lodz, I am now based in Copenhagen, where I am looking forward to hear about design projects and new opportunities.
                    </p>
                    <p>You are welcome to contact me with an inquiry about design and my services. Just <span className="underlined">drop me a line!<Line color='rgba(230, 102, 54, 0.5)'/></span></p>
                </div>
                <div className="social-icons">
                    <a href="https://dk.linkedin.com/in/bogna-anna-gebalska" title="Linkedin Profile"><img src={LinkedinIcon} alt="Linkedin Icon linking to Bogna's profile"/></a>
                    <a href="https://issuu.com/bognaannagebalska" title="Portfolio on Issuu"><img src={IssuuIcon} alt="Issue Icon linking to Bogna's profile"/></a>
                </div>
            </div>
            </ContactGrid>
            
        </Layout>
        
    )
}

const ContactGrid = styled.section`
    margin-top: 6rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 4.545%;
    grid-template-rows: auto;
    h4 {
        text-transform: uppercase;
    }
    .contact_page_image{
        position: relative;
        grid-column: 1 /span 2;
    }
    .contact-text {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .description {
        margin: 1.5vw 0;
    }
    .social-icons {
        display: flex;
        align-items: flex-end;
        a {
            margin-right: 1.5rem;
        }
    }
    .underlined {
        position: relative;
    }
    @media (max-width: 54rem) {
        margin-top: 3rem;
        grid-template-columns: 1fr 1fr;
        .contact_page_image {
            grid-column: 1 / span 1;
        }
        .social-icons{
            margin-top: 3vw;
        }
    }
    @media (max-width: 36rem) {
        grid-template-columns: 1fr;
        grid-column-gap: 0;
        grid-row-gap: 3.75rem;
    }
    
`

const ContactPageImage = styled(Img)`
    grid-column: 1 / span 2;
`

const Line = styled.div`
    position: absolute;
    right: 0;
    bottom: -30%;
    height: clamp(0.83rem, 1.041vw, 1.25rem);
    z-index: -1;
    width: 100%;
    background-color: ${props => props.color};
`


export default ContactPage