/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Bragazzis`,
    titleTemplate: `Bragazzi's | %s`,
    description: `Purveyors of quality Italian goods.`,
    url: `https://www.bragazzis.co.uk`,
    author: `Leon Brown`,
    image: `src/images/big-b-square-icon.png`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bragazzi's`,
        short_name: `Bragazzi's`,
        start_url: `/`,
        background_color: `#f6f4f1`,
        theme_color: `#1d1d1d`,
        display: `standalone`,
        icon: `src/images/big-b-square-icon.png`,
        icon_options: {
          purpose: `any maskable`,
        },
        lang: "en-UK",
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-google-places`,
      options: {
        placeIds: ["ChIJXQTkrGGCeUgRSaL1gEOk_MY"],
        apiKey: `${process.env.PLACES_API_KEY}`,
        language: "en-US", // optional, defaults to en-US
      },
    },
  ],
}
