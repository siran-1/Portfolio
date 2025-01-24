import React, { useState } from "react";
import { useSlideUp } from "../assets/customhooks/slideup"

import "../css/about.css";

export default function About() {
    const { ref, className } = useSlideUp();
    // State to keep track of the currently active tab
    const [activeTab, setActiveTab] = useState("skills");

    // Function to change the active tab
    const selectTab = (newTab) => {
        setActiveTab(newTab);
    };

    return (
        <section ref={ref} className={`about container section ${className}`} id="about">
            <div className="about__me">
                <h1>My Career</h1>
                <p>
                    I worked for Amazon for almost two years as a customer service associate before moving into technology.
                    It was difficult to make the switch to a tech career.
                    I received numerous rejections and lost track of the progress of my applications over time.
                </p>
                <p> After two years, I was interviewed for an internal developer role in Amazon and
                    successfully (with a bit of luck) transitioned to a <strong>Full Stack Web Developer</strong> in Automation.
                    I developed products and tools that enhance operations of the Amazon employees.</p>
                <p>
                    After more than two years in the tech industry, I made the decision to pursue a master's degree in computer science, and I moved to Ireland from my native India.
                    This new stage of my academic career has improved me personally and given me new perspectives on a variety of technology and fields.
                    Currently, I work as a freelancer and am actively seeking new employment.
                </p>
            </div>
            <div className="about__me_tabs">
                <div className="tab__titles">
                    <button className={`tab_links ${activeTab === "skills" ? "active" : ""}`} onClick={() => selectTab("skills")}>Skills</button>
                    <button className={`tab_links ${activeTab === "education" ? "active" : ""}`} onClick={() => selectTab("education")}>Education</button>
                </div>
                <div className="tab_content_parent">
                    <div className={`tab_content ${activeTab === "skills" ? "active" : ""}`} id="skills">
                        <label>HTML/CSS</label>
                        <label>Bootstrap</label>
                        <label>jQuery</label>
                        <label>JavaScript ES6</label>
                        <label>MySQL</label>
                        <label>Java</label>
                        <label>React</label>
                        <label>GitHub</label>
                        <label>AWS</label>
                        <label>Node.js</label>
                        <label>Express.js</label>
                    </div>
                    <div className={`tab_content ${activeTab === "education" ? "active" : ""}`} id="education">
                        <p>I received a master's degree in cloud computing from the National College of Ireland, and I studied computer applications for my bachelor's degree at Bharathiar University.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
