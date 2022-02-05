import React from 'react';
import "./intro.scss"
import man from '../../icons/man.png'




export default function intro() {
  return (
      <div className="intro" id="intro">
        <div className="left">
          <div className="imgContainer">
            <img src={man} alt="" /> 
          </div>
          <h1>Disclaimer: Thats not me</h1>

        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hi There, its a me Florinel </h2>
            <h1>and I'm a student</h1>
          </div>

        </div>
            
      </div>
  )
}
