import { Link } from "gatsby"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithubSquare,
  faLinkedin,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons"

export default function Navbar() {
  return (
    <nav>
      <Link to="/" className="banner">
        <h1>ABE</h1>
        <h1>CHOI</h1>
      </Link>

      <div className="links">
        <Link
          to="/"
          activeStyle={{
            color: "var(--yellow)",
            borderBottom: "3px solid var(--yellow)",
          }}
        >
          HOME
        </Link>
        <Link
          to="/blogs"
          activeStyle={{
            color: "var(--pink)",
            borderBottom: "3px solid var(--pink)",
          }}
        >
          BLOGS
        </Link>
        <Link
          to="/projects"
          activeStyle={{
            color: "var(--blue)",
            borderBottom: "3px solid var(--blue)",
          }}
        >
          PROJECTS
        </Link>
        <Link
          to="/docs"
          activeStyle={{
            color: "var(--purple)",
            borderBottom: "3px solid var(--purple)",
          }}
        >
          DOCS
        </Link>
        <Link
          to="/about"
          activeStyle={{
            color: "var(--teal)",
            borderBottom: "3px solid var(--teal)",
          }}
        >
          ABOUT
        </Link>
      </div>

      <div className="icons">
        <a href="https://github.com/abechoi">
          <h2>
            <FontAwesomeIcon icon={faGithubSquare} />
          </h2>
        </a>
        <a href="https://codepen.io/collection/DjaJdx">
          <h2>
            <FontAwesomeIcon icon={faCodepen} />
          </h2>
        </a>
        <a href="https://www.linkedin.com/in/abrahamjchoi/">
          <h2>
            <FontAwesomeIcon icon={faLinkedin} />
          </h2>
        </a>
      </div>
    </nav>
  )
}
