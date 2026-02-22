import React from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';

import img1 from '../assets/images/img1.JPG';
import img2 from '../assets/images/img2.JPG';
import img3 from '../assets/images/img3.JPG';
import img4 from '../assets/images/img4.JPG';
import img5 from '../assets/images/img5.JPG';
import img6 from '../assets/images/img6.JPG';
import img7 from '../assets/images/img7.JPG';
import img8 from '../assets/images/img8.JPG';
import img9 from '../assets/images/img9.JPG';
import img10 from '../assets/images/img10.JPG';

export const images = [
    { cls: 'img-1', src: img1 },
    { cls: 'img-2', src: img2 },
    { cls: 'img-3', src: img3 },
    { cls: 'img-4', src: img4 },
    { cls: 'img-5', src: img5 },
    { cls: 'img-6', src: img6 },
    { cls: 'img-7', src: img7 },
    { cls: 'img-8', src: img8 },
    { cls: 'img-9', src: img9 },
    { cls: 'img-10', src: img10 },
];


function Gallery() {
    return (
        <section id="gallery" className="gallery-screen">
            <Link to="/" className="back-btn">← Home</Link>

            <div className="gallery-images-layer">
                {images.map(({ cls, src }, index) => (
                    <div key={cls} className={`gallery-parallax-image ${cls}`}>
                        <img src={src} alt={`Gallery ${index + 1}`} />
                    </div>
                ))}
            </div>

            <div className="gallery-content">
                <h2 className="gallery-heading">
                    this is also
                    <span>Me</span>
                </h2>
                <div className="gallery-rule" />
            </div>
        </section>
    );
}

export default Gallery;