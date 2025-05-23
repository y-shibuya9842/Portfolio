"use client";

import React, { useState } from "react";
import { skill } from "@/app/type/skillType"; 
import './skill.css'

type Props = {
    id: string;
    skills: skill[];
};

const Skill = ({ id, skills }: Props) => {
    console.log(skills)
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const buttons = ["all", "frontend", "backend", "db", "markup-and-style", "others"]
    

    return(
    <div id={id}>
        <h1 className="skill-title">スキル</h1>
        <div className="btn grid">
            {buttons.map((button) => (
                <button className={`${button} col-2 col-4-md col-6-sm`} key={button} onClick={() => setSelectedCategory(button)}>{button.toUpperCase()}</button>
            ))}
        </div>
        <div className="skill-container grid">
            {skills
                .filter(
                    (skill) =>
                        selectedCategory === "all" || skill.category === selectedCategory
                )
                .map((skill) => (
                    <div key={skill.id} className={`${skill.category} skill col-4 col-6-md col-12-sm`}>
                        <div className="skill-name">
                            <p>技術 : </p>
                            <p>{skill.name}</p>
                        </div>
                        <div className="skill-name">
                            <p>経験年数 : </p>
                            <p>{skill.year}</p>
                        </div>
                        <div className="skill-skill">
                            <p>理解度 : </p>
                            <p>
                                {Array.from({ length: 5 }, (_, index) => (
                                    index < skill.skill ? "★" : "☆"
                                ))}
                            </p>
                        </div>
                        <div className="skill-about">
                            <p>説明 : </p>
                            <div dangerouslySetInnerHTML={{ __html: skill.about }} />
                        </div>
                    </div>
                ))}
        </div>
    </div>
    )
}

export default Skill;