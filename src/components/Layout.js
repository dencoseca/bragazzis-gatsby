import React, { useEffect } from "react"

// Components
import Footer from "./Footer"
import Header from "./Header"
import SEO from "./SEO"

function Layout({ children, pageTitle, location }) {
  const mainBackgroundColor =
    location.pathname === "/ilgiorno" ? "#1d1d1d" : "#ffffff"

  useEffect(() => {
    // Prevent flashing
    document.querySelector("main").classList.add("visible")
  }, [])

  return (
    <>
      <SEO title={pageTitle} />
      <main
        style={{
          backgroundColor: mainBackgroundColor,
        }}
      >
        <Header location={location} />
        {children}
        <Footer location={location} />
      </main>
    </>
  )
}

export default Layout
