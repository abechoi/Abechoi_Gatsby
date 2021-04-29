import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout.js"
import * as styles from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in California</p>
          <Link to="/projects">MY PORTFOLIO</Link>
          <Link to="/about">ABOUT ME</Link>
        </div>
        <div>
          <p>Latest Updates</p>
          <p>BLOG abechoi.com v2.0 with Gatsby</p>
          <p>My First Blog</p>
        </div>
      </section>
    </Layout>
  )
}
