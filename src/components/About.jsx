import React, { useState } from "react";
import {useSlideUp} from "../assets/customhooks/slideup"

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
        <section ref={ref} className={`about container section slide_up ${className}`} id="about">
            <div className="about__me">
                <h1>My Career</h1>
                <p>
                    Before making a switch to a tech role, I spent nearly two years as a <strong>Customer Service Associate</strong>👨🏼‍💻 at Amazon. 
                    The transition to a tech role was indeed hard. Multiple rejections, countless Applications, over time 
                    I started losing the track of status of all my Applications.</p>

                <p> After two years in my Support role, I was interviewed for a internal developer role in amazon and 
                    successfully (with a bit of luck) I transitioned to the role of <strong>Full Stack Web Developer</strong> in Automation.
                    Now With over 2 years of experience in the tech field, my enthusiasm for this path continues to grow. I do struggle a lot, sometimes even with fundamentals (Regex?🥲), 
                    but still learning and I sure believe the learning has no end.
                        <blockquote className="blockquote" cite="https://en.wikipedia.org/wiki/Citizenship_in_a_Republic">
                        <p>How big would you dream if you knew you couldn’t fail?</p>
                        </blockquote>
                    <small><figcaption></figcaption></small>
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
                        <label>BOOTSTRAP</label>
                        <label>JQUERY</label>
                        <label>JAVASCRIPT ES6</label>
                        <label>MYSQL</label>
                        <label>JAVA</label>
                        <label>React</label>
                        <label>GitHub</label>
                        <label>AWS</label>
                        <label>Node.js</label>
                        <label>Express.js</label>
                    </div>
                    <div className={`tab_content ${activeTab === "education" ? "active" : ""}`} id="education">
                        <p>During my undergraduate studies, I pursued a Bachelor's degree in Commerce with Computer Applications at Bharathiar University.
                            Currently, I am enrolled in Master's program in Cloud Computing at National College in Ireland.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
