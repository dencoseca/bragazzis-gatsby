import React from "react"

// Components
import Footer from "./Footer"
import Header from "./Header"
import SEO from "./SEO"

function Layout({ children, pageTitle, location = null }) {
  return (
    <>
      <SEO title={pageTitle} />
      <main>
        <Header location={location} />
        {children}
        <Footer />
      </main>
    </>
  )
}

export default Layout
