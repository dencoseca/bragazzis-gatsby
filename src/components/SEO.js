import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl
        defaultImage: image
        logo
      }
    }
  }
`

function SEO({ title, description, image, article }) {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    logo,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}/${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
    logo,
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "@id": "https://www.bragazzis.co.uk/#cafeorcoffeeshop",
    url: seo.url,
    mainEntityOfPage: seo.url,
    description: seo.description,
    name: "Bragazzi's",
    image: seo.image,
    priceRange: "£5-15",
    telephone: "+441142581483",
    email: "info@bragazzis.co.uk",
    address: {
      "@type": "PostalAddress",
      streetAddress: "224-228 Abbeydale Road",
      addressLocality: "Sheffield",
      postalCode: "S7 1FL",
      addressCountry: "UK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.3627282,
      longitude: -1.4779884,
    },
    servesCuisine: "Italian",
    acceptsReservations: "false",
    legalName: "Bragazzi's Ltd",
    logo: seo.logo,
    foundingDate: "2003",
    founders: [
      {
        "@type": "Person",
        name: "Matteo Bragazzi",
      },
    ],
    sameAs: [
      "https://www.facebook.com/bragazzis",
      "https://www.instagram.com/bragazzis",
    ],
    inLanguage: "en-UK",
  }

  return (
    <Helmet
      title={seo.title}
      titleTemplate={titleTemplate}
      htmlAttributes={{
        lang: "en",
      }}
    >
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}
