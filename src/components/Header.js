import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
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
  // Assets
  const data = useStaticQuery(graphql`
    query {
      bigBBlack: file(relativePath: { eq: "big-b-black.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      bigBWhite: file(relativePath: { eq: "big-b-white.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

  const headerClassName =
    location.pathname === "/lastoria" ? "header header--dark" : "header"
  const menuButtonLineColor =
    location.pathname === "/lastoria" && !menuIsOpen ? "#1d1d1d" : "#f6f4f1"
  const headerPosition = menuIsOpen ? "fixed" : "absolute"
  const logoImage =
    location.pathname === "/lastoria" && !menuIsOpen
      ? data.bigBBlack.childImageSharp.gatsbyImageData
      : data.bigBWhite.childImageSharp.gatsbyImageData

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
    <div
      className={headerClassName}
      id="header"
      style={{ position: headerPosition }}
    >
      <div className="header__tag">Purveyors of quality Italian goods</div>
      <div className="header__logo-wrapper">
        <Link to="/">
          <GatsbyImage
            className="header__logo"
            image={logoImage}
            alt="bragazzi's logo"
          />
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
          style={{ backgroundColor: menuButtonLineColor }}
        ></motion.div>
        <motion.div
          className="line"
          initial="closed"
          animate={controls}
          variants={bottomLineVariants}
          transition={smoothTransition}
          style={{ backgroundColor: menuButtonLineColor }}
        ></motion.div>
      </div>
    </div>
  )
}

export default Header
