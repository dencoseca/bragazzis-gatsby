import React from "react"
import { Link } from "gatsby"

function pageNotFound() {
  return (
    <div className="page-not-found">
      <h1>Ooops...</h1>
      <p>Looks like that page doesn't exist!</p>
      <Link className="logo" to="/">
        BRAGAZZI'S
      </Link>
    </div>
  )
}

export default pageNotFound
