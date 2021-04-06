import React from "react"

// Components
import Footer from "../components/Footer"
import Header from "../components/Header"

function Layout({ children }) {
  return (
    <div>
      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </div>
  )
}

export default Layout
