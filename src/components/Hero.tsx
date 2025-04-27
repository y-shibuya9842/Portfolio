import React from "react";
import Image from 'next/image';
import "./Hero.css"

const Hero = () => {
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
            layout="responsive" // 親要素に合わせて自動で調整
            objectFit="contain" // 画像がコンテナ内に収まるように拡大・縮小
        />
    ));

    return (
        <section className="hero">
            <div className="background-slider">
                {imageElements} {/* 画像を繰り返し表示 */}
                {imageElements}
            </div>
            <div className="hero-content">
                <h2 className="hero-title">Welcome to My Portfolio!</h2>
                <p className="hero-subtitle">フロントエンドエンジニアとして活躍するため、日々勉強中。</p>
            </div>
        </section>
    )
}

export default Hero;