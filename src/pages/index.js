import { Link, graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout.js"
import * as styles from "../styles/home.module.css"
import Sidebar from "../components/Sidebar"

export default function Home({ data }) {
  const markdowns = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <section className={styles.header}>
        <div className={styles.homeContainer}>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in California</p>
          <Link to="/projects">MY PORTFOLIO</Link>
          <Link to="/about">ABOUT ME</Link>
        </div>
        <Sidebar markdowns={markdowns} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query HomePage {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          slug
          type
          listDate: date(formatString: "M/D/YY")
        }
        id
      }
    }
  }
`
