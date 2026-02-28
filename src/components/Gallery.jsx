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
    { cls: 'sc-img-1', src: img1, alt: "Gallery Image 1" },
    { cls: 'sc-img-2', src: img5, alt: "Gallery Image 2" },
    { cls: 'sc-img-3', src: img3, alt: "Gallery Image 3" },
    { cls: 'sc-img-4', src: img4, alt: "Gallery Image 4" },
    { cls: 'sc-img-5', src: img2, alt: "Gallery Image 5" },
    { cls: 'sc-img-6', src: img6, alt: "Gallery Image 6" },
    { cls: 'sc-img-7', src: img7, alt: "Gallery Image 7" },
    { cls: 'sc-img-8', src: img8, alt: "Gallery Image 8" },
    { cls: 'sc-img-9', src: img9, alt: "Gallery Image 9" },
    { cls: 'sc-img-10', src: img10, alt: "Gallery Image 10" },
    { cls: 'sc-img-11', src: img1, alt: "Gallery Image 11" },
    { cls: 'sc-img-12', src: img6, alt: "Gallery Image 12" },
    { cls: 'sc-img-13', src: img2, alt: "Gallery Image 13" },
    { cls: 'sc-img-14', src: img5, alt: "Gallery Image 14" },
];

function Gallery() {
    return (
        <section id="gallery" className="gallery-screen">
            <Link to="/" className="back-btn">← Home</Link>

            <div className="gallery-scatter-grid">
                {images.map(({ cls, src, alt }, index) => (
                    <div key={index} className={`gallery-parallax-image ${cls}`}>
                        <img src={src} alt={alt} />
                    </div>
                ))}

                <div className="gallery-content">
                    <h2 className="gallery-heading">
                        this is also
                        <span>Me</span>
                    </h2>
                    <div className="gallery-rule" />
                </div>
            </div>
        </section>
    );
}

export default Gallery;