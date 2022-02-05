import React from "react";
import "./contact.scss"
import shake from '../../icons/shake.svg'

 export default function Contact(){
     return (
         <div className="contact" id = "contact">
             <div className="left">
                 <img src={shake} alt="" />
             </div>
             <div className="right">
                 <h2>Contact me</h2>
                 <form>
                 <input type="text" placeholder="Email" />
                 <textarea placeholder="Message"></textarea>
                 <button type="submit">Send</button>
                 </form>
                 
             </div>

         </div>
     )
 }