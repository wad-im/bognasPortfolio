import React from 'react'
import styled from "styled-components"
import Img from "gatsby-image" 
import {motion} from 'framer-motion'

const HoverMotion = {
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

const ProjectCard = ({title,  id,  featureImageDescription, featureImage, subtitle})=>{
     return (
        <ProjectItem key={id} whileHover="hover" initial="rest" animate="rest">
            <Img fluid={featureImage} alt={featureImageDescription}/>
            <ProjectOverlay variants={HoverMotion}>
                <h4>{title}</h4>
                <h5>{subtitle}</h5>
            </ProjectOverlay>
        </ProjectItem>
    )
}

const ProjectItem = styled(motion.div)`
    position: relative;
    cursor: pointer;
`
const ProjectOverlay = styled(motion.div)`
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
`


export default ProjectCard