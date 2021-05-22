import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/blog-details.module.css"
import * as smallcard from "../styles/smallcard.module.css"
import { graphql } from "gatsby"
import Helmet from "react-helmet"

export default function BlogDetails({ data }) {
  const { html } = data.markdownRemark
  const { title } = data.markdownRemark.frontmatter
  const { date } = data.markdownRemark.frontmatter
  const { tags } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{date}</h3>
        <div className={smallcard.tags}>
          {tags && tags.map((tag, id) => <p key={id}>{tag}</p>)}
        </div>
        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query DocDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug }, type: { eq: "doc" } }) {
      html
      frontmatter {
        title
        tags
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`
