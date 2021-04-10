import React, { useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

// Components
import Layout from "../components/Layout"

// Animations
const imageVariants = {
  hidden: {
    opacity: 0,
    translateY: 200,
  },
  visible: {
    opacity: 1,
    translateY: 0,
  },
}

function Ilgiorno({ location }) {
  const controls = useAnimation()
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
    if (!inView) {
      controls.start("hidden")
    }
  }, [controls, inView])

  return (
    <Layout pageTitle="Il Giorno" location={location}>
      <div className="ilgiorno__title text--page-title">IL GIORNO</div>
      <div className="ilgiorno__gallery">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image--with-caption"
        >
          <StaticImage
            className="image image--60"
            src="../images/aperto.jpg"
            alt="cafe view"
          />
          <div className="text text--display">Aperto</div>
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--50"
        >
          <StaticImage src="../images/window-clouds.jpg" alt="cafe view" />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--40"
        >
          <StaticImage
            src="../images/stacked-chairs-morning.jpg"
            alt="cafe view"
          />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--60"
        >
          <StaticImage src="../images/sandwich-prep-duo.jpg" alt="cafe view" />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--60"
        >
          <StaticImage
            src="../images/sandwich-board-plan.jpg"
            alt="cafe view"
          />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--60"
        >
          <StaticImage src="../images/olive-oil-bread.jpg" alt="cafe view" />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--55"
        >
          <StaticImage src="../images/sanger-mix.jpg" alt="cafe view" />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--45"
        >
          <StaticImage src="../images/rocket-sangers.jpg" alt="cafe view" />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--60"
        >
          <StaticImage src="../images/coppa-focaccia.jpg" alt="cafe view" />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--70"
        >
          <StaticImage src="../images/sangers-in-baskets.jpg" alt="cafe view" />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--50"
        >
          <StaticImage src="../images/prep-cleanup.jpg" alt="cafe view" />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--55"
        >
          <StaticImage src="../images/cake-board.jpg" alt="cafe view" />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--50"
        >
          <StaticImage
            src="../images/writing-cake-labels.jpg"
            alt="cafe view"
          />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--45"
        >
          <StaticImage src="../images/pav.jpg" alt="cafe view" />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image--with-caption"
        >
          <StaticImage
            className="image image--60"
            src="../images/tom-and-joe-serving.jpg"
            alt="cafe view"
          />
          <div className="text text--display">Kick Off</div>
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--55"
        >
          <StaticImage src="../images/toms-head.jpg" alt="cafe view" />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--45"
        >
          <StaticImage
            src="../images/leon-serving-deli-stuff.jpg"
            alt="cafe view"
          />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--70"
        >
          <StaticImage
            src="../images/chicken-run-conversation.jpg"
            alt="cafe view"
          />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--45"
        >
          <StaticImage src="../images/maldini-low-shot.jpg" alt="cafe view" />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--50"
        >
          <StaticImage
            src="../images/joe-and-tom-low-shot.jpg"
            alt="cafe view"
          />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--70"
        >
          <StaticImage src="../images/shelves-wide-shot.jpg" alt="cafe view" />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--50"
        >
          <StaticImage
            src="../images/sofa-through-window.jpg"
            alt="cafe view"
          />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--50"
        >
          <StaticImage src="../images/joe-espresso-cup.jpg" alt="cafe view" />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--50"
        >
          <StaticImage src="../images/kid-eye-contact.jpg" alt="cafe view" />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--50"
        >
          <StaticImage src="../images/kid-smiling.jpg" alt="cafe view" />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--60"
        >
          <StaticImage src="../images/tom-hand-gesture.jpg" alt="cafe view" />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--65"
        >
          <StaticImage src="../images/kid-opening-fridge.jpg" alt="cafe view" />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--50"
        >
          <StaticImage src="../images/through-the-hatch.jpg" alt="cafe view" />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image--with-caption"
        >
          <StaticImage
            className="image image--60"
            src="../images/busy-through-the-window.jpg"
            alt="cafe view"
          />
          <div className="text text--display">Lunch</div>
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--45"
        >
          <StaticImage src="../images/cock-shot.jpg" alt="cafe view" />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--50"
        >
          <StaticImage
            src="../images/family-on-armchairs.jpg"
            alt="cafe view"
          />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--60"
        >
          <StaticImage src="../images/kitchen-trio.jpg" alt="cafe view" />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--45"
        >
          <StaticImage
            src="../images/steve-and-jules-through-door.jpg"
            alt="cafe view"
          />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--55"
        >
          <StaticImage
            src="../images/tom-and-joe-laughing.jpg"
            alt="cafe view"
          />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--50"
        >
          <StaticImage
            src="../images/maldini-sipping-coffee.jpg"
            alt="cafe view"
          />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--50"
        >
          <StaticImage
            src="../images/customers-walking-by.jpg"
            alt="cafe view"
          />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--70"
        >
          <StaticImage src="../images/cafe-view.jpg" alt="cafe view" />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--40"
        >
          <StaticImage src="../images/cutting-parma.jpg" alt="cafe view" />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--40"
        >
          <StaticImage src="../images/slicing-parma.jpg" alt="cafe view" />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--50"
        >
          <StaticImage src="../images/salad-mix-bowl.jpg" alt="cafe view" />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--50"
        >
          <StaticImage src="../images/salad-hand-mixed.jpg" alt="cafe view" />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--65"
        >
          <StaticImage src="../images/salad-plated.jpg" alt="cafe view" />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--50"
        >
          <StaticImage src="../images/feeding-cake.jpg" alt="cafe view" />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--60"
        >
          <StaticImage src="../images/joe-getting-milk.jpg" alt="cafe view" />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--55"
        >
          <StaticImage src="../images/cafe-view-close-up.jpg" alt="cafe view" />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--50"
        >
          <StaticImage src="../images/jokes-in-kitchen.jpg" alt="cafe view" />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--50"
        >
          <StaticImage src="../images/eating-salad.jpg" alt="cafe view" />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image--with-caption row-reverse"
        >
          <StaticImage
            className="image image--60"
            src="../images/last-goodbyes-monochrome.jpg"
            alt="cafe view"
          />
          <div className="text text--display">Last goodbyes</div>
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--50"
        >
          <StaticImage
            src="../images/joe-sweeping-overspill.jpg"
            alt="cafe view"
          />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--55"
        >
          <StaticImage
            src="../images/joe-sweeping-cafe-view.jpg"
            alt="cafe view"
          />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--50"
        >
          <StaticImage src="../images/tom-filling-bucket.jpg" alt="cafe view" />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--45"
        >
          <StaticImage
            src="../images/tom-spraying-machine.jpg"
            alt="cafe view"
          />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--55"
        >
          <StaticImage
            src="../images/jt-brings-in-chairs.jpg"
            alt="cafe view"
          />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--50"
        >
          <StaticImage
            src="../images/clearing-table-detritus.jpg"
            alt="cafe view"
          />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--45"
        >
          <StaticImage
            src="../images/joe-sweeping-maldini.jpg"
            alt="cafe view"
          />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--65"
        >
          <StaticImage src="../images/empty-cafe-ior.jpg" alt="cafe view" />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image--with-caption"
        >
          <StaticImage
            className="image image--55"
            src="../images/tired-tom.jpg"
            alt="cafe view"
          />
          <div className="text text--display">Tired people</div>
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--50"
        >
          <StaticImage src="../images/tired-leon.jpg" alt="cafe view" />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--45"
        >
          <StaticImage src="../images/tired-jt.jpg" alt="cafe view" />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--45"
        >
          <StaticImage src="../images/tired-matteo.jpg" alt="cafe view" />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--50"
        >
          <StaticImage src="../images/tired-joe.jpg" alt="cafe view" />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--55"
        >
          <StaticImage src="../images/laughing-tom.jpg" alt="cafe view" />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--60"
        >
          <StaticImage src="../images/laughing-jt.jpg" alt="cafe view" />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--50"
        >
          <StaticImage
            src="../images/laughing-joe-and-leon.jpg"
            alt="cafe view"
          />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--50"
        >
          <StaticImage src="../images/leaning-matteo.jpg" alt="cafe view" />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--50"
        >
          <StaticImage src="../images/empty-cafe-closing.jpg" alt="cafe view" />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image image--50"
        >
          <StaticImage src="../images/chairs-on-tables.jpg" alt="cafe view" />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="image--with-caption row-reverse"
        >
          <StaticImage
            className="image image--60"
            src="../images/chiuso.jpg"
            alt="cafe view"
          />
          <div className="text text--display">Chiuso</div>
        </motion.div>
      </div>
    </Layout>
  )
}

export default Ilgiorno
