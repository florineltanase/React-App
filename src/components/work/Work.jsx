import React from 'react';
import "./work.scss";
import tel from '../../icons/mobile.png'
import sql from'../../icons/sql.jpg'
import arr from '../../icons/arrow.png'

export default function work() {
  return(
      <div className="work" id="work">
        <div className="slider">
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={tel} alt="" />
                  </div>
                  <h2>Title</h2>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Explicabo amet quas molestias,dolor. 
                  </p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={sql} alt="" />

              </div>
            </div>
          </div>

        </div>
        <img src={arr} className="arrow left" alt="" />
        <img src={arr} className="arrow right" alt="" />

      </div>

  ) 
}
