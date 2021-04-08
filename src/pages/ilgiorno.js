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
            src="../images/aperto.jpg"
            alt="cafe view"
          />
          <div className="text text--display">Aperto</div>
        </div>
        <StaticImage
          className="image image--50"
          src="../images/window-clouds.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--50"
          src="../images/stacked-chairs-morning.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--50"
          src="../images/sandwich-prep-duo.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--50"
          src="../images/sandwich-board-plan.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--50"
          src="../images/olive-oil-bread.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--50"
          src="../images/sanger-mix.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--50"
          src="../images/rocket-sangers.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--50"
          src="../images/coppa-focaccia.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--50"
          src="../images/sangers-in-baskets.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--50"
          src="../images/prep-cleanup.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--50"
          src="../images/cake-board.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--50"
          src="../images/writing-cake-labels.jpg"
          alt="cafe view"
        />
      </div>
    </Layout>
  )
}

export default Ilgiorno
