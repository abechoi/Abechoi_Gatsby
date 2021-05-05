import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/blogs.module.css"

export default function Blogs({ data }) {
  const blogs = data.allMarkdownRemark.nodes

  console.log(typeof blogs[0].frontmatter.date)

  const formatDate = date => {
    const newDate = date.split("-")
    const year = newDate[0]
    const month = newDate[1]
    const day = newDate[2].split("T")
    console.log(newDate)
    return `${month}/${day[0]}/${year}`
  }

  return (
    <Layout>
      <div className={styles.blogsContainer}>
        <h2>Blogs</h2>
        <h3>My News & Updates</h3>
        <div className={styles.blogs}>
          {blogs.map(blog => (
            <Link to={"/blogs/" + blog.frontmatter.slug} key={blog.id}>
              <div className={styles.blog}>
                <h3>{blog.frontmatter.title}</h3>
                <h3>{formatDate(blog.frontmatter.date)}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BlogsPage {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { type: { eq: "blog" } } }
    ) {
      nodes {
        frontmatter {
          title
          slug
          date
        }
        id
      }
    }
  }
`
