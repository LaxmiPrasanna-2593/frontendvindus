import React, { useState, useEffect } from 'react';
import '../styles/homebanner.css';
import Banner from '../assets/homeba.jpeg';
import Banner2 from '../assets/homebanner.jpg';
import Banner3 from '../assets/homemainbanner.jpg';
import Banner4 from '../assets/homebanner1.jpg';


const Carousel = () => {
    const slides = [
        { id: 1, image: Banner, title: 'Welcome to Vindus Environment Our Software Platform', description: 'Unlock the power of innovative software solutions with our cutting-edge SEO tools.' },
        { id: 2, image: Banner2, title: 'Welcome to Vindus Environment Our Software Platform', description: 'Unlock the power of innovative software solutions with our cutting-edge SEO tools.' },
        { id: 3, image: Banner3, title: 'Welcome to Vindus Environment Our Software Platform', description: 'Unlock the power of innovative software solutions with our cutting-edge SEO tools.' },
        { id: 4, image: Banner4, title: 'Welcome to Vindus Environment Our Software Platform', description: 'Unlock the power of innovative software solutions with our cutting-edge SEO tools.' },

    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000); 
        return () => clearInterval(interval); 
    }, []);

    return (
        <div className="carousel">
            <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {slides.map((slide) => (
                    <div className="carousel-slide" key={slide.id}>
                        <img src={slide.image} alt={slide.title} />
                        <div className="carousel-caption">
                            <h2 className='slide-title'>{slide.title}</h2>
                            <p className='slide-description'>{slide.description}</p>
                            <button className="explore-button">Explore More</button>
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-button prev" onClick={prevSlide}>❮</button>
            <button className="carousel-button next" onClick={nextSlide}>❯</button>
        </div>
    );
};

export default Carousel;
