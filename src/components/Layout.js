import React, { useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"

// Components
import Footer from "./Footer"
import Header from "./Header"
import SEO from "./SEO"
import Menu from "./Menu"

function Layout({ children, pageTitle, location }) {
  const mainBackgroundColor =
    location.pathname === "/ilgiorno" ? "#1d1d1d" : "#fff"

  const [menuIsOpen, setMenuIsOpen] = useState(false)

  useEffect(() => {
    // Prevent flashing
    document.querySelector("main").classList.add("visible")
  }, [])

  return (
    <>
      <SEO title={pageTitle} />
      <AnimatePresence>{menuIsOpen && <Menu />}</AnimatePresence>
      <main
        style={{
          backgroundColor: mainBackgroundColor,
        }}
      >
        <Header
          location={location}
          menuIsOpen={menuIsOpen}
          setMenuIsOpen={setMenuIsOpen}
        />
        {children}
        <Footer location={location} />
      </main>
    </>
  )
}

export default Layout
