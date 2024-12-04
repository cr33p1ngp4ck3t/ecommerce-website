"use client"

import React, { useState } from 'react';
import '../styles/page-interior.css'

const images = [
    { src: 'https://i.postimg.cc/141NBTdh/image.png', description: '01 — Bed Room', title: 'Inner Peace', width: '130%', height: '80%' },
    { src: 'https://i.postimg.cc/tC6f2MTr/image.png', description: '02 — Living Room', title: 'Cozy Vibes', width: '130%', height: '80%' },
    { src: 'https://i.postimg.cc/XNmmKbVG/image.png', description: '03 — Dining Room', title: 'Modern Touch', width: '130%', height: '80%' },
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleArrowClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="container">
            <div style={{ transform: `translateX(-${currentIndex * 10}%)`}} className="image-container" >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`image ${currentIndex === index ? 'active' : ''}`}
                        style={{
                            backgroundImage: `url(${image.src})`,
                            width: currentIndex === index ? image.width:'60%',
                            height: currentIndex === index ? image.height:'50%',
                            opacity: currentIndex === index ? 1 : 0.8,
                            transition: 'opacity 0.5s ease',
                        }}
                    >
                        {currentIndex === index && (
                            <div className="text-overlay">
                                <p>{image.description}</p>
                                <h1>{image.title}</h1>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <button className="arrow" onClick={handleArrowClick}>{`>`}</button>
            <div className="dots">
                {images.map((_, i) => (
                    <div
                        key={i}
                        className={`dot ${i === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(i)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
