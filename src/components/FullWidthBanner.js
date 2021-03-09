import React from "react"
import { StaticImage } from "gatsby-plugin-image"

function FullWidthBanner() {
  return (
    <div className="full-width-banner">
      <StaticImage
        className="full-width-banner__image"
        src="../images/egg.jpg"
        alt="a gigantic italian chocolate easter egg"
        layout="fullWidth"
      />
      <div className="full-width-banner__text">
        <span>Each season brings a selection of</span>
        <span>well considered products</span>
      </div>
    </div>
  )
}

export default FullWidthBanner
