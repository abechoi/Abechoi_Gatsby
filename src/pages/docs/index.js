import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/content.module.css"
import SmallCard from "../../components/SmallCard"
import Sidebar from "../../components/Sidebar"
import Helmet from "react-helmet"

export default function Docs({ data }) {
  const blogs = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <Helmet>
        <title>Abe Choi | Blogs</title>
      </Helmet>
      <section className={styles.header}>
        <div className={styles.page}>
          <h2>Blogs</h2>
          <h3>My News & Updates</h3>
          <div className={styles.container}>
            {blogs.map(blog => (
              <Link to={"/blogs/" + blog.frontmatter.slug} key={blog.id}>
                <SmallCard data={blog} />
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.side}>
          <Sidebar markdowns={blogs} />
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
