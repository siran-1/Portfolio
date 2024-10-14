import React from "react";
import "../css/photo_gallery.css"
import IMG1 from "../assets/portfolio_gallery/IMG1.jpg"
import IMG2 from "../assets/portfolio_gallery/IMG2.jpg"
import IMG3 from "../assets/portfolio_gallery/IMG3.jpg"
import IMG4 from "../assets/portfolio_gallery/IMG4.jpg"

import { useSlideUp } from "../assets/customhooks/slideup"

export default function PhotoGallery() {
  const { ref, className } = useSlideUp();

  return (
    <section ref={ref} className={`photo_gallery container section slide_up ${className}`} id="photo_gallery">
      <div className="photo_row">
        <div className="photo1 photo"><img src={IMG1} alt="" /></div>
        <div className="photo2 photo"><img src={IMG2} alt="" /></div>
        <div className="photo3 photo"><img src={IMG3} alt="" /></div>
        <div className="photo4 photo"><img src={IMG4} alt="" /></div>
      </div>
    </section>
  )
}