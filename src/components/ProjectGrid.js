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
                            fluid (maxWidth: 700, quality: 100) {
                                ...GatsbyContentfulFluid_withWebp
                            }
                          }
                        }  
                    }
                }
            }
    `)
    return (
            <GridContainer>
            {data.allContentfulProject.edges.map((edge)=> {
                return(
                    <ProjectCard
                     title={edge.node.projectTitle}
                     category={edge.node.category}
                     key={edge.node.id}
                     featureImageTitle={edge.node.featureImage.title}
                     featureImageDescription={edge.node.featureImage.description}
                    featureImage={edge.node.featureImage.fluid}
                     />
                )
            })} 
        </GridContainer>
    )
}

const GridContainer = styled.div`
    margin-top: 6rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 3.75rem;
    grid-row-gap: 3.75rem;
    
`

export default ProjectGrid