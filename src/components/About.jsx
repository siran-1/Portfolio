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
        <section ref={ref} className={`about container section slide_up ${className}`} id="about">
            <div className="about__me">
                <h1>My Career</h1>
                <p>
                    Before switching to a tech role, I spent two years as a <strong>Customer Service Associate</strong> at Amazon.
                    The transition to tech role was indeed hard. Multiple rejections, countless applications and over time
                    I lost track of my application's status.</p>

                <p> After two years, I was interviewed for an internal developer role in Amazon and
                    successfully (with a bit of luck) transitioned to a <strong>Full Stack Web Developer</strong> in Automation.
                    Now with over 2 years of experience in the tech field, my enthusiasm for this path continues to grow. I do struggle, sometimes even with the fundamentals (Regex?👀),
                    but still learning and I sure believe that learning has no end.
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
                        <p>During my undergraduate studies, I pursued a Bachelor's degree in Commerce with Computer Applications at Bharathiar University.
                            Currently, I am enrolled in Master's program in Cloud Computing at National College of Ireland.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
