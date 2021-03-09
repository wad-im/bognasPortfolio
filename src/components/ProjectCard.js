import React from 'react'
import styled from "styled-components"
import { GatsbyImage} from "gatsby-plugin-image"
import {motion} from 'framer-motion'
import {Link} from 'gatsby'
import { useMediaQuery } from 'react-responsive'



export const HoverMotion = {
    rest: {
        opacity: 0,
        transition: {
            duration: 0.5,
            type: "tween",
            ease: "easeIn"
        }
    },
    hover: {
        opacity: 1,
        transtion: {
            duration: 0.5,
            type: "tween",
            ease: "easeOut"
        },
    },
}

const ProjectCard = ({title,  id,  featureImageDescription, featureImage, subtitle, slug})=>{
    const isMobile = useMediaQuery({ query: '(max-width: 36rem)' })
    const variants = isMobile ? '' : HoverMotion
     return (
        <Link to={`/${slug}`} key={id}>
        <ProjectItem  whileHover="hover" whileTap="hover" initial="rest" animate="rest">
            <GatsbyImage image={featureImage} alt={featureImageDescription} />
            <ProjectOverlay variants={variants}>
                <h4>{title}</h4>
                <h5>{subtitle}</h5>
            </ProjectOverlay>
        </ProjectItem>
        </Link>
    )
}

const ProjectItem = styled(motion.div)`
    position: relative;
    h4 {
        width: 80%;
    }
`
export const ProjectOverlay = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.7);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    @media (max-width: 36rem){
        background-color: rgba(255, 255, 255, 0.6)
    }
`


export default ProjectCard