import React, { useEffect, useRef, useMemo } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SmoothScrollContext } from './useSmoothScroll';

export const SmoothScrollProvider = ({ children }) => {
    const lenisRef = useRef(null);

    useEffect(() => {
        const lenisInstance = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        lenisRef.current = lenisInstance;
        lenisInstance.on('scroll', ScrollTrigger.update);

        const update = (time) => {
            lenisInstance.raf(time * 1000);
        };

        gsap.ticker.add(update);
        gsap.ticker.lagSmoothing(0);

        return () => {
            lenisInstance.destroy();
            gsap.ticker.remove(update);
            lenisRef.current = null;
        };
    }, []);

    const contextValue = useMemo(() => ({
        scrollTo: (...args) => lenisRef.current?.scrollTo(...args),
        getInstance: () => lenisRef.current,
    }), []);

    return (
        <SmoothScrollContext.Provider value={contextValue}>
            {children}
        </SmoothScrollContext.Provider>
    );
};
