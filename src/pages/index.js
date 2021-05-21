import * as React from "react"
import {Layout, Intro, ProjectGrid} from '../components'
import SEO from "../components/SEO"



const IndexPage = ({location}) => {
  return (
    <Layout pathname={location.pathname}>
      <SEO/>
        <Intro/>
        <ProjectGrid/>
    </Layout>
  )
}



export default IndexPage
