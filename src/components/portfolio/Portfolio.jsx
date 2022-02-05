import React from 'react';
import "./portfolio.scss"
import logo from '../../icons/xbox.png'
import logo1 from '../../icons/unawaresn.png'
import logo2 from '../../icons/thing.png'
import logo3 from '../../icons/images1.png'
import logo4 from '../../icons/Amber.png'
import logo5 from '../../icons/PlayStation.jpg'
import lnkd from '../../icons/linkedin.png'
import yt from '../../icons/youtube.png'
import twt from '../../icons/twitter.png'

export default function Portfolio() {
  return (
  <div className="portfolio" id="portfolio">
      <h1>My portfolio</h1>
      <ul>
          <li  className="active">Featured</li>
          <li>Webbing</li>
          <li>Mobile</li>
          <li>Thing1</li>
          <li>Thing2</li>
      </ul>
      <div className="container">
          <div className="item">
              <img src={logo} alt="" />
              <h3>Another app</h3>
          </div>
          <div className="item">
              <img src={logo1} alt="" />
              <h3>Another app</h3>
          </div>
          <div className="item">
              <img src={logo2} alt="" />
              <h3>Another app</h3>
          </div>
          <div className="item">
              <img src={logo3} alt="" />
              <h3>Another app</h3>
          </div>
          <div className="item">
              <img src={logo4} alt="" />
              <h3>Another app</h3>
          </div>
          <div className="item">
              <img src={logo5} alt="" />
              <h3>Another app</h3>
          </div>
      </div>

      <div className="socialMedia">
          <img src={lnkd} className="linked" alt="" />
          <img src={yt}  className="ytb" alt="" />
          <img src={twt} className="twt" alt="" />
      </div>

  </div>
  )
}
