import React from "react";
import type { JSX } from 'react'
import Image from 'next/image';
import "./Hero.css"

const Hero = (): JSX.Element => {
    const imagePaths = [
        "/ts-logo-round-512.png",
        "/next-js.svg",
        "/react-2.svg",
        "/Node.js_logo.svg.png",
        "/js.jpg"
    ];

    const imageElements = imagePaths.map((src, index) => (
        <Image 
            key={index} 
            src={src} 
            alt={`logo-${index}`}
            width={300}
            height={300}  // 高さも指定
        />
    ));

    return (
        <section className="hero">
            <div className="background-slider">
                <div className="slide-inner">
                    {imageElements}
                    {imageElements}
                </div>
            </div>
            <div className="hero-content">
                <h2 className="hero-title">Welcome to My Portfolio!</h2>
                <p className="hero-subtitle">フロントエンドエンジニアとして活躍するため、日々勉強中。</p>
            </div>
        </section>
    )
}

export default Hero;