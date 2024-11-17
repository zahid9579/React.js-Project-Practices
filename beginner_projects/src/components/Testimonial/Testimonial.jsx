import React, { useState } from 'react';
import './Testimonial.css';

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            quote: 'This is the best project I have ever used!',
            author: 'Jane Doe',
        },
        {
            quote: 'I highly recommend this product to everyone.',
            author: 'John Smith',
        },
        {
            quote: 'This product has completely changed my life.',
            author: 'Huxn Alam',
        }
    ];

    const handlePrevClick = () => {
        setCurrentIndex((currentIndex + testimonials.length - 1) % testimonials.length);
    };

    const handleNextClick = () => {
        setCurrentIndex((currentIndex + 1) % testimonials.length);
    };

    return (
        <div className='testimonials'>
            <div className='testimonials-quote'>
                {testimonials[currentIndex].quote}
            </div>
            <div className='testimonials-author'>
                - {testimonials[currentIndex].author}
            </div>
            <div className='testimonials-nav'>
                <button onClick={handlePrevClick} aria-label="Previous Testimonial">Prev</button>
                <button onClick={handleNextClick} aria-label="Next Testimonial">Next</button>
            </div>
        </div>
    );
};

export default Testimonial;
