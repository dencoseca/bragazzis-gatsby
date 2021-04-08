import React from "react"
import Layout from "../components/Layout"

function Ilgiorno({ location }) {
  return (
    <Layout pageTitle="Il Giorno" location={location}>
      <div className="ilgiorno__black-background"></div>
      <div className="ilgiorno">
        <div className="ilgiorno__title text--page-title">IL GIORNO</div>
      </div>
    </Layout>
  )
}

export default Ilgiorno
