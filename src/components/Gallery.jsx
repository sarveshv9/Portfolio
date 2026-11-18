import React from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';
import { images } from '../data/galleryData';

function Gallery() {
    return (
        <section id="gallery" className="gallery-screen">
            <Link to="/" className="back-btn">← Home</Link>

            <div className="gallery-scatter-grid">
                {images.map(({ cls, src, alt }, index) => (
                    <div key={index} className={`gallery-parallax-image ${cls}`}>
                        <img src={src} alt={alt} loading="lazy" decoding="async" />
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