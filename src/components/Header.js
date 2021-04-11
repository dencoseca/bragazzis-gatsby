import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

function Header({ location, menuIsOpen, setMenuIsOpen }) {
  const headerClassName =
    location.pathname === "/lastoria" ? "header header--dark" : "header"

  function toggleMenu() {
    if (menuIsOpen) {
      setMenuIsOpen(false)
    }
    if (!menuIsOpen) {
      setMenuIsOpen(true)
    }
  }

  return (
    <div className={headerClassName} id="header">
      <div className="header__tag">Purveyors of quality Italian goods</div>
      <div className="header__logo-wrapper">
        <Link to="/">
          {location.pathname === "/lastoria" ? (
            <StaticImage
              className="header__logo"
              src="../images/big-b-black.png"
              alt="logo"
              loading="eager"
            />
          ) : (
            <StaticImage
              className="header__logo"
              src="../images/big-b-white.png"
              alt="logo"
              loading="eager"
            />
          )}
        </Link>
      </div>
      <nav className="header__nav">
        <Link className="header__link" to="/lastoria">
          La Storia
        </Link>
        <Link className="header__link" to="/ilgiorno">
          Il Giorno
        </Link>
      </nav>
      <div className="header__mobile-menu-button" onClick={() => toggleMenu()}>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  )
}

export default Header
