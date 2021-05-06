import React from "react"
import Helmet from "react-helmet"

export default function NotFound() {
  return (
    <div>
      <Helmet>
        <title>404 - Not Found</title>
      </Helmet>
      <h2>404 - Page does not exist</h2>
      <p>Sorry, not sorry!</p>
    </div>
  )
}
