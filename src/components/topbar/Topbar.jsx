import React from 'react';
import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"

export default function topbar({menuOpen,setMenuOpen}) {
  return (
      <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
          <div className="left">
            <a href="#intro" className="logo">logo</a>
            <div className="itemContainer">
              <Person className="icon"/>
              <span>+40754577072</span>
            </div>
            <Mail className="icon"/>
            <span>tanaseflorinelalexandru@gmail.com</span>
          </div>
          <div className="right">
            <div className="hamburger" onClick={() =>setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
        </div>

      </div>
  )
}
