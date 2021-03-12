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
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
  ],
}
