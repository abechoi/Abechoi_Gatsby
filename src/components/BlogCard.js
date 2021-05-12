import React from "react"
import * as styles from "../styles/blogs.module.css"

const BlogCard = ({ blog }) => {
  return (
    <div className={styles.blog}>
      <div>
        <h3>{blog.frontmatter.title}</h3>
        <h3>{blog.frontmatter.cardDate}</h3>
      </div>
      <div className={styles.tags}>
        {blog.frontmatter.tags &&
          blog.frontmatter.tags.map((tag, id) => <p key={id}>{tag}</p>)}
      </div>
    </div>
  )
}

export default BlogCard
