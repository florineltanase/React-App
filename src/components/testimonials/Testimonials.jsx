import React from 'react';
import "./testimonials.scss"
import r_arrow from '../../icons/right-arrow.png'
import yt from '../../icons/youtube.png'
import man from '../../icons/man1.jpg'

export default function testimonials() {
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                <div className="card">
                    <div className="top">
                        <img src={r_arrow} className="left" alt="" />
                        <img src={man} className="user" alt="" />
                        <img src={yt} className="right" alt="" />
                    </div>
                    <div className="center">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Necessitatibus sapiente maiores sequi laboriosam delectus deleniti.
                    </div>
                    <div className="bottom">
                        <h3>John</h3>
                        <h4>Director</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
