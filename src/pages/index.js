import * as React from "react"
import {Layout, Intro, ProjectGrid} from '../components'
import Seo from "../components/SEO"



const IndexPage = ({location}) => {
  return (
    <Layout pathname={location.pathname}>
      <Seo/>
        <Intro pathname={location.pathname}/>
        <ProjectGrid/>
    </Layout>
  )
}



export default IndexPage
