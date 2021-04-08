import React from "react"
import { StaticImage } from "gatsby-plugin-image"

// Components
import Layout from "../components/Layout"

function Ilgiorno({ location }) {
  return (
    <Layout pageTitle="Il Giorno" location={location}>
      <div className="ilgiorno__title text--page-title">IL GIORNO</div>
      <div className="ilgiorno__gallery">
        <div className="text text--display">Aperto</div>
        <StaticImage
          className="image"
          src="../images/cafe-view.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image"
          src="../images/cafe-view.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image"
          src="../images/cafe-view.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image"
          src="../images/cafe-view.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image"
          src="../images/cafe-view.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image"
          src="../images/cafe-view.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image"
          src="../images/cafe-view.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image"
          src="../images/cafe-view.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image"
          src="../images/cafe-view.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image"
          src="../images/cafe-view.jpg"
          alt="cafe view"
        />
      </div>
    </Layout>
  )
}

export default Ilgiorno
