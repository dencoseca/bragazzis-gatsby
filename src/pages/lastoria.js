import React from "react"

// Components
import Layout from "../components/Layout"

function LaStoria({ location }) {
  return (
    <>
      <Layout pageTitle="La Storia" location={location}>
        <div className="lastoria">
          <div className="lastoria__title text--page-title">La Storia</div>
        </div>
      </Layout>
    </>
  )
}

export default LaStoria
