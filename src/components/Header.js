import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

function Header() {
  return (
    <div className="header">
      <div className="header__tag">Purveyors of quality Italian goods</div>
      <div className="header__logo">
        <StaticImage
          className="header__logo"
          src="../images/big-b-white.png"
          loading="eager"
        />
      </div>
      <nav className="header__nav">
        <Link to="/historia">Historia</Link>
        <Link to="/historia">Il Giorno</Link>
      </nav>
    </div>
  )
}

export default Header
