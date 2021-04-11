import React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Link } from "gatsby"

function Menu() {
  return (
    <AnimatePresence>
      <div className="menu">
        <Link className="menu__link text--menu-link" to="/">
          Home
        </Link>
        <Link className="menu__link text--menu-link" to="/lastoria">
          La Storia
        </Link>
        <Link className="menu__link text--menu-link" to="/ilgiorno">
          Il Giorno
        </Link>
      </div>
    </AnimatePresence>
  )
}

export default Menu
