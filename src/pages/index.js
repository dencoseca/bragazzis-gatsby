import * as React from "react"
import "../styles/styles.scss"
import Hero from "../components/Hero"
import FloatingItems from "../components/FloatingItems"
import Footer from "../components/Footer"
import FullWidthBanner from "../components/FullWidthBanner"

function Home() {
  return (
    <>
      <Hero />
      <div className="statement">
        <span>Roam freely and find inspiration...</span>
        <span>or that obscure pasta shape that you've</span>
        <span>been looking for</span>
      </div>
      <FloatingItems />
      <FullWidthBanner />
      <section className="covid-notice">
        <h3>Covid Restrictions</h3>
        <p>
          We want to reassure you that we are putting all measures in place to
          keep you and our team safe so that you can confidently enjoy your
          visit.
        </p>
        <p>
          We are following all government guidelines and working on practice
          measures within the shop. We have completed necessary risk assessments
          and all procedures which will be constantly reviewed and updated where
          necessary in line with government guidelines.
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
    </>
  )
}

export default Home
