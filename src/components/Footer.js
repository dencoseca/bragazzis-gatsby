import React from "react"

function Footer() {
  return (
    <footer>
      <div className="list contact">
        <h4>Contact</h4>
        <ul>
          <li>
            <p>224-228 Abbeydale Road</p>
            <p>Sheffield</p>
            <p>S7 1FL</p>
          </li>
          <li>
            <a href="mailto:info@braazzis.co.uk">info@bragazzis.co.uk</a>
          </li>
          <li>
            <a href="tel:+441142581483">0114 258 1483</a>
          </li>
        </ul>
      </div>
      <div className="list site">
        <h4>Site</h4>
        <ul>
          <li>&copy; 2020 Bragazzi's Ltd</li>
          <li>
            photography by{" "}
            <a href="https://www.maytreephotography.co.uk">maytree</a>
          </li>
          <li>
            site by <a href="https://leonbrown.dev">LEON BROWN</a>
          </li>
        </ul>
      </div>
      <div className="list social">
        <h4>Social</h4>
        <ul>
          <li>
            <a href="https://www.facebook.com/bragazzis/">Facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com/bragazzis/">Instagram</a>
          </li>
          <li>
            <a href="https://www.tripadvisor.co.uk/Restaurant_Review-g186364-d3435970-Reviews-Bragazzis-Sheffield_South_Yorkshire_England.html">
              TripAdvisor
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
