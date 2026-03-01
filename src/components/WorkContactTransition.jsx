import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './WorkContactTransition.css';

gsap.registerPlugin(ScrollTrigger);

function WorkContactTransition() {
    const transitionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Animate the background from light to dark as you scroll through
            gsap.to(transitionRef.current, {
                scrollTrigger: {
                    trigger: transitionRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
                '--progress': 1,
                ease: 'none',
            });

            // Fade in the decorative line
            gsap.fromTo('.wc-transition-line', 
                { scaleX: 0 },
                {
                    scrollTrigger: {
                        trigger: transitionRef.current,
                        start: 'top 70%',
                        end: 'center center',
                        scrub: true,
                    },
                    scaleX: 1,
                    ease: 'none',
                }
            );
        }, transitionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="wc-transition" ref={transitionRef}>
            <div className="wc-transition-inner">
                <div className="wc-transition-line" />
            </div>
        </div>
    );
}

export default WorkContactTransition;
