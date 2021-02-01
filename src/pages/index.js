import * as React from "react"
import {Layout, Head, Intro, ProjectGrid} from '../components'



const IndexPage = ({location}) => {
   const pathname = location.pathname
  return (
    <Layout pathname={pathname}>
      <Head/>
        <Intro/>
        <ProjectGrid/>
    </Layout>
  )
}

export default IndexPage
