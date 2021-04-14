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
            alt="sandwich board sign outside cafe"
          />
        </GalleryImageWithCaption>
        <GalleryImage imageWidth="50">
          <StaticImage src="../images/window-clouds.jpg" alt="window clouds display" />
        </GalleryImage>
        <GalleryImage imageWidth="40">
          <StaticImage
            src="../images/stacked-chairs-morning.jpg"
            alt="chairs stacked inside"
          />
        </GalleryImage>
        <GalleryImage imageWidth="60">
          <StaticImage src="../images/sandwich-prep-duo.jpg" alt="people making sandwiches" />
        </GalleryImage>
        <GalleryImage imageWidth="60">
          <StaticImage
            src="../images/sandwich-board-plan.jpg"
            alt="sandwich ingredients list"
          />
        </GalleryImage>
        <GalleryImage imageWidth="60">
          <StaticImage src="../images/olive-oil-bread.jpg" alt="olive oil on bread" />
        </GalleryImage>
        <GalleryImage imageWidth="60">
          <StaticImage src="../images/sanger-mix.jpg" alt="sandwich mix" />
        </GalleryImage>
        <GalleryImage imageWidth="45">
          <StaticImage src="../images/rocket-sangers.jpg" alt="fresh rocket leaves" />
        </GalleryImage>
        <GalleryImage imageWidth="60">
          <StaticImage src="../images/coppa-focaccia.jpg" alt="meaty focaccia sandwich" />
        </GalleryImage>
        <GalleryImage imageWidth="70">
          <StaticImage src="../images/sangers-in-baskets.jpg" alt="baskets full of sandwiches" />
        </GalleryImage>
        <GalleryImage imageWidth="50">
          <StaticImage src="../images/prep-cleanup.jpg" alt="cleaning up the kitchen" />
        </GalleryImage>
        <GalleryImage imageWidth="55">
          <StaticImage src="../images/cake-board.jpg" alt="cakes sliced on a board" />
        </GalleryImage>
        <GalleryImage imageWidth="50">
          <StaticImage
            src="../images/writing-cake-labels.jpg"
            alt="writing the cake labels"
          />
        </GalleryImage>
        <GalleryImage imageWidth="45">
          <StaticImage src="../images/pav.jpg" alt="customer waiting for coffee" />
        </GalleryImage>
        <GalleryImageWithCaption rowReverse={false} caption="Kick Off">
          <StaticImage
            className="image image--60"
            src="../images/tom-and-joe-serving.jpg"
            alt="barista serving customer"
          />
        </GalleryImageWithCaption>
        <GalleryImage imageWidth="55">
          <StaticImage src="../images/toms-head.jpg" alt="barista working hard" />
        </GalleryImage>
        <GalleryImage imageWidth="45">
          <StaticImage
            src="../images/leon-serving-deli-stuff.jpg"
            alt="serving at the deli counter"
          />
        </GalleryImage>
        <GalleryImage imageWidth="70">
          <StaticImage
            src="../images/chicken-run-conversation.jpg"
            alt="customers conversing"
          />
        </GalleryImage>
        <GalleryImage imageWidth="45">
          <StaticImage src="../images/maldini-low-shot.jpg" alt="full tables" />
        </GalleryImage>
        <GalleryImage imageWidth="50">
          <StaticImage
            src="../images/joe-and-tom-low-shot.jpg"
            alt="baristas working"
          />
        </GalleryImage>
        <GalleryImage imageWidth="70">
          <StaticImage src="../images/shelves-wide-shot.jpg" alt="shelves full of italian dry goods" />
        </GalleryImage>
        <GalleryImage imageWidth="50">
          <StaticImage
            src="../images/sofa-through-window.jpg"
            alt="customers talking"
          />
        </GalleryImage>
        <GalleryImage imageWidth="50">
          <StaticImage src="../images/joe-espresso-cup.jpg" alt="serving an espresso" />
        </GalleryImage>
        <GalleryImage imageWidth="50">
          <StaticImage src="../images/kid-eye-contact.jpg" alt="quizical child" />
        </GalleryImage>
        <GalleryImage imageWidth="50">
          <StaticImage src="../images/kid-smiling.jpg" alt="happy child" />
        </GalleryImage>
        <GalleryImage imageWidth="60">
          <StaticImage src="../images/tom-hand-gesture.jpg" alt="baristas having fun" />
        </GalleryImage>
        <GalleryImage imageWidth="65">
          <StaticImage src="../images/kid-opening-fridge.jpg" alt="child choosing soft drink" />
        </GalleryImage>
        <GalleryImage imageWidth="50">
          <StaticImage src="../images/through-the-hatch.jpg" alt="view of the kitchen" />
        </GalleryImage>
        <GalleryImageWithCaption rowReverse={false} caption="Lunch">
          <StaticImage
            className="image image--60"
            src="../images/busy-through-the-window.jpg"
            alt="busy cafe through the window"
          />
        </GalleryImageWithCaption>
        <GalleryImage imageWidth="45">
          <StaticImage src="../images/cock-shot.jpg" alt="a poster of a cockerel brand" />
        </GalleryImage>
        <GalleryImage imageWidth="50">
          <StaticImage
            src="../images/family-on-armchairs.jpg"
            alt="family drinking coffee"
          />
        </GalleryImage>
        <GalleryImage imageWidth="60">
          <StaticImage src="../images/kitchen-trio.jpg" alt="working in the kitchen" />
        </GalleryImage>
        <GalleryImage imageWidth="45">
          <StaticImage
            src="../images/steve-and-jules-through-door.jpg"
            alt="customers browsing the shelves"
          />
        </GalleryImage>
        <GalleryImage imageWidth="55">
          <StaticImage
            src="../images/tom-and-joe-laughing.jpg"
            alt="barista laughing hard"
          />
        </GalleryImage>
        <GalleryImage imageWidth="50">
          <StaticImage
            src="../images/maldini-sipping-coffee.jpg"
            alt="customer sipping coffee"
          />
        </GalleryImage>
        <GalleryImage imageWidth="50">
          <StaticImage
            src="../images/customers-walking-by.jpg"
            alt="customers looking in through the window"
          />
        </GalleryImage>
        <GalleryImage imageWidth="70">
          <StaticImage src="../images/cafe-view.jpg" alt="view of the busy cafe" />
        </GalleryImage>
        <GalleryImage imageWidth="40">
          <StaticImage src="../images/cutting-parma.jpg" alt="cutting parma ham" />
        </GalleryImage>
        <GalleryImage imageWidth="40">
          <StaticImage src="../images/slicing-parma.jpg" alt="slicing parma ham" />
        </GalleryImage>
        <GalleryImage imageWidth="50">
          <StaticImage src="../images/salad-mix-bowl.jpg" alt="salad mix in a bowl" />
        </GalleryImage>
        <GalleryImage imageWidth="50">
          <StaticImage src="../images/salad-hand-mixed.jpg" alt="salad being mixed" />
        </GalleryImage>
        <GalleryImage imageWidth="65">
          <StaticImage src="../images/salad-plated.jpg" alt="plating the salad" />
        </GalleryImage>
        <GalleryImage imageWidth="50">
          <StaticImage src="../images/feeding-cake.jpg" alt="couple feed each other cake" />
        </GalleryImage>
        <GalleryImage imageWidth="60">
          <StaticImage src="../images/joe-getting-milk.jpg" alt="barista on a milk run" />
        </GalleryImage>
        <GalleryImage imageWidth="55">
          <StaticImage src="../images/cafe-view-close-up.jpg" alt="close up on family at table" />
        </GalleryImage>
        <GalleryImage imageWidth="50">
          <StaticImage src="../images/jokes-in-kitchen.jpg" alt="fun in the kitchen" />
        </GalleryImage>
        <GalleryImage imageWidth="50">
          <StaticImage src="../images/eating-salad.jpg" alt="customer eating a salad" />
        </GalleryImage>
        <GalleryImageWithCaption rowReverse={true} caption="Last Goodbyes">
          <StaticImage
            className="image image--60"
            src="../images/last-goodbyes-monochrome.jpg"
            alt="saying goodbye to customers"
          />
        </GalleryImageWithCaption>
        <GalleryImage imageWidth="50">
          <StaticImage
            src="../images/joe-sweeping-overspill.jpg"
            alt="sweeping the shop floor"
          />
        </GalleryImage>
        <GalleryImage imageWidth="55">
          <StaticImage
            src="../images/joe-sweeping-cafe-view.jpg"
            alt="sweeping the cafe floor"
          />
        </GalleryImage>
        <GalleryImage imageWidth="50">
          <StaticImage src="../images/tom-filling-bucket.jpg" alt="barista steaming the machine" />
        </GalleryImage>
        <GalleryImage imageWidth="45">
          <StaticImage
            src="../images/tom-spraying-machine.jpg"
            alt="barista cleaning the machine"
          />
        </GalleryImage>
        <GalleryImage imageWidth="55">
          <StaticImage
            src="../images/jt-brings-in-chairs.jpg"
            alt="bringing in the outside chairs"
          />
        </GalleryImage>
        <GalleryImage imageWidth="50">
          <StaticImage
            src="../images/clearing-table-detritus.jpg"
            alt="clearing last table"
          />
        </GalleryImage>
        <GalleryImage imageWidth="45">
          <StaticImage
            src="../images/joe-sweeping-maldini.jpg"
            alt="sweeping around the machine"
          />
        </GalleryImage>
        <GalleryImage imageWidth="65">
          <StaticImage src="../images/empty-cafe-ior.jpg" alt="empty cafe" />
        </GalleryImage>
        <GalleryImageWithCaption rowReverse={false} caption="Tired People">
          <StaticImage
            className="image image--55"
            src="../images/tired-tom.jpg"
            alt="tired barista"
          />
        </GalleryImageWithCaption>
        <GalleryImage imageWidth="50">
          <StaticImage src="../images/tired-leon.jpg" alt="tired barista" />
        </GalleryImage>
        <GalleryImage imageWidth="45">
          <StaticImage src="../images/tired-jt.jpg" alt="tired server" />
        </GalleryImage>
        <GalleryImage imageWidth="45">
          <StaticImage src="../images/tired-matteo.jpg" alt="tired owner" />
        </GalleryImage>
        <GalleryImage imageWidth="50">
          <StaticImage src="../images/tired-joe.jpg" alt="tired server" />
        </GalleryImage>
        <GalleryImage imageWidth="55">
          <StaticImage src="../images/laughing-tom.jpg" alt="laughing barista" />
        </GalleryImage>
        <GalleryImage imageWidth="60">
          <StaticImage src="../images/laughing-jt.jpg" alt="laughing server" />
        </GalleryImage>
        <GalleryImage imageWidth="50">
          <StaticImage
            src="../images/laughing-joe-and-leon.jpg"
            alt="laughing barista and server"
          />
        </GalleryImage>
        <GalleryImage imageWidth="50">
          <StaticImage src="../images/leaning-matteo.jpg" alt="shot of matteo ready to leave" />
        </GalleryImage>
        <GalleryImage imageWidth="50">
          <StaticImage src="../images/empty-cafe-closing.jpg" alt="empty cafe at the end of the day" />
        </GalleryImage>
        <GalleryImage imageWidth="50">
          <StaticImage src="../images/chairs-on-tables.jpg" alt="chairs stacked on tables" />
        </GalleryImage>
        <GalleryImageWithCaption rowReverse={true}>
          <StaticImage
            className="image image--60"
            src="../images/chiuso.jpg"
            alt="chairs stacked inside"
          />
          <div className="text text--display">Chiuso</div>
        </GalleryImageWithCaption>
      </div>
    </Layout>
  )
}

export default Ilgiorno
