import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/blogs.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Blogs({ data }) {
  const blogs = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <div className={styles.blogsContainer}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={styles.blogs}>
          {blogs.map(blog => (
            <Link to={"/blogs/" + blog.frontmatter.slug} key={blog.id}>
              <div>
                <GatsbyImage
                  image={getImage(blog.frontmatter.thumb)}
                  alt="gatsbyImage"
                />
                <h3>{blog.frontmatter.title}</h3>
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
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          slug
          thumb {
            childImageSharp {
              gatsbyImageData(
                formats: [AUTO, WEBP, AVIF]
                placeholder: BLURRED
                layout: FULL_WIDTH
              )
            }
          }
        }
        id
      }
    }
  }
`
