import React from "react"
import { StaticImage } from "gatsby-plugin-image"

function FullWidthBanner() {
  return (
    <section className="full-width-banner">
      <StaticImage
        className="full-width-banner__image"
        src="../images/egg.jpg"
        alt="a gigantic italian chocolate easter egg"
        layout="fullWidth"
        loading="eager"
      />
      <article className="full-width-banner__text">
        <span>Each season brings a selection of</span>
        <span>well considered products</span>
      </article>
    </section>
  )
}

export default FullWidthBanner
