import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/blogs.module.css"
import Blog from "../../components/Blog"

export default function Blogs({ data }) {
  const blogs = data.allMarkdownRemark.nodes

  // const formatDate = date => {
  //   const newDate = date.split("-")
  //   const year = newDate[0]
  //   const month = newDate[1]
  //   const day = newDate[2].split("T")
  //   console.log(newDate)
  //   return `${month}/${day[0]}/${year}`
  // }

  return (
    <Layout>
      <section className={styles.header}>
        <div className={styles.blogsContainer}>
          <h2>Blogs</h2>
          <h3>My News & Updates</h3>
          <div className={styles.blogs}>
            {blogs.map(blog => (
              <Link to={"/blogs/" + blog.frontmatter.slug} key={blog.id}>
                <Blog blog={blog} />
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.side}>
          <p>By Time</p>
          <p>My New Gatsby Site</p>
          <p>My First Blog</p>
        </div>
      </section>
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
          tags
          description
        }
        id
      }
    }
  }
`
