const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve('./src/templates/blog-post.js')

    const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

    result.data.allMarkdownRemark.edges.forEach(edge => {
        createPage({
            path: `/blog/${edge.node.fields.slug}`,
            component: blogPostTemplate,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
}
