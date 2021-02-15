// const path = require('path')

// module.exports.createPages = async ({graphql, actions}) => {
//     const {createPage} = actions
//     const cityTemplate = path.resolve('./src/templates/projectPage.js')
//     const response = await graphql(`
//     query {allContentfulProject {
//         edges {
//           node {
//             // 
//           }
//         }
//       }
//       }
//     `)
//     response.data.allContentfulCities.edges.forEach((edge) =>{
//         createPage({
//             component: cityTemplate,
//             path: `/locations/${edge.node.slug}`,
//             context: {
//                 slug: edge.node.slug
//             }
//         })
//     })
// }