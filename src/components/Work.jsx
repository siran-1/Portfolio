import React from "react";
import { useSlideUp } from "../assets/customhooks/slideup"
import "../css/work.css"
import work from "../assets/work-img/github.png"
import netlify from "../assets/work-img/Netlify.png"


export default function Work() {
  const { ref, className } = useSlideUp();
  const works = [
    { name: "AlgoView", img: `${netlify}`, src: 'https://algoviewjs.netlify.app/' },
    { name: "Portfolio", img: `${work}`, src: 'https://github.com/siran-1/Portfolio' },
    { name: "URLShortner API", img: `${work}`, src: 'https://github.com/siran-1/linkShortnerAPI' },
    { name: "Click for more", img: `${work}`, src: 'https://github.com/siran-1' },
  ]
  function workrenderer(works) {
    return works.map((work, i) => (
      <div
        key={i}
        className={`work__div_child work__div_child_${i}`}
        data-attribute={work.name}
        onClick={() => window.open(work.src, "__blank")}
        style={{ cursor: 'pointer' }}
      >
          <h4>{work.name}</h4>
          <img src={work.img} alt={`Work ${i + 1}`} />
      </div>
    ));
  }

  return (
    <section ref={ref} className={`work container section slide_up ${className}`} id="work">
      <h1>My Work</h1>
      <div className="work__div">
        {workrenderer(works)}
      </div>
    </section>
  )
}