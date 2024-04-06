import React from "react";
import {useSlideUp} from "../assets/customhooks/slideup"

import "../css/contact.css"

export default function Contact(){
  const { ref, className } = useSlideUp();

    return(
        <section ref={ref} className={`contact container section slide_up ${className}`} id="contact">
      <div className="contact__contact_div">
          <div className="contact__left_hand">
            <h1 className="contact_left_hand_heading">Want to get in touch?</h1>
          </div>
          <div className="contact__right_hand">
            <div className="contact_form">
              <div><label className="contact_form_label" for="name">Name</label><br/>
                <input type="text" className="contact_form_input" id="name" placeholder="Enter your name"/></div>
              <div><label className="contact_form_label" for="email">Email Address</label><br/>
                <input type="email" className="contact_form_input" id="email" placeholder="Enter your email address"/></div>
              <div><label className="contact_form_label" for="message">Message</label><br/>
                <textarea className="contact_form_textarea" id="message" placeholder="Enter your message"></textarea>
              </div>
              <div>
                <button className="contact_form_btn" id="contact_form_btn">Submit</button>
              </div>
            </div>
          </div>
      </div>
    </section>
    )
}