import React from "react"
import { StaticImage } from "gatsby-plugin-image"

// Components
import Layout from "../components/Layout"

function Ilgiorno({ location }) {
  return (
    <Layout pageTitle="Il Giorno" location={location}>
      <div className="ilgiorno__title text--page-title">IL GIORNO</div>
      <div className="ilgiorno__gallery">
        <div className="image--with-caption">
          <StaticImage
            className="image image--60"
            src="../images/aperto.jpg"
            alt="cafe view"
          />
          <div className="text text--display">Aperto</div>
        </div>
        <StaticImage
          className="image image--50"
          src="../images/window-clouds.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--40"
          src="../images/stacked-chairs-morning.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--60"
          src="../images/sandwich-prep-duo.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--40"
          src="../images/sandwich-board-plan.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--60"
          src="../images/olive-oil-bread.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--55"
          src="../images/sanger-mix.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--45"
          src="../images/rocket-sangers.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--60"
          src="../images/coppa-focaccia.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--70"
          src="../images/sangers-in-baskets.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--50"
          src="../images/prep-cleanup.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--55"
          src="../images/cake-board.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--50"
          src="../images/writing-cake-labels.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--45"
          src="../images/pav.jpg"
          alt="cafe view"
        />
        <div className="image--with-caption">
          <StaticImage
            className="image image--60"
            src="../images/tom-and-joe-serving.jpg"
            alt="cafe view"
          />
          <div className="text text--display">Kick Off</div>
        </div>
        <StaticImage
          className="image image--55"
          src="../images/toms-head.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--45"
          src="../images/leon-serving-deli-stuff.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--70"
          src="../images/chicken-run-conversation.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--45"
          src="../images/maldini-low-shot.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--50"
          src="../images/joe-and-tom-low-shot.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--70"
          src="../images/shelves-wide-shot.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--50"
          src="../images/sofa-through-window.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--50"
          src="../images/joe-espresso-cup.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--50"
          src="../images/kid-eye-contact.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--50"
          src="../images/kid-smiling.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--60"
          src="../images/tom-hand-gesture.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--65"
          src="../images/kid-opening-fridge.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--50"
          src="../images/through-the-hatch.jpg"
          alt="cafe view"
        />
        <div className="image--with-caption">
          <StaticImage
            className="image image--60"
            src="../images/busy-through-the-window.jpg"
            alt="cafe view"
          />
          <div className="text text--display">Lunch</div>
        </div>
        <StaticImage
          className="image image--45"
          src="../images/cock-shot.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--50"
          src="../images/family-on-armchairs.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--60"
          src="../images/kitchen-trio.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--45"
          src="../images/steve-and-jules-through-door.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--55"
          src="../images/tom-and-joe-laughing.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--50"
          src="../images/maldini-sipping-coffee.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--50"
          src="../images/customers-walking-by.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--70"
          src="../images/cafe-view.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--40"
          src="../images/cutting-parma.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--40"
          src="../images/slicing-parma.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--50"
          src="../images/salad-mix-bowl.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--50"
          src="../images/salad-hand-mixed.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--65"
          src="../images/salad-plated.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--50"
          src="../images/feeding-cake.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--60"
          src="../images/joe-getting-milk.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--55"
          src="../images/cafe-view-close-up.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--50"
          src="../images/jokes-in-kitchen.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--50"
          src="../images/eating-salad.jpg"
          alt="cafe view"
        />
        <div className="image--with-caption row-reverse">
          <StaticImage
            className="image image--60"
            src="../images/last-goodbyes-monochrome.jpg"
            alt="cafe view"
          />
          <div className="text text--display">Last goodbyes</div>
        </div>
        <StaticImage
          className="image image--50"
          src="../images/joe-sweeping-overspill.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--55"
          src="../images/joe-sweeping-cafe-view.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--50"
          src="../images/tom-filling-bucket.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--45"
          src="../images/tom-spraying-machine.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--55"
          src="../images/jt-brings-in-chairs.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--50"
          src="../images/clearing-table-detritus.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--45"
          src="../images/joe-sweeping-maldini.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--65"
          src="../images/empty-cafe-ior.jpg"
          alt="cafe view"
        />
        <div className="image--with-caption">
          <StaticImage
            className="image image--55"
            src="../images/tired-tom.jpg"
            alt="cafe view"
          />
          <div className="text text--display">Tired people</div>
        </div>
        <StaticImage
          className="image image--50"
          src="../images/tired-leon.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--45"
          src="../images/tired-jt.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--45"
          src="../images/tired-matteo.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--50"
          src="../images/tired-joe.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--55"
          src="../images/laughing-tom.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--60"
          src="../images/laughing-jt.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--50"
          src="../images/laughing-joe-and-leon.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--50"
          src="../images/leaning-matteo.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--50"
          src="../images/empty-cafe-closing.jpg"
          alt="cafe view"
        />
        <StaticImage
          className="image image--50"
          src="../images/chairs-on-tables.jpg"
          alt="cafe view"
        />
        <div className="image--with-caption row-reverse">
          <StaticImage
            className="image image--60"
            src="../images/chiuso.jpg"
            alt="cafe view"
          />
          <div className="text text--display">Chiuso</div>
        </div>
      </div>
    </Layout>
  )
}

export default Ilgiorno
