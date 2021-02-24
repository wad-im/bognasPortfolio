import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from "gatsby"
import {ProjectCard} from '../components'

const showEventDataHandler = (e)=>{
    console.log(e)
}

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
                        slug
                        featureImage {
                            title
                            description
                            gatsbyImageData (
                                width: 500
                                formats: [AUTO, WEBP]
                                placeholder: NONE
                                quality: 100

                            )
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
                    <Link to={edge.node.slug} onClick={showEventDataHandler}>
                    <ProjectCard
                     title={edge.node.projectTitle}
                     subtitle={edge.node.subtitle}
                     category={edge.node.category}
                     key={edge.node.id}
                     slug={edge.node.slug}
                     featureImageTitle={edge.node.featureImage.title}
                     featureImageDescription={edge.node.featureImage.description}
                    featureImage={edge.node.featureImage.gatsbyImageData}
                     />
                    </Link>
                )
            })} 
        </GridContainer>
    )
}

const GridContainer = styled.div`
    margin-top: 6rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 4.545%;
    grid-template-rows: auto;
    grid-row-gap: 9.09%;

    @media (max-width: 83rem) {
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap:4.545%;
    }
    @media (max-width: 36rem) {
        grid-template-columns: 1fr;
        grid-row-gap: 3.75rem;
    }
    
`

export default ProjectGrid