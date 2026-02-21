import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import './Gallery.css';

import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg';
import img5 from '../assets/images/img5.jpg';
import img6 from '../assets/images/img6.jpg';
import img7 from '../assets/images/img7.jpg';
import img8 from '../assets/images/img8.jpg';
import img9 from '../assets/images/img9.jpg';
import img10 from '../assets/images/img10.jpg';

gsap.registerPlugin(ScrollTrigger);

const images = [
    { cls: 'img-1', speed: 1.1, src: img1 },
    { cls: 'img-2', speed: 0.7, src: img2 },
    { cls: 'img-3', speed: 1.4, src: img3 },
    { cls: 'img-4', speed: 0.9, src: img4 },
    { cls: 'img-5', speed: 1.3, src: img5 },
    { cls: 'img-6', speed: 0.6, src: img6 },
    { cls: 'img-7', speed: 1.5, src: img7 },
    { cls: 'img-8', speed: 0.8, src: img8 },
    { cls: 'img-9', speed: 1.2, src: img9 },
    { cls: 'img-10', speed: 0.5, src: img10 },
];

function Gallery() {
    const sectionRef = useRef(null);
    const imagesRef = useRef([]);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {

            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: 'top top',
                end: '+=2000',
                pin: true,
                scrub: true
            });

            imagesRef.current.forEach((img, i) => {
                const speed = images[i]?.speed ?? 1;

                gsap.fromTo(
                    img,
                    { y: speed * 80 },
                    {
                        y: () => -speed * 400,
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top top',
                            end: '+=2000',
                            scrub: 1.5,
                        },
                    }
                );
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const addToRefs = (el) => {
        if (el && !imagesRef.current.includes(el)) {
            imagesRef.current.push(el);
        }
    };

    return (
        <section id="gallery" className="gallery-screen" ref={sectionRef}>

            <Link to="/" className="back-btn">
                ← Home
            </Link>

            <div className="gallery-images-layer">
                {images.map(({ cls, src }, index) => (
                    <div
                        key={cls}
                        ref={addToRefs}
                        className={`gallery-parallax-image ${cls}`}
                    >
                        <img src={src} alt={`Sarvesh ${index + 1}`} />
                    </div>
                ))}
            </div>

            <div className="gallery-content">
                <h2 className="gallery-heading">this is also <br /> <span>Me</span> </h2>

            </div>

        </section >
    );
}

export default Gallery;