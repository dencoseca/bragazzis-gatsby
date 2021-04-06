import React from "react"

// Components
import Footer from "./Footer"
import Header from "./Header"
import SEO from "./SEO"

function Layout({ children, pageTitle, location }) {
  return (
    <>
      <SEO title={pageTitle} />
      <Header location={location} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
