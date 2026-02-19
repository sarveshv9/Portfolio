import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

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
    { cls: 'img-1', speed: 1.1, src: img1, alt: 'workspace' },
    { cls: 'img-2', speed: 0.7, src: img2, alt: 'portrait' },
    { cls: 'img-3', speed: 1.4, src: img3, alt: 'coding' },
    { cls: 'img-4', speed: 0.9, src: img4, alt: 'person' },
    { cls: 'img-5', speed: 1.3, src: img5, alt: 'office' },
    { cls: 'img-6', speed: 0.6, src: img6, alt: 'landscape' },
    { cls: 'img-7', speed: 1.5, src: img7, alt: 'laptop' },
    { cls: 'img-8', speed: 0.8, src: img8, alt: 'model' },
    { cls: 'img-9', speed: 1.2, src: img9, alt: 'portrait 2' },
    { cls: 'img-10', speed: 0.5, src: img10, alt: 'nature' },
];

function About() {
    const sectionRef = useRef(null);
    const imagesRef = useRef([]);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Text reveal
            gsap.fromTo('.about-text p',
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 60%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );

            // Individual parallax per image
            imagesRef.current.forEach((img, i) => {
                const speed = images[i]?.speed ?? 1;
                gsap.to(img, {
                    y: () => -speed * 35,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1.5,
                    },
                });
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
        <section id="about" className="about-screen" ref={sectionRef}>

            {/* Scattered images */}
            <div className="images-layer">
                {images.map(({ cls, src, alt }) => (
                    <div key={cls} ref={addToRefs} className={`parallax-image ${cls}`}>
                        <img src={src} alt={alt} />
                    </div>
                ))}
            </div>

            {/* Center content */}
            <div className="about-content">
                <h2 className="about-heading">About</h2>
                <div className="about-text">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                </div>
            </div>

        </section>
    );
}

export default About;