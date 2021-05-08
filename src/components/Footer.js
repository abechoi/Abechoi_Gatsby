import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faNode,
  faReact,
  faAws,
  faFontAwesomeAlt,
} from "@fortawesome/free-brands-svg-icons"
export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <div>
            <h1>SECTION</h1>
            <Link to="/blogs">Blogs</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/docs">Docs</Link>
            <Link to="/about">About</Link>
          </div>
          <div>
            <h1>SOCIAL</h1>
            <a href="https://github.com/abechoi">Github</a>
            <a href="https://codepen.io/collection/DjaJdx">Codepen</a>
            <a href="https://www.linkedin.com/in/abrahamjchoi/">LinkedIn</a>
          </div>
        </div>

        <div>
          <p>Developed with:</p>
          <div className="icons">
            <h2>
              <FontAwesomeIcon icon={faNode} />
            </h2>
            <h2>
              <FontAwesomeIcon icon={faReact} />
            </h2>
            <h2>
              <FontAwesomeIcon icon={faAws} />
            </h2>
            <h2>
              <FontAwesomeIcon icon={faFontAwesomeAlt} />
            </h2>
          </div>
        </div>
      </div>
      <div>
        <p>Developed by:</p>
        <Link to="/" className="banner">
          <h1>ABE</h1>
          <h1>CHOI</h1>
        </Link>
      </div>
    </footer>
  )
}
