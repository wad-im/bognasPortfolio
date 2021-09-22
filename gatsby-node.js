const path = require('path')


module.exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions
    const projectPage = path.resolve('./src/templates/projectPage.js')
    const response = await graphql(`
    query {allContentfulProject (sort: { fields: order, order: ASC }){
        edges {
          node {
            slug 
          }
          previous {
            slug
          }
          next {
            slug
          }
        }
      }
      }
    `)
    response.data.allContentfulProject.edges.forEach((edge) =>{
        createPage({
            component: projectPage,
            path: `/${edge.node.slug}`,
            context: {
                slug: edge.node.slug,
                next: edge.next,
                previous: edge.previous
            }
        })
    })
}