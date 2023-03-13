import React from "react"
import img1 from "../images/img1.jpg"

function Header() {
  return (
    <div className="header-container">
      <img className="header-img" src={img1} alt="header-img" />
      <h1 className="header-title">Levi's Dinner</h1>
      <p className="header-params">The best burgers in town.</p>
    </div>
  )
}

export default Header