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
          activeStyle={{ color: "#ff85ea", borderBottom: "3px solid #ff85ea" }}
        >
          HOME
        </Link>
        <Link
          to="/blogs"
          activeStyle={{ color: "#61dbfb", borderBottom: "3px solid #61dbfb" }}
        >
          BLOGS
        </Link>
        <Link
          to="/projects"
          activeStyle={{ color: "#00feca", borderBottom: "3px solid #00feca" }}
        >
          PROJECTS
        </Link>
        <Link
          to="/docs"
          activeStyle={{ color: "#7b61f8", borderBottom: "3px solid #7b61f8" }}
        >
          DOCS
        </Link>
        <Link
          to="/about"
          activeStyle={{ color: "#fdf200", borderBottom: "3px solid #fdf200" }}
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
