import React from "react"
import { Link } from "gatsby"
import * as styles from "../styles/temp.module.css"

const Sidebar = ({ markdowns }) => {
  return (
    <div className={styles.side}>
      <h4>Latest Updates</h4>
      {markdowns.map(markdown => (
        <Link
          to={`/${markdown.frontmatter.type}s/${markdown.frontmatter.slug}`}
          key={markdown.id}
        >
          <div className={styles.sideLink}>
            <p>{markdown.frontmatter.listDate}</p>
            <p>{markdown.frontmatter.title}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Sidebar
