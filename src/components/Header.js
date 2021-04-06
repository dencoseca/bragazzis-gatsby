import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

function Header({ location }) {
  return (
    <div
      className={location.pathname === "/" ? "header" : "header--dark"}
      id="header"
    >
      <div className="header__tag">Purveyors of quality Italian goods</div>
      <div className="header__logo">
        <Link to="/">
          {location.pathname === "/" ? (
            <StaticImage
              className="header__logo"
              src="../images/big-b-white.png"
              loading="eager"
            />
          ) : (
            <StaticImage
              className="header__logo"
              src="../images/big-b-black.png"
              loading="eager"
            />
          )}
        </Link>
      </div>
      <nav className="header__nav">
        <Link className="header__link" to="/historia">
          Historia
        </Link>
        <Link className="header__link" to="/historia">
          Il Giorno
        </Link>
      </nav>
    </div>
  )
}

export default Header
