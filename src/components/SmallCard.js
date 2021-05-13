import React from "react"
import * as styles from "../styles/smallcard.module.css"

const SmallCard = ({ data }) => {
  return (
    <div className={styles.card}>
      <div>
        <h3>{data.frontmatter.title}</h3>
        <h3>{data.frontmatter.cardDate}</h3>
      </div>
      <div className={styles.tags}>
        {data.frontmatter.tags &&
          data.frontmatter.tags.map((tag, id) => <p key={id}>{tag}</p>)}
      </div>
    </div>
  )
}

export default SmallCard
