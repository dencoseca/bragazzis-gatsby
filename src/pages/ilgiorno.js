import React from "react"
import { StaticImage } from "gatsby-plugin-image"

// Components
import Layout from "../components/Layout"

function Ilgiorno({ location }) {
  return (
    <Layout pageTitle="Il Giorno" location={location}>
      <div className="ilgiorno__title text--page-title">IL GIORNO</div>
      <div className="ilgiorno__gallery">
        <div className="image--with-caption">
          <StaticImage
            className="image image--60"
            src="../images/cafe-view.jpg"
            alt="cafe view"
          />
          <div className="text text--display">Aperto</div>
        </div>
        <StaticImage
          className="image image--50"
          src="../images/cafe-view.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--50"
          src="../images/cafe-view.jpg"
          alt="cafe view"
        />
        <div className="image--with-caption row-reverse">
          <StaticImage
            className="image image--60"
            src="../images/cafe-view.jpg"
            alt="cafe view"
          />
          <div className="text text--display">Aperto</div>
        </div>
        <StaticImage
          className="image image--60"
          src="../images/cafe-view.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--50"
          src="../images/cafe-view.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--70"
          src="../images/cafe-view.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--50"
          src="../images/cafe-view.jpg"
          alt="cafe view"
        />
        <div className="image--with-caption">
          <StaticImage
            className="image image--60"
            src="../images/cafe-view.jpg"
            alt="cafe view"
          />
          <div className="text text--display">Aperto</div>
        </div>
        <StaticImage
          className="image image--50"
          src="../images/cafe-view.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--60"
          src="../images/cafe-view.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--70"
          src="../images/cafe-view.jpg"
          alt="cafe view"
        />
      </div>
    </Layout>
  )
}

export default Ilgiorno
