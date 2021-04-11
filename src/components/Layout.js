import React, { useEffect, useState } from "react"

// Components
import Footer from "./Footer"
import Header from "./Header"
import SEO from "./SEO"
import Menu from "./Menu"

function Layout({ children, pageTitle, location }) {
  const mainBackgroundColor =
    location.pathname === "/ilgiorno" ? "#1d1d1d" : "#ffffff"

  const [menuIsOpen, setMenuIsOpen] = useState(false)

  useEffect(() => {
    // Prevent flashing
    document.querySelector("main").classList.add("visible")
  }, [])

  return (
    <>
      <SEO title={pageTitle} />
      {menuIsOpen && <Menu />}
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
