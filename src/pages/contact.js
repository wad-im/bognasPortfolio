import React from 'react'
import {Layout} from '../components'
import { Title } from '../components/Intro'
import styled from 'styled-components';
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage} from "gatsby-plugin-image"
import {HoverMotion, ProjectOverlay} from '../components/ProjectCard'
import {motion} from 'framer-motion'
import LinkedinIcon from '../images/iconmonstr-linkedin-1.svg'
import IssuuIcon from '../images/issuu-icon_1.svg'
import MediumIcon from '../images/Medium-icon.svg'
import Seo from '../components/SEO';

const ContactPage = ({location})=>{
    const pathname = location.pathname
    const data = useStaticQuery(graphql`
    query {
        contentfulAsset (id: {eq: "398d964c-c0d9-572e-8785-53fd54136985"})
            {description
            gatsbyImageData (
                placeholder: NONE
                quality: 100
                width: 800
                formats: [AUTO, WEBP]
            )
            }
        }
    `)
    return (
        <Layout pathname={pathname}>
            <Seo title="Contact"/>
            <ContactGrid>
            <motion.div className="contact_page_image" whileHover="hover" whileTap="hover" initial="rest" animate="rest">
                <ContactPageImage image={data.contentfulAsset.gatsbyImageData} alt={data.contentfulAsset.description}/>
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
                        Previously living in Milan, Stockholm and Lodz, I am now based in Copenhagen, where I am looking forward to get my hands on design projects and hear about new opportunities.
                    </p>
                    <p  className="description">
                        You are welcome to contact me with an inquiry about my design services and to talk about design ideas. Just <span className="underlined"><a href="mailto:bognaanna.design@gmail.com">drop me a line!</a><Line color='rgba(230, 102, 54, 0.5)'/></span>
                    </p>
                    <p>
                    I am happy to connect with other designers, take part in and support design & art events and film festivals.
                    </p>
                </div>
                <div className="social-icons">
                    <a href="https://dk.linkedin.com/in/bogna-anna-gebalska" title="Linkedin Profile"><img src={LinkedinIcon} alt="Linkedin Icon linking to Bogna's profile"/></a>
                    <a href="https://issuu.com/bognaannagebalska" title="Portfolio on Issuu"><img src={IssuuIcon} alt="Issue Icon linking to Bogna's profile"/></a>
                    <a href="https://bognaanna.medium.com/" title="Medium Blog"><img src={MediumIcon} alt="Medium Icon linking to Bogna's profile"/></a>
                </div>
            </div>
            </ContactGrid>
            
        </Layout>
        
    )
}

const ContactGrid = styled.section`
    margin-top: 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 4.545%;
    grid-template-rows: max-content;
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
        margin: clamp(1rem, 1.5vw, 1.5rem) 0;
    }
    .social-icons {
        display: flex;
        align-items: flex-end;
        margin-top: 1.5rem;
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

const ContactPageImage = styled(GatsbyImage)`
    grid-column: 1 / span 2;
    
`

const Line = styled.span`
    position: absolute;
    right: 0;
    bottom: -30%;
    height: clamp(0.83rem, 1.041vw, 1.25rem);
    z-index: -1;
    width: 100%;
    background-color: ${props => props.color};
`


export default ContactPage