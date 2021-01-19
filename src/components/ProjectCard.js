import React from 'react'
import styled from "styled-components"
import Img from "gatsby-image" 
import {motion} from 'framer-motion'

const ProjectCard = ({title, category, id, featureImageTitle, featureImageDescription, featureImage})=>{
     return (
        <ProjectItem key={id} className="image-container">
            <Img fluid={featureImage} alt={featureImageDescription}/>
        </ProjectItem>
    )
}

const ProjectItem = styled(motion.div)`
    margin: 2rem 0;
`


export default ProjectCard