import React from "react"
import { motion } from "framer-motion"
import { Link } from "gatsby"

// Animations
const smoothTransition = {
  duration: 0.6,
  ease: [0.43, 0.13, 0.13, 0.96],
}

const menuVariants = {
  closed: {
    translateX: "-100%",
    opacity: 0,
  },
  open: {
    translateX: "0%",
    opacity: 1,
  },
}

function Menu() {
  return (
    <motion.div
      className="menu"
      initial="closed"
      animate="open"
      exit="closed"
      variants={menuVariants}
      transition={smoothTransition}
    >
      <Link className="menu__link text--menu-link" to="/">
        Home
      </Link>
      <Link className="menu__link text--menu-link" to="/lastoria">
        La Storia
      </Link>
      <Link className="menu__link text--menu-link" to="/ilgiorno">
        Il Giorno
      </Link>
    </motion.div>
  )
}

export default Menu
