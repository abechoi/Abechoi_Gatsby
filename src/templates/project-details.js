import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/project-details.module.css"
import * as bigcard from "../styles/bigcard.module.css"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title } = data.markdownRemark.frontmatter
  const { tags } = data.markdownRemark.frontmatter
  const { date } = data.markdownRemark.frontmatter
  const { git } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className={styles.details}>
        <div>
          <p>{date}</p>
          <a href={git} target="_blank" rel="noreferrer">
            <p className={bigcard.git}>
              <FontAwesomeIcon icon={faGithub} />
              Github
            </p>
          </a>
        </div>
        <h1>{title}</h1>
        <div className={bigcard.tags}>
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
  query ProjectDetails($slug: String) {
    markdownRemark(
      frontmatter: { slug: { eq: $slug }, type: { eq: "project" } }
    ) {
      html
      frontmatter {
        title
        tags
        git
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`
