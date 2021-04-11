import React from "react"
import { StaticImage } from "gatsby-plugin-image"

// Components
import Layout from "../components/Layout"
import GalleryImageWithCaption from "../components/GalleryImageWithCaption"
import GalleryImage from "../components/GalleryImage"

function Ilgiorno({ location }) {
  return (
    <Layout pageTitle="Il Giorno" location={location}>
      <div className="ilgiorno__title text--page-title">IL GIORNO</div>
      <div className="ilgiorno__gallery">
        <GalleryImageWithCaption rowReverse={false} caption="Aperto">
          <StaticImage
            className="image image--60"
            src="../images/aperto.jpg"
            alt="cafe view"
          />
        </GalleryImageWithCaption>
        <GalleryImage imageWidth="50">
          <StaticImage src="../images/window-clouds.jpg" alt="cafe view" />
        </GalleryImage>
        <GalleryImage imageWidth="40">
          <StaticImage
            src="../images/stacked-chairs-morning.jpg"
            alt="cafe view"
          />
        </GalleryImage>
        <GalleryImage imageWidth="60">
          <StaticImage src="../images/sandwich-prep-duo.jpg" alt="cafe view" />
        </GalleryImage>
        <GalleryImage imageWidth="60">
          <StaticImage
            src="../images/sandwich-board-plan.jpg"
            alt="cafe view"
          />
        </GalleryImage>
        <GalleryImage imageWidth="60">
          <StaticImage src="../images/olive-oil-bread.jpg" alt="cafe view" />
        </GalleryImage>
        <GalleryImage imageWidth="60">
          <StaticImage src="../images/sanger-mix.jpg" alt="cafe view" />
        </GalleryImage>
        <GalleryImage imageWidth="45">
          <StaticImage src="../images/rocket-sangers.jpg" alt="cafe view" />
        </GalleryImage>
        <GalleryImage imageWidth="60">
          <StaticImage src="../images/coppa-focaccia.jpg" alt="cafe view" />
        </GalleryImage>
        <GalleryImage imageWidth="70">
          <StaticImage src="../images/sangers-in-baskets.jpg" alt="cafe view" />
        </GalleryImage>
        <GalleryImage imageWidth="50">
          <StaticImage src="../images/prep-cleanup.jpg" alt="cafe view" />
        </GalleryImage>
        <GalleryImage imageWidth="55">
          <StaticImage src="../images/cake-board.jpg" alt="cafe view" />
        </GalleryImage>
        <GalleryImage imageWidth="50">
          <StaticImage
            src="../images/writing-cake-labels.jpg"
            alt="cafe view"
          />
        </GalleryImage>
        <GalleryImage imageWidth="45">
          <StaticImage src="../images/pav.jpg" alt="cafe view" />
        </GalleryImage>
        <GalleryImageWithCaption rowReverse={false} caption="Kick Off">
          <StaticImage
            className="image image--60"
            src="../images/tom-and-joe-serving.jpg"
            alt="cafe view"
          />
        </GalleryImageWithCaption>
        <GalleryImage imageWidth="55">
          <StaticImage src="../images/toms-head.jpg" alt="cafe view" />
        </GalleryImage>
        <GalleryImage imageWidth="45">
          <StaticImage
            src="../images/leon-serving-deli-stuff.jpg"
            alt="cafe view"
          />
        </GalleryImage>
        <GalleryImage imageWidth="70">
          <StaticImage
            src="../images/chicken-run-conversation.jpg"
            alt="cafe view"
          />
        </GalleryImage>
        <GalleryImage imageWidth="45">
          <StaticImage src="../images/maldini-low-shot.jpg" alt="cafe view" />
        </GalleryImage>
        <GalleryImage imageWidth="50">
          <StaticImage
            src="../images/joe-and-tom-low-shot.jpg"
            alt="cafe view"
          />
        </GalleryImage>
        <GalleryImage imageWidth="70">
          <StaticImage src="../images/shelves-wide-shot.jpg" alt="cafe view" />
        </GalleryImage>
        <GalleryImage imageWidth="50">
          <StaticImage
            src="../images/sofa-through-window.jpg"
            alt="cafe view"
          />
        </GalleryImage>
        <GalleryImage imageWidth="50">
          <StaticImage src="../images/joe-espresso-cup.jpg" alt="cafe view" />
        </GalleryImage>
        <GalleryImage imageWidth="50">
          <StaticImage src="../images/kid-eye-contact.jpg" alt="cafe view" />
        </GalleryImage>
        <GalleryImage imageWidth="50">
          <StaticImage src="../images/kid-smiling.jpg" alt="cafe view" />
        </GalleryImage>
        <GalleryImage imageWidth="60">
          <StaticImage src="../images/tom-hand-gesture.jpg" alt="cafe view" />
        </GalleryImage>
        <GalleryImage imageWidth="65">
          <StaticImage src="../images/kid-opening-fridge.jpg" alt="cafe view" />
        </GalleryImage>
        <GalleryImage imageWidth="50">
          <StaticImage src="../images/through-the-hatch.jpg" alt="cafe view" />
        </GalleryImage>
        <GalleryImageWithCaption rowReverse={false} caption="Lunch">
          <StaticImage
            className="image image--60"
            src="../images/busy-through-the-window.jpg"
            alt="cafe view"
          />
        </GalleryImageWithCaption>
        <GalleryImage imageWidth="45">
          <StaticImage src="../images/cock-shot.jpg" alt="cafe view" />
        </GalleryImage>
        <GalleryImage imageWidth="50">
          <StaticImage
            src="../images/family-on-armchairs.jpg"
            alt="cafe view"
          />
        </GalleryImage>
        <GalleryImage imageWidth="60">
          <StaticImage src="../images/kitchen-trio.jpg" alt="cafe view" />
        </GalleryImage>
        <GalleryImage imageWidth="45">
          <StaticImage
            src="../images/steve-and-jules-through-door.jpg"
            alt="cafe view"
          />
        </GalleryImage>
        <GalleryImage imageWidth="55">
          <StaticImage
            src="../images/tom-and-joe-laughing.jpg"
            alt="cafe view"
          />
        </GalleryImage>
        <GalleryImage imageWidth="50">
          <StaticImage
            src="../images/maldini-sipping-coffee.jpg"
            alt="cafe view"
          />
        </GalleryImage>
        <GalleryImage imageWidth="50">
          <StaticImage
            src="../images/customers-walking-by.jpg"
            alt="cafe view"
          />
        </GalleryImage>
        <GalleryImage imageWidth="70">
          <StaticImage src="../images/cafe-view.jpg" alt="cafe view" />
        </GalleryImage>
        <GalleryImage imageWidth="40">
          <StaticImage src="../images/cutting-parma.jpg" alt="cafe view" />
        </GalleryImage>
        <GalleryImage imageWidth="40">
          <StaticImage src="../images/slicing-parma.jpg" alt="cafe view" />
        </GalleryImage>
        <GalleryImage imageWidth="50">
          <StaticImage src="../images/salad-mix-bowl.jpg" alt="cafe view" />
        </GalleryImage>
        <GalleryImage imageWidth="50">
          <StaticImage src="../images/salad-hand-mixed.jpg" alt="cafe view" />
        </GalleryImage>
        <GalleryImage imageWidth="65">
          <StaticImage src="../images/salad-plated.jpg" alt="cafe view" />
        </GalleryImage>
        <GalleryImage imageWidth="50">
          <StaticImage src="../images/feeding-cake.jpg" alt="cafe view" />
        </GalleryImage>
        <GalleryImage imageWidth="60">
          <StaticImage src="../images/joe-getting-milk.jpg" alt="cafe view" />
        </GalleryImage>
        <GalleryImage imageWidth="55">
          <StaticImage src="../images/cafe-view-close-up.jpg" alt="cafe view" />
        </GalleryImage>
        <GalleryImage imageWidth="50">
          <StaticImage src="../images/jokes-in-kitchen.jpg" alt="cafe view" />
        </GalleryImage>
        <GalleryImage imageWidth="50">
          <StaticImage src="../images/eating-salad.jpg" alt="cafe view" />
        </GalleryImage>
        <GalleryImageWithCaption rowReverse={true} caption="Last Goodbyes">
          <StaticImage
            className="image image--60"
            src="../images/last-goodbyes-monochrome.jpg"
            alt="cafe view"
          />
        </GalleryImageWithCaption>
        <GalleryImage imageWidth="50">
          <StaticImage
            src="../images/joe-sweeping-overspill.jpg"
            alt="cafe view"
          />
        </GalleryImage>
        <GalleryImage imageWidth="55">
          <StaticImage
            src="../images/joe-sweeping-cafe-view.jpg"
            alt="cafe view"
          />
        </GalleryImage>
        <GalleryImage imageWidth="50">
          <StaticImage src="../images/tom-filling-bucket.jpg" alt="cafe view" />
        </GalleryImage>
        <GalleryImage imageWidth="45">
          <StaticImage
            src="../images/tom-spraying-machine.jpg"
            alt="cafe view"
          />
        </GalleryImage>
        <GalleryImage imageWidth="55">
          <StaticImage
            src="../images/jt-brings-in-chairs.jpg"
            alt="cafe view"
          />
        </GalleryImage>
        <GalleryImage imageWidth="50">
          <StaticImage
            src="../images/clearing-table-detritus.jpg"
            alt="cafe view"
          />
        </GalleryImage>
        <GalleryImage imageWidth="45">
          <StaticImage
            src="../images/joe-sweeping-maldini.jpg"
            alt="cafe view"
          />
        </GalleryImage>
        <GalleryImage imageWidth="65">
          <StaticImage src="../images/empty-cafe-ior.jpg" alt="cafe view" />
        </GalleryImage>
        <GalleryImageWithCaption rowReverse={false} caption="Tired People">
          <StaticImage
            className="image image--55"
            src="../images/tired-tom.jpg"
            alt="cafe view"
          />
        </GalleryImageWithCaption>
        <GalleryImage imageWidth="50">
          <StaticImage src="../images/tired-leon.jpg" alt="cafe view" />
        </GalleryImage>
        <GalleryImage imageWidth="45">
          <StaticImage src="../images/tired-jt.jpg" alt="cafe view" />
        </GalleryImage>
        <GalleryImage imageWidth="45">
          <StaticImage src="../images/tired-matteo.jpg" alt="cafe view" />
        </GalleryImage>
        <GalleryImage imageWidth="50">
          <StaticImage src="../images/tired-joe.jpg" alt="cafe view" />
        </GalleryImage>
        <GalleryImage imageWidth="55">
          <StaticImage src="../images/laughing-tom.jpg" alt="cafe view" />
        </GalleryImage>
        <GalleryImage imageWidth="60">
          <StaticImage src="../images/laughing-jt.jpg" alt="cafe view" />
        </GalleryImage>
        <GalleryImage imageWidth="50">
          <StaticImage
            src="../images/laughing-joe-and-leon.jpg"
            alt="cafe view"
          />
        </GalleryImage>
        <GalleryImage imageWidth="50">
          <StaticImage src="../images/leaning-matteo.jpg" alt="cafe view" />
        </GalleryImage>
        <GalleryImage imageWidth="50">
          <StaticImage src="../images/empty-cafe-closing.jpg" alt="cafe view" />
        </GalleryImage>
        <GalleryImage imageWidth="50">
          <StaticImage src="../images/chairs-on-tables.jpg" alt="cafe view" />
        </GalleryImage>
        <GalleryImageWithCaption rowReverse={true}>
          <StaticImage
            className="image image--60"
            src="../images/chiuso.jpg"
            alt="cafe view"
          />
          <div className="text text--display">Chiuso</div>
        </GalleryImageWithCaption>
      </div>
    </Layout>
  )
}

export default Ilgiorno
