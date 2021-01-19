import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import {ProjectCard} from '../components'

const ProjectGrid = ()=> {
    const data = useStaticQuery(graphql`
        query ProjectData {
            allContentfulProject{
                edges {
                    node {
                        projectTitle
                        category
                        id
                        featureImage {
                            title
                            description
                            fluid (maxWidth: 400, quality: 100) {
                                ...GatsbyContentfulFluid_withWebp
                            }
                          }
                        }  
                    }
                }
            }
    `)
    return (
        
        <div>
            <h2>Project Grid</h2>
            <GridContainer>
            {data.allContentfulProject.edges.map((edge)=> {
                const title = edge.node.projectTitle
                const category = edge.node.category
                const id = edge.node.id
                const featureImageTitle = edge.node.featureImage.title
                const featureImageDescription = edge.node.featureImage.description
                const featureImage = edge.node.featureImage.fluid
                return(
                    <ProjectCard
                     title={title}
                     category={category}
                     key={id}
                     featureImageTitle={featureImageTitle}
                     featureImageDescription={featureImageDescription}
                    featureImage={featureImage}
                     />
                )
            })} 
        </GridContainer>
        </div>
        
    )
}

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 2rem;
`

export default ProjectGrid