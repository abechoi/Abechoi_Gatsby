import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/blog-details.module.css"
import { graphql } from "gatsby"

export default function BlogDetails({ data }) {
  const { html } = data.markdownRemark
  const { title } = data.markdownRemark.frontmatter
  const { date } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{date}</h3>
        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BlogDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug }, type: { eq: "blog" } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`
