import React from "react";
import { useSlideUp } from "../assets/customhooks/slideup"

import "../css/contact.css"

export default function Contact() {
  const { ref, className } = useSlideUp();

  return (
    <section ref={ref} className={`contact container section ${className}`} id="contact">
      <div className="contact__contact_div">
        <div className="contact__left_hand">
          <h1 className="contact_left_hand_heading">Want to get in touch?</h1>
        </div>
        <div className="contact__right_hand">
          <p className="contact_text">
            Send me an email at siranjeevik21@gmail.com or connect with me on:
          </p>
          <div className="contact_buttons">
            <a href="https://www.instagram.com/_._siran_._/" target="_blank" className="contactLinks"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/siran28/" target="_blank" className="contactLinks"><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://www.github.com/siran-1" target="_blank" className="contactLinks"><i class="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}