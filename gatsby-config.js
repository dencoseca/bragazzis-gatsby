/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

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
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-google-places`,
      options: {
        placeIds: ["ChIJXQTkrGGCeUgRSaL1gEOk_MY"],
        apiKey: `AIzaSyCEPSNPE122T-zXTfeZVGXCQRy35LlbNKY`,
        language: "en-US", // optional, defaults to en-US
      },
    },
  ],
}
