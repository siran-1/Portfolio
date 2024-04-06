import React from "react";
import {useSlideUp} from "../assets/customhooks/slideup"
import "../css/work.css"
import work from "../assets/work-img/github.png"

export default function Work(){
  const { ref, className } = useSlideUp();
  const works = [
    {name:"portfolio", img:`${work}`, src:'https://github.com/siran-1/Portfolio'},
    {name:"ToDoApp", img:`${work}`, src:'https://github.com/siran-1/Portfolio'},
    {name:"URL Shortner", img:`${work}`, src:'https://github.com/siran-1/Portfolio'}
  ]
  function workrenderer(works){
    return works.map((work,i) => (
      <div key={i} className="work__div_child" data-attribute={`${work.name}`}>
          <div className="work__body">
            <a href={`${work.src}`} target="__blank"><h4>{work.name}</h4></a>
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