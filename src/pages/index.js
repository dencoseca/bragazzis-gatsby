import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import Cover from "../components/Cover"
import FloatingItems from "../components/FloatingItems"
import Footer from "../components/Footer"
import FullWidthBanner from "../components/FullWidthBanner"
import SEO from "../components/SEO"

function debounce(fn, ms) {
  let timer
  return () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  }
}

function Home({ data }) {
  const openingHours =
    data.allGooglePlacesPlace.edges[0].node.opening_hours.weekday_text
  const [dimensions, setDimensions] = useState({
    height: 1200,
    width: 1980,
    vh: 100,
    vw: 100,
  })

  useEffect(() => {
    // Prevent flashing
    document.querySelector("main").classList.add("visible")

    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
      vh: window.innerHeight / 100,
      vw: window.innerWidth / 100,
    })
  }, [])

  useEffect(() => {
    // Grab inner height of window
    let vh = dimensions.height * 0.01
    // Set css variable vh
    document.documentElement.style.setProperty("--vh", `${vh}px`)

    if (dimensions.width >= 768) {
      const debouncedHandleResize = debounce(function handleResize() {
        setDimensions({
          height: window.innerHeight,
          width: window.innerWidth,
          vh: window.innerHeight / 100,
          vw: window.innerWidth / 100,
        })
      }, 1000)

      window.addEventListener("resize", debouncedHandleResize)

      return () => {
        window.removeEventListener("resize", debouncedHandleResize)
      }
    }
  }, [dimensions])

  return (
    <>
      <SEO title="Home" />
      <main>
        <Cover openingHours={openingHours} dimensions={dimensions} />
        <section className="statement">
          <span>Roam freely and find inspiration...</span>
          <span>or that obscure pasta shape that you've</span>
          <span>been looking for</span>
        </section>
        <FloatingItems dimensions={dimensions} />
        <FullWidthBanner dimensions={dimensions} />
        <section className="covid-notice">
          <h3>Covid Restrictions</h3>
          <p>
            We want to reassure you that we are putting all measures in place to
            keep you and our team safe so that you can confidently enjoy your
            visit.
          </p>
          <p>
            We are following all government guidelines and working on practice
            measures within the shop. We have completed necessary risk
            assessments and all procedures which will be constantly reviewed and
            updated where necessary in line with government guidelines.
          </p>
          <p>
            We ask you to please use common sense to play your part keeping
            everyone safe. In return we will be doing the same for you.
          </p>
          <p>
            Due to the constantly changing nature of this guidance, we will be
            continuously reviewing our procedures related to capacity.
          </p>
        </section>
        <Footer />
      </main>
    </>
  )
}

export default Home

export const query = graphql`
  query {
    allGooglePlacesPlace {
      edges {
        node {
          opening_hours {
            weekday_text
          }
        }
      }
    }
  }
`
