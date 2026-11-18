import React, { useEffect, useRef } from 'react';
import heroBgSrc from '../assets/images/hero-bg.png';
import './TopographicGrid.css';

/**
 * TopographicGrid
 * - Uses the exact uploaded background image
 * - Scaled up (very zoomed in)
 * - Ultra-slow right-to-left ambient pan
 * - Technical CAD / blueprint grid overlay with intersection dots
 */
function TopographicGrid() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId;
        let isRunning = true;
        let offset = 0;
        let lastTime = performance.now();

        const img = new Image();
        img.src = heroBgSrc;

        const resize = () => {
            if (!canvas) return;
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            const rect = canvas.getBoundingClientRect();
            canvas.width = Math.max(1, Math.floor(rect.width * dpr));
            canvas.height = Math.max(1, Math.floor(rect.height * dpr));
            ctx.imageSmoothingEnabled = false;
        };

        window.addEventListener('resize', resize);
        resize();

        const render = (now) => {
            if (!isRunning) return;

            const dt = Math.min((now - lastTime) * 0.001, 0.1);
            lastTime = now;

            const w = canvas.width;
            const h = canvas.height;

            if (w > 0 && h > 0 && img.complete && img.naturalWidth > 0) {
                ctx.imageSmoothingEnabled = false;

                // 1. Very Zoomed-in Scaling (2.4x height)
                const imgAspect = img.naturalWidth / img.naturalHeight;
                const zoom = 2.4;
                const tileH = Math.ceil(h * zoom);
                const tileW = Math.ceil(tileH * imgAspect);
                const posY = Math.round((h - tileH) / 2);

                // 2. Very slow movement: ~6px per second
                const dpr = Math.min(window.devicePixelRatio || 1, 2);
                const speed = 6 * dpr;

                // Move from right to left
                offset = (offset + speed * dt) % tileW;

                // Draw continuous tiles
                const startX = -offset;
                for (let x = startX; x < w; x += tileW) {
                    ctx.drawImage(img, x, posY, tileW, tileH);
                }

                // 3. Technical Blueprint / CAD Grid Overlay
                const gridStep = 60 * dpr;
                ctx.save();
                ctx.strokeStyle = 'rgba(74, 222, 128, 0.13)';
                ctx.lineWidth = 1;

                ctx.beginPath();
                for (let gx = 0; gx <= w; gx += gridStep) {
                    ctx.moveTo(gx + 0.5, 0);
                    ctx.lineTo(gx + 0.5, h);
                }
                for (let gy = 0; gy <= h; gy += gridStep) {
                    ctx.moveTo(0, gy + 0.5);
                    ctx.lineTo(w, gy + 0.5);
                }
                ctx.stroke();

                // Subtle intersection dots where grid lines cross
                ctx.fillStyle = 'rgba(110, 240, 170, 0.28)';
                const dotRadius = 1.5 * dpr;
                for (let gx = 0; gx <= w; gx += gridStep) {
                    for (let gy = 0; gy <= h; gy += gridStep) {
                        ctx.beginPath();
                        ctx.arc(gx + 0.5, gy + 0.5, dotRadius, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
                ctx.restore();
            } else {
                ctx.fillStyle = '#042a1f';
                ctx.fillRect(0, 0, w, h);
            }

            animationFrameId = requestAnimationFrame(render);
        };

        if (img.complete) {
            animationFrameId = requestAnimationFrame(render);
        } else {
            img.onload = () => {
                if (isRunning) {
                    resize();
                    animationFrameId = requestAnimationFrame(render);
                }
            };
        }

        return () => {
            isRunning = false;
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <div className="topographic-canvas-wrap" aria-hidden="true">
            <canvas ref={canvasRef} className="topographic-canvas" />
        </div>
    );
}

export default TopographicGrid;
