"use client";

import React, { useState } from "react";
import { work } from "@/app/type/workType"; 
import './work.css'

type Props = {
    id: string;
    works: work[];
};

const Work = ({ id, works }: Props) => {
    works.map((work) =>  {
        console.log(JSON.stringify(work, null, 2));
    })
   
    return(
    <div id={id}>
        <h1 className="work-title">制作物一覧</h1>
        <div className="work-container grid">
            {works
                .map((work) => (
                    <div key={work.id} className="work col-12">
                        <div className="work-content-title">
                            <h2>{work.title}</h2>
                        </div>
                        <div className="work-content">
                            <div className="work-image">
                                <img src={work.image.url} alt="制作物画像"  />
                            </div>
                            <div className="work-abouts">
                                <div className="work-description">
                                    <h4>概要：</h4>
                                    <div dangerouslySetInnerHTML={{ __html: work.description }}/>
                                </div>
                                <div className="work-link">
                                    <h4>リンク：</h4>
                                    <p><a href={work.page} target="_blank" rel="noopener noreferrer">アプリページリンク</a></p>
                                    <br />
                                    <p><a href={work.github} target="_blank" rel="noopener noreferrer">GitHubリンク</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    </div>
    )
}

export default Work;