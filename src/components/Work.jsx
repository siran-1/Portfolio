import React from "react";
import { useSlideUp } from "../assets/customhooks/slideup"
import "../css/work.css"
import portfolio from "../assets/work-img/portfolio.png"
import algoview from "../assets/work-img/algoView.png"
import url from "../assets/work-img/url.png"
import github from "../assets/work-img/git.png"

export default function Work() {
    const { ref, className } = useSlideUp();
    const works = [
        { name: "AlgoView", img: `${algoview}`, src: 'https://algoviewjs.netlify.app/', desc: 'A Javascript Data Structures and Algorithm Visualizer. Built using react', live: true },
        { name: "Click for more", img: `${github}`, src: 'https://github.com/siran-1', desc: 'Checkout my github 🤓', live: false },
    ]
    function workrenderer(works) {
        return works.map((work, i) => (
            <div
                key={i}
                className={`work__div_child work__div_child_${i} article`}
                data-attribute={work.name}
                onClick={() => window.open(work.src, "__blank")}
                style={{ cursor: 'pointer' }}
            >
                <div className="article-wrapper">
                    {work.img && <figure>
                        <img src={work.img} alt={`Work ${i + 1}`} />
                    </figure>}
                    <div className="article-body">
                        <h2>{work.name}</h2>
                        <p>{work.desc}</p>
                        <a href={work.src} class="read-more" target="__blank">
                            {work.live ? "Live" : ''} <span class="sr-only">about this is some title</span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </a>

                    </div>
                </div>
            </div>
        ));
    }

    return (
        <section ref={ref} className={`work container section slide_up ${className}`} id="work">
            <h1>My Work</h1>
            <div className="work__div articles">
                {workrenderer(works)}
            </div>
        </section>
    )
}
