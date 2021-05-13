import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "../styles/projects.module.css"

const BigCard = ({ data }) => {
  return (
    <div className={styles.project}>
      <GatsbyImage image={getImage(data.frontmatter.thumb)} alt="gatsbyImage" />
      <h3>{data.frontmatter.title}</h3>
      <div className={styles.tags}>
        {data.frontmatter.tags &&
          data.frontmatter.tags.map((tag, id) => <p key={id}>{tag}</p>)}
      </div>
    </div>
  )
}

export default BigCard
