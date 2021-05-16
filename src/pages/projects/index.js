import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"
import Helmet from "react-helmet"
import BigCard from "../../components/BigCard"

export default function Projects({ data }) {
  const projects = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <Helmet>
        <title>Abe Choi | Projects</title>
      </Helmet>
      <section>
        <div className={styles.projContainer}>
          <h2>Portfolio</h2>
          <h3>Projects & Websites I've Created</h3>
          <div className={styles.projects}>
            {projects.map(project => (
              <Link
                to={"/projects/" + project.frontmatter.slug}
                key={project.id}
              >
                <BigCard data={project} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsPage {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { type: { eq: "project" } } }
    ) {
      nodes {
        frontmatter {
          title
          slug
          tags
          thumb {
            childImageSharp {
              gatsbyImageData(
                formats: [AUTO, WEBP, AVIF]
                placeholder: BLURRED
                layout: FULL_WIDTH
              )
            }
          }
        }
        id
      }
    }
  }
`
