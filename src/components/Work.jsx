import React from "react";
import {useSlideUp} from "../assets/customhooks/slideup"
import "../css/work.css"
import work from "../assets/work-img/github.png"

export default function Work(){
  const { ref, className } = useSlideUp();
  const works = [
    {name:"portfolio", img:`${work}`},
    {name:"ToDoApp", img:`${work}`},
    {name:"URL Shortner", img:`${work}`}
  ]
  function workrenderer(works){
    return works.map((work,i) => (
      <div key={i} className="work__div_child" data-attribute={`${work.name}`}>
          <div className="work__body">
            <h4>{work.name}</h4>
            <div className="work__bg">
              <img src={work.img} alt={`Work ${i+1}`} />
            </div>
          </div>
        </div>
    ))
  }
    return (
    <section ref={ref} className={`work container section slide_up ${className}`}  id="work">
      <h1>My Work</h1>
      <div className="work__div">
        {workrenderer(works)}
      </div>
    </section>
    )
}