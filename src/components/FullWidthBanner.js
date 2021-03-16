import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
  AnimatePresence,
  motion,
  useTransform,
  useViewportScroll,
} from "framer-motion"

function FullWidthBanner({ dimensions }) {
  const vh = dimensions.height / 100
  const { scrollYProgress } = useViewportScroll()
  const textScroll = useTransform(scrollYProgress, [0.7, 1], [vh * -2, vh * 6])

  return (
    <AnimatePresence>
      <section className="full-width-banner">
        <StaticImage
          className="full-width-banner__image"
          src="../images/egg.jpg"
          alt="a gigantic italian chocolate easter egg"
          layout="fullWidth"
          loading="eager"
        />
        <motion.article
          className="full-width-banner__text"
          style={{
            translateY: window.innerWidth >= 768 ? textScroll : 0,
            translateX: "-50%",
          }}
        >
          <span>Each season brings a selection of</span>
          <span>well considered products</span>
        </motion.article>
      </section>
    </AnimatePresence>
  )
}

export default FullWidthBanner
