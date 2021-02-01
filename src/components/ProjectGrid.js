import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import {ProjectCard} from '../components'

const ProjectGrid = ()=> {
    const data = useStaticQuery(graphql`
        query ProjectData {
            allContentfulProject (sort: { fields: order, order: ASC }){
                edges {
                    node {
                        projectTitle
                        subtitle
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
                     subtitle={edge.node.subtitle}
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
    margin-top: 4vw;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 4.545%;
    grid-template-rows: auto;
    grid-row-gap: 9.09%;
`

export default ProjectGrid