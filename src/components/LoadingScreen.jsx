import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { images } from './Gallery';
import './LoadingScreen.css';

function LoadingScreen({ onComplete }) {
    const [progress, setProgress] = useState(0);
    const containerRef = useRef(null);
    const counterRef = useRef(null);

    useEffect(() => {
        let loadedCount = 0;
        const totalImages = images.length;

        // Ensure minimum artificial loading time for smooth UX
        const startTime = Date.now();
        const minLoadingTime = 1500; // 1.5s

        // Target progress for GSAP interpolation
        const progressTarget = { value: 0 };

        const updateProgress = (newLoadedCount) => {
            const rawProgress = Math.min(((newLoadedCount / totalImages) * 100), 100);

            gsap.to(progressTarget, {
                value: rawProgress,
                duration: 0.5,
                ease: 'power2.out',
                onUpdate: () => {
                    setProgress(Math.floor(progressTarget.value));
                }
            });
        };

        const handleComplete = () => {
            gsap.to(progressTarget, {
                value: 100,
                duration: 0.8,
                ease: 'power3.out',
                onUpdate: () => setProgress(Math.floor(progressTarget.value)),
                onComplete: () => {
                    const elapsed = Date.now() - startTime;
                    const remainingDelay = Math.max(0, minLoadingTime - elapsed);

                    setTimeout(() => {
                        gsap.to(containerRef.current, {
                            yPercent: -100,
                            opacity: 0,
                            duration: 1.2,
                            ease: 'expo.inOut',
                            onComplete: onComplete
                        });
                    }, remainingDelay);
                }
            });
        };

        if (totalImages === 0) {
            handleComplete();
            return;
        }

        const imageUrls = images.map(img => typeof img === 'string' ? img : img.src);

        imageUrls.forEach(src => {
            const img = new Image();
            img.onload = () => {
                loadedCount++;
                updateProgress(loadedCount);
                if (loadedCount === totalImages) {
                    handleComplete();
                }
            };
            img.onerror = () => {
                // Keep moving forward even if an image fails to load
                loadedCount++;
                updateProgress(loadedCount);
                if (loadedCount === totalImages) {
                    handleComplete();
                }
            };
            img.src = src;
        });

    }, [onComplete]);

    return (
        <div className="loading-screen" ref={containerRef}>
            <div className="loading-content">
                <div className="loading-counter" ref={counterRef}>
                    {progress}%
                </div>
                <div className="loading-bar-container">
                    <div className="loading-bar" style={{ width: `${progress}%` }}></div>
                </div>
            </div>
        </div>
    );
}

export default LoadingScreen;
