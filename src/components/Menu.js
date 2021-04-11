import React from "react"
import { motion } from "framer-motion"
import { Link } from "gatsby"

// Animations
const smoothTransition = {
  duration: 0.6,
  ease: [0.13, 0.43, 0.45, 0.96],
}

const menuVariants = {
  closed: {
    translateX: "-100%",
    // opacity: 0,
    transition: {
      ...smoothTransition,
    },
  },
  open: {
    translateX: "0%",
    // opacity: 1,
    transition: {
      ...smoothTransition,
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const linkVariants = {
  closed: {
    opacity: 0,
    translateX: -200,
    transition: {
      ...smoothTransition,
      duration: 0.4,
    },
  },
  open: {
    opacity: 1,
    translateX: 0,
    transition: {
      ...smoothTransition,
      duration: 0.9,
    },
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
    >
      <motion.div className="menu__link-wrapper" variants={linkVariants}>
        <Link className="menu__link text--menu-link" to="/">
          Home
        </Link>
      </motion.div>
      <motion.div className="menu__link-wrapper" variants={linkVariants}>
        <Link className="menu__link text--menu-link" to="/lastoria">
          La Storia
        </Link>
      </motion.div>
      <motion.div className="menu__link-wrapper" variants={linkVariants}>
        <Link className="menu__link text--menu-link" to="/ilgiorno">
          Il Giorno
        </Link>
      </motion.div>
    </motion.div>
  )
}

export default Menu
