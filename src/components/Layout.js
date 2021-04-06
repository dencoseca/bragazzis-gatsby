import React from "react"

// Components
import Footer from "./Footer"
import Header from "./Header"
import SEO from "./SEO"

function Layout({ children, pageTitle }) {
  return (
    <>
      <SEO title={pageTitle} />
      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </>
  )
}

export default Layout
