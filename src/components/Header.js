import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { motion, useAnimation } from "framer-motion"

// Animations
const smoothTransition = {
  duration: 0.6,
  ease: [0.43, 0.13, 0.13, 0.96],
}

const topLineVariants = {
  closed: {
    rotate: "0deg",
    translateY: 0,
  },
  open: {
    rotate: "45deg",
    translateY: 6,
  },
}

const bottomLineVariants = {
  closed: {
    rotate: "0deg",
    translateY: 0,
  },
  open: {
    rotate: "-45deg",
    translateY: -5,
  },
}

function Header({ location, menuIsOpen, setMenuIsOpen }) {
  const headerClassName =
    location.pathname === "/lastoria" ? "header header--dark" : "header"

  const controls = useAnimation()

  function toggleMenu() {
    if (menuIsOpen) {
      setMenuIsOpen(false)
      controls.start("closed")
    }
    if (!menuIsOpen) {
      setMenuIsOpen(true)
      controls.start("open")
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
        <motion.div
          className="line"
          initial="closed"
          animate={controls}
          variants={topLineVariants}
          transition={smoothTransition}
        ></motion.div>
        <motion.div
          className="line"
          initial="closed"
          animate={controls}
          variants={bottomLineVariants}
          transition={smoothTransition}
        ></motion.div>
      </div>
    </div>
  )
}

export default Header
