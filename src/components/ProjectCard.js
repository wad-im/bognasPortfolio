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

const ProjectCard = ({title,  id,  featureImageDescription, featureImage})=>{
     return (
        <ProjectItem key={id} whileHover="hover" initial="rest" animate="rest">
            <Img fluid={featureImage} alt={featureImageDescription}/>
            <ProjectOverlay variants={HoverMotion}><h3>{title}</h3></ProjectOverlay>
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
    background-color: rgba(173, 216, 230, 0.5);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`


export default ProjectCard