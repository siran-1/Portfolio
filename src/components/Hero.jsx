import React from "react"
import "../css/hero.css"
import "../css/blobs.css"
import hero from '../assets/favicon/hero.png'

export default function Hero() {
  return (
    <section className="hero container">
      <div className="blob__parent">
        <div className="blob-bg blob-1 blob"></div>
        <div className="blob-bg blob-2 blob"></div>
        <div className="blob-bg blob-3 blob"></div>
        <div className="blob-bg blob-4 blob"></div>
      </div>
      <div className="hero__title_div">
       <span className="hero_title">Hi👋 I'm Siran </span><img src={hero} alt="hero img" className="hero_img"/>
      </div>
      <div className="hero__description_div">
        <p className="hero__my_description"><q>A computer science graduate passionate about web design and development.
          I create web solutions with precision and simplicity, blending aesthetics and functionality seamlessly.</q><br/>
          <span className="">Scroll down to know more about me.</span></p>
      </div>
    </section>
  )
}