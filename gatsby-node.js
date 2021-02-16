const path = require('path')

module.exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions
    const projectPage = path.resolve('./src/templates/projectPage.js')
    const response = await graphql(`
    query {allContentfulProject {
        edges {
          node {
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
                slug: edge.node.slug
            }
        })
    })
}