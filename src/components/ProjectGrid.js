import React, {useState} from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql} from "gatsby"
import {ProjectCard} from '../components'
import {AnimatePresence} from 'framer-motion'


const ProjectGrid = ()=> {
    const data = useStaticQuery(graphql`
        query ProjectData {
            allContentfulProject (sort: { fields: order, order: ASC }){
                edges {
                    node {
                        projectTitle
                        subtitle
                        id
                        slug
                        tags
                        featureImage {
                            title
                            description
                            gatsbyImageData (
                                width: 400
                                quality: 100
                                placeholder: NONE
                                formats: [AUTO, WEBP]
                            )
                          }
                        }  
                    }
                }
            }
    `)
    const allProjects = data.allContentfulProject.edges
    const filters = ['All', 'Print & Publication Design', 'Architecture & Interior Design', 'Brand & Identity Design']
    const [selectedFilter, setSelectedFilter] = useState('All')
    const displayedProjects = selectedFilter !== 'All' ? allProjects.filter(project => project.node.tags.includes(`${selectedFilter}`)) : allProjects
    const filterHandler = (e) =>{
        setSelectedFilter(e.target.innerText)
    }
    const rowGap = (60 / ((Math.ceil(allProjects.length / 3)*300) + ((Math.ceil(allProjects.length / 3) - 1)*60))*100).toFixed(2) + '%';
       return (
            <>
            <Filter>
                {filters.map(filter =>{
                    const activeFilter = filter === selectedFilter ? 'active' : ''
                    return <button onClick={filterHandler} key={filter} className={activeFilter}>{filter}</button>
                })}
            </Filter>
            <GridContainer rowGap={rowGap}>
            <AnimatePresence>
            {displayedProjects.map(edge=> {
                return(
                    <ProjectCard
                     title={edge.node.projectTitle}
                     subtitle={edge.node.subtitle}
                     key={edge.node.id}
                     slug={edge.node.slug}
                     featureImageTitle={edge.node.featureImage.title}
                     featureImageDescription={edge.node.featureImage.description}
                    featureImage={edge.node.featureImage.gatsbyImageData}
                    tags={edge.node.tags}
                     />
                )
            })} 
            </AnimatePresence>
        </GridContainer>
        </>
    )
}

const GridContainer = styled.div`
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: clamp(3rem, 4.545%, 3.75rem);
    grid-template-rows: auto;
    grid-row-gap: clamp(3rem, ${props => props.rowGap}, 3.75rem);
    @media (max-width: 83rem) {
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 3rem;
    }
    @media (max-width: 36rem) {
        grid-template-columns: 1fr;
        grid-column-gap: 0;
        
    }
    
`
const Filter = styled.div`
    display: flex;
    margin-top: 3rem;
    button {
        font-family: "sofia-pro", sans-serif;
        color: #707070;
        background: none;
        border: none;
        outline: none;
        text-align: left;
        margin: 1rem 1rem 0rem 0rem;
        cursor: pointer;
        &.active {
            border-bottom: solid 0.1rem #707070; 
        }
    }
`

export default ProjectGrid