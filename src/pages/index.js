import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import { AnimatePresence, motion } from "framer-motion"

// Components
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

// Animations
const smoothTransition = {
  duration: 1.1,
  ease: [0.43, 0.13, 0.23, 0.96],
}

const openingHoursVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      ...smoothTransition,
      delay: 1.5,
    },
  },
}

function Home({ data }) {
  const openingHours =
    data.allGooglePlacesPlace.edges[0].node.opening_hours.weekday_text
  const breakpoints = {
    mobile: 760,
    tablet: 1080,
  }
  const [dimensions, setDimensions] = useState({
    height: 1200,
    width: 1980,
    vh: 100,
    vw: 100,
  })

  // Set initial values as soon as page loads
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

  // Reset window size variables as browser gets resized
  useEffect(() => {
    // Grab inner height of window
    let vh = dimensions.height * 0.01
    // Set css variable vh
    document.documentElement.style.setProperty("--vh", `${vh}px`)

    // Only debounce / resize on tablet and larger
    if (dimensions.width >= breakpoints.mobile) {
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
  }, [dimensions, breakpoints.mobile])

  return (
    <>
      <SEO title="Home" />
      <main>
        <Cover openingHours={openingHours} dimensions={dimensions} />
        <AnimatePresence>
          <section className="mobile-cover">
            <motion.div
              className="mobile-cover__opening-hours"
              initial="initial"
              animate="animate"
              variants={openingHoursVariants}
            >
              {openingHours.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </motion.div>
          </section>
        </AnimatePresence>
        <section className="statement" id="statement">
          {dimensions.width >= breakpoints.mobile ? (
            <>
              <span className="text--display">
                Roam freely and find inspiration...
              </span>
              <span className="text--display">
                or that obscure pasta shape that you've
              </span>
              <span className="text--display">been looking for</span>
            </>
          ) : (
            <>
              <span className="text--display">Roam freely</span>
              <span className="text--display">and find inspiration...</span>
              <span className="text--display">or that obscure pasta</span>
              <span className="text--display">shape that you've</span>
              <span className="text--display">been looking for</span>
            </>
          )}
        </section>
        <FloatingItems dimensions={dimensions} breakpoints={breakpoints} />
        <FullWidthBanner dimensions={dimensions} breakpoints={breakpoints} />
        <section className="covid-notice">
          <span className="text--display">Covid Restrictions</span>
          <p className="text--md">
            We want to reassure you that we are putting all measures in place to
            keep you and our team safe so that you can confidently enjoy your
            visit.
          </p>
          <p className="text--md">
            We are following all government guidelines and working on practice
            measures within the shop. We have completed necessary risk
            assessments and all procedures which will be constantly reviewed and
            updated where necessary in line with government guidelines.
          </p>
          <p className="text--md">
            We ask you to please use common sense to play your part keeping
            everyone safe. In return we will be doing the same for you.
          </p>
          <p className="text--md">
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
