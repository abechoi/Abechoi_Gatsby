import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/docs.module.css"

export default function Docs({ data }) {
  const docs = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <div className={styles.docsContainer}>
        <h2>Docs</h2>
        <h3>My Technical Documentations</h3>
        {docs.length === 0 ? (
          <p>There are no docs at the moment</p>
        ) : (
          <div className={styles.docs}>
            {docs.map(doc => (
              <Link to={"/docs/" + doc.frontmatter.slug} key={doc.id}>
                <div>
                  <h3>{doc.frontmatter.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query DocsPage {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { type: { eq: "doc" } } }
    ) {
      nodes {
        frontmatter {
          title
          slug
          cardDate: date(formatString: "LL")
          listDate: date(formatString: "M/D/YY")
          tags
          type
          description
        }
        id
      }
    }
  }
`
