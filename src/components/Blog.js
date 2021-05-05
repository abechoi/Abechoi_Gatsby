import React from "react"
import * as styles from "../styles/blogs.module.css"

const Blog = ({ blog }) => {
  return (
    <div className={styles.blog}>
      <div>
        <h3>{blog.frontmatter.title}</h3>
        <h3>{blog.frontmatter.date}</h3>
      </div>
      <div className={styles.tags}>
        {blog.frontmatter.tags &&
          blog.frontmatter.tags.map((tag, id) => <p key={id}>{tag}</p>)}
      </div>
      <p>{blog.frontmatter.description}</p>
    </div>
  )
}

export default Blog
