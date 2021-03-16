import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
  motion,
  AnimatePresence,
  useTransform,
  useViewportScroll,
} from "framer-motion"

// Animations
const smoothTransition = {
  duration: 1.3,
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
    },
  },
}

const downArrowVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: [0, 1, 0],
    translateY: [-20, 0, 20],
    transition: {
      ...smoothTransition,
      delay: 4,
      duration: 3,
      times: [0, 0.6, 1],
    },
  },
}

const titleVariants = {
  initial: {
    translateY: 400,
  },
  animate: {
    translateY: 0,
    transition: {
      ...fastTransition,
    },
  },
}

function Cover({ openingHours, dimensions: { vh } }) {
  const { scrollYProgress } = useViewportScroll()
  const heroImageScroll = useTransform(scrollYProgress, [0, 1], [0, vh * 59])

  return (
    <AnimatePresence>
      <div className="cover" id="cover">
        <div className="cover__title-wrapper">
          <motion.div
            className="cover__title"
            variants={titleVariants}
            initial="initial"
            animate="animate"
          >
            BRAGAZZI'S
          </motion.div>
        </div>
        <div className="cover__image-wrapper">
          <motion.div
            className="cover__loading"
            variants={loadingVariants}
            initial="initial"
            animate="animate"
          ></motion.div>
          <motion.div
            className="cover__image-inner"
            style={{
              translateY: window.innerWidth >= 768 ? heroImageScroll : 0,
            }}
          >
            <StaticImage
              className="cover__image"
              src="../images/cafe-view.jpg"
              alt="espresso pour"
              layout="fullWidth"
              loading="eager"
              placeholder="#1d1d1d"
            />
          </motion.div>
        </div>
        <motion.div
          className="cover__content"
          variants={contentVariants}
          initial="initial"
          animate="animate"
        >
          <div className="tag left">Purveyors of quality Italian goods</div>
          <div className="tag right">Cafe, shop and delicatessen</div>
          <div className="opening-hours">
            {openingHours.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
          <div className="address">
            <a
              href="https://goo.gl/maps/n4uLGJGtaqSjSfoo6"
              target="_blank"
              rel="noreferrer"
            >
              <p>224-228 Abbeydale Road</p>
              <p>Sheffield</p>
            </a>
          </div>
        </motion.div>
        <motion.svg
          className="cover__down-arrow"
          variants={downArrowVariants}
          initial="initial"
          animate="animate"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="#f6f4f1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50ZM23.5858 38.5858L17 32L18.4142 30.5858L24 36.1716V9H26V36.1716L31.5858 30.5858L33 32L26.4142 38.5858L26 39L25 40L24 39L23.5858 38.5858Z"
            fill="#f6f4f1"
          />
        </motion.svg>
      </div>
    </AnimatePresence>
  )
}

export default Cover
