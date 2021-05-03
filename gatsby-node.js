const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  return graphql(`
    {
      projects: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "project" } } }
      ) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
      blogs: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "blog" } } }
      ) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      Promise.reject(result.errors)
    }
    result.data.projects.nodes.forEach(node => {
      actions.createPage({
        path: "/projects/" + node.frontmatter.slug,
        component: path.resolve("./src/templates/project-details.js"),
        context: { slug: node.frontmatter.slug },
      })
    })

    result.data.blogs.nodes.forEach(node => {
      actions.createPage({
        path: "/blogs/" + node.frontmatter.slug,
        component: path.resolve("./src/templates/blog-details.js"),
        context: { slug: node.frontmatter.slug },
      })
    })
  })
}
