import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
  motion,
  AnimatePresence,
  useTransform,
  useViewportScroll,
} from "framer-motion"

const defaultOpeningHours = [
  "Munday: closed",
  "Twosday: closed",
  "Wenzday: 9.00am - 4.30pm",
  "Thirsday: 9.00am - 4.30pm",
  "Fryday: 9.00am - 4.30pm",
  "Saterday: 9.00am - 4.30pm",
  "Sonday: closed",
]

// Animations
const smoothTransition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
}

const fastTransition = {
  duration: 1,
  ease: [0.6, 0.01, -0.05, 0.9],
}

const loadingVariants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      ...smoothTransition,
      delay: 2,
      duration: 1,
    },
  },
}

const contentVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      ...smoothTransition,
      delay: 2.5,
      duration: 1,
    },
  },
}

const titleVariants = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: {
      ...fastTransition,
      duration: 1,
    },
  },
}

function Hero() {
  const { scrollYProgress } = useViewportScroll()
  const heroImageScroll = useTransform(scrollYProgress, [0, 1], [0, 1000])

  return (
    <AnimatePresence>
      <div className="hero">
        <div className="hero__title-wrapper">
          <motion.div
            className="hero__title"
            variants={titleVariants}
            initial="initial"
            animate="animate"
          >
            BRAGAZZI'S
          </motion.div>
        </div>
        <div className="hero__image-wrapper">
          <motion.div
            className="hero__loading"
            variants={loadingVariants}
            initial="initial"
            animate="animate"
          ></motion.div>
          <motion.div
            className="hero__image-inner"
            style={{ top: heroImageScroll }}
          >
            <StaticImage
              className="hero__image"
              src="../images/espresso-pour.jpg"
              alt="espresso pour"
              layout="fullWidth"
              loading="eager"
              placeholder="#1d1d1d"
            />
          </motion.div>
        </div>
        <motion.div
          className="hero__content"
          variants={contentVariants}
          initial="initial"
          animate="animate"
        >
          <div className="tag left">Purveyors of quality Italian goods</div>
          <div className="tag right">Cafe, shop and delicatessen</div>
          <div className="opening-hours">
            {defaultOpeningHours.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
          <div className="address">
            <p>224-228 Abbeydale Road</p>
            <p>Sheffield</p>
          </div>
        </motion.div>
        <motion.svg
          className="hero__down-arrow"
          variants={contentVariants}
          initial="initial"
          animate="animate"
          width="53"
          height="53"
          viewBox="0 0 53 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.078 49.2039C15.9242 49.3581 15.7414 49.4805 15.5402 49.564C15.339 49.6475 15.1233 49.6905 14.9054 49.6905C14.6876 49.6905 14.4718 49.6475 14.2706 49.564C14.0694 49.4805 13.8866 49.3581 13.7328 49.2039L0.482787 35.9539C0.171788 35.6429 -0.0029297 35.2211 -0.00292969 34.7812C-0.00292968 34.3414 0.171788 33.9196 0.482787 33.6086C0.793787 33.2976 1.21559 33.1229 1.65541 33.1229C2.09523 33.1229 2.51704 33.2976 2.82804 33.6086L13.2492 44.0331V11.5938C13.2492 9.39743 14.1216 7.29106 15.6747 5.73802C17.2277 4.18499 19.3341 3.3125 21.5304 3.3125H48.0304C48.4697 3.3125 48.891 3.487 49.2016 3.7976C49.5122 4.10821 49.6867 4.52949 49.6867 4.96875C49.6867 5.40801 49.5122 5.82929 49.2016 6.1399C48.891 6.4505 48.4697 6.625 48.0304 6.625H21.5304C20.2126 6.625 18.9488 7.14849 18.017 8.08031C17.0852 9.01213 16.5617 10.276 16.5617 11.5938V44.0331L26.9828 33.6086C27.2938 33.2976 27.7156 33.1229 28.1554 33.1229C28.5952 33.1229 29.017 33.2976 29.328 33.6086C29.639 33.9196 29.8138 34.3414 29.8138 34.7812C29.8138 35.2211 29.639 35.6429 29.328 35.9539L16.078 49.2039Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="53" height="53" fill="white" />
            </clipPath>
          </defs>
        </motion.svg>
      </div>
    </AnimatePresence>
  )
}

export default Hero
