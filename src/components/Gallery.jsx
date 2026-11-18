import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';
import { images } from '../data/galleryData';

function Gallery() {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Prevent body scroll when image is enlarged
    useEffect(() => {
        if (selectedImageIndex !== null) {
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = '';
            };
        }
    }, [selectedImageIndex]);

    const handleNext = useCallback((e) => {
        if (e) e.stopPropagation();
        setSelectedImageIndex((prev) => (prev + 1) % images.length);
    }, []);

    const handleClose = useCallback(() => {
        setSelectedImageIndex(null);
    }, []);

    // Keyboard navigation (ArrowRight to advance, Escape to close)
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedImageIndex === null) return;
            if (e.key === 'Escape') handleClose();
            if (e.key === 'ArrowRight' || e.key === ' ') handleNext();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImageIndex, handleClose, handleNext]);

    return (
        <section id="gallery" className="gallery-screen">
            <Link to="/" viewTransition className="gallery-home-btn" aria-label="Back to Portfolio">
                <div className="home-btn-icon" aria-hidden="true">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 19"></polyline>
                    </svg>
                </div>
                <span className="home-btn-label">Home</span>
            </Link>

            <div className="gallery-scatter-grid">
                {images.map(({ cls, src, alt }, index) => (
                    <div
                        key={index}
                        className={`gallery-parallax-image ${cls}`}
                        onClick={() => setSelectedImageIndex(index)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') setSelectedImageIndex(index);
                        }}
                    >
                        <img src={src} alt={alt} decoding="async" />
                        <div className="image-expand-hint" aria-hidden="true">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <polyline points="9 21 3 21 3 15"></polyline>
                                <line x1="21" y1="3" x2="14" y2="10"></line>
                                <line x1="3" y1="21" x2="10" y2="14"></line>
                            </svg>
                            <span>Expand</span>
                        </div>
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

            {/* Enlarged Image View */}
            {selectedImageIndex !== null && (
                <div className="enlarged-overlay" onClick={handleClose}>
                    <div className="enlarged-container" onClick={(e) => e.stopPropagation()}>
                        <div className="enlarged-image-wrap">
                            <img
                                src={images[selectedImageIndex].src}
                                alt={images[selectedImageIndex].alt}
                                className="enlarged-img"
                            />
                        </div>

                        {/* Cross icon in circle appears to the right out of the image container */}
                        <button
                            type="button"
                            className="enlarged-close-btn"
                            onClick={handleClose}
                            aria-label="Close enlarged view"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Gallery;
