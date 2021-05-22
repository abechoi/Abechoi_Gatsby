import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/content.module.css"
import SmallCard from "../../components/SmallCard"
import Sidebar from "../../components/Sidebar"
import Helmet from "react-helmet"

export default function Docs({ data }) {
  const docs = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <Helmet>
        <title>Abe Choi | Docs</title>
      </Helmet>
      <section className={styles.header}>
        <div className={styles.page}>
          <h2>Docs</h2>
          <h3>For My Future Self</h3>
          <div className={styles.container}>
            {docs.map(doc => (
              <Link to={"/docs/" + doc.frontmatter.slug} key={doc.id}>
                <SmallCard data={doc} />
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.side}>
          <Sidebar markdowns={docs} />
        </div>
      </section>
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
        }
        id
      }
    }
  }
`
