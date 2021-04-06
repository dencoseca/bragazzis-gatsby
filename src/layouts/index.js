import React from "react"

// Components
import Footer from "../components/Footer"

function Layout({ children }) {
  return (
    <div>
      <main>
        {children}
        <Footer />
      </main>
    </div>
  )
}

export default Layout
