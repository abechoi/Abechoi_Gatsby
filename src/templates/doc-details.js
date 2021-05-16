import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/blog-details.module.css"
import { graphql } from "gatsby"
import Helmet from "react-helmet"

export default function BlogDetails({ data }) {
  const { html } = data.markdownRemark
  const { title } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className={styles.details}>
        <h2>{title}</h2>
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
      }
    }
  }
`
