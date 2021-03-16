import React from "react"

function Footer() {
  return (
    <footer>
      <div className="list contact">
        <h4>Contact</h4>
        <ul>
          <li>
            <a
              className="text-link"
              href="https://goo.gl/maps/n4uLGJGtaqSjSfoo6"
              target="_blank"
              rel="noreferrer"
            >
              <p>224-228 Abbeydale Road</p>
              <p>Sheffield</p>
              <p>S7 1FL</p>
            </a>
          </li>
          <li>
            <a className="text-link" href="mailto:info@braazzis.co.uk">
              info@bragazzis.co.uk
            </a>
          </li>
          <li>
            <a className="text-link" href="tel:+441142581483">
              0114 258 1483
            </a>
          </li>
        </ul>
      </div>
      <div className="list site">
        <h4>Site</h4>
        <ul>
          <li>&copy; 2020 Bragazzi's Ltd</li>
          <li>
            photography by{" "}
            <a
              className="text-link"
              href="https://www.maytreephotography.co.uk"
              target="_blank"
              rel="noreferrer"
            >
              maytree
            </a>
          </li>
          <li>
            site by{" "}
            <a
              className="text-link"
              href="https://leonbrown.dev"
              target="_blank"
              rel="noreferrer"
            >
              LEON BROWN
            </a>
          </li>
        </ul>
      </div>
      <div className="list social">
        <h4>Social</h4>
        <ul>
          <li>
            <a
              className="text-link"
              href="https://www.facebook.com/bragazzis/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              className="text-link"
              href="https://www.instagram.com/bragazzis/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              className="text-link"
              href="https://www.tripadvisor.co.uk/Restaurant_Review-g186364-d3435970-Reviews-Bragazzis-Sheffield_South_Yorkshire_England.html"
              target="_blank"
              rel="noreferrer"
            >
              TripAdvisor
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
