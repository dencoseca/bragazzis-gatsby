import React, { useEffect } from "react"

// Components
import Footer from "./Footer"
import Header from "./Header"
import SEO from "./SEO"

function Layout({ children, pageTitle, location }) {
  useEffect(() => {
    // Prevent flashing
    document.querySelector("main").classList.add("visible")
  }, [])

  return (
    <>
      <SEO title={pageTitle} />
      <main
      >
        <Header location={location} />
        {children}
        <Footer location={location} />
      </main>
    </>
  )
}

export default Layout
