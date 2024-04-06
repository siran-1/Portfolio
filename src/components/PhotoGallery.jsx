import React from "react";
import "../css/photo_gallery.css"
import IMG1 from "../assets/portfolio_gallery/IMG1.jpg"
import IMG2 from "../assets/portfolio_gallery/IMG2.jpg"
import IMG3 from "../assets/portfolio_gallery/IMG3.jpg"
import IMG4 from "../assets/portfolio_gallery/IMG4.jpg"
import IMG1_1 from "../assets/portfolio_gallery/IMG1_1.jpg"
import IMG2_1 from "../assets/portfolio_gallery/IMG2_1.jpg"
import IMG3_1 from "../assets/portfolio_gallery/IMG3_1.jpg"
import IMG4_1 from "../assets/portfolio_gallery/IMG4_1.jpg"

import {useSlideUp} from "../assets/customhooks/slideup"

export default function PhotoGallery(){
  const { ref, className } = useSlideUp();

    return (
    <section ref={ref} className={`photo_gallery container section slide_up ${className}`} id="photo_gallery">
      <div className="photo_row">
        <div className="photo_column">
          <img className="pg1" src={IMG1}/>
          <img className="pg5" src={IMG3}/>
        </div>
        <div className="photo_column">
          <img className="pg2" src={IMG1_1}/>
          <img className="pg6" src={IMG3_1}/>
        </div>
        <div className="photo_column">
          <img className="pg7" src={IMG4}/>
          <img className="pg3" src={IMG2}/>
        </div>
        <div className="photo_column">
          <img className="pg4" src={IMG2_1}/>
          <img className="pg8" src={IMG4_1}/>
        </div>
      </div>
    </section>
    )
}