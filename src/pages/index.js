import * as React from "react"
import {Layout, Head, Intro, ProjectGrid} from '../components'



const IndexPage = ({location}) => {
  return (
    <Layout pathname={location.pathname}>
      <Head currentUrl={location.href} pathname={location.pathname}/>
        <Intro/>
        <ProjectGrid/>
    </Layout>
  )
}

export default IndexPage
